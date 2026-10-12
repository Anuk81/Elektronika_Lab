// Value-derived teaching markings. Manufacturer top marks are used only when supplied.
export const bandColors=['#121212','#713b19','#de2428','#ff7915','#ffd52a','#159447','#1755c4','#8c3cc3','#898989','#ffffff','#c7a13b','#bac3cc'];
const names=['negro','marrón','rojo','naranja','amarillo','verde','azul','violeta','gris','blanco','oro','plata'];
const toleranceColors={1:1,2:2,.5:5,.25:6,.1:7,.05:8,5:10,10:11};
export const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function resistance(el){
 if(Number.isFinite(el.ohms)&&el.ohms>=0)return el.ohms;
 const s=String(el.value||'').trim().replace(',','.');
 if(/^NA\(/i.test(s))return null;
 let m=s.match(/^(\d*)([RrKkM])(\d+)(?=$|[\s/Ω(])/);
 if(m)return Number((m[1]||'0')+'.'+m[3])*({R:1,r:1,k:1e3,K:1e3,M:1e6}[m[2]]);
 m=s.match(/^(\d+(?:\.\d+)?)\s*([RrKkM]?)(?:Ω|ohms?)?(?=$|[\s/(])/i);
 return m?Number(m[1])*({R:1,r:1,k:1e3,K:1e3,M:1e6,'':1}[m[2]]??1):null;
}
export function smdCode(value,significant=2){
 if(value===0)return '0';if(!(value>0))return '';
 for(const digits of significant===3?[3]:[2,3]){const power=Math.floor(Math.log10(value)+1e-10)-digits+1,n=value/10**power;if(power>=0&&power<=9&&Math.abs(n-Math.round(n))<1e-6)return String(Math.round(n))+power;}
 if(value<1000)return String(Number(value.toPrecision(6))).replace('.','R');return '';
}
export function resistorBands(value,tolerance=5){
 if(!(value>0)||toleranceColors[tolerance]===undefined)return [];
 for(const digits of tolerance<=1?[3]:[2,3]){const power=Math.floor(Math.log10(value)+1e-10)-digits+1,n=value/10**power;if(power < -2||power>9||Math.abs(n-Math.round(n))>1e-6)continue;
 return [...String(Math.round(n)).split('').map(Number),power===-1?10:power===-2?11:power,toleranceColors[tolerance]];
 }return [];
}
const number=n=>new Intl.NumberFormat('es-ES',{maximumFractionDigits:6}).format(n);
export const ohmText=n=>n>=1e6?number(n/1e6)+' MΩ':n>=1e3?number(n/1e3)+' kΩ':number(n)+' Ω';
export function markingInfo(el){
 const pkg=String(el.package||'').toUpperCase(),ref=el.name||'',value=String(el.value||''),axial=pkg.includes('AXIAL');
 const knownTolerance=el.tolerance??value.match(/(?:±|\+\/-|\+-)?\s*([\d.]+)\s*%/)?.[1];
 const tolerance=knownTolerance==null?null:Number(String(knownTolerance).replace('%',''));
 if(/^R(?:\d|$|[a-z])/.test(ref)){
 const ohms=resistance(el);if(ohms!==null){const shownTolerance=tolerance??5,bands=axial?resistorBands(ohms,shownTolerance):[],code=el.marking||smdCode(ohms,tolerance!==null&&tolerance<=1?3:2),tiny=/0201|0402/.test(pkg);
 return {kind:'R',ohms,tolerance,shownTolerance,bands,axial,code,bodyText:axial||tiny?'':code,title:ohmText(ohms),note:axial?(tolerance===null?'Tolerancia de origen no documentada. La banda final representa un ejemplo didáctico de ±5 %.':'Tolerancia documentada: ±'+number(tolerance)+' %.'):(el.marking?'Marcado aportado por el diseño.':tiny?'Encapsulado pequeño: cuerpo sin inscripción. Código equivalente ampliado para aprender.':'Código equivalente calculado del valor; el marcado comercial depende del fabricante.')+' La tolerancia '+(tolerance===null?'no está documentada.':'es ±'+number(tolerance)+' %.')};}
 }
 if(/^C\d|^C$|^Cin$|^Cout$/.test(ref)){
 const m=value.match(/^(\d+(?:[.,]\d+)?)\s*([pnuµμm])F/i),pf=m?Number(m[1].replace(',','.'))*({p:1,n:1e3,u:1e6,'µ':1e6,'μ':1e6,m:1e9}[m[2]]||1):null;
 const code=pf?smdCode(pf):'',disc=pkg.includes('CERAMIC-DISC'),electro=/ELECTROLYTIC|PANASONIC/.test(pkg);
 return {kind:'C',title:value||'Capacidad no documentada',code,bodyText:el.marking||(disc?code:electro&&m?m[0]:''),note:disc?'Código de capacidad: las dos primeras cifras se multiplican por 10 elevado a la tercera, en pF.':electro?'Inscripción de capacidad. La tensión nominal y la tolerancia solo se muestran si constan en los datos.':'Los condensadores cerámicos SMD suelen carecer de inscripción; el valor se consulta en el esquema o la lista de materiales.'};
 }
 return {kind:ref[0]||'',title:value||'Valor no documentado',bodyText:el.marking||'',code:el.marking||'',note:el.marking?'Marcado aportado por el diseño.':'Marcado de fabricante no documentado. La referencia y el valor del esquema se muestran aquí; no se inventa un código comercial.'};
}
export function markingCard(el){const m=markingInfo(el),e=escapeHTML;
 let graphic='',explanation='';
 if(m.bands?.length){const digitCount=m.bands.length-2,coefficient=m.bands.slice(0,digitCount).join(''),mult=m.bands[digitCount],power=mult===10?-1:mult===11?-2:mult;
 graphic='<svg viewBox="0 0 420 110" role="img" aria-label="'+e(m.bands.map(i=>names[i]).join(', '))+'"><path d="M12 55H408" stroke="#b9c4ce" stroke-width="8"/><rect x="65" y="20" width="290" height="70" rx="25" fill="#dfc69a" stroke="#695336" stroke-width="2"/>'+m.bands.map((c,i)=>'<rect x="'+(88+i*(m.bands.length===5?45:56)+(i===m.bands.length-1?18:0))+'" y="23" width="16" height="64" rx="2" fill="'+bandColors[c]+'" stroke="#0005"/>').join('')+'</svg>';
 explanation='<ol class="bandReading">'+m.bands.map((c,i)=>'<li><i style="background:'+bandColors[c]+'"></i>'+names[c]+' · '+(i<digitCount?'cifra '+c:i===digitCount?'multiplicador ×'+number(10**power):'tolerancia ±'+number(m.shownTolerance)+' %')+'</li>').join('')+'</ol><p><b>'+coefficient+' × '+number(10**power)+' = '+e(m.title)+'</b></p><p>Intervalo '+(m.tolerance===null?'del ejemplo':'')+': '+ohmText(m.ohms*(1-m.shownTolerance/100))+' – '+ohmText(m.ohms*(1+m.shownTolerance/100))+'.</p>';
 }else if(m.code){graphic='<div class="markingChip">'+e(m.code)+'</div>';if(m.kind==='R')explanation='<p>'+e(m.code)+' → <b>'+e(m.title)+'</b>. '+(/^\d{3,4}$/.test(m.code)?'Última cifra = exponente de 10; las anteriores forman el valor base.':m.code.includes('R')?'R indica el separador decimal.':'Puente de 0 Ω.')+'</p>';}
 return '<section class="markingCard"><h4>Lectura del componente · '+e(el.name)+'</h4>'+graphic+'<strong>'+e(m.title)+'</strong>'+explanation+'<p>'+e(m.note)+'</p>'+(el.voltageRating?'<p>Tensión nominal: '+e(el.voltageRating)+'</p>':'')+'<small>Referencia en placa: '+e(el.name)+' · Encapsulado: '+e(el.package||'didáctico')+'</small>'+(m.kind==='R'?'<p><a href="https://www.vishay.com/docs/20020/smdresistormarking.pdf" target="_blank" rel="noopener noreferrer">Tabla de códigos de referencia · Vishay</a></p>':'')+'</section>';
}
export function surfaceMark(T,parent,text,width,height,x,y,z,rotation=0,textures=[]){
 if(!text||typeof document==='undefined')return null;
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=192;const ctx=canvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.font='bold 92px monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,96,490);
 const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;textures.push(texture);
 const plane=new T.Mesh(new T.PlaneGeometry(width,height),new T.MeshBasicMaterial({map:texture,transparent:true,toneMapped:false,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));plane.position.set(x,y,z);plane.rotation.z=rotation;plane.userData.preserveMarking=true;parent.add(plane);return plane;
}
