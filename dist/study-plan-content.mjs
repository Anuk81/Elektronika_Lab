import {beginnerLessons,beginnerBlocks} from './beginner-content.mjs';
export const foundationLessons = [...beginnerLessons,
  {
    "id": "banco",
    "title": "Tu primera sesión: observar antes de tocar",
    "pattern": "led",
    "minutes": 20,
    "concept": "Empieza con el simulador de 5 V. Distingue una fuente, una carga y un camino de retorno. Primero observa; después formula una predicción y solo entonces mide.",
    "example": "En un LED con resistencia, la fuente aporta energía, la resistencia limita corriente y el LED transforma parte en luz.",
    "contrast": "Si el retorno está abierto, puede haber tensión en la entrada aunque el LED no se ilumine.",
    "trap": "Un aparato desenchufado puede conservar energía. Las primeras prácticas reales deben ser de baja tensión y estar supervisadas.",
    "question": "¿Cómo empezarías ante un circuito desconocido?",
    "answers": [
      "Dar tensión inmediatamente",
      "Identificar fuente, carga y retorno",
      "Cambiar el componente más grande"
    ],
    "correct": 1,
    "task": "Dibuja fuente → resistencia → LED → retorno. Señala qué parte aporta energía y cuál la recibe.",
    "video": "plan-banco",
    "scenes": [
      "Empieza con el simulador de 5 V. Distingue una fuente, una carga y un camino de retorno. Primero observa; después formula una predicción y solo entonces mide.",
      "En un LED con resistencia, la fuente aporta energía, la resistencia limita corriente y el LED transforma parte en luz.",
      "Si el retorno está abierto, puede haber tensión en la entrada aunque el LED no se ilumine.",
      "Un aparato desenchufado puede conservar energía. Las primeras prácticas reales deben ser de baja tensión y estar supervisadas."
    ]
  },
  {
    "id": "magnitudes",
    "title": "Tensión, corriente y resistencia sin confundirlas",
    "pattern": "divider",
    "minutes": 20,
    "concept": "La tensión es una diferencia de potencial entre dos puntos. La corriente es carga que atraviesa una sección por unidad de tiempo. La resistencia relaciona ambas en un elemento óhmico.",
    "example": "Una resistencia ideal de 1 kΩ entre 5 V y 0 V conduce 5 mA: I = V/R.",
    "contrast": "Con 10 kΩ y los mismos 5 V circulan 0,5 mA. La tensión no es una corriente que se gaste.",
    "trap": "No digas que hay amperios entre dos puntos: especifica la rama por la que circulan.",
    "question": "Una resistencia de 2 kΩ tiene 6 V entre sus extremos. ¿Qué corriente conduce?",
    "answers": [
      "12 A",
      "3 mA",
      "300 mA"
    ],
    "correct": 1,
    "task": "Escribe las unidades V, A y Ω y calcula la corriente con 5 V y 2 kΩ.",
    "video": "plan-magnitudes",
    "scenes": [
      "La tensión es una diferencia de potencial entre dos puntos. La corriente es carga que atraviesa una sección por unidad de tiempo. La resistencia relaciona ambas en un elemento óhmico.",
      "Una resistencia ideal de 1 kΩ entre 5 V y 0 V conduce 5 mA: I = V/R.",
      "Con 10 kΩ y los mismos 5 V circulan 0,5 mA. La tensión no es una corriente que se gaste.",
      "No digas que hay amperios entre dos puntos: especifica la rama por la que circulan."
    ]
  },
  {
    "id": "unidades",
    "title": "Prefijos y ley de Ohm, paso a paso",
    "pattern": "divider",
    "minutes": 20,
    "concept": "k significa mil; m significa milésima y µ, millonésima. Convierte a unidades compatibles antes de operar. En una resistencia óhmica, V = I × R.",
    "example": "2,2 kΩ = 2200 Ω. Con 4,4 V: I = 4,4/2200 = 0,002 A = 2 mA.",
    "contrast": "470 Ω con 10 mA produce 4,7 V de caída. Multiplicar por 10 sin convertir mA daría un error de mil veces.",
    "trap": "Comprueba el orden de magnitud: una resistencia de kiloohmios a pocos voltios suele conducir miliamperios.",
    "question": "¿Cuánto son 0,004 A?",
    "answers": [
      "4 µA",
      "4 mA",
      "400 mA"
    ],
    "correct": 1,
    "task": "Resuelve 3 V / 1,5 kΩ y explica cómo conviertes amperios a miliamperios.",
    "video": "plan-unidades",
    "scenes": [
      "k significa mil; m significa milésima y µ, millonésima. Convierte a unidades compatibles antes de operar. En una resistencia óhmica, V = I × R.",
      "2,2 kΩ = 2200 Ω. Con 4,4 V: I = 4,4/2200 = 0,002 A = 2 mA.",
      "470 Ω con 10 mA produce 4,7 V de caída. Multiplicar por 10 sin convertir mA daría un error de mil veces.",
      "Comprueba el orden de magnitud: una resistencia de kiloohmios a pocos voltios suele conducir miliamperios."
    ]
  },
  {
    "id": "lazos",
    "title": "Circuito cerrado, abierto y cortocircuito",
    "pattern": "led",
    "minutes": 20,
    "concept": "Un lazo cerrado permite una corriente si existe una fuente y una carga. Una apertura interrumpe el camino. Un cortocircuito crea un camino de resistencia muy baja que puede provocar corriente excesiva.",
    "example": "Si se abre el cable de retorno del LED, el lazo queda interrumpido y la corriente estacionaria es cero.",
    "contrast": "Puentear el LED no es igual que puentear la fuente: la resistencia sigue limitando en el primer caso.",
    "trap": "No pruebes un cortocircuito físico como experimento. Aquí lo analizamos en un modelo.",
    "question": "En un lazo simple, un cable se abre. ¿Qué sucede en régimen estacionario?",
    "answers": [
      "La corriente del lazo se interrumpe",
      "La corriente siempre se duplica",
      "La fuente pierde necesariamente su tensión"
    ],
    "correct": 0,
    "task": "Dibuja una apertura y explica por qué medir tensión no demuestra que circule corriente.",
    "video": "plan-lazos",
    "scenes": [
      "Un lazo cerrado permite una corriente si existe una fuente y una carga. Una apertura interrumpe el camino. Un cortocircuito crea un camino de resistencia muy baja que puede provocar corriente excesiva.",
      "Si se abre el cable de retorno del LED, el lazo queda interrumpido y la corriente estacionaria es cero.",
      "Puentear el LED no es igual que puentear la fuente: la resistencia sigue limitando en el primer caso.",
      "No pruebes un cortocircuito físico como experimento. Aquí lo analizamos en un modelo."
    ]
  },
  {
    "id": "serie",
    "title": "Serie y paralelo: sigue los nodos",
    "pattern": "divider",
    "minutes": 20,
    "concept": "Dos elementos están en serie si su nodo común no tiene otra rama de corriente. Están en paralelo cuando comparten ambos nodos. La posición en el dibujo no define la conexión.",
    "example": "Dos resistencias de 1 kΩ en serie suman 2 kΩ. A 4 V circulan 2 mA.",
    "contrast": "Dos resistencias de 1 kΩ en paralelo equivalen a 500 Ω. A 4 V, cada rama conduce 4 mA.",
    "trap": "No confundas componentes alineados visualmente con componentes conectados en serie.",
    "question": "Dos resistencias comparten sus dos nodos. Están…",
    "answers": [
      "En serie",
      "En paralelo",
      "Siempre desconectadas"
    ],
    "correct": 1,
    "task": "Dibuja ambos montajes y marca todos sus nodos. Compara las corrientes a 4 V.",
    "video": "plan-serie",
    "scenes": [
      "Dos elementos están en serie si su nodo común no tiene otra rama de corriente. Están en paralelo cuando comparten ambos nodos. La posición en el dibujo no define la conexión.",
      "Dos resistencias de 1 kΩ en serie suman 2 kΩ. A 4 V circulan 2 mA.",
      "Dos resistencias de 1 kΩ en paralelo equivalen a 500 Ω. A 4 V, cada rama conduce 4 mA.",
      "No confundas componentes alineados visualmente con componentes conectados en serie."
    ]
  },
  {
    "id": "potencia",
    "title": "Potencia y tolerancia: una pieza no es solo su valor",
    "pattern": "led",
    "minutes": 20,
    "concept": "La potencia disipada en una resistencia es P = V × I = I²R. La tolerancia describe el intervalo del valor nominal. Debes comprobar también tensión máxima, temperatura y condiciones de montaje.",
    "example": "Una resistencia de 1 kΩ con 5 V disipa 25 mW. Su corriente es 5 mA.",
    "contrast": "Una resistencia de 100 Ω a 10 V disipa 1 W: una pieza de 0,25 W no es adecuada para ese caso.",
    "trap": "Una pieza que encaja físicamente puede tener especificaciones insuficientes.",
    "question": "Una resistencia de 100 Ω a 5 V disipa…",
    "answers": [
      "0,25 W",
      "25 W",
      "0,005 W"
    ],
    "correct": 0,
    "task": "Calcula P a 5 V para 1 kΩ y para 100 Ω. Explica por qué cambian las exigencias térmicas.",
    "video": "plan-potencia",
    "scenes": [
      "La potencia disipada en una resistencia es P = V × I = I²R. La tolerancia describe el intervalo del valor nominal. Debes comprobar también tensión máxima, temperatura y condiciones de montaje.",
      "Una resistencia de 1 kΩ con 5 V disipa 25 mW. Su corriente es 5 mA.",
      "Una resistencia de 100 Ω a 10 V disipa 1 W: una pieza de 0,25 W no es adecuada para ese caso.",
      "Una pieza que encaja físicamente puede tener especificaciones insuficientes."
    ]
  },
  {
    "id": "pasivos",
    "title": "Resistencias, condensadores y bobinas",
    "pattern": "decoupling",
    "minutes": 20,
    "concept": "Una resistencia disipa energía; un condensador almacena energía en un campo eléctrico y una bobina en un campo magnético. Sus conexiones y el tiempo determinan su función.",
    "example": "Un condensador entre alimentación y referencia puede proporcionar corriente local durante cambios rápidos de consumo.",
    "contrast": "Una bobina en un convertidor almacena energía durante parte de cada ciclo. No es simplemente un cable aunque su resistencia DC sea pequeña.",
    "trap": "Un pitido de continuidad no identifica por sí solo un componente averiado.",
    "question": "¿Qué elemento almacena energía en un campo eléctrico?",
    "answers": [
      "Resistencia",
      "Condensador",
      "Fusible"
    ],
    "correct": 1,
    "task": "Identifica R, C y L en una placa del catálogo. Describe su función como hipótesis, pendiente de confirmar por conexiones.",
    "video": "plan-pasivos",
    "scenes": [
      "Una resistencia disipa energía; un condensador almacena energía en un campo eléctrico y una bobina en un campo magnético. Sus conexiones y el tiempo determinan su función.",
      "Un condensador entre alimentación y referencia puede proporcionar corriente local durante cambios rápidos de consumo.",
      "Una bobina en un convertidor almacena energía durante parte de cada ciclo. No es simplemente un cable aunque su resistencia DC sea pequeña.",
      "Un pitido de continuidad no identifica por sí solo un componente averiado."
    ]
  },
  {
    "id": "diodos",
    "title": "Diodos y polaridad antes del transistor",
    "pattern": "led",
    "minutes": 20,
    "concept": "Un diodo tiene ánodo y cátodo. Su curva corriente-tensión es no lineal. Una caída típica es orientativa y depende de tecnología, corriente y temperatura.",
    "example": "En el modelo del curso, un LED rojo cae 2 V. Con 5 V y 1 kΩ: I = (5−2)/1000 = 3 mA.",
    "contrast": "En polarización inversa el modelo no conduce; en un componente real debes respetar su tensión inversa máxima.",
    "trap": "Una lectura en circuito puede incluir caminos paralelos. No diagnostiques el diodo con una sola lectura.",
    "question": "¿Por qué hay una resistencia en serie con un LED?",
    "answers": [
      "Para limitar corriente",
      "Para aumentar siempre la tensión",
      "Para eliminar la polaridad"
    ],
    "correct": 0,
    "task": "Señala ánodo y cátodo en el símbolo. Calcula la corriente del ejemplo y compárala con 2 kΩ.",
    "video": "plan-diodos",
    "scenes": [
      "Un diodo tiene ánodo y cátodo. Su curva corriente-tensión es no lineal. Una caída típica es orientativa y depende de tecnología, corriente y temperatura.",
      "En el modelo del curso, un LED rojo cae 2 V. Con 5 V y 1 kΩ: I = (5−2)/1000 = 3 mA.",
      "En polarización inversa el modelo no conduce; en un componente real debes respetar su tensión inversa máxima.",
      "Una lectura en circuito puede incluir caminos paralelos. No diagnostiques el diodo con una sola lectura."
    ]
  },
  {
    "id": "pinout",
    "title": "Del encapsulado al pinout",
    "pattern": "mosfet",
    "minutes": 20,
    "concept": "La serigrafía identifica posiciones. El encapsulado indica una forma física. El pinout define qué función tiene cada terminal y debe verificarse para la referencia exacta.",
    "example": "Dos transistores con carcasa similar pueden distribuir base, colector y emisor de forma diferente.",
    "contrast": "Un punto o muesca ayuda a orientar un integrado, pero el criterio debe contrastarse con el dibujo de su ficha técnica.",
    "trap": "El aspecto de la carcasa no prueba que dos piezas sean intercambiables.",
    "question": "Dos piezas tienen el mismo encapsulado. ¿Qué puedes afirmar?",
    "answers": [
      "Tienen el mismo pinout",
      "Tienen funciones idénticas",
      "Hay que comprobar referencia y pinout"
    ],
    "correct": 2,
    "task": "Elige una referencia de la placa y anota nombre, encapsulado y terminales. Separa lo documentado de lo inferido.",
    "video": "plan-pinout",
    "scenes": [
      "La serigrafía identifica posiciones. El encapsulado indica una forma física. El pinout define qué función tiene cada terminal y debe verificarse para la referencia exacta.",
      "Dos transistores con carcasa similar pueden distribuir base, colector y emisor de forma diferente.",
      "Un punto o muesca ayuda a orientar un integrado, pero el criterio debe contrastarse con el dibujo de su ficha técnica.",
      "El aspecto de la carcasa no prueba que dos piezas sean intercambiables."
    ]
  },
  {
    "id": "voltimetro",
    "title": "Multímetro: tu primera medida de tensión",
    "pattern": "divider",
    "minutes": 20,
    "concept": "Para tensión, conecta la punta negra a COM y la roja a V/Ω. El voltímetro se conecta entre dos puntos, en paralelo. Selecciona continua para este banco de 5 V.",
    "example": "Roja a VIN y negra a GND: esperas +5 V con la fuente activa.",
    "contrast": "Si intercambias las puntas, esperas −5 V. El signo expresa el orden de la diferencia de potencial.",
    "trap": "Nunca uses la entrada de corriente para medir una tensión en paralelo.",
    "question": "Roja a GND y negra a VIN de 5 V: la lectura ideal es…",
    "answers": [
      "+5 V",
      "−5 V",
      "0 V"
    ],
    "correct": 1,
    "task": "En el banco, elige V DC; mide VIN respecto a GND y después invierte las puntas. Anota ambos signos.",
    "video": "plan-voltimetro",
    "scenes": [
      "Para tensión, conecta la punta negra a COM y la roja a V/Ω. El voltímetro se conecta entre dos puntos, en paralelo. Selecciona continua para este banco de 5 V.",
      "Roja a VIN y negra a GND: esperas +5 V con la fuente activa.",
      "Si intercambias las puntas, esperas −5 V. El signo expresa el orden de la diferencia de potencial.",
      "Nunca uses la entrada de corriente para medir una tensión en paralelo."
    ]
  },
  {
    "id": "ohmetro",
    "title": "Continuidad y resistencia: circuito sin tensión",
    "pattern": "pulldown",
    "minutes": 30,
    "concept": "La continuidad detecta un camino de baja resistencia según el umbral del instrumento. Para medir Ω o continuidad, retira la alimentación y verifica que no queda tensión ni energía almacenada.",
    "example": "Un cable directo ideal entre dos pads da una resistencia cercana a cero, incluyendo las puntas en una medida real.",
    "contrast": "Una resistencia en paralelo con otra se mide como su equivalente: 1 kΩ en paralelo con 1 kΩ da 500 Ω.",
    "trap": "Pitido no significa necesariamente cortocircuito defectuoso: puede tratarse de una bobina o un plano común.",
    "question": "¿Qué debes hacer antes de medir Ω?",
    "answers": [
      "Activar la fuente",
      "Retirar alimentación y comprobar ausencia de tensión",
      "Elegir siempre el rango mayor de amperios"
    ],
    "correct": 1,
    "task": "Con la fuente virtual apagada compara dos pads de la misma red y dos separados por una resistencia.",
    "video": "plan-ohmetro",
    "scenes": [
      "La continuidad detecta un camino de baja resistencia según el umbral del instrumento. Para medir Ω o continuidad, retira la alimentación y verifica que no queda tensión ni energía almacenada.",
      "Un cable directo ideal entre dos pads da una resistencia cercana a cero, incluyendo las puntas en una medida real.",
      "Una resistencia en paralelo con otra se mide como su equivalente: 1 kΩ en paralelo con 1 kΩ da 500 Ω.",
      "Pitido no significa necesariamente cortocircuito defectuoso: puede tratarse de una bobina o un plano común."
    ]
  },
  {
    "id": "esquema",
    "title": "Leer un esquema por capas de información",
    "pattern": "divider",
    "minutes": 30,
    "concept": "Primero identifica alimentación y referencia; después entradas, salidas y componentes. Una etiqueta de red une puntos del mismo nombre aunque no haya una línea entre ellos.",
    "example": "VIN → R1 → OUT → R2 → GND describe un divisor. OUT es la unión, no el cuerpo de una resistencia.",
    "contrast": "Una línea que cruza otra puede no estar conectada. Confirma nodos, etiquetas y convenciones del esquema.",
    "trap": "No sigas una pista atravesando una resistencia como si perteneciera al mismo nodo.",
    "question": "¿Qué une directamente una pista ideal?",
    "answers": [
      "Terminales del mismo nodo",
      "Siempre dos masas distintas",
      "Los dos extremos de cualquier resistencia"
    ],
    "correct": 0,
    "task": "Marca VIN, OUT y GND con tres colores. Enumera qué terminales pertenece a cada nodo.",
    "video": "plan-esquema",
    "scenes": [
      "Primero identifica alimentación y referencia; después entradas, salidas y componentes. Una etiqueta de red une puntos del mismo nombre aunque no haya una línea entre ellos.",
      "VIN → R1 → OUT → R2 → GND describe un divisor. OUT es la unión, no el cuerpo de una resistencia.",
      "Una línea que cruza otra puede no estar conectada. Confirma nodos, etiquetas y convenciones del esquema.",
      "No sigas una pista atravesando una resistencia como si perteneciera al mismo nodo."
    ]
  },
  {
    "id": "caidas",
    "title": "Diagnosticar midiendo caídas de tensión",
    "pattern": "divider",
    "minutes": 30,
    "concept": "Medir respecto a GND ubica potenciales. Medir entre los extremos de un elemento obtiene su caída. En un lazo, las subidas y caídas deben ser coherentes.",
    "example": "En un divisor de 5 V con resistencias iguales, cada resistencia cae 2,5 V y OUT está a 2,5 V respecto a GND.",
    "contrast": "Si R1 se abre y R2 sigue conectada, OUT queda cerca de GND; casi toda la tensión aparece entre extremos de la apertura.",
    "trap": "Una caída de cero puede significar un conductor sano o ausencia de corriente. Necesitas contexto.",
    "question": "En el divisor ideal sano de 5 V, R1 = R2. ¿Qué cae en R1?",
    "answers": [
      "5 V",
      "2,5 V",
      "0 V"
    ],
    "correct": 1,
    "task": "Anota VIN−GND, OUT−GND y VIN−OUT. Comprueba que las dos caídas suman la alimentación.",
    "video": "plan-caidas",
    "scenes": [
      "Medir respecto a GND ubica potenciales. Medir entre los extremos de un elemento obtiene su caída. En un lazo, las subidas y caídas deben ser coherentes.",
      "En un divisor de 5 V con resistencias iguales, cada resistencia cae 2,5 V y OUT está a 2,5 V respecto a GND.",
      "Si R1 se abre y R2 sigue conectada, OUT queda cerca de GND; casi toda la tensión aparece entre extremos de la apertura.",
      "Una caída de cero puede significar un conductor sano o ausencia de corriente. Necesitas contexto."
    ]
  },
  {
    "id": "transistor",
    "title": "Transistor: el control de una carga",
    "pattern": "mosfet",
    "minutes": 30,
    "concept": "Un transistor permite controlar una corriente. En un MOSFET de lado bajo, la fuente se sitúa en la referencia y el drenador en el retorno de la carga. Importa VGS, no solo gate respecto a cualquier masa.",
    "example": "Al activar adecuadamente el MOSFET, su caída drenador-fuente disminuye y la carga recibe energía.",
    "contrast": "Una señal de puerta presente no demuestra que el transistor, la carga y su alimentación estén bien.",
    "trap": "La tensión umbral de un MOSFET no garantiza baja resistencia de conducción para una carga concreta.",
    "question": "Para evaluar el mando del MOSFET debes medir…",
    "answers": [
      "Gate respecto a source",
      "Solo el color del encapsulado",
      "Drain respecto a un punto cualquiera"
    ],
    "correct": 0,
    "task": "En el esquema separa la ruta del mando y la ruta de potencia. Explica qué comprobar si hay mando pero la carga no funciona.",
    "video": "plan-transistor",
    "scenes": [
      "Un transistor permite controlar una corriente. En un MOSFET de lado bajo, la fuente se sitúa en la referencia y el drenador en el retorno de la carga. Importa VGS, no solo gate respecto a cualquier masa.",
      "Al activar adecuadamente el MOSFET, su caída drenador-fuente disminuye y la carga recibe energía.",
      "Una señal de puerta presente no demuestra que el transistor, la carga y su alimentación estén bien.",
      "La tensión umbral de un MOSFET no garantiza baja resistencia de conducción para una carga concreta."
    ]
  },
  {
    "id": "fuentes",
    "title": "Alimentación: de la entrada a cada raíl",
    "pattern": "ldo",
    "minutes": 30,
    "concept": "Analiza una fuente por entrada, protección, conversión, filtrado y distribución. Comprueba primero qué tensión necesita cada bloque y cuándo debe aparecer.",
    "example": "En un regulador didáctico con entrada de 5 V y salida de 3,3 V, mide ambas respecto a su referencia antes de culpar al regulador.",
    "contrast": "Salida baja con entrada correcta puede deberse a sobrecarga, habilitación ausente o fallo del regulador. Una lectura no los separa.",
    "trap": "Los ejemplos son de baja tensión; no practiques mediciones de red con este procedimiento básico.",
    "question": "La salida está baja. ¿Cuál es un siguiente paso útil?",
    "answers": [
      "Cambiar todos los condensadores",
      "Contrastar entrada, habilitación y carga",
      "Declarar roto el procesador"
    ],
    "correct": 1,
    "task": "Dibuja entrada → regulador → carga. Escribe dos hipótesis para salida baja y una prueba que las separe.",
    "video": "plan-fuentes",
    "scenes": [
      "Analiza una fuente por entrada, protección, conversión, filtrado y distribución. Comprueba primero qué tensión necesita cada bloque y cuándo debe aparecer.",
      "En un regulador didáctico con entrada de 5 V y salida de 3,3 V, mide ambas respecto a su referencia antes de culpar al regulador.",
      "Salida baja con entrada correcta puede deberse a sobrecarga, habilitación ausente o fallo del regulador. Una lectura no los separa.",
      "Los ejemplos son de baja tensión; no practiques mediciones de red con este procedimiento básico."
    ]
  },
  {
    "id": "buck",
    "title": "Regulación lineal y conmutada",
    "pattern": "buck",
    "minutes": 30,
    "concept": "Un regulador lineal disipa la diferencia de tensión multiplicada por la corriente. Un convertidor conmutado intercambia energía mediante interruptores y elementos de almacenamiento.",
    "example": "Un lineal de 5 V a 3,3 V con 0,1 A disipa aproximadamente 0,17 W, sin contar su consumo interno.",
    "contrast": "Una bobina próxima a un integrado puede sugerir un convertidor, pero confirma VIN, SW y salida en la documentación.",
    "trap": "La conmutación vista en SW no es la misma forma de onda que la salida filtrada.",
    "question": "En un buck, ¿dónde esperas una señal conmutada?",
    "answers": [
      "En el nodo SW",
      "Necesariamente en toda masa",
      "Solo dentro del fusible"
    ],
    "correct": 0,
    "task": "Compara el esquema de LDO y buck. Identifica dónde medir tensión continua y dónde observar variación temporal.",
    "video": "plan-buck",
    "scenes": [
      "Un regulador lineal disipa la diferencia de tensión multiplicada por la corriente. Un convertidor conmutado intercambia energía mediante interruptores y elementos de almacenamiento.",
      "Un lineal de 5 V a 3,3 V con 0,1 A disipa aproximadamente 0,17 W, sin contar su consumo interno.",
      "Una bobina próxima a un integrado puede sugerir un convertidor, pero confirma VIN, SW y salida en la documentación.",
      "La conmutación vista en SW no es la misma forma de onda que la salida filtrada."
    ]
  },
  {
    "id": "analogica",
    "title": "Seguir una señal analógica por etapas",
    "pattern": "noninv",
    "minutes": 30,
    "concept": "Una etapa analógica puede amplificar, filtrar o adaptar impedancias. Sigue entrada y salida con una señal conocida, manteniendo referencia y escalas.",
    "example": "En un amplificador no inversor ideal con ganancia 2, una entrada de 0,1 V pico produce 0,2 V pico, mientras opere en su zona lineal.",
    "contrast": "Si la salida alcanza sus límites de alimentación puede recortarse: no basta con aplicar la ganancia ideal.",
    "trap": "Una señal deformada puede entrar ya deformada. Compara ambos lados antes de localizar el fallo.",
    "question": "La salida recorta. ¿Qué comparación ayuda?",
    "answers": [
      "Entrada y salida con escalas conocidas",
      "Solo el tamaño del integrado",
      "Solo resistencia con el equipo encendido"
    ],
    "correct": 0,
    "task": "Dibuja una senoide y otra recortada. Anota amplitud de entrada, salida, referencia y alimentación que necesitarías conocer.",
    "video": "plan-analogica",
    "scenes": [
      "Una etapa analógica puede amplificar, filtrar o adaptar impedancias. Sigue entrada y salida con una señal conocida, manteniendo referencia y escalas.",
      "En un amplificador no inversor ideal con ganancia 2, una entrada de 0,1 V pico produce 0,2 V pico, mientras opere en su zona lineal.",
      "Si la salida alcanza sus límites de alimentación puede recortarse: no basta con aplicar la ganancia ideal.",
      "Una señal deformada puede entrar ya deformada. Compara ambos lados antes de localizar el fallo."
    ]
  },
  {
    "id": "arranque",
    "title": "Arranque digital: alimentación, reset y reloj",
    "pattern": "pullup",
    "minutes": 30,
    "concept": "El arranque exige condiciones coordinadas. Antes de sospechar software, confirma alimentación, reset y reloj con documentación y medidas adecuadas.",
    "example": "Una CPU alimentada con reset permanentemente activo no ejecutará normalmente su secuencia de arranque.",
    "contrast": "Un nivel alto en una línea no demuestra tráfico; necesitas observar cambios en el tiempo y conocer el protocolo.",
    "trap": "No conectes un generador a una línea digital activa sin estudiar niveles y conflictos entre salidas.",
    "question": "Hay tensión correcta pero reset sigue activo. ¿Qué investigas?",
    "answers": [
      "El circuito de reset y sus condiciones",
      "Cambias primero la pantalla",
      "Das el arranque por correcto"
    ],
    "correct": 0,
    "task": "Escribe una secuencia: raíl estable → reset liberado → actividad. Marca qué instrumento permitiría comprobar cada condición.",
    "video": "plan-arranque",
    "scenes": [
      "El arranque exige condiciones coordinadas. Antes de sospechar software, confirma alimentación, reset y reloj con documentación y medidas adecuadas.",
      "Una CPU alimentada con reset permanentemente activo no ejecutará normalmente su secuencia de arranque.",
      "Un nivel alto en una línea no demuestra tráfico; necesitas observar cambios en el tiempo y conocer el protocolo.",
      "No conectes un generador a una línea digital activa sin estudiar niveles y conflictos entre salidas."
    ]
  },
  {
    "id": "hipotesis",
    "title": "Del síntoma a dos hipótesis rivales",
    "pattern": "mosfet",
    "minutes": 30,
    "concept": "Un síntoma describe qué ocurre; una hipótesis propone una causa. Elige una medida cuyo resultado esperado sea distinto para dos causas posibles.",
    "example": "Una carga apagada puede deberse a falta de alimentación o a falta de mando. Medir alimentación en la carga ayuda a separar ambas.",
    "contrast": "Cambiar el transistor sin verificar el mando puede dejar exactamente el mismo síntoma.",
    "trap": "Una coincidencia no es prueba causal; la avería puede estar en otra parte del recorrido.",
    "question": "¿Qué prueba aporta más información?",
    "answers": [
      "Una que diferencia dos hipótesis",
      "Repetir una medida sin cambiar nada",
      "Sustituir piezas por intuición"
    ],
    "correct": 0,
    "task": "Para un LED apagado propone apertura de R1 y falta de VIN. Escribe dónde medir y qué esperas en cada caso.",
    "video": "plan-hipotesis",
    "scenes": [
      "Un síntoma describe qué ocurre; una hipótesis propone una causa. Elige una medida cuyo resultado esperado sea distinto para dos causas posibles.",
      "Una carga apagada puede deberse a falta de alimentación o a falta de mando. Medir alimentación en la carga ayuda a separar ambas.",
      "Cambiar el transistor sin verificar el mando puede dejar exactamente el mismo síntoma.",
      "Una coincidencia no es prueba causal; la avería puede estar en otra parte del recorrido."
    ]
  },
  {
    "id": "casos",
    "title": "Tres averías del mismo divisor",
    "pattern": "divider",
    "minutes": 30,
    "concept": "Compara siempre con el circuito sano. En un modelo ideal de divisor sin carga, una apertura de R1, una apertura de R2 y una salida en corto producen firmas diferentes.",
    "example": "Con VIN = 5 V y R1 = R2: sano 2,5 V; R1 abierta produce OUT cerca de 0 V; R2 abierta lleva OUT cerca de 5 V.",
    "contrast": "OUT en corto también produce 0 V. Para separarlo de R1 abierta necesitas otra prueba, por ejemplo resistencia de OUT a GND sin alimentación.",
    "trap": "El voltímetro real carga el circuito y hay tolerancias; los resultados son aproximados.",
    "question": "OUT mide 0 V. ¿Queda probada R1 abierta?",
    "answers": [
      "Sí, sin más pruebas",
      "No: un corto de OUT también puede explicarlo",
      "Significa siempre R2 abierta"
    ],
    "correct": 1,
    "task": "Prepara una tabla con cuatro estados: sano, R1 abierta, R2 abierta y corto de OUT. Escribe una segunda prueba para los casos ambiguos.",
    "video": "plan-casos",
    "scenes": [
      "Compara siempre con el circuito sano. En un modelo ideal de divisor sin carga, una apertura de R1, una apertura de R2 y una salida en corto producen firmas diferentes.",
      "Con VIN = 5 V y R1 = R2: sano 2,5 V; R1 abierta produce OUT cerca de 0 V; R2 abierta lleva OUT cerca de 5 V.",
      "OUT en corto también produce 0 V. Para separarlo de R1 abierta necesitas otra prueba, por ejemplo resistencia de OUT a GND sin alimentación.",
      "El voltímetro real carga el circuito y hay tolerancias; los resultados son aproximados."
    ]
  },
  {
    "id": "intermitente",
    "title": "Fallos intermitentes: registrar condiciones",
    "pattern": "sensor",
    "minutes": 30,
    "concept": "Los fallos intermitentes exigen anotar cuándo aparecen: tiempo de funcionamiento, carga, temperatura y estado de conectores. Busca una correlación reproducible sin forzar condiciones peligrosas.",
    "example": "Una conexión deficiente puede provocar una caída que solo aparece al circular corriente. Una prueba estática sin carga puede parecer normal.",
    "contrast": "Un fallo tras calentarse puede tener varias causas; registra señales y alimentaciones antes y durante el fallo.",
    "trap": "No flexiones una placa energizada ni apliques calor sin procedimiento y control adecuados.",
    "question": "Una avería aparece solo con carga. ¿Qué dato es útil?",
    "answers": [
      "Tensión antes y durante la carga",
      "Solo una foto de la carcasa",
      "El color del cable"
    ],
    "correct": 0,
    "task": "Redacta un registro con estado, tiempo, carga, puntos de medida y resultado. Incluye una condición en la que el fallo no aparece.",
    "video": "plan-intermitente",
    "scenes": [
      "Los fallos intermitentes exigen anotar cuándo aparecen: tiempo de funcionamiento, carga, temperatura y estado de conectores. Busca una correlación reproducible sin forzar condiciones peligrosas.",
      "Una conexión deficiente puede provocar una caída que solo aparece al circular corriente. Una prueba estática sin carga puede parecer normal.",
      "Un fallo tras calentarse puede tener varias causas; registra señales y alimentaciones antes y durante el fallo.",
      "No flexiones una placa energizada ni apliques calor sin procedimiento y control adecuados."
    ]
  },
  {
    "id": "soldadura",
    "title": "Reparación: intervenir después de diagnosticar",
    "pattern": "led",
    "minutes": 30,
    "concept": "Antes de sustituir, documenta orientación, referencia y conexiones. Controla ESD, temperatura, herramienta y esfuerzo mecánico. La reparación incluye inspección y comprobación posterior.",
    "example": "Una unión agrietada puede dar un contacto intermitente. La inspección orienta, pero hay que correlacionarla con la medida.",
    "contrast": "Cambiar un condensador exige comprobar capacidad, tensión, polaridad y características relevantes como ESR y temperatura.",
    "trap": "La destreza de soldadura debe entrenarse en placas de descarte sin tensión y evaluarse físicamente.",
    "question": "¿Qué debes verificar tras intervenir?",
    "answers": [
      "Solo que la pieza parece nueva",
      "Puentes, polaridad, continuidad y función",
      "Nada si el equipo enciende"
    ],
    "correct": 1,
    "task": "En una placa de descarte, con supervisión, prepara una ficha de sustitución. En el curso redacta los criterios de inspección sin realizar una reparación real.",
    "video": "plan-soldadura",
    "scenes": [
      "Antes de sustituir, documenta orientación, referencia y conexiones. Controla ESD, temperatura, herramienta y esfuerzo mecánico. La reparación incluye inspección y comprobación posterior.",
      "Una unión agrietada puede dar un contacto intermitente. La inspección orienta, pero hay que correlacionarla con la medida.",
      "Cambiar un condensador exige comprobar capacidad, tensión, polaridad y características relevantes como ESR y temperatura.",
      "La destreza de soldadura debe entrenarse en placas de descarte sin tensión y evaluarse físicamente."
    ]
  },
  {
    "id": "equipos",
    "title": "PC, TV, lavadora y móvil: una misma metodología",
    "pattern": "charge",
    "minutes": 30,
    "concept": "Empieza por el síntoma y divide en alimentación, control, entradas y salidas. Cada familia de equipos tiene riesgos, referencias y secuencias propias. No traslades un pinout de un modelo a otro.",
    "example": "TV con pantalla oscura: distingue generación de imagen y retroiluminación. Busca pruebas que separen ambas rutas.",
    "contrast": "En un móvil que no carga, separa conector, protección, gestión de carga y batería. No supone automáticamente batería defectuosa.",
    "trap": "Las placas de arquitectura didáctica no son esquemas de servicio de una revisión comercial.",
    "question": "¿Qué puedes transferir entre familias de equipos?",
    "answers": [
      "La metodología de contraste",
      "Todos los pinouts",
      "Todas las tensiones nominales"
    ],
    "correct": 0,
    "task": "Elige dos equipos y dibuja sus bloques. Identifica una similitud del método y una diferencia que requiere documentación específica.",
    "video": "plan-equipos",
    "scenes": [
      "Empieza por el síntoma y divide en alimentación, control, entradas y salidas. Cada familia de equipos tiene riesgos, referencias y secuencias propias. No traslades un pinout de un modelo a otro.",
      "TV con pantalla oscura: distingue generación de imagen y retroiluminación. Busca pruebas que separen ambas rutas.",
      "En un móvil que no carga, separa conector, protección, gestión de carga y batería. No supone automáticamente batería defectuosa.",
      "Las placas de arquitectura didáctica no son esquemas de servicio de una revisión comercial."
    ]
  },
  {
    "id": "validacion",
    "title": "Cerrar una reparación y seguir ganando experiencia",
    "pattern": "comparator",
    "minutes": 30,
    "concept": "Valida el síntoma inicial, las funciones afectadas y las condiciones de carga. Un informe debe permitir repetir la prueba y dejar claras las incertidumbres.",
    "example": "Si el fallo aparecía tras un tiempo de funcionamiento, un encendido breve no reproduce la condición original y no basta para cerrar el caso.",
    "contrast": "Una reparación puede resolver el efecto sin su causa: busca sobrecarga o condiciones externas que pudieran repetir el daño.",
    "trap": "Completar un curso no acredita por sí solo competencia profesional; hacen falta práctica supervisada y casos reales documentados.",
    "question": "¿Cuál es un criterio de cierre defendible?",
    "answers": [
      "Enciende una vez",
      "Supera pruebas documentadas en condiciones relevantes",
      "Ya no queda ninguna pieza por cambiar"
    ],
    "correct": 1,
    "task": "Redacta un informe: síntoma, dos hipótesis, medidas, intervención propuesta, prueba de aceptación y límites. Revísalo con un técnico en un caso real.",
    "video": "plan-validacion",
    "scenes": [
      "Valida el síntoma inicial, las funciones afectadas y las condiciones de carga. Un informe debe permitir repetir la prueba y dejar claras las incertidumbres.",
      "Si el fallo aparecía tras un tiempo de funcionamiento, un encendido breve no reproduce la condición original y no basta para cerrar el caso.",
      "Una reparación puede resolver el efecto sin su causa: busca sobrecarga o condiciones externas que pudieran repetir el daño.",
      "Completar un curso no acredita por sí solo competencia profesional; hacen falta práctica supervisada y casos reales documentados."
    ]
  },
  {
    "id": "medida-completa",
    "title": "Una medida necesita puntos, unidades y condiciones",
    "pattern": "divider",
    "minutes": 35,
    "concept": "Un número aislado no describe una medida. Debes identificar los dos puntos, la función del instrumento, el estado de la fuente, la carga y las unidades. Distingue el resultado observado de la explicación que propones.",
    "example": "OUT respecto a GND = 2,50 V, fuente de 5 V activa, divisor de dos resistencias iguales sin carga.",
    "contrast": "Si usas IN como referencia en vez de GND, el mismo OUT puede dar −2,50 V.",
    "trap": "La referencia elegida cambia el valor expresado; no cambia físicamente el circuito.",
    "question": "¿Qué registro permite repetir una medida?",
    "answers": [
      "2,5",
      "OUT−GND, 2,50 V DC, fuente 5 V, sin carga",
      "Parece normal"
    ],
    "correct": 1,
    "task": "Escribe dos registros completos de la misma salida usando referencias diferentes.",
    "video": "plan-medida-completa",
    "scenes": [
      "Un número aislado no describe una medida. Debes identificar los dos puntos, la función del instrumento, el estado de la fuente, la carga y las unidades. Distingue el resultado observado de la explicación que propones.",
      "OUT respecto a GND = 2,50 V, fuente de 5 V activa, divisor de dos resistencias iguales sin carga.",
      "Si usas IN como referencia en vez de GND, el mismo OUT puede dar −2,50 V.",
      "La referencia elegida cambia el valor expresado; no cambia físicamente el circuito."
    ]
  },
  {
    "id": "kirchhoff",
    "title": "Conservar corriente y sumar caídas",
    "pattern": "divider",
    "minutes": 35,
    "concept": "En un nodo, la suma algebraica de corrientes es cero. En un lazo, la suma algebraica de tensiones es cero. Estas relaciones permiten comprobar si tu interpretación respeta las conexiones. Fija sentidos y signos antes de calcular.",
    "example": "Con fuente de 6 V y dos resistencias iguales, cada una cae 3 V: +6−3−3 = 0.",
    "contrast": "Si una corriente se divide en 2 mA y 3 mA, la rama entrante conduce 5 mA en régimen estacionario.",
    "trap": "Una polaridad de medida invertida cambia el signo, no invalida la ley.",
    "question": "Entran 7 mA a un nodo y salen 2 mA por una rama. ¿Qué sale por la otra?",
    "answers": [
      "9 mA",
      "5 mA",
      "2 mA"
    ],
    "correct": 1,
    "task": "Dibuja flechas de corriente y signos en un divisor. Comprueba la suma antes y después de invertir las puntas.",
    "video": "plan-kirchhoff",
    "scenes": [
      "En un nodo, la suma algebraica de corrientes es cero. En un lazo, la suma algebraica de tensiones es cero. Estas relaciones permiten comprobar si tu interpretación respeta las conexiones. Fija sentidos y signos antes de calcular.",
      "Con fuente de 6 V y dos resistencias iguales, cada una cae 3 V: +6−3−3 = 0.",
      "Si una corriente se divide en 2 mA y 3 mA, la rama entrante conduce 5 mA en régimen estacionario.",
      "Una polaridad de medida invertida cambia el signo, no invalida la ley."
    ]
  },
  {
    "id": "zener-curso",
    "title": "Zener: estabilizar exige limitar corriente",
    "pattern": "led",
    "minutes": 35,
    "concept": "Un Zener trabaja en ruptura inversa dentro de un intervalo especificado. Una resistencia limita la corriente disponible. La carga toma parte de esa corriente; solo la restante atraviesa el Zener. Si la corriente restante es insuficiente, la tensión deja de estar bien regulada.",
    "example": "Con 9 V, Zener ideal de 5,1 V y 1 kΩ: la corriente disponible es 3,9 mA sin carga.",
    "contrast": "Si la carga consume 2 mA, quedan 1,9 mA para el Zener. Debes verificar si bastan según su ficha.",
    "trap": "No extrapoles una tensión nominal a cualquier corriente ni ignores la potencia.",
    "question": "Al aumentar la corriente de carga, manteniendo entrada y R, la corriente Zener…",
    "answers": [
      "Aumenta",
      "Disminuye",
      "No cambia"
    ],
    "correct": 1,
    "task": "Consulta la ficha Zener en la biblioteca. Calcula corriente y potencia con y sin una carga de 2 mA.",
    "video": "plan-zener-curso",
    "scenes": [
      "Un Zener trabaja en ruptura inversa dentro de un intervalo especificado. Una resistencia limita la corriente disponible. La carga toma parte de esa corriente; solo la restante atraviesa el Zener. Si la corriente restante es insuficiente, la tensión deja de estar bien regulada.",
      "Con 9 V, Zener ideal de 5,1 V y 1 kΩ: la corriente disponible es 3,9 mA sin carga.",
      "Si la carga consume 2 mA, quedan 1,9 mA para el Zener. Debes verificar si bastan según su ficha.",
      "No extrapoles una tensión nominal a cualquier corriente ni ignores la potencia."
    ]
  },
  {
    "id": "bjt-regiones",
    "title": "BJT: corte, activa y saturación",
    "pattern": "relay",
    "minutes": 35,
    "concept": "Distingue tres regímenes antes de usar una fórmula. En corte la corriente es muy pequeña; en activa la base controla la corriente de colector; en saturación la alimentación y la carga limitan la corriente y la ganancia de activa deja de ser una ley aplicable.",
    "example": "Si β ideal = 100 e IB = 10 µA, la estimación en activa es 1 mA.",
    "contrast": "Si la carga no puede conducir más de 2 mA, aumentar IB a 100 µA no obliga al circuito a conducir 10 mA.",
    "trap": "El pinout depende de la referencia; no lo deduzcas de la carcasa.",
    "question": "¿Qué limita principalmente IC cuando el transistor satura?",
    "answers": [
      "Solo β",
      "La carga y alimentación",
      "El color del transistor"
    ],
    "correct": 1,
    "task": "Separa el cálculo de región activa del límite que impone una carga resistiva.",
    "video": "plan-bjt-regiones",
    "scenes": [
      "Distingue tres regímenes antes de usar una fórmula. En corte la corriente es muy pequeña; en activa la base controla la corriente de colector; en saturación la alimentación y la carga limitan la corriente y la ganancia de activa deja de ser una ley aplicable.",
      "Si β ideal = 100 e IB = 10 µA, la estimación en activa es 1 mA.",
      "Si la carga no puede conducir más de 2 mA, aumentar IB a 100 µA no obliga al circuito a conducir 10 mA.",
      "El pinout depende de la referencia; no lo deduzcas de la carcasa."
    ]
  },
  {
    "id": "mosfet-umbral",
    "title": "MOSFET: umbral no significa encendido completo",
    "pattern": "mosfet",
    "minutes": 35,
    "concept": "La tensión de umbral se especifica a una corriente de prueba pequeña. Para controlar una carga debes consultar RDS(on) a una tensión de puerta compatible con tu mando. Considera también carga de puerta, tensión máxima y disipación.",
    "example": "Un MOSFET puede comenzar a conducir a una tensión baja y aun así presentar una resistencia excesiva para la carga deseada.",
    "contrast": "Un mando de 3,3 V exige verificar especificaciones a esa tensión; una curva a 10 V no demuestra el mismo comportamiento.",
    "trap": "Usa VGS, no gate respecto a un punto arbitrario.",
    "question": "¿Qué dato respalda el uso con una carga concreta?",
    "answers": [
      "Solo VGS(th)",
      "RDS(on) a la VGS disponible y límites de operación",
      "Solo encapsulado"
    ],
    "correct": 1,
    "task": "Anota qué datos pedirías antes de sustituir un MOSFET controlado a 3,3 V.",
    "video": "plan-mosfet-umbral",
    "scenes": [
      "La tensión de umbral se especifica a una corriente de prueba pequeña. Para controlar una carga debes consultar RDS(on) a una tensión de puerta compatible con tu mando. Considera también carga de puerta, tensión máxima y disipación.",
      "Un MOSFET puede comenzar a conducir a una tensión baja y aun así presentar una resistencia excesiva para la carga deseada.",
      "Un mando de 3,3 V exige verificar especificaciones a esa tensión; una curva a 10 V no demuestra el mismo comportamiento.",
      "Usa VGS, no gate respecto a un punto arbitrario."
    ]
  },
  {
    "id": "carga-medida",
    "title": "El instrumento también carga el circuito",
    "pattern": "divider",
    "minutes": 35,
    "concept": "Un voltímetro real tiene impedancia finita. Al conectarlo, añade una rama al circuito. El error es más visible en nodos de alta impedancia. Una sonda también añade capacidad, importante para señales rápidas.",
    "example": "Un divisor con resistencias muy grandes puede cambiar apreciablemente al conectar un voltímetro.",
    "contrast": "Reducir ambas resistencias conserva la relación ideal y disminuye el efecto relativo del voltímetro, pero aumenta el consumo.",
    "trap": "Una medida estable no garantiza que el instrumento no esté alterando el nodo.",
    "question": "¿Qué nodo suele ser más sensible a la carga de un voltímetro?",
    "answers": [
      "Uno de alta impedancia",
      "Un cortocircuito ideal",
      "Todos exactamente igual"
    ],
    "correct": 0,
    "task": "Dibuja el voltímetro como una resistencia adicional entre OUT y GND y explica cómo cambia el divisor.",
    "video": "plan-carga-medida",
    "scenes": [
      "Un voltímetro real tiene impedancia finita. Al conectarlo, añade una rama al circuito. El error es más visible en nodos de alta impedancia. Una sonda también añade capacidad, importante para señales rápidas.",
      "Un divisor con resistencias muy grandes puede cambiar apreciablemente al conectar un voltímetro.",
      "Reducir ambas resistencias conserva la relación ideal y disminuye el efecto relativo del voltímetro, pero aumenta el consumo.",
      "Una medida estable no garantiza que el instrumento no esté alterando el nodo."
    ]
  },
  {
    "id": "rms",
    "title": "DC, valor eficaz y pico a pico",
    "pattern": "rc-low",
    "minutes": 35,
    "concept": "El valor medio describe la componente continua. El eficaz relaciona una señal con su efecto cuadrático, como calentamiento resistivo. Pico a pico es máximo menos mínimo. Un multímetro en AC suele excluir la continua y su ancho de banda es limitado.",
    "example": "Una senoide de 2 Vpp centrada en 0 V tiene 1 V pico y aproximadamente 0,707 V RMS.",
    "contrast": "Con offset de 2 V conserva 2 Vpp y 0,707 V RMS de alterna, pero su media es 2 V.",
    "trap": "No confundas RMS de alterna con RMS total cuando hay offset.",
    "question": "Una senoide de 2 Vpp sin offset tiene RMS…",
    "answers": [
      "2 V",
      "0,707 V",
      "1,414 V"
    ],
    "correct": 1,
    "task": "Compara DC, AC RMS y Vpp en el banco compartido. Añade offset y explica qué lecturas cambian.",
    "video": "plan-rms",
    "scenes": [
      "El valor medio describe la componente continua. El eficaz relaciona una señal con su efecto cuadrático, como calentamiento resistivo. Pico a pico es máximo menos mínimo. Un multímetro en AC suele excluir la continua y su ancho de banda es limitado.",
      "Una senoide de 2 Vpp centrada en 0 V tiene 1 V pico y aproximadamente 0,707 V RMS.",
      "Con offset de 2 V conserva 2 Vpp y 0,707 V RMS de alterna, pero su media es 2 V.",
      "No confundas RMS de alterna con RMS total cuando hay offset."
    ]
  },
  {
    "id": "tolerancia",
    "title": "Valor esperado, tolerancia y error",
    "pattern": "divider",
    "minutes": 35,
    "concept": "Una predicción real suele ser un intervalo. Distingue tolerancia del componente, exactitud del instrumento, resolución de pantalla y repetibilidad. Muchos decimales no implican mejor exactitud.",
    "example": "Una resistencia nominal de 1 kΩ con 5 % puede estar entre 950 y 1050 Ω dentro de su especificación inicial.",
    "contrast": "Un divisor con resistencias nominalmente iguales no produce exactamente media tensión si sus valores reales difieren.",
    "trap": "No declares avería por una diferencia pequeña sin valorar el margen esperado.",
    "question": "¿La resolución de pantalla garantiza exactitud?",
    "answers": [
      "Sí",
      "No",
      "Solo en DC"
    ],
    "correct": 1,
    "task": "Escribe un criterio de aceptación como intervalo y enumera qué tolerancias faltan para justificarlo.",
    "video": "plan-tolerancia",
    "scenes": [
      "Una predicción real suele ser un intervalo. Distingue tolerancia del componente, exactitud del instrumento, resolución de pantalla y repetibilidad. Muchos decimales no implican mejor exactitud.",
      "Una resistencia nominal de 1 kΩ con 5 % puede estar entre 950 y 1050 Ω dentro de su especificación inicial.",
      "Un divisor con resistencias nominalmente iguales no produce exactamente media tensión si sus valores reales difieren.",
      "No declares avería por una diferencia pequeña sin valorar el margen esperado."
    ]
  },
  {
    "id": "vias-redes",
    "title": "Vías, planos y etiquetas: no perder el nodo",
    "pattern": "decoupling",
    "minutes": 35,
    "concept": "Una vía conecta capas según su construcción. Un plano puede pertenecer a una alimentación o referencia. Las etiquetas de red ayudan a relacionar puntos separados, pero debes comprobar la documentación exacta y no asumir que cualquier zona grande es masa.",
    "example": "Dos pads con la misma red documentada siguen perteneciendo al mismo nodo aunque el recorrido atraviese una capa interna.",
    "contrast": "Una isla de cobre próxima puede tener otro nombre de red y no estar conectada.",
    "trap": "La proximidad física no demuestra continuidad.",
    "question": "¿Qué evidencia respalda la pertenencia a una red?",
    "answers": [
      "El mismo color de máscara",
      "Documentación de conexiones y comprobación adecuada",
      "La cercanía"
    ],
    "correct": 1,
    "task": "Selecciona una red, enumera sus pads, voltea y explica qué partes no puedes ver directamente.",
    "video": "plan-vias-redes",
    "scenes": [
      "Una vía conecta capas según su construcción. Un plano puede pertenecer a una alimentación o referencia. Las etiquetas de red ayudan a relacionar puntos separados, pero debes comprobar la documentación exacta y no asumir que cualquier zona grande es masa.",
      "Dos pads con la misma red documentada siguen perteneciendo al mismo nodo aunque el recorrido atraviese una capa interna.",
      "Una isla de cobre próxima puede tener otro nombre de red y no estar conectada.",
      "La proximidad física no demuestra continuidad."
    ]
  },
  {
    "id": "hojas",
    "title": "Leer conectores y esquemas de varias hojas",
    "pattern": "pullup",
    "minutes": 35,
    "concept": "Sigue las referencias entre hojas y los nombres de señales. Un conector cambia la ubicación física pero no sustituye la información del pinout. Distingue nombre de red, número de pin y número de componente.",
    "example": "J1.3 puede llevar ENABLE mientras J2.3 lleva GND: el número 3 solo identifica un pin dentro de cada conector.",
    "contrast": "Una etiqueta repetida puede conectar hojas según las reglas del documento; comprueba su alcance global o local.",
    "trap": "No transportes un pinout entre revisiones de equipo sin confirmación.",
    "question": "J1.3 y J2.3 tienen el mismo número. ¿Están unidos?",
    "answers": [
      "Siempre",
      "No puede concluirse sin redes",
      "Solo si son grandes"
    ],
    "correct": 1,
    "task": "Crea una tabla con conector, pin, señal, destino y función de tres conexiones.",
    "video": "plan-hojas",
    "scenes": [
      "Sigue las referencias entre hojas y los nombres de señales. Un conector cambia la ubicación física pero no sustituye la información del pinout. Distingue nombre de red, número de pin y número de componente.",
      "J1.3 puede llevar ENABLE mientras J2.3 lleva GND: el número 3 solo identifica un pin dentro de cada conector.",
      "Una etiqueta repetida puede conectar hojas según las reglas del documento; comprueba su alcance global o local.",
      "No transportes un pinout entre revisiones de equipo sin confirmación."
    ]
  },
  {
    "id": "compensacion",
    "title": "Sonda ×10, compensación y referencia",
    "pattern": "rc-low",
    "minutes": 35,
    "concept": "La atenuación de la sonda y el ajuste del canal deben coincidir. Una sonda pasiva compensable se ajusta con una señal de calibración apropiada. La masa de un osciloscopio de banco suele estar unida a tierra: no la conectes a un punto desconocido.",
    "example": "Sonda ×10 con canal configurado ×1 puede mostrar una amplitud diez veces menor que la real.",
    "contrast": "Una compensación inadecuada deforma la respuesta a una cuadrada aunque el circuito esté bien.",
    "trap": "El banco virtual no reproduce todas las limitaciones de una sonda física.",
    "question": "La sonda es ×10. ¿Qué ajuste necesita el canal?",
    "answers": [
      "×1 siempre",
      "×10",
      "Solo cambiar frecuencia"
    ],
    "correct": 1,
    "task": "Redacta una lista de conexión: dominio de referencia, atenuación, compensación y punto de prueba.",
    "video": "plan-compensacion",
    "scenes": [
      "La atenuación de la sonda y el ajuste del canal deben coincidir. Una sonda pasiva compensable se ajusta con una señal de calibración apropiada. La masa de un osciloscopio de banco suele estar unida a tierra: no la conectes a un punto desconocido.",
      "Sonda ×10 con canal configurado ×1 puede mostrar una amplitud diez veces menor que la real.",
      "Una compensación inadecuada deforma la respuesta a una cuadrada aunque el circuito esté bien.",
      "El banco virtual no reproduce todas las limitaciones de una sonda física."
    ]
  },
  {
    "id": "trigger-nivel",
    "title": "Disparo: fijar un acontecimiento repetible",
    "pattern": "rc-low",
    "minutes": 35,
    "concept": "El disparo alinea capturas cuando una señal cumple una condición. Elige fuente, pendiente y nivel que la señal cruce. Cambiar la base de tiempos no sustituye una condición de disparo válida.",
    "example": "En una senoide centrada en 2 V, un disparo ascendente cerca de 2 V ofrece un cruce repetible.",
    "contrast": "Un nivel por encima del máximo de la señal no tendrá cruces en modo normal.",
    "trap": "Una pantalla detenida no prueba que el circuito haya dejado de funcionar.",
    "question": "Si la señal nunca alcanza el nivel de disparo…",
    "answers": [
      "No hay cruce válido",
      "La señal cambia sola de frecuencia",
      "La amplitud se duplica"
    ],
    "correct": 0,
    "task": "Compara adquisición libre y alineada. Explica qué evento utilizas como referencia temporal.",
    "video": "plan-trigger-nivel",
    "scenes": [
      "El disparo alinea capturas cuando una señal cumple una condición. Elige fuente, pendiente y nivel que la señal cruce. Cambiar la base de tiempos no sustituye una condición de disparo válida.",
      "En una senoide centrada en 2 V, un disparo ascendente cerca de 2 V ofrece un cruce repetible.",
      "Un nivel por encima del máximo de la señal no tendrá cruces en modo normal.",
      "Una pantalla detenida no prueba que el circuito haya dejado de funcionar."
    ]
  },
  {
    "id": "muestreo",
    "title": "Muestreo y aliasing: una pantalla puede engañar",
    "pattern": "rc-low",
    "minutes": 35,
    "concept": "Una captura digital toma muestras discretas. Si la frecuencia de muestreo es insuficiente, una señal rápida puede parecer más lenta o cambiar de forma. La relación entre ancho de banda, muestreo, longitud de registro y tiempo observado importa.",
    "example": "Una senoide observada con muy pocas muestras por período puede representarse de forma incorrecta.",
    "contrast": "Aumentar el intervalo temporal observado puede reducir el detalle disponible según el instrumento.",
    "trap": "El entrenador dibuja un modelo ideal, no reproduce la adquisición completa de un osciloscopio real.",
    "question": "¿Una forma de onda visualmente suave demuestra muestreo suficiente?",
    "answers": [
      "Sí",
      "No",
      "Solo si es azul"
    ],
    "correct": 1,
    "task": "Anota por qué debes revisar escala temporal, muestreo y ancho de banda antes de interpretar una señal inesperada.",
    "video": "plan-muestreo",
    "scenes": [
      "Una captura digital toma muestras discretas. Si la frecuencia de muestreo es insuficiente, una señal rápida puede parecer más lenta o cambiar de forma. La relación entre ancho de banda, muestreo, longitud de registro y tiempo observado importa.",
      "Una senoide observada con muy pocas muestras por período puede representarse de forma incorrecta.",
      "Aumentar el intervalo temporal observado puede reducir el detalle disponible según el instrumento.",
      "El entrenador dibuja un modelo ideal, no reproduce la adquisición completa de un osciloscopio real."
    ]
  },
  {
    "id": "barrido",
    "title": "Construir una respuesta en frecuencia",
    "pattern": "rc-low",
    "minutes": 35,
    "concept": "Mantén constante la amplitud de entrada, cambia la frecuencia y mide la relación salida/entrada. Usa ambas señales simultáneamente. Registra también fase cuando sea relevante. El corte se define respecto a la ganancia de banda pasante.",
    "example": "En un RC paso bajo ideal, a fc la ganancia es 0,707 y la fase −45 grados.",
    "contrast": "Una amplitud de entrada que cambia durante el barrido falsea la curva si solo anotas la salida.",
    "trap": "El valor de corte no significa que desaparezcan las frecuencias superiores.",
    "question": "¿Qué debes comparar en cada punto?",
    "answers": [
      "Solo VOUT",
      "VOUT/VIN bajo las mismas condiciones",
      "Solo el color de la traza"
    ],
    "correct": 1,
    "task": "Registra ganancia a 0,1 fc, fc y 10 fc. Explica la tendencia y compárala con la biblioteca de filtros.",
    "video": "plan-barrido",
    "scenes": [
      "Mantén constante la amplitud de entrada, cambia la frecuencia y mide la relación salida/entrada. Usa ambas señales simultáneamente. Registra también fase cuando sea relevante. El corte se define respecto a la ganancia de banda pasante.",
      "En un RC paso bajo ideal, a fc la ganancia es 0,707 y la fase −45 grados.",
      "Una amplitud de entrada que cambia durante el barrido falsea la curva si solo anotas la salida.",
      "El valor de corte no significa que desaparezcan las frecuencias superiores."
    ]
  },
  {
    "id": "realimentacion",
    "title": "Realimentación negativa y límites",
    "pattern": "noninv",
    "minutes": 35,
    "concept": "La realimentación compara parte de la salida con una referencia o entrada. En un operacional lineal con realimentación negativa, las entradas pueden quedar a tensiones próximas, pero eso requiere alimentación, rango común y salida dentro de límites.",
    "example": "En un no inversor ideal, ganancia = 1 + Rf/Rg. Con resistencias iguales, la ganancia es 2.",
    "contrast": "Si la salida satura contra un raíl, ya no puedes imponer que ambas entradas tengan exactamente la misma tensión.",
    "trap": "La realimentación no garantiza estabilidad de cualquier montaje.",
    "question": "¿Cuándo deja de ser válido el modelo lineal simple?",
    "answers": [
      "Cuando satura la salida",
      "Cuando hay resistencias",
      "Siempre que hay señal"
    ],
    "correct": 0,
    "task": "Calcula ganancia 2 y dibuja qué ocurre si la amplitud calculada excede el margen de salida.",
    "video": "plan-realimentacion",
    "scenes": [
      "La realimentación compara parte de la salida con una referencia o entrada. En un operacional lineal con realimentación negativa, las entradas pueden quedar a tensiones próximas, pero eso requiere alimentación, rango común y salida dentro de límites.",
      "En un no inversor ideal, ganancia = 1 + Rf/Rg. Con resistencias iguales, la ganancia es 2.",
      "Si la salida satura contra un raíl, ya no puedes imponer que ambas entradas tengan exactamente la misma tensión.",
      "La realimentación no garantiza estabilidad de cualquier montaje."
    ]
  },
  {
    "id": "rizado",
    "title": "Rizado: separar nivel DC y variación",
    "pattern": "decoupling",
    "minutes": 35,
    "concept": "Una alimentación puede tener valor medio correcto y variación excesiva. El multímetro DC ayuda con el nivel; el osciloscopio permite observar amplitud, frecuencia y transitorios. La conexión y longitud de masa afectan a una medida real de ruido.",
    "example": "Una alimentación modelada como 5 V más 0,2 Vpp de seno tiene media de 5 V y oscilación entre 4,9 y 5,1 V.",
    "contrast": "Dos alimentaciones con la misma media pueden tener rizados muy diferentes.",
    "trap": "No interpretes ruido captado por la sonda como si necesariamente procediera del circuito.",
    "question": "¿Qué distingue dos fuentes con igual media y distinto rizado?",
    "answers": [
      "Solo DC",
      "La observación temporal",
      "La etiqueta del conector"
    ],
    "correct": 1,
    "task": "En el banco directo combina offset y seno; compara lectura DC y amplitud de la traza.",
    "video": "plan-rizado",
    "scenes": [
      "Una alimentación puede tener valor medio correcto y variación excesiva. El multímetro DC ayuda con el nivel; el osciloscopio permite observar amplitud, frecuencia y transitorios. La conexión y longitud de masa afectan a una medida real de ruido.",
      "Una alimentación modelada como 5 V más 0,2 Vpp de seno tiene media de 5 V y oscilación entre 4,9 y 5,1 V.",
      "Dos alimentaciones con la misma media pueden tener rizados muy diferentes.",
      "No interpretes ruido captado por la sonda como si necesariamente procediera del circuito."
    ]
  },
  {
    "id": "proteccion",
    "title": "Fusibles y protección: buscar la causa",
    "pattern": "relay",
    "minutes": 35,
    "concept": "Una protección que abre puede ser consecuencia de una avería aguas abajo. Distingue la función del elemento y sus especificaciones antes de sustituir. La reparación debe identificar el mecanismo que provocó la actuación.",
    "example": "Un fusible abierto con una carga en corto puede volver a abrir al reemplazarlo.",
    "contrast": "Una protección electrónica puede desconectar temporalmente la salida sin que exista una apertura permanente.",
    "trap": "Nunca puentes una protección para comprobar si el equipo funciona.",
    "question": "Tras encontrar un fusible abierto, ¿qué falta investigar?",
    "answers": [
      "La causa de la sobrecorriente",
      "Solo el color",
      "Nada"
    ],
    "correct": 0,
    "task": "Dibuja entrada, protección y carga. Propón comprobaciones sin energía antes de volver a alimentar.",
    "video": "plan-proteccion",
    "scenes": [
      "Una protección que abre puede ser consecuencia de una avería aguas abajo. Distingue la función del elemento y sus especificaciones antes de sustituir. La reparación debe identificar el mecanismo que provocó la actuación.",
      "Un fusible abierto con una carga en corto puede volver a abrir al reemplazarlo.",
      "Una protección electrónica puede desconectar temporalmente la salida sin que exista una apertura permanente.",
      "Nunca puentes una protección para comprobar si el equipo funciona."
    ]
  },
  {
    "id": "pwm",
    "title": "PWM: valor medio y conmutación",
    "pattern": "mosfet",
    "minutes": 35,
    "concept": "PWM modifica la fracción de tiempo en cada nivel. El valor medio de una señal ideal entre cero y V es D·V. La carga y su dinámica determinan cómo responde; no equivale siempre a una tensión continua idéntica.",
    "example": "Una señal ideal de 0 a 5 V con 50 % de ciclo útil tiene media de 2,5 V.",
    "contrast": "El multímetro puede indicar un promedio mientras el osciloscopio revela los niveles y tiempos reales.",
    "trap": "El banco usa cuadrada simétrica; no simula cualquier ciclo útil variable.",
    "question": "Una PWM 0–5 V al 20 % tiene media ideal…",
    "answers": [
      "1 V",
      "2,5 V",
      "5 V"
    ],
    "correct": 0,
    "task": "Usa cuadrada simétrica con offset y compara la media con los niveles alto y bajo. Calcula luego el caso 20 % por escrito.",
    "video": "plan-pwm",
    "scenes": [
      "PWM modifica la fracción de tiempo en cada nivel. El valor medio de una señal ideal entre cero y V es D·V. La carga y su dinámica determinan cómo responde; no equivale siempre a una tensión continua idéntica.",
      "Una señal ideal de 0 a 5 V con 50 % de ciclo útil tiene media de 2,5 V.",
      "El multímetro puede indicar un promedio mientras el osciloscopio revela los niveles y tiempos reales.",
      "El banco usa cuadrada simétrica; no simula cualquier ciclo útil variable."
    ]
  },
  {
    "id": "pullup-bus",
    "title": "Líneas compartidas y pull-up",
    "pattern": "pullup",
    "minutes": 35,
    "concept": "Una salida de drenador o colector abierto puede llevar una línea a bajo y liberarla para que el pull-up la eleve. La capacidad de la línea y la resistencia influyen en el tiempo de subida. No conectes entre sí salidas push-pull sin analizar el diseño.",
    "example": "Un pull-up más grande reduce corriente al nivel bajo, pero puede hacer más lenta la subida.",
    "contrast": "Una línea fija en bajo puede deberse a un dispositivo activo, un corto o una condición de protocolo.",
    "trap": "Una tensión alta no prueba que haya comunicación válida.",
    "question": "¿Qué efecto puede tener aumentar el pull-up?",
    "answers": [
      "Subida más lenta con la misma capacidad",
      "Siempre mayor velocidad",
      "Eliminar la referencia"
    ],
    "correct": 0,
    "task": "Relaciona la subida del bus con una carga RC. Propón dos causas distintas de una línea retenida a bajo.",
    "video": "plan-pullup-bus",
    "scenes": [
      "Una salida de drenador o colector abierto puede llevar una línea a bajo y liberarla para que el pull-up la eleve. La capacidad de la línea y la resistencia influyen en el tiempo de subida. No conectes entre sí salidas push-pull sin analizar el diseño.",
      "Un pull-up más grande reduce corriente al nivel bajo, pero puede hacer más lenta la subida.",
      "Una línea fija en bajo puede deberse a un dispositivo activo, un corto o una condición de protocolo.",
      "Una tensión alta no prueba que haya comunicación válida."
    ]
  },
  {
    "id": "adc",
    "title": "Sensores y ADC: de la señal al número",
    "pattern": "sensor",
    "minutes": 35,
    "concept": "Un ADC convierte una tensión respecto a una referencia en un código dentro de un rango. La referencia, el acondicionamiento y los tiempos de adquisición importan. Un código digital incorrecto no implica automáticamente un microcontrolador averiado.",
    "example": "En un ejemplo ideal de 10 bits hay 1024 niveles. Una referencia de 5 V da un paso aproximado de 4,88 mV.",
    "contrast": "Cambiar la referencia modifica la relación entre tensión y código aunque la tensión del sensor permanezca igual.",
    "trap": "La convención de escala y límites exactos se comprueba en la ficha del ADC.",
    "question": "Si la referencia cambia, ¿puede cambiar el código para la misma entrada?",
    "answers": [
      "Sí",
      "No",
      "Solo si se cambia el cable"
    ],
    "correct": 0,
    "task": "Dibuja sensor, filtro, entrada ADC y referencia. Decide dónde medir antes de culpar al software.",
    "video": "plan-adc",
    "scenes": [
      "Un ADC convierte una tensión respecto a una referencia en un código dentro de un rango. La referencia, el acondicionamiento y los tiempos de adquisición importan. Un código digital incorrecto no implica automáticamente un microcontrolador averiado.",
      "En un ejemplo ideal de 10 bits hay 1024 niveles. Una referencia de 5 V da un paso aproximado de 4,88 mV.",
      "Cambiar la referencia modifica la relación entre tensión y código aunque la tensión del sensor permanezca igual.",
      "La convención de escala y límites exactos se comprueba en la ficha del ADC."
    ]
  },
  {
    "id": "mitades",
    "title": "Localizar por mitades en una cadena",
    "pattern": "noninv",
    "minutes": 35,
    "concept": "En una cadena de bloques, una medida intermedia puede separar una mitad funcional de otra sospechosa. Antes confirma alimentación y condiciones de funcionamiento. Selecciona puntos accesibles y una señal conocida compatible con la entrada.",
    "example": "Si hay señal correcta en la salida del primer bloque pero no del segundo, concentra las siguientes pruebas en el segundo y su entorno.",
    "contrast": "Si el primer punto intermedio ya es incorrecto, investiga hacia la entrada antes de saltar a la salida final.",
    "trap": "Inyectar una señal exige conocer niveles, impedancia y si la línea ya está siendo excitada.",
    "question": "¿Dónde es útil medir primero en una cadena larga conocida?",
    "answers": [
      "En un punto intermedio que divida hipótesis",
      "En cualquier pieza al azar",
      "Siempre en la última resistencia"
    ],
    "correct": 0,
    "task": "Dibuja cuatro bloques y una secuencia de dos medidas para delimitar dónde desaparece una señal.",
    "video": "plan-mitades",
    "scenes": [
      "En una cadena de bloques, una medida intermedia puede separar una mitad funcional de otra sospechosa. Antes confirma alimentación y condiciones de funcionamiento. Selecciona puntos accesibles y una señal conocida compatible con la entrada.",
      "Si hay señal correcta en la salida del primer bloque pero no del segundo, concentra las siguientes pruebas en el segundo y su entorno.",
      "Si el primer punto intermedio ya es incorrecto, investiga hacia la entrada antes de saltar a la salida final.",
      "Inyectar una señal exige conocer niveles, impedancia y si la línea ya está siendo excitada."
    ]
  },
  {
    "id": "comparar-sano",
    "title": "Comparar un circuito sano sin copiar a ciegas",
    "pattern": "divider",
    "minutes": 35,
    "concept": "Una placa de referencia ayuda si coinciden revisión, estado y condiciones. Compara diferencias repetibles, no solo fotografías. Una medida en otra revisión o modo de ahorro puede no ser directamente equivalente.",
    "example": "Dos divisores iguales bajo la misma fuente deberían producir resultados próximos según sus tolerancias.",
    "contrast": "Una placa apagada y otra encendida no son referencias intercambiables para comparar resistencia o tensión.",
    "trap": "El diagnóstico necesita explicar por qué la diferencia importa.",
    "question": "¿Qué condición hace útil una comparación?",
    "answers": [
      "Mismo estado y documentación comparable",
      "Solo misma marca",
      "Solo mismo tamaño"
    ],
    "correct": 0,
    "task": "Redacta una tabla sano/averiado con puntos, estado, resultado e hipótesis respaldada.",
    "video": "plan-comparar-sano",
    "scenes": [
      "Una placa de referencia ayuda si coinciden revisión, estado y condiciones. Compara diferencias repetibles, no solo fotografías. Una medida en otra revisión o modo de ahorro puede no ser directamente equivalente.",
      "Dos divisores iguales bajo la misma fuente deberían producir resultados próximos según sus tolerancias.",
      "Una placa apagada y otra encendida no son referencias intercambiables para comparar resistencia o tensión.",
      "El diagnóstico necesita explicar por qué la diferencia importa."
    ]
  },
  {
    "id": "esr-caso",
    "title": "Condensador sospechoso: más de una prueba",
    "pattern": "decoupling",
    "minutes": 35,
    "concept": "Un condensador puede fallar por capacidad, ESR, fuga o corto. La apariencia y una única lectura no bastan. Relaciona el parámetro alterado con el síntoma, como mayor rizado o calentamiento bajo condiciones concretas.",
    "example": "Una capacidad próxima al nominal no descarta ESR elevada.",
    "contrast": "Un condensador en paralelo con otros puede mostrar una lectura influida por toda la red.",
    "trap": "No desuelde ni descargues componentes de potencia sin procedimiento y verificación de seguridad.",
    "question": "¿Capacidad correcta descarta todos los fallos?",
    "answers": [
      "Sí",
      "No",
      "Solo en condensadores grandes"
    ],
    "correct": 1,
    "task": "Relaciona cuatro fallos posibles con qué pruebas podrían distinguirlos, indicando si deben hacerse fuera de circuito.",
    "video": "plan-esr-caso",
    "scenes": [
      "Un condensador puede fallar por capacidad, ESR, fuga o corto. La apariencia y una única lectura no bastan. Relaciona el parámetro alterado con el síntoma, como mayor rizado o calentamiento bajo condiciones concretas.",
      "Una capacidad próxima al nominal no descarta ESR elevada.",
      "Un condensador en paralelo con otros puede mostrar una lectura influida por toda la red.",
      "No desuelde ni descargues componentes de potencia sin procedimiento y verificación de seguridad."
    ]
  },
  {
    "id": "soldadura-inspeccion",
    "title": "Inspección posterior: puentes y pistas dañadas",
    "pattern": "led",
    "minutes": 35,
    "concept": "Después de una intervención, verifica orientación, humectación, puentes, pads levantados y continuidad esperada. Inspecciona antes de energizar. Un componente correctamente elegido puede quedar mal conectado por daño mecánico.",
    "example": "Un puente entre dos pads vecinos puede crear una avería nueva aunque la pieza original fuera defectuosa.",
    "contrast": "Un pad levantado puede parecer soldado al terminal pero haber perdido su unión a la pista.",
    "trap": "El curso permite documentar criterios, pero no evaluar la destreza manual real.",
    "question": "¿Qué debe preceder a la primera energización?",
    "answers": [
      "Inspección y comprobaciones sin tensión",
      "Cerrar la carcasa",
      "Aumentar el fusible"
    ],
    "correct": 0,
    "task": "Crea una lista de aceptación de cinco puntos para una sustitución de componente.",
    "video": "plan-soldadura-inspeccion",
    "scenes": [
      "Después de una intervención, verifica orientación, humectación, puentes, pads levantados y continuidad esperada. Inspecciona antes de energizar. Un componente correctamente elegido puede quedar mal conectado por daño mecánico.",
      "Un puente entre dos pads vecinos puede crear una avería nueva aunque la pieza original fuera defectuosa.",
      "Un pad levantado puede parecer soldado al terminal pero haber perdido su unión a la pista.",
      "El curso permite documentar criterios, pero no evaluar la destreza manual real."
    ]
  },
  {
    "id": "caso-final",
    "title": "Caso final: del síntoma a un informe defendible",
    "pattern": "divider",
    "minutes": 35,
    "concept": "Un caso completo une síntoma reproducible, esquema funcional, hipótesis, medidas discriminantes y validación. No confundas localizar el efecto con identificar la causa. Justifica por qué cada prueba era útil y qué incertidumbres permanecen.",
    "example": "OUT = 0 V en un divisor puede explicarse por resistencia superior abierta o salida en corto. La tensión sola no distingue ambas.",
    "contrast": "Si R1 está abierta, medir continuidad de esa rama sin alimentación ayuda a contrastar la hipótesis; una salida en corto conserva otro patrón.",
    "trap": "No uses una conclusión más fuerte que la evidencia disponible.",
    "question": "¿Qué hace sólido un diagnóstico?",
    "answers": [
      "Muchas piezas cambiadas",
      "Medidas que separan hipótesis y validación reproducible",
      "Un informe largo sin datos"
    ],
    "correct": 1,
    "task": "Entrega síntoma, esquema, dos hipótesis, predicciones, resultados del banco, conclusión y criterio de aceptación.",
    "video": "plan-caso-final",
    "scenes": [
      "Un caso completo une síntoma reproducible, esquema funcional, hipótesis, medidas discriminantes y validación. No confundas localizar el efecto con identificar la causa. Justifica por qué cada prueba era útil y qué incertidumbres permanecen.",
      "OUT = 0 V en un divisor puede explicarse por resistencia superior abierta o salida en corto. La tensión sola no distingue ambas.",
      "Si R1 está abierta, medir continuidad de esa rama sin alimentación ayuda a contrastar la hipótesis; una salida en corto conserva otro patrón.",
      "No uses una conclusión más fuerte que la evidencia disponible."
    ]
  },
  {
    "id": "plan-experiencia",
    "title": "Del simulador al taller: cartera de casos",
    "pattern": "comparator",
    "minutes": 35,
    "concept": "La pericia crece al resolver casos variados y revisar errores con criterio. Registra equipos, síntomas, hipótesis descartadas y pruebas de aceptación. Aumenta dificultad cuando domines fundamentos y cuentes con supervisión y medios adecuados.",
    "example": "Repetir un caso sin pistas comprueba autonomía mejor que recordar una respuesta de opción múltiple.",
    "contrast": "Resolver cinco fallos distintos aporta más variedad que repetir cinco veces exactamente la misma avería.",
    "trap": "Ningún contador de lecciones garantiza ser experto ni reparar cualquier equipo.",
    "question": "¿Qué evidencia demuestra mejor progreso práctico?",
    "answers": [
      "Casos variados documentados y revisados",
      "Solo horas de vídeo",
      "Solo número de herramientas"
    ],
    "correct": 0,
    "task": "Diseña una cartera inicial de cinco casos de baja tensión con objetivos, evidencias y revisión por un técnico.",
    "video": "plan-plan-experiencia",
    "scenes": [
      "La pericia crece al resolver casos variados y revisar errores con criterio. Registra equipos, síntomas, hipótesis descartadas y pruebas de aceptación. Aumenta dificultad cuando domines fundamentos y cuentes con supervisión y medios adecuados.",
      "Repetir un caso sin pistas comprueba autonomía mejor que recordar una respuesta de opción múltiple.",
      "Resolver cinco fallos distintos aporta más variedad que repetir cinco veces exactamente la misma avería.",
      "Ningún contador de lecciones garantiza ser experto ni reparar cualquier equipo."
    ]
  }
];
export const studyBlocks = [...beginnerBlocks,
  {
    "title": "Ahora sí: magnitudes y leyes",
    "goal": "Entender un circuito sencillo y trabajar con orden.",
    "lessons": [
      "banco",
      "magnitudes",
      "unidades",
      "lazos",
      "serie",
      "potencia",
      "medida-completa",
      "kirchhoff"
    ],
    "checkpoint": "Explica un lazo cerrado y calcula corriente y potencia sin confundir unidades."
  },
  {
    "title": "Profundiza en los componentes",
    "goal": "Relacionar símbolo, función y terminales.",
    "lessons": [
      "pasivos",
      "diodos",
      "pinout",
      "zener-curso",
      "bjt-regiones",
      "mosfet-umbral"
    ],
    "checkpoint": "Distingue pieza, símbolo y pinout; justifica la resistencia del LED."
  },
  {
    "title": "Aprende a medir",
    "goal": "Elegir función, referencia y condiciones.",
    "lessons": [
      "voltimetro",
      "ohmetro",
      "u:medir",
      "u:divisor",
      "u:led",
      "carga-medida",
      "rms",
      "tolerancia"
    ],
    "checkpoint": "Predice una tensión, coloca las puntas y explica su signo."
  },
  {
    "title": "Del esquema a la placa",
    "goal": "Seguir una red sin perderte al cambiar de cara.",
    "lessons": [
      "esquema",
      "u:nodos",
      "u:caras",
      "caidas",
      "vias-redes",
      "hojas"
    ],
    "checkpoint": "Marca una red en ambas caras y contrasta esquema y terminales."
  },
  {
    "title": "Señales e instrumentos",
    "goal": "Ver cómo cambia una señal en el tiempo.",
    "lessons": [
      "i:generador",
      "i:sondas",
      "i:tiempo",
      "i:amplitud",
      "i:disparo",
      "u:rc",
      "i:carga",
      "i:corte",
      "i:offset",
      "compensacion",
      "trigger-nivel",
      "muestreo",
      "barrido"
    ],
    "checkpoint": "Configura el generador, estabiliza la captura y compara entrada y salida."
  },
  {
    "title": "Circuitos que forman equipos",
    "goal": "Relacionar alimentación, mando y respuesta.",
    "lessons": [
      "transistor",
      "u:mosfet",
      "fuentes",
      "buck",
      "analogica",
      "realimentacion",
      "rizado",
      "proteccion"
    ],
    "checkpoint": "Separa potencia y mando; reconoce regulación y acondicionamiento."
  },
  {
    "title": "Control digital y bloques",
    "goal": "Investigar condiciones de arranque y funciones.",
    "lessons": [
      "arranque",
      "u:digital",
      "u:bloques",
      "pwm",
      "pullup-bus",
      "adc"
    ],
    "checkpoint": "Distingue alimentación, reset, reloj, control y salida."
  },
  {
    "title": "Diagnóstico por evidencias",
    "goal": "Elegir la siguiente medida que reduce la incertidumbre.",
    "lessons": [
      "hipotesis",
      "casos",
      "u:diagnostico",
      "intermitente",
      "i:metodo",
      "mitades",
      "comparar-sano",
      "esr-caso"
    ],
    "checkpoint": "Compara dos hipótesis y defiende una prueba que las distinga."
  },
  {
    "title": "Reparación y placas complejas",
    "goal": "Transferir el método con documentación y límites.",
    "lessons": [
      "soldadura",
      "equipos",
      "u:multicapa",
      "soldadura-inspeccion"
    ],
    "checkpoint": "Delimita un bloque y prepara una intervención comprobable."
  },
  {
    "title": "Casos completos y criterio profesional",
    "goal": "Documentar, validar y construir experiencia real.",
    "lessons": [
      "validacion",
      "u:informe",
      "caso-final",
      "plan-experiencia"
    ],
    "checkpoint": "Entrega un informe reproducible y define las pruebas de aceptación."
  }
];
