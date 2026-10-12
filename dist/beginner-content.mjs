export const beginnerLessons = [
  {
    "id": "inicio-resistencia",
    "title": "Qué es una resistencia",
    "pattern": "divider",
    "minutes": 10,
    "beginner": true,
    "concept": "Una resistencia es una pieza de dos terminales que limita la corriente. Su valor se expresa en ohmios, cuyo símbolo es Ω. No tiene polaridad: en este componente puedes intercambiar sus extremos.",
    "example": "Imagina el mismo circuito con una pila y una resistencia. Al aumentar la resistencia, circula menos corriente. La pila mantiene aproximadamente su tensión.",
    "contrast": "Una resistencia de 2 000 Ω ofrece más oposición que una de 1 000 Ω. Aún no necesitas calcular la corriente: primero entiende qué cambia.",
    "trap": "Resistencia no significa cortar siempre el paso. Una resistencia normal deja circular corriente; una conexión abierta interrumpe el camino.",
    "question": "¿Qué sucede al aumentar la resistencia manteniendo la misma tensión?",
    "answers": [
      "Circula menos corriente",
      "Circula más corriente",
      "La corriente siempre desaparece"
    ],
    "correct": 0,
    "task": "Dibuja una resistencia con sus dos terminales. Escribe: más resistencia, menos corriente para la misma tensión.",
    "scenes": [
      "Una resistencia es una pieza de dos terminales que limita la corriente. Su valor se expresa en ohmios, cuyo símbolo es Ω. No tiene polaridad: en este componente puedes intercambiar sus extremos.",
      "Imagina el mismo circuito con una pila y una resistencia. Al aumentar la resistencia, circula menos corriente. La pila mantiene aproximadamente su tensión.",
      "Una resistencia de 2 000 Ω ofrece más oposición que una de 1 000 Ω. Aún no necesitas calcular la corriente: primero entiende qué cambia.",
      "Resistencia no significa cortar siempre el paso. Una resistencia normal deja circular corriente; una conexión abierta interrumpe el camino."
    ],
    "video": null
  },
  {
    "id": "inicio-resistencia-medida",
    "title": "Leer y medir una resistencia",
    "pattern": "divider",
    "minutes": 10,
    "beginner": true,
    "concept": "1 kΩ significa 1 000 Ω. El multímetro en la función Ω mide resistencia. Para hacerlo, el circuito debe estar sin alimentación; otras piezas conectadas pueden alterar la lectura.",
    "example": "Una resistencia marcada 1 kΩ y otra marcada 2 kΩ tienen valores de 1 000 y 2 000 Ω. Primero lee el valor; después compara.",
    "contrast": "En nuestro banco: elige Divisor resistivo, pulsa Salida OFF, selecciona Ω, roja OUT y negra GND. Con R2 = 1 000 Ω y circuito sano, el modelo indica 1 000 Ω. Cambia R2 a 2 000 Ω y comprueba.",
    "trap": "Este modelo desconectado mide R2 entre OUT y GND. No traslades esa lectura sin más a una placa real: los caminos en paralelo pueden cambiarla.",
    "question": "¿Cómo debe estar la alimentación al medir Ω?",
    "answers": [
      "Conectada",
      "Desconectada",
      "Da igual"
    ],
    "correct": 1,
    "task": "Sigue los ajustes del ejemplo en el banco integrado. Anota las dos lecturas y explica qué cambiaste.",
    "scenes": [
      "1 kΩ significa 1 000 Ω. El multímetro en la función Ω mide resistencia. Para hacerlo, el circuito debe estar sin alimentación; otras piezas conectadas pueden alterar la lectura.",
      "Una resistencia marcada 1 kΩ y otra marcada 2 kΩ tienen valores de 1 000 y 2 000 Ω. Primero lee el valor; después compara.",
      "En nuestro banco: elige Divisor resistivo, pulsa Salida OFF, selecciona Ω, roja OUT y negra GND. Con R2 = 1 000 Ω y circuito sano, el modelo indica 1 000 Ω. Cambia R2 a 2 000 Ω y comprueba.",
      "Este modelo desconectado mide R2 entre OUT y GND. No traslades esa lectura sin más a una placa real: los caminos en paralelo pueden cambiarla."
    ],
    "video": null
  },
  {
    "id": "inicio-condensador",
    "title": "Qué es un condensador",
    "pattern": "rc-low",
    "minutes": 10,
    "beginner": true,
    "concept": "Condensador y capacitor son dos nombres de la misma pieza. Tiene dos terminales y almacena energía en un campo eléctrico. Su capacidad se expresa en faradios, normalmente en microfaradios (µF) o nanofaradios (nF).",
    "example": "Al conectar una fuente a través de una resistencia, la tensión del condensador sube progresivamente mientras se carga. No salta de cero al valor final de forma instantánea en ese circuito.",
    "contrast": "Una resistencia disipa energía como calor. Un condensador puede almacenarla y devolver parte de ella al descargarse. No son intercambiables.",
    "trap": "Algunos condensadores tienen polaridad y otros no. Un electrolítico polarizado debe conectarse con la orientación indicada. Puede conservar carga después de desconectar.",
    "question": "¿Qué hace un condensador?",
    "answers": [
      "Almacena energía eléctrica",
      "Es siempre un cable",
      "Solo deja pasar corriente en un sentido"
    ],
    "correct": 0,
    "task": "Dibuja sus dos placas separadas y dos terminales. Escribe una diferencia respecto a una resistencia.",
    "scenes": [
      "Condensador y capacitor son dos nombres de la misma pieza. Tiene dos terminales y almacena energía en un campo eléctrico. Su capacidad se expresa en faradios, normalmente en microfaradios (µF) o nanofaradios (nF).",
      "Al conectar una fuente a través de una resistencia, la tensión del condensador sube progresivamente mientras se carga. No salta de cero al valor final de forma instantánea en ese circuito.",
      "Una resistencia disipa energía como calor. Un condensador puede almacenarla y devolver parte de ella al descargarse. No son intercambiables.",
      "Algunos condensadores tienen polaridad y otros no. Un electrolítico polarizado debe conectarse con la orientación indicada. Puede conservar carga después de desconectar."
    ],
    "video": null
  },
  {
    "id": "inicio-condensador-tiempo",
    "title": "Ver cómo se carga y descarga",
    "pattern": "rc-low",
    "minutes": 10,
    "beginner": true,
    "concept": "Una resistencia limita la corriente de carga de un condensador. Con los demás valores iguales, aumentar esa resistencia o la capacidad hace que la carga sea más lenta. El osciloscopio permite ver ese cambio en el tiempo.",
    "example": "Banco integrado: circuito RC paso bajo, R = 1 000 Ω, C = 1 000 nF; generador cuadrada, 100 Hz, 2 Vpp, offset 1 V, salida ON. En el osciloscopio usa DC, 1 V/div y 1 ms/div. La entrada amarilla cambia entre 0 y 2 V; la salida cian tiene bordes redondeados.",
    "contrast": "Con C = 100 nF la salida cambia más deprisa. El multímetro en V DC, roja OUT y negra GND, muestra cerca de 1 V en ambos casos: la media no cuenta toda la historia.",
    "trap": "Vpp significa distancia entre el máximo y el mínimo; offset desplaza el centro de la señal. Aquí solo copia los ajustes y compara las formas. Los estudiarás después.",
    "question": "Con la misma resistencia, ¿qué hace una capacidad mayor?",
    "answers": [
      "Carga más lentamente",
      "Elimina el condensador",
      "Carga siempre instantáneamente"
    ],
    "correct": 0,
    "task": "Compara C = 1 000 nF y C = 100 nF. Anota qué cambia en la pantalla y qué apenas cambia en el multímetro.",
    "scenes": [
      "Una resistencia limita la corriente de carga de un condensador. Con los demás valores iguales, aumentar esa resistencia o la capacidad hace que la carga sea más lenta. El osciloscopio permite ver ese cambio en el tiempo.",
      "Banco integrado: circuito RC paso bajo, R = 1 000 Ω, C = 1 000 nF; generador cuadrada, 100 Hz, 2 Vpp, offset 1 V, salida ON. En el osciloscopio usa DC, 1 V/div y 1 ms/div. La entrada amarilla cambia entre 0 y 2 V; la salida cian tiene bordes redondeados.",
      "Con C = 100 nF la salida cambia más deprisa. El multímetro en V DC, roja OUT y negra GND, muestra cerca de 1 V en ambos casos: la media no cuenta toda la historia.",
      "Vpp significa distancia entre el máximo y el mínimo; offset desplaza el centro de la señal. Aquí solo copia los ajustes y compara las formas. Los estudiarás después."
    ],
    "video": null
  },
  {
    "id": "inicio-bobina",
    "title": "Qué es una bobina",
    "pattern": "relay",
    "minutes": 10,
    "beginner": true,
    "concept": "Una bobina es un conductor enrollado. Cuando circula corriente, crea un campo magnético y almacena energía en él. Su inductancia se mide en henrios (H), frecuentemente en milihenrios (mH).",
    "example": "Al intentar cambiar de golpe la corriente, la bobina genera una tensión que se opone a ese cambio. La idea inicial es esta: la corriente de una bobina no cambia instantáneamente con una tensión finita.",
    "contrast": "El condensador se opone a cambios bruscos de su tensión. La bobina se opone a cambios bruscos de su corriente. Son comportamientos distintos.",
    "trap": "Una bobina puede tener poca resistencia y estar sana. Un pitido de continuidad no demuestra que no tenga espiras en corto.",
    "question": "¿A qué cambio brusco se opone una bobina?",
    "answers": [
      "Al de su corriente",
      "Al de su color",
      "Siempre al de cualquier tensión"
    ],
    "correct": 0,
    "task": "Dibuja varias espiras. Escribe qué magnitud cambia lentamente y compárala con la del condensador.",
    "scenes": [
      "Una bobina es un conductor enrollado. Cuando circula corriente, crea un campo magnético y almacena energía en él. Su inductancia se mide en henrios (H), frecuentemente en milihenrios (mH).",
      "Al intentar cambiar de golpe la corriente, la bobina genera una tensión que se opone a ese cambio. La idea inicial es esta: la corriente de una bobina no cambia instantáneamente con una tensión finita.",
      "El condensador se opone a cambios bruscos de su tensión. La bobina se opone a cambios bruscos de su corriente. Son comportamientos distintos.",
      "Una bobina puede tener poca resistencia y estar sana. Un pitido de continuidad no demuestra que no tenga espiras en corto."
    ],
    "video": null
  },
  {
    "id": "inicio-bobina-proteccion",
    "title": "Por qué una bobina necesita protección",
    "pattern": "relay",
    "minutes": 10,
    "beginner": true,
    "concept": "Si interrumpes la corriente de una bobina, la energía almacenada necesita un camino. Puede aparecer una tensión elevada. En una bobina de relé de corriente continua suele colocarse un diodo de protección.",
    "example": "Un transistor activa una bobina de relé. Al apagarlo, el diodo permite que la corriente de la bobina continúe un tiempo y disminuya, protegiendo el interruptor.",
    "contrast": "Medir pocos ohmios en una bobina informa sobre su conductor. Para estudiar su comportamiento al desconectar interesa observar la tensión con osciloscopio y una conexión adecuada. Aquí solo razonamos el circuito.",
    "trap": "No hagas esta prueba con una bobina real sin protección y supervisión. El banco compartido no simula inductancias ni el pico de desconexión.",
    "question": "¿Para qué sirve el diodo colocado sobre una bobina de relé DC?",
    "answers": [
      "Para dar camino a la corriente al apagar",
      "Para aumentar cualquier tensión sin límite",
      "Para medir su temperatura"
    ],
    "correct": 0,
    "task": "Dibuja bobina, interruptor y camino de descarga. No necesitas calcular valores. El siguiente bloque explica el diodo.",
    "scenes": [
      "Si interrumpes la corriente de una bobina, la energía almacenada necesita un camino. Puede aparecer una tensión elevada. En una bobina de relé de corriente continua suele colocarse un diodo de protección.",
      "Un transistor activa una bobina de relé. Al apagarlo, el diodo permite que la corriente de la bobina continúe un tiempo y disminuya, protegiendo el interruptor.",
      "Medir pocos ohmios en una bobina informa sobre su conductor. Para estudiar su comportamiento al desconectar interesa observar la tensión con osciloscopio y una conexión adecuada. Aquí solo razonamos el circuito.",
      "No hagas esta prueba con una bobina real sin protección y supervisión. El banco compartido no simula inductancias ni el pico de desconexión."
    ],
    "video": null
  },
  {
    "id": "inicio-diodo",
    "title": "Qué es un diodo y cómo orientarlo",
    "pattern": "led",
    "minutes": 10,
    "beginner": true,
    "concept": "El diodo tiene dos terminales: ánodo y cátodo. En condiciones normales conduce principalmente en un sentido. En su símbolo, la barra identifica el cátodo. En muchos diodos axiales una banda marca ese extremo.",
    "example": "En un circuito con pila, resistencia y diodo, la orientación determina si puede circular corriente apreciable. La resistencia limita esa corriente.",
    "contrast": "Una resistencia funciona igual al invertirla. En un diodo, la orientación sí importa. Un LED es un diodo que emite luz cuando conduce en directa.",
    "trap": "El diodo real no es una válvula perfecta: tiene caída de tensión, corriente inversa y límites. No conectes un LED directamente a una fuente sin limitar corriente.",
    "question": "¿Qué identifica la barra en el símbolo del diodo?",
    "answers": [
      "El cátodo",
      "El ánodo",
      "La capacidad"
    ],
    "correct": 0,
    "task": "Dibuja el símbolo y etiqueta ánodo y cátodo. Añade una resistencia en serie para limitar corriente.",
    "scenes": [
      "El diodo tiene dos terminales: ánodo y cátodo. En condiciones normales conduce principalmente en un sentido. En su símbolo, la barra identifica el cátodo. En muchos diodos axiales una banda marca ese extremo.",
      "En un circuito con pila, resistencia y diodo, la orientación determina si puede circular corriente apreciable. La resistencia limita esa corriente.",
      "Una resistencia funciona igual al invertirla. En un diodo, la orientación sí importa. Un LED es un diodo que emite luz cuando conduce en directa.",
      "El diodo real no es una válvula perfecta: tiene caída de tensión, corriente inversa y límites. No conectes un LED directamente a una fuente sin limitar corriente."
    ],
    "video": null
  },
  {
    "id": "inicio-diodo-tipos",
    "title": "Diodo normal, LED y Zener",
    "pattern": "led",
    "minutes": 10,
    "beginner": true,
    "concept": "Comparten el comportamiento de unión, pero se diseñan para tareas diferentes: rectificar, emitir luz o trabajar en una zona inversa controlada. Un Zener requiere limitar su corriente.",
    "example": "Un LED sirve como indicador. Un diodo rectificador dirige corriente. Un Zener, con su resistencia y dentro de sus límites, puede mantener aproximadamente una tensión.",
    "contrast": "La prueba de diodos del multímetro, sin alimentación y con el componente adecuadamente aislado, ayuda a comparar ambos sentidos. No comprueba por sí sola la tensión Zener.",
    "trap": "El banco integrado no incluye un comprobador de diodos: aquí estudia el símbolo y razona; no interpretes sus lecturas como una medición del LED.",
    "question": "¿Qué necesita un Zener para trabajar sin exceder su corriente?",
    "answers": [
      "Limitación de corriente",
      "Siempre un cortocircuito",
      "Ningún componente adicional"
    ],
    "correct": 0,
    "task": "Escribe una aplicación para cada tipo: normal, LED y Zener. Explica por qué no sustituyes uno por otro automáticamente.",
    "scenes": [
      "Comparten el comportamiento de unión, pero se diseñan para tareas diferentes: rectificar, emitir luz o trabajar en una zona inversa controlada. Un Zener requiere limitar su corriente.",
      "Un LED sirve como indicador. Un diodo rectificador dirige corriente. Un Zener, con su resistencia y dentro de sus límites, puede mantener aproximadamente una tensión.",
      "La prueba de diodos del multímetro, sin alimentación y con el componente adecuadamente aislado, ayuda a comparar ambos sentidos. No comprueba por sí sola la tensión Zener.",
      "El banco integrado no incluye un comprobador de diodos: aquí estudia el símbolo y razona; no interpretes sus lecturas como una medición del LED."
    ],
    "video": null
  },
  {
    "id": "inicio-transistor",
    "title": "Qué es un transistor",
    "pattern": "mosfet",
    "minutes": 10,
    "beginner": true,
    "concept": "Un transistor permite controlar una corriente mediante una señal de mando. Para empezar piensa en un interruptor controlado eléctricamente. Habitualmente tiene tres terminales; sus nombres dependen del tipo.",
    "example": "En un montaje con un MOSFET adecuado, una señal de control en la puerta puede permitir corriente por una carga conectada al drenador. La fuente de alimentación aporta la energía de la carga.",
    "contrast": "Un interruptor manual cambia al pulsarlo. Un transistor puede cambiar por una señal eléctrica. También puede amplificar; lo estudiarás después.",
    "trap": "La señal de control no proporciona toda la energía de la carga. Hay un recorrido de mando y un recorrido de potencia.",
    "question": "¿Cuál es la idea inicial de un transistor?",
    "answers": [
      "Controlar una corriente con una señal",
      "Almacenar carga como único uso",
      "Ser siempre una resistencia fija"
    ],
    "correct": 0,
    "task": "Dibuja dos recorridos: mando hacia transistor y alimentación hacia carga. Señala dónde está cada uno.",
    "scenes": [
      "Un transistor permite controlar una corriente mediante una señal de mando. Para empezar piensa en un interruptor controlado eléctricamente. Habitualmente tiene tres terminales; sus nombres dependen del tipo.",
      "En un montaje con un MOSFET adecuado, una señal de control en la puerta puede permitir corriente por una carga conectada al drenador. La fuente de alimentación aporta la energía de la carga.",
      "Un interruptor manual cambia al pulsarlo. Un transistor puede cambiar por una señal eléctrica. También puede amplificar; lo estudiarás después.",
      "La señal de control no proporciona toda la energía de la carga. Hay un recorrido de mando y un recorrido de potencia."
    ],
    "video": null
  },
  {
    "id": "inicio-transistor-terminales",
    "title": "BJT y MOSFET: no mezcles sus terminales",
    "pattern": "mosfet",
    "minutes": 10,
    "beginner": true,
    "concept": "En un BJT los terminales se llaman base, colector y emisor. En un MOSFET se llaman puerta, drenador y fuente. Antes de conectar una pieza concreta consulta su hoja de datos: el orden físico no es universal.",
    "example": "En un NPN como interruptor, una corriente de base adecuada permite controlar la corriente de colector. En un MOSFET se controla la tensión entre puerta y fuente; mover la carga de puerta también exige corriente durante los cambios.",
    "contrast": "Dos piezas con el mismo encapsulado pueden tener terminales distintos. Parecerse por fuera no garantiza la misma conexión ni los mismos límites.",
    "trap": "No memorices izquierda, centro y derecha sin referencia. Identifica el modelo y la orientación del dibujo del fabricante.",
    "question": "¿Dónde confirmas el orden de terminales de una pieza concreta?",
    "answers": [
      "En su hoja de datos",
      "Solo por el tamaño",
      "Siempre es el mismo"
    ],
    "correct": 0,
    "task": "Haz dos dibujos de tres terminales: B, C, E y G, D, S. Explica qué información falta antes de conectarlos.",
    "scenes": [
      "En un BJT los terminales se llaman base, colector y emisor. En un MOSFET se llaman puerta, drenador y fuente. Antes de conectar una pieza concreta consulta su hoja de datos: el orden físico no es universal.",
      "En un NPN como interruptor, una corriente de base adecuada permite controlar la corriente de colector. En un MOSFET se controla la tensión entre puerta y fuente; mover la carga de puerta también exige corriente durante los cambios.",
      "Dos piezas con el mismo encapsulado pueden tener terminales distintos. Parecerse por fuera no garantiza la misma conexión ni los mismos límites.",
      "No memorices izquierda, centro y derecha sin referencia. Identifica el modelo y la orientación del dibujo del fabricante."
    ],
    "video": null
  },
  {
    "id": "inicio-red",
    "title": "Qué es una red o nodo",
    "pattern": "divider",
    "minutes": 10,
    "beginner": true,
    "concept": "En un esquema, una red reúne puntos unidos por conductores ideales sin un componente entre ellos. En una placa corresponde a pistas, pads y vías que forman esa conexión. Un componente separa sus dos extremos en redes distintas.",
    "example": "Un cable que se dobla sigue siendo la misma red. Si entre dos puntos hay una resistencia, esos puntos no pertenecen a la misma red solo por estar unidos a través de ella.",
    "contrast": "Cruzar dos líneas en un dibujo no siempre implica conexión. Mira los puntos de unión y la convención usada en el esquema.",
    "trap": "Compartir un valor de tensión en una situación concreta no demuestra que dos puntos sean la misma red.",
    "question": "¿Qué conserva la misma red?",
    "answers": [
      "Una pista continua sin componentes interpuestos",
      "Una resistencia entre dos puntos",
      "Cualquier par de puntos a igual tensión"
    ],
    "correct": 0,
    "task": "Dibuja dos resistencias en cadena. Marca con tres colores: antes de la primera, la unión central y después de la segunda.",
    "scenes": [
      "En un esquema, una red reúne puntos unidos por conductores ideales sin un componente entre ellos. En una placa corresponde a pistas, pads y vías que forman esa conexión. Un componente separa sus dos extremos en redes distintas.",
      "Un cable que se dobla sigue siendo la misma red. Si entre dos puntos hay una resistencia, esos puntos no pertenecen a la misma red solo por estar unidos a través de ella.",
      "Cruzar dos líneas en un dibujo no siempre implica conexión. Mira los puntos de unión y la convención usada en el esquema.",
      "Compartir un valor de tensión en una situación concreta no demuestra que dos puntos sean la misma red."
    ],
    "video": null
  },
  {
    "id": "inicio-red-recorrido",
    "title": "Unir piezas: serie, paralelo y retorno",
    "pattern": "divider",
    "minutes": 10,
    "beginner": true,
    "concept": "En serie, dos componentes comparten un nodo intermedio sin derivaciones y llevan la misma corriente. En paralelo, ambos extremos de un componente van a las mismas dos redes que los del otro, por lo que tienen la misma tensión.",
    "example": "Dos resistencias una detrás de otra, sin otra rama en su unión, están en serie. Dos resistencias conectadas cada una entre los mismos bornes de una pila están en paralelo.",
    "contrast": "La colocación visual no decide: dos piezas dibujadas juntas pueden no estar en paralelo. Sigue sus dos conexiones.",
    "trap": "Para que circule corriente sostenida hace falta un camino cerrado hasta la fuente. No basta con dibujar solo el cable de ida.",
    "question": "¿Cómo reconoces dos resistencias en paralelo?",
    "answers": [
      "Comparten las mismas dos redes",
      "Están cerca en el dibujo",
      "Comparten solo un extremo"
    ],
    "correct": 0,
    "task": "Dibuja una pila con dos resistencias en serie y luego en paralelo. Marca el camino de ida y retorno. Ahora ya puedes pasar a las magnitudes y al cálculo.",
    "scenes": [
      "En serie, dos componentes comparten un nodo intermedio sin derivaciones y llevan la misma corriente. En paralelo, ambos extremos de un componente van a las mismas dos redes que los del otro, por lo que tienen la misma tensión.",
      "Dos resistencias una detrás de otra, sin otra rama en su unión, están en serie. Dos resistencias conectadas cada una entre los mismos bornes de una pila están en paralelo.",
      "La colocación visual no decide: dos piezas dibujadas juntas pueden no estar en paralelo. Sigue sus dos conexiones.",
      "Para que circule corriente sostenida hace falta un camino cerrado hasta la fuente. No basta con dibujar solo el cable de ida."
    ],
    "video": null
  }
];
export const beginnerBlocks = [
  {
    "title": "Resistencias",
    "goal": "Primera vuelta · Reconocer la pieza, entender su función y medir su resistencia.",
    "lessons": [
      "inicio-resistencia",
      "inicio-resistencia-medida"
    ],
    "checkpoint": "Explica qué cambia al aumentar R y mide Ω con la fuente desconectada."
  },
  {
    "title": "Condensadores o capacitores",
    "goal": "Primera vuelta · Entender el almacenamiento y observar la carga con los tres instrumentos.",
    "lessons": [
      "inicio-condensador",
      "inicio-condensador-tiempo"
    ],
    "checkpoint": "Distingue tensión media y forma de la carga."
  },
  {
    "title": "Bobinas",
    "goal": "Primera vuelta · Relacionar corriente, campo magnético y protección.",
    "lessons": [
      "inicio-bobina",
      "inicio-bobina-proteccion"
    ],
    "checkpoint": "Explica por qué una bobina necesita un camino al desconectarla."
  },
  {
    "title": "Diodos",
    "goal": "Primera vuelta · Reconocer orientación y distinguir sus aplicaciones.",
    "lessons": [
      "inicio-diodo",
      "inicio-diodo-tipos"
    ],
    "checkpoint": "Identifica ánodo y cátodo y explica la resistencia de un LED."
  },
  {
    "title": "Transistores",
    "goal": "Primera vuelta · Separar mando y potencia, sin entrar aún en cálculos.",
    "lessons": [
      "inicio-transistor",
      "inicio-transistor-terminales"
    ],
    "checkpoint": "Distingue BJT y MOSFET y localiza su pinout en documentación."
  },
  {
    "title": "Conexiones y redes",
    "goal": "Primera vuelta · Conectar las piezas conocidas y seguir el camino de la corriente.",
    "lessons": [
      "inicio-red",
      "inicio-red-recorrido"
    ],
    "checkpoint": "Dibuja serie y paralelo y marca cada red sin confundirla con un componente."
  }
];
