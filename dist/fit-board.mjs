// Fit all eight corners, respecting vertical and horizontal perspective FOV.
export function fitBoard(T,camera,controls,bounds,{bottom=false,top=false,height=18,padding=1.18,center=[0,0,0]}={}){
 const w=bounds[2]-bounds[0],h=bounds[3]-bounds[1],target=new T.Vector3(...center);
 const back=top?new T.Vector3(0,-.001,bottom?-1:1).normalize():new T.Vector3(.35,-.65,bottom?-.85:.85).normalize();
 const right=new T.Vector3().crossVectors(new T.Vector3(0,0,1),back).normalize(),up=new T.Vector3().crossVectors(back,right).normalize();
 const tanV=Math.tan(camera.fov*Math.PI/360),tanH=tanV*Math.max(.1,camera.aspect);let distance=10;
 for(const x of [-w/2,w/2])for(const y of [-h/2,h/2])for(const z of [-height,height]){const p=new T.Vector3(x,y,z),depth=p.dot(back);distance=Math.max(distance,depth+padding*Math.abs(p.dot(right))/tanH,depth+padding*Math.abs(p.dot(up))/tanV);}
 controls.maxDistance=Math.max(500,distance*3);camera.far=Math.max(1000,distance*6);camera.position.copy(target).addScaledVector(back,distance);controls.target.copy(target);camera.up.set(0,0,1);camera.updateProjectionMatrix();controls.update();return distance;
}
