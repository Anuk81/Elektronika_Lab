import assert from 'node:assert/strict';import fs from 'node:fs';import * as T from './dist/vendor/three.module.js';import {fitBoard} from './dist/fit-board.mjs';import {blockNetworkMap,componentEnvelope} from './dist/block-visibility.mjs';
const boards=JSON.parse(fs.readFileSync('dist/data/boards.json'));
for(const b of boards){
 const [x0,y0,x1,y1]=b.bounds;
 for(const aspect of [.32,.6,1,2.4])for(const bottom of [false,true])for(const top of [false,true]){
 const c=new T.PerspectiveCamera(38,aspect,.1,1000),control={target:new T.Vector3(),update(){c.lookAt(this.target);c.updateMatrixWorld();}};fitBoard(T,c,control,b.bounds,{bottom,top});
 for(const x of [-(x1-x0)/2,(x1-x0)/2])for(const y of [-(y1-y0)/2,(y1-y0)/2])for(const z of [-18,18]){const p=new T.Vector3(x,y,z).project(c);assert(Math.abs(p.x)<1&&Math.abs(p.y)<1&&Math.abs(p.z)<1,`${b.id} cropped at ${aspect}`);}
 }
 for(const g of b.blocks){for(const ref of g.elements)assert(b.elements.some(e=>e.name===ref),`Unknown ${ref}`);const map=blockNetworkMap(b,g.id,false);for(const [net,n]of map){if(n.shared)assert(!n.visible);else assert(b.nets.find(n=>n.name===net).contacts.every(id=>g.elements.includes(id.slice(0,id.lastIndexOf('.')))));}assert([...blockNetworkMap(b,g.id,true).values()].every(n=>n.visible));}
 for(const e of b.elements)assert(componentEnvelope(b,e).every(Number.isFinite));
}
for(const id of ['audio-i2s','lipo-charger']){const b=boards.find(b=>b.id===id);assert(b.cadImported&&!b.representative);assert(b.nets.some(n=>n.wires.length));const known=new Set(b.pads.map(p=>p.id));for(const n of b.nets)for(const ref of n.contacts)assert(known.has(ref));assert(fs.existsSync(`dist/reference/${id}-schematic-1.svg`));}
console.log('PASS: 13 boards fit at 4 aspect ratios on both sides; shared nets stay distinct; 2 new CAD designs retain contacts and original schematics.');
