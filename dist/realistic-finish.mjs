// Rounded molded housings. Small passives retain their instancing-friendly boxes.
export function roundedHousing(T,w,h,d){
 const r=Math.min(w,h,d)*.09,shape=new T.Shape();
 shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
 const g=new T.ExtrudeGeometry(shape,{depth:d-2*r,bevelEnabled:true,bevelThickness:r,bevelSize:r*.45,bevelSegments:2,steps:1,curveSegments:4});g.translate(0,0,-d/2+r);return g;
}
// Annular fillets preserve the actual CAD drill opening and leave test pads exposed.
export function solderDetails(T,board,parent,material){
 const pads=board.pads.filter(p=>p.drill>0&&p.diameter>p.drill*1.25&&p.element&&!/^(TP|H|MH)/.test(p.element));if(!pads.length)return;
 const geo=new T.TorusGeometry(1,.1,6,16),solders=new T.InstancedMesh(geo,material,pads.length);const helper=new T.Object3D();
 pads.forEach((p,i)=>{const radius=(p.drill+p.diameter)/4,thick=Math.min((p.diameter-p.drill)/4,.35);helper.position.set(p.x,p.y,-1.34);helper.scale.set(radius,radius,thick/.1);helper.updateMatrix();solders.setMatrixAt(i,helper.matrix);});solders.castShadow=true;solders.receiveShadow=true;parent.add(solders);
}
// Barrel walls follow actual plated pad/via drill coordinates; mechanical holes excluded.
export function platedBarrels(T,board,parent,material){
 const holes=[],seen=new Set();const add=(x,y,drill)=>{if(!(drill>0))return;const key=x.toFixed(4)+':'+y.toFixed(4);if(seen.has(key))return;seen.add(key);holes.push({x,y,drill});};
 for(const p of board.pads)if(p.drill&&p.diameter>p.drill&&!/^(H|MH|MOUNT)/.test(p.element||''))add(p.x,p.y,p.drill);
 for(const net of board.nets)for(const v of net.vias)add(v.x,v.y,v.drill);
 if(!holes.length)return null;const geo=new T.CylinderGeometry(1,1,1,16,1,true),mat=material.clone();mat.side=T.DoubleSide;const barrels=new T.InstancedMesh(geo,mat,holes.length),obj=new T.Object3D();obj.rotation.x=Math.PI/2;holes.forEach((p,i)=>{obj.position.set(p.x,p.y,-.625);obj.scale.set(p.drill/2,1.25,p.drill/2);obj.updateMatrix();barrels.setMatrixAt(i,obj.matrix);});barrels.name='plated-barrels';barrels.userData.approximation='Idealized plating on CAD drill coordinates';barrels.receiveShadow=true;barrels.raycast=()=>{};parent.add(barrels);return barrels;
}
