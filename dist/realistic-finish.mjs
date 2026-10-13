// Rounded molded housings. Small passives retain their instancing-friendly boxes.
export function roundedHousing(T,w,h,d){
 const r=Math.min(w,h,d)*.09,shape=new T.Shape();
 shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
 const g=new T.ExtrudeGeometry(shape,{depth:d-2*r,bevelEnabled:true,bevelThickness:r,bevelSize:r*.45,bevelSegments:2,steps:1,curveSegments:4});g.translate(0,0,-d/2+r);return g;
}
// Idealized concave solder menisci on populated through-hole terminals only.
// Empty headers, mounting holes, fiducials and DNP footprints remain unsoldered.
export function solderDetails(T,board,parent,material){
 const fitted=new Set(board.elements.filter(e=>e.assembly==='fitted'||(!e.assembly&&!board.cadAudit)).map(e=>e.name));
 const elementMap=new Map(board.elements.map(e=>[e.name,e]));const seen=new Set(),pads=board.pads.filter(p=>{const key=[p.element,p.x,p.y].join(':');if(!fitted.has(p.element)||!(p.drill>0&&p.diameter>p.drill*1.25)||seen.has(key))return false;seen.add(key);return true;});if(!pads.length)return null;
 // Revolved concave profile: broad wetting at pad, narrow neck around the lead.
 // Inner edge leaves the documented drill opening unobstructed.
 const profile=[[1,0],[.93,.04],[.72,.10],[.48,.21],[.27,.43],[.12,.72],[0,1]];
 const vertices=[],indices=[],segments=24;
 for(const p of pads){const inner=p.drill/2,outer=p.diameter/2*.94,height=Math.min(.65,(outer-inner)*.9),base=vertices.length/3,bottomMounted=!!elementMap.get(p.element)?.mirror;
  for(let j=0;j<profile.length;j++)for(let k=0;k<=segments;k++){const a=k/segments*Math.PI*2,r=inner+(outer-inner)*profile[j][0];vertices.push(p.x+r*Math.cos(a),p.y+r*Math.sin(a),bottomMounted?.025+height*profile[j][1]:-(board.thickness||1.25)-.025-height*profile[j][1]);}
  for(let j=0;j<profile.length-1;j++)for(let k=0;k<segments;k++){const a=base+j*(segments+1)+k,b=a+segments+1;indices.push(a,b,a+1,a+1,b,b+1);}
 }
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();const mat=material.clone();mat.side=T.DoubleSide;mat.roughness=.32;const mesh=new T.Mesh(geo,mat);mesh.name='populated-terminal-solder';mesh.userData={approximation:'Idealized concave solder fillets; not measured manufacturing profiles',padCount:pads.length,padRefs:pads.map(p=>p.id)};mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
}
// Barrel walls follow actual plated pad/via drill coordinates; mechanical holes excluded.
export function platedBarrels(T,board,parent,material){
 const holes=[],seen=new Set();const add=(x,y,drill)=>{if(!(drill>0))return;const key=x.toFixed(4)+':'+y.toFixed(4);if(seen.has(key))return;seen.add(key);holes.push({x,y,drill});};
 for(const p of board.pads)if(p.drill&&p.diameter>p.drill&&!/^(H|MH|MOUNT)/.test(p.element||''))add(p.x,p.y,p.drill);
 for(const net of board.nets)for(const v of net.vias)add(v.x,v.y,v.drill);
 if(!holes.length)return null;const geo=new T.CylinderGeometry(1,1,1,16,1,true),mat=material.clone();mat.side=T.DoubleSide;const barrels=new T.InstancedMesh(geo,mat,holes.length),obj=new T.Object3D();obj.rotation.x=Math.PI/2;holes.forEach((p,i)=>{obj.position.set(p.x,p.y,-(board.thickness||1.25)/2);obj.scale.set(p.drill/2,(board.thickness||1.25),p.drill/2);obj.updateMatrix();barrels.setMatrixAt(i,obj.matrix);});barrels.name='plated-barrels';barrels.userData.approximation='Idealized plating on CAD drill coordinates';barrels.receiveShadow=true;barrels.raycast=()=>{};parent.add(barrels);return barrels;
}
