// Dimensioned reconstructions, not scans. Provenance: models/package-dimensions.json.
export const packages={U1:{w:15,d:15,h:1.3,stand:.27,ball:.4,count:396},U2:{w:13.3,d:10,h:1.1,stand:.35,ball:.45,count:96},U3:{w:13.3,d:10,h:1.1,stand:.35,ball:.45,count:96},Q3:{w:3.2,d:2.5,h:.8,count:4},Q4:{w:3.2,d:2.5,h:.8,count:4}};
export function dimensionedComponent(T,el,group,pads=[]){
 const spec=packages[el.name];if(!spec||el.assembly!=='fitted')return false;
 const contacts=pads.filter(p=>spec.ball?/^[A-Z]{1,2}[0-9]+$/.test(p.pin):/^[1-4]$/.test(p.pin));
 // Refuse incomplete footprints instead of silently displaying missing balls.
 if(contacts.length!==spec.count)return false;
 const frame=new T.Group();frame.position.set(el.x,el.y,el.mirror?-(el.boardThickness||1.25):0);frame.rotation.order='ZYX';frame.rotation.z=el.rot*Math.PI/180;if(el.mirror)frame.rotation.x=Math.PI;group.add(frame);frame.updateMatrixWorld(true);
 const material=(color,metalness=0,roughness=.6)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const bodyMat=material(0x24262a),baseMat=material(0x333d34),metalMat=material(0xb8bec4,.8,.26),ceramicMat=material(0xd2cdbf);
 const add=(geometry,mat,x,y,z,kind)=>{const m=new T.Mesh(geometry,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;m.userData={component:el,manufacturer:true,dimensioned:true,part:kind};frame.add(m);return m;};
 const box=(w,d,h,z,mat,kind)=>add(new T.BoxGeometry(w,d,h),mat,0,0,z,kind);
 if(spec.ball){
  box(spec.w,spec.d,.16,spec.stand+.08,baseMat,'substrate');
  box(spec.w,spec.d,spec.h-spec.stand-.16,(spec.h+spec.stand+.16)/2,bodyMat,'mould');
  const ball=new T.SphereGeometry(spec.ball/2,12,8);
  for(const p of contacts){const v=frame.worldToLocal(new T.Vector3(p.x,p.y,el.mirror?-(el.boardThickness||1.25):0));const m=add(ball,metalMat,v.x,v.y,spec.stand/2,'ball');m.scale.z=spec.stand/spec.ball;m.userData.pin=p.pin;}
  const first=contacts.find(p=>p.pin==='A1');if(first){const v=frame.worldToLocal(new T.Vector3(first.x,first.y,el.mirror?-(el.boardThickness||1.25):0));add(new T.CircleGeometry(.22,16),material(0x81858a),v.x,v.y,spec.h+.001,'pin-one');}
 }else{
  box(spec.w,spec.d,.3,.2,ceramicMat,'ceramic');box(2.6,2,.45,.575,metalMat,'lid');
  // ABM8 terminal size from the package drawing, independently of larger PCB lands.
  for(const p of contacts){const v=frame.worldToLocal(new T.Vector3(p.x,p.y,el.mirror?-(el.boardThickness||1.25):0));add(new T.BoxGeometry(1,.9,.05),metalMat,Math.sign(v.x)*1.1,Math.sign(v.y)*.8,.025,'terminal').userData.pin=p.pin;}
 }
 frame.userData={dimensioned:true,reference:el.name,contacts:contacts.length};return true;
}
