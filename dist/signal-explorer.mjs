import {schematicIndex} from './schematic-index.mjs';
import {escapeHTML as esc} from './component-markings.mjs';
import {lessons,componentExplanation} from './signal-lessons.mjs';
const sheets={mosfet:1,logic:1,ardumoto:2,'audio-i2s':1,'lipo-charger':1};
export function mountSignalExplorer(api,host){
 const panel=document.createElement('details');panel.className='signalExplorer';
 panel.innerHTML=`<summary>Explorar esquema y recorrido de la señal <span>PCB ↔ esquema ↔ explicación</span></summary><div class="signalToolbar"><label>Buscar referencia o red<input class="signalSearch" type="search" placeholder="R1, GND, CONTROL…"></label><label>Hoja<select class="signalSheet"></select></label><button class="signalZoomIn" aria-label="Ampliar esquema">＋</button><button class="signalZoomOut" aria-label="Reducir esquema">−</button><button class="signalFit">Ajustar</button></div><div class="signalResults"></div><div class="signalGrid"><div><p class="signalEvidence"></p><div class="signalViewport"><div class="signalDrawing"></div></div><p class="signalStatus" role="status"></p></div><div class="signalTutor"><div class="signalLesson"></div><div class="signalPart"></div></div></div><details class="signalSources"><summary>Cómo estudiar y comprobar</summary><p>Empieza por la función del bloque, localiza las mismas referencias en placa y esquema, sigue cada red y predice qué observarías antes de medir. La señal de control y la energía de alimentación pueden recorrer caminos distintos.</p><p>Las conexiones mostradas proceden de los archivos CAD de cada placa. Las explicaciones son notas didácticas originales; no son una simulación eléctrica ni lecturas de instrumentos.</p><p>Referencias de estudio: Guía para leer esquemas electrónicos, cap. 1 (págs. PDF 10–11); Circuitos electrónicos analógicos, condensadores (pág. 56), fuentes (pág. 301) y conmutación (págs. 378–379). Los PDF no se publican en la app.</p></details>`;
 host.append(panel);const $=s=>panel.querySelector(s);let boardId='',block='off',ref='',net='',step=0,zoom=1,request=0,loaded=false,filterOverlay=null;
 const status=t=>$('.signalStatus').textContent=t;
 const board=()=>api.board();
 function paint(){
  const g=board().blocks?.find(g=>g.id===block),refs=new Set(filterOverlay?.refs||g?.elements||[]);
  const ns=new Set(filterOverlay?.nets||board().nets.filter(n=>n.contacts.some(c=>refs.has(c.split('.')[0]))).map(n=>n.name));
  panel.querySelectorAll('.signalDrawing [data-ref],.signalDrawing [data-net]').forEach(el=>{
   const selected=el.dataset.ref?el.dataset.ref===ref:el.dataset.net===net;
   const member=el.dataset.ref?refs.has(el.dataset.ref):ns.has(el.dataset.net);
   el.classList.toggle('signalSelected',selected);el.classList.toggle('signalMember',member);
   el.classList.toggle('signalDim',!!(filterOverlay||g)&&!member&&!selected);
  });
 }
 function partInfo(){const data=componentExplanation(board(),ref),box=$('.signalPart');if(!data){box.innerHTML='<h3>Investiga un componente</h3><p>Pulsa un símbolo o busca su referencia. Verás sus conexiones y podrás localizarlo en la placa.</p>';return;}
  box.innerHTML=`<span class="signalTag">${data.specific?'Función analizada en este circuito':'Orientación general · comprobar topología'}</span><h3>${esc(ref)} · ${esc(data.part.value||data.part.package)}</h3><p>${esc(data.text)}</p><button class="signalLocate">Localizar en placa 3D</button><h4>Redes conectadas</h4>${data.nets.map(n=>`<button class="signalNet" data-go-net="${esc(n.name)}">${esc(n.name)}</button><p class="signalContacts">${esc(n.contacts.join(' · '))}</p>`).join('')||'<p>Sin redes asignadas en los datos disponibles.</p>'}`;
  box.querySelector('.signalLocate').onclick=()=>api.focus(ref);box.querySelectorAll('[data-go-net]').forEach(b=>b.onclick=()=>chooseNet(b.dataset.goNet));
 }
 function chooseNet(name){net=name;api.net(name);paint();const n=board().nets.find(n=>n.name===name);status(n?`Red ${name}: ${n.contacts.join(' · ')}`:'Red no disponible en esta placa.');}
 function choosePart(name,locate=true){if(!board().elements.some(e=>e.name===name))return;ref=name;const pages=schematicIndex[board().id]?.[name]||[];if(pages.length&&!pages.includes(Number($('.signalSheet').value))){$('.signalSheet').value=String(pages[0]);load();}partInfo();paint();if(locate)api.focus(name);status(pages.length?`${name} localizado en hoja ${pages.join(', ')}: misma referencia en placa y esquema.`:`${name} seleccionado en la placa. Sin símbolo enlazado en un esquema original.`);}
 function lesson(){const l=lessons[board().id],box=$('.signalLesson');if(!l){box.innerHTML='<span class="signalTag">Exploración de conexiones</span><h3>Del bloque al componente</h3><p>Selecciona un bloque y después una referencia. Consulta sus redes y localiza los demás terminales conectados.</p><p>Esta placa aún no tiene un recorrido narrado específico. No se atribuyen direcciones de señal a partir de la posición de los componentes.</p>';return;}
  const s=l.steps[step];box.innerHTML=`<span class="signalTag">Recorrido guiado · ${step+1}/${l.steps.length}</span><h3>${esc(l.title)}</h3><nav class="signalSteps">${l.steps.map((s,i)=>`<button data-step="${i}" aria-pressed="${i===step}">${i+1} · ${esc(s[0])}</button>`).join('')}</nav><h4>${esc(s[1])} · ${esc(s[0])}</h4><p>${esc(s[2])}</p><div class="signalMeasure"><b>Qué observar o comprobar</b><p>${esc(s[3])}</p></div><div class="signalNavigation"><button class="signalPrev" ${step===0?'disabled':''}>Anterior</button><button class="signalShow">Mostrar este paso</button><button class="signalNext" ${step===l.steps.length-1?'disabled':''}>Siguiente</button></div>`;
  const go=i=>{step=i;lesson();const s=l.steps[step];choosePart(s[1]);chooseNet(s[0]);};box.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>go(Number(b.dataset.step)));box.querySelector('.signalPrev').onclick=()=>go(step-1);box.querySelector('.signalNext').onclick=()=>go(step+1);box.querySelector('.signalShow').onclick=()=>go(step);
 }
 function fallback(){
  const b=board(),g=b.blocks?.find(g=>g.id===block),all=filterOverlay?b.elements.filter(e=>filterOverlay.refs.includes(e.name)):g?b.elements.filter(e=>g.elements.includes(e.name)):b.elements;
  const parts=all.slice(0,12),refset=new Set(parts.map(e=>e.name));
  const allNets=filterOverlay?b.nets.filter(n=>filterOverlay.nets.includes(n.name)):b.nets.filter(n=>n.contacts.some(c=>refset.has(c.slice(0,c.lastIndexOf('.')))));
  const nets=allNets.slice(0,14),height=78+Math.max(parts.length,nets.length,3)*48;
  const truncate=(value,max=30)=>{const text=String(value);return text.length>max?text.slice(0,max-1)+'…':text;};
  let svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 '+height+'" role="img" aria-label="Mapa eléctrico de componentes y redes seleccionables"><rect width="760" height="'+height+'" fill="#0c2430" rx="12"/><text x="20" y="29" fill="#d8eef2" font-size="16" font-family="sans-serif">MAPA DE CONEXIONES DEL MODELO</text><text x="20" y="48" fill="#9dbdc6" font-size="11" font-family="sans-serif">Izquierda: componentes · Derecha: redes · Pulsa para investigar</text>';
  const linked=(n,ref)=>n.contacts.some(c=>c.slice(0,c.lastIndexOf('.'))===ref);
  parts.forEach((part,i)=>nets.forEach((n,j)=>{if(linked(n,part.name)){const y1=84+i*48,y2=84+j*48;svg+='<path d="M 318 '+y1+' C 395 '+y1+',395 '+y2+',468 '+y2+'" stroke="#3b8f94" stroke-width="2" fill="none" opacity=".8"/>';}}));
  parts.forEach((part,i)=>{const y=65+i*48;svg+='<g data-ref="'+esc(part.name)+'" style="cursor:pointer"><rect x="20" y="'+y+'" width="298" height="37" rx="7" fill="#164450" stroke="#3d7d81"/><text x="32" y="'+(y+23)+'" fill="#e0f9f5" font-size="13" font-family="sans-serif">'+esc(truncate(part.name+' · '+(part.value||part.package),40))+'</text></g>';});
  nets.forEach((n,i)=>{const y=65+i*48;svg+='<g data-net="'+esc(n.name)+'" style="cursor:pointer"><rect x="468" y="'+y+'" width="271" height="37" rx="7" fill="#154039" stroke="#3d7d81"/><text x="481" y="'+(y+23)+'" fill="#e0f9f5" font-size="12" font-family="sans-serif">'+esc(truncate(n.name,36))+'</text></g>';});
  svg+='</svg>';
  $('.signalDrawing').innerHTML='<div class="signalFallback"><h3>'+esc(filterOverlay?.title||'Mapa de conexiones disponible')+'</h3><p>Mapa interactivo reconstruido de la netlist de la PCB. <strong>No es el esquemático original del fabricante</strong>; las conexiones representadas sí proceden de los datos del modelo.</p>'+svg+((all.length>12||allNets.length>14)?'<small>Vista parcial: se muestran 12 componentes y 14 redes como máximo. Usa el buscador para el resto.</small>':'')+'</div>';
  wire();
 }
 function wire(){
  panel.querySelectorAll('.signalDrawing [data-ref],.signalDrawing [data-net]').forEach(el=>{
   el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',el.dataset.ref?`Componente ${el.dataset.ref}`:`Red ${el.dataset.net}`);
   const act=()=>el.dataset.ref?choosePart(el.dataset.ref):chooseNet(el.dataset.net);el.addEventListener('click',act);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});
  });paint();
 }
 async function load(){
  if(!panel.open)return;const serial=++request,b=board(),page=Number($('.signalSheet').value)||1;loaded=true;
  if(!sheets[b.id]){fallback();return;}
  $('.signalDrawing').textContent='Cargando esquema CAD…';
  try{const response=await fetch(`reference/${b.id}-schematic-${page}.svg`);if(!response.ok)throw Error('HTTP '+response.status);const text=await response.text();if(serial!==request||b.id!==board().id)return;
   // Only same-origin, repository-owned SVGs; reject executable content as defense in depth.
   const doc=new DOMParser().parseFromString(text,'image/svg+xml'),svg=doc.documentElement;
   if(svg.localName!=='svg')throw Error('SVG no válido');
   svg.querySelectorAll('script,foreignObject,iframe,object,embed').forEach(el=>el.remove());
   for(const el of [svg,...svg.querySelectorAll('*')])for(const a of [...el.attributes])if(/^on/i.test(a.name)||/^(href|xlink:href)$/i.test(a.name))el.removeAttribute(a.name);
   const refs=new Set(b.elements.map(e=>e.name));svg.querySelectorAll('g').forEach(g=>{const title=[...g.children].find(c=>c.localName==='title');const name=title?.textContent.trim().split(/\s+/)[0];if(refs.has(name))g.dataset.ref=name;});
   $('.signalDrawing').replaceChildren(document.importNode(svg,true));wire();applyZoom();status('Pulsa un símbolo para localizarlo en 3D; pulsa una red para seguirla.');
  }catch(e){if(serial!==request)return;loaded=false;$('.signalDrawing').innerHTML='<p>No se pudo cargar el esquema.</p><button class="signalRetry">Reintentar</button>';$('.signalRetry').onclick=load;status('Puedes seguir consultando las conexiones del componente.');}
 }
 function applyZoom(){$('.signalDrawing').style.width=`${zoom*100}%`;}
 function search(){const q=$('.signalSearch').value.trim().toLowerCase(),b=board();const out=$('.signalResults');if(!q){out.replaceChildren();return;}
  const parts=b.elements.filter(e=>`${e.name} ${e.value||''} ${e.package}`.toLowerCase().includes(q)),nets=b.nets.filter(n=>n.name.toLowerCase().includes(q));
  out.innerHTML=parts.slice(0,20).map(e=>`<button data-find-ref="${esc(e.name)}">${esc(e.name)} · ${esc(e.value||e.package)}</button>`).join('')+nets.slice(0,20).map(n=>`<button data-find-net="${esc(n.name)}">Red ${esc(n.name)}</button>`).join('');
  out.querySelectorAll('[data-find-ref]').forEach(el=>el.onclick=()=>choosePart(el.dataset.findRef));out.querySelectorAll('[data-find-net]').forEach(el=>el.onclick=()=>chooseNet(el.dataset.findNet));status(`${parts.length} componentes y ${nets.length} redes. Hasta 20 resultados de cada tipo.`);
 }
 function refresh(){const b=board();if(boardId===b.id)return;boardId=b.id;++request;loaded=false;ref=net='';block='off';step=0;zoom=1;filterOverlay=null;$('.signalSearch').value='';$('.signalResults').replaceChildren();const count=sheets[b.id]||0;$('.signalSheet').innerHTML=Array.from({length:count||1},(_,i)=>`<option value="${i+1}">${count?'Hoja '+(i+1):'Sin esquema CAD'}</option>`).join('');$('.signalSheet').value='1';$('.signalSheet').disabled=!count;
  $('.signalEvidence').textContent=`${b.title} · ${b.educational||b.representative?'Diseño didáctico':'Conexiones importadas del CAD'}${count?' · Esquema original navegable':''}`;$('.signalDrawing').replaceChildren();applyZoom();lesson();partInfo();load();}
 panel.addEventListener('toggle',()=>{if(panel.open&&!loaded)load();});$('.signalSheet').onchange=load;$('.signalSearch').oninput=search;
 $('.signalZoomIn').onclick=()=>{zoom=Math.min(4,zoom+.25);applyZoom();};$('.signalZoomOut').onclick=()=>{zoom=Math.max(.5,zoom-.25);applyZoom();};$('.signalFit').onclick=()=>{zoom=1;applyZoom();$('.signalViewport').scrollTop=0;$('.signalViewport').scrollLeft=0;};
 document.addEventListener('circuitlab:component',e=>{if(boardId!==board().id)refresh();choosePart(e.detail,false);});
 document.addEventListener('circuitlab:net',e=>{net=e.detail;paint();});
 refresh();return {refresh,selectBlock(id){block=id;filterOverlay=null;paint();if(panel.open&&!sheets[board().id])fallback();},highlight(selection){filterOverlay={refs:[...selection.refs],nets:[...selection.nets],title:selection.title};panel.open=true;if(!loaded)load();else if(!sheets[board().id])fallback();paint();const page=filterOverlay.refs.flatMap(r=>schematicIndex[board().id]?.[r]||[])[0];if(page&&Number($('.signalSheet').value)!==page){$('.signalSheet').value=String(page);load();}status('Filtro '+selection.title+': componentes y redes resaltados en esquema y PCB.');},open(){panel.open=true;if(!loaded)load();}};
}
