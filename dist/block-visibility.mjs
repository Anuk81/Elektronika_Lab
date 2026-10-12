// Functional ownership is distinct from electrical connectivity: common rails are shared.
export function blockNetworkMap(board,mode,includeShared=false){
 const groups=(board.blocks||[]).filter(g=>mode==='all'||g.id===mode),result=new Map();if(mode==='off')return result;
 for(const net of board.nets){const refs=[...new Set(net.contacts.map(id=>id.slice(0,id.lastIndexOf('.'))))];
 const candidates=groups.filter(g=>refs.some(r=>g.elements.includes(r))||(g.nets||[]).includes(net.name));if(!candidates.length)continue;
 const owner=candidates.find(g=>refs.length&&refs.every(r=>g.elements.includes(r)))||candidates[0];
 const shared=/^(GND|AGND|DGND|PGND|EARTH)$/i.test(net.name)||refs.some(r=>!owner.elements.includes(r))||candidates.length>1;
 result.set(net.name,{group:owner,shared,visible:!shared||includeShared});
 }return result;
}
export function componentEnvelope(board,el){
 const pads=board.pads.filter(p=>el.pads.includes(p.id)),angle=el.rot*Math.PI/180,w=el.body?.[0]||2,h=el.body?.[1]||2;
 const dx=(Math.abs(w*Math.cos(angle))+Math.abs(h*Math.sin(angle)))/2,dy=(Math.abs(w*Math.sin(angle))+Math.abs(h*Math.cos(angle)))/2;
 return [Math.min(el.x-dx,...pads.map(p=>p.x-Math.max(p.dx,p.diameter||0)/2))-.6,Math.min(el.y-dy,...pads.map(p=>p.y-Math.max(p.dy,p.diameter||0)/2))-.6,Math.max(el.x+dx,...pads.map(p=>p.x+Math.max(p.dx,p.diameter||0)/2))+.6,Math.max(el.y+dy,...pads.map(p=>p.y+Math.max(p.dy,p.diameter||0)/2))+.6];
}
