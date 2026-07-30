const questionsData = [
  {
    "num": "1",
    "question": "1. Respecto  de  los  dispositivos  de  control  o  regulación  del  tránsito:",
    "answer": "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario."
  },
  {
    "num": "2",
    "question": "2. La  señal  vertical  reglamentaria  R-6  \"prohibido  voltear  a  la  izquierda\",  significa  que:",
    "answer": "Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U."
  },
  {
    "num": "3",
    "question": "3. La  señal  vertical  reglamentaria  R-3  significa  que:",
    "answer": "El único sentido de desplazamiento es continuar de frente."
  },
  {
    "num": "4",
    "question": "4. En  las  vías,  las  marcas  en  el  pavimento  que  son  del  tipo  central  discontinua  y  de color amarillo significan que:",
    "answer": "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo."
  },
  {
    "num": "5",
    "question": "5. El  color  ámbar  o  amarillo  del  semáforo  significa  que:",
    "answer": "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección."
  },
  {
    "num": "6",
    "question": "6. Los  colores  del  semáforo  tienen  el  siguiente  significado:  rojo:  _____;  ámbar  o amarillo:",
    "answer": "_____; verde: _____ Detención - prevención - paso."
  },
  {
    "num": "7",
    "question": "7. ¿Qué  indica  una  flecha  verde  en  un  semáforo  vehicular?",
    "answer": "Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla."
  },
  {
    "num": "8",
    "question": "8. La  siguiente  señal  vertical  reglamentaria  R-53:",
    "answer": "Prohíbe al conductor detener el vehículo dentro del área de la intersección."
  },
  {
    "num": "9",
    "question": "9. Si  llega  a  una  intersección  y  visualiza  el  semáforo  con  una  flecha  roja  hacia  la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
    "answer": "Avanzar, pero el giro a la izquierda está prohibido por la flecha roja."
  },
  {
    "num": "10",
    "question": "10. Si  llega  a  una  intersección  donde  el  semáforo  muestra  una  luz  intermitente,  qué afirmación es correcta:",
    "answer": "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución."
  },
  {
    "num": "11",
    "question": "11. ¿La  luz  intermitente  roja  es  igual  que  una  señal  de  PARE?",
    "answer": "Verdad."
  },
  {
    "num": "12",
    "question": "12. Al  aproximarse  a  una  intersección  con  giro  permitido  a  la  izquierda,  la  conducta correcta es:",
    "answer": "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución."
  },
  {
    "num": "13",
    "question": "13. Al  cambiar  de  carril  en  una  vía  de  un  solo  sentido  con  múltiples  carriles,  ¿cuál  es  la conducta correcta?",
    "answer": "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución."
  },
  {
    "num": "14",
    "question": "14. Respecto  a  los  cruces  a  nivel  con  vías  férreas,  señale  la  afirmación  correcta:",
    "answer": "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza."
  },
  {
    "num": "15",
    "question": "15. Ante  la  señal  de  color  rojo  del  semáforo  y  la  indicación  de  continuar  la  marcha  del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:",
    "answer": "Continuar la marcha."
  },
  {
    "num": "16",
    "question": "16. Está  prohibido  estacionar  un  vehículo:",
    "answer": "Todas las alternativas son correctas (En las curvas, dentro de una intersección, frente a garajes y recintos militares o policiales)."
  },
  {
    "num": "17",
    "question": "17. La  señal  vertical  reglamentaria  R-29:",
    "answer": "Prohíbe el uso de la bocina."
  },
  {
    "num": "18",
    "question": "18. Se  le  impondrá  el  pago  de  una  multa  y  no  podrá  obtener  la  licencia  de  conducir  por 3 años a la persona que:",
    "answer": "Conduzca un vehículo automotor sin tener licencia de conducir."
  },
  {
    "num": "19",
    "question": "19. En  el  supuesto  que  se  encuentre  manejando  y  un  vehículo  que  tiene  la  intención  de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
    "answer": "No debe aumentar la velocidad hasta que el vehículo lo sobrepase."
  },
  {
    "num": "20",
    "question": "20. ¿Cuál  de  las  siguientes  afirmaciones  es  correcta?",
    "answer": "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos."
  },
  {
    "num": "21",
    "question": "21. En  la  circulación  vehicular,  es  correcto  afirmar  que:",
    "answer": "Los vehículos deben circular dentro de las líneas de carril, salvo cuando se realicen las maniobras que indica el Reglamento Nacional de Tránsito."
  },
  {
    "num": "22",
    "question": "22. En  caso  de  accidentes,  el  SOAT  cubre  los  daños  que  sufren:",
    "answer": "Los ocupantes y terceros no ocupantes del vehículo."
  },
  {
    "num": "23",
    "question": "23. ¿Cuál  de  los  siguientes  seguros  es  exigible  para  conducir  un  vehículo  automotor?",
    "answer": "El Seguro Obligatorio de Accidentes de Tránsito - SOAT."
  },
  {
    "num": "24",
    "question": "24. Cuándo  es  obligatorio  darle  preferencia  de  paso  a  un  vehículo  de  emergencia  o vehículo oficial:",
    "answer": "Cuando emita señales audibles y visibles."
  },
  {
    "num": "25",
    "question": "25. Si  por  el  carril  por  donde  está  conduciendo  se  aproxima  a  un  vehículo  de transporte  escolar  que  se  encuentra  detenido,  recogiendo  o  dejando  escolares ¿Qué debe hacer?",
    "answer": "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares."
  },
  {
    "num": "26",
    "question": "26. ¿Qué  significa  un  triángulo  rojo  de  seguridad  colocado  en  la  calzada?",
    "answer": "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia."
  },
  {
    "num": "27",
    "question": "27. ¿En  la  conducción  vehicular,  existe  excepción  a  la  obligación  de  conservar  la distancia obligatoria entre vehículos?",
    "answer": "Si existe, y es para los cortejos fúnebres, convoyes militares y policiales y caravanas autorizadas."
  },
  {
    "num": "28",
    "question": "28. En  intersecciones  que  no  tienen  señales  de  Pare,  Ceda  el  Paso  o  Semáforo,  ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?",
    "answer": "Sí."
  },
  {
    "num": "29",
    "question": "29. Si  usted  se  aproxima  a  una  señal  de  PARE  colocada  verticalmente  o  pintada  en  la vía, la acción correcta es:",
    "answer": "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución."
  },
  {
    "num": "30",
    "question": "30. ¿Cuál  es  la  diferencia  entre  las  señales  P-2A  y  P-1A?",
    "answer": "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha."
  },
  {
    "num": "31",
    "question": "31. ¿Qué  indica  la  señal  R-30F?",
    "answer": "Regula la velocidad máxima permitida en curvas."
  },
  {
    "num": "32",
    "question": "32. ¿Que  indica  la  siguiente  señal  R-23?",
    "answer": "Prohibida la circulación de motocicletas."
  },
  {
    "num": "33",
    "question": "33. Si  dos  vehículos  se  aproximan  simultáneamente  a  una  intersección  no  regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
    "answer": "El que se aproxime por la derecha del otro."
  },
  {
    "num": "34",
    "question": "34. En  una  intersección  no  regulada  (sin  señalización)  tiene  preferencia  de  paso:",
    "answer": "El vehículo que ingresó primero a la intersección."
  },
  {
    "num": "35",
    "question": "35. En  una  rotonda,  tiene  prioridad  de  paso  el  vehículo  que:",
    "answer": "Circula por ella."
  },
  {
    "num": "36",
    "question": "36. El  sobrepaso  o  adelantamiento  de  un  vehículo  en  movimiento  se  efectúa,  salvo excepciones, por la ________",
    "answer": "retornando el vehículo después de la maniobra a su carril original. Izquierda."
  },
  {
    "num": "37",
    "question": "37. Si  un  conductor  está  tomando  medicamentos  y  por  ello  siente  sueño  ¿qué  debe hacer?",
    "answer": "Abstenerse  de  manejar.  38.  Son  documentos  que  deben  portarse  obligatoriamente,  durante  la  conducción  del vehículo, y exhibirse cuando la autoridad competente lo solicite: Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular."
  },
  {
    "num": "39",
    "question": "39. La  siguiente  señal  indica:",
    "answer": "Que solo las motocicletas pueden circular por la vía o carril."
  },
  {
    "num": "40",
    "question": "40. Al  cambiar  de  dirección,  un  conductor  debe:",
    "answer": "Señalizar toda la maniobra hasta su culminación."
  },
  {
    "num": "41",
    "question": "41. ¿Está  permitido  conducir  un  vehículo  con  el  motor  en  punto  neutro?",
    "answer": "No, está prohibido."
  },
  {
    "num": "42",
    "question": "42. Si  la  licencia  de  conducir  no  se  encuentra  vigente,  los  vehículos  que  autoriza  a conducir dicha licencia:",
    "answer": "No podrán ser conducidos."
  },
  {
    "num": "43",
    "question": "43. De  acuerdo  con  el  sistema  de  control  de  licencias  de  conducir  por  puntos:",
    "answer": "Determinadas infracciones suman puntos."
  },
  {
    "num": "44",
    "question": "44. ¿Cuál  es  la  consecuencia  de  acumular  100  puntos  en  la  licencia  de  conducir  en  un período de 24 meses?",
    "answer": "Suspensión de licencia de conducir."
  },
  {
    "num": "45",
    "question": "45. Se  entiende  por  carril  a  la:",
    "answer": "Parte de la calzada destinada al tránsito de una fila de vehículos."
  },
  {
    "num": "46",
    "question": "46. Se  entiende  por  línea  de  parada  a:",
    "answer": "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener el vehículo."
  },
  {
    "num": "47",
    "question": "47. La  siguiente  señal  vertical  reglamentaria  P-17A,  indica:",
    "answer": "Reducción de la calzada en ambos lados."
  },
  {
    "num": "48",
    "question": "48. En  caso  de  encontrar  marcación  de  doble  línea  amarilla  compuesta  por  un  trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
    "answer": "Respetar la línea que está de su lado (si es continua, no adelantar, si es discontinua, está permitido adelantar)."
  },
  {
    "num": "49",
    "question": "49. Se  define  como  zona  rígida  al:",
    "answer": "Área de la vía en la que se prohíbe el estacionamiento de vehículos."
  },
  {
    "num": "50",
    "question": "50. La  posición  de  frente  o  de  espaldas  ejecutada  por  el  efectivo  de  la  Policía  Nacional del Perú asignado al control de tránsito significa:",
    "answer": "Obligación de detenerse de quien así lo enfrente."
  },
  {
    "num": "51",
    "question": "51. Siempre  que  no  exista  una  señal  de  límite  de  velocidad,  en  zonas  urbanas  el  límite máximo de velocidad en calles y jirones es de:",
    "answer": "40 km/h."
  },
  {
    "num": "52",
    "question": "52. Siempre  que  no  exista  una  señal  de  limite  de  velocidad,  en  zonas  urbanas  el  límite máximo  de  velocidad  en  avenidas  es  de:",
    "answer": "60 km/h."
  },
  {
    "num": "53",
    "question": "53. Siempre  que  no  exista  una  señal  de  límite  de  velocidad  en  zonas  urbanas,  el  límite máximo de velocidad en zona escolar es de:",
    "answer": "30 km/h."
  },
  {
    "num": "54",
    "question": "54. Siempre  que  no  exista  una  señal  de  limite  de  velocidad  en  carreteras,  el  límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
    "answer": "100 km/h."
  },
  {
    "num": "55",
    "question": "55. Siempre  que  no  exista  una  señal  de  límite  de  velocidad  en  carreteras,  el  límite máximo de velocidad es de:",
    "answer": "100 km/h. para automóviles, camionetas y motocicletas."
  },
  {
    "num": "56",
    "question": "56. Siempre  que  no  exista  una  señal  de  límite  de  velocidad  mínima,  el  límite  mínimo  de velocidad en zona urbana y en carreteras es de:",
    "answer": "La mitad de la velocidad máxima establecida para cada tipo de vía."
  },
  {
    "num": "57",
    "question": "57. ¿Cuál  es  la  sanción  por  conducir  con  presencia  de  alcohol  en  la  sangre  en proporción mayor a lo previsto en el Código Penal...:",
    "answer": "Multa, cancelación de la licencia de conducir e inhabilitación definitiva para obtener una licencia de conducir."
  },
  {
    "num": "58",
    "question": "58. ¿Cuál  es  la  sanción  si  en  un  operativo  de  alcoholemia  usted  es  intervenido  y  se comprueba que ha consumido alcohol por encima del limite legal...:",
    "answer": "Multa y suspensión de la licencia de conducir por 3 años."
  },
  {
    "num": "59",
    "question": "59. La  frecuencia  de  la  inspección  técnica  de  una  moto  (categoría  L3)  y  de  un  sidecar (categoría L4) es:",
    "answer": "Cada año."
  },
  {
    "num": "60",
    "question": "60. ¿Cuál  es  el  plazo  de  vigencia  del  SOAT?",
    "answer": "1 año."
  },
  {
    "num": "61",
    "question": "61. Si  ocurre  un  accidente  de  tránsito,  ¿qué  obligación  tiene  el  conductor,  el propietario del vehículo o el prestador del servicio de transporte?",
    "answer": "Dar aviso a la compañía de seguros y dejar constancia en la delegación de la Policía Nacional del Perú más cercana."
  },
  {
    "num": "62",
    "question": "62. Si  una  licencia  de  conducir  consiga  alguna  restricción,  es  correcto  afirmar  que:",
    "answer": "Es una obligación cumplir con la restricción."
  },
  {
    "num": "63",
    "question": "63. La  señal  preventiva  P-33A,  significa:",
    "answer": "Señal de proximidad de un reductor de velocidad tipo resalto."
  },
  {
    "num": "64",
    "question": "64. ¿Está  permitido  usar  la  bocina  de  su  vehículo  para  advertir  al  conductor  del vehículo que circula delante, que será adelantado?",
    "answer": "No, está prohibido."
  },
  {
    "num": "65",
    "question": "65. Si  observa  que  se  aproxima  una  ambulancia  sin  las  luces  especiales  encendidas  y sin sirena, es correcto afirmar que:",
    "answer": "No  estamos  obligados  a  darle  preferencia  de  paso.  66.  Si  se  encuentra  en  una  intersección  y  se  enciende  la  luz  verde  del  semáforo  y observa que en la calle transversal hay vehículos o personas despejando la intersección, ¿qué debe hacer? No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar."
  },
  {
    "num": "67",
    "question": "67. En  señalética  vial,  el  color  ________  en  el  pavimento  es  utilizado  para  carriles  de tráfico en sentido opuesto y el color ________",
    "answer": "en el pavimento es utilizado como separador de carriles de tráfico en el mismo sentido. Amarillo - blanco."
  },
  {
    "num": "68",
    "question": "68. Si  una  fila  de  escolares  cruza  la  calzada  fuera  del  crucero  peatonal,  ¿qué  acción  se debe tomar?",
    "answer": "Parar y ceder el paso."
  },
  {
    "num": "69",
    "question": "69. Si  se  aproxima  a  una  zona  escolar,  ¿qué  acción  debe  realizar?",
    "answer": "Disminuir la velocidad a 30 Km/h."
  },
  {
    "num": "70",
    "question": "70. Tienen  el  objetivo  de  notificar  a  los  usuarios  las  limitaciones,  prohibiciones  o restricciones en el uso de la via. Señales reguladoras o de",
    "answer": "reglamentación."
  },
  {
    "num": "71",
    "question": "71. Tienen  el  propósito  de  advertir  a  los  usuarios  sobre  la  existencia  y  naturaleza  de  un peligro en la vía. Señales",
    "answer": "preventivas."
  },
  {
    "num": "72",
    "question": "72. Es  una  infracción  de  tránsito:",
    "answer": "Todas las alternativas son correctas (No detenerse en señal de PARE, arrojar objetos, usar bocina innecesariamente)."
  },
  {
    "num": "73",
    "question": "73. ¿Qué  debería  hacer  el  conductor  al  acercarse  a  una  señal  de  \"CEDA  EL  PASO\"  en una intersección?",
    "answer": "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía transversal."
  },
  {
    "num": "74",
    "question": "74. No  se  debe  conducir  un  vehículo:",
    "answer": "Todas son correctas (Sin SOAT, en retroceso injustificado, sin la licencia para el tipo de vehículo)."
  },
  {
    "num": "75",
    "question": "75. ¿Qué  debe  hacer  si  se  aproxima  a  una  intersección  sin  semáforo  y  sin  presencia de la Policía de Tránsito, y observa que un peatón está cruzando por el paso peatonal?",
    "answer": "Detener el vehículo y ceder el paso al peatón."
  },
  {
    "num": "76",
    "question": "76. Sobre  el  uso  del  casco  protector  en  la  conducción  de  la  motocicleta,  es  correcto afirmar que:",
    "answer": "El uso del casco es obligatorio para el conductor y el acompañante."
  },
  {
    "num": "77",
    "question": "77. Las  motocicletas  al  circular  por  una  vía  deben  hacerlo  por  el  carril  de La",
    "answer": "derecha."
  },
  {
    "num": "78",
    "question": "78. Sobre  el  uso  de  la  bocina  del  vehiculo,  es  correcto  afirmar  que:",
    "answer": "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas."
  },
  {
    "num": "79",
    "question": "79. Una  línea  blanca  continua  en  el  sentido  longitudinal  de  una  via,  que  se  coloca  en  el pavimento, le indica al conductor:",
    "answer": "Que está prohibido pasar al otro lado de la linea con algunas excepciones."
  },
  {
    "num": "80",
    "question": "80. ¿Cuál  es  el  número  máximo  de  personas  que  puede  transportar  una  motocicleta?",
    "answer": "Es igual al número de asientos señalados en la tarjeta de identificación vehicular."
  },
  {
    "num": "81",
    "question": "81. La  acción  correcta  al  abastecer  de  combustible  su  vehículo,  es:",
    "answer": "Abstenerse de fumar tanto el conductor como sus acompañantes."
  },
  {
    "num": "82",
    "question": "82. Si  usted  desea  realizar  una  competencia  de  carreras  entre  su  vehículo  y  otro vehículo motorizado; para ello puede utilizar:",
    "answer": "Un circuito de carrera, autódromo o pista de aceleración autorizado por la autoridad competente."
  },
  {
    "num": "83",
    "question": "83. Señale  cuál  de  las  siguientes  conductas  constituye  una  infracción  al  tránsito:",
    "answer": "Todas las alternativas son correctas."
  },
  {
    "num": "84",
    "question": "84. La  marcas  en  el  pavimento  constituyen  un  elemento  indispensable  para  la operación vehicular, pues su función es:",
    "answer": "Reglamentar la circulación, así como advertir y guiar a los usuarios de la vía."
  },
  {
    "num": "85",
    "question": "85. Las  marcas  en  el  pavimento  de  color  ________  complementan  las  señales informativas, como por ejemplo las zonas de estacionamiento para personas con movilidad reducida.",
    "answer": "Azul."
  },
  {
    "num": "86",
    "question": "86. La  linea  central  de  color  amarillo  en  el  pavimento  es  continua  cuando:",
    "answer": "No está permitido cruzar al otro carril."
  },
  {
    "num": "87",
    "question": "87. Si  un  conductor  que  circula  por  el  carril  derecho  de  una  vía  se  encuentra  con  las flechas inclinadas que se muestran en la figura, su conducta correcta es:",
    "answer": "No adelantar al vehículo que tiene adelante y que circula por el carril izquierdo y continuar por su carril."
  },
  {
    "num": "88",
    "question": "88. Si  durante  la  conducción  vehicular,  un  efectivo  de  la  Policía  de  Tránsito  le  solicita al conductor someterse a una prueba de alcoholemia; la acción correcta del conductor es:",
    "answer": "Someterse a la prueba de alcoholemia, ya que está obligado a ello ante la solicitud del efectivo de la Policía de Tránsito."
  },
  {
    "num": "89",
    "question": "89. ¿Cuál  de  las  siguientes  conductas  no  es  una  infracción  de  tránsito?",
    "answer": "Detenerse totalmente en una señal de PARE cuando no hay peatones y/o vehiculos circulando por la vía transversal."
  },
  {
    "num": "90",
    "question": "90. Si  la  persona  conduciendo  sale  de  su  propiedad  y  tiene  que  cruzar  la  acera  e ingresar a una vía, la conducta correcta es:",
    "answer": "Dar preferencia de paso a los vehículos que circulan por la vía y a los peatones que circulan  por  la  acera.  91.  ¿Qué  significa  una  linea  continua  blanca  pintada  entre  el  carril  de  la  derecha  y  la berma de una carretera? Que no se debe conducir atravesándola, al menos que haya una situación de emergencia."
  },
  {
    "num": "92",
    "question": "92. En  el  caso  representado  en  el  siguiente  gráfico  ¿el  vehículo  rojo  puede  rebasar  al azul?",
    "answer": "No puede hacerlo."
  },
  {
    "num": "93",
    "question": "93. La  siguiente  señal  (R-17),  significa:",
    "answer": "Prohibida la circulación de vehículos automotores."
  },
  {
    "num": "94",
    "question": "94. Si  usted  se  encuentra  conduciendo  su  vehículo  por  una  vía  y  antes  de  cruzar  la intersección se encuentra con la señal R-4, esta le indica:",
    "answer": "Que está por ingresar a una vía de sentido contrario y no debe entrar."
  },
  {
    "num": "95",
    "question": "95. La  siguiente  señal  (P-36),  significa:",
    "answer": "Superficie deslizante."
  },
  {
    "num": "96",
    "question": "96. La  siguiente  señal  (R-14),  significa:",
    "answer": "Circular solo en el sentido indicado por la flecha."
  },
  {
    "num": "97",
    "question": "97. La  siguiente  señal  (P-6)  significa:",
    "answer": "La proximidad de un cruce o intersección de 2 vías al mismo nivel en ángulo recto."
  },
  {
    "num": "98",
    "question": "98. La  siguiente  señal  (R-30C),  significa:",
    "answer": "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h."
  },
  {
    "num": "99",
    "question": "99. La  siguiente  señal  (R-5-4),  significa:",
    "answer": "Que la intersección contempla giros tangentes a la izquierda en ambos sentidos."
  },
  {
    "num": "100",
    "question": "100. La  siguiente  señal  (R-9),  significa:",
    "answer": "Que está permitido el giro en U."
  },
  {
    "num": "101",
    "question": "101. La  siguiente  señal  (R-5-2),  significa:",
    "answer": "Que el carril por donde circula permite girar a la izquierda o seguir de frente."
  },
  {
    "num": "102",
    "question": "102. La  siguiente  señal  (R-20),  significa:",
    "answer": "Que los peatones deben circular por la izquierda."
  },
  {
    "num": "103",
    "question": "103. Es  una  conducta  que  se  sanciona:",
    "answer": "Todas las anteriores (Usar celulares en evaluación, ofrecer beneficios indebidos, usar tramitadores)."
  },
  {
    "num": "104",
    "question": "104. La  siguiente  señal  (R-48),  significa:",
    "answer": "Zona de carga y descarga."
  },
  {
    "num": "105",
    "question": "105. La  siguiente  señal  (R-49),  significa:",
    "answer": "Se debe mantener la distancia de seguridad entre vehículos."
  },
  {
    "num": "106",
    "question": "106. La  siguiente  señal  (R-50),  significa:",
    "answer": "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe darle paso al del sentido contrario."
  },
  {
    "num": "107",
    "question": "107. La  señal  (R-5-1),  es:",
    "answer": "Una señal de obligación."
  },
  {
    "num": "108",
    "question": "108. La  señal  (P-3A),  le  indica  al  conductor  que:",
    "answer": "Hay una curva y contra-curva pronunciada a la derecha."
  },
  {
    "num": "109",
    "question": "109. La  siguiente  señal  (P-5-1A),  le  advierte  al  conductor  que:",
    "answer": "Se aproxima a un camino sinuoso a la izquierda."
  },
  {
    "num": "110",
    "question": "110. La  siguiente  señal  (P-61),  le  advierte  al  conductor  que:",
    "answer": "Está circulando por una curva horizontal."
  },
  {
    "num": "111",
    "question": "111. La  siguiente  señal  (P-34),  le  advierte  al  conductor  que:",
    "answer": "Se aproxima a un badén."
  },
  {
    "num": "112",
    "question": "112. La  siguiente  señal  (P-60),  es:",
    "answer": "Una señal preventiva."
  },
  {
    "num": "113",
    "question": "113. La  siguiente  señal  (P-46),  indica:",
    "answer": "Ciclistas en la vía."
  },
  {
    "num": "114",
    "question": "114. La  siguiente  señal  (P-46-A),  indica:",
    "answer": "Que nos aproximamos a un cruce de ciclovía."
  },
  {
    "num": "115",
    "question": "115. La  siguiente  señal  (P-46B),  indica:",
    "answer": "La ubicación de un cruce de ciclistas."
  },
  {
    "num": "116",
    "question": "116. La  siguiente  señal  (P-48),  indica:",
    "answer": "Zona con presencia de peatones."
  },
  {
    "num": "117",
    "question": "117. La  siguiente  señal  (P-48A),  indica:",
    "answer": "Proximidad a un cruce peatonal."
  },
  {
    "num": "118",
    "question": "118. La  siguiente  señal  (P-48-B),  indica:",
    "answer": "Ubicación de un cruce peatonal."
  },
  {
    "num": "119",
    "question": "119. La  siguiente  señal  (P-49),  indica:",
    "answer": "Zona escolar."
  },
  {
    "num": "120",
    "question": "120. La  siguiente  señal  (P-49A),  indica:",
    "answer": "Proximidad a un cruce escolar."
  },
  {
    "num": "121",
    "question": "121. La  siguiente  señal  (P-49B),  indica:",
    "answer": "Ubicación de un cruce escolar."
  },
  {
    "num": "122",
    "question": "122. La  siguiente  señal  (P-50),  indica:",
    "answer": "Niños jugando."
  },
  {
    "num": "123",
    "question": "123. La  siguiente  señal  (P-51),  indica:",
    "answer": "Maquinaria agrícola en la vía."
  },
  {
    "num": "124",
    "question": "124. La  siguiente  señal  (P-53),  indica:",
    "answer": "Animales en la vía."
  },
  {
    "num": "125",
    "question": "125. La  siguiente  señal  (P-55),  indica:",
    "answer": "Proximidad a un semáforo."
  },
  {
    "num": "126",
    "question": "126. La  siguiente  señal  (P-58),  le  indica:",
    "answer": "Que  usted  se  aproxima  a  una  señal  de  PARE.  127.  La  siguiente  señal  (P-59),  le  indica: Que usted se aproxima a una señal de CEDA EL PASO."
  },
  {
    "num": "128",
    "question": "128. La  siguiente  señal  (P-41),  le  indica:",
    "answer": "Que usted se aproxima a un túnel."
  },
  {
    "num": "129",
    "question": "129. La  siguiente  señal  (P-45),  indica:",
    "answer": "Vuelo de aviones a baja altura."
  },
  {
    "num": "130",
    "question": "130. La  siguiente  señal  (P-52),  le  indica:",
    "answer": "Que se aproxima a una salida de vehículos de bomberos."
  },
  {
    "num": "131",
    "question": "131. La  siguiente  señal  (P-66),  le  indica:",
    "answer": "Que se aproxima una zona donde hay ráfagas de viento lateral."
  },
  {
    "num": "132",
    "question": "132. La  siguiente  señal  (P-66A),  le  indica:",
    "answer": "Que se acerca a una zona de arenamiento en la vía."
  },
  {
    "num": "133",
    "question": "133. Si  al  conducir  su  vehículo  se  encuentra  con  la  señal  vertical  que  se  muestra, usted debe entender que:",
    "answer": "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal."
  },
  {
    "num": "134",
    "question": "134. Si  al  conducir  su  vehículo  se  encuentra  con  la  señal  vertical  que  se  muestra, usted debe entender que:",
    "answer": "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana."
  },
  {
    "num": "135",
    "question": "135. La  siguiente  señal  (1-14),  significa:",
    "answer": "Señal de hospital."
  },
  {
    "num": "136",
    "question": "136. La  siguiente  señal  (1-31),  significa:",
    "answer": "Proximidad de un estacionamiento para emergencias."
  },
  {
    "num": "137",
    "question": "137. La  siguiente  señal  (1-9),  significa:",
    "answer": "Zona militar."
  },
  {
    "num": "138",
    "question": "138. La  siguiente  señal  (1-18),  se  utiliza  para  indicar:",
    "answer": "Cercanía a un servicio mecánico."
  },
  {
    "num": "139",
    "question": "139. La  siguiente  señal  (1-19),  se  utiliza  para  indicar:",
    "answer": "Cercanía a un grifo."
  },
  {
    "num": "140",
    "question": "140. La  siguiente  señal  (1-20),  se  utiliza  para  indicar:",
    "answer": "Cercanía a una llantería."
  },
  {
    "num": "141",
    "question": "141. La  siguiente  señal  (R-16A),  se  utiliza  para  indicar:",
    "answer": "Fin de la restricción de prohibido adelantar."
  },
  {
    "num": "142",
    "question": "142. El  comportamiento  del  conductor  como  usuario  de  la  vía,  debe  estar  orientado a:",
    "answer": "Todas las alternativas son correctas (Valor por la vida, respeto a usuarios, respeto a la autoridad)."
  },
  {
    "num": "143",
    "question": "143. Son  considerados  usuarios  vulnerables  de  la  vía  y  por  tanto  merecen  especial protección:",
    "answer": "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas."
  },
  {
    "num": "144",
    "question": "144. La  siguiente  señal  (P-61),  muestra:",
    "answer": "Delineadores de curva, que guían al conductor."
  },
  {
    "num": "145",
    "question": "145. El  conductor  está  _________  a  las  pruebas  que  le  solicite  el  Efectivo  de  la Policía Nacional...:",
    "answer": "Obligado - someterse."
  },
  {
    "num": "146",
    "question": "146. Ante  un  conductor  con  evidente  discapacidad  física,  la  cual  no  figura  en  el rubro de restricciones de su licencia de conducir, procede:",
    "answer": "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir ordene su reexaminación."
  },
  {
    "num": "147",
    "question": "147. Es  una  obligación  general  de  tránsito  que,  los  ________  circulen  respetando  los mensajes de _________, las instrucciones de los Efectivos de la Policía de Tránsito...:",
    "answer": "Los usuarios de la vía pública - los dispositivos de control de tránsito."
  },
  {
    "num": "148",
    "question": "148. Marque  la  afirmación  incorrecta:",
    "answer": "Las motocicletas pueden compartir un mismo carril con otro vehículo al circular."
  },
  {
    "num": "149",
    "question": "149. Si  al  conducir  por  una  avenida  se  encuentra  con  una  señal  en  la  via  que  indica un limite máximo de 50 km/h, sin embargo, conforme a lo dispuesto en la norma el límite máximo de velocidad en dicha vía es de 60 km/h; usted:",
    "answer": "Debe obedecer la señal de velocidad instalada en la via."
  },
  {
    "num": "150",
    "question": "150. Indique  la  conducta  permitida:",
    "answer": "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible."
  },
  {
    "num": "151",
    "question": "151. Se  considera  el  abandono  de  un  vehículo  cuando:",
    "answer": "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de 48 horas."
  },
  {
    "num": "152",
    "question": "152. El  servicio  de  taxi  en  motos  lineales No está",
    "answer": "permitido."
  },
  {
    "num": "153",
    "question": "153. Sobre  la  emisión  vehicular  de  sustancias  contaminantes,  marque  la  opción correcta:",
    "answer": "Está prohibida, en un índice superior al límite máximo que permite la norma."
  },
  {
    "num": "154",
    "question": "154. La  autoridad  competente,  ________  puede  prohibir  o  restringir  ________  en determinadas vías públicas. Cuando la situación lo justifique - la circulación o estacionamiento de",
    "answer": "vehículos."
  },
  {
    "num": "155",
    "question": "155. La  detención  de  un  vehiculo  debe  efectuarse:",
    "answer": "En el sentido de la circulación y en el carril derecho de la vía."
  },
  {
    "num": "156",
    "question": "156. En  caso  de  un  accidente  de  tránsito  con  daños  personales  y/o  materiales  los participantes deben:",
    "answer": "Solicitar  la  intervención  de  la  autoridad  policial.  157.  La  _______  faculta  y  autoriza  la  circulación  del  vehiculo  por  la  via  pública, identifica el bien, y, por ende, al titular responsable de las acciones que deriven de su propiedad. Placa Única Nacional de Rodaje."
  },
  {
    "num": "158",
    "question": "158. ¿Después  de  qué  tiempo  de  haber  cometido  la  misma  infracción  se  llama reincidencia y es sancionada con el doble de la multa establecida?",
    "answer": "12 meses."
  },
  {
    "num": "159",
    "question": "159. Si  a  un  conductor  infractor  le  suspendieron  su  licencia  de  conducir,  éste  se encuentra facultado para:",
    "answer": "Ninguna de las alternativas es correcta."
  },
  {
    "num": "160",
    "question": "160. Las  ________  tienen  por  función  informar  a  los  usuarios  sobre  los  servicios generales existentes próximos a la vía...:",
    "answer": "Señales de servicios generales."
  },
  {
    "num": "161",
    "question": "161. ¿Constituye  una  infracción  tramitar  el  duplicado  de  una  licencia  de  conducir que se encuentra retenida?",
    "answer": "Si, constituye una infracción."
  },
  {
    "num": "162",
    "question": "162. Las  marcas  en  el  pavimento  constituyen  la  señalización  ________  y  se  emplean para ________",
    "answer": "la circulación. Horizontal - reglamentar."
  },
  {
    "num": "163",
    "question": "163. Ciclista  es  a  ciclovía  como:",
    "answer": "Conductor - calzada."
  },
  {
    "num": "164",
    "question": "164. La  siguiente  señal  (P-15),  se  utiliza  para  advertir  al  conductor:",
    "answer": "La proximidad de una intersección rotatoria (óvalo o rotonda)."
  },
  {
    "num": "165",
    "question": "165. La  siguiente  señal  (P-31A),  indica:",
    "answer": "La proximidad del final de la vía."
  },
  {
    "num": "166",
    "question": "166. Es  una  línea  transversal  a  la  calzada,  que  indica  al  conductor  que  debe  detener completamente el vehiculo, no debiendo sobrepasar el inicio de la indicada línea:",
    "answer": "Línea de pare."
  },
  {
    "num": "167",
    "question": "167. Los  semáforos  son:",
    "answer": "Dispositivos de control del tránsito que tienen por finalidad regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas."
  },
  {
    "num": "168",
    "question": "168. La  conducción  requiere  un  alto  nivel  de  atención,  pues  existen  distracciones que pueden ocasionar accidentes de tránsito, como por ejemplo:",
    "answer": "Todas las alternativas son correctas (Preocupaciones, uso de celular, manipular radio)."
  },
  {
    "num": "169",
    "question": "169. ¿Influye  la  somnolencia  en  la  capacidad  de  conducir?",
    "answer": "Si, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores."
  },
  {
    "num": "170",
    "question": "170. ¿Cuál  es  la  acción  correcta  del  conductor,  según  las  normas  de  tránsito,  en  la situación  que  plantea  el  siguiente  gráfico?",
    "answer": "Dar preferencia de paso al peatón para que cruce la calzada."
  },
  {
    "num": "171",
    "question": "171. ¿En  cuál  de  las  siguientes  opciones,  los  factores  mencionados  contribuyen  a una colisión vehicular?",
    "answer": "Pavimento húmedo, neumáticos desgastados, cansancio."
  },
  {
    "num": "172",
    "question": "172. La  ________  es  la  parte  de  una  carretera  o  camino  contigua  a  la  calzada,  no habilitada para la circulación de vehículos y destinada eventualmente a la detención de vehículos en emergencia y circulación de peatones.",
    "answer": "Berma."
  },
  {
    "num": "173",
    "question": "173. Es  una  parte  de  la  vía  destinada  a  la  circulación  de  vehículos  y  eventualmente al cruce de peatones y animales. La",
    "answer": "calzada."
  },
  {
    "num": "174",
    "question": "174. Es  una  parte  de  la  via  destinada  al  uso  de  peatones. La",
    "answer": "acera."
  },
  {
    "num": "175",
    "question": "175. Son  señales  que  regulan  el  tránsito:",
    "answer": "Las señales verticales y las marcas en la calzada o señales horizontales."
  },
  {
    "num": "176",
    "question": "176. El  conductor  que  en  una  vía  urbana  va  a  girar  a  la  izquierda,  a  la  derecha  o  en \"U\" debe hacer la señal respectiva con la luz direccional, por lo menos:",
    "answer": "20 metros antes de realizar la maniobra."
  },
  {
    "num": "177",
    "question": "177. Si  usted  está  conduciendo  por  una  carretera  y  va  girar  a  la  izquierda,  debe realizar la señal respectiva con la luz direccional por lo menos:",
    "answer": "30 metros antes de realizar la maniobra."
  },
  {
    "num": "178",
    "question": "178. La  licencia  de  la  Clase  B,  permite  conducir  autos?",
    "answer": "No."
  },
  {
    "num": "179",
    "question": "179. El  siguiente  gráfico  muestra:",
    "answer": "Señalización de tránsito vertical y horizontal en una zona escolar."
  },
  {
    "num": "180",
    "question": "180. Las  ________  canalizadoras,  tiene  por  función  conformar  las  islas canalizadoras del tránsito automotor en una ________. Líneas -",
    "answer": "intersección."
  },
  {
    "num": "181",
    "question": "181. Si  al  conducir  en  una  intersección  se  encuentra  con  las  siguientes  marcas  en  el pavimento (malla ortogonal de color amarillo), significa:",
    "answer": "Que no puede detener el vehículo dentro del área de intersección."
  },
  {
    "num": "182",
    "question": "182. De  acuerdo  al  siguiente  gráfico,  es  correcto  afirmar  que:",
    "answer": "La zona de no adelantar inicia con las líneas amarillas continuas."
  },
  {
    "num": "183",
    "question": "183. Cuál  de  las  siguientes  alternativas,  no  es  una  infracción  de  tránsito:",
    "answer": "Detenerse en luz verde, para ceder el paso a un peatón."
  },
  {
    "num": "184",
    "question": "184. Existe  infracción  al  tránsito  cuya  sanción  sea  nunca  más  obtener  una  licencia de conducir?",
    "answer": "Si existe, y una de ellas es por conducir con presencia de alcohol en mayor grado al permitido  y  participar  en  un  accidente  de  tránsito.  185.  Los  ________  y  las  ________  requieren  un  carril  completo  para  circular  con seguridad. Todas las anteriores (Buses, camiones, automóviles con motocicletas)."
  },
  {
    "num": "186",
    "question": "186. El  conductor  de  un  vehículo  debe  reducir  la  velocidad,  siempre  que  se encuentre en los siguientes casos:",
    "answer": "En intersecciones, curvas, túneles, puentes."
  },
  {
    "num": "187",
    "question": "187. El  pasajero  de  una  motocicleta  debe  saber:",
    "answer": "Todas las anteriores (Mantener pies en apoyapiés, sujetarse con firmeza, sentarse lo más adelante)."
  },
  {
    "num": "188",
    "question": "188. En  la  relación  \"conductores  de  vehiculos  menores\"  (por  ejemplo  una motocicleta) y \"conductores de vehículos mayores\" (por ejemplo un auto sedan), la afirmación correcta es:",
    "answer": "Los conductores de vehículos menores tienen las obligaciones y derechos aplicables a los conductores de vehículos mayores, excepto aquellos que por su naturaleza no les son aplicables."
  },
  {
    "num": "189",
    "question": "189. Antes  de  iniciar  la  conducción  de  una  motocicleta,  el  conductor  debe:",
    "answer": "Todas las alternativas son correctas (Colocarse casco, verificar luces, alinear espejos)."
  },
  {
    "num": "190",
    "question": "190. El  equipo  de  protección  más  importante  al  conducir  una  motocicleta,  es:",
    "answer": "Casco."
  },
  {
    "num": "191",
    "question": "191. La  posición  correcta  del  motociclista  en  la  conducción  es:",
    "answer": "Las alternativas b y c son correctas (Manos sujetan con firmeza las empuñaduras y pies sobre los apoyapiés)."
  },
  {
    "num": "192",
    "question": "192. La  siguiente  afirmación:  \"el  motociclista  que  se  encuentra  conduciendo  en  un carril, no debe permitir que otros vehículos intenten forzarlo a moverse hacia un costado del mismo\", es:",
    "answer": "Verdadera."
  },
  {
    "num": "193",
    "question": "193. La  agilidad  de  la  moto  ________  debe  ser  ________  para  ir  en  ________  entre vehículos:",
    "answer": "Nunca - aprovechada - zig zag."
  },
  {
    "num": "194",
    "question": "194. La  conducción  eficiente,  tiene  como  beneficio:",
    "answer": "Cuidado del medioambiente, ahorro de combustible o energía."
  },
  {
    "num": "195",
    "question": "195. La  siguiente  señal  de  autorización,  le  indica  que:",
    "answer": "Permite el giro a la izquierda en una intersección con semáforo en luz roja."
  },
  {
    "num": "196",
    "question": "196. Es  una  técnica  de  conducción  eficiente,  y  por  tanto  permite  la  reducción  del consumo de combustible, así como de la contaminación ambiental:",
    "answer": "Las alternativas a y b son correctas (No acelerar bruscamente y Mantener el vehículo en buen estado)."
  },
  {
    "num": "197",
    "question": "197. La  posición  correcta  de  los  pies  al  conducir  una  motocicleta  es:",
    "answer": "Colocar  de  manera  recta  el  arco  de  los  pies  en  los  apoyapiés.  198.  Para  un  frenado  seguro  de  la  motocicleta  (en  un  frenado  usual  como,  al  entrar  a una curva, al llegar a una intersección, etc.), se debe utilizar: El freno delantero y el freno posterior."
  },
  {
    "num": "199",
    "question": "199. Al  realizar  el  cambio  de  carril,  la  conducta  correcta  es:",
    "answer": "Las alternativas a y c son correctas (Verificar aproximación de vehículo y utilizar direccionales)."
  },
  {
    "num": "200",
    "question": "200. Mientras  se  conduce  para  alcanzar  la  velocidad  deseada,  la  aceleración  debe ser:",
    "answer": "Progresiva."
  },
  {
    "num": "201",
    "question": "201. Si  el  señor  \"X\"  presta  servicio  de  transporte  público  de  personas  en  un vehículo menor autorizado (mototaxi) ¿por qué vías esta autorizado a circular?",
    "answer": "Carreteras, si éstas cruzan el centro poblado respectivo o no existe via alterna."
  },
  {
    "num": "202",
    "question": "202. Si  usted  presta  servicio  de  transporte  público  de  personas  en  un  vehículo menor autorizado (mototaxi), debe circular por:",
    "answer": "Vías urbanas que determine la municipalidad distrital competente."
  },
  {
    "num": "203",
    "question": "203. La  velocidad  máxima  de  circulación  de  un  vehículo  menor  empleado  para prestar el servicio de transporte público de personas (mototaxi), es de:",
    "answer": "30 kilómetros por hora."
  },
  {
    "num": "204",
    "question": "204. ¿En  qué  parte  del  mototaxi  se  debe  portar  y  exhibir  la  placa  única  nacional  de de rodaje?",
    "answer": "Únicamente en la parte posterior central."
  },
  {
    "num": "205",
    "question": "205. El  conductor  del  servicio  de  transporte  público  de  personas  en  mototaxi,  tiene la obligación de:",
    "answer": "Todas las alternativas son correctas (Prestar servicio en vehículos habilitados, tener licencia II-c, ser capacitado anualmente)."
  },
  {
    "num": "206",
    "question": "206. Todo  usuario  del  servicio  de  transporte  tiene  derecho  a:",
    "answer": "Todas las alternativas son correctas (Exigir lugares autorizados, vehículos habilitados y con revisión técnica)."
  },
  {
    "num": "207",
    "question": "207. ¿En  qué  tipo  de  vehículo  menor  está  permitido  prestar  el  servicio  de  transporte público de personas?",
    "answer": "Mototaxi."
  },
  {
    "num": "208",
    "question": "208. Si  \"X\"  se  encuentra  prestando  el  servicio  de  transporte  público  de  personas  en mototaxi y comete una infracción al tránsito vinculada a su propia conducta, como por ejemplo no respetar la luz roja ¿quién debe asumir la responsabilidad ante dicha infracción?",
    "answer": "\"X\", al ser el conductor."
  }
];