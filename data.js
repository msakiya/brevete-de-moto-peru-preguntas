const questionsData = [
  {
    "id": 1,
    "question": "Respecto de los dispositivos de control o regulación del tránsito:",
    "options": {
      "a": "Solo los peatones están obligados a su obediencia.",
      "b": "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú",
      "c": "Solo los conductores están obligados a su obediencia.",
      "d": "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito"
    },
    "answer": "b"
  },
  {
    "id": 2,
    "question": "La señal vertical reglamentaria R-6 “prohibido voltear a la izquierda”, signi ﬁ ca que:",
    "options": {
      "a": "Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.",
      "b": "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.",
      "c": "El único sentido de desplazamiento es continuar de frente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 3,
    "question": "La señal vertical reglamentaria R-3 signi ﬁ ca que:",
    "options": {
      "a": "Nos acercamos a una zona restringida al tránsito.",
      "b": "Está permitido adelantar vehículos.",
      "c": "El único sentido de desplazamiento es continuar de frente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 4,
    "question": "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo signi ﬁ can que:",
    "options": {
      "a": "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.",
      "b": "No está permitido cruzar al otro carril para el adelantamiento vehicular.",
      "c": "Se está reduciendo el ancho de la calzada de la vía por donde se circula.",
      "d": "Se está frente a un lugar de cruce peatonal."
    },
    "answer": "a"
  },
  {
    "id": 5,
    "question": "El color ámbar o amarillo del semáforo signi ﬁ ca que:",
    "options": {
      "a": "Los vehículos deben avanzar.",
      "b": "Los vehículos deben detenerse.",
      "c": "Los vehículos deben acelerar la marcha.",
      "d": "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo"
    },
    "answer": "d"
  },
  {
    "id": 6,
    "question": "Los colores del semáforo tienen el siguiente signi ﬁ cado: rojo:_____; ámbar o amarillo: _____; verde:___.",
    "options": {
      "a": "Detención - prevención - paso.",
      "b": "Detención - paso con prevención - circulación rápida.",
      "c": "Disminución de la velocidad - prevención - paso rápido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 7,
    "question": "¿Qué indica una ﬂ echa verde en un semáforo vehicular?",
    "options": {
      "a": "Se puede continuar con precaución únicamente en la dirección de la ﬂ echa y desde el carril que esta ﬂ echa",
      "b": "No está permitida la circulación en el sentido que indica la ﬂ echa.",
      "c": "Se debe respetar únicamente la luz circular.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 8,
    "question": "La siguiente señal vertical reglamentaria R-53:",
    "options": {
      "a": "Prohíbe estacionar.",
      "b": "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
      "c": "Prohíbe la carga y descarga.",
      "d": "Prohíbe la circulación de vehículos motorizados."
    },
    "answer": "b"
  },
  {
    "id": 9,
    "question": "Si llega a una intersección y visualiza el semáforo con una ﬂ echa roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
    "options": {
      "a": "Avanzar en cualquier sentido, ya que la luz circular está en verde.",
      "b": "Avanzar, pero el giro a la izquierda está prohibido por la ﬂ echa roja.",
      "c": "Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 10,
    "question": "Si llega a una intersección donde el semáforo muestra una luz intermitente, qué a ﬁ rmación es correcta:",
    "options": {
      "a": "Si la luz intermitente es roja, ésta es equivalente a un “CEDA EL PASO”.",
      "b": "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.",
      "c": "Si la luz intermitente es verde, ésta es equivalente a un “PARE”.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 11,
    "question": "¿La luz intermitente roja es igual que una señal de PARE?",
    "options": {
      "a": "Verdad.",
      "b": "Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.",
      "c": "Falso.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 12,
    "question": "Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:",
    "options": {
      "a": "Girar desde cualquier carril.",
      "b": "Colocarse en el carril derecho, luego girar con precaución.",
      "c": "Colocarse en el carril más despejado de trá ﬁ co, luego girar con precaución.",
      "d": "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de"
    },
    "answer": "d"
  },
  {
    "id": 13,
    "question": "Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?",
    "options": {
      "a": "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con",
      "b": "Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces",
      "c": "Se debe advertir utilizando el claxon, identi ﬁ car una brecha y realizar el cambio de carril con precaución.",
      "d": "Está prohibido el cambio de carril en vías de un solo sentido."
    },
    "answer": "a"
  },
  {
    "id": 14,
    "question": "Respecto a los cruces a nivel con vías férreas, señale la a ﬁ rmación correcta:",
    "options": {
      "a": "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la",
      "b": "Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan",
      "c": "El vehículo que llegue primero tiene preferencia.",
      "d": "Tiene preferencia el conductor que viene por la derecha del otro."
    },
    "answer": "a"
  },
  {
    "id": 15,
    "question": "Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policiía Nacional del Perú asignado al control del tránsito, corresponde:",
    "options": {
      "a": "Detenerse hasta que cambie a luz verde.",
      "b": "Continuar la marcha.",
      "c": "Estar prevenido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 16,
    "question": "Está prohibido estacionar un vehículo:",
    "options": {
      "a": "En las curvas.",
      "b": "Dentro de una intersección.",
      "c": "Frente a la entrada de garajes y de recintos militares o policiales.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 17,
    "question": "La siguiente señal vertical reglamentaria (R-29:",
    "options": {
      "a": "Prohíbe el uso de la bocina en vías urbanas.",
      "b": "Prohíbe el uso de la bocina en carreteras.",
      "c": "Prohíbe el uso de la bocina.",
      "d": "Prohíbe hacer ruido."
    },
    "answer": "c"
  },
  {
    "id": 18,
    "question": "Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:",
    "options": {
      "a": "Conduzca un vehículo automotor sin tener licencia de conducir.",
      "b": "Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.",
      "c": "Conduzca un vehículo sin contar con el SOAT.",
      "d": "a y c son correctas"
    },
    "answer": "a"
  },
  {
    "id": 19,
    "question": "En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
    "options": {
      "a": "Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.",
      "b": "No debe aumentar la velocidad hasta que el vehículo lo sobrepase.",
      "c": "Debe disminuir drásticamente la velocidad de su vehículo.",
      "d": "Debe detener su vehículo."
    },
    "answer": "b"
  },
  {
    "id": 20,
    "question": "¿Cuál de las siguientes a ﬁ rmaciones es correcta?",
    "options": {
      "a": "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.",
      "b": "El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.",
      "c": "El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 21,
    "question": "En la circulación vehicular, es correcto a ﬁ rmar que:",
    "options": {
      "a": "Los vehículos deben circular sobre líneas continuas delimitadoras de carriles, ante la congestion vehicular.",
      "b": "Los vehículos pueden circular sobre líneas continuas delimitadoras de carriles, ante la congestion vehicular.",
      "c": "Los vehículos deben circular dentro de las líneas de carril, salvo cuando se realicen las maniobras que indica el",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 22,
    "question": "En caso de accidentes, el SOAT cubre los daños que sufren:",
    "options": {
      "a": "Solo los ocupantes del vehículo.",
      "b": "Los ocupantes y terceros no ocupantes del vehículo.",
      "c": "Solo terceros afectados.",
      "d": "Solo el conductor del vehículo."
    },
    "answer": "b"
  },
  {
    "id": 23,
    "question": "¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?",
    "options": {
      "a": "Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.",
      "b": "Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un",
      "c": "El Seguro Obligatorio de Accidentes de Tránsito - SOAT.",
      "d": "No es obligatorio contar con un seguro."
    },
    "answer": "c"
  },
  {
    "id": 24,
    "question": "Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo o ﬁ cial:",
    "options": {
      "a": "Cuando emita señales visibles.",
      "b": "Cuando emita señales audibles.",
      "c": "Cuando emita señales audibles y visibles.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 25,
    "question": "Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?",
    "options": {
      "a": "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.",
      "b": "Adelantar por el lado izquierdo, pero con precaución.",
      "c": "Tocar el claxon para alertar que está pasando.",
      "d": "Adelantar muy despacio."
    },
    "answer": "a"
  },
  {
    "id": 26,
    "question": "¿Qué signi ﬁ ca un triángulo rojo de seguridad colocado en la calzada?",
    "options": {
      "a": "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.",
      "b": "Zona de obras por reparación en la calzada.",
      "c": "Que el vehículo que lo enfrenta debe detenerse.",
      "d": "a y c son correctas."
    },
    "answer": "a"
  },
  {
    "id": 27,
    "question": "¿En la conducción vehicular, existe excepción a la obligación de conservar la distancia obligatoria entre vehículos?",
    "options": {
      "a": "Si existe, y es para los cortejos fúnebres, convoyes militares y policiales y caravanas autorizadas.",
      "b": "No existe ninguna excepción.",
      "c": "Si existe, y es para el caso de congestión vehicular.",
      "d": "La norma no regula la obligación de conservar una distancia obligatoria entre vehículos."
    },
    "answer": "a"
  },
  {
    "id": 28,
    "question": "En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasiﬁ cación?",
    "options": {
      "a": "No.",
      "b": "Sí.",
      "c": "Depende de la intersección.",
      "d": "No se encuentra regulado en el reglamento."
    },
    "answer": "b"
  },
  {
    "id": 29,
    "question": "Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:",
    "options": {
      "a": "Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.",
      "b": "Disminuir su velocidad y pasar con cuidado.",
      "c": "Sobre parar y pasar rápidamente.",
      "d": "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución."
    },
    "answer": "d"
  },
  {
    "id": 30,
    "question": "¿Cuál es la diferencia entre las señales P-2A y P-1A?",
    "options": {
      "a": "No hay diferencia, se usan indistintamente.",
      "b": "La señal P-2A se utiliza en situaciones de mayor riesgo.",
      "c": "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia",
      "d": "La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia"
    },
    "answer": "c"
  },
  {
    "id": 31,
    "question": "¿Qué indica la señal R-30F?",
    "options": {
      "a": "Tener precaución con vehículos lentos.",
      "b": "Regula la velocidad máxima permitida en curvas.",
      "c": "Regula la velocidad máxima en zonas rurales.",
      "d": "No se encuentra regulada en la norma."
    },
    "answer": "b"
  },
  {
    "id": 32,
    "question": "¿Que indica la siguiente señal R-23?",
    "options": {
      "a": "Prohibida la circulación de motocicletas.",
      "b": "No estacionar motocicletas.",
      "c": "a) y b) son correctas.",
      "d": "No se encuentra regulada en la norma."
    },
    "answer": "a"
  },
  {
    "id": 33,
    "question": "Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
    "options": {
      "a": "Cualquiera de los dos.",
      "b": "El que se aproxime por la derecha del otro.",
      "c": "El que se aproxime por la izquierda del otro.",
      "d": "El que haga sonar la bocina primero."
    },
    "answer": "b"
  },
  {
    "id": 34,
    "question": "En una intersección no regulada (sin señalización) tiene preferencia de paso:",
    "options": {
      "a": "El vehículo que ingresó primero a la intersección.",
      "b": "El vehículo que haga sonar la bocina primero.",
      "c": "El vehículo que haga cambio de luces primero.",
      "d": "Cualquier vehículo."
    },
    "answer": "a"
  },
  {
    "id": 35,
    "question": "En una rotonda, tiene prioridad de paso el vehículo que:",
    "options": {
      "a": "Quiere ingresar a la rotonda.",
      "b": "Circula por ella.",
      "c": "Acelera primero.",
      "d": "Hace sonar la bocina."
    },
    "answer": "b"
  },
  {
    "id": 36,
    "question": "El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.",
    "options": {
      "a": "Derecha.",
      "b": "Izquierda.",
      "c": "Berma.",
      "d": "Por la derecha o izquierda."
    },
    "answer": "b"
  },
  {
    "id": 37,
    "question": "Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?",
    "options": {
      "a": "Manejar normalmente.",
      "b": "Manejar despacio.",
      "c": "Abstenerse de manejar.",
      "d": "Manejar con un copiloto"
    },
    "answer": "c"
  },
  {
    "id": 38,
    "question": "Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:",
    "options": {
      "a": "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identi ﬁ cación vehicular.",
      "b": "Certi ﬁ cado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.",
      "c": "Contrato de compraventa del vehículo.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "a"
  },
  {
    "id": 39,
    "question": "La siguiente señal indica:",
    "options": {
      "a": "Que solo las motocicletas tienen preferencia de paso en la vía o carril.",
      "b": "Que solo las motocicletas pueden circular por la vía o carril.",
      "c": "Que las motocicletas pueden compartir la vía o carril con otro vehículo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 40,
    "question": "Al cambiar de dirección, un conductor debe:",
    "options": {
      "a": "Señalizar toda la maniobra hasta su culminación.",
      "b": "Cambiar de dirección y luego señalizar.",
      "c": "No existe ninguna obligación.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 41,
    "question": "¿Está permitido conducir un vehículo con el motor en punto neutro?",
    "options": {
      "a": "Sí, pero solo si está bajando una pendiente.",
      "b": "No, está prohibido.",
      "c": "Sí, en caso de que el conductor no sea novato.",
      "d": "No se encuentra regulado en la norma."
    },
    "answer": "b"
  },
  {
    "id": 42,
    "question": "Si la licencia de conducir no se encuentra vigente, los vehículos que autoriza a conducir dicha licencia:",
    "options": {
      "a": "No podrán ser conducidos.",
      "b": "Podrán ser conducidos únicamente en zonas urbanas.",
      "c": "Podrán ser conducidos hasta por 90 días posteriores a la pérdida de vigencia de la licencia.",
      "d": "Podrán ser conducidos con normalidad hasta que renueve su licencia."
    },
    "answer": "a"
  },
  {
    "id": 43,
    "question": "De acuerdo con el sistema de control de licencias de conducir por puntos:",
    "options": {
      "a": "Determinadas infracciones suman puntos.",
      "b": "Una infracción puede sumar o disminuir puntos, a elección del infractor.",
      "c": "Determinadas infracciones restan puntos.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 44,
    "question": "¿Cuál es la consecuencia de acumular 100 puntos en la licencia de conducir en un período de 24 meses?",
    "options": {
      "a": "Suspensión de licencia de conducir.",
      "b": "Anulación de la Placa Única Nacional de Rodaje.",
      "c": "Inhabilitación deﬁ nitiva para obtener una licencia de conducir.",
      "d": "Internamiento vehicular."
    },
    "answer": "a"
  },
  {
    "id": 45,
    "question": "Se entiende por carril a la:",
    "options": {
      "a": "Parte de la vía destinada a la circulación de peatones.",
      "b": "Parte de la calzada destinada al tránsito de una ﬁ la de vehículos.",
      "c": "Vía rural destinada a la circulación de peatones y animales.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 46,
    "question": "Se entiende por línea de parada a:",
    "options": {
      "a": "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener",
      "b": "Las líneas que se encuentran en los lugares del estacionamiento.",
      "c": "El lugar utilizado para embarcar y desembarcar pasajeros.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "a"
  },
  {
    "id": 47,
    "question": "La siguiente señal vertical reglamentaria P-17A, indica:",
    "options": {
      "a": "Reducción de la calzada al lado derecho.",
      "b": "Reducción de la calzada al lado izquierdo.",
      "c": "Reducción de la calzada en ambos lados.",
      "d": "Ensanchamiento de la calzada en ambos lados."
    },
    "answer": "c"
  },
  {
    "id": 48,
    "question": "En caso de encontrar marcación de doble línea amarilla compuesta por un trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
    "options": {
      "a": "Se puede adelantar en ambos sentidos.",
      "b": "No está permitido adelantar en ningún sentido.",
      "c": "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar).",
      "d": "Respetar la línea que está de su lado (si es discontinua, no adelantar; si es continua, está permitido adelantar)"
    },
    "answer": "c"
  },
  {
    "id": 49,
    "question": "Se de ﬁ ne como zona rígida al:",
    "options": {
      "a": "Área donde se prohíbe la circulación de vehículos.",
      "b": "Área donde se prohíbe la circulación de peatones.",
      "c": "Área de la vía en la que se prohíbe el estacionamiento de vehículos.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "c"
  },
  {
    "id": 50,
    "question": "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito signiﬁ ca:",
    "options": {
      "a": "Obligación de detenerse de quien así lo enfrente.",
      "b": "Continuar la marcha por el carril izquierdo de la calzada.",
      "c": "Continuar la marcha.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 51,
    "question": "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
    "options": {
      "a": "30km/h.",
      "b": "40 km/h.",
      "c": "60 km/h.",
      "d": "80 km/h"
    },
    "answer": "b"
  },
  {
    "id": 52,
    "question": "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en avenidas es de:",
    "options": {
      "a": "30km/h.",
      "b": "40 km/h.",
      "c": "60 km/h.",
      "d": "80 km/h."
    },
    "answer": "c"
  },
  {
    "id": 53,
    "question": "Siempre que no exista una señal de límite de velocidad en zonas urbanas, el límite máximo de velocidad en zona escolar es de:",
    "options": {
      "a": "20km/h.",
      "b": "30 km/h.",
      "c": "35 km/h.",
      "d": "50 km/h."
    },
    "answer": "b"
  },
  {
    "id": 54,
    "question": "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
    "options": {
      "a": "80 km/h.",
      "b": "90 km/h.",
      "c": "100 km/h.",
      "d": "110 km/h."
    },
    "answer": "c"
  },
  {
    "id": 55,
    "question": "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad es de:",
    "options": {
      "a": "80 km/h. para automóviles",
      "b": "90 km/h. para camionetas",
      "c": "70 km/h. para motocicletas",
      "d": "100 km/h. para automóviles, camionetas y motocicletas."
    },
    "answer": "d"
  },
  {
    "id": 56,
    "question": "Siempre que no exista una señal de límite de velocidad mínima, el límite mínimo de velocidad en zona urbana y en carreteras es de:",
    "options": {
      "a": "30km/h.",
      "b": "La mitad de la velocidad máxima establecida para cada tipo de vía.",
      "c": "20 km/h.",
      "d": "15 km/h."
    },
    "answer": "b"
  },
  {
    "id": 57,
    "question": "¿Cuál es la sanción por conducir con presencia de alcohol en la sangre en proporción mayor a lo previsto en el Código Penal, o bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobado con el examen respectivo, o por negarse al mismo y que haya participado en un accidente de tránsito?",
    "options": {
      "a": "Multa.",
      "b": "Cancelación de licencia de conducir.",
      "c": "Suspensión de la licencia de conducir.",
      "d": "Multa, cancelación de la licencia de conducir e inhabilitación de ﬁ nitiva para obtener una licencia de conducir."
    },
    "answer": "d"
  },
  {
    "id": 58,
    "question": "¿Cuál es la sanción si en un operativo de alcoholemia usted es intervenido y se comprueba que ha consumido alcohol por encima del límite legal, o está conduciendo bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobada con el examen respectivo?",
    "options": {
      "a": "Una multa",
      "b": "La suspensión de la licencia de conducir.",
      "c": "Multa y suspensión de la licencia de conducir por 3 años.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 59,
    "question": "La frecuencia de la inspección técnica de una moto (categoría L3) y de un sidecar (categoría L4) es:",
    "options": {
      "a": "Cada medio año.",
      "b": "Cada año.",
      "c": "Cada dos años.",
      "d": "Cada tres años."
    },
    "answer": "b"
  },
  {
    "id": 60,
    "question": "¿Cuál es el plazo de vigencia del SOAT?",
    "options": {
      "a": "1 año.",
      "b": "6 meses.",
      "c": "4 años.",
      "d": "2 años."
    },
    "answer": "a"
  },
  {
    "id": 61,
    "question": "Si ocurre un accidente de tránsito, ¿qué obligación tiene el conductor, el propietario del vehículo o el prestador del servicio de transporte?",
    "options": {
      "a": "Dar aviso a los bomberos.",
      "b": "Dar aviso solo a la compañía de seguros.",
      "c": "Dar aviso a la compañía de seguros y dejar constancia en la delegación de la Policía Nacional del Perú más",
      "d": "Dar aviso únicamente a la Policía Nacional del Perú."
    },
    "answer": "c"
  },
  {
    "id": 62,
    "question": "Si una licencia de conducir consiga alguna restricción, es correcto a ﬁ rmar que:",
    "options": {
      "a": "Dicha restricción es meramente informativa.",
      "b": "Es una obligación cumplir con la restricción.",
      "c": "Incumplir la restricción no genera un riesgo para la seguridad vial.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 63,
    "question": "La señal preventiva P-33A, signi ﬁ ca:",
    "options": {
      "a": "Señal de curva sinuosa.",
      "b": "Señal de proximidad a un badén.",
      "c": "Señal de proximidad de un reductor de velocidad tipo resalto.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 64,
    "question": "¿Está permitido usar la bocina de su vehículo para advertir al conductor del vehículo que circula delante, que será adelantado?",
    "options": {
      "a": "Sí, siempre y cuando el sonido no sea estridente.",
      "b": "Si, salvo prohibición expresa mediante la correspondiente señal.",
      "c": "No, está prohibido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 65,
    "question": "Si observa que se aproxima una ambulancia sin las luces especiales encendidas y sin sirena, es correcto aﬁ rmar que:",
    "options": {
      "a": "No estamos obligados a darle preferencia de paso.",
      "b": "Estamos obligados a darle prioridad de paso por ser una ambulancia.",
      "c": "Está informando que está en servicio de urgencia.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 66,
    "question": "Si se encuentra en una intersección y se enciende la luz verde del semáforo y observa que en la calle transversal hay vehículos o personas despejando la intersección, ¿qué debe hacer?",
    "options": {
      "a": "No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar.",
      "b": "Tocar el claxon para que se apuren en pasar.",
      "c": "Bajar del vehículo y reclamar la falta al infractor.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 67,
    "question": "En señalética vial, el color __________ en el pavimento es utilizado para carriles de trá ﬁ co en sentido opuesto y el color __________ en el pavimento es utilizado como separador de carriles de trá ﬁ co en el mismo sentido.",
    "options": {
      "a": "Amarillo - blanco.",
      "b": "Blanco - Amarillo.",
      "c": "Azul - rojo.",
      "d": "Rojo - Amarillo."
    },
    "answer": "a"
  },
  {
    "id": 68,
    "question": "Si una ﬁ la de escolares cruza la calzada fuera del crucero peatonal, ¿qué acción se debe tomar?",
    "options": {
      "a": "Advertir con el claxon.",
      "b": "Advertir a viva voz.",
      "c": "Parar y ceder el paso.",
      "d": "Continuar la marcha lentamente."
    },
    "answer": "c"
  },
  {
    "id": 69,
    "question": "Si se aproxima a una zona escolar, ¿que acción debe realizar?",
    "options": {
      "a": "No tiene ninguna obligación si no hay señalización.",
      "b": "Disminuir la velocidad a 40 Km/h.",
      "c": "Disminuir la velocidad a 30 Km/h.",
      "d": "Disminuir la velocidad a 35 km/h."
    },
    "answer": "c"
  },
  {
    "id": 70,
    "question": "Tienen el objetivo de noti ﬁ car a los usuarios las limitaciones, prohibiciones o restricciones en el uso de la vía.",
    "options": {
      "a": "Señales reguladoras o de reglamentación.",
      "b": "Señales preventivas.",
      "c": "Señales informativas.",
      "d": "Señales horizontales"
    },
    "answer": "a"
  },
  {
    "id": 71,
    "question": "Tienen el propósito de advertir a los usuarios sobre la existencia y naturaleza de un peligro en la vía.",
    "options": {
      "a": "Señales reguladoras o de reglamentación.",
      "b": "Señales preventivas.",
      "c": "Señales informativas.",
      "d": "Señales horizontales."
    },
    "answer": "b"
  },
  {
    "id": 72,
    "question": "Es una infracción de tránsito:",
    "options": {
      "a": "No detenerse totalmente en una señal de PARE.",
      "b": "Arrojar, depositar o abandonar objetos o sustancias en la vía pública que di ﬁ culten la circulación.",
      "c": "Utilizar la bocina para llamar la atención en forma innecesaria.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 73,
    "question": "¿Qué debería hacer el conductor al acercarse a una señal de “CEDA EL PASO” en una intersección?",
    "options": {
      "a": "Ceder el paso a los vehículos de emergencia.",
      "b": "Mantener la velocidad y avanzar con cuidado.",
      "c": "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía",
      "d": "Parar totalmente y luego avanzar con cuidado."
    },
    "answer": "c"
  },
  {
    "id": 74,
    "question": "No se debe conducir un vehículo:",
    "options": {
      "a": "Si no se cuenta con el SOAT.",
      "b": "En retroceso, salvo las excepciones que establece la norma.",
      "c": "Si no se tiene la licencia para el tipo de vehículo que se quiere conducir.",
      "d": "Todas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 75,
    "question": "¿Qué debe hacer si se aproxima a una intersección sin semáforo y sin presencia de la Policía de Tránsito, y observa que un peatón está cruzando por el paso peatonal?",
    "options": {
      "a": "Disminuir la velocidad y pasar con cuidado.",
      "b": "Detener el vehículo y ceder el paso al peatón.",
      "c": "Continuar porque usted tiene la prioridad.",
      "d": "Incrementar la velocidad para adelantar el cruce el peatón."
    },
    "answer": "b"
  },
  {
    "id": 76,
    "question": "Sobre el uso del casco protector en la conducción de la motocicleta, es correcto a ﬁ rmar que:",
    "options": {
      "a": "El uso del casco es obligatorio únicamente para el conductor.",
      "b": "El uso del casco es obligatorio para el conductor y el acompañante.",
      "c": "El uso del casco no es obligatorio.",
      "d": "Todas las aternativas son incorrectas."
    },
    "answer": "b"
  },
  {
    "id": 77,
    "question": "Las motocicletas al circular por una vía deben hacerlo por el carril de ________________",
    "options": {
      "a": "La Izquierda.",
      "b": "El medio.",
      "c": "La derecha.",
      "d": "La izquierda y la derecha"
    },
    "answer": "c"
  },
  {
    "id": 78,
    "question": "Sobre el uso de la bocina del vehículo, es correcto a ﬁ rmar que:",
    "options": {
      "a": "El conductor debe tratar de no utilizar la bocina para llamar la atención en forma innecesaria.",
      "b": "El uso de la bocina para llamar la atención en forma innecesaria no es una infracción al tránsito.",
      "c": "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas.",
      "d": "a y b son correctas."
    },
    "answer": "c"
  },
  {
    "id": 79,
    "question": "Una línea blanca continua en el sentido longitudinal de una vía, que se coloca en el pavimento, le indica al conductor:",
    "options": {
      "a": "Que se puede adelantar, debido a que la línea no es amarilla continua.",
      "b": "Que está prohibido cruzar la línea y no hay excepciones.",
      "c": "Que está prohibido pasar al otro lado de la línea con algunas excepciones.",
      "d": "Que es zona de peatones."
    },
    "answer": "c"
  },
  {
    "id": 80,
    "question": "¿Cuál es el número máximo de personas que puede transportar una motocicleta?",
    "options": {
      "a": "Es igual al número de asientos señalados en la tarjeta de identi ﬁ cación vehicular.",
      "b": "No existe prohibición sobre un número máximo de personas que se puede transportar.",
      "c": "La restricción sobre un número máximo de personas que se puede transportar se aplica para el asiento delantero,",
      "d": "Se puede transportar a todas las personas que entren en el vehículo, sin restricción, siempre y cuando no"
    },
    "answer": "a"
  },
  {
    "id": 81,
    "question": "La acción correcta al abastecer de combustible su vehículo, es:",
    "options": {
      "a": "Asegurarse de que todos los pasajeros permanezcan a bordo del vehículo.",
      "b": "Abstenerse de fumar tanto el conductor como sus acompañantes.",
      "c": "Mantener encendido el motor del vehículo.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 82,
    "question": "Si usted desea realizar una competencia de carreras entre su vehículo y otro vehículo motorizado; para ello puede utilizar:",
    "options": {
      "a": "Las vías aledañas del parque del distrito en el cual reside, en el horario de 11:00 pm. a 5:00 am.",
      "b": "Un circuito de carrera, autódromo o pista de aceleración autorizado por la autoridad competente.",
      "c": "Las vías aledañas del parque del distrito en el cual reside, siempre y cuando tenga el permiso municipal",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 83,
    "question": "Señale cuál de las siguientes conductas constituye una infracción al tránsito:",
    "options": {
      "a": "Circular en forma desordenada o hacienda maniobras peligrosas.",
      "b": "Utilizar la bocina para llamar la atención en forma innecesaria.",
      "c": "Conducir un vehículo con el motor en punto neutro o apagado.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 84,
    "question": "La marcas en el pavimento constituyen un elemento indispensable para la operación vehicular, pues su función es:",
    "options": {
      "a": "Reemplazar a la señalización vertical cuando ésta no se encuentra en la vía, por tal motivo son colocadas donde",
      "b": "Guiar a los usuarios únicamente en las vías que presentan peligros.",
      "c": "Reglamentar la circulación, así como advertir y guiar a los usuarios de la vía.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "c"
  },
  {
    "id": 85,
    "question": "Las marcas en el pavimento de color __________ complementan las señales informativas, como por ejemplo las zonas de estacionamiento para personas con movilidad reducida.",
    "options": {
      "a": "Blanco.",
      "b": "Azul.",
      "c": "Rojo.",
      "d": "Gris."
    },
    "answer": "b"
  },
  {
    "id": 86,
    "question": "La línea central de color amarillo en el pavimento es continua cuando:",
    "options": {
      "a": "No está permitido cruzar al otro carril.",
      "b": "Está permitido cruzar al otro carril para el adelantamiento.",
      "c": "Se trata de una vía de doble sentido de circulación, que permite cruzar al otro carril.",
      "d": "Separa corrientes de trá ﬁ co en el mismo sentido."
    },
    "answer": "a"
  },
  {
    "id": 87,
    "question": "Si un conductor que circula por el carril derecho de una vía se encuentra con las ﬂ echas inclinadas que se muestran en la ﬁ gura, su conducta correcta es:",
    "options": {
      "a": "Continuar la circulación por el carril en que se encuentra.",
      "b": "Adelantar al vehículo que se encuentra delante de él y que circula por el carril izquierdo.",
      "c": "No adelantar al vehículo que tiene adelante y que circula por el carril izquierdo y continuar por su carril.",
      "d": "Cambiarse al carril izquierdo con precaución."
    },
    "answer": "d"
  },
  {
    "id": 88,
    "question": "Si durante la conducción vehicular, un efectivo de la Policía de Tránsito le solicita al conductor someterse a una prueba de alcoholemia; la acción correcta del conductor es:",
    "options": {
      "a": "Someterse a la prueba de alcoholemia, ya que está obligado a ello ante la solicitud del efectivo de la Policía de",
      "b": "Someterse o negarse a la prueba de alcoholemia, ya que no constituye una obligación del conductor realizarse",
      "c": "Negarse a la prueba de alcoholemia, ya que únicamente es exigible si ha participado en un accidente de tránsito.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 89,
    "question": "¿Cuál de las siguientes conductas no es una infracción de tránsito?",
    "options": {
      "a": "Llevar las placas de rodaje en el lugar que no corresponde.",
      "b": "Seguir a los vehículos de emergencia y vehículos o ﬁ ciales para avanzar más rápidamente.",
      "c": "Arrojar objetos en la vía pública que di ﬁ culten la circulación.",
      "d": "Detenerse totalmente en una señal de PARE cuando no hay peatones y/o vehículos circulando por la vía"
    },
    "answer": "d"
  },
  {
    "id": 90,
    "question": "Si la persona conduciendo sale de su propiedad y tiene que cruzar la acera e ingresar a una vía, la conducta correcta es:",
    "options": {
      "a": "Dar preferencia de paso solo a los vehículos que circulan por la vía, pero no a los peatones.",
      "b": "Dar preferencia de paso a los vehículos que circulan por la vía y a los peatones que circulan por la acera.",
      "c": "Tocar el claxon para advertir a los peatones que circulen por la acera, que se detengan.",
      "d": "Salir rápidamente, a ﬁ n de evitar accidentes."
    },
    "answer": "b"
  },
  {
    "id": 91,
    "question": "¿Qué signi ﬁ ca una línea continua blanca pintada entre el carril de la derecha y la berma de una carretera?",
    "options": {
      "a": "Un carril para motocicletas.",
      "b": "Una línea que divide el área peatonal y el área de vehículos.",
      "c": "Una línea que puede cruzarse para rebasar en caso de congestion.",
      "d": "Que no se debe conducir atravesándola, al menos que haya una situación de emergencia."
    },
    "answer": "d"
  },
  {
    "id": 92,
    "question": "En el caso representado en el siguiente grá ﬁ co ¿el vehículo rojo puede rebasar al azul?",
    "options": {
      "a": "Puede hacerlo si no viene un vehículo en el sentido contrario.",
      "b": "Puede hacerlo solo si, el vehículo en sentido contrario está lejos y alcanza hacer la maniobra con seguridad.",
      "c": "No puede hacerlo.",
      "d": "Puede hacerlo por la izquierda."
    },
    "answer": "c"
  },
  {
    "id": 93,
    "question": "La siguiente señal (R-17), signi ﬁ ca:",
    "options": {
      "a": "Prohibido estacionar.",
      "b": "Prohibida la circulación de vehículos automotores.",
      "c": "Prohibida la circulación de autos particulares.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 94,
    "question": "Si usted se encuentra conduciendo su vehículo por una vía y antes de cruzar la intersección se encuentra con la señal R-4, esta le indica:",
    "options": {
      "a": "Que la calle está clausurada.",
      "b": "Que está por ingresar a una vía de sentido contrario y no debe entrar.",
      "c": "Que debe parar totalmente antes de poder ingresar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 95,
    "question": "La siguiente señal (P-36), signi ﬁ ca:",
    "options": {
      "a": "Proximidad de un túnel.",
      "b": "Super ﬁ cie deslizante.",
      "c": "Prender las luces bajas.",
      "d": "Mantener la distancia entre vehículos por seguridad."
    },
    "answer": "b"
  },
  {
    "id": 96,
    "question": "La siguiente señal (R-14), signi ﬁ ca:",
    "options": {
      "a": "Circular por el carril de la derecha.",
      "b": "Circular por el carril central.",
      "c": "Circular solo en el sentido indicado por la ﬂ echa.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 97,
    "question": "La siguiente señal (P-6) signi ﬁ ca:",
    "options": {
      "a": "Intersección no semaforizada.",
      "b": "Intersección peligrosa.",
      "c": "La proximidad de un cruce o intersección de 2 vías al mismo nivel en ángulo recto.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 98,
    "question": "La siguiente señal (R-30C), signi ﬁ ca:",
    "options": {
      "a": "Que la velocidad máxima de la vía es de 50 km/h.",
      "b": "Que la velocidad mínima de la vía es de 50 km/h.",
      "c": "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h.",
      "d": "Que al salir de la vía por donde está circulando, la velocidad mínima es 50 km/h."
    },
    "answer": "c"
  },
  {
    "id": 99,
    "question": "La siguiente señal (R-5-4), signi ﬁ ca:",
    "options": {
      "a": "Que la vía no continúa y los conductores deben girar a la izquierda.",
      "b": "Que la intersección contempla giros tangentes a la izquierda en ambos sentidos.",
      "c": "Que la intersección está en mantenimiento y que por el momento solo se puede girar a la izquierda.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 100,
    "question": "La siguiente señal (R-9), signi ﬁ ca:",
    "options": {
      "a": "Que no está permitido girar en U.",
      "b": "Que está permitido el giro en U.",
      "c": "Que si desea puede girar a la izquierda.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 101,
    "question": "La siguiente señal (R-5-2), signi ﬁ ca:",
    "options": {
      "a": "Que la vía solo permite girar a la izquierda.",
      "b": "Prevención por bifurcación de la vía.",
      "c": "Que el carril por donde circula permite girar a la izquierda o seguir de frente.",
      "d": "No es una señal válida en el Perú."
    },
    "answer": "c"
  },
  {
    "id": 102,
    "question": "La siguiente señal (R-20), signi ﬁ ca:",
    "options": {
      "a": "Que el peatón antes de cruzar debe mirar si se acercan autos por la derecha.",
      "b": "Que el conductor que viene por la derecha debe tener cuidado con los peatones.",
      "c": "Que los peatones deben circular por la izquierda.",
      "d": "Que los peatones deben circular por la derecha."
    },
    "answer": "c"
  },
  {
    "id": 103,
    "question": "Es una conducta que se sanciona:",
    "options": {
      "a": "Rendir la evaluación teórica para obtener una licencia de conducir, hacienda uso de celulares, equipos o materiales",
      "b": "Ofrecer un bene ﬁ cio indebido para obtener una licencia de conducir.",
      "c": "Realizar el proceso de obtención de una licencia de conducir, a través de tramitadores.",
      "d": "Todas las anteriores."
    },
    "answer": "d"
  },
  {
    "id": 104,
    "question": "La siguiente señal (R-48), signi ﬁ ca:",
    "options": {
      "a": "Los peatones deben circular por la derecha y los camiones por la izquierda.",
      "b": "Los peatones deben tener cuidado con los camiones.",
      "c": "Zona de carga y descarga.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 105,
    "question": "La siguiente señal (R-49), signi ﬁ ca:",
    "options": {
      "a": "Está permitido cambiar de carril por la izquierda y por la derecha.",
      "b": "Se debe mantener la distancia de seguridad entre vehículos.",
      "c": "Está permitido cambiar de carril por la izquierda para adelantar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 106,
    "question": "La siguiente señal (R-50), signi ﬁ ca:",
    "options": {
      "a": "Que si solo hay un carril tiene preferencia de paso el conductor que llegó primero.",
      "b": "Que si solo hay un carril tiene preferencia el conductor que está mirando la señal.",
      "c": "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe darle paso al del sentido",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 107,
    "question": "La señal (R-5-1), es:",
    "options": {
      "a": "Una señal informativa.",
      "b": "Una señal preventiva.",
      "c": "Una señal de obligación.",
      "d": "No es una señal válida en el Perú."
    },
    "answer": "c"
  },
  {
    "id": 108,
    "question": "La señal (P-3A), le indica al conductor que:",
    "options": {
      "a": "Hay una curva y contra-curva a la izquierda.",
      "b": "Hay una curva y contra-curva a la derecha.",
      "c": "Hay una curva y contra-curva pronunciada a la derecha.",
      "d": "Hay una curva y contra-curva pronunciada a la izquierda."
    },
    "answer": "c"
  },
  {
    "id": 109,
    "question": "La siguiente señal (P-5-1A), le advierte al conductor que:",
    "options": {
      "a": "Se aproxima a una curva y contra-curva a la izquierda.",
      "b": "Se aproxima a una curva y contra-curva a la derecha.",
      "c": "Se aproxima a un camino sinuoso a la derecha.",
      "d": "Se aproxima a un camino sinuoso a la izquierda."
    },
    "answer": "d"
  },
  {
    "id": 110,
    "question": "La siguiente señal (P-61), le advierte al conductor que:",
    "options": {
      "a": "El sentido del tránsito es el que indica la ﬂ echa.",
      "b": "Se aproxima a una reducción de la vía en ambos sentidos.",
      "c": "Está circulando por una curva horizontal.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 111,
    "question": "La siguiente señal (P-34), le advierte al conductor que:",
    "options": {
      "a": "La vía está en mal estado y tiene baches.",
      "b": "Se aproxima a un resalto.",
      "c": "Se aproxima a un rompe muelles.",
      "d": "Se aproxima a un badén."
    },
    "answer": "d"
  },
  {
    "id": 112,
    "question": "La siguiente señal (P-60), es:",
    "options": {
      "a": "Una señal turística.",
      "b": "Una señal informativa.",
      "c": "Una señal preventiva.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 113,
    "question": "La siguiente señal (P-46), indica:",
    "options": {
      "a": "Existencia de una ciclovía.",
      "b": "Autorización para el cruce de ciclistas.",
      "c": "Ciclistas en la vía.",
      "d": "Cercanía de una ciclovía."
    },
    "answer": "c"
  },
  {
    "id": 114,
    "question": "La siguiente señal (P-46-A), indica:",
    "options": {
      "a": "Que los ciclistas deben usar la ciclovía.",
      "b": "Que nos aproximamos a un cruce de ciclovía.",
      "c": "Que la ciclovía es solo para los ciclistas.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 115,
    "question": "La siguiente señal (P-46B), indica:",
    "options": {
      "a": "Que los ciclistas deben detenerse en ese punto.",
      "b": "Que nos aproximamos a un cruce de ciclovía.",
      "c": "Que la ciclovía es solo para los ciclistas.",
      "d": "La ubicación de un cruce de ciclistas."
    },
    "answer": "d"
  },
  {
    "id": 116,
    "question": "La siguiente señal (P-48), indica:",
    "options": {
      "a": "Vía es de uso exclusivo de los peatones.",
      "b": "Zona con presencia de peatones.",
      "c": "Ubicación de un cruce escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 117,
    "question": "La siguiente señal (P-48A), indica:",
    "options": {
      "a": "Vía es de uso exclusivo de peatones.",
      "b": "Proximidad a un cruce peatonal.",
      "c": "Ubicación de un cruce escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 118,
    "question": "La siguiente señal (P-48-B), indica:",
    "options": {
      "a": "Ubicación de un cruce escolar.",
      "b": "Proximidad a una calzada.",
      "c": "Ubicación de un cruce peatonal.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 119,
    "question": "La siguiente señal (P-49), indica:",
    "options": {
      "a": "Zona escolar.",
      "b": "Proximidad a un cruce peatonal.",
      "c": "Zona transitada.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 120,
    "question": "La siguiente señal (P-49A), indica:",
    "options": {
      "a": "Zona escolar.",
      "b": "Proximidad a un cruce escolar.",
      "c": "Ubicación de un cruce escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 121,
    "question": "La siguiente señal (P-49B), indica:",
    "options": {
      "a": "Zona transitada.",
      "b": "Proximidad a un cruce peatonal.",
      "c": "Ubicación de un cruce escolar",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 122,
    "question": "La siguiente señal (P-50), indica:",
    "options": {
      "a": "Zona de deportes.",
      "b": "Proximidad a campo deportivo.",
      "c": "Proximidad a zona urbana.",
      "d": "Niños jugando."
    },
    "answer": "d"
  },
  {
    "id": 123,
    "question": "La siguiente señal (P-51), indica:",
    "options": {
      "a": "Zona de parqueo de vehículos pesados.",
      "b": "Proximidad a zona rural.",
      "c": "Maquinaria agrícola en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 124,
    "question": "La siguiente señal (P-53), indica:",
    "options": {
      "a": "Proximidad a un establo.",
      "b": "Proximidad a zona agrícola.",
      "c": "Animales en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 125,
    "question": "La siguiente señal (P-55), indica:",
    "options": {
      "a": "Semáforo malogrado.",
      "b": "Proximidad a un semáforo.",
      "c": "Semáforos en ola verde.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 126,
    "question": "La siguiente señal (P-58), le indica:",
    "options": {
      "a": "Que usted se aproxima a una señal de PARE.",
      "b": "Que usted debe parar donde está la señal P-58.",
      "c": "Que se trata de un PARE, pero puede seguir adelante.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 127,
    "question": "La siguiente señal (P-59), le indica:",
    "options": {
      "a": "Que usted se aproxima a una señal de CEDA EL PASO.",
      "b": "Que usted debe ceder el paso donde está la señal P-59.",
      "c": "Que se trata de un PARE, pero puede seguir adelante.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 128,
    "question": "La siguiente señal (P-41), le indica:",
    "options": {
      "a": "Que usted se aproxima a una zona de camiones.",
      "b": "Que usted debe encender sus luces pues se aproxima a una zona con poca visibilidad.",
      "c": "Que usted se aproxima a un túnel.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 129,
    "question": "La siguiente señal (P-45), indica:",
    "options": {
      "a": "Proximidad a un aeropuerto.",
      "b": "Proximidad a una pista de aviones.",
      "c": "Vuelo de aviones a baja altura.",
      "d": "Aviones que generan ruido."
    },
    "answer": "c"
  },
  {
    "id": 130,
    "question": "La siguiente señal (P-52), le indica:",
    "options": {
      "a": "Que usted debe dar prioridad de paso a las ambulancias.",
      "b": "Que usted debe dar prioridad de paso a los bomberos.",
      "c": "Que se aproxima a una salida de vehículos de bomberos.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 131,
    "question": "La siguiente señal (P-66), le indica:",
    "options": {
      "a": "Que se aproxima un desierto.",
      "b": "Que se aproxima una zona donde hay ráfagas de viento lateral.",
      "c": "Que se acerca a una zona de arenamiento en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 132,
    "question": "La siguiente señal (P-66A), le indica:",
    "options": {
      "a": "Que se aproxima una tormenta.",
      "b": "Que está pasando por una zona donde hay ráfagas de viento lateral.",
      "c": "Que se acerca a una zona de arenamiento en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 133,
    "question": "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    "options": {
      "a": "La vía está interrumpida y debe tomar el camino alternativo que muestra la señal.",
      "b": "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar",
      "c": "En la siguiente intersección está prohibido girar a la derecha y por lo tanto, si desea seguir esa ruta debe tomar el",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 134,
    "question": "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    "options": {
      "a": "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana.",
      "b": "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe hacerlo",
      "c": "En esa dirección hay una zona de parqueo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 135,
    "question": "La siguiente señal (I-14), signi ﬁ ca:",
    "options": {
      "a": "Señal de hostal.",
      "b": "Señal de hospedaje.",
      "c": "Señal de hospital.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 136,
    "question": "La siguiente señal (I-31), signi ﬁ ca:",
    "options": {
      "a": "Proximidad de una bahía de taxis.",
      "b": "Proximidad a un estacionamiento permitido.",
      "c": "Proximidad de una zona de parqueo para vecinos.",
      "d": "Proximidad de un estacionamiento para emergencias."
    },
    "answer": "d"
  },
  {
    "id": 137,
    "question": "La siguiente señal (I-9), signi ﬁ ca:",
    "options": {
      "a": "Zona de control policial.",
      "b": "Zona de control de aduanas.",
      "c": "Zona militar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 138,
    "question": "La siguiente señal (I-18), se utiliza para indicar:",
    "options": {
      "a": "Cercanía a una ferretería.",
      "b": "Cercanía a un servicio mecánico.",
      "c": "Cercanía a un grifo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 139,
    "question": "La siguiente señal (I-19), se utiliza para indicar:",
    "options": {
      "a": "Cercanía a un servicio mecánico.",
      "b": "Cercanía a una tienda.",
      "c": "Cercanía a un grifo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 140,
    "question": "La siguiente señal (I-20), se utiliza para indicar:",
    "options": {
      "a": "Cercanía a un servicio mecánico.",
      "b": "Cercanía a una zona donde debe circular con cadenas en las llantas.",
      "c": "Cercanía a un grifo.",
      "d": "Cercanía a una llantería."
    },
    "answer": "d"
  },
  {
    "id": 141,
    "question": "La siguiente señal (R-16A), se utiliza para indicar:",
    "options": {
      "a": "Fin de la restricción de circulación de automotores.",
      "b": "Fin de la restricción de prohibido adelantar.",
      "c": "Fin de la restricción de circulación en doble sentido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 142,
    "question": "El comportamiento del conductor como usuario de la vía, debe estar orientado a:",
    "options": {
      "a": "Valor por la vida.",
      "b": "Respeto por la integridad física del resto de los usuarios.",
      "c": "Respeto a la autoridad encargada de la vigilancia y disciplina del trá ﬁ co.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 143,
    "question": "Son considerados usuarios vulnerables de la vía y por tanto merecen especial protección:",
    "options": {
      "a": "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas.",
      "b": "Únicamente los peatones y ciclistas.",
      "c": "Únicamente los peatones y niños.",
      "d": "Todos las alternativas son correctas, con excepción de los ciclistas."
    },
    "answer": "a"
  },
  {
    "id": 144,
    "question": "La siguiente señal (P-61), muestra:",
    "options": {
      "a": "Flechas retrore ﬂ ectivas que indican peligro.",
      "b": "Delineadores de curva, que guían al conductor.",
      "c": "Advertencia al conductor sobre la proximidad de un puente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 145,
    "question": "El conductor está ________ a ___________ a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicación por alcohol, drogas, estupefacientes u otros tóxicos",
    "options": {
      "a": "En su derecho - negarse.",
      "b": "Facultado - Rechazar.",
      "c": "Obligado - someterse.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 146,
    "question": "Ante un conductor con evidente discapacidad física, la cual no ﬁ gura en el rubro de restricciones de su licencia de conducir, procede:",
    "options": {
      "a": "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir",
      "b": "Que la autoridad competente expida un permiso excepcional para dicho conductor.",
      "c": "Que la Policía de Tránsito expida un permiso excepcional para dicho conductor.",
      "d": "Que la Policía de Tránsito otorgue a dicho conductor un plazo prudencial para que continúe conduciendo."
    },
    "answer": "a"
  },
  {
    "id": 147,
    "question": "Es una obligación general de tránsito que, los ____________ circulen respetando los mensajes de _______________, las instrucciones de los Efectivos de la Policía de Tránsito y el mandato de las normas legales y reglamentarias correspondientes.",
    "options": {
      "a": "Peatones - los letreros instalados en las vías públicas.",
      "b": "Los usuarios de la vía pública - los dispositivos de control de tránsito.",
      "c": "Vehículos - los medios de comunicación.",
      "d": "Menores de edad - los adultos mayores."
    },
    "answer": "b"
  },
  {
    "id": 148,
    "question": "Marque la a ﬁ rmación incorrecta:",
    "options": {
      "a": "Está prohibido arrojar, depositar o abandonar objetos en la vía pública, o cualquier otro obstáculo que pueda",
      "b": "El conductor debe mantener el vehículo que conduce con el combustible necesario para evitar detenciones en la",
      "c": "Las motocicletas pueden compartir un mismo carril con otro vehículo al circular.",
      "d": "En caso de haber agua en la calzada, el conductor de un vehículo debe tomar las precauciones, para evitar que"
    },
    "answer": "c"
  },
  {
    "id": 149,
    "question": "¿Si al conducir por una avenida se encuentra con una señal en la vía que indica un límite máximo de 50 km/h, sin embargo, conforme a lo dispuesto en la norma el límite máximo de velocidad en dicha vía es de 60 km/h; usted:",
    "options": {
      "a": "Debe obedecer la señal de velocidad instalada en la vía.",
      "b": "Puede ir a una velocidad máxima de 60 km/h.",
      "c": "Debe ir a una velocidad máxima de 60 km/h.",
      "d": "Debe ir a una velocidad entre 50 y 60 km/h."
    },
    "answer": "a"
  },
  {
    "id": 150,
    "question": "Indique la conducta permitida:",
    "options": {
      "a": "El estacionamiento de un vehículo a la salida de salas de espectáculos en funcionamiento.",
      "b": "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible.",
      "c": "El estacionamiento de un vehículo dentro de una intersección",
      "d": "El estacionamiento de un vehículo sobre las aceras."
    },
    "answer": "b"
  },
  {
    "id": 151,
    "question": "Se considera el abandono de un vehículo cuando:",
    "options": {
      "a": "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de",
      "b": "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de",
      "c": "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de",
      "d": "La norma de tránsito no establece nada sobre el abandono del vehículo."
    },
    "answer": "c"
  },
  {
    "id": 152,
    "question": "El servicio de taxi en motos lineales _____________:",
    "options": {
      "a": "No está permitido.",
      "b": "Esta permitido, siempre y cuando lo autorice la Municipalidad correspondiente.",
      "c": "Esta permitido, siempre y cuando se tomen las medidas de seguridad que establece la norma.",
      "d": "La b) y c) son correctas."
    },
    "answer": "a"
  },
  {
    "id": 153,
    "question": "Sobre la emisión vehicular de sustancias contaminantes, marque la opción correcta:",
    "options": {
      "a": "Está permitida.",
      "b": "Está prohibida, en un índice superior al límite máximo que permite la norma.",
      "c": "Está prohibida en el ámbito urbano.",
      "d": "La norma no regula sobre ello."
    },
    "answer": "b"
  },
  {
    "id": 154,
    "question": "La autoridad competente, ______________ puede prohibir o restringir _____________________ en determinadas vías públicas.",
    "options": {
      "a": "Cuando la situación lo justi ﬁ que - la circulación o estacionamiento de vehículos.",
      "b": "Aun cuando la situación lo justi ﬁ que no - circulación o estacionamiento de vehículos.",
      "c": "No se encuentra facultada ni - circulación de vehículos",
      "d": "Únicamente con el consentimiento del conductor - circulación de vehículos."
    },
    "answer": "a"
  },
  {
    "id": 155,
    "question": "La detención de un vehículo debe efectuarse:",
    "options": {
      "a": "En el sentido contrario a la circulación y en el carril izquierdo de la vía.",
      "b": "En el sentido contrario a la circulación y en el carril derecho de la vía.",
      "c": "En el sentido de la circulación y en el carril izquierdo de la vía.",
      "d": "En el sentido de la circulación y en el carril derecho de la vía."
    },
    "answer": "d"
  },
  {
    "id": 156,
    "question": "En caso de un accidente de tránsito con daños personales y/o materiales los participantes deben:",
    "options": {
      "a": "Acudir a la estación de bomberos.",
      "b": "Llamar a un familiar.",
      "c": "Solicitar la intervención de la autoridad policial.",
      "d": "Abandonar el lugar donde ocurrió el accidente."
    },
    "answer": "c"
  },
  {
    "id": 157,
    "question": "La faculta y autoriza la circulación del vehículo por la vía pública, identi ﬁ ca el bien, y, por ende, al titular responsable de las acciones que deriven de su propiedad.",
    "options": {
      "a": "Tarjeta de identi ﬁ cación vehicular.",
      "b": "Municipalidad provincial.",
      "d": "Placa Única Nacional de Rodaje."
    },
    "answer": "d"
  },
  {
    "id": 158,
    "question": "¿Después de qué tiempo de haber cometido la misma infracción se llama reincidencia y es sancionada con el doble de la multa establecida?",
    "options": {
      "a": "06 meses.",
      "b": "12 meses.",
      "c": "24 meses.",
      "d": "35 meses."
    },
    "answer": "b"
  },
  {
    "id": 159,
    "question": "Si a un conductor infractor le suspendieron su licencia de conducir, éste se encuentra facultado para:",
    "options": {
      "a": "Tramitar el duplicado de su licencia de conducir.",
      "b": "Tramitar la revalidación de su licencia de conducir.",
      "c": "Tramitar la recategorización de su licencia de conducir.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "d"
  },
  {
    "id": 160,
    "question": "Las __________________ tienen por función informar a los usuarios sobre los servicios generales existentes próximos a la vía, tales como teléfono, hospedaje, restaurante, primeros auxilios, estación de combustibles, talleres, y otros.",
    "options": {
      "a": "Señales de localización.",
      "b": "Señales de salida inmediata.",
      "c": "Señales de servicios generales.",
      "d": "Señales ordinarias."
    },
    "answer": "c"
  },
  {
    "id": 161,
    "question": "¿Constituye una infracción tramitar el duplicado de una licencia de conducir que se encuentra retenida?",
    "options": {
      "a": "No constituye una infracción.",
      "b": "Solo cuando la licencia de conducir ha sido retenida por la comisión de una infracción muy grave.",
      "c": "Si, constituye una infracción.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 162,
    "question": "Las marcas en el pavimento constituyen la señalización ___________ y se emplean para _____________ la circulación.",
    "options": {
      "a": "Horizontal - reglamentar.",
      "b": "Vertical - reglamentar.",
      "c": "Más importante - mejorar.",
      "d": "Menos importante - adornar."
    },
    "answer": "a"
  },
  {
    "id": 163,
    "question": "Ciclista es a ciclovía como:",
    "options": {
      "a": "Conductor - acera.",
      "b": "Conductor - calzada.",
      "c": "Conductor - berma.",
      "d": "Peatón - autopista."
    },
    "answer": "b"
  },
  {
    "id": 164,
    "question": "La siguiente señal (P-15), se utiliza para advertir al conductor:",
    "options": {
      "a": "La proximidad a una vía de tres carriles.",
      "b": "La proximidad a un huracán.",
      "c": "La proximidad a un camino sinuoso.",
      "d": "La proximidad de una intersección rotatoria (óvalo o rotonda)."
    },
    "answer": "d"
  },
  {
    "id": 165,
    "question": "La siguiente señal (P-31A), indica:",
    "options": {
      "a": "La proximidad del ﬁ nal de la vía.",
      "b": "La proximidad de una vía asfaltada.",
      "c": "La proximidad de una pendiente leve.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 166,
    "question": "Es una línea transversal a la calzada, que indica al conductor que debe detener completamente el vehículo, no debiendo sobrepasar el inicio de la indicada línea:",
    "options": {
      "a": "Línea de carril.",
      "b": "Línea de borde de calzada.",
      "c": "Línea de pare.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "c"
  },
  {
    "id": 167,
    "question": "Los semáforos son:",
    "options": {
      "a": "Dispositivos de control del tránsito que tienen por ﬁ nalidad regular y controlar el tránsito vehicular, motorizado y",
      "b": "Dispositivos de control del tránsito que tienen por ﬁ nalidad regular y controlar únicamente el tránsito vehicular",
      "c": "Señales de color rojo, verde y amarillo, que tienen como único ﬁ n regular la corriente vehicular.",
      "d": "Artefactos que emiten luces de colores y cuyo único ﬁ n es regular la corriente de vehículos motorizados y"
    },
    "answer": "a"
  },
  {
    "id": 168,
    "question": "La conducción requiere un alto nivel de atención, pues existen distracciones que pueden ocasionar accidentes de tránsito, como por ejemplo:",
    "options": {
      "a": "Preocupaciones.",
      "b": "Uso del teléfono celular.",
      "c": "Manipulación de la radio mientras se conduce.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 169,
    "question": "¿In ﬂ uye la somnolencia en la capacidad de conducir?",
    "options": {
      "a": "Si, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores.",
      "b": "Si, ya que el conductor está de mal genio.",
      "c": "No, siempre que la conducción sea realizada lentamente.",
      "d": "No, siempre y cuando la conducción sea realizada con un acompañante."
    },
    "answer": "a"
  },
  {
    "id": 170,
    "question": "¿Cuál es la acción correcta del conductor, según las normas de tránsito, en la situación que plantea el siguiente gráﬁ co?",
    "options": {
      "a": "Girar rápidamente a la derecha antes que el peatón cruce la calzada.",
      "b": "Dar preferencia de paso al peatón para que cruce la calzada.",
      "c": "Girar lentamente a la derecha antes que el peatón cruce la calzada.",
      "d": "Tocar el claxon para que el peatón no cruce la calzada"
    },
    "answer": "b"
  },
  {
    "id": 171,
    "question": "¿En cuál de las siguientes opciones, los factores mencionados contribuyen a una colisión vehicular?",
    "options": {
      "a": "Pavimento seco, somnolencia, frenos desgastados.",
      "b": "Pavimento húmedo, neumáticos desgastados, cansancio.",
      "c": "Reductores de velocidad, falta de atención, uso del teléfono celular.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 172,
    "question": "La __________ es la parte de una carretera o camino contigua a la calzada, no habilitada para la circulación de vehículos y destinada eventualmente a la detención de vehículos en emergencia y circulación de peatones.",
    "options": {
      "a": "Berma.",
      "b": "Autopista.",
      "c": "Acera.",
      "d": "Demarcación."
    },
    "answer": "a"
  },
  {
    "id": 173,
    "question": "Es una parte de la vía destinada a la circulación de vehículos y eventualmente al cruce de peatones y animales.",
    "options": {
      "a": "La calzada.",
      "b": "La acera.",
      "c": "La berma.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 174,
    "question": "Es una parte de la vía destinada al uso de peatones",
    "options": {
      "a": "La acera.",
      "b": "La calzada.",
      "c": "La berma.",
      "d": "La autopista."
    },
    "answer": "a"
  },
  {
    "id": 175,
    "question": "Son señales que regulan el tránsito:",
    "options": {
      "a": "Las bocinas y las marcas en la calzada o señales horizontales.",
      "b": "Las bocinas y las señales verticales.",
      "c": "Las señales verticales, las marcas en la calzada o señales horizontales y las bocinas.",
      "d": "Las señales verticales y las marcas en la calzada o señales horizontales."
    },
    "answer": "d"
  },
  {
    "id": 176,
    "question": "El conductor que en una vía urbana va a girar a la izquierda, a la derecha o en “U” debe hacer la señal respectiva con la luz direccional, por lo menos:",
    "options": {
      "a": "2 segundos antes de realizar la maniobra.",
      "b": "1 metro antes de realizar la maniobra.",
      "c": "20 metros antes de realizar la maniobra.",
      "d": "3 metros antes de realizar la maniobra."
    },
    "answer": "c"
  },
  {
    "id": 177,
    "question": "Si usted está conduciendo por una carretera y va girar a la izquierda, debe realizar la señal respectiva con la luz direccional por lo menos:",
    "options": {
      "a": "2 segundos antes de realizar la maniobra.",
      "b": "2 metros antes de realizar la maniobra.",
      "c": "30 metros antes de realizar la maniobra.",
      "d": "1 metro antes de realizar la maniobra."
    },
    "answer": "c"
  },
  {
    "id": 178,
    "question": "La licencia de la Clase B, permite conducir autos?",
    "options": {
      "a": "Si.",
      "b": "No.",
      "c": "Únicamente en el ámbito urbano.",
      "d": "Únicamente en carreteras."
    },
    "answer": "b"
  },
  {
    "id": 179,
    "question": "El siguiente grá ﬁ co muestra:",
    "options": {
      "a": "Señalización de tránsito vertical y horizontal en una zona escolar.",
      "b": "Únicamente señalización de tránsito vertical en una zona escolar.",
      "c": "Únicamente señalización de tránsito horizontal en una zona escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 180,
    "question": "Las __________canalizadoras, tiene por función conformar las islas canalizadoras del tránsito automotor en una _________.",
    "options": {
      "a": "Islas canalizadoras - vía.",
      "b": "Líneas - intersección.",
      "c": "Vías - intersección.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 181,
    "question": "Si al conducir en una intersección se encuentra con las siguientes marcas en el pavimento (malla ortogonal de color amarillo), signiﬁ ca:",
    "options": {
      "a": "Que no puede detener el vehículo dentro del área de intersección.",
      "b": "Que se están relizando trabajos de emergencia en el área demarcada.",
      "c": "Que únicamente puede detener el vehículo dentro del área de intersección.",
      "d": "Que es una isla de re ﬁ gio peatonal."
    },
    "answer": "a"
  },
  {
    "id": 182,
    "question": "De acuerdo al siguienten grá ﬁ co, es correcto aﬁ rmar que:",
    "options": {
      "a": "La zona que permite adelantar inicia con las líneas amarillas continuas.",
      "b": "Los conductores pueden estacionarse al empezar las líneas continuas.",
      "c": "La zona de no adelantar inicia con las líneas amarillas contínuas.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 183,
    "question": "Cuál de las siguientes alternativas, no es una infracción de tránsito:",
    "options": {
      "a": "Abandonar el vehículo en la vía pública.",
      "b": "Detener el vehícuo bruscamente sin motivo.",
      "c": "Utilizar señales audibles o visibles, iguales o similares a las que utilizan los vehículos de emergencia.",
      "d": "Detenerse en luz verde, para ceder el paso a un peatón."
    },
    "answer": "d"
  },
  {
    "id": 184,
    "question": "Existe infracción al tránsito cuya sanción sea nunca más obtener una licencia de conducir?",
    "options": {
      "a": "No existe, sería demasiado.",
      "b": "Si existe, y una de ellas es por conducir con presencia de alcohol en mayor grado al permitido y participar en un",
      "c": "Sólo el juez puede dictar una sanción de esa naturaleza.",
      "d": "Ninguna de las anteriores."
    },
    "answer": "b"
  },
  {
    "id": 185,
    "question": "Los ___________ y las __________ requieren un carril completo para circular con seguridad.",
    "options": {
      "a": "Buses - moticicletas",
      "b": "Camiones - moticicletas",
      "c": "Automóviles - moticicletas",
      "d": "Todas las anteriores."
    },
    "answer": "d"
  },
  {
    "id": 186,
    "question": "El conductor de un vehículo debe reducir la velocidad, siempre que se encuentre en los siguientes casos:",
    "options": {
      "a": "En intersecciones, curvas, túneles, puentes.",
      "b": "En carreteras, curvas, avenidas.",
      "c": "En túneles, avenidas, trocha.",
      "d": "Todas las anteriores."
    },
    "answer": "a"
  },
  {
    "id": 187,
    "question": "El pasajero de una motocicleta debe saber:",
    "options": {
      "a": "Que debe mantener ambos pies sobre los apoyapiés.",
      "b": "Que debe sujetarse con más ﬁ rmeza, cuando la motocicleta esté a punto de arrancar.",
      "c": "Que debe sentarse lo más adelante que pueda, sin quitarle espacio al conductor.",
      "d": "Todas las anteriores."
    },
    "answer": "d"
  },
  {
    "id": 188,
    "question": "En la relación “conductores de vehículos menores” (por ejemplo una motocicleta) y “conductores de vehículos mayores” (por ejemplo un auto sedan), la aﬁ rmación correcta es:",
    "options": {
      "a": "Los conductores de vehículos menores tienen las obligaciones y derechos aplicables a los conductores de",
      "b": "Los conductores de vehículos menores tienen menos obligaciones que los conductores de vehículos mayores, al",
      "c": "Los conductores de vehículos mayores tienen mas derechos que los conductores de vehículos menores, al",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 189,
    "question": "Antes de iniciar la conducción de una motocicleta, el conductor debe:",
    "options": {
      "a": "Colocarse el casco.",
      "b": "Veri ﬁ car el correcto funcionamiento del sistema de luces (direccionales, delanteras, posteriores).",
      "c": "Alinear los espejos retrovisores.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 190,
    "question": "El equipo de protección más importante al conducir una motocicleta, es:",
    "options": {
      "a": "Guantes.",
      "b": "Rodilleras.",
      "c": "Coderas, rodilleras, anteojos protectores y guantes.",
      "d": "Casco."
    },
    "answer": "d"
  },
  {
    "id": 191,
    "question": "La posición correcta del motociclista en la conducción es:",
    "options": {
      "a": "Los brazos deben estar totalmente estirados.",
      "b": "Las manos deben sujetar con ﬁ rmeza el centro de las empuñaduras.",
      "c": "Los pies deben encontrarse sobre los apoyapiés.",
      "d": "Las alternativas b y c son correctas."
    },
    "answer": "d"
  },
  {
    "id": 192,
    "question": "La siguiente a ﬁ rmación: “el motociclista que se encuentra conduciendo en un carril, no debe permitir que otros vehículos intenten forzarlo a moverse hacia un costado del mismo”, es:",
    "options": {
      "a": "Falsa.",
      "b": "Verdadera.",
      "c": "Falsa, porque un automóvil tiene preferencia de uso de carril.",
      "d": "Falsa, porque solo un automóvil puede usar un carril completo."
    },
    "answer": "b"
  },
  {
    "id": 193,
    "question": "La agilidad de la moto ___________ debe ser _________ para ir en __________ entre vehículos:",
    "options": {
      "a": "Siempre - aprovechada - zig zag.",
      "b": "Nunca - aprovechada - zig zag.",
      "c": "A veces - utilizada - zig zag.",
      "d": "Momentáneamente - aprovechada - zig zag"
    },
    "answer": "b"
  },
  {
    "id": 194,
    "question": "La conducción e ﬁ ciente, tiene como beneﬁ cio:",
    "options": {
      "a": "Cuidado del medioambiente, ahorro de combustible o energía.",
      "b": "No conducir bajo los efectos del alcohol y drogas.",
      "c": "No conducir con la licencia suspendida.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "a"
  },
  {
    "id": 195,
    "question": "La siguiente señal de autorización, le indica que:",
    "options": {
      "a": "Permite el giro a la izquierda en una intersección con semáforo en luz roja.",
      "b": "Permite el giro a la derecha en una intersección con semáforo en luz roja.",
      "c": "Permite el giro a la izquierda en una intersección donde no hay semáforo.",
      "d": "Permite el giro a la derecha en una intersección donde no hay semáforo."
    },
    "answer": "a"
  },
  {
    "id": 196,
    "question": "Es una técnica de conducción e ﬁ ciente, y por tanto permite la reducción del consumo de combustible, así como de la contaminación ambiental:",
    "options": {
      "a": "No acelerar bruscamente.",
      "b": "Mantener el vehículo en buen estado mecánico.",
      "c": "Mantener la presión de aire de los neumáticos por debajo del nivel correcto.",
      "d": "Las alternativas a y b son correctas."
    },
    "answer": "d"
  },
  {
    "id": 197,
    "question": "La posición correcta de los pies al conducir una motocicleta es:",
    "options": {
      "a": "Mantener los pies sobre los apoyapiés, con la punta de los pies hacia abajo.",
      "b": "Mantener los pies sobre los apoyapiés, con la punta de los pies hacia arriba.",
      "c": "Colocar de manera recta el arco de los pies en los apoyapiés.",
      "d": "No colocar los pies en los apoyapiés."
    },
    "answer": "c"
  },
  {
    "id": 198,
    "question": "Para un frenado seguro de la motocicleta (en un frenado usual como, al entrar a una curva, al llegar a una intersección, etc.), se debe utilizar:",
    "options": {
      "a": "El freno delantero y el freno posterior.",
      "b": "Únicamente el freno delantero, pues es más potente.",
      "c": "Únicamente el freno posterior.",
      "d": "Únicamente el freno delantero."
    },
    "answer": "a"
  },
  {
    "id": 199,
    "question": "Al realizar el cambio de carril, la conducta correcta es:",
    "options": {
      "a": "Veri ﬁ car la aproximación de otro vehículo al realizar la maniobra.",
      "b": "Utilizar las luces direccionales que correspondan y las luces de emergencia.",
      "c": "Utilizar las luces direccionales que correspondan.",
      "d": "Las alternativas a y c son correctas."
    },
    "answer": "d"
  },
  {
    "id": 200,
    "question": "Mientras se conduce para alcanzar la velocidad deseada, la aceleración debe ser:",
    "options": {
      "a": "Muy rápida y agresiva.",
      "b": "Muy lenta.",
      "c": "Progresiva.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 1,
    "question": "Respecto de los dispositivos de control o regulación del tránsito:",
    "options": {
      "a": "Solo los peatones están obligados a su obediencia.",
      "b": "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú",
      "c": "Solo los conductores están obligados a su obediencia.",
      "d": "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito"
    },
    "answer": "b"
  },
  {
    "id": 2,
    "question": "La señal vertical reglamentaria R-6 “prohibido voltear a la izquierda”, signi ﬁ ca que:",
    "options": {
      "a": "Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.",
      "b": "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.",
      "c": "El único sentido de desplazamiento es continuar de frente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 3,
    "question": "La señal vertical reglamentaria R-3 signi ﬁ ca que:",
    "options": {
      "a": "Nos acercamos a una zona restringida al tránsito.",
      "b": "Está permitido adelantar vehículos.",
      "c": "El único sentido de desplazamiento es continuar de frente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 4,
    "question": "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo signi ﬁ can que:",
    "options": {
      "a": "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.",
      "b": "No está permitido cruzar al otro carril para el adelantamiento vehicular.",
      "c": "Se está reduciendo el ancho de la calzada de la vía por donde se circula.",
      "d": "Se está frente a un lugar de cruce peatonal."
    },
    "answer": "a"
  },
  {
    "id": 5,
    "question": "El color ámbar o amarillo del semáforo signi ﬁ ca que:",
    "options": {
      "a": "Los vehículos deben avanzar.",
      "b": "Los vehículos deben detenerse.",
      "c": "Los vehículos deben acelerar la marcha.",
      "d": "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo"
    },
    "answer": "d"
  },
  {
    "id": 6,
    "question": "Los colores del semáforo tienen el siguiente signi ﬁ cado: rojo: _______;  ámbar o amarillo: _____; verde:____.",
    "options": {
      "a": "Detención - prevención - paso.",
      "b": "Detención - paso con prevención - circulación rápida.",
      "c": "Disminución de la velocidad - prevención - paso rápido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 7,
    "question": "¿Qué indica una ﬂ echa verde en un semáforo vehicular?",
    "options": {
      "a": "Se puede continuar con precaución únicamente en la dirección de la ﬂ echa y desde el carril que esta ﬂ echa",
      "b": "No está permitida la circulación en el sentido que indica la ﬂ echa.",
      "c": "Se debe respetar únicamente la luz circular.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 8,
    "question": "La siguiente señal vertical reglamentaria R-53:",
    "options": {
      "a": "Prohíbe estacionar.",
      "b": "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
      "c": "Prohíbe la carga y descarga.",
      "d": "Prohíbe la circulación de vehículos motorizados."
    },
    "answer": "b"
  },
  {
    "id": 9,
    "question": "Si llega a una intersección y visualiza el semáforo con una ﬂ echa roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
    "options": {
      "a": "Avanzar en cualquier sentido, ya que la luz circular está en verde.",
      "b": "Avanzar, pero el giro a la izquierda está prohibido por la ﬂ echa roja.",
      "c": "Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 10,
    "question": "Si llega a una intersección donde el semáforo muestra una luz intermitente, qué a ﬁ rmación es correcta:",
    "options": {
      "a": "Si la luz intermitente es roja, ésta es equivalente a un “CEDA EL PASO”.",
      "b": "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.",
      "c": "Si la luz intermitente es verde, ésta es equivalente a un “PARE”.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 11,
    "question": "¿La luz intermitente roja es igual que una señal de PARE?",
    "options": {
      "a": "Verdad.",
      "b": "Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.",
      "c": "Falso.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 12,
    "question": "Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:",
    "options": {
      "a": "Girar desde cualquier carril.",
      "b": "Colocarse en el carril derecho, luego girar con precaución.",
      "c": "Colocarse en el carril más despejado de trá ﬁ co, luego girar con precaución.",
      "d": "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de"
    },
    "answer": "d"
  },
  {
    "id": 13,
    "question": "Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?",
    "options": {
      "a": "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con",
      "b": "Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces",
      "c": "Se debe advertir utilizando el claxon, identi ﬁ car una brecha y realizar el cambio de carril con precaución.",
      "d": "Está prohibido el cambio de carril en vías de un solo sentido."
    },
    "answer": "a"
  },
  {
    "id": 14,
    "question": "Respecto a los cruces a nivel con vías férreas, señale la a ﬁ rmación correcta:",
    "options": {
      "a": "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la",
      "b": "Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan",
      "c": "El vehículo que llegue primero tiene preferencia.",
      "d": "Tiene preferencia el conductor que viene por la derecha del otro."
    },
    "answer": "a"
  },
  {
    "id": 15,
    "question": "Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policiía Nacional del Perú asignado al control del tránsito, corresponde:",
    "options": {
      "a": "Detenerse hasta que cambie a luz verde.",
      "b": "Continuar la marcha.",
      "c": "Estar prevenido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 16,
    "question": "Está prohibido estacionar un vehículo:",
    "options": {
      "a": "En las curvas.",
      "b": "Dentro de una intersección.",
      "c": "Frente a la entrada de garajes y de recintos militares o policiales.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 17,
    "question": "La siguiente señal vertical reglamentaria (R-29:",
    "options": {
      "a": "Prohíbe el uso de la bocina en vías urbanas.",
      "b": "Prohíbe el uso de la bocina en carreteras.",
      "c": "Prohíbe el uso de la bocina.",
      "d": "Prohíbe hacer ruido."
    },
    "answer": "c"
  },
  {
    "id": 18,
    "question": "Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:",
    "options": {
      "a": "Conduzca un vehículo automotor sin tener licencia de conducir.",
      "b": "Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.",
      "c": "Conduzca un vehículo sin contar con el SOAT.",
      "d": "a y c son correctas"
    },
    "answer": "a"
  },
  {
    "id": 19,
    "question": "En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
    "options": {
      "a": "Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.",
      "b": "No debe aumentar la velocidad hasta que el vehículo lo sobrepase.",
      "c": "Debe disminuir drásticamente la velocidad de su vehículo.",
      "d": "Debe detener su vehículo."
    },
    "answer": "b"
  },
  {
    "id": 20,
    "question": "¿Cuál de las siguientes a ﬁ rmaciones es correcta?",
    "options": {
      "a": "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.",
      "b": "El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.",
      "c": "El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 21,
    "question": "En la circulación vehicular, es correcto a ﬁ rmar que:",
    "options": {
      "a": "Los vehículos deben circular sobre líneas continuas delimitadoras de carriles, ante la congestion vehicular.",
      "b": "Los vehículos pueden circular sobre líneas continuas delimitadoras de carriles, ante la congestion vehicular.",
      "c": "Los vehículos deben circular dentro de las líneas de carril, salvo cuando se realicen las maniobras que indica el",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 22,
    "question": "En caso de accidentes, el SOAT cubre los daños que sufren:",
    "options": {
      "a": "Solo los ocupantes del vehículo.",
      "b": "Los ocupantes y terceros no ocupantes del vehículo.",
      "c": "Solo terceros afectados.",
      "d": "Solo el conductor del vehículo."
    },
    "answer": "b"
  },
  {
    "id": 23,
    "question": "¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?",
    "options": {
      "a": "Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.",
      "b": "Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un",
      "c": "El Seguro Obligatorio de Accidentes de Tránsito - SOAT.",
      "d": "No es obligatorio contar con un seguro."
    },
    "answer": "c"
  },
  {
    "id": 24,
    "question": "Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo o ﬁ cial:",
    "options": {
      "a": "Cuando emita señales visibles.",
      "b": "Cuando emita señales audibles.",
      "c": "Cuando emita señales audibles y visibles.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 25,
    "question": "Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?",
    "options": {
      "a": "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.",
      "b": "Adelantar por el lado izquierdo, pero con precaución.",
      "c": "Tocar el claxon para alertar que está pasando.",
      "d": "Adelantar muy despacio."
    },
    "answer": "a"
  },
  {
    "id": 26,
    "question": "¿Qué signi ﬁ ca un triángulo rojo de seguridad colocado en la calzada?",
    "options": {
      "a": "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.",
      "b": "Zona de obras por reparación en la calzada.",
      "c": "Que el vehículo que lo enfrenta debe detenerse.",
      "d": "a y c son correctas."
    },
    "answer": "a"
  },
  {
    "id": 27,
    "question": "¿En la conducción vehicular, existe excepción a la obligación de conservar la distancia obligatoria entre vehículos?",
    "options": {
      "a": "Si existe, y es para los cortejos fúnebres, convoyes militares y policiales y caravanas autorizadas.",
      "b": "No existe ninguna excepción.",
      "c": "Si existe, y es para el caso de congestión vehicular.",
      "d": "La norma no regula la obligación de conservar una distancia obligatoria entre vehículos."
    },
    "answer": "a"
  },
  {
    "id": 28,
    "question": "En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasiﬁ cación?",
    "options": {
      "a": "No.",
      "b": "Sí.",
      "c": "Depende de la intersección.",
      "d": "No se encuentra regulado en el reglamento."
    },
    "answer": "b"
  },
  {
    "id": 29,
    "question": "Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:",
    "options": {
      "a": "Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.",
      "b": "Disminuir su velocidad y pasar con cuidado.",
      "c": "Sobre parar y pasar rápidamente.",
      "d": "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución."
    },
    "answer": "d"
  },
  {
    "id": 30,
    "question": "¿Cuál es la diferencia entre las señales P-2A y P-1A?",
    "options": {
      "a": "No hay diferencia, se usan indistintamente.",
      "b": "La señal P-2A se utiliza en situaciones de mayor riesgo.",
      "c": "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia",
      "d": "La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia"
    },
    "answer": "c"
  },
  {
    "id": 31,
    "question": "¿Qué indica la señal R-30F?",
    "options": {
      "a": "Tener precaución con vehículos lentos.",
      "b": "Regula la velocidad máxima permitida en curvas.",
      "c": "Regula la velocidad máxima en zonas rurales.",
      "d": "No se encuentra regulada en la norma."
    },
    "answer": "b"
  },
  {
    "id": 32,
    "question": "¿Que indica la siguiente señal R-23?",
    "options": {
      "a": "Prohibida la circulación de motocicletas.",
      "b": "No estacionar motocicletas.",
      "c": "a) y b) son correctas.",
      "d": "No se encuentra regulada en la norma."
    },
    "answer": "a"
  },
  {
    "id": 33,
    "question": "Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
    "options": {
      "a": "Cualquiera de los dos.",
      "b": "El que se aproxime por la derecha del otro.",
      "c": "El que se aproxime por la izquierda del otro.",
      "d": "El que haga sonar la bocina primero."
    },
    "answer": "b"
  },
  {
    "id": 34,
    "question": "En una intersección no regulada (sin señalización) tiene preferencia de paso:",
    "options": {
      "a": "El vehículo que ingresó primero a la intersección.",
      "b": "El vehículo que haga sonar la bocina primero.",
      "c": "El vehículo que haga cambio de luces primero.",
      "d": "Cualquier vehículo."
    },
    "answer": "a"
  },
  {
    "id": 35,
    "question": "En una rotonda, tiene prioridad de paso el vehículo que:",
    "options": {
      "a": "Quiere ingresar a la rotonda.",
      "b": "Circula por ella.",
      "c": "Acelera primero.",
      "d": "Hace sonar la bocina."
    },
    "answer": "b"
  },
  {
    "id": 36,
    "question": "El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.",
    "options": {
      "a": "Derecha.",
      "b": "Izquierda.",
      "c": "Berma.",
      "d": "Por la derecha o izquierda."
    },
    "answer": "b"
  },
  {
    "id": 37,
    "question": "Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?",
    "options": {
      "a": "Manejar normalmente.",
      "b": "Manejar despacio.",
      "c": "Abstenerse de manejar.",
      "d": "Manejar con un copiloto"
    },
    "answer": "c"
  },
  {
    "id": 38,
    "question": "Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:",
    "options": {
      "a": "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identi ﬁ cación vehicular.",
      "b": "Certi ﬁ cado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.",
      "c": "Contrato de compraventa del vehículo.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "a"
  },
  {
    "id": 39,
    "question": "La siguiente señal indica:",
    "options": {
      "a": "Que solo las motocicletas tienen preferencia de paso en la vía o carril.",
      "b": "Que solo las motocicletas pueden circular por la vía o carril.",
      "c": "Que las motocicletas pueden compartir la vía o carril con otro vehículo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 40,
    "question": "Al cambiar de dirección, un conductor debe:",
    "options": {
      "a": "Señalizar toda la maniobra hasta su culminación.",
      "b": "Cambiar de dirección y luego señalizar.",
      "c": "No existe ninguna obligación.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 41,
    "question": "¿Está permitido conducir un vehículo con el motor en punto neutro?",
    "options": {
      "a": "Sí, pero solo si está bajando una pendiente.",
      "b": "No, está prohibido.",
      "c": "Sí, en caso de que el conductor no sea novato.",
      "d": "No se encuentra regulado en la norma."
    },
    "answer": "b"
  },
  {
    "id": 42,
    "question": "Si la licencia de conducir no se encuentra vigente, los vehículos que autoriza a conducir dicha licencia:",
    "options": {
      "a": "No podrán ser conducidos.",
      "b": "Podrán ser conducidos únicamente en zonas urbanas.",
      "c": "Podrán ser conducidos hasta por 90 días posteriores a la pérdida de vigencia de la licencia.",
      "d": "Podrán ser conducidos con normalidad hasta que renueve su licencia."
    },
    "answer": "a"
  },
  {
    "id": 43,
    "question": "De acuerdo con el sistema de control de licencias de conducir por puntos:",
    "options": {
      "a": "Determinadas infracciones suman puntos.",
      "b": "Una infracción puede sumar o disminuir puntos, a elección del infractor.",
      "c": "Determinadas infracciones restan puntos.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 44,
    "question": "¿Cuál es la consecuencia de acumular 100 puntos en la licencia de conducir en un período de 24 meses?",
    "options": {
      "a": "Suspensión de licencia de conducir.",
      "b": "Anulación de la Placa Única Nacional de Rodaje.",
      "c": "Inhabilitación deﬁ nitiva para obtener una licencia de conducir.",
      "d": "Internamiento vehicular."
    },
    "answer": "a"
  },
  {
    "id": 45,
    "question": "Se entiende por carril a la:",
    "options": {
      "a": "Parte de la vía destinada a la circulación de peatones.",
      "b": "Parte de la calzada destinada al tránsito de una ﬁ la de vehículos.",
      "c": "Vía rural destinada a la circulación de peatones y animales.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 46,
    "question": "Se entiende por línea de parada a:",
    "options": {
      "a": "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener",
      "b": "Las líneas que se encuentran en los lugares del estacionamiento.",
      "c": "El lugar utilizado para embarcar y desembarcar pasajeros.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "a"
  },
  {
    "id": 47,
    "question": "La siguiente señal vertical reglamentaria P-17A, indica:",
    "options": {
      "a": "Reducción de la calzada al lado derecho.",
      "b": "Reducción de la calzada al lado izquierdo.",
      "c": "Reducción de la calzada en ambos lados.",
      "d": "Ensanchamiento de la calzada en ambos lados."
    },
    "answer": "c"
  },
  {
    "id": 48,
    "question": "En caso de encontrar marcación de doble línea amarilla compuesta por un trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
    "options": {
      "a": "Se puede adelantar en ambos sentidos.",
      "b": "No está permitido adelantar en ningún sentido.",
      "c": "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar).",
      "d": "Respetar la línea que está de su lado (si es discontinua, no adelantar; si es continua, está permitido adelantar)"
    },
    "answer": "c"
  },
  {
    "id": 49,
    "question": "Se de ﬁ ne como zona rígida al:",
    "options": {
      "a": "Área donde se prohíbe la circulación de vehículos.",
      "b": "Área donde se prohíbe la circulación de peatones.",
      "c": "Área de la vía en la que se prohíbe el estacionamiento de vehículos.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "c"
  },
  {
    "id": 50,
    "question": "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito signiﬁ ca:",
    "options": {
      "a": "Obligación de detenerse de quien así lo enfrente.",
      "b": "Continuar la marcha por el carril izquierdo de la calzada.",
      "c": "Continuar la marcha.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 51,
    "question": "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
    "options": {
      "a": "30km/h.",
      "b": "40 km/h.",
      "c": "60 km/h.",
      "d": "80 km/h"
    },
    "answer": "b"
  },
  {
    "id": 52,
    "question": "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en avenidas es de:",
    "options": {
      "a": "30km/h.",
      "b": "40 km/h.",
      "c": "60 km/h.",
      "d": "80 km/h."
    },
    "answer": "c"
  },
  {
    "id": 53,
    "question": "Siempre que no exista una señal de límite de velocidad en zonas urbanas, el límite máximo de velocidad en zona escolar es de:",
    "options": {
      "a": "20km/h.",
      "b": "30 km/h.",
      "c": "35 km/h.",
      "d": "50 km/h."
    },
    "answer": "b"
  },
  {
    "id": 54,
    "question": "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
    "options": {
      "a": "80 km/h.",
      "b": "90 km/h.",
      "c": "100 km/h.",
      "d": "110 km/h."
    },
    "answer": "c"
  },
  {
    "id": 55,
    "question": "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad es de:",
    "options": {
      "a": "80 km/h. para automóviles",
      "b": "90 km/h. para camionetas",
      "c": "70 km/h. para motocicletas",
      "d": "100 km/h. para automóviles, camionetas y motocicletas."
    },
    "answer": "d"
  },
  {
    "id": 56,
    "question": "Siempre que no exista una señal de límite de velocidad mínima, el límite mínimo de velocidad en zona urbana y en carreteras es de:",
    "options": {
      "a": "30km/h.",
      "b": "La mitad de la velocidad máxima establecida para cada tipo de vía.",
      "c": "20 km/h.",
      "d": "15 km/h."
    },
    "answer": "b"
  },
  {
    "id": 57,
    "question": "¿Cuál es la sanción por conducir con presencia de alcohol en la sangre en proporción mayor a lo previsto en el Código Penal, o bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobado con el examen respectivo, o por negarse al mismo y que haya participado en un accidente de tránsito?",
    "options": {
      "a": "Multa.",
      "b": "Cancelación de licencia de conducir.",
      "c": "Suspensión de la licencia de conducir.",
      "d": "Multa, cancelación de la licencia de conducir e inhabilitación de ﬁ nitiva para obtener una licencia de conducir."
    },
    "answer": "d"
  },
  {
    "id": 58,
    "question": "¿Cuál es la sanción si en un operativo de alcoholemia usted es intervenido y se comprueba que ha consumido alcohol por encima del límite legal, o está conduciendo bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobada con el examen respectivo?",
    "options": {
      "a": "Una multa",
      "b": "La suspensión de la licencia de conducir.",
      "c": "Multa y suspensión de la licencia de conducir por 3 años.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 59,
    "question": "La frecuencia de la inspección técnica de una moto (categoría L3) y de un sidecar (categoría L4) es:",
    "options": {
      "a": "Cada medio año.",
      "b": "Cada año.",
      "c": "Cada dos años.",
      "d": "Cada tres años."
    },
    "answer": "b"
  },
  {
    "id": 60,
    "question": "¿Cuál es el plazo de vigencia del SOAT?",
    "options": {
      "a": "1 año.",
      "b": "6 meses.",
      "c": "4 años.",
      "d": "2 años."
    },
    "answer": "a"
  },
  {
    "id": 61,
    "question": "Si ocurre un accidente de tránsito, ¿qué obligación tiene el conductor, el propietario del vehículo o el prestador del servicio de transporte?",
    "options": {
      "a": "Dar aviso a los bomberos.",
      "b": "Dar aviso solo a la compañía de seguros.",
      "c": "Dar aviso a la compañía de seguros y dejar constancia en la delegación de la Policía Nacional del Perú más",
      "d": "Dar aviso únicamente a la Policía Nacional del Perú."
    },
    "answer": "c"
  },
  {
    "id": 62,
    "question": "Si una licencia de conducir consiga alguna restricción, es correcto a ﬁ rmar que:",
    "options": {
      "a": "Dicha restricción es meramente informativa.",
      "b": "Es una obligación cumplir con la restricción.",
      "c": "Incumplir la restricción no genera un riesgo para la seguridad vial.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 63,
    "question": "La señal preventiva P-33A, signi ﬁ ca:",
    "options": {
      "a": "Señal de curva sinuosa.",
      "b": "Señal de proximidad a un badén.",
      "c": "Señal de proximidad de un reductor de velocidad tipo resalto.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 64,
    "question": "¿Está permitido usar la bocina de su vehículo para advertir al conductor del vehículo que circula delante, que será adelantado?",
    "options": {
      "a": "Sí, siempre y cuando el sonido no sea estridente.",
      "b": "Si, salvo prohibición expresa mediante la correspondiente señal.",
      "c": "No, está prohibido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 65,
    "question": "Si observa que se aproxima una ambulancia sin las luces especiales encendidas y sin sirena, es correcto aﬁ rmar que:",
    "options": {
      "a": "No estamos obligados a darle preferencia de paso.",
      "b": "Estamos obligados a darle prioridad de paso por ser una ambulancia.",
      "c": "Está informando que está en servicio de urgencia.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 66,
    "question": "Si se encuentra en una intersección y se enciende la luz verde del semáforo y observa que en la calle transversal hay vehículos o personas despejando la intersección, ¿qué debe hacer?",
    "options": {
      "a": "No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar.",
      "b": "Tocar el claxon para que se apuren en pasar.",
      "c": "Bajar del vehículo y reclamar la falta al infractor.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 67,
    "question": "En señalética vial, el color __________ en el pavimento es utilizado para carriles de trá ﬁ co en sentido opuesto y el color __________ en el pavimento es utilizado como separador de carriles de trá ﬁ co en el mismo sentido.",
    "options": {
      "a": "Amarillo - blanco.",
      "b": "Blanco - Amarillo.",
      "c": "Azul - rojo.",
      "d": "Rojo - Amarillo."
    },
    "answer": "a"
  },
  {
    "id": 68,
    "question": "Si una ﬁ la de escolares cruza la calzada fuera del crucero peatonal, ¿qué acción se debe tomar?",
    "options": {
      "a": "Advertir con el claxon.",
      "b": "Advertir a viva voz.",
      "c": "Parar y ceder el paso.",
      "d": "Continuar la marcha lentamente."
    },
    "answer": "c"
  },
  {
    "id": 69,
    "question": "Si se aproxima a una zona escolar, ¿qué acción debe realizar?",
    "options": {
      "a": "No tiene ninguna obligación si no hay señalización.",
      "b": "Disminuir la velocidad a 40 Km/h.",
      "c": "Disminuir la velocidad a 30 Km/h.",
      "d": "Disminuir la velocidad a 35 km/h."
    },
    "answer": "c"
  },
  {
    "id": 70,
    "question": "Tienen el objetivo de noti ﬁ car a los usuarios las limitaciones, prohibiciones o restricciones en el uso de la vía.",
    "options": {
      "a": "Señales reguladoras o de reglamentación.",
      "b": "Señales preventivas.",
      "c": "Señales informativas.",
      "d": "Señales horizontales"
    },
    "answer": "a"
  },
  {
    "id": 71,
    "question": "Tienen el propósito de advertir a los usuarios sobre la existencia y naturaleza de un peligro en la vía.",
    "options": {
      "a": "Señales reguladoras o de reglamentación.",
      "b": "Señales preventivas.",
      "c": "Señales informativas.",
      "d": "Señales horizontales."
    },
    "answer": "b"
  },
  {
    "id": 72,
    "question": "Es una infracción de tránsito:",
    "options": {
      "a": "No detenerse totalmente en una señal de PARE.",
      "b": "Arrojar, depositar o abandonar objetos o sustancias en la vía pública que di ﬁ culten la circulación.",
      "c": "Utilizar la bocina para llamar la atención en forma innecesaria.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 73,
    "question": "¿Qué debería hacer el conductor al acercarse a una señal de “CEDA EL PASO” en una intersección?",
    "options": {
      "a": "Ceder el paso a los vehículos de emergencia.",
      "b": "Mantener la velocidad y avanzar con cuidado.",
      "c": "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía",
      "d": "Parar totalmente y luego avanzar con cuidado."
    },
    "answer": "c"
  },
  {
    "id": 74,
    "question": "No se debe conducir un vehículo:",
    "options": {
      "a": "Si no se cuenta con el SOAT.",
      "b": "En retroceso, salvo las excepciones que establece la norma.",
      "c": "Si no se tiene la licencia para el tipo de vehículo que se quiere conducir.",
      "d": "Todas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 75,
    "question": "¿Qué debe hacer si se aproxima a una intersección sin semáforo y sin presencia de la Policía de Tránsito, y observa que un peatón está cruzando por el paso peatonal?",
    "options": {
      "a": "Disminuir la velocidad y pasar con cuidado.",
      "b": "Detener el vehículo y ceder el paso al peatón.",
      "c": "Continuar porque usted tiene la prioridad.",
      "d": "Incrementar la velocidad para adelantar el cruce el peatón."
    },
    "answer": "b"
  },
  {
    "id": 76,
    "question": "Sobre el uso del casco protector en la conducción de la motocicleta, es correcto a ﬁ rmar que:",
    "options": {
      "a": "El uso del casco es obligatorio únicamente para el conductor.",
      "b": "El uso del casco es obligatorio para el conductor y el acompañante.",
      "c": "El uso del casco no es obligatorio.",
      "d": "Todas las aternativas son incorrectas."
    },
    "answer": "b"
  },
  {
    "id": 77,
    "question": "Las motocicletas al circular por una vía deben hacerlo por el carril de ________________",
    "options": {
      "a": "La Izquierda.",
      "b": "El medio.",
      "c": "La derecha.",
      "d": "La izquierda y la derecha"
    },
    "answer": "c"
  },
  {
    "id": 78,
    "question": "Sobre el uso de la bocina del vehículo, es correcto a ﬁ rmar que:",
    "options": {
      "a": "El conductor debe tratar de no utilizar la bocina para llamar la atención en forma innecesaria.",
      "b": "El uso de la bocina para llamar la atención en forma innecesaria no es una infracción al tránsito.",
      "c": "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas.",
      "d": "a y b son correctas."
    },
    "answer": "c"
  },
  {
    "id": 79,
    "question": "Una línea blanca continua en el sentido longitudinal de una vía, que se coloca en el pavimento, le indica al conductor:",
    "options": {
      "a": "Que se puede adelantar, debido a que la línea no es amarilla continua.",
      "b": "Que está prohibido cruzar la línea y no hay excepciones.",
      "c": "Que está prohibido pasar al otro lado de la línea con algunas excepciones.",
      "d": "Que es zona de peatones."
    },
    "answer": "c"
  },
  {
    "id": 80,
    "question": "¿Cuál es el número máximo de personas que puede transportar una motocicleta?",
    "options": {
      "a": "Es igual al número de asientos señalados en la tarjeta de identi ﬁ cación vehicular.",
      "b": "No existe prohibición sobre un número máximo de personas que se puede transportar.",
      "c": "La restricción sobre un número máximo de personas que se puede transportar se aplica para el asiento delantero,",
      "d": "Se puede transportar a todas las personas que entren en el vehículo, sin restricción, siempre y cuando no"
    },
    "answer": "a"
  },
  {
    "id": 81,
    "question": "La acción correcta al abastecer de combustible su vehículo, es:",
    "options": {
      "a": "Asegurarse de que todos los pasajeros permanezcan a bordo del vehículo.",
      "b": "Abstenerse de fumar tanto el conductor como sus acompañantes.",
      "c": "Mantener encendido el motor del vehículo.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 82,
    "question": "Si usted desea realizar una competencia de carreras entre su vehículo y otro vehículo motorizado; para ello puede utilizar:",
    "options": {
      "a": "Las vías aledañas del parque del distrito en el cual reside, en el horario de 11:00 pm. a 5:00 am.",
      "b": "Un circuito de carrera, autódromo o pista de aceleración autorizado por la autoridad competente.",
      "c": "Las vías aledañas del parque del distrito en el cual reside, siempre y cuando tenga el permiso municipal",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 83,
    "question": "Señale cuál de las siguientes conductas constituye una infracción al tránsito:",
    "options": {
      "a": "Circular en forma desordenada o hacienda maniobras peligrosas.",
      "b": "Utilizar la bocina para llamar la atención en forma innecesaria.",
      "c": "Conducir un vehículo con el motor en punto neutro o apagado.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 84,
    "question": "La marcas en el pavimento constituyen un elemento indispensable para la operación vehicular, pues su función es:",
    "options": {
      "a": "Reemplazar a la señalización vertical cuando ésta no se encuentra en la vía, por tal motivo son colocadas donde",
      "b": "Guiar a los usuarios únicamente en las vías que presentan peligros.",
      "c": "Reglamentar la circulación, así como advertir y guiar a los usuarios de la vía.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "c"
  },
  {
    "id": 85,
    "question": "Las marcas en el pavimento de color __________ complementan las señales informativas, como por ejemplo las zonas de estacionamiento para personas con movilidad reducida.",
    "options": {
      "a": "Blanco.",
      "b": "Azul.",
      "c": "Rojo.",
      "d": "Gris."
    },
    "answer": "b"
  },
  {
    "id": 86,
    "question": "La línea central de color amarillo en el pavimento es continua cuando:",
    "options": {
      "a": "No está permitido cruzar al otro carril.",
      "b": "Está permitido cruzar al otro carril para el adelantamiento.",
      "c": "Se trata de una vía de doble sentido de circulación, que permite cruzar al otro carril.",
      "d": "Separa corrientes de trá ﬁ co en el mismo sentido."
    },
    "answer": "a"
  },
  {
    "id": 87,
    "question": "Si un conductor que circula por el carril derecho de una vía se encuentra con las ﬂ echas inclinadas que se muestran en la ﬁ gura, su conducta correcta es:",
    "options": {
      "a": "Continuar la circulación por el carril en que se encuentra.",
      "b": "Adelantar al vehículo que se encuentra delante de él y que circula por el carril izquierdo.",
      "c": "No adelantar al vehículo que tiene adelante y que circula por el carril izquierdo y continuar por su carril.",
      "d": "Cambiarse al carril izquierdo con precaución."
    },
    "answer": "d"
  },
  {
    "id": 88,
    "question": "Si durante la conducción vehicular, un efectivo de la Policía de Tránsito le solicita al conductor someterse a una prueba de alcoholemia; la acción correcta del conductor es:",
    "options": {
      "a": "Someterse a la prueba de alcoholemia, ya que está obligado a ello ante la solicitud del efectivo de la Policía de",
      "b": "Someterse o negarse a la prueba de alcoholemia, ya que no constituye una obligación del conductor realizarse",
      "c": "Negarse a la prueba de alcoholemia, ya que únicamente es exigible si ha participado en un accidente de tránsito.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 89,
    "question": "¿Cuál de las siguientes conductas no es una infracción de tránsito?",
    "options": {
      "a": "Llevar las placas de rodaje en el lugar que no corresponde.",
      "b": "Seguir a los vehículos de emergencia y vehículos o ﬁ ciales para avanzar más rápidamente.",
      "c": "Arrojar objetos en la vía pública que di ﬁ culten la circulación.",
      "d": "Detenerse totalmente en una señal de PARE cuando no hay peatones y/o vehículos circulando por la vía"
    },
    "answer": "d"
  },
  {
    "id": 90,
    "question": "Si la persona conduciendo sale de su propiedad y tiene que cruzar la acera e ingresar a una vía, la conducta correcta es:",
    "options": {
      "a": "Dar preferencia de paso solo a los vehículos que circulan por la vía, pero no a los peatones.",
      "b": "Dar preferencia de paso a los vehículos que circulan por la vía y a los peatones que circulan por la acera.",
      "c": "Tocar el claxon para advertir a los peatones que circulen por la acera, que se detengan.",
      "d": "Salir rápidamente, a ﬁ n de evitar accidentes."
    },
    "answer": "b"
  },
  {
    "id": 91,
    "question": "¿Qué signi ﬁ ca una línea continua blanca pintada entre el carril de la derecha y la berma de una carretera?",
    "options": {
      "a": "Un carril para motocicletas.",
      "b": "Una línea que divide el área peatonal y el área de vehículos.",
      "c": "Una línea que puede cruzarse para rebasar en caso de congestion.",
      "d": "Que no se debe conducir atravesándola, al menos que haya una situación de emergencia."
    },
    "answer": "d"
  },
  {
    "id": 92,
    "question": "En el caso representado en el siguiente grá ﬁ co ¿el vehículo rojo puede rebasar al azul?",
    "options": {
      "a": "Puede hacerlo si no viene un vehículo en el sentido contrario.",
      "b": "Puede hacerlo solo si, el vehículo en sentido contrario está lejos y alcanza hacer la maniobra con seguridad.",
      "c": "No puede hacerlo.",
      "d": "Puede hacerlo por la izquierda."
    },
    "answer": "c"
  },
  {
    "id": 93,
    "question": "La siguiente señal (R-17), signi ﬁ ca:",
    "options": {
      "a": "Prohibido estacionar.",
      "b": "Prohibida la circulación de vehículos automotores.",
      "c": "Prohibida la circulación de autos particulares.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 94,
    "question": "Si usted se encuentra conduciendo su vehículo por una vía y antes de cruzar la intersección se encuentra con la señal R-4, esta le indica:",
    "options": {
      "a": "Que la calle está clausurada.",
      "b": "Que está por ingresar a una vía de sentido contrario y no debe entrar.",
      "c": "Que debe parar totalmente antes de poder ingresar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 95,
    "question": "La siguiente señal (P-36), signi ﬁ ca:",
    "options": {
      "a": "Proximidad de un túnel.",
      "b": "Super ﬁ cie deslizante.",
      "c": "Prender las luces bajas.",
      "d": "Mantener la distancia entre vehículos por seguridad."
    },
    "answer": "b"
  },
  {
    "id": 96,
    "question": "La siguiente señal (R-14), signi ﬁ ca:",
    "options": {
      "a": "Circular por el carril de la derecha.",
      "b": "Circular por el carril central.",
      "c": "Circular solo en el sentido indicado por la ﬂ echa.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 97,
    "question": "La siguiente señal (P-6) signi ﬁ ca:",
    "options": {
      "a": "Intersección no semaforizada.",
      "b": "Intersección peligrosa.",
      "c": "La proximidad de un cruce o intersección de 2 vías al mismo nivel en ángulo recto.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 98,
    "question": "La siguiente señal (R-30C), signi ﬁ ca:",
    "options": {
      "a": "Que la velocidad máxima de la vía es de 50 km/h.",
      "b": "Que la velocidad mínima de la vía es de 50 km/h.",
      "c": "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h.",
      "d": "Que al salir de la vía por donde está circulando, la velocidad mínima es 50 km/h."
    },
    "answer": "c"
  },
  {
    "id": 99,
    "question": "La siguiente señal (R-5-4), signi ﬁ ca:",
    "options": {
      "a": "Que la vía no continúa y los conductores deben girar a la izquierda.",
      "b": "Que la intersección contempla giros tangentes a la izquierda en ambos sentidos.",
      "c": "Que la intersección está en mantenimiento y que por el momento solo se puede girar a la izquierda.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 100,
    "question": "La siguiente señal (R-9), signi ﬁ ca:",
    "options": {
      "a": "Que no está permitido girar en U.",
      "b": "Que está permitido el giro en U.",
      "c": "Que si desea puede girar a la izquierda.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 101,
    "question": "La siguiente señal (R-5-2), signi ﬁ ca:",
    "options": {
      "a": "Que la vía solo permite girar a la izquierda.",
      "b": "Prevención por bifurcación de la vía.",
      "c": "Que el carril por donde circula permite girar a la izquierda o seguir de frente.",
      "d": "No es una señal válida en el Perú."
    },
    "answer": "c"
  },
  {
    "id": 102,
    "question": "La siguiente señal (R-20), signi ﬁ ca:",
    "options": {
      "a": "Que el peatón antes de cruzar debe mirar si se acercan autos por la derecha.",
      "b": "Que el conductor que viene por la derecha debe tener cuidado con los peatones.",
      "c": "Que los peatones deben circular por la izquierda.",
      "d": "Que los peatones deben circular por la derecha."
    },
    "answer": "c"
  },
  {
    "id": 103,
    "question": "Es una conducta que se sanciona:",
    "options": {
      "a": "Rendir la evaluación teórica para obtener una licencia de conducir, hacienda uso de celulares, equipos o materiales",
      "b": "Ofrecer un bene ﬁ cio indebido para obtener una licencia de conducir.",
      "c": "Realizar el proceso de obtención de una licencia de conducir, a través de tramitadores.",
      "d": "Todas las anteriores."
    },
    "answer": "d"
  },
  {
    "id": 104,
    "question": "La siguiente señal (R-48), signi ﬁ ca:",
    "options": {
      "a": "Los peatones deben circular por la derecha y los camiones por la izquierda.",
      "b": "Los peatones deben tener cuidado con los camiones.",
      "c": "Zona de carga y descarga.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 105,
    "question": "La siguiente señal (R-49), signi ﬁ ca:",
    "options": {
      "a": "Está permitido cambiar de carril por la izquierda y por la derecha.",
      "b": "Se debe mantener la distancia de seguridad entre vehículos.",
      "c": "Está permitido cambiar de carril por la izquierda para adelantar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 106,
    "question": "La siguiente señal (R-50), signi ﬁ ca:",
    "options": {
      "a": "Que si solo hay un carril tiene preferencia de paso el conductor que llegó primero.",
      "b": "Que si solo hay un carril tiene preferencia el conductor que está mirando la señal.",
      "c": "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe darle paso al del sentido",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 107,
    "question": "La señal (R-5-1), es:",
    "options": {
      "a": "Una señal informativa.",
      "b": "Una señal preventiva.",
      "c": "Una señal de obligación.",
      "d": "No es una señal válida en el Perú."
    },
    "answer": "c"
  },
  {
    "id": 108,
    "question": "La señal (P-3A), le indica al conductor que:",
    "options": {
      "a": "Hay una curva y contra-curva a la izquierda.",
      "b": "Hay una curva y contra-curva a la derecha.",
      "c": "Hay una curva y contra-curva pronunciada a la derecha.",
      "d": "Hay una curva y contra-curva pronunciada a la izquierda."
    },
    "answer": "c"
  },
  {
    "id": 109,
    "question": "La siguiente señal (P-5-1A), le advierte al conductor que:",
    "options": {
      "a": "Se aproxima a una curva y contra-curva a la izquierda.",
      "b": "Se aproxima a una curva y contra-curva a la derecha.",
      "c": "Se aproxima a un camino sinuoso a la derecha.",
      "d": "Se aproxima a un camino sinuoso a la izquierda."
    },
    "answer": "d"
  },
  {
    "id": 110,
    "question": "La siguiente señal (P-61), le advierte al conductor que:",
    "options": {
      "a": "El sentido del tránsito es el que indica la ﬂ echa.",
      "b": "Se aproxima a una reducción de la vía en ambos sentidos.",
      "c": "Está circulando por una curva horizontal.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 111,
    "question": "La siguiente señal (P-34), le advierte al conductor que:",
    "options": {
      "a": "La vía está en mal estado y tiene baches.",
      "b": "Se aproxima a un resalto.",
      "c": "Se aproxima a un rompe muelles.",
      "d": "Se aproxima a un badén."
    },
    "answer": "d"
  },
  {
    "id": 112,
    "question": "La siguiente señal (P-60), es:",
    "options": {
      "a": "Una señal turística.",
      "b": "Una señal informativa.",
      "c": "Una señal preventiva.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 113,
    "question": "La siguiente señal (P-46), indica:",
    "options": {
      "a": "Existencia de una ciclovía.",
      "b": "Autorización para el cruce de ciclistas.",
      "c": "Ciclistas en la vía.",
      "d": "Cercanía de una ciclovía."
    },
    "answer": "c"
  },
  {
    "id": 114,
    "question": "La siguiente señal (P-46-A), indica:",
    "options": {
      "a": "Que los ciclistas deben usar la ciclovía.",
      "b": "Que nos aproximamos a un cruce de ciclovía.",
      "c": "Que la ciclovía es solo para los ciclistas.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 115,
    "question": "La siguiente señal (P-46B), indica:",
    "options": {
      "a": "Que los ciclistas deben detenerse en ese punto.",
      "b": "Que nos aproximamos a un cruce de ciclovía.",
      "c": "Que la ciclovía es solo para los ciclistas.",
      "d": "La ubicación de un cruce de ciclistas."
    },
    "answer": "d"
  },
  {
    "id": 116,
    "question": "La siguiente señal (P-48), indica:",
    "options": {
      "a": "Vía es de uso exclusivo de los peatones.",
      "b": "Zona con presencia de peatones.",
      "c": "Ubicación de un cruce escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 117,
    "question": "La siguiente señal (P-48A), indica:",
    "options": {
      "a": "Vía es de uso exclusivo de peatones.",
      "b": "Proximidad a un cruce peatonal.",
      "c": "Ubicación de un cruce escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 118,
    "question": "La siguiente señal (P-48-B), indica:",
    "options": {
      "a": "Ubicación de un cruce escolar.",
      "b": "Proximidad a una calzada.",
      "c": "Ubicación de un cruce peatonal.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 119,
    "question": "La siguiente señal (P-49), indica:",
    "options": {
      "a": "Zona escolar.",
      "b": "Proximidad a un cruce peatonal.",
      "c": "Zona transitada.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 120,
    "question": "La siguiente señal (P-49A), indica:",
    "options": {
      "a": "Zona escolar.",
      "b": "Proximidad a un cruce escolar.",
      "c": "Ubicación de un cruce escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 121,
    "question": "La siguiente señal (P-49B), indica:",
    "options": {
      "a": "Zona transitada.",
      "b": "Proximidad a un cruce peatonal.",
      "c": "Ubicación de un cruce escolar",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 122,
    "question": "La siguiente señal (P-50), indica:",
    "options": {
      "a": "Zona de deportes.",
      "b": "Proximidad a campo deportivo.",
      "c": "Proximidad a zona urbana.",
      "d": "Niños jugando."
    },
    "answer": "d"
  },
  {
    "id": 123,
    "question": "La siguiente señal (P-51), indica:",
    "options": {
      "a": "Zona de parqueo de vehículos pesados.",
      "b": "Proximidad a zona rural.",
      "c": "Maquinaria agrícola en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 124,
    "question": "La siguiente señal (P-53), indica:",
    "options": {
      "a": "Proximidad a un establo.",
      "b": "Proximidad a zona agrícola.",
      "c": "Animales en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 125,
    "question": "La siguiente señal (P-55), indica:",
    "options": {
      "a": "Semáforo malogrado.",
      "b": "Proximidad a un semáforo.",
      "c": "Semáforos en ola verde.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 126,
    "question": "La siguiente señal (P-58), le indica:",
    "options": {
      "a": "Que usted se aproxima a una señal de PARE.",
      "b": "Que usted debe parar donde está la señal P-58.",
      "c": "Que se trata de un PARE, pero puede seguir adelante.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 127,
    "question": "La siguiente señal (P-59), le indica:",
    "options": {
      "a": "Que usted se aproxima a una señal de CEDA EL PASO.",
      "b": "Que usted debe ceder el paso donde está la señal P-59.",
      "c": "Que se trata de un PARE, pero puede seguir adelante.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 128,
    "question": "La siguiente señal (P-41), le indica:",
    "options": {
      "a": "Que usted se aproxima a una zona de camiones.",
      "b": "Que usted debe encender sus luces pues se aproxima a una zona con poca visibilidad.",
      "c": "Que usted se aproxima a un túnel.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 129,
    "question": "La siguiente señal (P-45), indica:",
    "options": {
      "a": "Proximidad a un aeropuerto.",
      "b": "Proximidad a una pista de aviones.",
      "c": "Vuelo de aviones a baja altura.",
      "d": "Aviones que generan ruido."
    },
    "answer": "c"
  },
  {
    "id": 130,
    "question": "La siguiente señal (P-52), le indica:",
    "options": {
      "a": "Que usted debe dar prioridad de paso a las ambulancias.",
      "b": "Que usted debe dar prioridad de paso a los bomberos.",
      "c": "Que se aproxima a una salida de vehículos de bomberos.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 131,
    "question": "La siguiente señal (P-66), le indica:",
    "options": {
      "a": "Que se aproxima un desierto.",
      "b": "Que se aproxima una zona donde hay ráfagas de viento lateral.",
      "c": "Que se acerca a una zona de arenamiento en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 132,
    "question": "La siguiente señal (P-66A), le indica:",
    "options": {
      "a": "Que se aproxima una tormenta.",
      "b": "Que está pasando por una zona donde hay ráfagas de viento lateral.",
      "c": "Que se acerca a una zona de arenamiento en la vía.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 133,
    "question": "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    "options": {
      "a": "La vía está interrumpida y debe tomar el camino alternativo que muestra la señal.",
      "b": "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar",
      "c": "En la siguiente intersección está prohibido girar a la derecha y por lo tanto, si desea seguir esa ruta debe tomar el",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 134,
    "question": "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    "options": {
      "a": "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana.",
      "b": "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe hacerlo",
      "c": "En esa dirección hay una zona de parqueo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 135,
    "question": "La siguiente señal (I-14), signi ﬁ ca:",
    "options": {
      "a": "Señal de hostal.",
      "b": "Señal de hospedaje.",
      "c": "Señal de hospital.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 136,
    "question": "La siguiente señal (I-31), signi ﬁ ca:",
    "options": {
      "a": "Proximidad de una bahía de taxis.",
      "b": "Proximidad a un estacionamiento permitido.",
      "c": "Proximidad de una zona de parqueo para vecinos.",
      "d": "Proximidad de un estacionamiento para emergencias."
    },
    "answer": "d"
  },
  {
    "id": 137,
    "question": "La siguiente señal (I-9), signi ﬁ ca:",
    "options": {
      "a": "Zona de control policial.",
      "b": "Zona de control de aduanas.",
      "c": "Zona militar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 138,
    "question": "La siguiente señal (I-18), se utiliza para indicar:",
    "options": {
      "a": "Cercanía a una ferretería.",
      "b": "Cercanía a un servicio mecánico.",
      "c": "Cercanía a un grifo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 139,
    "question": "La siguiente señal (I-19), se utiliza para indicar:",
    "options": {
      "a": "Cercanía a un servicio mecánico.",
      "b": "Cercanía a una tienda.",
      "c": "Cercanía a un grifo.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 140,
    "question": "La siguiente señal (I-20), se utiliza para indicar:",
    "options": {
      "a": "Cercanía a un servicio mecánico.",
      "b": "Cercanía a una zona donde debe circular con cadenas en las llantas.",
      "c": "Cercanía a un grifo.",
      "d": "Cercanía a una llantería."
    },
    "answer": "d"
  },
  {
    "id": 141,
    "question": "La siguiente señal (R-16A), se utiliza para indicar:",
    "options": {
      "a": "Fin de la restricción de circulación de automotores.",
      "b": "Fin de la restricción de prohibido adelantar.",
      "c": "Fin de la restricción de circulación en doble sentido.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 142,
    "question": "El comportamiento del conductor como usuario de la vía, debe estar orientado a:",
    "options": {
      "a": "Valor por la vida.",
      "b": "Respeto por la integridad física del resto de los usuarios.",
      "c": "Respeto a la autoridad encargada de la vigilancia y disciplina del trá ﬁ co.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 143,
    "question": "Son considerados usuarios vulnerables de la vía y por tanto merecen especial protección:",
    "options": {
      "a": "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas.",
      "b": "Únicamente los peatones y ciclistas.",
      "c": "Únicamente los peatones y niños.",
      "d": "Todos las alternativas son correctas, con excepción de los ciclistas."
    },
    "answer": "a"
  },
  {
    "id": 144,
    "question": "La siguiente señal (P-61), muestra:",
    "options": {
      "a": "Flechas retrore ﬂ ectivas que indican peligro.",
      "b": "Delineadores de curva, que guían al conductor.",
      "c": "Advertencia al conductor sobre la proximidad de un puente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 145,
    "question": "El conductor está ________ a ___________ a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicación por alcohol, drogas, estupefacientes u otros tóxicos",
    "options": {
      "a": "En su derecho - negarse.",
      "b": "Facultado - Rechazar.",
      "c": "Obligado - someterse.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 146,
    "question": "Ante un conductor con evidente discapacidad física, la cual no ﬁ gura en el rubro de restricciones de su licencia de conducir, procede:",
    "options": {
      "a": "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir",
      "b": "Que la autoridad competente expida un permiso excepcional para dicho conductor.",
      "c": "Que la Policía de Tránsito expida un permiso excepcional para dicho conductor.",
      "d": "Que la Policía de Tránsito otorgue a dicho conductor un plazo prudencial para que continúe conduciendo."
    },
    "answer": "a"
  },
  {
    "id": 147,
    "question": "Es una obligación general de tránsito que, los ____________ circulen respetando los mensajes de _______________, las instrucciones de los Efectivos de la Policía de Tránsito y el mandato de las normas legales y reglamentarias correspondientes.",
    "options": {
      "a": "Peatones - los letreros instalados en las vías públicas.",
      "b": "Los usuarios de la vía pública - los dispositivos de control de tránsito.",
      "c": "Vehículos - los medios de comunicación.",
      "d": "Menores de edad - los adultos mayores."
    },
    "answer": "b"
  },
  {
    "id": 148,
    "question": "Marque la a ﬁ rmación incorrecta:",
    "options": {
      "a": "Está prohibido arrojar, depositar o abandonar objetos en la vía pública, o cualquier otro obstáculo que pueda",
      "b": "El conductor debe mantener el vehículo que conduce con el combustible necesario para evitar detenciones en la",
      "c": "Las motocicletas pueden compartir un mismo carril con otro vehículo al circular.",
      "d": "En caso de haber agua en la calzada, el conductor de un vehículo debe tomar las precauciones, para evitar que"
    },
    "answer": "c"
  },
  {
    "id": 149,
    "question": "¿Si al conducir por una avenida se encuentra con una señal en la vía que indica un límite máximo de 50 km/h, sin embargo, conforme a lo dispuesto en la norma el límite máximo de velocidad en dicha vía es de 60 km/h; usted:",
    "options": {
      "a": "Debe obedecer la señal de velocidad instalada en la vía.",
      "b": "Puede ir a una velocidad máxima de 60 km/h.",
      "c": "Debe ir a una velocidad máxima de 60 km/h.",
      "d": "Debe ir a una velocidad entre 50 y 60 km/h."
    },
    "answer": "a"
  },
  {
    "id": 150,
    "question": "Indique la conducta permitida:",
    "options": {
      "a": "El estacionamiento de un vehículo a la salida de salas de espectáculos en funcionamiento.",
      "b": "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible.",
      "c": "El estacionamiento de un vehículo dentro de una intersección",
      "d": "El estacionamiento de un vehículo sobre las aceras."
    },
    "answer": "b"
  },
  {
    "id": 151,
    "question": "Se considera el abandono de un vehículo cuando:",
    "options": {
      "a": "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de",
      "b": "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de",
      "c": "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de",
      "d": "La norma de tránsito no establece nada sobre el abandono del vehículo."
    },
    "answer": "c"
  },
  {
    "id": 152,
    "question": "El servicio de taxi en motos lineales _____________:",
    "options": {
      "a": "No está permitido.",
      "b": "Esta permitido, siempre y cuando lo autorice la Municipalidad correspondiente.",
      "c": "Esta permitido, siempre y cuando se tomen las medidas de seguridad que establece la norma.",
      "d": "La b) y c) son correctas."
    },
    "answer": "a"
  },
  {
    "id": 153,
    "question": "Sobre la emisión vehicular de sustancias contaminantes, marque la opción correcta:",
    "options": {
      "a": "Está permitida.",
      "b": "Está prohibida, en un índice superior al límite máximo que permite la norma.",
      "c": "Está prohibida en el ámbito urbano.",
      "d": "La norma no regula sobre ello."
    },
    "answer": "b"
  },
  {
    "id": 154,
    "question": "La autoridad competente, ______________ puede prohibir o restringir _____________________ en determinadas vías públicas.",
    "options": {
      "a": "Cuando la situación lo justi ﬁ que - la circulación o estacionamiento de vehículos.",
      "b": "Aun cuando la situación lo justi ﬁ que no - circulación o estacionamiento de vehículos.",
      "c": "No se encuentra facultada ni - circulación de vehículos",
      "d": "Únicamente con el consentimiento del conductor - circulación de vehículos."
    },
    "answer": "a"
  },
  {
    "id": 155,
    "question": "La detención de un vehículo debe efectuarse:",
    "options": {
      "a": "En el sentido contrario a la circulación y en el carril izquierdo de la vía.",
      "b": "En el sentido contrario a la circulación y en el carril derecho de la vía.",
      "c": "En el sentido de la circulación y en el carril izquierdo de la vía.",
      "d": "En el sentido de la circulación y en el carril derecho de la vía."
    },
    "answer": "d"
  },
  {
    "id": 156,
    "question": "En caso de un accidente de tránsito con daños personales y/o materiales los participantes deben:",
    "options": {
      "a": "Acudir a la estación de bomberos.",
      "b": "Llamar a un familiar.",
      "c": "Solicitar la intervención de la autoridad policial.",
      "d": "Abandonar el lugar donde ocurrió el accidente."
    },
    "answer": "c"
  },
  {
    "id": 157,
    "question": "La faculta y autoriza la circulación del vehículo por la vía pública, identi ﬁ ca el bien, y, por ende, al titular responsable de las acciones que deriven de su propiedad.",
    "options": {
      "a": "Tarjeta de identi ﬁ cación vehicular.",
      "b": "Municipalidad provincial.",
      "d": "Placa Única Nacional de Rodaje."
    },
    "answer": "d"
  },
  {
    "id": 158,
    "question": "¿Después de qué tiempo de haber cometido la misma infracción se llama reincidencia y es sancionada con el doble de la multa establecida?",
    "options": {
      "a": "06 meses.",
      "b": "12 meses.",
      "c": "24 meses.",
      "d": "35 meses."
    },
    "answer": "b"
  },
  {
    "id": 159,
    "question": "Si a un conductor infractor le suspendieron su licencia de conducir, éste se encuentra facultado para:",
    "options": {
      "a": "Tramitar el duplicado de su licencia de conducir.",
      "b": "Tramitar la revalidación de su licencia de conducir.",
      "c": "Tramitar la recategorización de su licencia de conducir.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "d"
  },
  {
    "id": 160,
    "question": "Las __________________ tienen por función informar a los usuarios sobre los servicios generales existentes próximos a la vía, tales como teléfono, hospedaje, restaurante, primeros auxilios, estación de combustibles, talleres, y otros.",
    "options": {
      "a": "Señales de localización.",
      "b": "Señales de salida inmediata.",
      "c": "Señales de servicios generales.",
      "d": "Señales ordinarias."
    },
    "answer": "c"
  },
  {
    "id": 161,
    "question": "¿Constituye una infracción tramitar el duplicado de una licencia de conducir que se encuentra retenida?",
    "options": {
      "a": "No constituye una infracción.",
      "b": "Solo cuando la licencia de conducir ha sido retenida por la comisión de una infracción muy grave.",
      "c": "Si, constituye una infracción.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 162,
    "question": "Las marcas en el pavimento constituyen la señalización ___________ y se emplean para _____________ la circulación.",
    "options": {
      "a": "Horizontal - reglamentar.",
      "b": "Vertical - reglamentar.",
      "c": "Más importante - mejorar.",
      "d": "Menos importante - adornar."
    },
    "answer": "a"
  },
  {
    "id": 163,
    "question": "Ciclista es a ciclovía como:",
    "options": {
      "a": "Conductor - acera.",
      "b": "Conductor - calzada.",
      "c": "Conductor - berma.",
      "d": "Peatón - autopista."
    },
    "answer": "b"
  },
  {
    "id": 164,
    "question": "La siguiente señal (P-15), se utiliza para advertir al conductor:",
    "options": {
      "a": "La proximidad a una vía de tres carriles.",
      "b": "La proximidad a un huracán.",
      "c": "La proximidad a un camino sinuoso.",
      "d": "La proximidad de una intersección rotatoria (óvalo o rotonda)."
    },
    "answer": "d"
  },
  {
    "id": 165,
    "question": "La siguiente señal (P-31A), indica:",
    "options": {
      "a": "La proximidad del ﬁ nal de la vía.",
      "b": "La proximidad de una vía asfaltada.",
      "c": "La proximidad de una pendiente leve.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 166,
    "question": "Es una línea transversal a la calzada, que indica al conductor que debe detener completamente el vehículo, no debiendo sobrepasar el inicio de la indicada línea:",
    "options": {
      "a": "Línea de carril.",
      "b": "Línea de borde de calzada.",
      "c": "Línea de pare.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "c"
  },
  {
    "id": 167,
    "question": "Los semáforos son:",
    "options": {
      "a": "Dispositivos de control del tránsito que tienen por ﬁ nalidad regular y controlar el tránsito vehicular, motorizado y",
      "b": "Dispositivos de control del tránsito que tienen por ﬁ nalidad regular y controlar únicamente el tránsito vehicular",
      "c": "Señales de color rojo, verde y amarillo, que tienen como único ﬁ n regular la corriente vehicular.",
      "d": "Artefactos que emiten luces de colores y cuyo único ﬁ n es regular la corriente de vehículos motorizados y"
    },
    "answer": "a"
  },
  {
    "id": 168,
    "question": "La conducción requiere un alto nivel de atención, pues existen distracciones que pueden ocasionar accidentes de tránsito, como por ejemplo:",
    "options": {
      "a": "Preocupaciones.",
      "b": "Uso del teléfono celular.",
      "c": "Manipulación de la radio mientras se conduce.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 169,
    "question": "¿In ﬂ uye la somnolencia en la capacidad de conducir?",
    "options": {
      "a": "Si, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores.",
      "b": "Si, ya que el conductor está de mal genio.",
      "c": "No, siempre que la conducción sea realizada lentamente.",
      "d": "No, siempre y cuando la conducción sea realizada con un acompañante."
    },
    "answer": "a"
  },
  {
    "id": 170,
    "question": "¿Cuál es la acción correcta del conductor, según las normas de tránsito, en la situación que plantea el siguiente gráﬁ co?",
    "options": {
      "a": "Girar rápidamente a la derecha antes que el peatón cruce la calzada.",
      "b": "Dar preferencia de paso al peatón para que cruce la calzada.",
      "c": "Girar lentamente a la derecha antes que el peatón cruce la calzada.",
      "d": "Tocar el claxon para que el peatón no cruce la calzada"
    },
    "answer": "b"
  },
  {
    "id": 171,
    "question": "¿En cuál de las siguientes opciones, los factores mencionados contribuyen a una colisión vehicular?",
    "options": {
      "a": "Pavimento seco, somnolencia, frenos desgastados.",
      "b": "Pavimento húmedo, neumáticos desgastados, cansancio.",
      "c": "Reductores de velocidad, falta de atención, uso del teléfono celular.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "b"
  },
  {
    "id": 172,
    "question": "La __________ es la parte de una carretera o camino contigua a la calzada, no habilitada para la circulación de vehículos y destinada eventualmente a la detención de vehículos en emergencia y circulación de peatones.",
    "options": {
      "a": "Berma.",
      "b": "Autopista.",
      "c": "Acera.",
      "d": "Demarcación."
    },
    "answer": "a"
  },
  {
    "id": 173,
    "question": "Es una parte de la vía destinada a la circulación de vehículos y eventualmente al cruce de peatones y animales.",
    "options": {
      "a": "La calzada.",
      "b": "La acera.",
      "c": "La berma.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 174,
    "question": "Es una parte de la vía destinada al uso de peatones",
    "options": {
      "a": "La acera.",
      "b": "La calzada.",
      "c": "La berma.",
      "d": "La autopista."
    },
    "answer": "a"
  },
  {
    "id": 175,
    "question": "Son señales que regulan el tránsito:",
    "options": {
      "a": "Las bocinas y las marcas en la calzada o señales horizontales.",
      "b": "Las bocinas y las señales verticales.",
      "c": "Las señales verticales, las marcas en la calzada o señales horizontales y las bocinas.",
      "d": "Las señales verticales y las marcas en la calzada o señales horizontales."
    },
    "answer": "d"
  },
  {
    "id": 176,
    "question": "El conductor que en una vía urbana va a girar a la izquierda, a la derecha o en “U” debe hacer la señal respectiva con la luz direccional, por lo menos:",
    "options": {
      "a": "2 segundos antes de realizar la maniobra.",
      "b": "1 metro antes de realizar la maniobra.",
      "c": "20 metros antes de realizar la maniobra.",
      "d": "3 metros antes de realizar la maniobra."
    },
    "answer": "c"
  },
  {
    "id": 177,
    "question": "Si usted está conduciendo por una carretera y va girar a la izquierda, debe realizar la señal respectiva con la luz direccional por lo menos:",
    "options": {
      "a": "2 segundos antes de realizar la maniobra.",
      "b": "2 metros antes de realizar la maniobra.",
      "c": "30 metros antes de realizar la maniobra.",
      "d": "1 metro antes de realizar la maniobra."
    },
    "answer": "c"
  },
  {
    "id": 178,
    "question": "La licencia de la Clase B, permite conducir autos?",
    "options": {
      "a": "Si.",
      "b": "No.",
      "c": "Únicamente en el ámbito urbano.",
      "d": "Únicamente en carreteras."
    },
    "answer": "b"
  },
  {
    "id": 179,
    "question": "El siguiente grá ﬁ co muestra:",
    "options": {
      "a": "Señalización de tránsito vertical y horizontal en una zona escolar.",
      "b": "Únicamente señalización de tránsito vertical en una zona escolar.",
      "c": "Únicamente señalización de tránsito horizontal en una zona escolar.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 180,
    "question": "Las __________canalizadoras, tiene por función conformar las islas canalizadoras del tránsito automotor en una _________.",
    "options": {
      "a": "Islas canalizadoras - vía.",
      "b": "Líneas - intersección.",
      "c": "Vías - intersección.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "b"
  },
  {
    "id": 181,
    "question": "Si al conducir en una intersección se encuentra con las siguientes marcas en el pavimento (malla ortogonal de color amarillo), signiﬁ ca:",
    "options": {
      "a": "Que no puede detener el vehículo dentro del área de intersección.",
      "b": "Que se están relizando trabajos de emergencia en el área demarcada.",
      "c": "Que únicamente puede detener el vehículo dentro del área de intersección.",
      "d": "Que es una isla de re ﬁ gio peatonal."
    },
    "answer": "a"
  },
  {
    "id": 182,
    "question": "De acuerdo al siguiente grá ﬁ co, es correcto aﬁ rmar que:",
    "options": {
      "a": "La zona que permite adelantar inicia con las líneas amarillas continuas.",
      "b": "Los conductores pueden estacionarse al empezar las líneas continuas.",
      "c": "La zona de no adelantar inicia con las líneas amarillas contínuas.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 183,
    "question": "Cuál de las siguientes alternativas, no es una infracción de tránsito:",
    "options": {
      "a": "Abandonar el vehículo en la vía pública.",
      "b": "Detener el vehícuo bruscamente sin motivo.",
      "c": "Utilizar señales audibles o visibles, iguales o similares a las que utilizan los vehículos de emergencia.",
      "d": "Detenerse en luz verde, para ceder el paso a un peatón."
    },
    "answer": "d"
  },
  {
    "id": 184,
    "question": "Existe infracción al tránsito cuya sanción sea nunca más obtener una licencia de conducir?",
    "options": {
      "a": "No existe, sería demasiado.",
      "b": "Si existe, y una de ellas es por conducir con presencia de alcohol en mayor grado al permitido y participar en un",
      "c": "Sólo el juez puede dictar una sanción de esa naturaleza.",
      "d": "Ninguna de las anteriores."
    },
    "answer": "b"
  },
  {
    "id": 185,
    "question": "Los ___________ y las __________ requieren un carril completo para circular con seguridad.",
    "options": {
      "a": "Buses - moticicletas",
      "b": "Camiones - moticicletas",
      "c": "Automóviles - moticicletas",
      "d": "Todas las anteriores."
    },
    "answer": "d"
  },
  {
    "id": 186,
    "question": "El conductor de un vehículo debe reducir la velocidad, siempre que se encuentre en los siguientes casos:",
    "options": {
      "a": "En intersecciones, curvas, túneles, puentes.",
      "b": "En carreteras, curvas, avenidas.",
      "c": "En túneles, avenidas, trocha.",
      "d": "Todas las anteriores."
    },
    "answer": "a"
  },
  {
    "id": 187,
    "question": "El pasajero de una motocicleta debe saber:",
    "options": {
      "a": "Que debe mantener ambos pies sobre los apoyapiés.",
      "b": "Que debe sujetarse con más ﬁ rmeza, cuando la motocicleta esté a punto de arrancar.",
      "c": "Que debe sentarse lo más adelante que pueda, sin quitarle espacio al conductor.",
      "d": "Todas las anteriores."
    },
    "answer": "d"
  },
  {
    "id": 188,
    "question": "En la relación “conductores de vehículos menores” (por ejemplo una motocicleta) y “conductores de vehículos mayores” (por ejemplo un auto sedan), la aﬁ rmación correcta es:",
    "options": {
      "a": "Los conductores de vehículos menores tienen las obligaciones y derechos aplicables a los conductores de",
      "b": "Los conductores de vehículos menores tienen menos obligaciones que los conductores de vehículos mayores, al",
      "c": "Los conductores de vehículos mayores tienen mas derechos que los conductores de vehículos menores, al",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 189,
    "question": "Antes de iniciar la conducción de una motocicleta, el conductor debe:",
    "options": {
      "a": "Colocarse el casco.",
      "b": "Veri ﬁ car el correcto funcionamiento del sistema de luces (direccionales, delanteras, posteriores).",
      "c": "Alinear los espejos retrovisores.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 190,
    "question": "El equipo de protección más importante al conducir una motocicleta, es:",
    "options": {
      "a": "Guantes.",
      "b": "Rodilleras.",
      "c": "Coderas, rodilleras, anteojos protectores y guantes.",
      "d": "Casco."
    },
    "answer": "d"
  },
  {
    "id": 191,
    "question": "La posición correcta del motociclista en la conducción es:",
    "options": {
      "a": "Los brazos deben estar totalmente estirados.",
      "b": "Las manos deben sujetar con delicadeza el extremo de las empuñaduras.",
      "c": "Los pies deben encontrarse sobre los apoyapiés.",
      "d": "Las alternativas b y c son correctas."
    },
    "answer": "c"
  },
  {
    "id": 192,
    "question": "La siguiente a ﬁ rmación: “el motociclista que se encuentra conduciendo en un carril, no debe permitir que otros vehículos intenten forzarlo a moverse hacia un costado del mismo”, es:",
    "options": {
      "a": "Falsa.",
      "b": "Verdadera.",
      "c": "Falsa, porque un automóvil tiene preferencia de uso de carril.",
      "d": "Falsa, porque solo un automóvil puede usar un carril completo."
    },
    "answer": "b"
  },
  {
    "id": 193,
    "question": "La agilidad de la moto ___________ debe ser _________ para ir en __________ entre vehículos:",
    "options": {
      "a": "Siempre - aprovechada - zig zag.",
      "b": "Nunca - aprovechada - zig zag.",
      "c": "A veces - utilizada - zig zag.",
      "d": "Momentáneamente - aprovechada - zig zag"
    },
    "answer": "b"
  },
  {
    "id": 194,
    "question": "La conducción e ﬁ ciente, tiene como beneﬁ cio:",
    "options": {
      "a": "Cuidado del medioambiente, ahorro de combustible o energía.",
      "b": "No conducir bajo los efectos del alcohol y drogas.",
      "c": "No conducir con la licencia suspendida.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "a"
  },
  {
    "id": 195,
    "question": "La siguiente señal de autorización, le indica que:",
    "options": {
      "a": "Permite el giro a la izquierda en una intersección con semáforo en luz roja.",
      "b": "Permite el giro a la derecha en una intersección con semáforo en luz roja.",
      "c": "Permite el giro a la izquierda en una intersección donde no hay semáforo.",
      "d": "Permite el giro a la derecha en una intersección donde no hay semáforo."
    },
    "answer": "a"
  },
  {
    "id": 196,
    "question": "Es una técnica de conducción e ﬁ ciente, y por tanto permite la reducción del consumo de combustible, así como de la contaminación ambiental:",
    "options": {
      "a": "No acelerar bruscamente y mantener el vehículo en buen estado mecánico.",
      "b": "Mantener el velocímetro siempre encima de los 40 Km/h.",
      "c": "Mantener la presión de aire de los neumáticos por debajo del nivel correcto.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "a"
  },
  {
    "id": 197,
    "question": "La posición correcta de los pies al conducir una motocicleta es:",
    "options": {
      "a": "Mantener los pies sobre los apoyapiés, con la punta de los pies hacia abajo.",
      "b": "Mantener los pies sobre los apoyapiés, con la punta de los pies hacia arriba.",
      "c": "Colocar de manera recta el arco de los pies en los apoyapiés.",
      "d": "No colocar los pies en los apoyapiés."
    },
    "answer": "c"
  },
  {
    "id": 198,
    "question": "Para un frenado seguro de la motocicleta (en un frenado usual como, al entrar a una curva, al llegar a una intersección, etc.), se debe utilizar:",
    "options": {
      "a": "El freno delantero y el freno posterior.",
      "b": "Únicamente el freno delantero, pues es más potente.",
      "c": "Únicamente el freno posterior.",
      "d": "Únicamente el freno delantero."
    },
    "answer": "a"
  },
  {
    "id": 199,
    "question": "Al realizar el cambio de carril, la conducta correcta es:",
    "options": {
      "a": "Veri ﬁ car la aproximación de otro vehículo al realizar la maniobra.",
      "b": "Utilizar las luces direccionales que correspondan y las luces de emergencia.",
      "c": "Utilizar únicamente las luces de emergencia.",
      "d": "Nunca mirar la vía y enfocarse solamente en los vehículos."
    },
    "answer": "a"
  },
  {
    "id": 200,
    "question": "Mientras se conduce para alcanzar la velocidad deseada, la aceleración debe ser:",
    "options": {
      "a": "Muy rápida y agresiva.",
      "b": "Muy lenta.",
      "c": "Progresiva.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 201,
    "question": "Si el señor “X” presta servicio de transporte público de personas en un vehículo menor autorizado (mototaxi) ¿por qué vías esta autorizado a circular?",
    "options": {
      "a": "Vías expresas.",
      "b": "Carreteras.",
      "c": "Carreteras, si éstas cruzan el centro poblado respectivo o no existe vía alterna.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "c"
  },
  {
    "id": 202,
    "question": "Si usted presta servicio de transporte público de personas en un vehículo menor autorizado (mototaxi), debe circular por ____________",
    "options": {
      "a": "Vías urbanas que determine la municipalidad distrital competente.",
      "b": "Vías expresas que determine la municipalidad distrital competente.",
      "c": "Pasos a desnivel que determine la municipalidad provincial competente.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 203,
    "question": "La velocidad máxima de circulación de un vehículo menor empleado para prestar el servicio de transporte público de personas (mototaxi), es de:",
    "options": {
      "a": "40 kilómetros por hora.",
      "b": "50 kilómetros por hora.",
      "c": "60 kilómetros por hora.",
      "d": "30 kilómetros por hora."
    },
    "answer": "d"
  },
  {
    "id": 204,
    "question": "¿En qué parte del mototaxi se debe portar y exhibir la placa única nacional de de rodaje?",
    "options": {
      "a": "Únicamente en la parte posterior central.",
      "b": "En la parte delantera central y en la parte posterior central.",
      "c": "En la parte posterior central y opcionalmente en la parte delantera central.",
      "d": "Ninguna de las alternativas es correcta."
    },
    "answer": "a"
  },
  {
    "id": 205,
    "question": "El conductor del servicio de transporte público de personas en mototaxi, tiene la obligación de:",
    "options": {
      "a": "Ser titular de una licencia de conducir de la clase B categoría II-c.",
      "b": "Prestar el servicio únicamente en vehículos habilitados por la autoridad competente.",
      "c": "Ser capacitado anualmente en materia de seguridad vial.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 206,
    "question": "Todo usuario del servicio de transporte tiene derecho a:",
    "options": {
      "a": "Ser transportado en vehículos habilitados por la autoridad competente.",
      "b": "Exigir al conductor que su ascenso y descenso del vehículo se realice en lugares autorizados.",
      "c": "Ser transportado en vehículos que cuenten con certi ﬁ cado de inspección técnica vehicular vigente.",
      "d": "Todas las alternativas son correctas."
    },
    "answer": "d"
  },
  {
    "id": 207,
    "question": "¿En qué tipo de vehículo menor está permitido prestar el servicio de transporte público de personas?",
    "options": {
      "a": "Moto y mototaxi.",
      "b": "Moto, únicamente en caso que las vías se encuentren saturadas.",
      "c": "Mototaxi.",
      "d": "Moto, en caso que la vía sea declarada por la autoridad competente como saturada."
    },
    "answer": "c"
  },
  {
    "id": 208,
    "question": "Si “X” se encuentra prestando el servicio de transporte público de personas en mototaxi y comete una infracción al tránsito vinculada a su propia conducta, como por ejemplo no respetar la luz roja ¿quién debe asumir la responsabilidad ante dicha infracción?",
    "options": {
      "a": "“X”, al ser el conductor.",
      "b": "El propietario del vehículo.",
      "c": "La persona jurídica que tiene la autorización como prestador del servicio de transporte público de personas en",
      "d": "El propietario del vehículo y la persona jurídica que tiene la autorización como preStador del servicio de transporte"
    },
    "answer": "a"
  }
];