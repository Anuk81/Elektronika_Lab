const symbols={
 resistencia:'<path d="M100 120H205M295 120H400"/><rect x="205" y="100" width="90" height="40"/>',
 condensador:'<path d="M100 120H240M260 120H400M240 75V165M260 75V165"/>',
 bobina:'<path d="M100 120H180C180 60 215 60 215 120C215 60 250 60 250 120C250 60 285 60 285 120C285 60 320 60 320 120H400"/>',
 diodo:'<path d="M100 120H220M280 120H400M280 80V160"/><path d="M220 80L280 120L220 160Z"/>',
 transistor:'<rect x="180" y="70" width="160" height="120" rx="12"/><path d="M80 130H180M260 30V70M260 190V230"/>',
 red:'<path d="M80 120H180M240 120H290M350 120H440"/><rect x="180" y="100" width="60" height="40"/><rect x="290" y="100" width="60" height="40"/><circle cx="260" cy="120" r="6" fill="#80edcc"/>'
};
export function beginnerDiagram(l){const key=l.id.slice(7).split('-')[0];return `<svg viewBox="0 0 500 280" role="img" aria-label="${l.title}"><g fill="none" stroke="#80edcc" stroke-width="4" stroke-linejoin="round">${symbols[key]}</g><g fill="#c9e5f5" font-family="system-ui" font-size="15" text-anchor="middle"><text x="250" y="265">${key==='transistor'?'Modelo funcional: mando y recorrido de corriente':key==='red'?'Dos resistencias separan tres redes':key==='diodo'?'Ánodo a la izquierda · cátodo en la barra':key==='condensador'?'Dos placas separadas · dos terminales':key==='bobina'?'Conductor enrollado · dos terminales':'Dos terminales · sin polaridad'}</text></g></svg>`;}
export function beginnerVisual(l){return `<section class="beginnerVisual"><h3>Una pieza, una idea</h3><figure>${beginnerDiagram(l)}<figcaption>Esquema simplificado para reconocer la función. No representa el encapsulado ni sustituye su pinout.</figcaption></figure><p>${l.concept}</p><aside><b>Fíjate solo en esto</b><p>${l.example}</p></aside><p>Lee el dibujo y explícalo con tus palabras antes de pasar a los ejemplos.</p></section>`;}
