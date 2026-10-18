// Original teaching notes; references and networks are checked against the board CAD.
export const lessons={
mosfet:{title:'De una orden lógica a una corriente de carga',steps:[
['CONTROL','R1','La orden llega a CONTROL y a la puerta de Q1. R1 une esa red a GND: descarga la puerta cuando la entrada queda libre y evita que flote. R1 no está en serie con la carga.','Compara CONTROL respecto a GND. Sin alimentar, comprueba la conexión entre R1 y la puerta.'],
['GND','Q1','La fuente de Q1 está en GND. La tensión puerta–fuente gobierna el canal. Con CONTROL cerca de GND está apagado; una excitación suficiente reduce la resistencia del canal. El umbral de encendido no garantiza conducción plena.','Mide puerta respecto a fuente. Confirma la excitación y los límites en la ficha del RFP30N6LE antes de una prueba real.'],
['HIGH-CURRENT','Q1','La carga externa conecta entre VCC y HIGH-CURRENT. Cuando Q1 conduce, la corriente convencional va desde VCC por la carga, el drenador y la fuente hasta GND. La señal de puerta controla este camino; no aporta la energía de la carga.','Con carga conectada, el drenador debe bajar hacia GND al conducir y subir hacia VCC al apagar.'],
['VCC','JP1','Los conectores repiten las redes de entrada y salida. Si CONTROL cambia pero la carga no responde, distingue alimentación, continuidad de carga y conmutación del transistor.','Las cargas inductivas requieren supresión de sobretensiones adecuada; esta placa no incorpora un diodo de rueda libre externo.']
],parts:{R1:'Resistencia de 10 kΩ entre CONTROL y GND. Mantiene la puerta a nivel bajo cuando la entrada queda libre y contribuye a descargar su capacidad.',Q1:'MOSFET de canal N RFP30N6LE: Q1.1 es puerta (CONTROL), Q1.2 drenador (HIGH-CURRENT) y Q1.3 fuente (GND). Interruptor de lado bajo.'}},
logic:{title:'Un nivel bajo entre dos tensiones',steps:[
['LV','Q1','La puerta de Q1 se mantiene en LV. R3 eleva LV1 a LV y R4 eleva HV1 a HV cuando nadie fuerza un cero. Ambos lados pueden reposar a tensiones distintas.','Compara LV1 y HV1 respecto a GND con ambas alimentaciones presentes.'],
['LV1','R3','Al forzar LV1 a cero, aumenta la tensión puerta–fuente y Q1 conduce. El nivel bajo llega a HV1. La corriente de los pull-up se evacua por el dispositivo que fuerza el cero.','Compara los flancos de LV1 y HV1. Los altos son distintos; los bajos deben aproximarse a GND.'],
['HV1','R4','Al forzar HV1 a cero, el diodo interno inicia el descenso del lado bajo y después el canal mantiene ambos lados bajos. Al soltar, los pull-up recargan la capacidad del bus.','La subida depende de resistencia y capacidad. Estudia señales de drenador abierto; no supongas compatibilidad con dos salidas push-pull enfrentadas.']
],parts:{Q1:'BSS138 del canal 1: puerta en LV, fuente en LV1 y drenador en HV1.',R3:'Pull-up de 10 kΩ desde LV1 hacia LV.',R4:'Pull-up de 10 kΩ desde HV1 hacia HV.'}},
rc:{title:'Por qué el condensador suaviza la señal',steps:[
['VIN','R1','La entrada llega a R1, de 10 kΩ. Esta limita la corriente que carga C1: la salida no sigue instantáneamente un salto de entrada.','Compara VIN y OUT con un escalón de baja tensión.'],
['OUT','C1','C1, de 100 nF, conecta OUT con GND. Sin carga adicional y con fuente ideal, τ = R·C = 1 ms. Tras ese tiempo, la salida completa aproximadamente el 63 % del cambio.','El corte ideal es 1/(2πRC), unos 159 Hz. Al aumentar frecuencia, la salida se atenúa y retrasa.'],
['GND','C1','La corriente retorna por GND. En continua ideal, una vez cargado el condensador, OUT se aproxima a VIN. Una carga resistiva modifica el resultado.','Comprueba la referencia común del generador y la medida. Estas cifras describen el modelo ideal de la práctica.']
],parts:{R1:'Resistencia serie de 10 kΩ: con C1 determina la respuesta del filtro.',C1:'Condensador de 100 nF entre OUT y GND. Almacena carga; su tensión varía con la corriente que recibe.'}},
divider:{title:'Cómo aparece la tensión intermedia',steps:[
['VIN','R1','R1 y R2 forman un camino desde VIN hasta GND. Ambas son de 10 kΩ y, sin carga, conducen la misma corriente.','Sin alimentación, identifica los extremos y el punto medio.'],
['OUT','R2','OUT une R1 con R2. Sin carga: Vout = Vin·R2/(R1+R2) = Vin/2. Una carga en OUT queda en paralelo con R2 y reduce la salida.','Mide OUT respecto a GND y compara con VIN/2. No es una fuente regulada.']
],parts:{R1:'Resistencia superior entre VIN y OUT.',R2:'Resistencia inferior entre OUT y GND.'}},
led:{title:'De la entrada a la luz',steps:[
['VIN','R1','R1 limita la corriente del LED. Con 5 V, 1 kΩ y una caída aproximada de 2 V en el LED, circularían unos 3 mA.','5 V es un ejemplo de cálculo, no una lectura real.'],
['OUT','D1','La corriente atraviesa el LED de ánodo a cátodo y vuelve a GND. Su caída depende de corriente, temperatura y tipo de LED.','Sin alimentar, comprueba polaridad con el modo diodo.']
],parts:{R1:'Resistencia serie limitadora de 1 kΩ.',D1:'LED rojo: ánodo en OUT y cátodo en GND.'}},
'audio-i2s':{title:'De los bits al altavoz',steps:[
['DIN','IC1','DIN transporta datos digitales; BCLK marca los bits y LRCLK delimita canales. El MAX98357A interpreta ese conjunto. DIN no es una tensión analógica proporcional al sonido.','Observa las tres señales digitales. No esperes una senoide de audio en DIN.'],
['VDD','C1','VDD aporta energía. C1 y C2 están entre VDD y GND y abastecen transitorios locales de corriente.','Observa el rizado cerca de la alimentación del integrado.'],
['OUT+','IC1','El altavoz conecta entre OUT+ y OUT−. La etapa de clase D conmuta; la carga responde a la diferencia de ambas señales. Ninguna salida es GND.','En una placa real no conectes la masa del osciloscopio a OUT−: usa una medida diferencial adecuada.']
],parts:{C1:'10 µF entre VDD y GND: reserva local de carga.',C2:'0,1 µF entre VDD y GND: desacoplo local.',IC1:'MAX98357A: recibe audio I²S y acciona una salida diferencial de clase D.'}},
'lipo-charger':{title:'De USB al control de carga',steps:[
['VIN','C3','VBUS del USB llega a VIN, a U1.4 y a C3. C3 desacopla la entrada y atiende pequeños transitorios de corriente.','Localiza VIN y GND antes de seguir la energía hacia el integrado.'],
['PROG','R4','R4 une PROG con GND y participa en la programación de corriente. La corriente principal de batería no atraviesa R4.','El valor es 2 kΩ. Confirma variante y ficha técnica antes de deducir la corriente de una placa real.'],
['VCC','U1','U1.3 llega a VCC y al conector de batería. C4 filtra esta red respecto a GND. En esta placa VCC identifica la red de batería, no la entrada USB.','Compara VIN y VCC; son redes diferentes. Considera el estado de la batería al interpretar sus tensiones.'],
['STAT','D11','STAT conecta al cátodo de D11. Cuando absorbe corriente, esta fluye desde VIN por R3 y el LED. Es una indicación de estado, no una medida de capacidad.','R3 limita la corriente del LED. Consulta los estados exactos del MCP73831.']
],parts:{R4:'Resistencia de programación entre PROG y GND.',C3:'4,7 µF entre VIN y GND: desacoplo de entrada.',C4:'4,7 µF entre VCC y GND: condensador de salida.',R3:'330 Ω en serie con el LED de estado.',D11:'LED con cátodo conectado a STAT.',U1:'MCP73831: controlador lineal de carga de una celda, con entrada VIN, salida VCC, ajuste PROG y estado STAT.'}}
};
export function componentExplanation(board,ref){
 const part=board.elements.find(e=>e.name===ref);if(!part)return null;
 const nets=board.nets.filter(n=>n.contacts.some(c=>c.startsWith(ref+'.'))),specific=lessons[board.id]?.parts?.[ref];
 const general=/^R\d/.test(ref)?'Una resistencia relaciona tensión y corriente. Determina su función comprobando si está en serie, a masa, a alimentación o en realimentación.':/^C\d/.test(ref)?'Un condensador almacena carga. Entre alimentación y masa puede desacoplar; en serie con una señal puede bloquear continua. La conexión determina su función.':/^Q\d/.test(ref)?'Un transistor puede controlar corriente o conmutar. Confirma tipo y pinout antes de interpretar sus terminales.':/^D\d/.test(ref)?'Comprueba tipo y polaridad del diodo para distinguir indicación, rectificación o protección.':/^L\d/.test(ref)?'Una bobina almacena energía magnética y se opone a cambios rápidos de corriente. Su función depende de la topología.':/^(U|IC)\d/.test(ref)?'Las redes del integrado permiten localizar alimentación y señales. No revelan por sí solas su circuito interno: contrasta la ficha técnica.':'Identifica sus terminales por las redes del CAD. La posición física o el encapsulado no bastan para atribuir una función.';
 return {part,nets,text:specific||general,specific:!!specific};
}
