import fs from 'node:fs';import assert from 'node:assert/strict';import * as T from './dist/vendor/three.module.js';import {enrichBoards} from './dist/cad-metadata.mjs';import {loadManufacturerModels,manufacturerComponent} from './dist/manufacturer-models.mjs';
globalThis.fetch=async path=>new Response(fs.readFileSync('dist/'+path.replace(/^\.\//,'')));
const c=await loadManufacturerModels(),board=enrichBoards(JSON.parse(fs.readFileSync('dist/data/boards.json'))).find(b=>b.id==='computer');let loaded=0,triangles=0;const unusual=[];
for(const el of board.elements){const g=new T.Group();if(!manufacturerComponent(T,el,g,board.pads.filter(p=>p.element===el.name)))continue;loaded++;g.updateMatrixWorld(true);const b=new T.Box3().setFromObject(g),size=b.getSize(new T.Vector3());assert([size.x,size.y,size.z].every(Number.isFinite));assert(size.length()>0);if(b.min.x<board.bounds[0]-15||b.max.x>board.bounds[2]+15||b.min.y<board.bounds[1]-15||b.max.y>board.bounds[3]+15)throw Error('Model outside board: '+el.name+' '+JSON.stringify(b));if((!el.mirror&&b.min.z< -3)||(el.mirror&&b.max.z>3))unusual.push({ref:el.name,z:[b.min.z,b.max.z],source:c.placements[el.name].file});g.traverse(o=>{if(o.isMesh)triangles+=o.geometry.index.count/3;});}
assert(loaded>300);console.log(JSON.stringify({loaded,triangles,unusual},null,2));
// Catch the source project's substituted 289/81-ball packages and paste duplicates.
for(const [ref,count,w,d,h] of [['U1',396,15,15,1.3],['U2',96,13.3,10,1.1],['U3',96,13.3,10,1.1],['Q3',4,3.2,2.5,.8],['Q4',4,3.2,2.5,.8]]){
 const el=board.elements.find(e=>e.name===ref),pads=board.pads.filter(p=>p.element===ref),g=new T.Group();assert(manufacturerComponent(T,el,g,pads));g.updateMatrixWorld(true);const contacts=[];g.traverse(o=>{if(['ball','terminal'].includes(o.userData.part))contacts.push(o);});assert.equal(contacts.length,count,ref+' physical contacts');
 const bounds=new T.Box3().setFromObject(g),size=bounds.getSize(new T.Vector3());assert(Math.abs(size.x-w)<.001&&Math.abs(size.y-d)<.001&&Math.abs(size.z-h)<.003,ref+' envelope '+size.toArray());
 for(const m of contacts){const v=m.getWorldPosition(new T.Vector3());if(m.userData.part==='ball')assert(pads.some(p=>p.pin===m.userData.pin&&Math.hypot(v.x-p.x,v.y-p.y)<1e-6),ref+' ball alignment');assert(el.mirror?v.z< -1.6:v.z>0,ref+' assembly face');}
}
console.log('PASS: A64 396 + DDR 96/96 balls; ABM8 4/4 terminals; dimensioned envelopes; copper alignment; assembly faces.');
// Viewer root is translated to the board centre and can be rotated: CAD contacts
// must be transformed once, never interpreted as scene-world coordinates.
for(const ref of ['U1','U2','U3']){
 const el=board.elements.find(e=>e.name===ref),g=new T.Group();g.position.set(-145,72,-3);g.rotation.set(.4,-.2,.7);const pads=board.pads.filter(p=>p.element===ref);assert(manufacturerComponent(T,el,g,pads));g.updateMatrixWorld(true);let n=0;
 g.traverse(m=>{if(m.userData.part!=='ball')return;const p=pads.find(p=>p.pin===m.userData.pin);const expected=new T.Vector3(p.x,p.y,el.name==='U1'?.135:.175).applyMatrix4(g.matrixWorld);assert(m.getWorldPosition(new T.Vector3()).distanceTo(expected)<1e-6,ref+' translated/rotated contact '+p.pin);n++;});assert.equal(n,ref==='U1'?396:96);
}
console.log('PASS: contacts remain aligned under the live viewer root translation and rotation.');
