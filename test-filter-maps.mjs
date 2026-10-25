import assert from 'node:assert/strict';
import fs from 'node:fs';
import {filterExamplesFor,filterTeaching} from './dist/filter-explorer.mjs';
const boards=JSON.parse(fs.readFileSync('dist/data/boards.json','utf8'));
let count=0;
for(const board of boards){
 const found=filterExamplesFor(board);
 const refs=new Set(board.elements.map(e=>e.name));
 const nets=new Set(board.nets.map(n=>n.name));
 for(const item of found){
  assert(item.id && item.title && item.why && item.summary && item.check);
  assert(item.refs.length>0 && item.nets.length>0);
  assert(item.refs.every(ref=>refs.has(ref)),board.id+' has an unknown filter component');
  assert(item.nets.every(net=>nets.has(net)),board.id+' has an unknown filter net');
  assert(item.refs.some(ref=>board.pads.some(p=>p.element===ref&&item.nets.includes(p.net))),board.id+' lacks physical component ↔ filter net evidence');
  count++;
 }
}
for(const id of ['computer','rc','washer','phone','tablet','tv','audio-i2s','lipo-charger'])assert(filterExamplesFor(boards.find(b=>b.id===id)).length>0,id+' lacks filters');
assert.equal(filterTeaching.length,4);
assert(['lowpass','highpass','bandpass','active'].every(kind=>filterTeaching.some(f=>f.kind===kind)));
console.log('PASS: '+count+' board-linked filter examples and four training topologies.');
