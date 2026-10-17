// Selection is reversible: never multiply the highlight by dark CAD vertex colours.
export function highlightBlocks(T,parts,groups,mode){
 const enabled=mode!=='off',byRef=new Map();for(const g of groups)for(const ref of g.elements)byRef.set(ref,g);
 const style=ref=>{const g=byRef.get(ref),active=!!g&&(mode==='all'||mode===g.id);return {active,color:active?g.color:'#283341'};};
 parts.traverse(o=>{
  if(!o.isMesh||!o.material||o.userData.preserveMarking)return;
  const entries=o.userData.componentEntries,el=o.userData.component;if(!entries&&!el)return;
  if(!enabled){if(o.userData.selectionOriginal){o.material.dispose();o.material=o.userData.selectionOriginal;delete o.userData.selectionOriginal;}if(o.userData.selectionColors){o.userData.selectionColors.forEach((c,i)=>o.setColorAt(i,c));delete o.userData.selectionColors;if(o.instanceColor)o.instanceColor.needsUpdate=true;}return;}
  if(!o.userData.selectionOriginal){o.userData.selectionOriginal=o.material;o.material=o.material.clone();}
  const m=o.material;m.vertexColors=false;m.metalness=0;m.roughness=.65;m.transparent=false;m.opacity=1;m.depthWrite=true;
  if(entries){if(!o.userData.selectionColors)o.userData.selectionColors=entries.map((_,i)=>{const c=new T.Color();o.getColorAt(i,c);return c;});m.color.set('#ffffff');m.emissive?.set('#000000');entries.forEach((e,i)=>o.setColorAt(i,new T.Color(style(e.name).color)));if(o.instanceColor)o.instanceColor.needsUpdate=true;}
  else {const s=style(el.name);m.color.set(s.color);m.emissive?.set(s.active?s.color:'#000000');m.emissiveIntensity=s.active?.65:0;}
  m.needsUpdate=true;
 });
}
