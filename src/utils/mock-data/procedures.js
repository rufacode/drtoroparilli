export const procedureList = [
  {id: 1, name: 'Aumento de pectorales', label: 'male', group: 'corporal', images: []},
  {id: 2, name: 'Gluteoplastia', label: 'male', group: 'corporal', images: []},
  {id: 3, name: 'Cirugia del abdomen', label: 'male', group: 'corporal', images: []},
  {
    id: 4,
    name: 'Liposuccion laser',
    label: 'male',
    group: 'corporal',
    images: [
      {url: '/static/img/lipolaser-1.jpg'}
    ]
  },
  {
    id: 5,
    name: 'Ginecomastia',
    label: 'male',
    group: 'corporal',
    images: [
      {url: '/static/img/ginecomastia-1.jpg'},
      {url: '/static/img/ginecomastia-2.jpg'},
      {url: '/static/img/ginecomastia-3.jpg'},
    ]
  },
  {id: 6, name: 'Aumento de pantorrillas', label: 'male', group: 'corporal', images: []},
  {
    id: 7,
    name: 'Cirugia de nariz',
    label: 'male',
    group: 'facial',
    images: [
      {url: '/static/img/cirugianariz-1.jpg'},
      {url: '/static/img/cirugianariz-2.jpg'},
      {url: '/static/img/cirugianariz-3.jpg'},
      {url: '/static/img/cirugianariz-4.jpg'},
      {url: '/static/img/cirugianariz-5.jpg'},
      {url: '/static/img/cirugianariz-6.jpg'},
      {url: '/static/img/cirugianariz-7.jpg'},
    ]
  },
  {id: 8, name: 'Tratamiento de arrugar', label: 'male', group: 'facial', images: []},
  {id: 9, name: 'Cirugia de parpados', label: 'male', group: 'facial', images: []},
  {id: 10, name: 'Cirugia de menton', label: 'male', group: 'facial', images: []},
  {id: 11, name: 'Lifting facial', label: 'male', group: 'facial', images: []},
  {
    id: 12,
    name: 'Cirugia de orejas',
    label: 'male',
    group: 'facial',
    images: [
      {url: '/static/img/cirugiaoreja-1.jpg'},
      {url: '/static/img/cirugiaoreja-2.jpg'},
    ]
  },
  {id: 13, name: 'Lifting de cuello', label: 'male', group: 'facial', images: []},
  {id: 14, name: 'Reduccion de mejillas', label: 'male', group: 'facial', images: []},

  //female

  {
    id: 15,
    name: 'Gluteoplastia',
    label: 'female',
    group: 'corporal',
    img: '/static/img/gluteoplastia-mujeres.jpg',
    questions: [
      {title: '¿Podré sentarme sin problemas y recibir inyecciones en los glúteos?', text: 'Preferiblemente, evite las inyecciones en las nalgas si tiene prótesis, ya que los implantes podrían ser pinchados Para sentarse no hay ninguna incomodidad, ya que, al sentarnos, las prótesis adoptan una ubicación privilegiada entre los músculos, lo cual impide que sean aplastadas.'},
      {title: '¿Cómo me quedarán las nalgas?', text: 'Con esta cirugía podrá mejorar su apariencia y autoestima, pero no necesariamente cambiará la apreciación que los demás tengan de usted o le proporcionará una figura perfecta. Antes de decidirse piense cuidadosamente en sus expectativas.'},
      {title: '¿Cuál es la ubicación correcta de las prótesis de glúteos?', text: 'Las mejores son aquellas que quedan entre los músculos, nunca las subcutáneas (debajo de la grasa)'},
      {title: '¿Cuál es la ventaja entre usar prótesis de glúteos e implantes inyectados?', text: 'Los implantes inyectados están siendo usados por un gran número de personas en todo el mundo: cirujanos plásticos, médicos esteticistas, peluqueros y todo aquel que quiera hacer dinero fácil, sin importar las complicaciones que esto pudiera generar. Estos implantes inyectados no son más que plásticos líquidos llamados de diferentes maneras para confundir a la colectividad y a aquellos que no saben de las complicaciones que acarrean. Los nombres que se están usando son: células expansivas, metacrilatos, biopolímeros, metacril y otras denominaciones orientadas al comercio. Estos plásticos nunca podrán ser retirados del organismo y las complicaciones que ocasionan serán por el resto de la vida. Vemos cómo, a diferencia de los implantes inyectados, las prótesis de glúteos pueden ser removidas, en caso de ser necesario, y sin las complicaciones que acarrean las inyecciones.'},
      {title: '¿Cuáles son las complicaciones de las prótesis glúteas?', text: 'La más temida es la infección, ya que la zona glútea -por razones obvias- es altamente contaminada. Otras incluyen hematomas, forma antiestética, retracción de la piel, dehiscencia de la sutura, inconformidad con el resultado.'},
      {title: '¿Cuándo está contraindicada esta cirugía?', text: 'En casos de tener alguna infección activa, alteraciones de la coagulación, alteraciones de la cicatrización, en pacientes inmunosuprimidas, embarazadas y/o con expectativas poco realistas.'},
      {title: '¿Cuánto es el tiempo de recuperación?', text: 'Los pacientes pueden irse a casa caminando. La sensación de dolor desaparecerá con el relajante muscular y analgésico indicados. Pueden sentarse luego del tercer día, reincorporarse al trabajo luego de una semana. Ejercicios tipo caminata a partir de las tres semanas. Recuperación completa luego de tres meses.'},
      {title: '¿Debo usar fajas?', text: 'Se debe usar una faja por un lapso de seis semanas, como es de rutina en casos de lipoescultura. Así la inflamación disminuye de una manera más rápida y las prótesis se mantienen en su posición indicada.'},
      {title: '¿Estas prótesis se cambian?', text: 'Estos implantes tienen una garantía de por vida. Deben cambiarse en casos de ruptura o contractura capsular. En ocasiones los pacientes piden recambio para aumentar volumen luego de varios años.'}
    ],
    images: [
      {url: '/static/img/gluteoplastia-1.jpg'},
      {url: '/static/img/gluteoplastia-2.jpg'},
      {url: '/static/img/gluteoplastia-3.jpg'},
      {url: '/static/img/gluteoplastia-4.jpg'},
      {url: '/static/img/gluteoplastia-5.jpg'},
      {url: '/static/img/gluteoplastia-6.jpg'},
    ],
    detail: `<p>La gluteoplastia es el procedimiento mediante el cual se moldean las nalgas en caso de tener poco desarrollo de su musculatura, cúmulos de grasa desagradables en sus alrededores, trastornos adquiridos o malformaciones congénitas.</p><p>Las dos únicas alternativas seguras para realizar este procedimiento son:</p><p>Lipoinyección. Consiste en infiltración de grasa propia del paciente. La grasa obtenida de distintas partes del cuerpo, como abdomen y muslos, se prepara y enriquece con factores de crecimiento y luego se inyecta en los glúteos para mejorar forma y volumen.</p><p><strong>Implantes glúteos:</strong> prótesis de silicona diseñadas para mejorar el volumen y la forma de los glúteos.</p><p><strong>Candidatas:&nbsp;</strong></p><p>Mujeres con:</p><p>• poco desarrollo de los músculos glúteos.</p><p>• cúmulos de grasa en los alrededores de los glúteos que ocasionan deformidad o aspecto estético.</p><p>• trastornos adquiridos, como accidentes, quemaduras, etc.</p><p>• malformaciones congénitas, y</p><p>• atletas que a pesar de realizar ejercicios para aumentar los glúteos no consiguen resultados suficientes.</p><p>&nbsp;</p><p><strong>Nombre del procedimiento:</strong> GLUTEOPLASTIA</p><p><strong>Duración:</strong> De 2 a 3 horas, dependiendo de los elementos específicos del caso.</p><p><strong>Anestesia:</strong> General o peridural.</p><p><strong>Hospitalización:</strong> Ambulatoria o puede requerir una noche de hospitalización.</p><p><strong>Síntomas post-operatorios:</strong> Inflamación, dolor moderado, equimosis (morados).</p><p><strong>Riesgos:</strong> Dolor, hematomas, infección, lesión cutánea, asimetrías, trombosis.</p><p><strong>Recuperación:</strong></p><p>• Una semana para reintegrarse al trabajo.</p><p>• De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p><p>• Tres meses de resolución completa para realizar cualquier tipo de ejercicio o fuerza.</p><p><strong>Duración de resultados:</strong> permanentes, siempre y cuanto se mantenga un peso estable.</p>`
  },
  {
    id: 16,
    images: [
      {url: '/static/img/cirugiaabdomen-1.jpg'},
      {url: '/static/img/cirugiaabdomen-2.jpg'},
    ],
    name: 'Cirugia del abdomen',
    label: 'female',
    group: 'corporal'
  },
  {
    id: 17,
    images: [
      {url: '/static/img/flipolaser-1.jpg'},
      {url: '/static/img/flipolaser-2.jpg'},
      {url: '/static/img/flipolaser-3.jpg'},
      {url: '/static/img/flipolaser-4.jpg'},
      {url: '/static/img/flipolaser-5.jpg'},
      {url: '/static/img/flipolaser-6.jpg'},
    ],
    name: 'Liposuccion laser',
    label: 'female',
    group: 'corporal'
  },
  {id: 18, images: [], name: 'Aumento de pantorrillas', label: 'female', group: 'corporal'},
  {
    id: 19,
    images: [
      {url: '/static/img/aumentomamas-1.jpg'},
      {url: '/static/img/aumentomamas-2.jpg'},
      {url: '/static/img/aumentomamas-3.jpg'},
      {url: '/static/img/aumentomamas-4.jpg'},
      {url: '/static/img/aumentomamas-5.jpg'},
      {url: '/static/img/aumentomamas-6.jpg'},
      {url: '/static/img/aumentomamas-7.jpg'},
      {url: '/static/img/aumentomamas-8.jpg'},
      {url: '/static/img/aumentomamas-9.jpg'},
      {url: '/static/img/aumentomamas-10.jpg'},
      {url: '/static/img/aumentomamas-11.jpg'},
    ],
    name: 'Aumento de mamas',
    label: 'female',
    group: 'corporal'
  },
  {
    id: 20,
    images: [
      {url: '/static/img/reduccionmamas.jpg'}
    ],
    name: 'Reduccion de mamas',
    label: 'female',
    group: 'corporal'
  },
  {id: 21, images: [], name: 'Vulvoplastia', label: 'female', group: 'corporal'},
  {id: 22, images: [], name: 'Muslos (Cruroplastia)', label: 'female', group: 'corporal'},
  {
    id: 23,
    images: [
      {url: '/static/img/renuvion-1.jpg'},
      {url: '/static/img/renuvion-2.jpg'},
      {url: '/static/img/renuvion-3.jpg'},
      {url: '/static/img/renuvion-4.jpg'},
      {url: '/static/img/renuvion-5.jpg'},
    ],
    name: 'Renuvion',
    label: 'female',
    group: 'corporal'
  },
  {id: 24, images: [], name: 'Tratamiento de arrugas', label: 'female', group: 'facial'},
  {id: 25, images: [], name: 'Cirugia de menton', label: 'female', group: 'facial'},
  {
    id: 26,
    images: [
      {url: '/static/img/fcirugianariz-1.jpg'},
      {url: '/static/img/fcirugianariz-2.jpg'},
      {url: '/static/img/fcirugianariz-3.jpg'},
      {url: '/static/img/fcirugianariz-4.jpg'},
      {url: '/static/img/fcirugianariz-5.jpg'},
      {url: '/static/img/fcirugianariz-6.jpg'},
      {url: '/static/img/fcirugianariz-7.jpg'},
      {url: '/static/img/fcirugianariz-8.jpg'},
      {url: '/static/img/fcirugianariz-9.jpg'},
      {url: '/static/img/fcirugianariz-10.jpg'},
      {url: '/static/img/fcirugianariz-11.jpg'},
      {url: '/static/img/fcirugianariz-12.jpg'},
      {url: '/static/img/fcirugianariz-13.jpg'},
      {url: '/static/img/fcirugianariz-14.jpg'},
    ],
    name: 'Cirugia de nariz',
    label: 'female',
    group: 'facial'
  },
  {
    id: 27,
    images: [
      {url: '/static/img/liftingfacial-1.jpg'},
      {url: '/static/img/liftingfacial-2.jpg'},
      {url: '/static/img/liftingfacial-3.jpg'},
    ],
    name: 'Lifting facial',
    label: 'female',
    group: 'facial'
  },
  {id: 28, images: [], name: 'Levantamiento de cejas', label: 'female', group: 'facial'},
  {
    id: 29,
    images: [
      {url: '/static/img/cirugiaparpados-1.jpg'},
      {url: '/static/img/cirugiaparpados-2.jpg'},
      {url: '/static/img/cirugiaparpados-3.jpg'},
      {url: '/static/img/cirugiaparpados-4.jpg'},
      {url: '/static/img/cirugiaparpados-5.jpg'},
      {url: '/static/img/cirugiaparpados-6.jpg'},
      {url: '/static/img/cirugiaparpados-7.jpg'},
      {url: '/static/img/cirugiaparpados-8.jpg'},
    ],
    name: 'Cirugia de parpados',
    label: 'female',
    group: 'facial'
  },
  {id: 30, images: [], name: 'Reduccion de mejillas', label: 'female', group: 'facial'},
  {id: 31, images: [], name: 'Lifting de cuello', label: 'female', group: 'facial'},
  {id: 32, images: [], name: 'Cirugia de orejas', label: 'female', group: 'facial'},
  {id: 33, images: [], name: 'Toxina botulinica', label: 'female', group: 'treatments'},
]
