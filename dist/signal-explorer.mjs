import {schematicIndex} from './schematic-index.mjs';
import {escapeHTML as esc} from './component-markings.mjs';
import {lessons,componentExplanation} from './signal-lessons.mjs';
const sheets={mosfet:1,logic:1,ardumoto:2,'audio-i2s':1,'lipo-charger':1};
export function mountSignalExplorer(api,host){
 const panel=document.createElement('details');panel.className='signalExplorer';
 panel.innerHTML=`<summary>Explorar esquema y recorrido de la señal <span>PCB ↔ esquema ↔ explicación</span></summary><div class="signalToolbar"><label>Buscar referencia o red<input class="signalSearch" type="search" placeholder="R1, GND, CONTROL…"></label><label>Hoja<select class="signalSheet"></select></label><button class="signalZoomIn" aria-label="Ampliar esquema">＋</button><button class="signalZoomOut" aria-label="Reducir esquema">−</button><button class="signalFit">Ajustar</button></div><div class="signalResults"></div><div class="signalGrid"><div><p class="signalEvidence"></p><div class="signalViewport"><div class="signalDrawing"></div></div><p class="signalStatus" role="status"></p></div><div class="signalTutor"><div class="signalLesson"></div><div class="signalPart"></div></div></div><details class="signalSources"><summary>Cómo estudiar y comprobar</summary><p>Empieza por la función del bloque, localiza las mismas referencias en placa y esquema, sigue cada red y predice qué observarías antes de medir. La señal de control y la energía de alimentación pueden recorrer caminos distintos.</p><p>Las conexiones mostradas proceden de los archivos CAD de cada placa. Las explicaciones son notas didácticas originales; no son una simulación eléctrica ni lecturas de instrumentos.</p><p>Referencias de estudio: Guía para leer esquemas electrónicos, cap. 1 (págs. PDF 10–11); Circuitos electrónicos analógicos, condensadores (pág. 56), fuentes (pág. 301) y conmutación (págs. 378–379). Los PDF no se publican en la app.</p></details>`;
 host.append(panel);const $=s=>panel.querySelector(s);let boardId='',block='off',ref='',net='',step=0,zoom=1,request=0,loaded=false;
 const status=t=>$('.signalStatus').textContent=t;
 const board=()=>api.board();
 function paint(){
  const g=board().blocks?.find(g=>g.id===block),refs=new Set(g?.elements||[]);
  const ns=new Set(board().nets.filter(n=>n.contacts.some(c=>refs.has(c.split('.')[0]))).map(n=>n.name));
  panel.querySelectorAll('.signalDrawing [data-ref],.signalDrawing [data-net]').forEach(el=>{
   const selected=el.dataset.ref?el.dataset.ref===ref:el.dataset.net===net;
   const member=el.dataset.ref?refs.has(el.dataset.ref):ns.has(el.dataset.net);
   el.classList.toggle('signalSelected',selected);el.classList.toggle('signalMember',member);
   el.classList.toggle('signalDim',!!g&&!member&&!selected);
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
  const b=board(),g=b.blocks?.find(g=>g.id===block),parts=g?b.elements.filter(e=>g.elements.includes(e.name)):b.elements;
  $('.signalDrawing').innerHTML=`<div class="signalFallback"><h3>Mapa de conexiones disponible</h3><p>No hay un esquema CAD original enlazado para esta placa. Selecciona una referencia para explorar sus redes. Este listado no sustituye al esquema.</p>${parts.map(e=>`<button data-ref="${esc(e.name)}">${esc(e.name)} · ${esc(e.value||e.package)}</button>`).join('')}</div>`;wire();
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
 function refresh(){const b=board();if(boardId===b.id)return;boardId=b.id;++request;loaded=false;ref=net='';block='off';step=0;zoom=1;$('.signalSearch').value='';$('.signalResults').replaceChildren();const count=sheets[b.id]||0;$('.signalSheet').innerHTML=Array.from({length:count||1},(_,i)=>`<option value="${i+1}">${count?'Hoja '+(i+1):'Sin esquema CAD'}</option>`).join('');$('.signalSheet').value='1';$('.signalSheet').disabled=!count;
  $('.signalEvidence').textContent=`${b.title} · ${b.educational||b.representative?'Diseño didáctico':'Conexiones importadas del CAD'}${count?' · Esquema original navegable':''}`;$('.signalDrawing').replaceChildren();applyZoom();lesson();partInfo();load();}
 panel.addEventListener('toggle',()=>{if(panel.open&&!loaded)load();});$('.signalSheet').onchange=load;$('.signalSearch').oninput=search;
 $('.signalZoomIn').onclick=()=>{zoom=Math.min(4,zoom+.25);applyZoom();};$('.signalZoomOut').onclick=()=>{zoom=Math.max(.5,zoom-.25);applyZoom();};$('.signalFit').onclick=()=>{zoom=1;applyZoom();$('.signalViewport').scrollTop=0;$('.signalViewport').scrollLeft=0;};
 document.addEventListener('circuitlab:component',e=>{if(boardId!==board().id)refresh();choosePart(e.detail,false);});
 document.addEventListener('circuitlab:net',e=>{net=e.detail;paint();});
 refresh();return {refresh,selectBlock(id){block=id;paint();if(panel.open&&!sheets[board().id])fallback();},open(){panel.open=true;if(!loaded)load();}};
}
