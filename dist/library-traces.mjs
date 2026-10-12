// Explicit educational connections. Coordinates share the top-side principle diagram.
const net=(name,...paths)=>({name,paths});
export function libraryNets(kind){
 const div=[net('VIN',[[100,75],[240,75],[240,105]]),net('OUT',[[240,161],[240,190],[435,190]],[[240,190],[240,211]]),net('GND',[[240,267],[240,290]])];
 const rc=()=>[net('IN',[[70,125],[172,125]]),net('OUT',[[228,125],[480,125]],[[340,125],[340,175]]),net('GND',[[340,231],[340,290]])];
 const amp=[net('OUT',[[410,170],[530,170]])];
 switch(kind){
 case 'divider':case 'sensor':return div;
 case 'pullup':return [net('VCC',[[120,65],[290,65],[290,88]]),net('SIGNAL',[[290,144],[290,185],[460,185]],[[290,185],[290,218]]),net('GND',[[290,264],[290,290]])];
 case 'pulldown':return [net('SIGNAL',[[90,140],[460,140]],[[290,140],[290,177]]),net('GND',[[290,233],[290,290]])];
 case 'led':return [net('VIN',[[70,110],[152,110]]),net('LED_A',[[208,110],[300,110],[300,152]]),net('GND',[[300,208],[300,290]])];
 case 'lowpass':case 'highpass':return rc();
 case 'decoupling':return [net('VDD',[[60,100],[340,100]],[[230,100],[230,171]]),net('GND',[[230,227],[230,270],[390,270],[390,230]])];
 case 'mosfet':case 'relay':return [net('VCC',[[350,63],[350,93]],...(kind==='relay'?[[[350,77],[465,77],[465,93]]]:[])),net('MANDO',[[70,212],[152,212]]),net('GATE / BASE',[[208,212],[295,212]]),net('CARGA_BAJA',[[350,149],[350,185]],...(kind==='relay'?[[[350,169],[465,169],[465,149]]]:[])),net('GND',[[350,kind==='relay'?245:228],[350,290]])];
 case 'shunt':return [net('VIN',[[80,80],[280,80],[280,95]]),net('SENSE+',[[280,151],[280,195]],[[280,170],[435,170]]),net('GND / SENSE−',[[280,251],[280,290]],[[280,270],[435,270]])];
 case 'buck':return [net('VIN',[[50,107],[140,107]]),net('SW',[[190,107],[270,107]],[[230,107],[230,110]]),net('VOUT',[[350,107],[460,107]],[[400,107],[400,169]]),net('GND',[[230,166],[230,277],[400,277],[400,225]])];
 case 'ldo':return [net('VIN',[[60,115],[225,115]],[[150,115],[150,168]]),net('VOUT',[[375,115],[530,115]],[[450,115],[450,168]]),net('GND',[[150,224],[150,270],[450,270],[450,224]],[[300,160],[300,270]])];
 case 'charge':return [net('VBUS',[[55,115],[220,115]]),net('SYS',[[410,115],[520,115]]),net('BAT',[[220,210],[115,210],[115,250]]),net('GND',[[315,245],[315,290]])];
 case 'buffer':return [net('IN',[[50,140],[270,140]]),net('OUT / REALIMENTACIÓN',[[410,170],[530,170]],[[455,170],[455,282],[225,282],[225,205],[270,205]])];
 case 'noninv':return [net('IN',[[50,140],[270,140]]),net('OUT',[[410,170],[530,170]],[[455,170],[455,278],[356,278]]),net('FB',[[270,205],[230,205],[230,278],[300,278]],[[230,278],[148,278]]),net('GND',[[92,278],[70,278],[70,295]])];
 case 'inv':return [net('IN',[[40,205],[132,205]]),net('FB',[[188,205],[270,205]],[[220,205],[220,277],[312,277]]),net('OUT',[[410,170],[530,170]],[[457,170],[457,277],[368,277]]),net('GND',[[270,140],[232,140],[232,74]])];
 case 'comparator':return [net('IN',[[50,140],[270,140]]),net('VREF',[[60,205],[270,205]]),...amp,net('VCC',[[465,65],[465,82]])].map(n=>n.name==='OUT'?net('OUT',...n.paths,[[465,138],[465,170]]):n);
 default:return [];
 }
}
export function buildUnderside(kind,THREE){const root=new THREE.Group(),pickables=[],nets=libraryNets(kind),copper='#e9a566';const point=([x,y],z=-1.10)=>new THREE.Vector3((x-300)/10,(170-y)/10,z);
 for(const n of nets){const material=new THREE.MeshBasicMaterial({color:copper});const lineMaterial=new THREE.LineBasicMaterial({color:copper});const positions=[];for(const path of n.paths)for(let i=1;i<path.length;i++){const a=point(path[i-1]),b=point(path[i]),v=b.clone().sub(a);positions.push(...a.toArray(),...b.toArray());const mesh=new THREE.Mesh(new THREE.CylinderGeometry(.105,.105,v.length(),10),material);mesh.position.copy(a).add(b).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());mesh.userData.net=n.name;root.add(mesh);pickables.push(mesh);const halo=new THREE.Mesh(new THREE.CylinderGeometry(.26,.26,v.length(),10),new THREE.MeshBasicMaterial({color:'#71ffc9',transparent:true,opacity:0,depthWrite:false}));halo.position.copy(mesh.position);halo.quaternion.copy(mesh.quaternion);halo.userData.glowNet=n.name;root.add(halo);}
 const line=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(positions,3)),lineMaterial);line.userData.net=n.name;root.add(line);pickables.push(line);
 const endpoints=new Map();for(const path of n.paths)for(const p of [path[0],path.at(-1)])endpoints.set(p.join(','),p);for(const p of endpoints.values()){const pad=new THREE.Mesh(new THREE.TorusGeometry(.34,.12,10,20),material);pad.position.copy(point(p,-1.18));pad.userData.net=n.name;root.add(pad);pickables.push(pad);const via=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,1.5,12),new THREE.MeshStandardMaterial({color:'#c2ced3',metalness:.7,roughness:.3}));via.rotation.x=Math.PI/2;via.position.copy(point(p,-.45));root.add(via);}}
 return {root,pickables,nets,select(name){root.traverse(o=>{if(o.userData.glowNet)o.material.opacity=name===o.userData.glowNet?.22:0;if(o.userData.net&&o.material?.color)o.material.color.set(!name||name===o.userData.net?(name?'#baffed':copper):'#65573d');});}};
}
