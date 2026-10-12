export const PROJECT_KEY='circuitlab-projects-v22';
export function validateProject(input,boardIds){
 if(input?.format!=='circuitlab-project'||input.version!==1||!input.snapshot||!boardIds.includes(input.snapshot.board))throw Error('Archivo incompatible o placa no disponible en este catálogo.');
 const s=input.snapshot;if(typeof input.name!=='string'||!input.name.trim()||input.name.length>100)throw Error('El proyecto necesita un nombre de hasta 100 caracteres.');
 const clean=(v,depth=0)=>{if(depth>12)throw Error('Archivo demasiado complejo.');if(v===null||typeof v==='boolean')return v;if(typeof v==='number'){if(!Number.isFinite(v))throw Error('Número no válido.');return v;}if(typeof v==='string'){if(v.length>20000)throw Error('Texto demasiado largo.');return v;}if(Array.isArray(v)){if(v.length>5000)throw Error('Demasiados elementos.');return v.map(x=>clean(x,depth+1));}if(typeof v==='object'){const out={};for(const [k,x]of Object.entries(v)){if(['__proto__','constructor','prototype'].includes(k))throw Error('Clave no admitida.');out[k]=clean(x,depth+1);}return out;}throw Error('Dato no válido.');};
 const result=clean(input);for(const key of ['position','target'])if(s.camera?.[key]&&(!Array.isArray(s.camera[key])||s.camera[key].length!==3||!s.camera[key].every(n=>typeof n==='number'&&Number.isFinite(n)&&Math.abs(n)<1e6)))throw Error('Encuadre no válido.');
 if(s.notes&&(!s.notes.nets||!s.notes.segments||!Array.isArray(s.notes.points)||!Array.isArray(s.notes.readings)))throw Error('Cuaderno no válido.');return result;
}
export function projectFromSnapshot(name,snapshot){return {format:'circuitlab-project',version:1,id:globalThis.crypto?.randomUUID?.()||String(Date.now())+Math.random().toString(36).slice(2),name:name.trim(),updated:new Date().toISOString(),snapshot};}
export function readProjects(storage){try{const value=JSON.parse(storage.getItem(PROJECT_KEY)||'[]');return Array.isArray(value)?value:[];}catch{return [];}}
export function writeProjects(storage,projects){storage.setItem(PROJECT_KEY,JSON.stringify(projects));}
