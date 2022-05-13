const sections = [
  {
    id: 1,
    section: 'common',
    language: 'ES',
    options: {
      menu: {
        links: [
          {path: '/nosotros', title: 'Nosotros', id: 1},
          {path: '/procedimientos', title: 'Procedimientos', id: 2},
          {path: '/antes-y-despues', title: 'Antes y despues', id: 3},
          {path: '/consulta-online', title: 'Consulta online', id: 4},
          {path: '/tus-dudas', title: 'Tus dudas', id: 5},
          {path: '/articulos', title: 'Articulos', id: 7},
          {path: '/contacto', title: 'Contacto', id: 8},
        ],
        logo: {
          img: '',
        }
      },
      footer: {
        cta: {
          text: 'Consulta Online',
          href: '/consulta-online'
        },
        links: [
          {title: 'facebook', img: '/static/icons/facebook-logo.png', id: 1},
          {title: 'Twitter', img: '/static/icons/facebook-logo.png', id: 2},
          {title: 'Instagram', img: '/static/icons/facebook-logo.png', id: 3},
        ]
      },
    }
  },
  {
    id: 2,
    section: 'home',
    language: 'ES',
    options: {
      cards: [
        {img: '/static/img/antes-despues-index.jpg', title: 'Antes y Despues', href: '/antes-y-despues', id: 1},
        {img: '/static/img/team-preview.jpg', title: 'El Equipo', href: '/el-equipo', id: 2},
        {img: '/static/img/preview-online-consult.jpg', title: 'Consulta Online', href: '/consulta-online', id: 3},
        {img: '/static/img/contacto.jpg', title: 'Procedimientos', href: '/procedimientos', id: 4},
        {img: '/static/img/preview-articles.jpg', title: 'Articulos', href: '/articulos', id: 5},
      ]
    }
  },
  {
    id: 4,
    section: 'home',
    language: 'EN',
    options: {
      cards: [
        {img: '/static/img/antes-despues-index.jpg', title: 'Before and Ffter', href: '/antes-y-despues', id: 1},
        {img: '/static/img/team-preview.jpg', title: 'The Team', href: '/el-equipo', id: 2},
        {img: '/static/img/preview-online-consult.jpg', title: 'Online Consult', href: '/consulta-online', id: 3},
        {img: '/static/img/contacto.jpg', title: 'Procedures', href: '/procedimientos', id: 4},
        {img: '/static/img/preview-articles.jpg', title: 'Articles', href: '/articulos', id: 5},
      ]
    }
  },
  {
    id: 33,
    section: 'articles',
    language: 'EN',
    options: {
      categoryText: 'Seleccione una categoria',
      title: 'Articulos',
      categories: [
        {text: 'Carnica', id: 1},
        {text: 'Pesqiera', id: 2},
        {text: 'Panaderia', id: 4},
        {text: 'Vegano', id: 5},
        {text: 'Fruta', id: 6},
      ],
      gender: {
        male: {text: 'Hombre'},
        female: {text: 'Mujer'}
      },
      cards: [
        {
          id: 1,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 2,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 3,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 4,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 5,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 6,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 7,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 8,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 9,
          img: '/static/dummy/dummy-producto.png',
          title: 'Titulo de ejemplo para articulo dummy',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
      ]
    }
  },
  {
    id: 44,
    section: 'doubts',
    language: 'ES',
    options: {
      title: 'Tus Dudas',
      modal: {
        buttonText: 'Enviar',
        title: '¿NO ACLARAMOS TUS DUDAS? CONSÚLTANOS',
        fields: {
          name: { text: 'Nombre'},
          lastname: { text: 'Apellido'},
          email: { text: 'Email'},
          comment: { text: 'Mensaje'},
          procedures: {
            text: 'Procedimientos',
            options: [
              {text: 'Seleccione una opcion', value: 0, id: 1},
              {text: 'Gluteoplastia', value: 1, id: 2},
              {text: 'Cirugia del abdomen', value: 2, id: 3},
              {text: 'Liposuccion laser', value: 3, id: 4},
              {text: 'Tratamiento de arrugas', value: 4, id: 5},
              {text: 'Cirugia del menton', value: 5, id: 6},
              {text: 'Cirugia de los parpados', value: 6, id: 7},
              {text: 'Cirugia de las orejas', value: 7, id: 8},
              {text: 'Reduccion de mamas', value: 8, id: 9},
            ]
          },
        }
      },
      buttons: {
        general: {
          name: 'Dudas Generales',
          view: 'general',
          questions: [
            {title: '¿Cuál es la experiencia que tiene el doctor?', id: 123, text: 'Puedes conocer la experiencia del Dr. Toro Parilli en su BIO.'},
            {title: '¿Dónde opera el doctor?', id: 234, text: 'Los procedimientos en Venezuela se llevan a cabo en la Clínica San Antonio, ubicada en Caracas. Los procedimientos en República Dominicana se llevan a cabo en la clínica Cecilip, ubicada en Santo Domingo.'},
            {title: '¿Puedo operarme en Venezuela si vivo en otro país?', id: 3456, text: 'Contamos con un equipo multidisciplinario que ofrece atención personalizada, lo que permite que personas que viven en el exterior, puedan viajar a Venezuela con absoluta confianza de que serán bien atendidos y recibir el tratamiento que deseen.'},
            {title: '¿Hay hospedaje clínico?', id: 12312, text: 'Tenemos alianza con un hospedaje clínico en el cual pueden hospedarse quienes no residan en Caracas.'},
            {title: '¿Dónde son las consultas del doctor?', id: 235235, text: 'Las consultas se llevan a cabo en el Centro Comercial San Ignacio, Torre Cópernico en Caracas, Venezuela, y en la clínica Cecilip ubicada en Santo Domingo, República Dominicana. (poner link de ubicación e información sobre cada clínica)'},
            {title: '¿Cuál es el precio de las operaciones?', id: 2346, text: 'El precio de los procedimientos varía según la necesidad de cada paciente, por lo que es establecido al momento de la consulta.'},
            {title: '¿Luego de una consulta online, cuándo veo al doctor?', id: 7869, text: `La consulta online representa un primer acercamiento en el cual podrás obtener el presupuesto de tu operación según la evaluación que se haga. Luego de esto, se concreta una primera consulta preoperatoria.`},
            {title: 'Si soy del exterior, ¿en cuánto tiempo podré viajar?', id: 65743, text: 'Según el tipo de procedimiento, pueden ser entre 10 y 12 días luego de la operación.'},
            {title: '¿Hay que ir a la primera consulta con exámenes?', id: 123123123123123123, text: 'No es necesario, pero puedes hacerlo. El tipo de examen dependerá del procedimiento que desees realizar.'},
            {title: '¿Precio de la consulta?', id: 456734, text: `El precio de la consulta online puedes verlo en el siguiente enlace: Consulta On Line Si deseas el precio de la consulta en persona, puedes llamar a los siguientes números: +58 212 2646007 o por WhatsApp directo  https://wa.me/584242677486?text= `},
          ]
        },
        restDoubts: [
          {
            name: 'GLUTEOPLASTIA',
            view: 'gluteoplastia',
            questions: [
              {title: '¿Podré sentarme sin problemas y recibir inyecciones en los glúteos?', id: 4123123752656, text: 'Preferiblemente, evite las inyecciones en las nalgas si tiene prótesis, ya que los implantes podrían ser pinchados Para sentarse no hay ninguna incomodidad, ya que, al sentarnos, las prótesis adoptan una ubicación privilegiada entre los músculos, lo cual impide que sean aplastadas.'},
              {title: '¿Cómo me quedarán las nalgas?', id: 23465562, text: 'Con esta cirugía podrá mejorar su apariencia y autoestima, pero no necesariamente cambiará la apreciación que los demás tengan de usted o le proporcionará una figura perfecta. Antes de decidirse piense cuidadosamente en sus expectativas.'},
              {title: '¿Cuál es la ubicación correcta de las prótesis de glúteos?', id: 3456234134638, text:  `Las mejores son aquellas que quedan entre los músculos, nunca las subcutáneas (debajo de la grasa)`},
              {title: '¿Cuál es la ventaja entre usar prótesis de glúteos e implantes inyectados?', id: 1341234513245, text: `Los implantes inyectados están siendo usados por un gran número de personas en todo el mundo: cirujanos plásticos, médicos esteticistas, peluqueros y todo aquel que quiera hacer dinero fácil, sin importar las complicaciones que esto pudiera generar. Estos implantes inyectados no son más que plásticos líquidos llamados de diferentes maneras para confundir a la colectividad y a aquellos que no saben de las complicaciones que acarrean. Los nombres que se están usando son: células expansivas, metacrilatos, biopolímeros, metacril y otras denominaciones orientadas al comercio. Estos plásticos nunca podrán ser retirados del organismo y las complicaciones que ocasionan serán por el resto de la vida. Vemos cómo, a diferencia de los implantes inyectados, las prótesis de glúteos pueden ser removidas, en caso de ser necesario, y sin las complicaciones que acarrean las inyecciones.`},
              {title: '¿Cuáles son las complicaciones de las prótesis glúteas?', id: 2352351241346357, text: `La más temida es la infección, ya que la zona glútea -por razones obvias- es altamente contaminada. Otras incluyen hematomas, forma antiestética, retracción de la piel, dehiscencia de la sutura, inconformidad con el resultado.`},
              {title: '¿Cuándo está contraindicada esta cirugía?', id: 234612342345245, text: `En casos de tener alguna infección activa, alteraciones de la coagulación, alteraciones de la cicatrización, en pacientes inmunosuprimidas, embarazadas y/o con expectativas poco realistas.`},
              {title: '¿Cuánto es el tiempo de recuperación?', id: 2341523234, text: `Los pacientes pueden irse a casa caminando. La sensación de dolor desaparecerá con el relajante muscular y analgésico indicados. Pueden sentarse luego del tercer día, reincorporarse al trabajo luego de una semana. Ejercicios tipo caminata a partir de las tres semanas. Recuperación completa luego de tres meses.`},
              {title: '¿Debo usar fajas?', id: 1242523634567678672345235, text: `Se debe usar una faja por un lapso de seis semanas, como es de rutina en casos de lipoescultura. Así la inflamación disminuye de una manera más rápida y las prótesis se mantienen en su posición indicada.`},
              {title: '¿Estas prótesis se cambian?', id: 6795614325134, text: `Estos implantes tienen una garantía de por vida. Deben cambiarse en casos de ruptura o contractura capsular. En ocasiones los pacientes piden recambio para aumentar volumen luego de varios años.`},
            ]
          },
          {
            name: 'CIRUGÍA DEL ABDOMEN',
            view: 'cirugiaAbdomen',
            questions: [
              {title: '¿Qué tipo de anestesia recibiré?', id: 467851, text: `Anestesia peridural con sedación o con anestesia peridural más general, o solamente general.`},
              {title: '¿Qué es la terapia analgésica postoperatoria?', id: 12345179, text: `Es un tipo de anestesia que se coloca desde la sala de cirugía y que permite al paciente no experimentar dolores o molestias al despertar. La anestesia, que es colocada también por el anestesiólogo, puede mantenerse por algunos días más, según lo amerite el caso.`},
              {title: '¿Qué cuidados postoperatorios debo tener?', id: 12352437, text: `Usar la faja por lo menos durante cuatro semanas después de la operación. Realizar las terapias postoperatorias que el médico sugiera. Guardar el debido reposo. Aun cuando usted se sentirá bien al día siguiente de la cirugía, deberá evitar cargar peso durante unos quince días después de la operación. Procurar caminar algo encorvado durante una semana para evitar que la cicatriz sea objeto de tensión. Cambiar constantemente de posición en la cama desde la salida de pabellón, movilizar los pies, flexionar las piernas. Estas maniobras aumentarán la circulación sanguínea de las piernas. Cubrir el área operada al momento de tomar un baño. Cuidar la herida que queda luego del retiro de los puntos, a los diez días de la operación. Es posible realizar ejercicios de caminata a la tercera semana. Sin embargo, deberá esperar hasta la cuarta o la quinta semana para levantar pesos.`},
              {title: '¿Puedo fumar antes o después de la cirugía? ¿Qué medicamentos no debo consumir?', id: 12352454897834563467, text: `Usted debe evitar el cigarrillo por lo menos diez días antes de la cirugía y quince días después de ésta. La nicotina es un potente vasoconstrictor (obstruye los vasos sanguíneos) que acabará arruinando su cirugía y dificultando la cicatrización y, en algunos casos, también podría acarrear otras complicaciones. Sea precavido y cuide su cirugía. No deberá ingerir aspirina o medicamentos similares antes de la cirugía. Si está recibiendo algún tratamiento deberá notificarlo al médico.`},
              {title: '¿Perderé la cirugía si decido salir embarazada?', id: 1234537791, text: `El resultado puede ser preservado siempre y cuando no se exceda en su peso durante la gestación.`},
              {title: '¿En qué consiste la cirugía abdominal?', id: 1234537792, text: `Se elimina una gran cantidad de la piel y de la grasa que están en exceso o que están flácidas. Durante la cirugía, los músculos abdominales (o los llamados “cuadritos”, que en los atletas están bien definidos) se suturan, juntándolos en la parte medial para que ganen fuerza y tonicidad. Es así como la cintura va a resultar más curva, lo que producirá en el abdomen la sensación de haber realizado ejercicios durante largo tiempo. El ombligo es aprovechado y situado en la misma posición que estaba anteriormente.`},
              {title: '¿Cuántos kilos rebajaré con la cirugía?', id: 1234537793, text: `Naturalmente, perderá algunos kilos, pero lo más determinante será que ganará una figura armónica con un abdomen bien proporcionado con respecto al tronco y a las extremidades.`},
              {title: '¿Cuánto se demora realizar mi cirugía?', id: 12345377931, text: `Normalmente esta cirugía demora entre dos y tres horas. Va a depender de la magnitud del tejido a ser removido.`},
              {title: '¿Cómo serán las cicatrices?', id: 12345377932, text: `Según las características del paciente se efectuará una abdominoplastia normal o una mini abdominoplastia. Se le informará sobre la longitud final de la cicatriz, que vendrá determinada por las características del abdomen.`},
              {title: '¿Será visible la cicatriz?', id: 12345377933, text: `Actualmente, la cicatriz que deja la intervención es fácilmente disimulable, puesto que queda dentro del bikini. Son cicatrices muy discretas. Imagine una cicatriz de cesárea algo más alargada hacia los lados. También podemos eliminar con esta técnica aquellas cicatrices de cesáreas o de otras cirugías abdominales que hayan sido realizadas anteriormente.`},
            ]
          },
          {
            name: 'LIPOSUCCIÓN LÁSER',
            view: 'liposuccionLaser',
            questions: [
              {title: '¿Cómo es la cicatriz que deja la lipoescultura?', id: 1234513668, text: `Normalmente, las pequeñas incisiones que se realizan no superan los cinco milímetros y desaparecen casi en su totalidad a los tres meses. Sin embargo, adicionalmente se toma la previsión de realizar las incisiones en sitios estratégicos (pliegues, surcos) con la finalidad de que puedan ser disimuladas en su totalidad.`},
              {title: '¿Cuál es el período de hospitalización?', id: 1233454567, text: `Normalmente es una cirugía ambulatoria. Si se hace con otra cirugía de gran tamaño es recomendable que el paciente sea hospitalizado.`},
              {title: '¿Cuáles son las áreas que pueden ser tratadas?', id: 123557908651, text: `• Papada

              • Brazos
              
              • Región abdominal
              
              • Cintura
              
              • Espalda
              
              • Cara externa del muslo (“revolveras”)
              
              • Cara anterior del muslo
              
              • Glúteos.`},
              {title: '¿Cuándo debo realizar la autodonación de sangre?', id: 123, text: `La autodonación consiste en extraer una cantidad pequeña de sangre al paciente, preferiblemente antes del tercer día previo a la cirugía, para que los glóbulos rojos extraídos hayan sido repuestos para el momento de la operación. Su sangre se guarda en el banco de sangre de la clínica y se reinyecta en su organismo en el postoperatorio inmediato. Esta técnica, además de permitir reponer el volumen que pudiera perder con la cirugía, promueve una recuperación más rápida y sin desbalance del volumen de sangre. Utilizar su propia sangre elimina los riesgos de contraer enfermedades contagiosas.`},
              {title: '¿Tener hijos después de la operación me hará perder sus efectos?', id: 345, text: `Los resultados pueden ser preservados después de la gestación, siempre y cuando su peso sea controlado por un especialista. Si no desarrolla muchas estrías o la flacidez no es mayor, las formas obtenidas con la lipoescultura se mantienen.`},
              {title: '¿Es utilizada alguna cura?', id: 676, text: `Cuando se trata de cirugías en las que se extrajo una cantidad grande de grasa, es recomendable usar una faja durante cuatro a seis semanas tras la intervención.`},
              {title: '¿Es peligrosa la lipoaspiración?', id: 8, text: `Raramente la lipoaspiración trae problemas. El peligro no es mayor ni menor que en otras cirugías, siempre y cuando sea realizada en atención a todas las normas técnicas aplicables. Hay que tener cuidado de no extraer grandes volúmenes de grasa. Como criterio establecido a nivel internacional por los cirujanos plásticos, se recomienda no extraer más de cinco a siete por ciento del peso corporal. En la actualidad, para cirugías en las que haya que retirar grandes volúmenes, se aconseja hacer una autodonación de sangre.`},
              {title: '¿Es muy doloroso el postoperatorio?', id: 0, text: `Generalmente no. El dolor se controla con analgésicos comunes.`},
              {title: '¿En cuánto tiempo observaré los resultados?', id: 65, text: `Toda cirugía pasa por una fase variable de desinflamación. Depende del paciente y de las zonas que fueron tratadas. Durante los 30 primeros días del postoperatorio es posible que el paciente no perciba en su totalidad los resultados. Después de este período comienza una desinflamación de la zona. A los tres meses podrá ver ya un excelente resultado. Recomendamos realizar terapias postoperatorias (drenajes linfáticos y/o ejercicios), orientadas a modelar y disminuir la inflamación de los tejidos.`},
              {title: '¿Cuántos kilos voy a rebajar con la cirugía?', id: 34 , text: `Más que hablar de perder kilos, debemos hablar de disminuir tallas. Normalmente el paciente puede perder entre cuatro a seis kilos, pero es realmente en la disminución de las tallas de pantalón, sostén, camisas, etc. en donde se nota el cambio.`},
              {title: '¿Cuánto demora el acto quirúrgico?', id: 675 , text: `Esto dependerá de la extensión de las áreas a tratar. Puede demorar entre una y tres horas, en promedio.`},
              {title: '¿Cuándo podré bañarme?', id: 1234 , text: `Al día siguiente ya podrá tomar un baño. Si el procedimiento ha sido hecho en conjunto con otra cirugía entonces deberá consultar al médico.`},
              {title: '¿Qué tipo de anestesia se aplica?', id: 5467 , text: `La mayoría de los casos se realizan con anestesia general, de esta manera se obtienen mejores resultados.`},
            ]
          },
          {
            name: 'TRATAMIENTO DE ARRUGAS',
            view: 'tratamientoArrugas',
            questions: [
              {title: '¿A quién va dirigida la lipotransferencia facial?', id: 1234789023, text: `Indicada para ambos sexos; normalmente a partir de los 40 años. Precisa un cuidadoso análisis individual fisonómico para evaluar íntegramente el conjunto de los rasgos.`},
              {title: '¿Cuánto duran los efectos?', id: 789088456, text: `El efecto, tanto en las arrugas de expresión como en los volúmenes suele durar varios años.`},
            ]
          },
          {
            name: 'CIRUGÍA DE MENTÓN',
            view: 'cirugiaMenton',
            questions: [
              {title: '¿A qué edad puede llevarse a cabo la intervención?', id: 3452345, text: `El proceso de osificación de los huesos de la cara finaliza entre los 15 y los 17 años. Se recomienda en mujeres esperar a los 18 años y en varones luego de los 21 años.`},
              {title: '¿Cuándo se puede comenzar a ir a la piscina, al gimnasio y hacer ejercicios?', id: 68903451234, text: `Al cabo de dos semanas, pero se deben practicar los ejercicios con moderación y de forma progresiva.`},
              {title: '¿Qué medicamentos deben evitarse antes y después de la operación?', id: 1345567889, text: `Como en toda operación, el paciente debe abstenerse de ingerir aspirinas u otros anti-coagulantes durante las tres semanas anteriores a la intervención.`},
              {title: '¿Qué riesgo tienen estas operaciones y tratamientos?', id: 123524576879, text: `Por una parte están los riesgos comunes a toda operación: los derivados del uso de anestesia, hemorragias e infecciones. En el caso concreto de los implantes (prótesis de silicona), el riesgo específico es el rechazo de la prótesis de mentón.`},
              {title: '¿Qué tipo de molestias ocasiona la intervención?', id: 123513653568, text: `Es una intervención que apenas da molestias.`},
              {title: '¿Se suele recetar algún medicamento para el post-operatorio?', id: 123235346, text: `Los medicamentos habituales tras cualquier intervención: antibióticos para evitar la infección y, analgésicos para aliviar el dolor.` },
              {title: '¿Tengo que tomar alguna precaución antes de la intervención?', id: 1231258686, text: `Como en el resto de las operaciones faciales el estado de la piel es importante para el éxito de la intervención. En el caso del mentón se deben descartar afecciones bucales o cualquier tipo de infección dental.`},
            ]
          },
          {
            name: 'CIRUGÍA DE NARIZ',
            view: 'cirugiaNariz',
            questions: [
              {title: '¿A qué edad es posible operarse?', id: 123, text: `Cuando se ha terminado el proceso de osificación de los huesos de la cara, normalmente entre los 15 y los 17 años. No obstante siempre es mejor esperar a la mayoría de edad antes de tomar la decisión de operarse.`},
              {title: '¿Cuándo se ve el resultado definitivo?', id: 435, text: `Al retirar el yeso a los diez días, la nariz tendrá una forma correcta y lo suficientemente buena para hacer una vida totalmente normal. Pero el resultado definitivo en lo que a detalles se refiere precisará de un tiempo mayor, por lo general unos seis meses para lograr la apariencia final.`},
              {title: '¿Podrá el paciente respirar por la nariz?', id: 678, text: `No lo es. En general no se precisan analgésicos por más de tres días.`},
              {title: '¿Qué cuidados post-operatorios debo que seguir?', id: 789, text: `El post-operatorio no es doloroso, sin embargo se indican analgésicos anti-inflamatorios. Si tiene ganas de estornudar, hágalo con la boca abierta, dejando salir el aire libremente. En el momento de retirar el yeso, los edemas y hematomas visibles ya habrán desaparecido y la nariz se encontrará en unas condiciones lo suficientemente buenas como para que el paciente pueda realizar su vida con normalidad. Sin embargo, el aspecto estético definitivo deberá seguir una evolución que llevará un tiempo no inferior a los seis meses. Se trata de una evolución lenta y progresiva que puede incluso pasar desapercibida. Sin embargo, hay que insistir en su gran importancia para el resultado definitivo. Se colocaran, además, adhesivos directamente en la piel para controlar la inflamación. Se deberán usar por tres semanas`},
              {title: '¿Qué riesgos entraña la operación?', id: 613, text: `No lo es. En general no se precisan analgésicos por más de tres días.`},
              {title: '¿Puedo escoger la nariz que deseo?', id: 864, text: `No. Ningún cirujano plástico, por muy experto que sea, puede inferir al 100% cómo quedará la nariz luego de la cirugía. Del mismo modo, tampoco debemos confiar en que un computador, por medio de una simulación fotográfica, nos indicará exactamente cómo será la futura nariz. La estructura física de la cara y las proporciones del mentón, la frente, etc. son usadas por el cirujano para la planificación quirúrgica. Nuevamente, insistimos en que la relación médico-paciente es, sin duda alguna, pieza clave para direccionar el plan quirúrgico.`},
              {title: '¿Se puede tomar el sol?', id: 7543, text: `Si en su caso tiene cicatriz en la base de la nariz no debe recibir sol al menos por un mes. De igual manera si persisten pequeños morados en las zonas alrededor de la nariz debe alejarse del sol hasta que estos hayan desaparecido por completo.`},
              {title: '¿Será posible usar lentes?', id: 125, text: `Aunque no sea visible, el edema provocado por la operación persiste largo tiempo. Esto se nota usando gafas porque dejan una marca profunda en el punto de apoyo sobre la nariz. No existe una contraindicación, pero sí una recomendación de no llevarlas de forma continua durante los dos primeros meses después de la intervención. Pueden usarse si se va reposando de vez en cuando dejando el tiempo necesario para que la marca se recupere.`},
            ]
          },
          {
            name: 'CIRUGÍA DE PÁRPADOS',
            view: 'cirugiaParpados',
            questions: [
              {title: '¿Qué medicamentos debe evitar antes y después de la cirugía?', id: 1, text: `Debe evitar ingerir anticoagulantes –aspirina, vitamina E`},
              {title: '¿Cuándo podré volver al trabajo?', id: 2, text: `Normalmente entre el quinto y el séptimo día después de la cirugía.`},
              {title: '¿Cuándo puedo maquillarme?', id: 3, text: `Transcurrida una semana de la operación, luego de retirar los puntos. Es conveniente utilizar protector solar que puede usarse como base para el maquillaje.`},
              {title: '¿Qué cuidados debo seguir luego de la cirugía?', id: 4, text: `Mantener la cabeza elevada (posición semisentada). Aplicar compresas frías varias veces al día las primeras 48 horas (puede usar manzanilla fría). Usar lentes oscuros por 24 horas. Evitar ver TV o computadoras por 24 horas. Evitar el sol por un mes mínimo.`},
              {title: '¿Qué riesgos específicos presenta la blefaroplastia?', id: 5, text: `Los riesgos son poco frecuentes. Entre ellos están hemorragias, infección, irritación ocular y remanentes de las bolsas.`},
              {title: '¿Tengo que tomar alguna precaución antes de la intervención?', id: 6, text: `La piel deberá estar bien hidratada y limpia, libre de restos de cosméticos, y sin ningún tipo de lesión. No debe haber ninguna infección en sus ojos,. No es necesario acudir al oftalmólogo antes de la operación. Suspender ingesta de alcohol y/o cigarros una semana antes de la cirugía. Avisar si utiliza lentes de contacto, si tiene alergia a algún medicamento o consume alguna medicina.`},
            ]
          },
          {
            name: 'CIRUGÍA DE OREJAS',
            view: 'cirugiaOrejas',
            questions: [
              {title: '¿A partir de qué edad se puede realizar esta cirugía en niños?', id: 1, text: `Desde los 6 años.`},
              {title: '¿Cómo son las cicatrices?', id: 2, text: `La cicatriz quedará en la parte posterior de la oreja, por lo que resultará imperceptible incluso al llevar el cabello corto o recogido.`},
              {title: '¿Cuándo se podrá hacer vida normal?', id: 3, text: `A los pocos días. Podrá realizar ejercicios físicos a partir de las tres semanas.`},
              {title: '¿Es doloroso?', id: 4, text: `Puede molestar al contacto o presión durante el primer mes.`},
              {title: '¿Qué cuidados postoperatorios debo seguir?', id: 5, text: `Los 21 días posteriores a la cirugía, se debe utilizar una prenda de compresión ligera (algodón y banda elástica) para proteger las orejas de golpes o gestos bruscos.`},
            ]
          },
          {
            name: 'AUMENTO DE MAMAS',
            view: 'cirugiaMamas',
            questions: [
              {title: '¿Qué tipo de anestesia es necesaria?', id: 1, text: `Se realiza con anestesia general debido a que es más cómodo y seguro para el paciente y el médico.`},
              {title: '¿Requiero de hospitalización?', id: 2, text: `Esta cirugía es de tipo ambulatoria. Esto quiere decir que la paciente ingresa a la clínica en horas de la mañana y en el transcurso de la tarde ya puede estar regresando a su casa.`},
              {title: '¿A partir de qué edad pueden colocarse implantes mamarios?', id: 3, text: `Desde que la persona ha completado el desarrollo de las mamas. Algunas mujeres ya han completado este desarrollo a los 17 años. La mujer tiene que ser emocionalmente madura y conocer todos los pros y los contras de la cirugía.`},
              {title: '¿Cuál será el volumen de mi implante?', id: 4, text: `El que sea más cómodo y vaya más en armonía con su cuerpo. Es decir, se debe llegar a un acuerdo entre el médico y la paciente sobre el tamaño que se desea obtener. Hay que tomar en cuenta que no siempre las expectativas que tiene la paciente son las más adecuadas. No todas las pacientes tienen las mismas medidas del tórax, la misma cantidad de tejido mamario, las dimensiones y la capacidad del músculo para cubrir el implante. Un recurso que ayuda al médico a calmar la inquietud de la paciente es utilizar los probadores en la consulta.`},
              {title: '¿Cuándo son retirados los puntos?', id: 5, text: `Las suturas que se utilizan son intradérmicas (dentro de la piel) y se retiran entre ocho y quince días después de la operación. En algunos casos, pueden utilizarse suturas reabsorbibles.`},
              {title: '¿Cuánto tiempo demora la cirugía?', id: 6, text: `En promedio, demora de una a dos horas. Hay que tomar en cuenta que se requiere siempre un tiempo para preparar al paciente y otro tiempo para que éste se recupere de la anestesia.`},
              {title: '¿Cuánto tiempo dura este implante? ¿Cuándo debo cambiarlo?', id: 7, text: `Los implantes actualmente son de por vida, tienen una garantía de 10 años en caso de que se rompan o que se encapsulen. Con el transcurso de los años, las mamas pueden caer de manera natural y muchas pacientes deciden cambiar los implantes y reafirmar las mamas nuevamente.`},
              {title: '¿El post-operatorio de esta cirugía es doloroso?', id: 8, text: `Generalmente hay molestia las primeras 72 horas, mientras el músculo se adapta al implante y estira sus fibras, para eso ayudan los relajantes musculares y analgésicos. Este post-operatorio es poco molesto siempre que usted obedezca las instrucciones médicas, principalmente en lo concerniente a los movimientos de los brazos durante los primeros días.`},
              {title: '¿Qué complicaciones puedo tener con los implantes?', id: 9, text: `Hematomas: Dependiendo de la magnitud, pueden ser autodigeridos por el organismo o necesitar de un drenaje quirúrgico. Infección: ocurre en un bajo porcentaje de los casos. Usted debe seguir las recomendaciones terapéuticas del médico y cumplir estrictamente con la ingesta de antibióticos. Retracción de la cápsula fibrosa: la ruptura del implante ocurre en ínfimos porcentajes. Caída de las mamas al transcurrir de los años: puede ocurrir si el implante es muy grande y hay piel muy flácida.`},
              {title: '¿Qué debo y qué no debo hacer la primera semana después de haber sido operada?', id: 10, text: `Debe dormir semisentada los primeros días, luego de lado o boca arriba. Mantener el sostén post-operatorio día y noche, por lo menos durante cuatro semanas. Puede tomar un baño al día siguiente de la cirugía, teniendo cuidado de no mojar las mamas. Para ello, debe envolverlas con material plástico de cocina. Puede retornar a su trabajo luego del tercer día, siempre que la actividad que usted realice no exija esfuerzo físico de cualquier naturaleza. Debe realizar terapias post-operatorias después del quinto día. Puede manejar automático después de la primera semana, y sincrónico luego de dos semanas. Las relaciones sexuales pueden ser reiniciadas una vez que las heridas estén completamente cicatrizadas. Se recomienda esperar tres semanas. Evite la exposición al sol antes de tres meses después de la operación.`},
              {title: '¿Qué es el endurecimiento de las mamas o retracción de cápsula fibrosa?', id: 11, text: `Nuestros organismos reaccionan de forma similar ante un cuerpo extraño. El cuerpo crea una cápsula o envoltura alrededor del implante como para defenderse con la finalidad de aislarlo y no estar directamente en contacto con él. Todos los implantes son envueltos por esta cápsula fibrosa, que puede variar en grosor (unas finas, otras de mediano grosor y unas que pueden ser tan duras que tienden a calcificarse). No conocemos exactamente el mecanismo de su formación ni el tiempo en el cual se retraen. Esta retracción algunas veces puede generar asimetrías y dolor en las mamas.`},
              {title: '¿Qué es un implante mamario?', id: 12, text: `Es usado para aumentar el volumen de las mamas, colocado de manera retropectoral (detrás del músculo pectoral). Los implantes son hechos de silicona, un derivado del sílice, y están rellenos de gel. Actualmente existen varias formas externas: los implantes lisos, texturizados y de poliuretano. Los implantes más costosos son los de poliuretano y los menos costosos son los lisos. Con respecto a la altura, existen implantes de perfil alto e implantes de perfil bajo, cada uno con usos específicos para la paciente. Se calcula el tamaño en unidades de volumen o centímetros cúbicos (cc). Por su forma pueden ser redondos o anatómicos. `},
              {title: '¿Cómo quedarán las cicatrices en este tipo de cirugía?', id: 13, text: `Éste es uno de los aspectos que más preocupan a las pacientes que deciden realizarse una cirugía de este tipo. Existen varias técnicas. La paciente debe discutirlas con el médico tratante, que es quien decidirá cuál será la técnica quirúrgica que aplicará. Dependiendo del tamaño, el volumen, la forma de las mamas, el color de la piel y los antecedentes de cicatrización de cirugías previas, podemos tener una cicatriz sólo alrededor de la areola (muy bien disimulada), en forma de I o T cuando las mamas son muy grandes o están muy caídas (en la mayoría de los casos las cicatrices son poco visibles). Es muy personal la forma de realizar la sutura de estas cicatrices. Actualmente, se están realizando varios tipos de afrontamiento para tratar de disminuir lo más posiblemente las cicatrices. En nuestras pacientes trabajamos con mínima tensión para obtener cicatrices menos visibles o imperceptibles.`},
              {title: '¿Cuánto tiempo demora la intervención?', id: 14, text: `Normalmente, entre dos y cuatro horas. Dependiendo de la técnica utilizada.`},
              {title: '¿En cuánto tiempo mejora el aspecto de mis cicatrices?', id: 15, text: `Esto es variable, en cada paciente el comportamiento es sustancialmente distinto. Depende de varios aspectos como la raza, el estado nutricional, la tensión de la herida, la edad de la paciente, la presencia de enfermedades asociadas, la exposición al sol, etc. En términos generales tenemos:

              • Los primeros treinta días: la cicatriz se puede mostrar algo enrojecida, con cierta reacción a las suturas y a las cintas adhesivas.
              
              • Entre treinta días y un año: la cicatriz pasa de rosado o rojo a un tono marrón, con tendencia a aclararse aún más.
              
              • Luego de un año: la cicatriz deja de ser consistente, se torna muy blanda y blanquecina y, en algunos casos, puede ser casi imperceptible a simple vista. `},
              {title: '¿Qué tipo de anestesia se requiere?', id: 16, text: `Ésta es una cirugía que debe realizarse con anestesia general.`},
              {title: 'Escuché que algunas pacientes quedan con las cicatrices visibles…', id: 17, text: `Debemos diferenciar entre las cicatrices hipertróficas y los queloides. Las cicatrices hipertróficas son engrosamientos que se producen por maltrato de la piel, mala sutura o infección en la cicatriz y que pueden ser nuevamente resecadas (eliminadas) con una resutura de la cicatriz. Esto es realizado con anestesia local y en muy corto tiempo en el consultorio. Los queloides, si hay una predisposición genética, saldrán en cualquier parte en donde usted tenga una cicatriz. En estos casos, es conveniente aplicar radioterapia dentro de las cuarenta y ocho horas siguientes a la intervención. Si usted tiene predisposición genética a la formación de queloides, debe comunicárselo a su médico para que tome las debidas previsiones.`},
            ]
          },
          {
            name: 'REDUCCIÓN DE MAMAS',
            view: 'reduccionMamas',
            questions: [
              {title: '¿Cómo se deberá dormir los primeros días después de la intervención?', id: 1, text: `Deberá dormir boca arriba los primeros días, luego de lado, con el sostén post-operatorio, por un mes aproximadamente.`},
              {title: '¿Cuándo no debe realizarse la operación?', id: 2, text: `Podría estar contraindicada en personas consideradas grandes fumadoras. El tabaco perjudica la circulación capilar y consecuentemente la cicatrización. En pacientes jóvenes menores de 18 años. En caso de padecer alguna enfermedad que pueda interferir con el proceso quirúrgico o la anestesia. Es imprescindible realizar un estudio mamario previo como mamografía.`},
              {title: '¿Cuándo se podrá reincorporar a la vida laboral?', id: 3, text: `Depende del tipo de trabajo que realice. Si el trabajo es de oficina o similar podrá incorporarse siete días después de la intervención. Para trabajos que exigen movimientos o esfuerzos luego de 15 a 21 días.`},
              {title: '¿De qué forma quedarán las cicatrices?', id: 4, text: `Éste es uno de los aspectos que más preocupan a las pacientes que deciden realizarse una cirugía de este tipo. En caso de reducción mamaria las cicatrices son en forma de T invertida (En la mayoría de los casos las cicatrices son poco visibles). Es muy personal la forma de realizar la sutura de estas cicatrices. Actualmente, se están realizando varios tipos de afrontamiento para tratar de disminuirlas lo más posible. En nuestras pacientes trabajamos con mínima tensión para obtener cicatrices menos visibles o imperceptibles.`},
              {title: '¿En algunas pacientes quedan las cicatrices visibles?', id: 5, text: `Debemos diferenciar entre las cicatrices hipertróficas y los queloides. Las cicatrices hipertróficas son engrosamientos que se producen por maltrato de la piel, mala sutura o infección en la cicatriz y que pueden ser nuevamente resecadas (eliminadas) con una nueva resutura de la cicatriz. Esto es realizado con anestesia local y en muy corto tiempo en el consultorio. Los queloides, si hay una predisposición genética, saldrán en cualquier parte en donde usted tenga una cicatriz. En estos casos, es conveniente aplicar radioterapia dentro de las cuarenta y ocho horas siguientes a la intervención. Si usted tiene predisposición genética a la formación de queloides, debe comunicárselo a su médico para que tome las debidas previsiones.`},
              {title: '¿En cuánto tiempo mejora el aspecto de mis cicatrices?', id: 6, text: `Esto es variable, en cada paciente el comportamiento es sustancialmente distinto. Depende de varios aspectos como la raza, el estado nutricional, la tensión de la herida, la edad de la paciente, la presencia de enfermedades asociadas, la exposición al sol, etc. En términos generales tenemos:

              • Los primeros treinta días: la cicatriz se puede mostrar algo enrojecida, con cierta reacción a las suturas y a las cintas adhesivas.
              
              • Entre treinta días y un año: la cicatriz pasa de rosado o rojo a un tono marrón, con tendencia a aclararse aún más.
              
              • Luego de un año: la cicatriz deja de ser consistente, se torna muy blanda y blanquecina y, en algunos casos, puede ser casi imperceptible a simple vista.`},
              {title: '¿Las mamografías serán igualmente fiables que antes de la cirugía ?', id: 7, text: `La fiabilidad de las mamografías es la misma. Por cuestión de control recomendamos una a los seis meses de la intervención. A partir de entonces deberá seguir la frecuencia que le marque su especialista.`},
            ]
          },
        ]
      }
    }
  },
  {
    id: 150,
    section: 'onlineConsult',
    language: 'ES',
    options: {
      title: 'Consulta Online',
      buttonReportText: 'Reportar Error',
      modal: {
        preview: {
          label: 'Email',
          placeholder: 'Ejemplo@123.com',
          actionButton: 'Siguiente'
        },
        reportError: {
          title: 'SI HAS TENIDO ALGÚN PROBLEMA CON NUESTRA CONSULTA ON LINE, TE AGRADECERÍAMOS QUE NOS AYUDES A RESOLVERLO LLENANDO ESTA FORMA.',
          name: {text: 'Nombre'},
          email: {text: 'Email'},
          country: {text: 'Pais'},
          comeFrom: {
            text: '¿Desde qué equipo encontró problemas?',
            options: [
              {text: 'Computadora', value: 1, id: 1},
              {text: 'Tablet', value: 2, id: 2},
              {text: 'Smartphone', value: 3, id: 3},
            ]
          },
          model: {text: '¿Cuál es el modelo/tipo de su equipo?'},
          browser: {text: '¿Qué navegador utiliza?'},
          url: {text: '¿A qué dirección web de Toro Parilli está accediendo?'},
          timeOfError: {
            text: '¿En qué punto recibió un error del sistema?',
            options: [
              {text: 'Al ingresar a la pagina, no la encuentra', value: 0, id: 1},
              {text: 'Al tratar de acceder a la consulta online', value: 1, id: 2},
              {text: 'Al ingresar con mi correo electronico', value: 2, id: 3},
              {text: 'En un paso interno al estar llenando los datos', value: 3, id: 4},
              {text: 'Otro por favor describa', value: 4, id: 5},
            ]
          },
          file: {text: 'Si puede agregar una captura de pantalla de su problema, siempre puede ser de utilidad', buttonText: 'Seleccionar'},
          description: {text: 'Gracias por su reporte y utilice este espacio para describirnos el problema con la consulta on line'},
          sendButton: {text: 'Enviar'},
        },
      },
      sideContent: `<p>
        Llenar este formulario, y responder sus preguntas, permitirá al Dr. Toro Parilli realizar una evaluación inicial de su caso, para que reciba un diagnóstico y el correspondiente presupuesto.
        <br>
        <br>
        En pro de realizar un diagnóstico preciso es importante que suministre toda la información solicitada con la mayor fidelidad posible.
        <br>
        <br>
        Tiempo aproximado para llenar la consulta online: 10 minutos.
        <br>
        <br>
        • General: US $ 50,00
        <br>
        <br>
        • Solo para residentes en Venezuela: Bs. 242,00
        <br>
        <br>
        Si requiere ayuda en el proceso, por favor escriba a: atencionalcliente@toroparilli.com
        <br>
        <br>
        Nota: La información e imágenes suministradas son estrictamente confidenciales.
        </p>
      `
    }
  },
  // ENGLISH
  {
    id: 3,
    section: 'common',
    language: 'EN',
    options: {
      menu: {
        links: [
          {path: '/nosotros', title: 'About Us', id: 1},
          {path: '/procedimientos', title: 'Procedures', id: 2},
          {path: '/antes-y-despues', title: 'Before and After', id: 3},
          {path: '/consulta-online', title: 'Online Consult', id: 4},
          {path: '/tus-dudas', title: 'Your Doubts', id: 5},
          {path: '/articulos', title: 'Articles', id: 7},
          {path: '/contacto', title: 'Contact', id: 8},
        ],
        logo: {
          img: '',
        }
      },
      footer: {
        cta: {
          text: 'Online Consult',
          href: '/consulta-online'
        },
        links: [
          {title: 'facebook', img: '/static/icons/facebook-logo.png', id: 1},
          {title: 'Twitter', img: '/static/icons/facebook-logo.png', id: 2},
          {title: 'Instagram', img: '/static/icons/facebook-logo.png', id: 3},
        ]
      },
    }
  },

  {
    id: 66,
    section: 'articles',
    language: 'EN',
    options: {
      title: 'Articles',
      categoryText: 'Choose a category',
      categories: [
        {text: 'Carnic', id: 1},
        {text: 'Pesqu', id: 2},
        {text: 'Pan', id: 4},
        {text: 'Veggie', id: 5},
        {text: 'Fruit', id: 6},
      ],
      gender: {
        male: {text: 'Men'},
        female: {text: 'Women'}
      },
      cards: [
        {
          id: 1,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 2,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 3,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 4,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 5,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 6,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 7,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 8,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 9,
          img: '/static/dummy/dummy-producto.png',
          title: 'Example title for this dummy article',
          content: '`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
      ]
    }
  },
  {
    id: 54,
    section: 'doubts',
    language: 'EN',
    options: {
      title: 'Your Doubts',
      modal: {
        buttonText: 'Send',
        title: 'WE DO NOT CLARIFY YOUR DOUBTS? ASK US',
        fields: {
          name: { text: 'Name'},
          lastname: { text: 'Lastname'},
          email: { text: 'Email'},
          comment: { text: 'Message'},
          procedures: {
            text: 'Procedures',
            options: [
              {text: 'Choose an option', value: 0, id: 1},
              {text: 'gluteoplasty', value: 1, id: 2},
              {text: 'abdominal surgery', value: 2, id: 3},
              {text: 'laser liposuction', value: 3, id: 4},
              {text: 'Tratamiento de arrugas', value: 4, id: 5},
              {text: 'wrinkle treatment', value: 5, id: 6},
              {text: 'eyelid surgery', value: 6, id: 7},
              {text: 'ear surgery', value: 7, id: 8},
              {text: 'breast reduction', value: 8, id: 9},
            ]
          },
        }
      },
      buttons: {
        general: {
          name: 'General Doubts',
          view: 'general',
          questions: [
            {title: 'What is the experience of the doctor?', id: 123, text: 'You can know the experience of Dr. Toro Parilli in his BIO.'},
            {title: 'Where does the doctor operate?', id: 234, text: 'Procedures in Venezuela are carried out at the San Antonio Clinic, located in Caracas. Procedures in the Dominican Republic are carried out at the Cecilip clinic, located in Santo Domingo.'},
            {title: 'Can I have surgery in Venezuela if I live in another country?', id: 3456, text: 'We have a multidisciplinary team that offers personalized attention, which allows people who live abroad to travel to Venezuela with absolute confidence that they will be well cared for and receive the treatment they want.'},
            {title: 'Is there clinical accommodation?', id: 12312, text: 'We have an alliance with a clinical lodging in which those who do not reside in Caracas can stay.'},
            {title: "Where are the doctor's offices?", id: 235235, text: `236 / 5,000 Resultados de traducción Consultations are held at the San Ignacio Shopping Center, Torre Cópernico in Caracas, Venezuela, and at the Cecilip clinic located in Santo Domingo, Dominican Republic. (put location link and information about each clinic)`},
            {title: 'What is the price of the operations?', id: 2346, text: 'The price of the procedures varies according to the needs of each patient, so it is established at the time of the consultation.'},
            {title: 'After an online consultation, when do I see the doctor?', id: 7869, text: `The online consultation represents a first approach in which you will be able to obtain the budget of your operation according to the evaluation that is made. After this, a first preoperative consultation is specified.`},
            {title: 'If I am from abroad, how long will it take to travel?', id: 65743, text: 'Depending on the type of procedure, it can be between 10 and 12 days after the operation.'},
            {title: 'Do I have to go to the first consultation with exams?', id: 123123123123123123, text: 'It is not necessary, but you can do it. The type of exam will depend on the procedure you want to perform.'},
            {title: 'Consultation price?', id: 456734, text: `You can see the price of the online consultation at the following link: On Line Consultation If you want the price of the consultation in person, you can call the following numbers: +58 212 2646007 or by direct WhatsApp  https://wa.me/584242677486?text= `},
          ]
        },
        restDoubts: [
          {
            name: 'GLUTEOPLASTY',
            view: 'gluteoplastia',
            questions: [
              {title: 'Will I be able to sit safely and receive injections in the buttocks?', id: 4123123752656, text: 'Preferably, avoid injections in the buttocks if you have a prosthesis, since the implants could be punctured. There is no discomfort in sitting down, since, when we sit down, the prostheses adopt a privileged location between the muscles, which prevents them from being crushed.'},
              {title: 'How will my buttocks look?', id: 23465562, text: 'With this surgery you can improve your appearance and self-esteem, but it will not necessarily change the perception that others have of you or give you a perfect figure. Before you decide, think carefully about your expectations.'},
              {title: 'What is the correct location of the buttock prostheses?', id: 3456234134638, text:  `The best ones are those that remain between the muscles, never the subcutaneous ones (below the fat)`},
              {title: 'What is the advantage between using buttock prostheses and injected implants?', id: 1341234513245, text: `Injected implants are being used by a large number of people around the world: plastic surgeons, beauticians, hairdressers and anyone who wants to make easy money, regardless of the complications that this could generate. These injected implants are nothing more than liquid plastics called by different names to confuse the community and those who do not know about the complications that they entail. The names that are being used are: expanding cells, methacrylates, biopolymers, methacryl and other trade-oriented names. These plastics can never be removed from the body and the complications they cause will be for the rest of life. We see how, unlike injected implants, buttock prostheses can be removed, if necessary, and without the complications that injections entail.`},
              {title: 'What are the complications of gluteal prostheses?', id: 2352351241346357, text: `The most feared is infection, since the gluteal area -for obvious reasons- is highly contaminated. Others include bruising, unsightly shape, skin retraction, suture dehiscence, dissatisfaction with the result.`},
              {title: 'When is this surgery contraindicated?', id: 234612342345245, text: `In cases of having an active infection, coagulation disorders, healing disorders, in immunosuppressed patients, pregnant women and/o con expectativas poco realistas.`},
              {title: 'How long is the recovery time?', id: 2341523234, text: `Patients can walk home. The sensation of pain will disappear with the indicated muscle relaxant and analgesic. They can sit down after the third day, go back to work after a week. Walking exercises from three weeks. Complete recovery after three months.`},
              {title: 'Should I wear girdles?', id: 1242523634567678672345235, text: `A girdle must be worn for a period of six weeks, as is routine in cases of liposculpture. Thus, the inflammation decreases more quickly and the prostheses remain in their indicated position.`},
              {title: 'Do these prosthetics change?', id: 6795614325134, text: `These implants have a lifetime guarantee. They should be changed in cases of capsular rupture or contracture. Sometimes patients request replacement to increase volume after several years.`},
            ]
          },
          {
            name: 'ABDOMEN SURGERY',
            view: 'cirugiaAbdomen',
            questions: [
              {title: 'What type of anesthesia will I receive?', id: 467851, text: `Epidural anesthesia with sedation or more general epidural anesthesia, or only general.`},
              {title: 'What is postoperative analgesic therapy?', id: 12345179, text: `It is a type of anesthesia that is placed from the surgery room and that allows the patient not to experience pain or discomfort when waking up. The anesthesia, which is also placed by the anesthesiologist, can be maintained for a few more days, as the case warrants.`},
              {title: 'What postoperative care should I have?', id: 12352437, text: `Wear the girdle for at least four weeks after the operation. Carry out the postoperative therapies that the doctor suggests. Keep proper rest. Even though you will feel fine the day after surgery, you should avoid weight bearing for about a fortnight after the operation. Try to walk somewhat stooped for a week to prevent the scar from being subjected to tension. Constantly change position in bed from the pavilion exit, mobilize the feet, flex the legs. These maneuvers will increase blood circulation in the legs. Cover the operated area when taking a bath. Take care of the wound that remains after the removal of the stitches, ten days after the operation. It is possible to perform walking exercises in the third week. However, you will have to wait until the fourth or fifth week to lift weights.`},
              {title: 'Can I smoke before or after surgery? What medications should I not take?', id: 12352454897834563467, text: `You should avoid smoking for at least ten days before surgery and fifteen days after surgery. Nicotine is a powerful vasoconstrictor (clogs blood vessels) that will end up ruining your surgery and making it difficult to heal, and in some cases could lead to other complications as well. Be cautious and take care of your surgery. You should not take aspirin or similar medications before surgery. If you are receiving any treatment you should notify your doctor.`},
              {title: 'Will I miss the surgery if I decide to get pregnant?', id: 1234537791, text: `The result can be preserved as long as it does not exceed its weight during pregnancy.`},
              {title: 'What does abdominal surgery consist of?', id: 1234537792, text: `A large amount of excess or sagging skin and fat is removed. During surgery, the abdominal muscles (or the so-called "squares", which in athletes are well defined) are sutured, bringing them together in the medial part so that they gain strength and tone. This is how the waist will be more curved, which will produce in the abdomen the feeling of having exercised for a long time. The navel is harnessed and placed in the same position as it was before.`},
              {title: 'How many kilos will I lose with the surgery?', id: 1234537793, text: `Naturally, you will lose a few kilos, but the most important thing will be that you will gain a harmonious figure with a well-proportioned abdomen with respect to the trunk and limbs.`},
              {title: 'How long does it take to perform my surgery?', id: 12345377931, text: `Normally this surgery takes between two and three hours. It will depend on the magnitude of the tissue to be removed.`},
              {title: 'What will the scars be like?', id: 12345377932, text: `Depending on the characteristics of the patient, a normal abdominoplasty or a mini abdominoplasty will be performed. You will be informed of the final length of the scar, which will be determined by the characteristics of the abdomen.`},
              {title: 'Will the scar be visible?', id: 12345377933, text: `Currently, the scar left by the intervention is easily concealable, since it remains inside the bikini. They are very discreet scars. Imagine a caesarean section scar that is slightly longer on the sides. We can also eliminate with this technique those scars from caesarean sections or other abdominal surgeries that have been previously performed.`},
            ]
          },
          {
            name: 'LASER LIPOSUCTION',
            view: 'liposuccionLaser',
            questions: [
              {title: 'How is the scar left by liposculpture?', id: 1234513668, text: `Normally, the small incisions that are made do not exceed five millimeters and disappear almost entirely after three months. However, additionally, the foresight is taken to make the incisions in strategic places (folds, grooves) so that they can be completely concealed.`},
              {title: 'What is the period of hospitalization?', id: 1233454567, text: `It is usually an outpatient surgery. If it is done with another large surgery, it is recommended that the patient be hospitalized.`},
              {title: 'What are the areas that can be treated?', id: 123557908651, text: `• double chin

               • Arms
              
               • Abdominal region
              
               • Waist
              
               • Back
              
               • External face of the thigh (“revolveras”)
              
               • Anterior aspect of the thigh
              
               • Buttocks.`},
              {title: 'When should I self-donate blood?', id: 123, text: `Self-donation consists of extracting a small amount of blood from the patient, preferably before the third day prior to surgery, so that the extracted red blood cells have been replaced by the time of the operation. Your blood is stored in the clinic's blood bank and is reinjected into your body in the immediate postoperative period. This technique, in addition to allowing to replace the volume that could be lost with surgery, promotes a faster recovery and without imbalance of blood volume. Using your own blood eliminates the risks of contracting contagious diseases.`},
              {title: 'Will having children after the operation make me lose its effects?', id: 345, text: `The results can be preserved after pregnancy, as long as your weight is controlled by a specialist. If you do not develop many stretch marks or the flaccidity is not greater, the shapes obtained with liposculpture are maintained.`},
              {title: 'Is any cure used?', id: 676, text: `When it comes to surgeries in which a large amount of fat was removed, it is recommended to wear a girdle for four to six weeks after the intervention.`},
              {title: 'Is liposuction dangerous?', id: 8, text: `Liposuction rarely causes problems. The danger is neither greater nor less than in other surgeries, as long as it is carried out in accordance with all applicable technical standards. Care must be taken not to extract large volumes of fat. As a criterion established internationally by plastic surgeons, it is recommended not to remove more than five to seven percent of the body weight. Currently, for surgeries in which large volumes have to be removed, self-donation of blood is recommended.`},
              {title: 'Is the postoperative period very painful?', id: 0, text: `Generally not. The pain is controlled with common pain relievers.`},
              {title: 'How long will it take to see the results?', id: 65, text: `All surgery goes through a variable phase of deflation. It depends on the patient and the areas that were treated. During the first 30 days after surgery, the patient may not fully perceive the results. After this period, a disinflammation of the area begins. After three months you can already see an excellent result. We recommend performing postoperative therapies (lymphatic drainage and/or exercises), aimed at modeling and reducing tissue inflammation.`},
              {title: 'How many kilos will I lose with the surgery?', id: 34 , text: `More than talking about losing kilos, we must talk about reducing sizes. Normally the patient can lose between four to six kilos, but it is really in the reduction of the sizes of pants, bra, shirts, etc. where the change is noticed.`},
              {title: 'How long does the surgical act take?', id: 675 , text: `This will depend on the extent of the areas to be treated. It can take between one and three hours, on average.`},
              {title: 'When can I take a bath?', id: 1234 , text: `The next day you can take a bath. If the procedure has been done in conjunction with another surgery then you should see your doctor.`},
              {title: 'What type of anesthesia is applied?', id: 5467 , text: `Most cases are performed under general anesthesia, in this way better results are obtained.`},
            ]
          },
          {
            name: 'WRINKLE TREATMENT',
            view: 'tratamientoArrugas',
            questions: [
              {title: 'Who is facial fat transfer addressed to?', id: 1234789023, text: `Indicated for both sexes; usually from the age of 40. It requires a careful physiognomic individual analysis to fully evaluate the set of features.`},
              {title: 'How long do the effects last?', id: 789088456, text: `The effect, both on expression wrinkles and volumes, usually lasts for several years.`},
            ]
          },
          {
            name: 'CHIN SURGERY',
            view: 'cirugiaMenton',
            questions: [
              {title: 'At what age can the intervention be carried out?', id: 3452345, text: `The process of ossification of the facial bones ends between the ages of 15 and 17. It is recommended for women to wait until they are 18 years old and for men after 21 years.`},
              {title: 'When can you start going to the pool, the gym and exercising?', id: 68903451234, text: `After two weeks, but the exercises should be practiced in moderation and progressively.`},
              {title: 'What medications should be avoided before and after the operation?', id: 1345567889, text: `As in any operation, the patient must refrain from taking aspirin or other anticoagulants during the three weeks prior to the intervention.`},
              {title: 'What is the risk of these operations and treatments?', id: 123524576879, text: `On the one hand, there are the risks common to any operation: those derived from the use of anesthesia, hemorrhages and infections. In the specific case of implants (silicone prostheses), the specific risk is rejection of the chin prosthesis.`},
              {title: 'What kind of discomfort does the intervention cause?', id: 123513653568, text: `It is an intervention that hardly causes discomfort.`},
              {title: 'Is any medication prescribed for the post-operative period?', id: 123235346, text: `The usual medications after any intervention: antibiotics to prevent infection and analgesics to relieve pain.` },
              {title: 'Do I have to take any precautions before the intervention?', id: 1231258686, text: `As in the rest of the facial operations, the condition of the skin is important for the success of the intervention. In the case of the chin, mouth conditions or any type of dental infection must be ruled out.`},
            ]
          },
          {
            name: 'NOSE SURGERY',
            view: 'cirugiaNariz',
            questions: [
              {title: 'At what age is it possible to operate?', id: 123, text: `When the ossification process of the facial bones has finished, usually between 15 and 17 years of age. However, it is always better to wait until the age of majority before making the decision to have surgery.`},
              {title: 'When is the final result visible?', id: 435, text: `When the plaster is removed after ten days, the nose will be in a correct shape and good enough to lead a completely normal life. But the final result in terms of details will require more time, usually about six months to achieve the final appearance.`},
              {title: 'Will the patient be able to breathe through the nose?', id: 678, text: `It is not. Analgesics are generally not needed for more than three days.`},
              {title: 'What post-operative care should I follow?', id: 789, text: `The postoperative period is not painful, however anti-inflammatory analgesics are indicated. If you feel like sneezing, do it with your mouth open, letting the air out freely. By the time the cast is removed, the visible edema and bruising will have disappeared and the nose will be in good enough condition for the patient to be able to lead a normal life. However, the final aesthetic appearance must follow an evolution that will take no less than six months. It is a slow and progressive evolution that can even go unnoticed. However, we must insist on its great importance for the final result. In addition, adhesives will be placed directly on the skin to control inflammation. Must be used for three weeks`},
              {title: 'What risks does the operation entail?', id: 613, text: `It is not. Analgesics are generally not needed for more than three days.`},
              {title: 'Can I choose the nose I want?', id: 864, text: `No. No plastic surgeon, no matter how expert, can infer 100% how the nose will look after surgery. In the same way, we should not trust that a computer, by means of a photographic simulation, will tell us exactly what the future nose will look like. The physical structure of the face and the proportions of the chin, forehead, etc. they are used by the surgeon for surgical planning. Again, we insist that the doctor-patient relationship is, without a doubt, a key element in directing the surgical plan.`},
              {title: 'Can you sunbathe?', id: 7543, text: `If in your case you have a scar at the base of the nose, you should not receive sun for at least a month. Similarly, if small bruises persist in the areas around the nose, you should stay away from the sun until they have completely disappeared.`},
              {title: 'Will it be possible to wear glasses?', id: 125, text: `Although not visible, the edema caused by the operation persists for a long time. This is noticeable by wearing glasses because they leave a deep mark where it rests on the nose. There is no contraindication, but there is a recommendation not to wear them continuously during the first two months after the intervention. They can be used if you rest from time to time, leaving the necessary time for the mark to recover.`},
            ]
          },
          {
            name: 'EYELID SURGERY',
            view: 'cirugiaParpados',
            questions: [
              {title: 'What medications should you avoid before and after surgery?', id: 1, text: `You should avoid taking blood thinners – aspirin, vitamin E`},
              {title: 'When will I be able to return to work?', id: 2, text: `Normally between the fifth and seventh day after surgery.`},
              {title: 'When can I put on makeup?', id: 3, text: `One week after the operation, after removing the stitches. It is convenient to use sunscreen that can be used as a base for makeup.`},
              {title: 'What care should I follow after surgery?', id: 4, text: `Keep your head elevated (semi-sitting position). Apply cold compresses several times a day for the first 48 hours (you can use cold chamomile). Wear dark glasses for 24 hours. Avoid watching TV or computers for 24 hours. Avoid the sun for at least a month.`},
              {title: 'What specific risks does blepharoplasty present?', id: 5, text: `Risks are rare. These include bleeding, infection, eye irritation, and pocket remnants.`},
              {title: 'Do I have to take any precautions before the intervention?', id: 6, text: `The skin must be well hydrated and clean, free of traces of cosmetics, and without any type of injury. There should be no infection in your eyes. It is not necessary to go to the ophthalmologist before the operation. Suspend alcohol and/or cigarette intake one week before surgery. Notify if you use contact lenses, if you have allergies to any medication or consume any medicine.`},
            ]
          },
          {
            name: 'EAR SURGERY',
            view: 'cirugiaOrejas',
            questions: [
              {title: 'From what age can this surgery be performed on children?', id: 1, text: `From 6 years old.`},
              {title: 'How are the scars?', id: 2, text: `The scar will be in the back of the ear, so it will be imperceptible even when wearing short or tied hair.`},
              {title: 'When will normal life be possible?', id: 3, text: `In a few days. You will be able to perform physical exercises after three weeks.`},
              {title: 'It is painful?', id: 4, text: `It can bother contact or pressure during the first month.`},
              {title: 'What postoperative care should I follow?', id: 5, text: `21 days after surgery, a light compression garment (cotton and elastic band) should be used to protect the ears from blows or sudden gestures.`},
            ]
          },
          {
            name: 'BREAST ENHANCEMENT',
            view: 'cirugiaMamas',
            questions: [
              {title: 'What type of anesthesia is necessary?', id: 1, text: `It is performed under general anesthesia because it is more comfortable and safer for the patient and the doctor.`},
              {title: 'Do I require hospitalization?', id: 2, text: `This surgery is outpatient. This means that the patient enters the clinic in the morning and in the course of the afternoon she may already be returning to her house.`},
              {title: 'From what age can breast implants be placed?', id: 3, text: `Since the person has completed the development of the breasts. Some women have already completed this development by age 17. The woman has to be emotionally mature and know all the pros and cons of the surgery.`},
              {title: 'What will be the volume of my implant?', id: 4, text: `The one that is most comfortable and goes more in harmony with your body. That is, an agreement must be reached between the doctor and the patient on the size that is desired. It must be taken into account that the patient's expectations are not always the most appropriate. Not all patients have the same chest measurements, the same amount of breast tissue, the dimensions and the capacity of the muscle to cover the implant. A resource that helps the doctor to calm the restlessness of the patient is to use the testers in the consultation.`},
              {title: 'When are the stitches removed?', id: 5, text: `The sutures used are intradermal (within the skin) and are removed between eight and fifteen days after the operation. In some cases, absorbable sutures can be used.`},
              {title: 'How long does the surgery take?', id: 6, text: `On average, it takes one to two hours. It must be taken into account that time is always required to prepare the patient and another time for the patient to recover from anesthesia.`},
              {title: 'How long does this implant last? When should I change it?', id: 7, text: `The implants are currently for life, they have a 10-year guarantee in case they break or become encapsulated. Over the years, the breasts can fall naturally and many patients decide to change the implants and reaffirm the breasts again.`},
              {title: 'Is the postoperative period of this surgery painful?', id: 8, text: `Generally, there is discomfort during the first 72 hours, while the muscle adapts to the implant and stretches its fibers. Muscle relaxants and analgesics help for this. This post-operative period is not very bothersome as long as you obey the medical instructions, especially regarding the movements of the arms during the first days.`},
              {title: 'What complications can I have with implants?', id: 9, text: `Hematomas: Depending on the magnitude, they can be self-digested by the body or require surgical drainage. Infection: occurs in a low percentage of cases. You must follow the therapeutic recommendations of the doctor and strictly adhere to the intake of antibiotics. Retraction of the fibrous capsule: implant rupture occurs in very small percentages. Fall of the breasts over the years: it can occur if the implant is very large and there is very flaccid skin.`},
              {title: 'What should I do and what should I not do the first week after having the operation?', id: 10, text: `You should sleep semi-sitting the first few days, then on your side or on your back. Keep the post-operative bra day and night, for at least four weeks. You can take a bath the day after surgery, being careful not to get your breasts wet. To do this, you must wrap them with plastic kitchen material. You can return to work after the third day, provided that the activity you perform does not require physical effort of any nature. You must perform post-operative therapies after the fifth day. You can drive automatic after the first week, and synchronous after two weeks. Intercourse can be resumed once the wounds are completely healed. It is recommended to wait three weeks. Avoid sun exposure before three months after the operation.`},
              {title: 'What is the hardening of the breasts or retraction of the fibrous capsule?', id: 11, text: `Our bodies react in a similar way to a foreign body. The body creates a capsule or envelope around the implant as if to defend itself in order to isolate it and not be in direct contact with it. All implants are covered by this fibrous capsule, which can vary in thickness (some thin, others of medium thickness and some that can be so hard that they tend to calcify). We do not know exactly the mechanism of their formation or the time in which they retract. This retraction can sometimes generate asymmetries and pain in the breasts.`},
              {title: 'What is a breast implant?', id: 12, text: `It is used to increase the volume of the breasts, placed retropectorally (behind the pectoral muscle). The implants are made of silicone, a derivative of silica, and are filled with gel. Currently there are several external forms: smooth, textured and polyurethane implants. The most expensive implants are the polyurethane ones and the least expensive are the smooth ones. Regarding height, there are high profile implants and low profile implants, each with specific uses for the patient. Size is calculated in units of volume or cubic centimeters (cc). Due to their shape, they can be round or anatomical.`},
              {title: 'How will the scars be in this type of surgery?', id: 13, text: `This is one of the aspects that most concerns patients who decide to undergo surgery of this type. There are several techniques. The patient should discuss them with the treating physician, who will decide which surgical technique to apply. Depending on the size, volume, shape of the breasts, skin color and history of healing from previous surgeries, we can have a scar only around the areola (very well concealed), in the shape of an I or T when the breasts are very large or very sagging (in most cases the scars are not very visible). The way of suturing these scars is very personal. Various types of coping are currently being done to try to minimize scarring as much as possible. In our patients we work with minimal tension to obtain less visible or imperceptible scars.`},
              {title: 'How long does the intervention take?', id: 14, text: `Usually between two and four hours. Depending on the technique used.`},
              {title: 'How long does it take to improve the appearance of my scars?', id: 15, text: `This is variable, in each patient the behavior is substantially different. It depends on several aspects such as race, nutritional status, wound tension, patient age, presence of associated diseases, sun exposure, etc. In general terms we have:

               • The first thirty days: the scar may be slightly reddened, with a certain reaction to the sutures and adhesive tapes.
              
               • Between thirty days and one year: the scar turns from pink or red to a brownish tone, with a tendency to lighten even more.
              
               • After a year: the scar is no longer consistent, it becomes very soft and whitish and, in some cases, it can be almost imperceptible to the naked eye.`},
              {title: 'What type of anesthesia is required?', id: 16, text: `This is a surgery that must be performed under general anesthesia.`},
              {title: 'I heard that some patients are left with visible scars…', id: 17, text: `We must differentiate between hypertrophic scars and keloids. Hypertrophic scars are thickenings that are produced by mistreatment of the skin, poor suture or infection in the scar and that can be resected (eliminated) again with a resurfacing of the scar. This is done under local anesthesia and in a very short time in the office. Keloids, if there is a genetic predisposition, will appear anywhere you have a scar. In these cases, it is convenient to apply radiotherapy within forty-eight hours after the intervention. If you have a genetic predisposition to the formation of keloids, you should notify your doctor so that he can take the necessary precautions.`},
            ]
          },
          {
            name: 'BREAST REDUCTION',
            view: 'reduccionMamas',
            questions: [
              {title: 'How should you sleep the first days after the intervention?', id: 1, text: `You will have to sleep on your back for the first few days, then on your side, with your post-operative bra, for about a month.`},
              {title: 'When should the operation not be performed?', id: 2, text: `It could be contraindicated in people considered heavy smokers. Tobacco impairs capillary circulation and consequently wound healing. In young patients under 18 years of age. In case of suffering from any disease that may interfere with the surgical process or anesthesia. It is essential to carry out a previous breast study such as a mammogram.`},
              {title: 'When will you be able to return to work?', id: 3, text: `It depends on the type of work you do. If the work is office or similar, it can be incorporated seven days after the intervention. For jobs that require movements or efforts after 15 to 21 days.`},
              {title: 'How will the scars remain?', id: 4, text: `This is one of the aspects that most concerns patients who decide to undergo surgery of this type. In case of breast reduction, the scars are in the shape of an inverted T (In most cases the scars are not very visible). The way of suturing these scars is very personal. Currently, various types of coping are being carried out to try to reduce them as much as possible. In our patients we work with minimal tension to obtain less visible or imperceptible scars.`},
              {title: 'In some patients are visible scars left?', id: 5, text: `We must differentiate between hypertrophic scars and keloids. Hypertrophic scars are thickenings that are produced by mistreatment of the skin, poor suture or infection in the scar and that can be resected (eliminated) again with a new resurfacing of the scar. This is done under local anesthesia and in a very short time in the office. Keloids, if there is a genetic predisposition, will appear anywhere you have a scar. In these cases, it is convenient to apply radiotherapy within forty-eight hours after the intervention. If you have a genetic predisposition to the formation of keloids, you should notify your doctor so that he can take the necessary precautions.`},
              {title: 'How long does it take to improve the appearance of my scars?', id: 6, text: `This is variable, in each patient the behavior is substantially different. It depends on several aspects such as race, nutritional status, wound tension, patient age, presence of associated diseases, sun exposure, etc. In general terms we have:

               • The first thirty days: the scar may be slightly reddened, with a certain reaction to the sutures and adhesive tapes.
              
               • Between thirty days and one year: the scar turns from pink or red to a brownish tone, with a tendency to lighten even more.
              
               • After a year: the scar is no longer consistent, it becomes very soft and whitish and, in some cases, it can be almost imperceptible to the naked eye.`},
              {title: 'Will mammograms be as reliable as before surgery?', id: 7, text: `The reliability of mammograms is the same. As a matter of control, we recommend one six months after the intervention. From then on, you must follow the frequency set by your specialist.`},
            ]
          },
        ]
      }
    }
  },
  {
    id: 1440,
    section: 'beforeAfter',
    language: 'ES',
    options: {
      title: 'Antes y Despues',
      gender: {
        male: {
          view: 'male',
          options: [
            {text: 'Liposuccion Laser', id: 1, value: 1},
            {text: 'Ginecomastia', id: 2, value: 2},
            {text: 'Cirugia de nariz', id: 3, value: 3},
            {text: 'Cirugia de oreja', id: 4, value: 4},
          ]
        },
        female: {
          view: 'female',
          options: [
            {text: 'Gluteplastia', id: 5, value: 5},
            {text: 'Cirugia del abdomen', id: 6, value: 6},
            {text: 'Liposuccion Laser', id: 1, value: 1},
            {text: 'Aumento de mamas', id: 2, value: 2},
            {text: 'Reduccion de mamas', id: 7, value: 7},
            {text: 'Renuvion', id: 8, value: 8},
            {text: 'Cirugia de nariz', id: 3, value: 3},
            {text: 'Lifting facial', id: 9, value: 9},
            {text: 'Cirugia de parpados', id: 10, value: 10},
          ]
        }
      }
    }
  },
  {
    id: 542,
    section: 'aboutUs',
    language: 'ES',
    options: {
      title: 'Sobre Nosotros',
      switchButtons: [
        {text: 'Dr. Parilli', value: 'parilli', id: 1},
        {text: 'El Equipo', value: 'team', id: 2},
        {text: 'Instalaciones', value: 'places', id: 3},
      ],
      parilliData: {
        name: 'DR. GERARDO TORO PARILLI',
        role: 'cirujano plástico',
        text: [
          {content: `Es egresado de la Universidad de Carabobo, donde obtuvo el título de Médico Cirujano. Posteriormente
          ingresó en la Universidad Central de Venezuela, donde realizó su primer postgrado como Cirujano General
          en el Hospital Universitario de Caracas. Allí realizó trabajos de investigación científica y posteriormente
          cumplió sus pasantías entre España, Argentina y Brasil.`},
          {content: `Su segundo postgrado lo realizó en el Hospital Militar Dr. Carlos Arvelo, donde obtuvo el título de
          Especialista en Cirugía Plástica, Reconstructiva y Maxilofacial. Durante este periodo, recibió formación
          en manejo de quemaduras, cirugía reconstructiva posterior al traumatismo facial, patologías oncológicas y
          congénitas; así como también en patología maxilofacial. Vale destacar que gracias a sus trabajos científicos
          publicados, fue laureado con distintos premios a  nivel nacional e internacional.`},
          {content: `Actualmente, el Dr. Gerardo Toro Parilli es miembro postulante de la Sociedad Venezolana de Cirugía Plástica,
          Reconstructiva, Estética y Maxilofacial (SVCPREM), de la  Federación Ibero Latinoamericana de Cirugía
          Plástica y Reconstructiva (FILACP); y además, ha participado en el staff de cirujanos plásticos de la
          Organización Miss Venezuela y como jurado y asesor de otros concursos de belleza. Desde sus inicios en la
          cirugía plástica, ha acumulado más de 500 pacientes atendidos con éxito a la fecha, ofreciendo una gama de
          más de 30 procedimientos para hombres y mujeres.`},
        ],
        extras: [
          {text: `SOCIEDAD VENEZOLANA DE CIRUGÍA PLÁSTICA`, img: '/static/img/asociacion-cirugia-plastica.png'},
          {text: 'FEDERACIÓN IBERO LATINOAMERICANA DE CIRUGÍA PLÁSTICA', img: '/static/img/federacion-ibero.png'},
        ]
      },
      teamData: {
        title: 'El Equipo',
        description: 'Profesionales altamente capacitados',
        teamMembers: [
          {
            img: '/static/img/team-1.png',
            name: 'PATRICIA ZAMBRANO',
            role: 'MÉDICO CIRUJANO',
            desc: `La doctora Patricia Zambrano Soto, es Médico Cirujano Plástico, Reconstructivo y Maxilofacial, de la 
    Universidad Central de Venezuela, egresada del Servicio de Cirugía Plástica y Reconstructiva del Hospital Militar 
    Dr. Carlos Arvelo. Miembro Activo de la Sociedad Venezolana de Cirugía Plástica, Estética, Reconstructiva y 
    Maxilofacial (SVCPREM), Miembro de la Sociedad Ibero Latinoamericana de Cirugía Plástica y Reconstructiva
     (FILACP). www.zambranopatricia.com/`
          },
          {
            img: '/static/img/team-2.png',
            name: 'CAROLINA JAIMES',
            role: 'ANESTESIÓLOGO',
            desc: `Carolina Jaimes es Médico Cirujano, graduada en la Escuela José María Vargas de la Universidad Central
     de Venezuela (UCV) en el año 2010. En el 2014 obtuvo el título de Médico Anestesiólogo en la misma casa de 
     estudios. Tiene conocimientos en el manejo de emergencias transoperatorias  por parte de la Sociedad Venezolana 
     de Anestesiología. Actualmente trabaja en la Unidad Quirúrgica San Antonio ubicada en Los Palos Grandes y cursa 
     un diplomado de medicina antienvejecimiento.`
          },
          {
            img: '/static/img/team-3.png',
            name: 'JHONNY SIMOS',
            role: 'INSTRUMENTISTA',
            desc: `Jhonny Simosa es Licenciado en enfermería, egresado de la escuela de enfermería de la Universidad Central
     de Venezuela (UCV). Especializado en el área quirúrgica como instrumentista, cuenta con una experiencia de cinco
      años, y ha ejecutado talleres de capacitación integral de salud, farmacología y dosificación de medicamentos. 
      Llevó a cabo un curso de primeros auxilios y un diplomado en técnicas quirúrgicas.`
          },
          {
            img: '/static/img/team-4.png',
            name: 'DANIELA OCHOA  ',
            role: 'ENFERMERA',
            desc: `Daniela Ochoa es Licenciada en Enfermería de la Universidad Central de Venezuela (UCV),  y a lo largo 
    de su carrera ha ejecutado pasantías en diversas áreas y hospitales. Tiene experiencia laboral como enfermera 
    instrumentista y circulante de quirófano en Nurse and Med. También ha sido enfermera del área de emergencia y 
    actualmente ejerce como enfermera de quirófano en el Centro Asistencias Quirúrgico San Antonio.`
          },
          {
            img: '/static/img/team-5.png',
            name: 'ANDREA LISA MANZINI',
            role: 'ASISTENTE PERSONAL',
            desc: `Andrea Lisa Manzini es Licenciada en Ciencias Políticas egresada de la Universidad Central de Venezuela
     (UCV). Realizó el Diplomado en Gerencia de Eventos Especiales, Ceremonial y Protocolo en la misma casa de
      estudios y el Master in Professional Protocol and Events Production Management en la Caribbean International
       University Willemstad, en Curacao. Se ha desempeñado como Asistente Administrativo en la Coordinación de
        Protocolo de la Alcaldía de Chacao y Jefa de Protocolo del Rectorado de la UCV.`
          },
        ],
      },
      placesData: {
        title: 'Instalaciones',
        description: 'Conoce nuestras instalaciones, diseñadas para dar máxima comodidad y la mejor atención médica al paciente.\n',
        places: [
          {
            title: 'TORO PARILLI',
            place: 'CONSULTORIO CARACAS',
            // videoURL: '',
            images: [
              {url: '/static/img/parilli-carousel-1.jpg'},
              {url: '/static/img/parilli-carousel-2.jpg'},
              {url: '/static/img/parilli-carousel-3.jpg'},
            ],
            preview: '/static/img/parilli-carousel-preview.jpg'
          },
          {
            title: 'CECILIP',
            place: 'CLINICA / CONSULTORIO R.D',
            // videoURL: '',
            images: [
              {url: '/static/img/cecilip-carousel-1.jpg'},
              {url: '/static/img/cecilip-carousel-2.jpg'},
            ],
            preview: '/static/img/cecilip-carousel-preview.jpg'
          },
          {
            title: 'CLINICA SAN ANTONIO',
            place: 'CLNICA CARACAS',
            videoURL: 'https://www.youtube.com/watch?v=gArO4TllX4c',
            images: [],
            preview: '/static/img/clinica-caracas-preview.jpg'
          },
          {
            title: 'HOSPEDAJE CLINICO',
            place: 'HOSPEDAJE CARACAS',
            videoURL: 'https://www.youtube.com/watch?v=3eHRfBEZ-R8',
            images: [],
            preview: '/static/img/hospedaje-preview.jpg'
          },
        ]

      }
    }
  },
  {
    id: 524,
    section: 'aboutUs',
    language: 'EN',
    options: {
      title: 'About Us',
      switchButtons: [
        {text: 'Dr. Parilli', value: 'parilli', id: 1},
        {text: 'The Team', value: 'team', id: 2},
        {text: 'Installations', value: 'places', id: 3},
      ],
      parilliData: {
        name: 'DR. GERARDO TORO PARILLI',
        role: 'Plastic Surgeon',
        text: [
          {content: ` He is a graduate of the University of Carabobo, where he obtained the title of Medical Surgeon. Subsequently
           he entered the Central University of Venezuela, where he completed his first postgraduate degree as Surgeon General
           at the University Hospital of Caracas. There he carried out scientific research and later
           he fulfilled his internships between Spain, Argentina and Brazil.`},
          {content: `His second postgraduate degree was carried out at the Dr. Carlos Arvelo Military Hospital, where he obtained the title of
           Specialist in Plastic, Reconstructive and Maxillofacial Surgery. During this period, he received training
           in burn management, reconstructive surgery after facial trauma, oncological pathologies and
           congenital; as well as in maxillofacial pathology. It is worth noting that thanks to his scientific work
           published, he was laureate with various national and international awards.`},
          {content: `Currently, Dr. Gerardo Toro Parilli is a postulant member of the Venezuelan Society of Plastic Surgery,
           Reconstructive, Aesthetic and Maxillofacial Surgery (SVCPREM), of the Ibero-Latin American Federation of Surgery
           Plastic and Reconstructive (FILACP); and in addition, he has participated in the staff of plastic surgeons of the
           Miss Venezuela Organization and as a jury and advisor for other beauty contests. From his beginnings in the
           plastic surgery, he has amassed over 500 patients successfully treated to date, offering a range of
           more than 30 procedures for men and women.`},
        ],
        extras: [
          {text: `VENEZUELAN SOCIETY OF PLASTIC SURGERY`, img: '/static/img/asociacion-cirugia-plastica.png'},
          {text: 'IBERO-LATIN AMERICAN FEDERATION OF PLASTIC SURGERY', img: '/static/img/federacion-ibero.png'},
        ]
      },
      teamData: {
        title: 'The Team',
        description: 'Highly trained professionals',
        teamMembers: [
          {
            img: '/static/img/team-1.png',
            name: 'PATRICIA ZAMBRANO',
            role: 'SURGEON',
            desc: `Dr. Patricia Zambrano Soto, is a Plastic, Reconstructive and Maxillofacial Surgeon, from the
     Central University of Venezuela, graduated from the Plastic and Reconstructive Surgery Service of the Military Hospital
     Dr. Carlos Arvelo. She is an active member of the Venezuelan Society of Plastic, Aesthetic, Reconstructive and
     Maxillofacial (SVCPREM), Member of the Ibero-Latin American Society of Plastic and Reconstructive Surgery
      (FILACP). www.zambranopatricia.com/`
          },
          {
            img: '/static/img/team-2.png',
            name: 'CAROLINA JAIMES',
            role: 'ANESTHESIOLOGIST',
            desc: `Carolina Jaimes is a Surgeon, graduated from the José María Vargas School of the Central University
      de Venezuela (UCV) in 2010. In 2014 she obtained the title of Medical Anesthesiologist in the same house of
      studies. She has knowledge in the management of transoperative emergencies by the Venezuelan Society
      of Anesthesiology. She currently works at the San Antonio Surgical Unit located in Los Palos Grandes and is studying
      a diploma in anti-aging medicine.`
          },
          {
            img: '/static/img/team-3.png',
            name: 'JHONNY SIMOS',
            role: 'INSTRUMENTALIST',
            desc: `Jhonny Simosa has a degree in Nursing, graduated from the Central University School of Nursing
      of Venezuela (UCV). Specialized in the surgical area as an instrumentalist, he has five years of experience
       years, and has carried out comprehensive training workshops on health, pharmacology and medication dosage.
       He completed a first aid course and a diploma in surgical techniques.`
          },
          {
            img: '/static/img/team-4.png',
            name: 'DANIELA OCHOA  ',
            role: 'NURSE',
            desc: `Daniela Ochoa has a degree in Nursing from the Central University of Venezuela (UCV), and throughout
     of her career, she has completed internships in various areas and hospitals. She has work experience as a nurse
     surgical scrubsman and operating room circulator at Nurse and Med. She has also been a nurse in the emergency area and
     She currently works as an operating room nurse at the San Antonio Surgical Assistance Center.`
          },
          {
            img: '/static/img/team-5.png',
            name: 'ANDREA LISA MANZINI',
            role: 'PERSONAL ASSISTANT',
            desc: `Andrea Lisa Manzini has a degree in Political Science from the Central University of Venezuela
      (UCV). She completed the Diploma in Management of Special Events, Ceremonial and Protocol in the same house as
       studies and the Master in Professional Protocol and Events Production Management at Caribbean International
        University Willemstad, in Curacao. She has served as Administrative Assistant in the Coordination of
         Protocol of the Mayor's Office of Chacao and Head of Protocol of the Rector's Office of the UCV.`
          },
        ],
      },
      placesData: {
        title: 'Installments',
        description: 'Meet our facilities, designed to provide maximum comfort and the best medical care to the patient.',
        places: [
          {
            title: 'TORO PARILLI',
            place: 'CARACAS OFFICE',
            // videoURL: '',
            images: [
              {url: '/static/img/parilli-carousel-1.jpg'},
              {url: '/static/img/parilli-carousel-2.jpg'},
              {url: '/static/img/parilli-carousel-3.jpg'},
            ],
            preview: '/static/img/parilli-carousel-preview.jpg'
          },
          {
            title: 'CECILIP',
            place: 'CLINIC / CONSULTING ROOM R.D',
            // videoURL: '',
            images: [
              {url: '/static/img/cecilip-carousel-1.jpg'},
              {url: '/static/img/cecilip-carousel-2.jpg'},
            ],
            preview: '/static/img/cecilip-carousel-preview.jpg'
          },
          {
            title: 'SAN ANTONIO CLINIC',
            place: 'CARACAS CLINIC',
            videoURL: 'https://www.youtube.com/watch?v=gArO4TllX4c',
            images: [],
            preview: '/static/img/clinica-caracas-preview.jpg'
          },
          {
            title: 'CLINICAL ACCOMMODATION',
            place: 'CARACAS ACCOMMODATION',
            videoURL: 'https://www.youtube.com/watch?v=3eHRfBEZ-R8',
            images: [],
            preview: '/static/img/hospedaje-preview.jpg'
          },
        ]

      }
    }
  },
  {
    id: 1340,
    section: 'beforeAfter',
    language: 'EN',
    options: {
      title: 'Before and After',
      gender: {
        male: {
          view: 'male',
          options: [
            {text: 'Laser Liposuction', id: 1, value: 1},
            {text: 'Gynecomastia', id: 2, value: 2},
            {text: 'Nose surgery', id: 3, value: 3},
            {text: 'ear surgery', id: 4, value: 4},
          ]
        },
        female: {
          view: 'female',
          options: [
            {text: 'Gluteoplasty', id: 5, value: 5},
            {text: 'abdominal surgery', id: 6, value: 6},
            {text: 'Laser Liposuction', id: 1, value: 1},
            {text: 'Breast Augmentation', id: 2, value: 2},
            {text: 'Breast Reduction', id: 7, value: 7},
            {text: 'Renuvion', id: 8, value: 8},
            {text: 'Nose Surgery', id: 3, value: 3},
            {text: 'Face Lifting ', id: 9, value: 9},
            {text: 'eyelid surgery', id: 10, value: 10},
          ]
        }
      }
    }
  },
  {
    id: 510,
    section: 'onlineConsult',
    language: 'EN',
    options: {
      title: 'Online Consult',
      buttonReportText: 'Report Error',
      modal: {
        preview: {
          label: 'Email',
          placeholder: 'Example@123.com',
          actionButton: 'Next'
        },
        reportError: {
          title: 'IF YOU HAVE HAD ANY PROBLEM WITH OUR ONLINE CONSULTATION, WE WOULD THANK YOU FOR YOUR HELP TO SOLVE IT BY FILLING OUT THIS FORM.',
          name: {text: 'Name'},
          email: {text: 'Email'},
          country: {text: 'Country'},
          comeFrom: {
            text: 'From which computer did you encounter problems?',
            options: [
              {text: 'Computer', value: 1, id: 1},
              {text: 'Tablet', value: 2, id: 2},
              {text: 'Smartphone', value: 3, id: 3},
            ]
          },
          model: {text: 'What is the model/type of your equipment?'},
          browser: {text: 'What browser do you use?'},
          url: {text: 'Which Toro Parilli web address are you accessing?'},
          timeOfError: {
            text: 'At what point did you get a system error?',
            options: [
              {text: 'When I enter the page, I can\'t find it.', value: 0, id: 1},
              {text: 'When trying to access the online consultation', value: 1, id: 2},
              {text: 'When entering with my email', value: 2, id: 3},
              {text: 'In an internal step when filling the data', value: 3, id: 4},
              {text: 'Other please describe', value: 4, id: 5},
            ]
          },
          file: {text: 'If you can add a screenshot of your problem it can always help', buttonText: 'Choose'},
          description: {text: 'Thank you for your report and use this space to describe the problem with the online consultation.'},
          sendButton: {text: 'Send'},
        },
      },
      sideContent: `<p>
      Filling out this form, and answering your questions, will allow Dr. Toro Parilli to make an initial evaluation of your case, so that you receive a diagnosis and the corresponding estimate.
        <br>
        <br>
        In order to make an accurate diagnosis, it is important that you provide all the requested information as faithfully as possible.
        <br>
        <br>
        Approximate time to complete the online consultation: 10 minutes.
        <br>
        <br>
        • Overall: $50.00
        <br>
        <br>
        • Only for residents in Venezuela: Bs. 242.00
        <br>
        <br>
        If you require help in the process, please write to: atencionalcliente@toroparilli.com
        <br>
        <br>
        Note: The information and images provided are strictly confidential.
        </p>
      `
    }
  },
  {
    id: 1234,
    language: 'ES',
    section: 'procedures',
    options: {
      title: 'Procedimientos',
      sectionsList: {
        corporal: 'Cirugia Corporal',
        facial: 'Cirugia Facial',
        treatments: 'Tratamientos'
      },
      procedures: [
        {
          name: 'Aumento de pectorales',
          id: 1,
          label: 'male',
          group: 'corporal',
          detail: `<p>Procedimiento mediante el cual se colocan implantes dise&ntilde;ados para el m&uacute;sculo pectoral, con la finalidad de proyectar y mejorar la forma del m&uacute;sculo, d&aacute;ndole un resultado masculino.</p>

<p>El ancho del t&oacute;rax, as&iacute; como la proyecci&oacute;n y forma muscular representan el &iacute;mpetu varonil. Algunos individuos presentan desarrollo muscular defectuoso del m&uacute;sculo pectoral y esta zona no crece en forma adecuada.</p>

<p>En pacientes con deformidades tor&aacute;cicas leves, como pecho excavado y ausencia cong&eacute;nita de m&uacute;sculos pectorales, la colocaci&oacute;n de implantes pectorales puede resultar &uacute;til para corregirlas.</p>

<p>As&iacute; mismo, para algunos hombres que trabajan la musculatura de su cuerpo a trav&eacute;s del ejercicio resulta frustrante ver que pese al entrenamiento y las rutinas con pesas, los m&uacute;sculos pectorales no se desarrollan como se desea.</p>

<p><strong>Candidatos:</strong></p>

<p><strong>Hombres que:</strong></p>

<p>&bull; tienen poco desarrollo de los m&uacute;sculos pectorales.</p>

<p>&bull; presentan malformaciones cong&eacute;nitas como pecho excavado o ausencia de m&uacute;sculos pectorales.&nbsp;</p>

<p>&bull; a pesar de realizar ejercicios para aumentar los pectorales, no consiguen resultados suficientes.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Aumento de pectorales&nbsp;</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;Entre 1 y 2 horas m&aacute;ximo.</p>

<p><strong>Anestesia:</strong>&nbsp;General.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatoria.</p>

<p><strong>S&iacute;ntomas postoperatorios:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados).</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas e infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; Una semana para reintegrarse al trabajo</p>

<p>&bull; De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; Tres meses para resoluci&oacute;n completa y para realizar cualquier tipo de ejercicio o fuerza.</p>

<p><strong>Duraci&oacute;n de resultados:</strong>&nbsp;Permanentes, siempre y cuanto se mantenga un peso estable.</p>
`,
          questions: [],
          images: []
        },
          {
            name: 'Gluteoplastia',
            id: 2,
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
            detail: `<p>La gluteoplastia es el procedimiento mediante el cual se moldean las nalgas en caso de tener poco desarrollo de su musculatura, cúmulos de grasa desagradables en sus alrededores, trastornos adquiridos o malformaciones congénitas.</p><p>Las dos únicas alternativas seguras para realizar este procedimiento son:</p><p>Lipoinyección. Consiste en infiltración de grasa propia del paciente. La grasa obtenida de distintas partes del cuerpo, como abdomen y muslos, se prepara y enriquece con factores de crecimiento y luego se inyecta en los glúteos para mejorar forma y volumen.</p><p><strong>Implantes glúteos:</strong> prótesis de silicona diseñadas para mejorar el volumen y la forma de los glúteos.</p><p><strong>Candidatas:&nbsp;</strong></p><p>Mujeres con:</p><p>• poco desarrollo de los músculos glúteos.</p><p>• cúmulos de grasa en los alrededores de los glúteos que ocasionan deformidad o aspecto estético.</p><p>• trastornos adquiridos, como accidentes, quemaduras, etc.</p><p>• malformaciones congénitas, y</p><p>• atletas que a pesar de realizar ejercicios para aumentar los glúteos no consiguen resultados suficientes.</p><p>&nbsp;</p><p><strong>Nombre del procedimiento:</strong> GLUTEOPLASTIA</p><p><strong>Duración:</strong> De 2 a 3 horas, dependiendo de los elementos específicos del caso.</p><p><strong>Anestesia:</strong> General o peridural.</p><p><strong>Hospitalización:</strong> Ambulatoria o puede requerir una noche de hospitalización.</p><p><strong>Síntomas post-operatorios:</strong> Inflamación, dolor moderado, equimosis (morados).</p><p><strong>Riesgos:</strong> Dolor, hematomas, infección, lesión cutánea, asimetrías, trombosis.</p><p><strong>Recuperación:</strong></p><p>• Una semana para reintegrarse al trabajo.</p><p>• De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p><p>• Tres meses de resolución completa para realizar cualquier tipo de ejercicio o fuerza.</p><p><strong>Duración de resultados:</strong> permanentes, siempre y cuanto se mantenga un peso estable.</p>`,
            label: 'male',
            group: 'corporal',
            images: []
          },
          {
            name: 'Cirugia del abdomen',
            id: 3,
            questions: [
              {title: '¿Qué tipo de anestesia recibiré?', id: 467851, text: `Anestesia peridural con sedación o con anestesia peridural más general, o solamente general.`},
              {title: '¿Qué es la terapia analgésica postoperatoria?', id: 12345179, text: `Es un tipo de anestesia que se coloca desde la sala de cirugía y que permite al paciente no experimentar dolores o molestias al despertar. La anestesia, que es colocada también por el anestesiólogo, puede mantenerse por algunos días más, según lo amerite el caso.`},
              {title: '¿Qué cuidados postoperatorios debo tener?', id: 12352437, text: `Usar la faja por lo menos durante cuatro semanas después de la operación. Realizar las terapias postoperatorias que el médico sugiera. Guardar el debido reposo. Aun cuando usted se sentirá bien al día siguiente de la cirugía, deberá evitar cargar peso durante unos quince días después de la operación. Procurar caminar algo encorvado durante una semana para evitar que la cicatriz sea objeto de tensión. Cambiar constantemente de posición en la cama desde la salida de pabellón, movilizar los pies, flexionar las piernas. Estas maniobras aumentarán la circulación sanguínea de las piernas. Cubrir el área operada al momento de tomar un baño. Cuidar la herida que queda luego del retiro de los puntos, a los diez días de la operación. Es posible realizar ejercicios de caminata a la tercera semana. Sin embargo, deberá esperar hasta la cuarta o la quinta semana para levantar pesos.`},
              {title: '¿Puedo fumar antes o después de la cirugía? ¿Qué medicamentos no debo consumir?', id: 12352454897834563467, text: `Usted debe evitar el cigarrillo por lo menos diez días antes de la cirugía y quince días después de ésta. La nicotina es un potente vasoconstrictor (obstruye los vasos sanguíneos) que acabará arruinando su cirugía y dificultando la cicatrización y, en algunos casos, también podría acarrear otras complicaciones. Sea precavido y cuide su cirugía. No deberá ingerir aspirina o medicamentos similares antes de la cirugía. Si está recibiendo algún tratamiento deberá notificarlo al médico.`},
              {title: '¿Perderé la cirugía si decido salir embarazada?', id: 1234537791, text: `El resultado puede ser preservado siempre y cuando no se exceda en su peso durante la gestación.`},
              {title: '¿En qué consiste la cirugía abdominal?', id: 1234537792, text: `Se elimina una gran cantidad de la piel y de la grasa que están en exceso o que están flácidas. Durante la cirugía, los músculos abdominales (o los llamados “cuadritos”, que en los atletas están bien definidos) se suturan, juntándolos en la parte medial para que ganen fuerza y tonicidad. Es así como la cintura va a resultar más curva, lo que producirá en el abdomen la sensación de haber realizado ejercicios durante largo tiempo. El ombligo es aprovechado y situado en la misma posición que estaba anteriormente.`},
              {title: '¿Cuántos kilos rebajaré con la cirugía?', id: 1234537793, text: `Naturalmente, perderá algunos kilos, pero lo más determinante será que ganará una figura armónica con un abdomen bien proporcionado con respecto al tronco y a las extremidades.`},
              {title: '¿Cuánto se demora realizar mi cirugía?', id: 12345377931, text: `Normalmente esta cirugía demora entre dos y tres horas. Va a depender de la magnitud del tejido a ser removido.`},
              {title: '¿Cómo serán las cicatrices?', id: 12345377932, text: `Según las características del paciente se efectuará una abdominoplastia normal o una mini abdominoplastia. Se le informará sobre la longitud final de la cicatriz, que vendrá determinada por las características del abdomen.`},
              {title: '¿Será visible la cicatriz?', id: 12345377933, text: `Actualmente, la cicatriz que deja la intervención es fácilmente disimulable, puesto que queda dentro del bikini. Son cicatrices muy discretas. Imagine una cicatriz de cesárea algo más alargada hacia los lados. También podemos eliminar con esta técnica aquellas cicatrices de cesáreas o de otras cirugías abdominales que hayan sido realizadas anteriormente.`},
            ],
            detail: `<p>El abdomen es una de las zonas del cuerpo donde se acumula la grasa con m&aacute;s facilidad. Los embarazos, seguidos a menudo de distensi&oacute;n de la musculatura abdominal, variaciones de peso y desordenes hormonales, contribuyen a la formaci&oacute;n de un abdomen poco est&eacute;tico o con deformidades. La abdominoplastia ayuda a recuperar un vientre plano y a delinear la silueta corporal.</p>
<p>La pared abdominal est&aacute; constituida b&aacute;sicamente por tres elementos: la piel, el tejido celular subcut&aacute;neo, con la grasa subyacente, y la capa muscular. La afectaci&oacute;n de cualquiera de estos tres elementos llevar&aacute; a la formaci&oacute;n de una deformidad del abdomen que, seg&uacute;n cada caso, requerir&aacute; un tratamiento espec&iacute;fico.</p>

<p><strong>Candidatas:</strong></p>

<p>&bull; Mujeres que, estando cercanas a su peso ideal, presentan acumulaci&oacute;n de grasa en el abdomen y piel fl&aacute;cida que no responden a dieta ni ejercicio.</p>

<p>&bull; Mujeres con p&eacute;rdidas masivas de peso.</p>

<p>&bull; Mujeres que, a causa de embarazos, presentan dilataci&oacute;n irreversible de la piel y de la musculatura del abdomen.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;ABDOMINOPLASTIA</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De dos a cuatro horas (dependiendo de la extensi&oacute;n).</p>

<p><strong>Anestesia:</strong>&nbsp;General o peridural.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatoria o puede requerir una noche de hospitalizaci&oacute;n.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados), sangramiento leve a trav&eacute;s del drenaje.</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas, infecci&oacute;n, lesi&oacute;n cut&aacute;nea.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; Entre 2 y 3 semanas para reintegrarse al trabajo.</p>

<p>&bull; Entre 3 y 4 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; A los tres meses resoluci&oacute;n completa para realizar cualquier tipo de ejercicio o fuerza.</p>

<p><strong>Duraci&oacute;n de los resultados:</strong>&nbsp;Permanentes, siempre y cuando se mantenga un peso estable.</p>`,
            label: 'male',
            group: 'corporal',
            images: []
          },
          {
            name: 'Liposuccion laser',
            id: 4,
            questions: [
              {title: '¿Cómo es la cicatriz que deja la lipoescultura?', id: 1234513668, text: `Normalmente, las pequeñas incisiones que se realizan no superan los cinco milímetros y desaparecen casi en su totalidad a los tres meses. Sin embargo, adicionalmente se toma la previsión de realizar las incisiones en sitios estratégicos (pliegues, surcos) con la finalidad de que puedan ser disimuladas en su totalidad.`},
              {title: '¿Cuál es el período de hospitalización?', id: 1233454567, text: `Normalmente es una cirugía ambulatoria. Si se hace con otra cirugía de gran tamaño es recomendable que el paciente sea hospitalizado.`},
              {title: '¿Cuáles son las áreas que pueden ser tratadas?', id: 123557908651, text: `• Papada

              • Brazos
              
              • Región abdominal
              
              • Cintura
              
              • Espalda
              
              • Cara externa del muslo (“revolveras”)
              
              • Cara anterior del muslo
              
              • Glúteos.`},
              {title: '¿Cuándo debo realizar la autodonación de sangre?', id: 123, text: `La autodonación consiste en extraer una cantidad pequeña de sangre al paciente, preferiblemente antes del tercer día previo a la cirugía, para que los glóbulos rojos extraídos hayan sido repuestos para el momento de la operación. Su sangre se guarda en el banco de sangre de la clínica y se reinyecta en su organismo en el postoperatorio inmediato. Esta técnica, además de permitir reponer el volumen que pudiera perder con la cirugía, promueve una recuperación más rápida y sin desbalance del volumen de sangre. Utilizar su propia sangre elimina los riesgos de contraer enfermedades contagiosas.`},
              {title: '¿Tener hijos después de la operación me hará perder sus efectos?', id: 345, text: `Los resultados pueden ser preservados después de la gestación, siempre y cuando su peso sea controlado por un especialista. Si no desarrolla muchas estrías o la flacidez no es mayor, las formas obtenidas con la lipoescultura se mantienen.`},
              {title: '¿Es utilizada alguna cura?', id: 676, text: `Cuando se trata de cirugías en las que se extrajo una cantidad grande de grasa, es recomendable usar una faja durante cuatro a seis semanas tras la intervención.`},
              {title: '¿Es peligrosa la lipoaspiración?', id: 8, text: `Raramente la lipoaspiración trae problemas. El peligro no es mayor ni menor que en otras cirugías, siempre y cuando sea realizada en atención a todas las normas técnicas aplicables. Hay que tener cuidado de no extraer grandes volúmenes de grasa. Como criterio establecido a nivel internacional por los cirujanos plásticos, se recomienda no extraer más de cinco a siete por ciento del peso corporal. En la actualidad, para cirugías en las que haya que retirar grandes volúmenes, se aconseja hacer una autodonación de sangre.`},
              {title: '¿Es muy doloroso el postoperatorio?', id: 0, text: `Generalmente no. El dolor se controla con analgésicos comunes.`},
              {title: '¿En cuánto tiempo observaré los resultados?', id: 65, text: `Toda cirugía pasa por una fase variable de desinflamación. Depende del paciente y de las zonas que fueron tratadas. Durante los 30 primeros días del postoperatorio es posible que el paciente no perciba en su totalidad los resultados. Después de este período comienza una desinflamación de la zona. A los tres meses podrá ver ya un excelente resultado. Recomendamos realizar terapias postoperatorias (drenajes linfáticos y/o ejercicios), orientadas a modelar y disminuir la inflamación de los tejidos.`},
              {title: '¿Cuántos kilos voy a rebajar con la cirugía?', id: 34 , text: `Más que hablar de perder kilos, debemos hablar de disminuir tallas. Normalmente el paciente puede perder entre cuatro a seis kilos, pero es realmente en la disminución de las tallas de pantalón, sostén, camisas, etc. en donde se nota el cambio.`},
              {title: '¿Cuánto demora el acto quirúrgico?', id: 675 , text: `Esto dependerá de la extensión de las áreas a tratar. Puede demorar entre una y tres horas, en promedio.`},
              {title: '¿Cuándo podré bañarme?', id: 1234 , text: `Al día siguiente ya podrá tomar un baño. Si el procedimiento ha sido hecho en conjunto con otra cirugía entonces deberá consultar al médico.`},
              {title: '¿Qué tipo de anestesia se aplica?', id: 5467 , text: `La mayoría de los casos se realizan con anestesia general, de esta manera se obtienen mejores resultados.`},
            ],
            detail: `<p>La eliminaci&oacute;n de los excesos de grasa es un reto que la cirug&iacute;a est&eacute;tica vence cada vez con m&aacute;s facilidad.</p>

<p>La liposucci&oacute;n l&aacute;ser o Laserlip&oacute;lisis&nbsp; es actualmente el mecanismo de acci&oacute;n m&aacute;s utilizado a nivel mundial para la remoci&oacute;n de grasa localizada o liposucci&oacute;n general asistida con l&aacute;ser. Su finalidad es emulsificar la grasa y lograr su extracci&oacute;n de forma f&aacute;cil y segura, sin da&ntilde;ar tejidos adyacentes y en muy corto tiempo.</p>

<p>La gran ventaja del procedimiento est&aacute; en que combina la potencia del l&aacute;ser para moldear &aacute;reas del cuerpo con uniformidad, sin sangrado y con excelente retracci&oacute;n de la piel. Esto permite la recuperaci&oacute;n en muy corto plazo debido a que no requiere anestesia general para su realizaci&oacute;n.</p>

<p><strong>Candidatas:</strong></p>

<p>&bull; Mujeres que pese a estar dentro de su peso ideal, tienen dep&oacute;sitos de grasa en &aacute;reas localizadas y quieren eliminarlos para mejorar su apariencia f&iacute;sica.&nbsp;</p>

<p>&bull; Mujeres con sobrepeso, sin obesidad m&oacute;rbida, que est&eacute;n en r&eacute;gimen diet&eacute;tico.&nbsp;</p>

<p>&bull; Mujeres que han sido sometidas a cirug&iacute;as bari&aacute;tricas para perder peso y han alcanzado su peso ideal.</p>

<p>&bull; No debe realizarse en personas con obesidad m&oacute;rbida. En esos casos se hace primero una cirug&iacute;a bari&aacute;trica para perder peso y luego la cirug&iacute;a para mejorar el contorno corporal.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Lipoescultura L&aacute;ser</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De 1 a 4 horas, dependiendo de la extensi&oacute;n del procedimiento.</p>

<p><strong>Anestesia:</strong>&nbsp;General</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio generalmente. Puede requerir un d&iacute;a de hospitalizaci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; 5 d&iacute;as para regresar al trabajo.</p>

<p>&bull; De 1 a 2 semanas para actividades m&aacute;s fuertes y deportes.</p>

<p>&bull; Cuatro semanas para resoluci&oacute;n total.</p>

<p><strong>Duraci&oacute;n de los resultados:</strong>&nbsp;Pueden ser permanentes si se mantiene un r&eacute;gimen alimenticio sano, acompa&ntilde;ado de ejercicios.</p>

<p><strong>Descripci&oacute;n tratamiento:</strong></p>

<p>Una sonda que emite ondas de alta frecuencia produce la licuaci&oacute;n de la grasa, la cual se retira luego con una succi&oacute;n a baja presi&oacute;n.</p>

<p>Cuando la sonda se pasa en la capa de grasa superficial ayuda a mejorar la celulitis. El procedimiento facilita la aspiraci&oacute;n de zonas fibrosas como los rollitos de la espalda, pantal&oacute;n de montar y en reoperaciones.</p>

<p>Produce una mejor retracci&oacute;n de la piel, sobre todo en &aacute;reas de flaccidez: brazos, cara interna de muslos y abdomen de mujeres mayores.</p>

<p>Produce menos p&eacute;rdida de sangre y menos hematomas, porque no lesiona vasos.</p>

<p>Mejora el &ldquo;poceado&rdquo; de la celulitis por un efecto regenerador del col&aacute;geno de la dermis.</p>

<p><strong>Equipo:</strong></p>

<p>&bull; Tipo de laser: DUO laser Diodo</p>

<p>&bull; Modelo: Siemens SixLaserDuo 9-20</p>

<p>&bull; Longitud de onda: 808nm y 980nm</p>

<p>&bull; Potencia M&aacute;xima: 30W</p>

<p>&bull; Tasa de Repetici&oacute;n: 0.6 Hz-10k Hz</p>

<p>&bull; Sistema de trasmisi&oacute;n: Fibra &oacute;ptica 400um- 600um</p>
`,
            label: 'male',
            group: 'corporal',
            images: [
              {url: '/static/img/lipolaser-1.jpg'}
            ]
          },
          {
            name: 'Ginecomastia',
            id: 5,
            label: 'male',
            group: 'corporal',
            detail: `<p>Es el procedimiento que se lleva a cabo para eliminar el tejido glandular mamario en hombres, cuando este est&aacute; desarrollado de una manera patol&oacute;gica.&nbsp;</p>

<p>El tejido se puede eliminar a trav&eacute;s de dos t&eacute;cnicas, la lipoaspiraci&oacute;n, o la recepci&oacute;n del tejido glandular a trav&eacute;s de una peque&ntilde;a cicatriz, normalmente en la mitad inferior de la aureola o la aureola completa cuando hay que recoger piel por haber excedente.</p>

<p><strong>Candidatos:</strong></p>

<p>&bull; Hombres a partir de los 16 a&ntilde;os, que tengan un &iacute;ndice de masa corporal normal (entre 25 y 30), es decir, que no tengan sobrepeso u obesidad.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Ginecomastia</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De 1 a 2 horas.</p>

<p><strong>Anestesia:</strong>&nbsp;General.&nbsp;</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatoria. Se puede asociar con lipoescultura. Dependiendo del caso pudiera ameritar una noche de hospitalizaci&oacute;n</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Edema o inflamaci&oacute;n leve. Peque&ntilde;o dolor o molestia</p>

<p><strong>Riesgos:</strong>&nbsp;Hemorragia. Hematoma. Seroma (c&uacute;mulo de l&iacute;quido). Infecci&oacute;n.&nbsp;</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>Depende de la t&eacute;cnica.&nbsp;</p>

<p>&bull; Lipoescultura: Recuperaci&oacute;n para hacer ejercicios en 15 d&iacute;as.</p>

<p>&bull; Resecar piel: Recuperaci&oacute;n para hacer ejercicios en 21 d&iacute;as o un mes.&nbsp;</p>

<p><strong>Duraci&oacute;n de los resultados:</strong>&nbsp;Si la causa que ocasiona la ginecomastia es corregida antes de la cirug&iacute;a, los resultados son permanentes. De lo contrario, puede volver a presentarse.&nbsp;&nbsp;</p>

<p>Las causas de la ginecomastia pueden ser: Sobrepeso u obesidad, problemas hep&aacute;ticos, medicamentos que toma el paciente, trastornos hormonales o idiop&aacute;ticos, estos &uacute;ltimos se refieren a cuando la causa es desconocida, esto se presente en un 30 o 65% de los casos. \f</p>

<p>&bull; Aumento de pantorrillas</p>

<p>Para poder contar con una buena apariencia en las piernas es necesario que todas sus partes se vean torneadas y con m&uacute;sculos definidos, sin embargo, las pantorrillas suelen ser una zona a la que no se le presta mucha atenci&oacute;n, a pesar de que su falta de desarrollo crea un aspecto antiest&eacute;tico.</p>

<p>Con este procedimiento quir&uacute;rgico el paciente puede aumentar el volumen de los m&uacute;sculos de la pantorrilla mediante a la colocaci&oacute;n de implantes que se adecuen a la anatom&iacute;a del paciente y que logren dar un aspecto m&aacute;s torneado a las piernas.</p>

<p><strong>Candidatos:</strong></p>

<p>&bull; Hombres con poco desarrollo de los m&uacute;sculos de la pantorrilla.</p>

<p>&bull; Hombres que, a pesar de realizar ejercicios para aumentar los m&uacute;sculos de la pantorrilla no consiguen resultados suficientes.</p>

<p>&bull; Hombres con malformaciones cong&eacute;nitas.&nbsp;</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;AUMENTO DE PANTORRILLAS&nbsp;</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;Entre 1 y 2 horas.&nbsp;</p>

<p><strong>Anestesia:</strong>&nbsp;General o peridural.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatoria.</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados).</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas e infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:&nbsp;</strong></p>

<p>&bull; 1 semana para reintegrarse al trabajo</p>

<p>&bull; 2 a 3 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; 3 meses resoluci&oacute;n completa para realizar cualquier tipo de ejercicio o fuerza.</p>
`,
            questions: [],
            images: [
              {url: '/static/img/ginecomastia-1.jpg'},
              {url: '/static/img/ginecomastia-2.jpg'},
              {url: '/static/img/ginecomastia-3.jpg'},
            ]
          },
          {
            name: 'Aumento de pantorrillas',
            detail: `<p>Para poder contar con una buena apariencia en las piernas es necesario que todas sus partes se vean torneadas y con m&uacute;sculos definidos, sin embargo, las pantorrillas suelen ser una zona a la que no se le presta mucha atenci&oacute;n, a pesar de que su falta de desarrollo crea un aspecto antiest&eacute;tico.</p>

<p>Con este procedimiento quir&uacute;rgico el paciente puede aumentar el volumen de los m&uacute;sculos de la pantorrilla mediante la colocaci&oacute;n de implantes que se adecuen a la anatom&iacute;a del paciente y que logren dar un aspecto m&aacute;s torneado a las piernas.</p>

<p><strong>Candidatas:</strong></p>

<p>? Mujeres con poco desarrollo de los m&uacute;sculos de la pantorrilla</p>

<p>? Mujeres que, a pesar de realizar ejercicios para aumentar los m&uacute;sculos de la pantorrilla, no consiguen resultados suficientes.</p>

<p>? Mujeres con malformaciones cong&eacute;nitas.&nbsp;</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;AUMENTO DE PANTORRILLAS&nbsp;</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;Entre 1 y 2 horas.&nbsp;</p>

<p><strong>Anestesia:</strong>&nbsp;General o peridural.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp; Ambulatoria.</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados).</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas e infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; 1 semana para reintegrarse al trabajo.</p>

<p>&bull; 2 a 3 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; Tres meses resoluci&oacute;n completa para realizar cualquier tipo de ejercicio o fuerza.</p>
`,
            questions: [],
            id: 6,
            label: 'male',
            group: 'corporal',
            images: []
          },
          {
            name: 'Cirugia de nariz',
            id: 7,
            label: 'male',
            group: 'facial',
            detail: `<p>Intervenci&oacute;n quir&uacute;rgica destinada a la correcci&oacute;n de deformaciones nasales mediante la modificaci&oacute;n de su forma, lo que conlleva a una mejora del equilibrio y la armon&iacute;a facial.</p>

<p>Cada rinoplastia es un caso diferente que debe evaluarse con detenimiento. No se trata &uacute;nicamente de reducir o aumentar el tama&ntilde;o de la nariz, sino de adaptarlo a las facciones y caracter&iacute;sticas propias de la persona. En este tipo de cirug&iacute;a est&eacute;tica es especialmente importante el di&aacute;logo con el paciente para contrastar sus deseos y perspectivas con las posibilidades de mejora que ofrece la intervenci&oacute;n.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres inconformes con el aspecto de su nariz.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Rinoplastia</p>

<p><strong>Tiempo de la cirug&iacute;a:</strong>&nbsp;De 1 a 3 horas, dependiendo del caso.</p>

<p><strong>Tipo de anestesia:</strong>&nbsp;General.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>Complicaciones (poco frecuentes):</strong>&nbsp;Sangramientos, infecci&oacute;n, necrosis, asimetr&iacute;a.</p>

<p><strong>Tiempo de recuperaci&oacute;n:</strong>&nbsp;</p>

<p>&bull; De 3 a 12 d&iacute;as para volver al trabajo.</p>

<p>&bull; De 4 a 6 semanas para realizar todo tipo de actividad.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;dolor leve, sangrado leve las primeras 24 horas, inflamaci&oacute;n y edema en algunos pacientes alrededor del &aacute;rea (ojos y nariz).</p>

<p><strong>Resultados:</strong>&nbsp;Los resultados definitivos se observan a partir de los seis meses.</p>
`,
            questions: [
              {title: '¿A qué edad es posible operarse?', id: 123, text: `Cuando se ha terminado el proceso de osificación de los huesos de la cara, normalmente entre los 15 y los 17 años. No obstante siempre es mejor esperar a la mayoría de edad antes de tomar la decisión de operarse.`},
              {title: '¿Cuándo se ve el resultado definitivo?', id: 435, text: `Al retirar el yeso a los diez días, la nariz tendrá una forma correcta y lo suficientemente buena para hacer una vida totalmente normal. Pero el resultado definitivo en lo que a detalles se refiere precisará de un tiempo mayor, por lo general unos seis meses para lograr la apariencia final.`},
              {title: '¿Podrá el paciente respirar por la nariz?', id: 678, text: `No lo es. En general no se precisan analgésicos por más de tres días.`},
              {title: '¿Qué cuidados post-operatorios debo que seguir?', id: 789, text: `El post-operatorio no es doloroso, sin embargo se indican analgésicos anti-inflamatorios. Si tiene ganas de estornudar, hágalo con la boca abierta, dejando salir el aire libremente. En el momento de retirar el yeso, los edemas y hematomas visibles ya habrán desaparecido y la nariz se encontrará en unas condiciones lo suficientemente buenas como para que el paciente pueda realizar su vida con normalidad. Sin embargo, el aspecto estético definitivo deberá seguir una evolución que llevará un tiempo no inferior a los seis meses. Se trata de una evolución lenta y progresiva que puede incluso pasar desapercibida. Sin embargo, hay que insistir en su gran importancia para el resultado definitivo. Se colocaran, además, adhesivos directamente en la piel para controlar la inflamación. Se deberán usar por tres semanas`},
              {title: '¿Qué riesgos entraña la operación?', id: 613, text: `No lo es. En general no se precisan analgésicos por más de tres días.`},
              {title: '¿Puedo escoger la nariz que deseo?', id: 864, text: `No. Ningún cirujano plástico, por muy experto que sea, puede inferir al 100% cómo quedará la nariz luego de la cirugía. Del mismo modo, tampoco debemos confiar en que un computador, por medio de una simulación fotográfica, nos indicará exactamente cómo será la futura nariz. La estructura física de la cara y las proporciones del mentón, la frente, etc. son usadas por el cirujano para la planificación quirúrgica. Nuevamente, insistimos en que la relación médico-paciente es, sin duda alguna, pieza clave para direccionar el plan quirúrgico.`},
              {title: '¿Se puede tomar el sol?', id: 7543, text: `Si en su caso tiene cicatriz en la base de la nariz no debe recibir sol al menos por un mes. De igual manera si persisten pequeños morados en las zonas alrededor de la nariz debe alejarse del sol hasta que estos hayan desaparecido por completo.`},
              {title: '¿Será posible usar lentes?', id: 125, text: `Aunque no sea visible, el edema provocado por la operación persiste largo tiempo. Esto se nota usando gafas porque dejan una marca profunda en el punto de apoyo sobre la nariz. No existe una contraindicación, pero sí una recomendación de no llevarlas de forma continua durante los dos primeros meses después de la intervención. Pueden usarse si se va reposando de vez en cuando dejando el tiempo necesario para que la marca se recupere.`},
            ],
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
          {
            name: 'Tratamiento de arrugas',
            id: 8,
            label: 'male',
            detail: `<p>Es una t&eacute;cnica de rejuvenecimiento facial para la restauraci&oacute;n de vol&uacute;menes y relleno de arrugas y/o l&iacute;neas de expresi&oacute;n, usando tu propia grasa corporal, es decir, con una sustancia compatible con tu organismo que no provoca toxicidad, alergias, ni rechazo.</p>

<p>La lipoinyecci&oacute;n es un procedimiento m&iacute;nimamente invasivo, poco traum&aacute;tico, indoloro, sin cortes ni cicatrices, que nos permite &ldquo;esculpir&rdquo; el rostro, mejorar la flacidez y conseguir un aspecto muy mejorado y rejuvenecido.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres a quienes el envejecimiento natural ha dejado secuelas evidentes en la cara y el cuello, provocando surcos y pliegues que hacen que la expresi&oacute;n pierda definici&oacute;n.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Lipoinyecci&oacute;n facial</p>

<p><strong>Duraci&oacute;n del procedimiento:</strong>&nbsp;30 min a 1 hora.</p>

<p><strong>Anestesia:</strong>&nbsp;Local.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>Riesgos:</strong>&nbsp;Sangramiento, inflamaci&oacute;n, equimosis (morados) en la zona de inyecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; De 1 a 2 d&iacute;as para regresar al trabajo.</p>

<p>&bull; Una semana para resoluci&oacute;n completa.</p>

<p>&bull; Resultados definitivos a los siete d&iacute;as.</p>
`,
            questions: [
              {title: '¿A quién va dirigida la lipotransferencia facial?', id: 1234789023, text: `Indicada para ambos sexos; normalmente a partir de los 40 años. Precisa un cuidadoso análisis individual fisonómico para evaluar íntegramente el conjunto de los rasgos.`},
              {title: '¿Cuánto duran los efectos?', id: 789088456, text: `El efecto, tanto en las arrugas de expresión como en los volúmenes suele durar varios años.`},
            ],
            group: 'facial',
            images: []
          },
          {
            name: 'Cirugia de parpados',
            id: 9,
            detail: `<p>Consiste en resecar excesos de piel y bolsas de grasa alrededor de los p&aacute;rpados. Se realiza tanto en p&aacute;rpados superiores como en inferiores.</p>

<p><strong>Candidatas:</strong></p>

<p><strong>Mujeres de cualquier edad con:</strong></p>

<p>&bull; bolsas bajo los ojos (ojeras),&nbsp;</p>

<p>&bull; exceso de piel en los p&aacute;rpados,&nbsp;</p>

<p>&bull; dificultad para abrir los ojos completamente y mirada triste o cansada.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Blefaroplastia</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De una a dos horas, dependiendo de si se operan los cuatro p&aacute;rpados a la vez o s&oacute;lo los superiores o los inferiores.</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Inflamaci&oacute;n, enrojecimiento y sangrado leve del &aacute;rea. Dolor leve las primeras 24 Horas.</p>

<p><strong>Riesgos:</strong>&nbsp;Sangramiento, infecci&oacute;n, cicatriz antiest&eacute;tica (muy raro), resecci&oacute;n incompleta de las bolsas.</p>

<p><strong>Recuperaci&oacute;n:</strong>&nbsp;Una semana para regresar al trabajo.</p>

<p><strong>Duraci&oacute;n de los resultados:</strong>&nbsp;Aproximadamente 10 a&ntilde;os, dependiendo de la piel del paciente.</p>
`,
            questions: [
              {title: '¿Qué medicamentos debe evitar antes y después de la cirugía?', id: 1, text: `Debe evitar ingerir anticoagulantes –aspirina, vitamina E`},
              {title: '¿Cuándo podré volver al trabajo?', id: 2, text: `Normalmente entre el quinto y el séptimo día después de la cirugía.`},
              {title: '¿Cuándo puedo maquillarme?', id: 3, text: `Transcurrida una semana de la operación, luego de retirar los puntos. Es conveniente utilizar protector solar que puede usarse como base para el maquillaje.`},
              {title: '¿Qué cuidados debo seguir luego de la cirugía?', id: 4, text: `Mantener la cabeza elevada (posición semisentada). Aplicar compresas frías varias veces al día las primeras 48 horas (puede usar manzanilla fría). Usar lentes oscuros por 24 horas. Evitar ver TV o computadoras por 24 horas. Evitar el sol por un mes mínimo.`},
              {title: '¿Qué riesgos específicos presenta la blefaroplastia?', id: 5, text: `Los riesgos son poco frecuentes. Entre ellos están hemorragias, infección, irritación ocular y remanentes de las bolsas.`},
              {title: '¿Tengo que tomar alguna precaución antes de la intervención?', id: 6, text: `La piel deberá estar bien hidratada y limpia, libre de restos de cosméticos, y sin ningún tipo de lesión. No debe haber ninguna infección en sus ojos,. No es necesario acudir al oftalmólogo antes de la operación. Suspender ingesta de alcohol y/o cigarros una semana antes de la cirugía. Avisar si utiliza lentes de contacto, si tiene alergia a algún medicamento o consume alguna medicina.`},
            ],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Cirugia de menton',
            id: 10,
            label: 'male',
            detail: `<p>La cirug&iacute;a de ment&oacute;n puede usarse para corregir tanto un ment&oacute;n muy retra&iacute;do como uno sobresaliente. Un ment&oacute;n insuficiente distorsiona el plano facial. Adem&aacute;s, acorta la profundidad del cuello, desfigurando el perfil y dando sensaci&oacute;n de cara de p&aacute;jaro. Por otro lado una barbilla muy pronunciada resulta bastante antiest&eacute;tica, especialmente en las mujeres, ya que les da rasgos de dureza o masculinos.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres con ment&oacute;n sobresaliente o muy retra&iacute;do.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Mentoplastia</p>

<p><strong>Duraci&oacute;n del procedimiento:</strong>&nbsp;Una hora</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio</p>

<p><strong>Riesgos:</strong>&nbsp;Sangramiento, inflamaci&oacute;n, infecci&oacute;n, rechazo del implante.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; Dos d&iacute;as para regresar al trabajo</p>

<p>&bull; Dos semanas para resoluci&oacute;n completa</p>

<p>&bull; Resultados definitivos: en 15-30 d&iacute;as.</p>
`,
            questions: [
              {title: '¿A qué edad puede llevarse a cabo la intervención?', id: 3452345, text: `El proceso de osificación de los huesos de la cara finaliza entre los 15 y los 17 años. Se recomienda en mujeres esperar a los 18 años y en varones luego de los 21 años.`},
              {title: '¿Cuándo se puede comenzar a ir a la piscina, al gimnasio y hacer ejercicios?', id: 68903451234, text: `Al cabo de dos semanas, pero se deben practicar los ejercicios con moderación y de forma progresiva.`},
              {title: '¿Qué medicamentos deben evitarse antes y después de la operación?', id: 1345567889, text: `Como en toda operación, el paciente debe abstenerse de ingerir aspirinas u otros anti-coagulantes durante las tres semanas anteriores a la intervención.`},
              {title: '¿Qué riesgo tienen estas operaciones y tratamientos?', id: 123524576879, text: `Por una parte están los riesgos comunes a toda operación: los derivados del uso de anestesia, hemorragias e infecciones. En el caso concreto de los implantes (prótesis de silicona), el riesgo específico es el rechazo de la prótesis de mentón.`},
              {title: '¿Qué tipo de molestias ocasiona la intervención?', id: 123513653568, text: `Es una intervención que apenas da molestias.`},
              {title: '¿Se suele recetar algún medicamento para el post-operatorio?', id: 123235346, text: `Los medicamentos habituales tras cualquier intervención: antibióticos para evitar la infección y, analgésicos para aliviar el dolor.` },
              {title: '¿Tengo que tomar alguna precaución antes de la intervención?', id: 1231258686, text: `Como en el resto de las operaciones faciales el estado de la piel es importante para el éxito de la intervención. En el caso del mentón se deben descartar afecciones bucales o cualquier tipo de infección dental.`},
            ],
            group: 'facial',
            images: []
          },
          {
            name: 'Lifting facial',
            id: 11,
            detail: `<p>El estiramiento facial, tambi&eacute;n conocido como rejuvenecimiento facial, es un procedimiento que puede ayudar a reparar algunos de los signos visibles del envejecimiento evidenciado en forma natural por la piel descolgada, ca&iacute;da y arrugada de la cara y el cuello.</p>

<p>Consiste b&aacute;sicamente en reposicionar las capas musculares, la piel y la grasa, retirando el tejido sobrante mediante incisiones que habitualmente quedan bien camufladas en el cuero cabelludo. Se extienden al interior de las l&iacute;neas naturales que existen en las orejas y contin&uacute;an alrededor del l&oacute;bulo y, en algunos casos, detr&aacute;s de la oreja y del cuero cabelludo.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres a quienes el envejecimiento natural por el paso del tiempo, la exposici&oacute;n prolongada a los rayos solares o el estr&eacute;s de la vida cotidiana han dejado secuelas evidentes en la cara y el cuello, provocando surcos y pliegues que hacen que la expresi&oacute;n pierda definici&oacute;n.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Ritidoplastia</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De 4 a 5 horas (dependiendo de cada caso).</p>

<p><strong>Anestesia:</strong>&nbsp;General.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;De medio d&iacute;a a un d&iacute;a, de acuerdo con las necesidades de cada caso.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Inflamaci&oacute;n, dolor leve, equimosis (morados), sangramiento leve a trav&eacute;s de los drenajes.</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas, infecci&oacute;n, da&ntilde;o nervioso temporal o permanente.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; De 2 a 3 semanas para reintegrarse al trabajo.</p>

<p>&bull; De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; De 4 a 8 semanas para resoluci&oacute;n completa.</p>

<p><strong>Duraci&oacute;n de resultados:</strong>&nbsp;De 8 a 10 a&ntilde;os.</p>
`,
            questions: [],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Cirugia de orejas',
            id: 12,
            label: 'male',
            group: 'facial',
            detail: `<p>Si te molesta la manera en que las orejas sobresalen de la cabeza, o si una o ambas orejas son deformes debido a una lesi&oacute;n o un defecto cong&eacute;nito, puedes someterte a una otoplastia con el fin de conseguir un aspecto m&aacute;s est&eacute;tico en tus orejas.</p>

<p>La otoplastia puede hacerse a cualquier edad una vez que las orejas hayan alcanzado su tama&ntilde;o definitivo -generalmente a los 5 a&ntilde;os de edad- y durante la adultez.</p>

<p><strong>Candidatos:&nbsp;</strong></p>

<p>&bull; Pacientes con orejas grandes y protuberantes.</p>

<p>&bull; Pacientes con l&oacute;bulos agrandados.&nbsp;</p>

<p>&bull; Pacientes con orejas ca&iacute;das.&nbsp;</p>

<p><strong>Nombre del Procedimiento:</strong>&nbsp;Otoplastia</p>

<p><strong>Duraci&oacute;n del Procedimiento:</strong>&nbsp;Aproximadamente 1 hora.</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor, equimosis (morados), hipersensibilidad en la piel.</p>

<p><strong>Riesgos:</strong>&nbsp;Asimetr&iacute;a.</p>

<p><strong>Recuperaci&oacute;n:&nbsp;</strong></p>

<p>2 o 3 d&iacute;as de reposo y aproximadamente 1 semana para volver a las actividades diarias.</p>

<p>El paciente debe de llevar una banda que mantenga las orejas pegadas a la cabeza por al menos 1 mes.</p>

<p><strong>Resultados definitivos:&nbsp;</strong></p>

<p>Una vez retiradas las vendas, observar&aacute;s un cambio inmediato en la apariencia de tus orejas. Estos cambios son permanentes.</p>
`,
            questions: [
              {title: '¿A partir de qué edad se puede realizar esta cirugía en niños?', id: 1, text: `Desde los 6 años.`},
              {title: '¿Cómo son las cicatrices?', id: 2, text: `La cicatriz quedará en la parte posterior de la oreja, por lo que resultará imperceptible incluso al llevar el cabello corto o recogido.`},
              {title: '¿Cuándo se podrá hacer vida normal?', id: 3, text: `A los pocos días. Podrá realizar ejercicios físicos a partir de las tres semanas.`},
              {title: '¿Es doloroso?', id: 4, text: `Puede molestar al contacto o presión durante el primer mes.`},
              {title: '¿Qué cuidados postoperatorios debo seguir?', id: 5, text: `Los 21 días posteriores a la cirugía, se debe utilizar una prenda de compresión ligera (algodón y banda elástica) para proteger las orejas de golpes o gestos bruscos.`},
            ],
            images: [
              {url: '/static/img/cirugiaoreja-1.jpg'},
              {url: '/static/img/cirugiaoreja-2.jpg'},
            ]
          },
          {
            name: 'Lifting de cuello',
            id: 13,
            detail: `<p>Con el paso del tiempo, los tejidos de la piel sufren las consecuencias de la edad al comenzar a evidenciar flacidez y descolgamiento. Aunque este es un proceso natural del envejecimiento, muchas mujeres prefieren recuperar la firmeza de la piel de su cuello, y con ello la confianza en s&iacute; mismas, a trav&eacute;s de un procedimiento quir&uacute;rgico que rejuvenezca su aspecto.</p>

<p>A trav&eacute;s de un lifting de cuello la paciente podr&aacute; obtener una apariencia joven y tersa en la piel al eliminar la flacidez de la piel del cuello, reduciendo significativamente las arrugas en esta zona y otorgando un aspecto mucho m&aacute;s joven.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres con piel suelta en la zona del cuello y expectativas realistas en relaci&oacute;n a su aspecto luego del procedimiento</p>

<p><strong>Nombre del Procedimiento:</strong>&nbsp;Ritidectom&iacute;a baja</p>

<p><strong>Duraci&oacute;n del Procedimiento:</strong>&nbsp;De 2 a 5 horas, dependiendo de la complejidad.</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n o general.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados)</p>

<p><strong>Riesgos:</strong>&nbsp;Infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:&nbsp;</strong></p>

<p>2 o 3 d&iacute;as de reposo y aproximadamente 2 semanas para volver a las actividades diarias</p>

<p><strong>Resultados definitivos:&nbsp;</strong></p>

<p>Los resultados de un lifting pueden durar entre 10 y 15 a&ntilde;os.</p>
`,
            questions: [],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Reduccion de mejillas',
            id: 14,
            detail: `<p>Las bolsas de Bichat son unas gl&aacute;ndulas de tejido graso que se encuentran en las mejillas, justo debajo de los p&oacute;mulos. Estas gl&aacute;ndulas no cumplen ninguna funci&oacute;n espec&iacute;fica en los adultos por lo que muchos pacientes optan por extraerlas para darle un aspecto refinado y angular al rostro.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres con mejillas regordetas que busquen afinar y estilizar la apariencia de su rostro.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Bichectom&iacute;a</p>

<p><strong>Duraci&oacute;n del Procedimiento:</strong>&nbsp;Aproximadamente 1 hora.</p>

<p><strong>Anestesia:</strong>&nbsp;Local m&aacute;s sedaci&oacute;n.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados).</p>

<p><strong>Riesgos:</strong>&nbsp;Infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>24 horas de reposo y aproximadamente 2 semanas sin realizar ejercicios extenuantes</p>

<p><strong>Resultados definitivos:&nbsp;</strong></p>

<p>Los cambios son definitivos y se aprecian entre uno y seis meses luego del procedimiento, dependiendo del paciente.&nbsp;</p>

<p>Si el paciente gana una cantidad importante de peso, es factible que se pierdan los resultados de la bichectom&iacute;a.</p>
`,
            questions: [],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Gluteoplastia',
            id: 15,
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
            detail: `<p>La gluteoplastia es el procedimiento mediante el cual se moldean las nalgas en caso de tener poco desarrollo de su musculatura, cúmulos de grasa desagradables en sus alrededores, trastornos adquiridos o malformaciones congénitas.</p><p>Las dos únicas alternativas seguras para realizar este procedimiento son:</p><p>Lipoinyección. Consiste en infiltración de grasa propia del paciente. La grasa obtenida de distintas partes del cuerpo, como abdomen y muslos, se prepara y enriquece con factores de crecimiento y luego se inyecta en los glúteos para mejorar forma y volumen.</p><p><strong>Implantes glúteos:</strong> prótesis de silicona diseñadas para mejorar el volumen y la forma de los glúteos.</p><p><strong>Candidatas:&nbsp;</strong></p><p>Mujeres con:</p><p>• poco desarrollo de los músculos glúteos.</p><p>• cúmulos de grasa en los alrededores de los glúteos que ocasionan deformidad o aspecto estético.</p><p>• trastornos adquiridos, como accidentes, quemaduras, etc.</p><p>• malformaciones congénitas, y</p><p>• atletas que a pesar de realizar ejercicios para aumentar los glúteos no consiguen resultados suficientes.</p><p>&nbsp;</p><p><strong>Nombre del procedimiento:</strong> GLUTEOPLASTIA</p><p><strong>Duración:</strong> De 2 a 3 horas, dependiendo de los elementos específicos del caso.</p><p><strong>Anestesia:</strong> General o peridural.</p><p><strong>Hospitalización:</strong> Ambulatoria o puede requerir una noche de hospitalización.</p><p><strong>Síntomas post-operatorios:</strong> Inflamación, dolor moderado, equimosis (morados).</p><p><strong>Riesgos:</strong> Dolor, hematomas, infección, lesión cutánea, asimetrías, trombosis.</p><p><strong>Recuperación:</strong></p><p>• Una semana para reintegrarse al trabajo.</p><p>• De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p><p>• Tres meses de resolución completa para realizar cualquier tipo de ejercicio o fuerza.</p><p><strong>Duración de resultados:</strong> permanentes, siempre y cuanto se mantenga un peso estable.</p>`,
            images: [
              {url: '/static/img/gluteoplastia-1.jpg'},
              {url: '/static/img/gluteoplastia-2.jpg'},
              {url: '/static/img/gluteoplastia-3.jpg'},
              {url: '/static/img/gluteoplastia-4.jpg'},
              {url: '/static/img/gluteoplastia-5.jpg'},
              {url: '/static/img/gluteoplastia-6.jpg'},
            ],
          },
          {
            name: 'Cirugia del abdomen',
            id: 16,
            images: [
              {url: '/static/img/cirugiaabdomen-1.jpg'},
              {url: '/static/img/cirugiaabdomen-2.jpg'},
            ],
            questions: [
              {title: '¿Qué tipo de anestesia recibiré?', id: 467851, text: `Anestesia peridural con sedación o con anestesia peridural más general, o solamente general.`},
              {title: '¿Qué es la terapia analgésica postoperatoria?', id: 12345179, text: `Es un tipo de anestesia que se coloca desde la sala de cirugía y que permite al paciente no experimentar dolores o molestias al despertar. La anestesia, que es colocada también por el anestesiólogo, puede mantenerse por algunos días más, según lo amerite el caso.`},
              {title: '¿Qué cuidados postoperatorios debo tener?', id: 12352437, text: `Usar la faja por lo menos durante cuatro semanas después de la operación. Realizar las terapias postoperatorias que el médico sugiera. Guardar el debido reposo. Aun cuando usted se sentirá bien al día siguiente de la cirugía, deberá evitar cargar peso durante unos quince días después de la operación. Procurar caminar algo encorvado durante una semana para evitar que la cicatriz sea objeto de tensión. Cambiar constantemente de posición en la cama desde la salida de pabellón, movilizar los pies, flexionar las piernas. Estas maniobras aumentarán la circulación sanguínea de las piernas. Cubrir el área operada al momento de tomar un baño. Cuidar la herida que queda luego del retiro de los puntos, a los diez días de la operación. Es posible realizar ejercicios de caminata a la tercera semana. Sin embargo, deberá esperar hasta la cuarta o la quinta semana para levantar pesos.`},
              {title: '¿Puedo fumar antes o después de la cirugía? ¿Qué medicamentos no debo consumir?', id: 12352454897834563467, text: `Usted debe evitar el cigarrillo por lo menos diez días antes de la cirugía y quince días después de ésta. La nicotina es un potente vasoconstrictor (obstruye los vasos sanguíneos) que acabará arruinando su cirugía y dificultando la cicatrización y, en algunos casos, también podría acarrear otras complicaciones. Sea precavido y cuide su cirugía. No deberá ingerir aspirina o medicamentos similares antes de la cirugía. Si está recibiendo algún tratamiento deberá notificarlo al médico.`},
              {title: '¿Perderé la cirugía si decido salir embarazada?', id: 1234537791, text: `El resultado puede ser preservado siempre y cuando no se exceda en su peso durante la gestación.`},
              {title: '¿En qué consiste la cirugía abdominal?', id: 1234537792, text: `Se elimina una gran cantidad de la piel y de la grasa que están en exceso o que están flácidas. Durante la cirugía, los músculos abdominales (o los llamados “cuadritos”, que en los atletas están bien definidos) se suturan, juntándolos en la parte medial para que ganen fuerza y tonicidad. Es así como la cintura va a resultar más curva, lo que producirá en el abdomen la sensación de haber realizado ejercicios durante largo tiempo. El ombligo es aprovechado y situado en la misma posición que estaba anteriormente.`},
              {title: '¿Cuántos kilos rebajaré con la cirugía?', id: 1234537793, text: `Naturalmente, perderá algunos kilos, pero lo más determinante será que ganará una figura armónica con un abdomen bien proporcionado con respecto al tronco y a las extremidades.`},
              {title: '¿Cuánto se demora realizar mi cirugía?', id: 12345377931, text: `Normalmente esta cirugía demora entre dos y tres horas. Va a depender de la magnitud del tejido a ser removido.`},
              {title: '¿Cómo serán las cicatrices?', id: 12345377932, text: `Según las características del paciente se efectuará una abdominoplastia normal o una mini abdominoplastia. Se le informará sobre la longitud final de la cicatriz, que vendrá determinada por las características del abdomen.`},
              {title: '¿Será visible la cicatriz?', id: 12345377933, text: `Actualmente, la cicatriz que deja la intervención es fácilmente disimulable, puesto que queda dentro del bikini. Son cicatrices muy discretas. Imagine una cicatriz de cesárea algo más alargada hacia los lados. También podemos eliminar con esta técnica aquellas cicatrices de cesáreas o de otras cirugías abdominales que hayan sido realizadas anteriormente.`},
            ],
            detail: `<p>El abdomen es una de las zonas del cuerpo donde se acumula la grasa con m&aacute;s facilidad. Los embarazos, seguidos a menudo de distensi&oacute;n de la musculatura abdominal, variaciones de peso y desordenes hormonales, contribuyen a la formaci&oacute;n de un abdomen poco est&eacute;tico o con deformidades. La abdominoplastia ayuda a recuperar un vientre plano y a delinear la silueta corporal.</p>
<p>La pared abdominal est&aacute; constituida b&aacute;sicamente por tres elementos: la piel, el tejido celular subcut&aacute;neo, con la grasa subyacente, y la capa muscular. La afectaci&oacute;n de cualquiera de estos tres elementos llevar&aacute; a la formaci&oacute;n de una deformidad del abdomen que, seg&uacute;n cada caso, requerir&aacute; un tratamiento espec&iacute;fico.</p>

<p><strong>Candidatas:</strong></p>

<p>&bull; Mujeres que, estando cercanas a su peso ideal, presentan acumulaci&oacute;n de grasa en el abdomen y piel fl&aacute;cida que no responden a dieta ni ejercicio.</p>

<p>&bull; Mujeres con p&eacute;rdidas masivas de peso.</p>

<p>&bull; Mujeres que, a causa de embarazos, presentan dilataci&oacute;n irreversible de la piel y de la musculatura del abdomen.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;ABDOMINOPLASTIA</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De dos a cuatro horas (dependiendo de la extensi&oacute;n).</p>

<p><strong>Anestesia:</strong>&nbsp;General o peridural.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatoria o puede requerir una noche de hospitalizaci&oacute;n.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados), sangramiento leve a trav&eacute;s del drenaje.</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas, infecci&oacute;n, lesi&oacute;n cut&aacute;nea.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; Entre 2 y 3 semanas para reintegrarse al trabajo.</p>

<p>&bull; Entre 3 y 4 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; A los tres meses resoluci&oacute;n completa para realizar cualquier tipo de ejercicio o fuerza.</p>

<p><strong>Duraci&oacute;n de los resultados:</strong>&nbsp;Permanentes, siempre y cuando se mantenga un peso estable.</p>`,
            label: 'female',
            group: 'corporal',
          },
          {
            name: 'Liposuccion laser',
            id: 17,
            images: [
              {url: '/static/img/flipolaser-1.jpg'},
              {url: '/static/img/flipolaser-2.jpg'},
              {url: '/static/img/flipolaser-3.jpg'},
              {url: '/static/img/flipolaser-4.jpg'},
              {url: '/static/img/flipolaser-5.jpg'},
              {url: '/static/img/flipolaser-6.jpg'},
            ],
            label: 'female',
            group: 'corporal',
            questions: [
              {title: '¿Cómo es la cicatriz que deja la lipoescultura?', id: 1234513668, text: `Normalmente, las pequeñas incisiones que se realizan no superan los cinco milímetros y desaparecen casi en su totalidad a los tres meses. Sin embargo, adicionalmente se toma la previsión de realizar las incisiones en sitios estratégicos (pliegues, surcos) con la finalidad de que puedan ser disimuladas en su totalidad.`},
              {title: '¿Cuál es el período de hospitalización?', id: 1233454567, text: `Normalmente es una cirugía ambulatoria. Si se hace con otra cirugía de gran tamaño es recomendable que el paciente sea hospitalizado.`},
              {title: '¿Cuáles son las áreas que pueden ser tratadas?', id: 123557908651, text: `• Papada

              • Brazos
              
              • Región abdominal
              
              • Cintura
              
              • Espalda
              
              • Cara externa del muslo (“revolveras”)
              
              • Cara anterior del muslo
              
              • Glúteos.`},
              {title: '¿Cuándo debo realizar la autodonación de sangre?', id: 123, text: `La autodonación consiste en extraer una cantidad pequeña de sangre al paciente, preferiblemente antes del tercer día previo a la cirugía, para que los glóbulos rojos extraídos hayan sido repuestos para el momento de la operación. Su sangre se guarda en el banco de sangre de la clínica y se reinyecta en su organismo en el postoperatorio inmediato. Esta técnica, además de permitir reponer el volumen que pudiera perder con la cirugía, promueve una recuperación más rápida y sin desbalance del volumen de sangre. Utilizar su propia sangre elimina los riesgos de contraer enfermedades contagiosas.`},
              {title: '¿Tener hijos después de la operación me hará perder sus efectos?', id: 345, text: `Los resultados pueden ser preservados después de la gestación, siempre y cuando su peso sea controlado por un especialista. Si no desarrolla muchas estrías o la flacidez no es mayor, las formas obtenidas con la lipoescultura se mantienen.`},
              {title: '¿Es utilizada alguna cura?', id: 676, text: `Cuando se trata de cirugías en las que se extrajo una cantidad grande de grasa, es recomendable usar una faja durante cuatro a seis semanas tras la intervención.`},
              {title: '¿Es peligrosa la lipoaspiración?', id: 8, text: `Raramente la lipoaspiración trae problemas. El peligro no es mayor ni menor que en otras cirugías, siempre y cuando sea realizada en atención a todas las normas técnicas aplicables. Hay que tener cuidado de no extraer grandes volúmenes de grasa. Como criterio establecido a nivel internacional por los cirujanos plásticos, se recomienda no extraer más de cinco a siete por ciento del peso corporal. En la actualidad, para cirugías en las que haya que retirar grandes volúmenes, se aconseja hacer una autodonación de sangre.`},
              {title: '¿Es muy doloroso el postoperatorio?', id: 0, text: `Generalmente no. El dolor se controla con analgésicos comunes.`},
              {title: '¿En cuánto tiempo observaré los resultados?', id: 65, text: `Toda cirugía pasa por una fase variable de desinflamación. Depende del paciente y de las zonas que fueron tratadas. Durante los 30 primeros días del postoperatorio es posible que el paciente no perciba en su totalidad los resultados. Después de este período comienza una desinflamación de la zona. A los tres meses podrá ver ya un excelente resultado. Recomendamos realizar terapias postoperatorias (drenajes linfáticos y/o ejercicios), orientadas a modelar y disminuir la inflamación de los tejidos.`},
              {title: '¿Cuántos kilos voy a rebajar con la cirugía?', id: 34 , text: `Más que hablar de perder kilos, debemos hablar de disminuir tallas. Normalmente el paciente puede perder entre cuatro a seis kilos, pero es realmente en la disminución de las tallas de pantalón, sostén, camisas, etc. en donde se nota el cambio.`},
              {title: '¿Cuánto demora el acto quirúrgico?', id: 675 , text: `Esto dependerá de la extensión de las áreas a tratar. Puede demorar entre una y tres horas, en promedio.`},
              {title: '¿Cuándo podré bañarme?', id: 1234 , text: `Al día siguiente ya podrá tomar un baño. Si el procedimiento ha sido hecho en conjunto con otra cirugía entonces deberá consultar al médico.`},
              {title: '¿Qué tipo de anestesia se aplica?', id: 5467 , text: `La mayoría de los casos se realizan con anestesia general, de esta manera se obtienen mejores resultados.`},
            ],
            detail: `<p>La eliminaci&oacute;n de los excesos de grasa es un reto que la cirug&iacute;a est&eacute;tica vence cada vez con m&aacute;s facilidad.</p>

<p>La liposucci&oacute;n l&aacute;ser o Laserlip&oacute;lisis&nbsp; es actualmente el mecanismo de acci&oacute;n m&aacute;s utilizado a nivel mundial para la remoci&oacute;n de grasa localizada o liposucci&oacute;n general asistida con l&aacute;ser. Su finalidad es emulsificar la grasa y lograr su extracci&oacute;n de forma f&aacute;cil y segura, sin da&ntilde;ar tejidos adyacentes y en muy corto tiempo.</p>

<p>La gran ventaja del procedimiento est&aacute; en que combina la potencia del l&aacute;ser para moldear &aacute;reas del cuerpo con uniformidad, sin sangrado y con excelente retracci&oacute;n de la piel. Esto permite la recuperaci&oacute;n en muy corto plazo debido a que no requiere anestesia general para su realizaci&oacute;n.</p>

<p><strong>Candidatas:</strong></p>

<p>&bull; Mujeres que pese a estar dentro de su peso ideal, tienen dep&oacute;sitos de grasa en &aacute;reas localizadas y quieren eliminarlos para mejorar su apariencia f&iacute;sica.&nbsp;</p>

<p>&bull; Mujeres con sobrepeso, sin obesidad m&oacute;rbida, que est&eacute;n en r&eacute;gimen diet&eacute;tico.&nbsp;</p>

<p>&bull; Mujeres que han sido sometidas a cirug&iacute;as bari&aacute;tricas para perder peso y han alcanzado su peso ideal.</p>

<p>&bull; No debe realizarse en personas con obesidad m&oacute;rbida. En esos casos se hace primero una cirug&iacute;a bari&aacute;trica para perder peso y luego la cirug&iacute;a para mejorar el contorno corporal.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Lipoescultura L&aacute;ser</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De 1 a 4 horas, dependiendo de la extensi&oacute;n del procedimiento.</p>

<p><strong>Anestesia:</strong>&nbsp;General</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio generalmente. Puede requerir un d&iacute;a de hospitalizaci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; 5 d&iacute;as para regresar al trabajo.</p>

<p>&bull; De 1 a 2 semanas para actividades m&aacute;s fuertes y deportes.</p>

<p>&bull; Cuatro semanas para resoluci&oacute;n total.</p>

<p><strong>Duraci&oacute;n de los resultados:</strong>&nbsp;Pueden ser permanentes si se mantiene un r&eacute;gimen alimenticio sano, acompa&ntilde;ado de ejercicios.</p>

<p><strong>Descripci&oacute;n tratamiento:</strong></p>

<p>Una sonda que emite ondas de alta frecuencia produce la licuaci&oacute;n de la grasa, la cual se retira luego con una succi&oacute;n a baja presi&oacute;n.</p>

<p>Cuando la sonda se pasa en la capa de grasa superficial ayuda a mejorar la celulitis. El procedimiento facilita la aspiraci&oacute;n de zonas fibrosas como los rollitos de la espalda, pantal&oacute;n de montar y en reoperaciones.</p>

<p>Produce una mejor retracci&oacute;n de la piel, sobre todo en &aacute;reas de flaccidez: brazos, cara interna de muslos y abdomen de mujeres mayores.</p>

<p>Produce menos p&eacute;rdida de sangre y menos hematomas, porque no lesiona vasos.</p>

<p>Mejora el &ldquo;poceado&rdquo; de la celulitis por un efecto regenerador del col&aacute;geno de la dermis.</p>

<p><strong>Equipo:</strong></p>

<p>&bull; Tipo de laser: DUO laser Diodo</p>

<p>&bull; Modelo: Siemens SixLaserDuo 9-20</p>

<p>&bull; Longitud de onda: 808nm y 980nm</p>

<p>&bull; Potencia M&aacute;xima: 30W</p>

<p>&bull; Tasa de Repetici&oacute;n: 0.6 Hz-10k Hz</p>

<p>&bull; Sistema de trasmisi&oacute;n: Fibra &oacute;ptica 400um- 600um</p>
`
          },
          {
            name: 'Aumento de pantorrillas',
            id: 18,
            images: [],
            detail: `<p>Para poder contar con una buena apariencia en las piernas es necesario que todas sus partes se vean torneadas y con m&uacute;sculos definidos, sin embargo, las pantorrillas suelen ser una zona a la que no se le presta mucha atenci&oacute;n, a pesar de que su falta de desarrollo crea un aspecto antiest&eacute;tico.</p>

<p>Con este procedimiento quir&uacute;rgico el paciente puede aumentar el volumen de los m&uacute;sculos de la pantorrilla mediante la colocaci&oacute;n de implantes que se adecuen a la anatom&iacute;a del paciente y que logren dar un aspecto m&aacute;s torneado a las piernas.</p>

<p><strong>Candidatas:</strong></p>

<p>? Mujeres con poco desarrollo de los m&uacute;sculos de la pantorrilla</p>

<p>? Mujeres que, a pesar de realizar ejercicios para aumentar los m&uacute;sculos de la pantorrilla, no consiguen resultados suficientes.</p>

<p>? Mujeres con malformaciones cong&eacute;nitas.&nbsp;</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;AUMENTO DE PANTORRILLAS&nbsp;</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;Entre 1 y 2 horas.&nbsp;</p>

<p><strong>Anestesia:</strong>&nbsp;General o peridural.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp; Ambulatoria.</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados).</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas e infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; 1 semana para reintegrarse al trabajo.</p>

<p>&bull; 2 a 3 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; Tres meses resoluci&oacute;n completa para realizar cualquier tipo de ejercicio o fuerza.</p>
`,
            questions: [],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Aumento de mamas',
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
            detail: `<p>Consiste en la colocaci&oacute;n de implantes o pr&oacute;tesis mamarias para aumentar el volumen del seno. El aumento de volumen mamario ajusta las proporciones del tronco con la cintura y ofrece cierta tranquilidad psicol&oacute;gica a la paciente.</p>

<p>Es importante saber que existen pruebas de que los implantes de silicona no dan origen a c&aacute;ncer de mamas, no interfieren en la realizaci&oacute;n de mamograf&iacute;as y no disminuyen ni la sensibilidad ni el orgasmo sexual.</p>

<p><strong>Candidatas:&nbsp;</strong></p>

<p><strong>Mujeres que:</strong></p>

<p>&bull; est&aacute;n inconformes por tener senos peque&ntilde;os.</p>

<p>&bull; est&aacute;n inconformes con la forma en que le quedan los sostenes y el resto de la ropa.</p>

<p>&bull; presentan asimetr&iacute;a mamaria (una mama diferente de la otra).</p>

<p>&bull; requieren reconstrucci&oacute;n mamaria debido a tumoraciones.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Mastoplastia de Aumento</p>

<p><strong>Tiempo de cirug&iacute;a:</strong>&nbsp;De 1 a 2 horas.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Dolor, sensaci&oacute;n de opresi&oacute;n.</p>

<p><strong>Riesgos:</strong>&nbsp;Sangramiento, encapsulamiento, infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; Una semana para ir al trabajo.&nbsp;</p>

<p>&bull; De 2 a 3 semanas para manejar y realizar ejercicios tipo caminata.&nbsp;</p>

<p>&bull; 4 semanas para todas las actividades normales.</p>
`,
            questions: [
              {title: '¿Qué tipo de anestesia es necesaria?', id: 1, text: `Se realiza con anestesia general debido a que es más cómodo y seguro para el paciente y el médico.`},
              {title: '¿Requiero de hospitalización?', id: 2, text: `Esta cirugía es de tipo ambulatoria. Esto quiere decir que la paciente ingresa a la clínica en horas de la mañana y en el transcurso de la tarde ya puede estar regresando a su casa.`},
              {title: '¿A partir de qué edad pueden colocarse implantes mamarios?', id: 3, text: `Desde que la persona ha completado el desarrollo de las mamas. Algunas mujeres ya han completado este desarrollo a los 17 años. La mujer tiene que ser emocionalmente madura y conocer todos los pros y los contras de la cirugía.`},
              {title: '¿Cuál será el volumen de mi implante?', id: 4, text: `El que sea más cómodo y vaya más en armonía con su cuerpo. Es decir, se debe llegar a un acuerdo entre el médico y la paciente sobre el tamaño que se desea obtener. Hay que tomar en cuenta que no siempre las expectativas que tiene la paciente son las más adecuadas. No todas las pacientes tienen las mismas medidas del tórax, la misma cantidad de tejido mamario, las dimensiones y la capacidad del músculo para cubrir el implante. Un recurso que ayuda al médico a calmar la inquietud de la paciente es utilizar los probadores en la consulta.`},
              {title: '¿Cuándo son retirados los puntos?', id: 5, text: `Las suturas que se utilizan son intradérmicas (dentro de la piel) y se retiran entre ocho y quince días después de la operación. En algunos casos, pueden utilizarse suturas reabsorbibles.`},
              {title: '¿Cuánto tiempo demora la cirugía?', id: 6, text: `En promedio, demora de una a dos horas. Hay que tomar en cuenta que se requiere siempre un tiempo para preparar al paciente y otro tiempo para que éste se recupere de la anestesia.`},
              {title: '¿Cuánto tiempo dura este implante? ¿Cuándo debo cambiarlo?', id: 7, text: `Los implantes actualmente son de por vida, tienen una garantía de 10 años en caso de que se rompan o que se encapsulen. Con el transcurso de los años, las mamas pueden caer de manera natural y muchas pacientes deciden cambiar los implantes y reafirmar las mamas nuevamente.`},
              {title: '¿El post-operatorio de esta cirugía es doloroso?', id: 8, text: `Generalmente hay molestia las primeras 72 horas, mientras el músculo se adapta al implante y estira sus fibras, para eso ayudan los relajantes musculares y analgésicos. Este post-operatorio es poco molesto siempre que usted obedezca las instrucciones médicas, principalmente en lo concerniente a los movimientos de los brazos durante los primeros días.`},
              {title: '¿Qué complicaciones puedo tener con los implantes?', id: 9, text: `Hematomas: Dependiendo de la magnitud, pueden ser autodigeridos por el organismo o necesitar de un drenaje quirúrgico. Infección: ocurre en un bajo porcentaje de los casos. Usted debe seguir las recomendaciones terapéuticas del médico y cumplir estrictamente con la ingesta de antibióticos. Retracción de la cápsula fibrosa: la ruptura del implante ocurre en ínfimos porcentajes. Caída de las mamas al transcurrir de los años: puede ocurrir si el implante es muy grande y hay piel muy flácida.`},
              {title: '¿Qué debo y qué no debo hacer la primera semana después de haber sido operada?', id: 10, text: `Debe dormir semisentada los primeros días, luego de lado o boca arriba. Mantener el sostén post-operatorio día y noche, por lo menos durante cuatro semanas. Puede tomar un baño al día siguiente de la cirugía, teniendo cuidado de no mojar las mamas. Para ello, debe envolverlas con material plástico de cocina. Puede retornar a su trabajo luego del tercer día, siempre que la actividad que usted realice no exija esfuerzo físico de cualquier naturaleza. Debe realizar terapias post-operatorias después del quinto día. Puede manejar automático después de la primera semana, y sincrónico luego de dos semanas. Las relaciones sexuales pueden ser reiniciadas una vez que las heridas estén completamente cicatrizadas. Se recomienda esperar tres semanas. Evite la exposición al sol antes de tres meses después de la operación.`},
              {title: '¿Qué es el endurecimiento de las mamas o retracción de cápsula fibrosa?', id: 11, text: `Nuestros organismos reaccionan de forma similar ante un cuerpo extraño. El cuerpo crea una cápsula o envoltura alrededor del implante como para defenderse con la finalidad de aislarlo y no estar directamente en contacto con él. Todos los implantes son envueltos por esta cápsula fibrosa, que puede variar en grosor (unas finas, otras de mediano grosor y unas que pueden ser tan duras que tienden a calcificarse). No conocemos exactamente el mecanismo de su formación ni el tiempo en el cual se retraen. Esta retracción algunas veces puede generar asimetrías y dolor en las mamas.`},
              {title: '¿Qué es un implante mamario?', id: 12, text: `Es usado para aumentar el volumen de las mamas, colocado de manera retropectoral (detrás del músculo pectoral). Los implantes son hechos de silicona, un derivado del sílice, y están rellenos de gel. Actualmente existen varias formas externas: los implantes lisos, texturizados y de poliuretano. Los implantes más costosos son los de poliuretano y los menos costosos son los lisos. Con respecto a la altura, existen implantes de perfil alto e implantes de perfil bajo, cada uno con usos específicos para la paciente. Se calcula el tamaño en unidades de volumen o centímetros cúbicos (cc). Por su forma pueden ser redondos o anatómicos. `},
              {title: '¿Cómo quedarán las cicatrices en este tipo de cirugía?', id: 13, text: `Éste es uno de los aspectos que más preocupan a las pacientes que deciden realizarse una cirugía de este tipo. Existen varias técnicas. La paciente debe discutirlas con el médico tratante, que es quien decidirá cuál será la técnica quirúrgica que aplicará. Dependiendo del tamaño, el volumen, la forma de las mamas, el color de la piel y los antecedentes de cicatrización de cirugías previas, podemos tener una cicatriz sólo alrededor de la areola (muy bien disimulada), en forma de I o T cuando las mamas son muy grandes o están muy caídas (en la mayoría de los casos las cicatrices son poco visibles). Es muy personal la forma de realizar la sutura de estas cicatrices. Actualmente, se están realizando varios tipos de afrontamiento para tratar de disminuir lo más posiblemente las cicatrices. En nuestras pacientes trabajamos con mínima tensión para obtener cicatrices menos visibles o imperceptibles.`},
              {title: '¿Cuánto tiempo demora la intervención?', id: 14, text: `Normalmente, entre dos y cuatro horas. Dependiendo de la técnica utilizada.`},
              {title: '¿En cuánto tiempo mejora el aspecto de mis cicatrices?', id: 15, text: `Esto es variable, en cada paciente el comportamiento es sustancialmente distinto. Depende de varios aspectos como la raza, el estado nutricional, la tensión de la herida, la edad de la paciente, la presencia de enfermedades asociadas, la exposición al sol, etc. En términos generales tenemos:

              • Los primeros treinta días: la cicatriz se puede mostrar algo enrojecida, con cierta reacción a las suturas y a las cintas adhesivas.
              
              • Entre treinta días y un año: la cicatriz pasa de rosado o rojo a un tono marrón, con tendencia a aclararse aún más.
              
              • Luego de un año: la cicatriz deja de ser consistente, se torna muy blanda y blanquecina y, en algunos casos, puede ser casi imperceptible a simple vista. `},
              {title: '¿Qué tipo de anestesia se requiere?', id: 16, text: `Ésta es una cirugía que debe realizarse con anestesia general.`},
              {title: 'Escuché que algunas pacientes quedan con las cicatrices visibles…', id: 17, text: `Debemos diferenciar entre las cicatrices hipertróficas y los queloides. Las cicatrices hipertróficas son engrosamientos que se producen por maltrato de la piel, mala sutura o infección en la cicatriz y que pueden ser nuevamente resecadas (eliminadas) con una resutura de la cicatriz. Esto es realizado con anestesia local y en muy corto tiempo en el consultorio. Los queloides, si hay una predisposición genética, saldrán en cualquier parte en donde usted tenga una cicatriz. En estos casos, es conveniente aplicar radioterapia dentro de las cuarenta y ocho horas siguientes a la intervención. Si usted tiene predisposición genética a la formación de queloides, debe comunicárselo a su médico para que tome las debidas previsiones.`},
            ],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Reduccion de mamas',
            id: 20,
            images: [
              {url: '/static/img/reduccionmamas.jpg'}
            ],
            label: 'female',
            detail: `<p>Es un procedimiento para disminuir el tama&ntilde;o de las gl&aacute;ndulas mamarias y para corregir la ca&iacute;da o ptosis de las mismas. Se aplica a mujeres con senos grandes (hipertrofia) o ca&iacute;dos (pt&oacute;sicos). La cantidad de tejido mamario cambia en proporci&oacute;n con el peso, con el embarazo, y por cambios hormonales. La reducci&oacute;n mamaria busca varios objetivos como son reubicar en una posici&oacute;n m&aacute;s alta la areola y el pez&oacute;n y mejorar la forma del seno mediante la reducci&oacute;n de su tama&ntilde;o.</p>

<p><strong>Candidatas:</strong></p>

<p><strong>Mujeres con:</strong></p>

<p>&bull; senos grandes, p&eacute;ndulos y pesados que tengan o no la areola mirando para abajo.&nbsp;</p>

<p>&bull; senos asim&eacute;tricos.</p>

<p>&bull; dolor en la espalda de intensidad variable.&nbsp;</p>

<p>&bull; lesiones de piel alrededor de los senos, como consecuencia del volumen exagerado de los mismos.</p>

<p>&bull; alteraciones de orden psicol&oacute;gico debido a incomodidad o a inconformidad por la forma de los senos.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Mastoplastia Reductora&nbsp;</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De 3 a 4 horas (dependiendo del tama&ntilde;o de los senos).</p>

<p><strong>Anestesia:</strong>&nbsp;General.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio. En algunos casos puede ameritar una noche de hospitalizaci&oacute;n.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados), sangramiento leve a trav&eacute;s del drenaje.</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas, infecci&oacute;n, lesi&oacute;n cut&aacute;nea.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; De 2 a 3 semanas para reintegrarse al trabajo.</p>

<p>&bull; De 3 a 4 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; De 4 a 8 semanas para resoluci&oacute;n completa para realizar cualquier tipo de ejercicio o fuerza.</p>

<p><strong>Duraci&oacute;n de Resultados:</strong>&nbsp;Permanentes, siempre y cuanto se mantenga un peso estable.</p>
`,
            questions: [
              {title: '¿Cómo se deberá dormir los primeros días después de la intervención?', id: 1, text: `Deberá dormir boca arriba los primeros días, luego de lado, con el sostén post-operatorio, por un mes aproximadamente.`},
              {title: '¿Cuándo no debe realizarse la operación?', id: 2, text: `Podría estar contraindicada en personas consideradas grandes fumadoras. El tabaco perjudica la circulación capilar y consecuentemente la cicatrización. En pacientes jóvenes menores de 18 años. En caso de padecer alguna enfermedad que pueda interferir con el proceso quirúrgico o la anestesia. Es imprescindible realizar un estudio mamario previo como mamografía.`},
              {title: '¿Cuándo se podrá reincorporar a la vida laboral?', id: 3, text: `Depende del tipo de trabajo que realice. Si el trabajo es de oficina o similar podrá incorporarse siete días después de la intervención. Para trabajos que exigen movimientos o esfuerzos luego de 15 a 21 días.`},
              {title: '¿De qué forma quedarán las cicatrices?', id: 4, text: `Éste es uno de los aspectos que más preocupan a las pacientes que deciden realizarse una cirugía de este tipo. En caso de reducción mamaria las cicatrices son en forma de T invertida (En la mayoría de los casos las cicatrices son poco visibles). Es muy personal la forma de realizar la sutura de estas cicatrices. Actualmente, se están realizando varios tipos de afrontamiento para tratar de disminuirlas lo más posible. En nuestras pacientes trabajamos con mínima tensión para obtener cicatrices menos visibles o imperceptibles.`},
              {title: '¿En algunas pacientes quedan las cicatrices visibles?', id: 5, text: `Debemos diferenciar entre las cicatrices hipertróficas y los queloides. Las cicatrices hipertróficas son engrosamientos que se producen por maltrato de la piel, mala sutura o infección en la cicatriz y que pueden ser nuevamente resecadas (eliminadas) con una nueva resutura de la cicatriz. Esto es realizado con anestesia local y en muy corto tiempo en el consultorio. Los queloides, si hay una predisposición genética, saldrán en cualquier parte en donde usted tenga una cicatriz. En estos casos, es conveniente aplicar radioterapia dentro de las cuarenta y ocho horas siguientes a la intervención. Si usted tiene predisposición genética a la formación de queloides, debe comunicárselo a su médico para que tome las debidas previsiones.`},
              {title: '¿En cuánto tiempo mejora el aspecto de mis cicatrices?', id: 6, text: `Esto es variable, en cada paciente el comportamiento es sustancialmente distinto. Depende de varios aspectos como la raza, el estado nutricional, la tensión de la herida, la edad de la paciente, la presencia de enfermedades asociadas, la exposición al sol, etc. En términos generales tenemos:

              • Los primeros treinta días: la cicatriz se puede mostrar algo enrojecida, con cierta reacción a las suturas y a las cintas adhesivas.
              
              • Entre treinta días y un año: la cicatriz pasa de rosado o rojo a un tono marrón, con tendencia a aclararse aún más.
              
              • Luego de un año: la cicatriz deja de ser consistente, se torna muy blanda y blanquecina y, en algunos casos, puede ser casi imperceptible a simple vista.`},
              {title: '¿Las mamografías serán igualmente fiables que antes de la cirugía ?', id: 7, text: `La fiabilidad de las mamografías es la misma. Por cuestión de control recomendamos una a los seis meses de la intervención. A partir de entonces deberá seguir la frecuencia que le marque su especialista.`},
            ],
            group: 'corporal'
          },
          {
            name: 'Vulvoplastia',
            id: 21,
            images: [],
            detail: `<p>Es un procedimiento para rejuvenecer los genitales de la mujer luego de un embarazo. El procedimiento consiste en la recepci&oacute;n de los labios menores y lipoinyecci&oacute;n de los labios mayores.&nbsp;</p>

<p>Candidatas:&nbsp;</p>

<p>Mujeres que tengan excedentes en labios menores y que hayan cumplido con su periodo de embarazo.&nbsp;</p>

<p>Nombre del Procedimiento: Vaginoplastia o rejuvenecimiento vaginal&nbsp;</p>

<p>Duraci&oacute;n del Procedimiento: 1 hora</p>

<p>Anestesia: Local y sedaci&oacute;n&nbsp;</p>

<p>Hospitalizaci&oacute;n: Ambulatorio&nbsp;</p>

<p>S&iacute;ntomas: Inflamaci&oacute;n en la zona genital, dolor leve</p>

<p>Riesgos: Infecciones o sangrado</p>

<p>Recuperaci&oacute;n: 15 d&iacute;as</p>

<p>Resultados definitivos: A partir de los tres meses</p>
`,
            questions: [],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Muslos (Cruroplastia)',
            id: 22,
            images: [],
            label: 'female',
            detail: `<p>Es una apepsia o levantamiento de los muslos posterior a las p&eacute;rdidas masivas de peso. Se reseca la piel que sobra o se aspira la grasa para adelgazar o disminuir el di&aacute;metro del muslo.&nbsp;</p>

<p>Candidatas: Pacientes post bari&aacute;tricas o que hayan perdido una cantidad de peso importante</p>

<p>Nombre del Procedimiento: Lifting de muslos</p>

<p>Duraci&oacute;n del Procedimiento: Dos horas</p>

<p>Anestesia: General o peridural</p>

<p>Hospitalizaci&oacute;n: Una noche, ambulatorio en algunos casos.&nbsp;</p>

<p>S&iacute;ntomas: Dolor de leve a moderado en la zona, aumento de edema en la zona</p>

<p>Riesgos: Hematomas, infecciones o dehiscencia de la herida operatoria</p>

<p>Recuperaci&oacute;n: De 15 a 21 d&iacute;as.&nbsp;</p>

<p>Resultados definitivos: Luego de los tres meses.</p>
`,
            questions: [],
            group: 'corporal'
          },
          {
            name: 'Renuvion',
            id: 23,
            images: [
              {url: '/static/img/renuvion-1.jpg'},
              {url: '/static/img/renuvion-2.jpg'},
              {url: '/static/img/renuvion-3.jpg'},
              {url: '/static/img/renuvion-4.jpg'},
              {url: '/static/img/renuvion-5.jpg'},
            ],
            detail: `<p>Se trata de un dispositivo de energ&iacute;a avanzada que combina las propiedades &uacute;nicas del Plasma de Helio fr&iacute;o con energ&iacute;a de radiofrecuencia, todo ello para tensar y rejuvenecer la piel de manera instant&aacute;nea, en cualquier parte del cuerpo o de la cara, esculpiendo y tensando la piel, obteniendo resultados muy naturales.</p>

<p>J- Plasma esta indicada para hombres y mujeres entre 20 y 80 a&ntilde;os, que tengan una flacidez mediana o moderada, y para pacientes que hayan experimentado cambios de peso y que est&eacute;n buscando conseguir una piel con mayor firmeza.</p>

<p>J- Plasma es la soluci&oacute;n para personas que se han sometido a un moldeamiento corporal no invasivo y no lograron los resultados esperados. Tambi&eacute;n es el complemento perfecto para quienes se han realizado una lipol&aacute;ser y quieren perfeccionar los resultados, para obtener una piel mucho m&aacute;s tersa y firme.</p>

<p>Con la tecnolog&iacute;a J- Plasma obtendr&aacute;s resultados asombrosos de manera inmediata, sin cicatrices, sin cirug&iacute;a, indoloro y sin baja laboral.</p>
`,
            questions: [],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Tratamiento de arrugas',
            id: 24,
            images: [],
            detail: `<p>Es una t&eacute;cnica de rejuvenecimiento facial para la restauraci&oacute;n de vol&uacute;menes y relleno de arrugas y/o l&iacute;neas de expresi&oacute;n, usando tu propia grasa corporal, es decir, con una sustancia compatible con tu organismo que no provoca toxicidad, alergias, ni rechazo.</p>

<p>La lipoinyecci&oacute;n es un procedimiento m&iacute;nimamente invasivo, poco traum&aacute;tico, indoloro, sin cortes ni cicatrices, que nos permite &ldquo;esculpir&rdquo; el rostro, mejorar la flacidez y conseguir un aspecto muy mejorado y rejuvenecido.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres a quienes el envejecimiento natural ha dejado secuelas evidentes en la cara y el cuello, provocando surcos y pliegues que hacen que la expresi&oacute;n pierda definici&oacute;n.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Lipoinyecci&oacute;n facial</p>

<p><strong>Duraci&oacute;n del procedimiento:</strong>&nbsp;30 min a 1 hora.</p>

<p><strong>Anestesia:</strong>&nbsp;Local.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>Riesgos:</strong>&nbsp;Sangramiento, inflamaci&oacute;n, equimosis (morados) en la zona de inyecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; De 1 a 2 d&iacute;as para regresar al trabajo.</p>

<p>&bull; Una semana para resoluci&oacute;n completa.</p>

<p>&bull; Resultados definitivos a los siete d&iacute;as.</p>
`,
            questions: [
              {title: '¿A quién va dirigida la lipotransferencia facial?', id: 1234789023, text: `Indicada para ambos sexos; normalmente a partir de los 40 años. Precisa un cuidadoso análisis individual fisonómico para evaluar íntegramente el conjunto de los rasgos.`},
              {title: '¿Cuánto duran los efectos?', id: 789088456, text: `El efecto, tanto en las arrugas de expresión como en los volúmenes suele durar varios años.`},
            ],
            label: 'female',
            group: 'facial',
          },
          {
            name: 'Cirugia de menton',
            id: 25,
            images: [],
            detail: `<p>La cirug&iacute;a de ment&oacute;n puede usarse para corregir tanto un ment&oacute;n muy retra&iacute;do como uno sobresaliente. Un ment&oacute;n insuficiente distorsiona el plano facial. Adem&aacute;s, acorta la profundidad del cuello, desfigurando el perfil y dando sensaci&oacute;n de cara de p&aacute;jaro. Por otro lado una barbilla muy pronunciada resulta bastante antiest&eacute;tica, especialmente en las mujeres, ya que les da rasgos de dureza o masculinos.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres con ment&oacute;n sobresaliente o muy retra&iacute;do.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Mentoplastia</p>

<p><strong>Duraci&oacute;n del procedimiento:</strong>&nbsp;Una hora</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio</p>

<p><strong>Riesgos:</strong>&nbsp;Sangramiento, inflamaci&oacute;n, infecci&oacute;n, rechazo del implante.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; Dos d&iacute;as para regresar al trabajo</p>

<p>&bull; Dos semanas para resoluci&oacute;n completa</p>

<p>&bull; Resultados definitivos: en 15-30 d&iacute;as.</p>
`,
            questions: [
              {title: '¿A qué edad puede llevarse a cabo la intervención?', id: 3452345, text: `El proceso de osificación de los huesos de la cara finaliza entre los 15 y los 17 años. Se recomienda en mujeres esperar a los 18 años y en varones luego de los 21 años.`},
              {title: '¿Cuándo se puede comenzar a ir a la piscina, al gimnasio y hacer ejercicios?', id: 68903451234, text: `Al cabo de dos semanas, pero se deben practicar los ejercicios con moderación y de forma progresiva.`},
              {title: '¿Qué medicamentos deben evitarse antes y después de la operación?', id: 1345567889, text: `Como en toda operación, el paciente debe abstenerse de ingerir aspirinas u otros anti-coagulantes durante las tres semanas anteriores a la intervención.`},
              {title: '¿Qué riesgo tienen estas operaciones y tratamientos?', id: 123524576879, text: `Por una parte están los riesgos comunes a toda operación: los derivados del uso de anestesia, hemorragias e infecciones. En el caso concreto de los implantes (prótesis de silicona), el riesgo específico es el rechazo de la prótesis de mentón.`},
              {title: '¿Qué tipo de molestias ocasiona la intervención?', id: 123513653568, text: `Es una intervención que apenas da molestias.`},
              {title: '¿Se suele recetar algún medicamento para el post-operatorio?', id: 123235346, text: `Los medicamentos habituales tras cualquier intervención: antibióticos para evitar la infección y, analgésicos para aliviar el dolor.` },
              {title: '¿Tengo que tomar alguna precaución antes de la intervención?', id: 1231258686, text: `Como en el resto de las operaciones faciales el estado de la piel es importante para el éxito de la intervención. En el caso del mentón se deben descartar afecciones bucales o cualquier tipo de infección dental.`},
            ],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Cirugia de nariz',
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
            detail: `<p>Intervenci&oacute;n quir&uacute;rgica destinada a la correcci&oacute;n de deformaciones nasales mediante la modificaci&oacute;n de su forma, lo que conlleva a una mejora del equilibrio y la armon&iacute;a facial.</p>

<p>Cada rinoplastia es un caso diferente que debe evaluarse con detenimiento. No se trata &uacute;nicamente de reducir o aumentar el tama&ntilde;o de la nariz, sino de adaptarlo a las facciones y caracter&iacute;sticas propias de la persona. En este tipo de cirug&iacute;a est&eacute;tica es especialmente importante el di&aacute;logo con el paciente para contrastar sus deseos y perspectivas con las posibilidades de mejora que ofrece la intervenci&oacute;n.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres inconformes con el aspecto de su nariz.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Rinoplastia</p>

<p><strong>Tiempo de la cirug&iacute;a:</strong>&nbsp;De 1 a 3 horas, dependiendo del caso.</p>

<p><strong>Tipo de anestesia:</strong>&nbsp;General.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>Complicaciones (poco frecuentes):</strong>&nbsp;Sangramientos, infecci&oacute;n, necrosis, asimetr&iacute;a.</p>

<p><strong>Tiempo de recuperaci&oacute;n:</strong>&nbsp;</p>

<p>&bull; De 3 a 12 d&iacute;as para volver al trabajo.</p>

<p>&bull; De 4 a 6 semanas para realizar todo tipo de actividad.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;dolor leve, sangrado leve las primeras 24 horas, inflamaci&oacute;n y edema en algunos pacientes alrededor del &aacute;rea (ojos y nariz).</p>

<p><strong>Resultados:</strong>&nbsp;Los resultados definitivos se observan a partir de los seis meses.</p>
`,
            questions: [
              {title: '¿A qué edad es posible operarse?', id: 123, text: `Cuando se ha terminado el proceso de osificación de los huesos de la cara, normalmente entre los 15 y los 17 años. No obstante siempre es mejor esperar a la mayoría de edad antes de tomar la decisión de operarse.`},
              {title: '¿Cuándo se ve el resultado definitivo?', id: 435, text: `Al retirar el yeso a los diez días, la nariz tendrá una forma correcta y lo suficientemente buena para hacer una vida totalmente normal. Pero el resultado definitivo en lo que a detalles se refiere precisará de un tiempo mayor, por lo general unos seis meses para lograr la apariencia final.`},
              {title: '¿Podrá el paciente respirar por la nariz?', id: 678, text: `No lo es. En general no se precisan analgésicos por más de tres días.`},
              {title: '¿Qué cuidados post-operatorios debo que seguir?', id: 789, text: `El post-operatorio no es doloroso, sin embargo se indican analgésicos anti-inflamatorios. Si tiene ganas de estornudar, hágalo con la boca abierta, dejando salir el aire libremente. En el momento de retirar el yeso, los edemas y hematomas visibles ya habrán desaparecido y la nariz se encontrará en unas condiciones lo suficientemente buenas como para que el paciente pueda realizar su vida con normalidad. Sin embargo, el aspecto estético definitivo deberá seguir una evolución que llevará un tiempo no inferior a los seis meses. Se trata de una evolución lenta y progresiva que puede incluso pasar desapercibida. Sin embargo, hay que insistir en su gran importancia para el resultado definitivo. Se colocaran, además, adhesivos directamente en la piel para controlar la inflamación. Se deberán usar por tres semanas`},
              {title: '¿Qué riesgos entraña la operación?', id: 613, text: `No lo es. En general no se precisan analgésicos por más de tres días.`},
              {title: '¿Puedo escoger la nariz que deseo?', id: 864, text: `No. Ningún cirujano plástico, por muy experto que sea, puede inferir al 100% cómo quedará la nariz luego de la cirugía. Del mismo modo, tampoco debemos confiar en que un computador, por medio de una simulación fotográfica, nos indicará exactamente cómo será la futura nariz. La estructura física de la cara y las proporciones del mentón, la frente, etc. son usadas por el cirujano para la planificación quirúrgica. Nuevamente, insistimos en que la relación médico-paciente es, sin duda alguna, pieza clave para direccionar el plan quirúrgico.`},
              {title: '¿Se puede tomar el sol?', id: 7543, text: `Si en su caso tiene cicatriz en la base de la nariz no debe recibir sol al menos por un mes. De igual manera si persisten pequeños morados en las zonas alrededor de la nariz debe alejarse del sol hasta que estos hayan desaparecido por completo.`},
              {title: '¿Será posible usar lentes?', id: 125, text: `Aunque no sea visible, el edema provocado por la operación persiste largo tiempo. Esto se nota usando gafas porque dejan una marca profunda en el punto de apoyo sobre la nariz. No existe una contraindicación, pero sí una recomendación de no llevarlas de forma continua durante los dos primeros meses después de la intervención. Pueden usarse si se va reposando de vez en cuando dejando el tiempo necesario para que la marca se recupere.`},
            ],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Lifting facial',
            id: 27,
            images: [
              {url: '/static/img/liftingfacial-1.jpg'},
              {url: '/static/img/liftingfacial-2.jpg'},
              {url: '/static/img/liftingfacial-3.jpg'},
            ],
            label: 'female',
            detail: `<p>El estiramiento facial, tambi&eacute;n conocido como rejuvenecimiento facial, es un procedimiento que puede ayudar a reparar algunos de los signos visibles del envejecimiento evidenciado en forma natural por la piel descolgada, ca&iacute;da y arrugada de la cara y el cuello.</p>

<p>Consiste b&aacute;sicamente en reposicionar las capas musculares, la piel y la grasa, retirando el tejido sobrante mediante incisiones que habitualmente quedan bien camufladas en el cuero cabelludo. Se extienden al interior de las l&iacute;neas naturales que existen en las orejas y contin&uacute;an alrededor del l&oacute;bulo y, en algunos casos, detr&aacute;s de la oreja y del cuero cabelludo.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres a quienes el envejecimiento natural por el paso del tiempo, la exposici&oacute;n prolongada a los rayos solares o el estr&eacute;s de la vida cotidiana han dejado secuelas evidentes en la cara y el cuello, provocando surcos y pliegues que hacen que la expresi&oacute;n pierda definici&oacute;n.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Ritidoplastia</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De 4 a 5 horas (dependiendo de cada caso).</p>

<p><strong>Anestesia:</strong>&nbsp;General.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;De medio d&iacute;a a un d&iacute;a, de acuerdo con las necesidades de cada caso.</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Inflamaci&oacute;n, dolor leve, equimosis (morados), sangramiento leve a trav&eacute;s de los drenajes.</p>

<p><strong>Riesgos:</strong>&nbsp;Dolor, hematomas, infecci&oacute;n, da&ntilde;o nervioso temporal o permanente.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>&bull; De 2 a 3 semanas para reintegrarse al trabajo.</p>

<p>&bull; De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p>

<p>&bull; De 4 a 8 semanas para resoluci&oacute;n completa.</p>

<p><strong>Duraci&oacute;n de resultados:</strong>&nbsp;De 8 a 10 a&ntilde;os.</p>
`,
            questions: [],
            group: 'facial'
          },
          {
            name: 'Levantamiento de cejas',
            id: 28,
            images: [],
            label: 'female',
            detail: `<p>
La Pexia de Cejas es un procedimiento que tiene como objetivo elevar la cola de las cejas para darles una forma m&aacute;s est&eacute;tica.

Candidatas: Mujeres que presentan ca&iacute;da de las cejas con el paso de los a&ntilde;os.

Nombre del procedimiento: Pexia Ciliar

Duraci&oacute;n: Una hora, aproximadamente. Si se acompa&ntilde;a de cirug&iacute;a de los p&aacute;rpados el tiempo se prolonga a dos horas, aproximadamente.

Anestesia: Local.

Hospitalizaci&oacute;n: Ambulatorio.

S&iacute;ntomas post-operatorios: Inflamaci&oacute;n leve del &aacute;rea que dura un par de d&iacute;as. No deber&iacute;a manifestarse dolor.

Riesgos: Sangramiento o infecci&oacute;n de la herida (sumamente raro).

Recuperaci&oacute;n:

&bull; Un d&iacute;a para regresar a sus actividades.

&bull; Si se acompa&ntilde;a de cirug&iacute;a de los p&aacute;rpados de cinco d&iacute;as a una semana para volver a sus actividades.

Duraci&oacute;n de los resultados: Varios meses u a&ntilde;os, dependiendo de cada caso.</p>
`,
            questions: [],
            group: 'facial'
          },
          {
            name: 'Cirugia de parpados',
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
            detail: `<p>Consiste en resecar excesos de piel y bolsas de grasa alrededor de los p&aacute;rpados. Se realiza tanto en p&aacute;rpados superiores como en inferiores.</p>

<p><strong>Candidatas:</strong></p>

<p><strong>Mujeres de cualquier edad con:</strong></p>

<p>&bull; bolsas bajo los ojos (ojeras),&nbsp;</p>

<p>&bull; exceso de piel en los p&aacute;rpados,&nbsp;</p>

<p>&bull; dificultad para abrir los ojos completamente y mirada triste o cansada.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Blefaroplastia</p>

<p><strong>Duraci&oacute;n:</strong>&nbsp;De una a dos horas, dependiendo de si se operan los cuatro p&aacute;rpados a la vez o s&oacute;lo los superiores o los inferiores.</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio</p>

<p><strong>S&iacute;ntomas post-operatorios:</strong>&nbsp;Inflamaci&oacute;n, enrojecimiento y sangrado leve del &aacute;rea. Dolor leve las primeras 24 Horas.</p>

<p><strong>Riesgos:</strong>&nbsp;Sangramiento, infecci&oacute;n, cicatriz antiest&eacute;tica (muy raro), resecci&oacute;n incompleta de las bolsas.</p>

<p><strong>Recuperaci&oacute;n:</strong>&nbsp;Una semana para regresar al trabajo.</p>

<p><strong>Duraci&oacute;n de los resultados:</strong>&nbsp;Aproximadamente 10 a&ntilde;os, dependiendo de la piel del paciente.</p>
`,
            questions: [
              {title: '¿Qué medicamentos debe evitar antes y después de la cirugía?', id: 1, text: `Debe evitar ingerir anticoagulantes –aspirina, vitamina E`},
              {title: '¿Cuándo podré volver al trabajo?', id: 2, text: `Normalmente entre el quinto y el séptimo día después de la cirugía.`},
              {title: '¿Cuándo puedo maquillarme?', id: 3, text: `Transcurrida una semana de la operación, luego de retirar los puntos. Es conveniente utilizar protector solar que puede usarse como base para el maquillaje.`},
              {title: '¿Qué cuidados debo seguir luego de la cirugía?', id: 4, text: `Mantener la cabeza elevada (posición semisentada). Aplicar compresas frías varias veces al día las primeras 48 horas (puede usar manzanilla fría). Usar lentes oscuros por 24 horas. Evitar ver TV o computadoras por 24 horas. Evitar el sol por un mes mínimo.`},
              {title: '¿Qué riesgos específicos presenta la blefaroplastia?', id: 5, text: `Los riesgos son poco frecuentes. Entre ellos están hemorragias, infección, irritación ocular y remanentes de las bolsas.`},
              {title: '¿Tengo que tomar alguna precaución antes de la intervención?', id: 6, text: `La piel deberá estar bien hidratada y limpia, libre de restos de cosméticos, y sin ningún tipo de lesión. No debe haber ninguna infección en sus ojos,. No es necesario acudir al oftalmólogo antes de la operación. Suspender ingesta de alcohol y/o cigarros una semana antes de la cirugía. Avisar si utiliza lentes de contacto, si tiene alergia a algún medicamento o consume alguna medicina.`},
            ],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Reduccion de mejillas',
            id: 30,
            images: [],
            detail: `<p>Las bolsas de Bichat son unas gl&aacute;ndulas de tejido graso que se encuentran en las mejillas, justo debajo de los p&oacute;mulos. Estas gl&aacute;ndulas no cumplen ninguna funci&oacute;n espec&iacute;fica en los adultos por lo que muchos pacientes optan por extraerlas para darle un aspecto refinado y angular al rostro.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres con mejillas regordetas que busquen afinar y estilizar la apariencia de su rostro.</p>

<p><strong>Nombre del procedimiento:</strong>&nbsp;Bichectom&iacute;a</p>

<p><strong>Duraci&oacute;n del Procedimiento:</strong>&nbsp;Aproximadamente 1 hora.</p>

<p><strong>Anestesia:</strong>&nbsp;Local m&aacute;s sedaci&oacute;n.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados).</p>

<p><strong>Riesgos:</strong>&nbsp;Infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:</strong></p>

<p>24 horas de reposo y aproximadamente 2 semanas sin realizar ejercicios extenuantes</p>

<p><strong>Resultados definitivos:&nbsp;</strong></p>

<p>Los cambios son definitivos y se aprecian entre uno y seis meses luego del procedimiento, dependiendo del paciente.&nbsp;</p>

<p>Si el paciente gana una cantidad importante de peso, es factible que se pierdan los resultados de la bichectom&iacute;a.</p>
`,
            questions: [],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Lifting de cuello',
            id: 31,
            images: [],
            detail: `<p>Con el paso del tiempo, los tejidos de la piel sufren las consecuencias de la edad al comenzar a evidenciar flacidez y descolgamiento. Aunque este es un proceso natural del envejecimiento, muchas mujeres prefieren recuperar la firmeza de la piel de su cuello, y con ello la confianza en s&iacute; mismas, a trav&eacute;s de un procedimiento quir&uacute;rgico que rejuvenezca su aspecto.</p>

<p>A trav&eacute;s de un lifting de cuello la paciente podr&aacute; obtener una apariencia joven y tersa en la piel al eliminar la flacidez de la piel del cuello, reduciendo significativamente las arrugas en esta zona y otorgando un aspecto mucho m&aacute;s joven.</p>

<p><strong>Candidatas:</strong>&nbsp;Mujeres con piel suelta en la zona del cuello y expectativas realistas en relaci&oacute;n a su aspecto luego del procedimiento</p>

<p><strong>Nombre del Procedimiento:</strong>&nbsp;Ritidectom&iacute;a baja</p>

<p><strong>Duraci&oacute;n del Procedimiento:</strong>&nbsp;De 2 a 5 horas, dependiendo de la complejidad.</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n o general.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor moderado, equimosis (morados)</p>

<p><strong>Riesgos:</strong>&nbsp;Infecci&oacute;n.</p>

<p><strong>Recuperaci&oacute;n:&nbsp;</strong></p>

<p>2 o 3 d&iacute;as de reposo y aproximadamente 2 semanas para volver a las actividades diarias</p>

<p><strong>Resultados definitivos:&nbsp;</strong></p>

<p>Los resultados de un lifting pueden durar entre 10 y 15 a&ntilde;os.</p>
`,
            questions: [],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Cirugia de orejas',
            id: 32,
            images: [],
            label: 'female',
            detail: `<p>Si te molesta la manera en que las orejas sobresalen de la cabeza, o si una o ambas orejas son deformes debido a una lesi&oacute;n o un defecto cong&eacute;nito, puedes someterte a una otoplastia con el fin de conseguir un aspecto m&aacute;s est&eacute;tico en tus orejas.</p>

<p>La otoplastia puede hacerse a cualquier edad una vez que las orejas hayan alcanzado su tama&ntilde;o definitivo -generalmente a los 5 a&ntilde;os de edad- y durante la adultez.</p>

<p><strong>Candidatos:&nbsp;</strong></p>

<p>&bull; Pacientes con orejas grandes y protuberantes.</p>

<p>&bull; Pacientes con l&oacute;bulos agrandados.&nbsp;</p>

<p>&bull; Pacientes con orejas ca&iacute;das.&nbsp;</p>

<p><strong>Nombre del Procedimiento:</strong>&nbsp;Otoplastia</p>

<p><strong>Duraci&oacute;n del Procedimiento:</strong>&nbsp;Aproximadamente 1 hora.</p>

<p><strong>Anestesia:</strong>&nbsp;Local + sedaci&oacute;n.</p>

<p><strong>Hospitalizaci&oacute;n:</strong>&nbsp;Ambulatorio.</p>

<p><strong>S&iacute;ntomas:</strong>&nbsp;Inflamaci&oacute;n, dolor, equimosis (morados), hipersensibilidad en la piel.</p>

<p><strong>Riesgos:</strong>&nbsp;Asimetr&iacute;a.</p>

<p><strong>Recuperaci&oacute;n:&nbsp;</strong></p>

<p>2 o 3 d&iacute;as de reposo y aproximadamente 1 semana para volver a las actividades diarias.</p>

<p>El paciente debe de llevar una banda que mantenga las orejas pegadas a la cabeza por al menos 1 mes.</p>

<p><strong>Resultados definitivos:&nbsp;</strong></p>

<p>Una vez retiradas las vendas, observar&aacute;s un cambio inmediato en la apariencia de tus orejas. Estos cambios son permanentes.</p>
`,
            questions: [
              {title: '¿A partir de qué edad se puede realizar esta cirugía en niños?', id: 1, text: `Desde los 6 años.`},
              {title: '¿Cómo son las cicatrices?', id: 2, text: `La cicatriz quedará en la parte posterior de la oreja, por lo que resultará imperceptible incluso al llevar el cabello corto o recogido.`},
              {title: '¿Cuándo se podrá hacer vida normal?', id: 3, text: `A los pocos días. Podrá realizar ejercicios físicos a partir de las tres semanas.`},
              {title: '¿Es doloroso?', id: 4, text: `Puede molestar al contacto o presión durante el primer mes.`},
              {title: '¿Qué cuidados postoperatorios debo seguir?', id: 5, text: `Los 21 días posteriores a la cirugía, se debe utilizar una prenda de compresión ligera (algodón y banda elástica) para proteger las orejas de golpes o gestos bruscos.`},
            ],
            group: 'facial'
          },
          {
            name: 'Toxina botulinica',
            id: 33,
            images: [],
            label: 'female',
            group: 'treatments',
            questions: [],
            detail: `<p>La aplicaci&oacute;n de toxina botul&iacute;nica, conocida como botox, se ha convertido en uno de los tratamientos faciales m&aacute;s solicitado en mi consulta ya que mejora la apariencia y evita el envejecimiento de la piel sin cirug&iacute;a.</p>

<p>Si deseas aplic&aacute;rtelo, no olvides las siguientes sugerencias</p>

<ul>
\t<li>Est&aacute; indicado para pacientes que tienen l&iacute;neas de expresi&oacute;n muy marcadas, y que tienen un m&uacute;sculo fuerte que produce una contracci&oacute;n importante y una arruga muy notoria.&nbsp;</li>
\t<li>Es un procedimiento muy r&aacute;pido. Primero se buscan el &aacute;rea m&aacute;s fuerte del m&uacute;sculo para aplicarlo, posteriormente se marca con unos puntos, se inyecta y listo.</li>
\t<li>Las zonas en las que puede aplicarse son el entrecejo, la frente y en las l&iacute;neas de expresi&oacute;n que se forman por el movimiento del m&uacute;sculo. Normalmente hay que cuidar que al aplicar toxina botulinica se reserven algunas zonas, como por ejemplo, en el caso de la frente, se debe evitar tocar los m&uacute;sculos que levantan las cejas, ya que si estos se inhiben, el paciente se percibe con los p&aacute;rpados ca&iacute;dos.</li>
\t<li>Despu&eacute;s de la aplicaci&oacute;n del botox, empieza a hacer efecto y cl&iacute;nicamente se ve la inhibici&oacute;n del movimiento del m&uacute;sculo entre las 48 y 72 horas despu&eacute;s. El paciente nota que no puede contraer el m&uacute;sculo por m&aacute;s que lo intente. Ese efecto se vuelve total o completo entre los 7 y 10 d&iacute;as despu&eacute;s de que se inyect&oacute;.</li>
</ul>

<p>La aplicaci&oacute;n de botox es el procedimiento cosm&eacute;tico m&aacute;s sencillo y no requiere de un periodo de recuperaci&oacute;n largo. Simplemente aseg&uacute;rate de hacerlo con un especialista comprobado y ac&eacute;rcate al cambio que t&uacute; mereces.</p>
`,
          },
        ]
    }
  },
  {
    id: 1234,
    language: 'EN',
    section: 'procedures',
    options: {
      title: 'Procedures',
      sectionsList: {
        corporal: 'Corporal Surgery',
        facial: 'Facial Surgery ',
        treatments: 'Treatments'
      },
      procedures: [
          {
            name: 'Pectoral augmentation',
            id: 1,
            label: 'male',
            group: 'corporal',
            detail: `<p>Procedure by which implants designed for the pectoral muscle are placed, in order to project and improve the shape of the muscle, giving it a masculine result.</p>
  
  <p>The width of the thorax, as well as the projection and muscular shape represent the manly impetus. Some individuals have defective muscular development of the pectoralis muscle and this area does not grow adequately.</p>
  
  <p>In patients with mild chest deformities, such as hollow chest and congenital absence of pectoral muscles, the placement of pectoral implants can be useful to correct them.</p>
  
  <p>Likewise, for some men who work the muscles of their body through exercise, it is frustrating to see that despite training and routines with weights, the pectoral muscles do not develop as desired.</p>
  
  <p>Candidates:</p>
  
  <p>Men who:</p>
  
  <p>&bull; have little development of the pectoral muscles.</p>
  
  <p>&bull; have congenital malformations such as excavated chest or absence of pectoral muscles.</p>
  
  <p>&bull; despite performing exercises to increase the pectoral muscles, they do not achieve sufficient results.</p>
  
  <p>Procedure Name: Pectoral Augmentation</p>
  
  <p>Duration: Between 1 and 2 hours maximum.</p>
  
  <p>General anesthesia.</p>
  
  <p>Hospitalization: Outpatient.</p>
  
  <p>Postoperative symptoms: Swelling, moderate pain, ecchymosis (purple).</p>
  
  <p>Risks: Pain, bruising and infection.</p>
  
  <p>Recovery:</p>
  
  <p>&bull; One week to return to work</p>
  
  <p>&bull; From 2 to 3 weeks to perform walking-type exercises.</p>
  
  <p>&bull; Three months for complete resolution and to perform any type of exercise or strength.</p>
  
  <p>Duration of results: Permanent, as long as a stable weight is maintained.</p>
  
  `,
            questions: [],
            images: []
          },
          {
              name: 'Gluteoplasty',
              id: 2,
              questions: [
                {title: 'Will I be able to sit safely and receive injections in the buttocks?', id: 4123123752656, text: 'Preferably, avoid injections in the buttocks if you have a prosthesis, since the implants could be punctured. There is no discomfort in sitting down, since, when we sit down, the prostheses adopt a privileged location between the muscles, which prevents them from being crushed.'},
                {title: 'How will my buttocks look?', id: 23465562, text: 'With this surgery you can improve your appearance and self-esteem, but it will not necessarily change the perception that others have of you or give you a perfect figure. Before you decide, think carefully about your expectations.'},
                {title: 'What is the correct location of the buttock prostheses?', id: 3456234134638, text:  `The best ones are those that remain between the muscles, never the subcutaneous ones (below the fat)`},
                {title: 'What is the advantage between using buttock prostheses and injected implants?', id: 1341234513245, text: `Injected implants are being used by a large number of people around the world: plastic surgeons, beauticians, hairdressers and anyone who wants to make easy money, regardless of the complications that this could generate. These injected implants are nothing more than liquid plastics called by different names to confuse the community and those who do not know about the complications that they entail. The names that are being used are: expanding cells, methacrylates, biopolymers, methacryl and other trade-oriented names. These plastics can never be removed from the body and the complications they cause will be for the rest of life. We see how, unlike injected implants, buttock prostheses can be removed, if necessary, and without the complications that injections entail.`},
                {title: 'What are the complications of gluteal prostheses?', id: 2352351241346357, text: `The most feared is infection, since the gluteal area -for obvious reasons- is highly contaminated. Others include bruising, unsightly shape, skin retraction, suture dehiscence, dissatisfaction with the result.`},
                {title: 'When is this surgery contraindicated?', id: 234612342345245, text: `In cases of having an active infection, coagulation disorders, healing disorders, in immunosuppressed patients, pregnant women and/o con expectativas poco realistas.`},
                {title: 'How long is the recovery time?', id: 2341523234, text: `Patients can walk home. The sensation of pain will disappear with the indicated muscle relaxant and analgesic. They can sit down after the third day, go back to work after a week. Walking exercises from three weeks. Complete recovery after three months.`},
                {title: 'Should I wear girdles?', id: 1242523634567678672345235, text: `A girdle must be worn for a period of six weeks, as is routine in cases of liposculpture. Thus, the inflammation decreases more quickly and the prostheses remain in their indicated position.`},
                {title: 'Do these prosthetics change?', id: 6795614325134, text: `These implants have a lifetime guarantee. They should be changed in cases of capsular rupture or contracture. Sometimes patients request replacement to increase volume after several years.`},
              ],
              detail: `<p>Gluteoplasty is the procedure by which the buttocks are molded in case of poor muscle development, unpleasant accumulations of fat in their surroundings, acquired disorders or congenital malformations.</p>
  <p>Las dos únicas alternativas seguras para realizar este procedimiento son:</p><p>Lipoinyección. Consiste en infiltración de grasa propia del paciente. La grasa obtenida de distintas partes del cuerpo, como abdomen y muslos, se prepara y enriquece con factores de crecimiento y luego se inyecta en los glúteos para mejorar forma y volumen.</p><p><strong>Implantes glúteos:</strong> prótesis de silicona diseñadas para mejorar el volumen y la forma de los glúteos.</p><p><strong>Candidatas:&nbsp;</strong></p><p>Mujeres con:</p><p>• poco desarrollo de los músculos glúteos.</p><p>• cúmulos de grasa en los alrededores de los glúteos que ocasionan deformidad o aspecto estético.</p><p>• trastornos adquiridos, como accidentes, quemaduras, etc.</p><p>• malformaciones congénitas, y</p><p>• atletas que a pesar de realizar ejercicios para aumentar los glúteos no consiguen resultados suficientes.</p><p>&nbsp;</p><p><strong>Nombre del procedimiento:</strong> GLUTEOPLASTIA</p><p><strong>Duración:</strong> De 2 a 3 horas, dependiendo de los elementos específicos del caso.</p><p><strong>Anestesia:</strong> General o peridural.</p><p><strong>Hospitalización:</strong> Ambulatoria o puede requerir una noche de hospitalización.</p><p><strong>Síntomas post-operatorios:</strong> Inflamación, dolor moderado, equimosis (morados).</p><p><strong>Riesgos:</strong> Dolor, hematomas, infección, lesión cutánea, asimetrías, trombosis.</p><p><strong>Recuperación:</strong></p><p>• Una semana para reintegrarse al trabajo.</p><p>• De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p><p>• Tres meses de resolución completa para realizar cualquier tipo de ejercicio o fuerza.</p><p><strong>Duración de resultados:</strong> permanentes, siempre y cuanto se mantenga un peso estable.</p>`,
              label: 'male',
              group: 'corporal',
              images: []
            },
          {
            name: 'Abdominal surgery',
            id: 3,
            questions: [
              {title: 'What type of anesthesia will I receive?', id: 467851, text: `Epidural anesthesia with sedation or more general epidural anesthesia, or only general.`},
              {title: 'What is postoperative analgesic therapy?', id: 12345179, text: `It is a type of anesthesia that is placed from the surgery room and that allows the patient not to experience pain or discomfort when waking up. The anesthesia, which is also placed by the anesthesiologist, can be maintained for a few more days, as the case warrants.`},
              {title: 'What postoperative care should I have?', id: 12352437, text: `Wear the girdle for at least four weeks after the operation. Carry out the postoperative therapies that the doctor suggests. Keep proper rest. Even though you will feel fine the day after surgery, you should avoid weight bearing for about a fortnight after the operation. Try to walk somewhat stooped for a week to prevent the scar from being subjected to tension. Constantly change position in bed from the pavilion exit, mobilize the feet, flex the legs. These maneuvers will increase blood circulation in the legs. Cover the operated area when taking a bath. Take care of the wound that remains after the removal of the stitches, ten days after the operation. It is possible to perform walking exercises in the third week. However, you will have to wait until the fourth or fifth week to lift weights.`},
              {title: 'Can I smoke before or after surgery? What medications should I not take?', id: 12352454897834563467, text: `You should avoid smoking for at least ten days before surgery and fifteen days after surgery. Nicotine is a powerful vasoconstrictor (clogs blood vessels) that will end up ruining your surgery and making it difficult to heal, and in some cases could lead to other complications as well. Be cautious and take care of your surgery. You should not take aspirin or similar medications before surgery. If you are receiving any treatment you should notify your doctor.`},
              {title: 'Will I miss the surgery if I decide to get pregnant?', id: 1234537791, text: `The result can be preserved as long as it does not exceed its weight during pregnancy.`},
              {title: 'What does abdominal surgery consist of?', id: 1234537792, text: `A large amount of excess or sagging skin and fat is removed. During surgery, the abdominal muscles (or the so-called "squares", which in athletes are well defined) are sutured, bringing them together in the medial part so that they gain strength and tone. This is how the waist will be more curved, which will produce in the abdomen the feeling of having exercised for a long time. The navel is harnessed and placed in the same position as it was before.`},
              {title: 'How many kilos will I lose with the surgery?', id: 1234537793, text: `Naturally, you will lose a few kilos, but the most important thing will be that you will gain a harmonious figure with a well-proportioned abdomen with respect to the trunk and limbs.`},
              {title: 'How long does it take to perform my surgery?', id: 12345377931, text: `Normally this surgery takes between two and three hours. It will depend on the magnitude of the tissue to be removed.`},
              {title: 'What will the scars be like?', id: 12345377932, text: `Depending on the characteristics of the patient, a normal abdominoplasty or a mini abdominoplasty will be performed. You will be informed of the final length of the scar, which will be determined by the characteristics of the abdomen.`},
              {title: 'Will the scar be visible?', id: 12345377933, text: `Currently, the scar left by the intervention is easily concealable, since it remains inside the bikini. They are very discreet scars. Imagine a caesarean section scar that is slightly longer on the sides. We can also eliminate with this technique those scars from caesarean sections or other abdominal surgeries that have been previously performed.`},
            ],
            detail:`

        <p>The abdomen is one of the areas of the body where fat accumulates more easily. Pregnancies, often followed by distension of the abdominal muscles, weight variations and hormonal disorders, contribute to the formation of an unattractive or deformed abdomen. Abdominoplasty helps to recover a flat stomach and outline the body silhouette.</p>

        <p>The abdominal wall is basically made up of three elements: the skin, the subcutaneous cellular tissue, with the underlying fat, and the muscle layer. The involvement of any of these three elements will lead to the formation of an abdominal deformity that, depending on each case, will require specific treatment.</p>

        <p>Candidates:</p>

        <p>&bull; Women who, being close to their ideal weight, have accumulation of fat in the abdomen and loose skin that do not respond to diet or exercise.</p>

        <p>&bull; Women with massive weight loss.</p>

        <p>&bull; Women who, due to pregnancy, present irreversible dilation of the skin and abdominal muscles.</p>

        <p>Procedure Name: ABDOMINOPLASTY</p>

        <p>Duration: From two to four hours (depending on the extension).</p>

        <p>Anesthesia: General or epidural.</p>

        <p>Hospitalization: Outpatient or may require overnight hospitalization.</p>

        <p>Post-operative symptoms: Swelling, moderate pain, ecchymosis (purple), slight bleeding through the drain.</p>

        <p>Risks: Pain, bruising, infection, skin injury.</p>

        <p>Recovery:</p>

        <p>&bull; Between 2 and 3 weeks to return to work.</p>

        <p>&bull; Between 3 and 4 weeks for walking-type exercises.</p>

        <p>&bull; At three months complete resolution to perform any type of exercise or force.</p>

        <p>Duration of results: Permanent, as long as a stable weight is maintained.</p>`,
            label: 'male',
            group: 'corporal',
            images: []
          },
          {
            name: 'Laser liposuction',
            id: 4,
            questions: [
              {title: 'How is the scar left by liposculpture?', id: 1234513668, text: `Normally, the small incisions that are made do not exceed five millimeters and disappear almost entirely after three months. However, additionally, the foresight is taken to make the incisions in strategic places (folds, grooves) so that they can be completely concealed.`},
              {title: 'What is the period of hospitalization?', id: 1233454567, text: `It is usually an outpatient surgery. If it is done with another large surgery, it is recommended that the patient be hospitalized.`},
              {title: 'What are the areas that can be treated?', id: 123557908651, text: `• double chin

               • Arms
              
               • Abdominal region
              
               • Waist
              
               • Back
              
               • External face of the thigh (“revolveras”)
              
               • Anterior aspect of the thigh
              
               • Buttocks.`},
              {title: 'When should I self-donate blood?', id: 123, text: `Self-donation consists of extracting a small amount of blood from the patient, preferably before the third day prior to surgery, so that the extracted red blood cells have been replaced by the time of the operation. Your blood is stored in the clinic's blood bank and is reinjected into your body in the immediate postoperative period. This technique, in addition to allowing to replace the volume that could be lost with surgery, promotes a faster recovery and without imbalance of blood volume. Using your own blood eliminates the risks of contracting contagious diseases.`},
              {title: 'Will having children after the operation make me lose its effects?', id: 345, text: `The results can be preserved after pregnancy, as long as your weight is controlled by a specialist. If you do not develop many stretch marks or the flaccidity is not greater, the shapes obtained with liposculpture are maintained.`},
              {title: 'Is any cure used?', id: 676, text: `When it comes to surgeries in which a large amount of fat was removed, it is recommended to wear a girdle for four to six weeks after the intervention.`},
              {title: 'Is liposuction dangerous?', id: 8, text: `Liposuction rarely causes problems. The danger is neither greater nor less than in other surgeries, as long as it is carried out in accordance with all applicable technical standards. Care must be taken not to extract large volumes of fat. As a criterion established internationally by plastic surgeons, it is recommended not to remove more than five to seven percent of the body weight. Currently, for surgeries in which large volumes have to be removed, self-donation of blood is recommended.`},
              {title: 'Is the postoperative period very painful?', id: 0, text: `Generally not. The pain is controlled with common pain relievers.`},
              {title: 'How long will it take to see the results?', id: 65, text: `All surgery goes through a variable phase of deflation. It depends on the patient and the areas that were treated. During the first 30 days after surgery, the patient may not fully perceive the results. After this period, a disinflammation of the area begins. After three months you can already see an excellent result. We recommend performing postoperative therapies (lymphatic drainage and/or exercises), aimed at modeling and reducing tissue inflammation.`},
              {title: 'How many kilos will I lose with the surgery?', id: 34 , text: `More than talking about losing kilos, we must talk about reducing sizes. Normally the patient can lose between four to six kilos, but it is really in the reduction of the sizes of pants, bra, shirts, etc. where the change is noticed.`},
              {title: 'How long does the surgical act take?', id: 675 , text: `This will depend on the extent of the areas to be treated. It can take between one and three hours, on average.`},
              {title: 'When can I take a bath?', id: 1234 , text: `The next day you can take a bath. If the procedure has been done in conjunction with another surgery then you should see your doctor.`},
              {title: 'What type of anesthesia is applied?', id: 5467 , text: `Most cases are performed under general anesthesia, in this way better results are obtained.`},
            ],
            detail: `<p>The elimination of excess fat is a challenge that cosmetic surgery overcomes more and more easily.</p>

<p>Laser liposuction or Laserlipolysis is currently the most widely used mechanism of action worldwide for the removal of localized fat or general laser-assisted liposuction. Its purpose is to emulsify the fat and achieve its extraction easily and safely, without damaging adjacent tissues and in a very short time.</p>

<p>The great advantage of the procedure is that it combines the power of the laser to shape areas of the body with uniformity, without bleeding and with excellent skin retraction. This allows recovery in a very short time because it does not require general anesthesia for its performance.</p>

<p>Candidates:</p>

<p>&bull; Women who, despite being within their ideal weight, have fat deposits in localized areas and want to eliminate them to improve their physical appearance.</p>

<p>&bull; Overweight women, without morbid obesity, who are on a diet.</p>

<p>&bull; Women who have undergone bariatric weight loss surgery and have reached their ideal weight.</p>

<p>&bull; It should not be performed in people with morbid obesity. In those cases, bariatric surgery is done first to lose weight and then surgery to improve body contour.</p>

<p>Procedure Name: Laser Liposculpture</p>

<p>Duration: From 1 to 4 hours, depending on the length of the procedure.</p>

<p>General anesthesia</p>

<p>Hospitalization: Generally outpatient. It may require a day of hospitalization.</p>

<p>Recovery:</p>

<p>&bull; 5 days to return to work.</p>

<p>&bull; 1 to 2 weeks for more strenuous activities and sports.</p>

<p>&bull; Four weeks for full resolution.</p>

<p>Duration of the results: They can be permanent if a healthy diet is maintained, accompanied by exercises.</p>

<p>Treatment description:</p>

<p>A probe that emits high-frequency waves liquefies the fat, which is then removed with low-pressure suction.</p>

<p>When the probe is passed in the superficial fat layer it helps to improve cellulite. The procedure facilitates the aspiration of fibrous areas such as the rolls of the back, riding pants and in reoperations.</p>

<p>Produces better skin retraction, especially in areas of flaccidity: arms, inner thighs and abdomen of older women.</p>

<p>It produces less blood loss and less bruising, because it does not injure vessels.</p>

<p>It improves the &ldquo;poceado&rdquo; of cellulite due to a regenerative effect of the collagen of the dermis.</p>

<p>Team:</p>

<p>&bull; Laser type: DUO diode laser</p>

<p>&bull; Model: Siemens SixLaserDuo 9-20</p>

<p>&bull; Wavelength: 808nm and 980nm</p>

<p>&bull; Maximum Power: 30W</p>

<p>&bull; Repetition Rate: 0.6 Hz-10k Hz</p>

<p>&bull; Transmission system: Fiber optic 400um- 600um</p>

`,
            label: 'male',
            group: 'corporal',
            images: [
              {url: '/static/img/lipolaser-1.jpg'}
            ]
          },
          {
            name: 'Ginecomasty',
            id: 5,
            label: 'male',
            group: 'corporal',
            detail: `<p>It is the procedure that is carried out to eliminate the mammary glandular tissue in men, when it is developed in a pathological way.</p>

<p>The tissue can be removed through two techniques, liposuction, or the reception of the glandular tissue through a small scar, usually in the lower half of the areola or the entire areola when skin must be collected due to excess.</p>

<p>Candidates:</p>

<p>&bull; Men from the age of 16, who have a normal body mass index (between 25 and 30), that is, who are not overweight or obese.</p>

<p>Procedure Name: Gynecomastia</p>

<p>Duration: From 1 to 2 hours.</p>

<p>General anesthesia.</p>

<p>Hospitalization: Outpatient. It can be associated with liposculpture. Depending on the case, it could merit a night of hospitalization</p>

<p>Post-operative symptoms: Mild edema or swelling. Minor pain or discomfort</p>

<p>Risks: Hemorrhage. Hematoma. Seroma (accumulation of fluid). Infection.</p>

<p>Recovery:</p>

<p>It depends on the technique.</p>

<p>&bull; Liposculpture: Recovery to exercise in 15 days.</p>

<p>&bull; Dry skin: Recovery to exercise in 21 days or a month.</p>

<p>Duration of results: If the cause of gynecomastia is corrected before surgery, the results are permanent. Otherwise, you can resubmit.</p>

<p>The causes of gynecomastia can be: Overweight or obesity, liver problems, medications taken by the patient, hormonal or idiopathic disorders, the latter refer to when the cause is unknown, this occurs in 30 or 65% of cases.</p>

<p>&bull; Calf augmentation</p>

<p>In order to have a good appearance in the legs, it is necessary that all its parts look shapely and with defined muscles, however, the calves are usually an area that is not given much attention, despite the fact that their lack of development creates an unsightly appearance.</p>

<p>With this surgical procedure, the patient can increase the volume of the calf muscles by placing implants that are adapted to the patient&#39;s anatomy and that give the legs a more shapely appearance.</p>

<p>Candidates:</p>

<p>&bull; Men with poorly developed calf muscles.</p>

<p>&bull; Men who, despite performing exercises to increase the calf muscles, do not achieve sufficient results.</p>

<p>&bull; Men with congenital malformations.</p>

<p>Procedure Name: CALF AUGMENTATION</p>

<p>Duration: Between 1 and 2 hours.</p>

<p>Anesthesia: General or epidural.</p>

<p>Hospitalization: Outpatient.</p>

<p>Symptoms: Inflammation, moderate pain, ecchymosis (purple).</p>

<p>Risks: Pain, bruising and infection.</p>

<p>Recovery:</p>

<p>&bull; 1 week to return to work</p>

<p>&bull; 2 to 3 weeks for walking-type exercises.</p>

<p>&bull; 3 months complete resolution to perform any type of exercise or strength.</p>

`,
            questions: [],
            images: [
              {url: '/static/img/ginecomastia-1.jpg'},
              {url: '/static/img/ginecomastia-2.jpg'},
              {url: '/static/img/ginecomastia-3.jpg'},
            ]
          },
          {
            name: 'Calf augmentation',
            detail: `<p>In order to have a good appearance in the legs, it is necessary that all its parts look shapely and with defined muscles, however, the calves are usually an area that is not given much attention, despite the fact that their lack of development creates an unsightly appearance.</p>

<p>With this surgical procedure, the patient can increase the volume of the calf muscles by placing implants that are adapted to the patient&#39;s anatomy and that give the legs a more shapely appearance.</p>

<p>Candidates:</p>

<p>? Women with poorly developed calf muscles</p>

<p>? Women who, despite performing exercises to increase the calf muscles, do not achieve sufficient results.</p>

<p>? Women with congenital malformations.</p>

<p>Procedure Name: CALF AUGMENTATION</p>

<p>Duration: Between 1 and 2 hours.</p>

<p>Anesthesia: General or epidural.</p>

<p>Hospitalization: Outpatient.</p>

<p>Symptoms: Inflammation, moderate pain, ecchymosis (purple).</p>

<p>Risks: Pain, bruising and infection.</p>

<p>Recovery:</p>

<p>&bull; 1 week to return to work.</p>

<p>&bull; 2 to 3 weeks for walking-type exercises.</p>

<p>&bull; Three months full resolution to perform any type of exercise or strength.</p>

`,
            questions: [],
            id: 6,
            label: 'male',
            group: 'corporal',
            images: []
          },
          {
            name: 'Nose surgery',
            id: 7,
            label: 'male',
            group: 'facial',
            detail: `<p>Surgical intervention aimed at correcting nasal deformities by modifying its shape, which leads to an improvement in balance and facial harmony.</p>

<p>Each rhinoplasty is a different case that must be carefully evaluated. It is not just a question of reducing or increasing the size of the nose, but of adapting it to the features and characteristics of the person. In this type of cosmetic surgery, dialogue with the patient is especially important to contrast his wishes and perspectives with the possibilities for improvement offered by the intervention.</p>

<p>Candidates: Women dissatisfied with the appearance of their nose.</p>

<p>Procedure Name: Rhinoplasty</p>

<p>Surgery time: From 1 to 3 hours, depending on the case.</p>

<p>Type of anesthesia: General.</p>

<p>Hospitalization: Outpatient.</p>

<p>Complications (rare): Bleeding, infection, necrosis, asymmetry.</p>

<p>Recovery time:</p>

<p>&bull; 3 to 12 days to return to work.</p>

<p>&bull; From 4 to 6 weeks to carry out all types of activity.</p>

<p>Post-operative symptoms: mild pain, slight bleeding in the first 24 hours, swelling and edema in some patients around the area (eyes and nose).</p>

<p>Results: The definitive results are observed after six months.</p>

`,
            questions: [
              {title: 'At what age is it possible to operate?', id: 123, text: `When the ossification process of the facial bones has finished, usually between 15 and 17 years of age. However, it is always better to wait until the age of majority before making the decision to have surgery.`},
              {title: 'When is the final result visible?', id: 435, text: `When the plaster is removed after ten days, the nose will be in a correct shape and good enough to lead a completely normal life. But the final result in terms of details will require more time, usually about six months to achieve the final appearance.`},
              {title: 'Will the patient be able to breathe through the nose?', id: 678, text: `It is not. Analgesics are generally not needed for more than three days.`},
              {title: 'What post-operative care should I follow?', id: 789, text: `The postoperative period is not painful, however anti-inflammatory analgesics are indicated. If you feel like sneezing, do it with your mouth open, letting the air out freely. By the time the cast is removed, the visible edema and bruising will have disappeared and the nose will be in good enough condition for the patient to be able to lead a normal life. However, the final aesthetic appearance must follow an evolution that will take no less than six months. It is a slow and progressive evolution that can even go unnoticed. However, we must insist on its great importance for the final result. In addition, adhesives will be placed directly on the skin to control inflammation. Must be used for three weeks`},
              {title: 'What risks does the operation entail?', id: 613, text: `It is not. Analgesics are generally not needed for more than three days.`},
              {title: 'Can I choose the nose I want?', id: 864, text: `No. No plastic surgeon, no matter how expert, can infer 100% how the nose will look after surgery. In the same way, we should not trust that a computer, by means of a photographic simulation, will tell us exactly what the future nose will look like. The physical structure of the face and the proportions of the chin, forehead, etc. they are used by the surgeon for surgical planning. Again, we insist that the doctor-patient relationship is, without a doubt, a key element in directing the surgical plan.`},
              {title: 'Can you sunbathe?', id: 7543, text: `If in your case you have a scar at the base of the nose, you should not receive sun for at least a month. Similarly, if small bruises persist in the areas around the nose, you should stay away from the sun until they have completely disappeared.`},
              {title: 'Will it be possible to wear glasses?', id: 125, text: `Although not visible, the edema caused by the operation persists for a long time. This is noticeable by wearing glasses because they leave a deep mark where it rests on the nose. There is no contraindication, but there is a recommendation not to wear them continuously during the first two months after the intervention. They can be used if you rest from time to time, leaving the necessary time for the mark to recover.`},
            ],
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
          {
            name: 'Wrinkle treatment',
            id: 8,
            label: 'male',
            detail: `<p>It is a facial rejuvenation technique for restoring volume and filling in wrinkles and/or expression lines, using your own body fat, that is, with a substance compatible with your body that does not cause toxicity, allergies, or rejection.</p>

<p>Lipoinjection is a minimally invasive, slightly traumatic, painless procedure, without cuts or scars, which allows us to &quot;sculpt&quot; the face, improve flaccidity and achieve a much improved and rejuvenated appearance.</p>

<p>Candidates: Women for whom natural aging has left obvious scars on the face and neck, causing furrows and folds that make the expression lose definition.</p>

<p>Procedure Name: Facial Lipoinjection</p>

<p>Procedure duration: 30 min to 1 hour.</p>

<p>Local anesthesia.</p>

<p>Hospitalization: Outpatient.</p>

<p>Risks: Bleeding, swelling, ecchymosis (purple bruises) at the injection site.</p>

<p>Recovery:</p>

<p>&bull; 1 to 2 days to return to work.</p>

<p>&bull; One week for complete resolution.</p>

<p>&bull; Final results after seven days.</p>

`,
            questions: [
              {title: 'Who is facial fat transfer addressed to?', id: 1234789023, text: `Indicated for both sexes; usually from the age of 40. It requires a careful physiognomic individual analysis to fully evaluate the set of features.`},
              {title: 'How long do the effects last?', id: 789088456, text: `The effect, both on expression wrinkles and volumes, usually lasts for several years.`},
            ],
            group: 'facial',
            images: []
          },
          {
            name: 'Cirugia de parpados',
            id: 9,
            detail: `<p>It consists of drying excess skin and fat bags around the eyelids. It is performed on both upper and lower eyelids.</p>

<p>Candidates:</p>

<p>Women of any age with:</p>

<p>&bull; bags under the eyes (dark circles),</p>

<p>&bull; excess skin on the eyelids,</p>

<p>&bull; Difficulty opening eyes fully and looking sad or tired.</p>

<p>Procedure Name: Blepharoplasty</p>

<p>Duration: From one to two hours, depending on whether all four eyelids are operated at the same time or only the upper or lower ones.</p>

<p>Anesthesia: Local + sedation</p>

<p>Hospitalization: Outpatient</p>

<p>Post-operative symptoms: Swelling, redness and slight bleeding of the area. Mild pain the first 24 hours.</p>

<p>Risks: Bleeding, infection, unsightly scar (very rare), incomplete resection of the bags.</p>

<p>Recovery: One week to return to work.</p>

<p>Duration of results: Approximately 10 years, depending on the patient&#39;s skin.</p>

`,
            questions: [
              {title: 'What medications should you avoid before and after surgery?', id: 1, text: `You should avoid taking blood thinners – aspirin, vitamin E`},
              {title: 'When will I be able to return to work?', id: 2, text: `Normally between the fifth and seventh day after surgery.`},
              {title: 'When can I put on makeup?', id: 3, text: `One week after the operation, after removing the stitches. It is convenient to use sunscreen that can be used as a base for makeup.`},
              {title: 'What care should I follow after surgery?', id: 4, text: `Keep your head elevated (semi-sitting position). Apply cold compresses several times a day for the first 48 hours (you can use cold chamomile). Wear dark glasses for 24 hours. Avoid watching TV or computers for 24 hours. Avoid the sun for at least a month.`},
              {title: 'What specific risks does blepharoplasty present?', id: 5, text: `Risks are rare. These include bleeding, infection, eye irritation, and pocket remnants.`},
              {title: 'Do I have to take any precautions before the intervention?', id: 6, text: `The skin must be well hydrated and clean, free of traces of cosmetics, and without any type of injury. There should be no infection in your eyes. It is not necessary to go to the ophthalmologist before the operation. Suspend alcohol and/or cigarette intake one week before surgery. Notify if you use contact lenses, if you have allergies to any medication or consume any medicine.`},
            ],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Cirugia de menton',
            id: 10,
            label: 'male',
            detail: `<p>Chin surgery can be used to correct both a severely receding chin and a protruding chin. An insufficient chin distorts the facial plane. In addition, it shortens the depth of the neck, disfiguring the profile and giving the sensation of a bird&#39;s face. On the other hand, a very pronounced chin is quite unsightly, especially in women, since it gives them hard or masculine traits.</p>

<p>Candidates: Women with protruding or very receding chin.</p>

<p>Procedure Name: Mentoplasty</p>

<p>Procedure duration: One hour</p>

<p>Anesthesia: Local + sedation</p>

<p>Hospitalization: Outpatient</p>

<p>Risks: Bleeding, inflammation, infection, implant rejection.</p>

<p>Recovery:</p>

<p>&bull; Two days to return to work</p>

<p>&bull; Two weeks for full resolution</p>

<p>&bull; Final results: in 15-30 days.</p>

`,
            questions: [
              {title: 'At what age can the intervention be carried out?', id: 3452345, text: `The process of ossification of the facial bones ends between the ages of 15 and 17. It is recommended for women to wait until they are 18 years old and for men after 21 years.`},
              {title: 'When can you start going to the pool, the gym and exercising?', id: 68903451234, text: `After two weeks, but the exercises should be practiced in moderation and progressively.`},
              {title: 'What medications should be avoided before and after the operation?', id: 1345567889, text: `As in any operation, the patient must refrain from taking aspirin or other anticoagulants during the three weeks prior to the intervention.`},
              {title: 'What is the risk of these operations and treatments?', id: 123524576879, text: `On the one hand, there are the risks common to any operation: those derived from the use of anesthesia, hemorrhages and infections. In the specific case of implants (silicone prostheses), the specific risk is rejection of the chin prosthesis.`},
              {title: 'What kind of discomfort does the intervention cause?', id: 123513653568, text: `It is an intervention that hardly causes discomfort.`},
              {title: 'Is any medication prescribed for the post-operative period?', id: 123235346, text: `The usual medications after any intervention: antibiotics to prevent infection and analgesics to relieve pain.` },
              {title: 'Do I have to take any precautions before the intervention?', id: 1231258686, text: `As in the rest of the facial operations, the condition of the skin is important for the success of the intervention. In the case of the chin, mouth conditions or any type of dental infection must be ruled out.`},
            ],
            group: 'facial',
            images: []
          },
          {
            name: 'Facial lifting ',
            id: 11,
            detail: `<p>Facelift, also known as facial rejuvenation, is a procedure that can help repair some of the visible signs of aging naturally evidenced by sagging, sagging, and wrinkled skin on the face and neck.</p>

<p>It basically consists of repositioning the muscle layers, skin and fat, removing excess tissue through incisions that are usually well camouflaged in the scalp. They extend inside the natural lines that exist in the ears and continue around the lobe and, in some cases, behind the ear and on the scalp.</p>

<p>Candidates: Women for whom natural aging due to the passage of time, prolonged exposure to the sun&#39;s rays or the stress of everyday life have left obvious scars on the face and neck, causing furrows and folds that make the expression lose definition. .</p>

<p>Procedure Name: Rhytidectomy</p>

<p>Duration: From 4 to 5 hours (depending on each case).</p>

<p>General anesthesia.</p>

<p>Hospitalization: From half a day to one day, according to the needs of each case.</p>

<p>Post-operative symptoms: Swelling, slight pain, ecchymosis (purple), slight bleeding through the drains.</p>

<p>Risks: Pain, bruising, infection, temporary or permanent nerve damage.</p>

<p>Recovery:</p>

<p>&bull; 2 to 3 weeks to return to work.</p>

<p>&bull; From 2 to 3 weeks to perform walking-type exercises.</p>

<p>&bull; From 4 to 8 weeks for complete resolution.</p>

<p>Duration of results: From 8 to 10 years.</p>

`,
            questions: [],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Ear surgery',
            id: 12,
            label: 'male',
            group: 'facial',
            detail: `<p>If you are bothered by the way your ears protrude from your head, or if one or both ears are misshapen due to injury or a birth defect, you may undergo otoplasty to give your ears a more aesthetic appearance.</p>

<p>Otoplasty can be done at any age once the ears have reached their full size&mdash;usually at age 5&mdash;and throughout adulthood.</p>

<p>Candidates:</p>

<p>&bull; Patients with large and protruding ears.</p>

<p>&bull; Patients with enlarged lobes.</p>

<p>&bull; Patients with floppy ears.</p>

<p>Procedure Name: Otoplasty</p>

<p>Procedure Duration: Approximately 1 hour.</p>

<p>Anesthesia: Local + sedation.</p>

<p>Hospitalization: Outpatient.</p>

<p>Symptoms: Inflammation, pain, ecchymosis (purple), skin hypersensitivity.</p>

<p>Risks: Asymmetry.</p>

<p>Recovery:</p>

<p>2 or 3 days of rest and approximately 1 week to return to daily activities.</p>

<p>The patient must wear a band that keeps the ears close to the head for at least 1 month.</p>

<p>Final results:</p>

<p>Once the bandages are removed, you will notice an immediate change in the appearance of your ears. These changes are permanent.</p>

`,
            questions: [
              {title: 'From what age can this surgery be performed on children?', id: 1, text: `From 6 years old.`},
              {title: 'How are the scars?', id: 2, text: `The scar will be in the back of the ear, so it will be imperceptible even when wearing short or tied hair.`},
              {title: 'When will normal life be possible?', id: 3, text: `In a few days. You will be able to perform physical exercises after three weeks.`},
              {title: 'It is painful?', id: 4, text: `It can bother contact or pressure during the first month.`},
              {title: 'What postoperative care should I follow?', id: 5, text: `21 days after surgery, a light compression garment (cotton and elastic band) should be used to protect the ears from blows or sudden gestures.`},
            ],
            images: [
              {url: '/static/img/cirugiaoreja-1.jpg'},
              {url: '/static/img/cirugiaoreja-2.jpg'},
            ]
          },
          {
            name: 'Neck lifting ',
            id: 13,
            detail: `<p>Over time, the skin tissues suffer the consequences of age by beginning to show sagging and sagging. Although this is a natural aging process, many women prefer to recover the firmness of the skin on their neck, and with it their self-confidence, through a surgical procedure that rejuvenates their appearance.</p>

<p>Through a neck lift, the patient will be able to obtain a young and smooth appearance in the skin by eliminating the flaccidity of the skin of the neck, significantly reducing the wrinkles in this area and giving a much younger appearance.</p>

<p>Candidates: Women with loose skin in the neck area and realistic expectations regarding their appearance after the procedure</p>

<p>Procedure Name: Lower Rhytidectomy</p>

<p>Procedure Duration: From 2 to 5 hours, depending on the complexity.</p>

<p>Anesthesia: Local + sedation or general.</p>

<p>Hospitalization: Outpatient</p>

<p>Symptoms: Swelling, moderate pain, ecchymosis (purple)</p>

<p>Risks: Infection.</p>

<p>Recovery:</p>

<p>2 or 3 days of rest and approximately 2 weeks to return to daily activities</p>

<p>Final results:</p>

<p>The results of a facelift can last between 10 and 15 years.</p>

`,
            questions: [],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Cheek reduction',
            id: 14,
            detail: `<p>Bichat bags are glands of fatty tissue found in the cheeks, just below the cheekbones. These glands do not fulfill any specific function in adults, so many patients choose to remove them to give the face a refined and angular appearance.</p>

<p>Candidates: Women with chubby cheeks looking to refine and stylize the appearance of their face.</p>

<p>Procedure Name: Bichectomy</p>

<p>Procedure Duration: Approximately 1 hour.</p>

<p>Anesthesia: Local plus sedation.</p>

<p>Hospitalization: Outpatient.</p>

<p>Symptoms: Inflammation, moderate pain, ecchymosis (purple).</p>

<p>Risks: Infection.</p>

<p>Recovery:</p>

<p>24 hours of rest and approximately 2 weeks without strenuous exercise</p>

<p>Final results:</p>

<p>The changes are definitive and can be seen between one and six months after the procedure, depending on the patient.</p>

<p>If the patient gains a significant amount of weight, the results of the bichectomy may be lost.</p>

`,
            questions: [],
            label: 'male',
            group: 'facial',
            images: []
          },
          {
            name: 'Gluteoplasty',
            id: 15,
            label: 'female',
            group: 'corporal',
            img: '/static/img/gluteoplastia-mujeres.jpg',
            questions: [
              {title: 'Will I be able to sit safely and receive injections in the buttocks?', id: 4123123752656, text: 'Preferably, avoid injections in the buttocks if you have a prosthesis, since the implants could be punctured. There is no discomfort in sitting down, since, when we sit down, the prostheses adopt a privileged location between the muscles, which prevents them from being crushed.'},
              {title: 'How will my buttocks look?', id: 23465562, text: 'With this surgery you can improve your appearance and self-esteem, but it will not necessarily change the perception that others have of you or give you a perfect figure. Before you decide, think carefully about your expectations.'},
              {title: 'What is the correct location of the buttock prostheses?', id: 3456234134638, text:  `The best ones are those that remain between the muscles, never the subcutaneous ones (below the fat)`},
              {title: 'What is the advantage between using buttock prostheses and injected implants?', id: 1341234513245, text: `Injected implants are being used by a large number of people around the world: plastic surgeons, beauticians, hairdressers and anyone who wants to make easy money, regardless of the complications that this could generate. These injected implants are nothing more than liquid plastics called by different names to confuse the community and those who do not know about the complications that they entail. The names that are being used are: expanding cells, methacrylates, biopolymers, methacryl and other trade-oriented names. These plastics can never be removed from the body and the complications they cause will be for the rest of life. We see how, unlike injected implants, buttock prostheses can be removed, if necessary, and without the complications that injections entail.`},
              {title: 'What are the complications of gluteal prostheses?', id: 2352351241346357, text: `The most feared is infection, since the gluteal area -for obvious reasons- is highly contaminated. Others include bruising, unsightly shape, skin retraction, suture dehiscence, dissatisfaction with the result.`},
              {title: 'When is this surgery contraindicated?', id: 234612342345245, text: `In cases of having an active infection, coagulation disorders, healing disorders, in immunosuppressed patients, pregnant women and/o con expectativas poco realistas.`},
              {title: 'How long is the recovery time?', id: 2341523234, text: `Patients can walk home. The sensation of pain will disappear with the indicated muscle relaxant and analgesic. They can sit down after the third day, go back to work after a week. Walking exercises from three weeks. Complete recovery after three months.`},
              {title: 'Should I wear girdles?', id: 1242523634567678672345235, text: `A girdle must be worn for a period of six weeks, as is routine in cases of liposculpture. Thus, the inflammation decreases more quickly and the prostheses remain in their indicated position.`},
              {title: 'Do these prosthetics change?', id: 6795614325134, text: `These implants have a lifetime guarantee. They should be changed in cases of capsular rupture or contracture. Sometimes patients request replacement to increase volume after several years.`},
            ],
            detail: `<p>Gluteoplasty is the procedure by which the buttocks are molded in case of poor muscle development, unpleasant accumulations of fat in their surroundings, acquired disorders or congenital malformations.</p>
  <p>Las dos únicas alternativas seguras para realizar este procedimiento son:</p><p>Lipoinyección. Consiste en infiltración de grasa propia del paciente. La grasa obtenida de distintas partes del cuerpo, como abdomen y muslos, se prepara y enriquece con factores de crecimiento y luego se inyecta en los glúteos para mejorar forma y volumen.</p><p><strong>Implantes glúteos:</strong> prótesis de silicona diseñadas para mejorar el volumen y la forma de los glúteos.</p><p><strong>Candidatas:&nbsp;</strong></p><p>Mujeres con:</p><p>• poco desarrollo de los músculos glúteos.</p><p>• cúmulos de grasa en los alrededores de los glúteos que ocasionan deformidad o aspecto estético.</p><p>• trastornos adquiridos, como accidentes, quemaduras, etc.</p><p>• malformaciones congénitas, y</p><p>• atletas que a pesar de realizar ejercicios para aumentar los glúteos no consiguen resultados suficientes.</p><p>&nbsp;</p><p><strong>Nombre del procedimiento:</strong> GLUTEOPLASTIA</p><p><strong>Duración:</strong> De 2 a 3 horas, dependiendo de los elementos específicos del caso.</p><p><strong>Anestesia:</strong> General o peridural.</p><p><strong>Hospitalización:</strong> Ambulatoria o puede requerir una noche de hospitalización.</p><p><strong>Síntomas post-operatorios:</strong> Inflamación, dolor moderado, equimosis (morados).</p><p><strong>Riesgos:</strong> Dolor, hematomas, infección, lesión cutánea, asimetrías, trombosis.</p><p><strong>Recuperación:</strong></p><p>• Una semana para reintegrarse al trabajo.</p><p>• De 2 a 3 semanas para realizar ejercicios tipo caminatas.</p><p>• Tres meses de resolución completa para realizar cualquier tipo de ejercicio o fuerza.</p><p><strong>Duración de resultados:</strong> permanentes, siempre y cuanto se mantenga un peso estable.</p>`,
            images: [
              {url: '/static/img/gluteoplastia-1.jpg'},
              {url: '/static/img/gluteoplastia-2.jpg'},
              {url: '/static/img/gluteoplastia-3.jpg'},
              {url: '/static/img/gluteoplastia-4.jpg'},
              {url: '/static/img/gluteoplastia-5.jpg'},
              {url: '/static/img/gluteoplastia-6.jpg'},
            ],
          },
          {
            name: 'Abdominal surgery',
            id: 16,
            images: [
              {url: '/static/img/cirugiaabdomen-1.jpg'},
              {url: '/static/img/cirugiaabdomen-2.jpg'},
            ],
            questions: [
              {title: 'What type of anesthesia will I receive?', id: 467851, text: `Epidural anesthesia with sedation or more general epidural anesthesia, or only general.`},
              {title: 'What is postoperative analgesic therapy?', id: 12345179, text: `It is a type of anesthesia that is placed from the surgery room and that allows the patient not to experience pain or discomfort when waking up. The anesthesia, which is also placed by the anesthesiologist, can be maintained for a few more days, as the case warrants.`},
              {title: 'What postoperative care should I have?', id: 12352437, text: `Wear the girdle for at least four weeks after the operation. Carry out the postoperative therapies that the doctor suggests. Keep proper rest. Even though you will feel fine the day after surgery, you should avoid weight bearing for about a fortnight after the operation. Try to walk somewhat stooped for a week to prevent the scar from being subjected to tension. Constantly change position in bed from the pavilion exit, mobilize the feet, flex the legs. These maneuvers will increase blood circulation in the legs. Cover the operated area when taking a bath. Take care of the wound that remains after the removal of the stitches, ten days after the operation. It is possible to perform walking exercises in the third week. However, you will have to wait until the fourth or fifth week to lift weights.`},
              {title: 'Can I smoke before or after surgery? What medications should I not take?', id: 12352454897834563467, text: `You should avoid smoking for at least ten days before surgery and fifteen days after surgery. Nicotine is a powerful vasoconstrictor (clogs blood vessels) that will end up ruining your surgery and making it difficult to heal, and in some cases could lead to other complications as well. Be cautious and take care of your surgery. You should not take aspirin or similar medications before surgery. If you are receiving any treatment you should notify your doctor.`},
              {title: 'Will I miss the surgery if I decide to get pregnant?', id: 1234537791, text: `The result can be preserved as long as it does not exceed its weight during pregnancy.`},
              {title: 'What does abdominal surgery consist of?', id: 1234537792, text: `A large amount of excess or sagging skin and fat is removed. During surgery, the abdominal muscles (or the so-called "squares", which in athletes are well defined) are sutured, bringing them together in the medial part so that they gain strength and tone. This is how the waist will be more curved, which will produce in the abdomen the feeling of having exercised for a long time. The navel is harnessed and placed in the same position as it was before.`},
              {title: 'How many kilos will I lose with the surgery?', id: 1234537793, text: `Naturally, you will lose a few kilos, but the most important thing will be that you will gain a harmonious figure with a well-proportioned abdomen with respect to the trunk and limbs.`},
              {title: 'How long does it take to perform my surgery?', id: 12345377931, text: `Normally this surgery takes between two and three hours. It will depend on the magnitude of the tissue to be removed.`},
              {title: 'What will the scars be like?', id: 12345377932, text: `Depending on the characteristics of the patient, a normal abdominoplasty or a mini abdominoplasty will be performed. You will be informed of the final length of the scar, which will be determined by the characteristics of the abdomen.`},
              {title: 'Will the scar be visible?', id: 12345377933, text: `Currently, the scar left by the intervention is easily concealable, since it remains inside the bikini. They are very discreet scars. Imagine a caesarean section scar that is slightly longer on the sides. We can also eliminate with this technique those scars from caesarean sections or other abdominal surgeries that have been previously performed.`},
            ],
            detail:`

        <p>The abdomen is one of the areas of the body where fat accumulates more easily. Pregnancies, often followed by distension of the abdominal muscles, weight variations and hormonal disorders, contribute to the formation of an unattractive or deformed abdomen. Abdominoplasty helps to recover a flat stomach and outline the body silhouette.</p>

        <p>The abdominal wall is basically made up of three elements: the skin, the subcutaneous cellular tissue, with the underlying fat, and the muscle layer. The involvement of any of these three elements will lead to the formation of an abdominal deformity that, depending on each case, will require specific treatment.</p>

        <p>Candidates:</p>

        <p>&bull; Women who, being close to their ideal weight, have accumulation of fat in the abdomen and loose skin that do not respond to diet or exercise.</p>

        <p>&bull; Women with massive weight loss.</p>

        <p>&bull; Women who, due to pregnancy, present irreversible dilation of the skin and abdominal muscles.</p>

        <p>Procedure Name: ABDOMINOPLASTY</p>

        <p>Duration: From two to four hours (depending on the extension).</p>

        <p>Anesthesia: General or epidural.</p>

        <p>Hospitalization: Outpatient or may require overnight hospitalization.</p>

        <p>Post-operative symptoms: Swelling, moderate pain, ecchymosis (purple), slight bleeding through the drain.</p>

        <p>Risks: Pain, bruising, infection, skin injury.</p>

        <p>Recovery:</p>

        <p>&bull; Between 2 and 3 weeks to return to work.</p>

        <p>&bull; Between 3 and 4 weeks for walking-type exercises.</p>

        <p>&bull; At three months complete resolution to perform any type of exercise or force.</p>

        <p>Duration of results: Permanent, as long as a stable weight is maintained.</p>`,
            label: 'female',
            group: 'corporal',
          },
          {
            name: 'Laser liposuction',
            id: 17,
            images: [
              {url: '/static/img/flipolaser-1.jpg'},
              {url: '/static/img/flipolaser-2.jpg'},
              {url: '/static/img/flipolaser-3.jpg'},
              {url: '/static/img/flipolaser-4.jpg'},
              {url: '/static/img/flipolaser-5.jpg'},
              {url: '/static/img/flipolaser-6.jpg'},
            ],
            label: 'female',
            group: 'corporal',
            questions: [
              {title: 'How is the scar left by liposculpture?', id: 1234513668, text: `Normally, the small incisions that are made do not exceed five millimeters and disappear almost entirely after three months. However, additionally, the foresight is taken to make the incisions in strategic places (folds, grooves) so that they can be completely concealed.`},
              {title: 'What is the period of hospitalization?', id: 1233454567, text: `It is usually an outpatient surgery. If it is done with another large surgery, it is recommended that the patient be hospitalized.`},
              {title: 'What are the areas that can be treated?', id: 123557908651, text: `• double chin

               • Arms
              
               • Abdominal region
              
               • Waist
              
               • Back
              
               • External face of the thigh (“revolveras”)
              
               • Anterior aspect of the thigh
              
               • Buttocks.`},
              {title: 'When should I self-donate blood?', id: 123, text: `Self-donation consists of extracting a small amount of blood from the patient, preferably before the third day prior to surgery, so that the extracted red blood cells have been replaced by the time of the operation. Your blood is stored in the clinic's blood bank and is reinjected into your body in the immediate postoperative period. This technique, in addition to allowing to replace the volume that could be lost with surgery, promotes a faster recovery and without imbalance of blood volume. Using your own blood eliminates the risks of contracting contagious diseases.`},
              {title: 'Will having children after the operation make me lose its effects?', id: 345, text: `The results can be preserved after pregnancy, as long as your weight is controlled by a specialist. If you do not develop many stretch marks or the flaccidity is not greater, the shapes obtained with liposculpture are maintained.`},
              {title: 'Is any cure used?', id: 676, text: `When it comes to surgeries in which a large amount of fat was removed, it is recommended to wear a girdle for four to six weeks after the intervention.`},
              {title: 'Is liposuction dangerous?', id: 8, text: `Liposuction rarely causes problems. The danger is neither greater nor less than in other surgeries, as long as it is carried out in accordance with all applicable technical standards. Care must be taken not to extract large volumes of fat. As a criterion established internationally by plastic surgeons, it is recommended not to remove more than five to seven percent of the body weight. Currently, for surgeries in which large volumes have to be removed, self-donation of blood is recommended.`},
              {title: 'Is the postoperative period very painful?', id: 0, text: `Generally not. The pain is controlled with common pain relievers.`},
              {title: 'How long will it take to see the results?', id: 65, text: `All surgery goes through a variable phase of deflation. It depends on the patient and the areas that were treated. During the first 30 days after surgery, the patient may not fully perceive the results. After this period, a disinflammation of the area begins. After three months you can already see an excellent result. We recommend performing postoperative therapies (lymphatic drainage and/or exercises), aimed at modeling and reducing tissue inflammation.`},
              {title: 'How many kilos will I lose with the surgery?', id: 34 , text: `More than talking about losing kilos, we must talk about reducing sizes. Normally the patient can lose between four to six kilos, but it is really in the reduction of the sizes of pants, bra, shirts, etc. where the change is noticed.`},
              {title: 'How long does the surgical act take?', id: 675 , text: `This will depend on the extent of the areas to be treated. It can take between one and three hours, on average.`},
              {title: 'When can I take a bath?', id: 1234 , text: `The next day you can take a bath. If the procedure has been done in conjunction with another surgery then you should see your doctor.`},
              {title: 'What type of anesthesia is applied?', id: 5467 , text: `Most cases are performed under general anesthesia, in this way better results are obtained.`},
            ],
            detail: `<p>The elimination of excess fat is a challenge that cosmetic surgery overcomes more and more easily.</p>

<p>Laser liposuction or Laserlipolysis is currently the most widely used mechanism of action worldwide for the removal of localized fat or general laser-assisted liposuction. Its purpose is to emulsify the fat and achieve its extraction easily and safely, without damaging adjacent tissues and in a very short time.</p>

<p>The great advantage of the procedure is that it combines the power of the laser to shape areas of the body with uniformity, without bleeding and with excellent skin retraction. This allows recovery in a very short time because it does not require general anesthesia for its performance.</p>

<p>Candidates:</p>

<p>&bull; Women who, despite being within their ideal weight, have fat deposits in localized areas and want to eliminate them to improve their physical appearance.</p>

<p>&bull; Overweight women, without morbid obesity, who are on a diet.</p>

<p>&bull; Women who have undergone bariatric weight loss surgery and have reached their ideal weight.</p>

<p>&bull; It should not be performed in people with morbid obesity. In those cases, bariatric surgery is done first to lose weight and then surgery to improve body contour.</p>

<p>Procedure Name: Laser Liposculpture</p>

<p>Duration: From 1 to 4 hours, depending on the length of the procedure.</p>

<p>General anesthesia</p>

<p>Hospitalization: Generally outpatient. It may require a day of hospitalization.</p>

<p>Recovery:</p>

<p>&bull; 5 days to return to work.</p>

<p>&bull; 1 to 2 weeks for more strenuous activities and sports.</p>

<p>&bull; Four weeks for full resolution.</p>

<p>Duration of the results: They can be permanent if a healthy diet is maintained, accompanied by exercises.</p>

<p>Treatment description:</p>

<p>A probe that emits high-frequency waves liquefies the fat, which is then removed with low-pressure suction.</p>

<p>When the probe is passed in the superficial fat layer it helps to improve cellulite. The procedure facilitates the aspiration of fibrous areas such as the rolls of the back, riding pants and in reoperations.</p>

<p>Produces better skin retraction, especially in areas of flaccidity: arms, inner thighs and abdomen of older women.</p>

<p>It produces less blood loss and less bruising, because it does not injure vessels.</p>

<p>It improves the &ldquo;poceado&rdquo; of cellulite due to a regenerative effect of the collagen of the dermis.</p>

<p>Team:</p>

<p>&bull; Laser type: DUO diode laser</p>

<p>&bull; Model: Siemens SixLaserDuo 9-20</p>

<p>&bull; Wavelength: 808nm and 980nm</p>

<p>&bull; Maximum Power: 30W</p>

<p>&bull; Repetition Rate: 0.6 Hz-10k Hz</p>

<p>&bull; Transmission system: Fiber optic 400um- 600um</p>

`
          },
          {
            name: 'Calf augmentation',
            id: 18,
            images: [],
            detail: `<p>In order to have a good appearance in the legs, it is necessary that all its parts look shapely and with defined muscles, however, the calves are usually an area that is not given much attention, despite the fact that their lack of development creates an unsightly appearance.</p>

<p>With this surgical procedure, the patient can increase the volume of the calf muscles by placing implants that are adapted to the patient&#39;s anatomy and that give the legs a more shapely appearance.</p>

<p>Candidates:</p>

<p>? Women with poorly developed calf muscles</p>

<p>? Women who, despite performing exercises to increase the calf muscles, do not achieve sufficient results.</p>

<p>? Women with congenital malformations.</p>

<p>Procedure Name: CALF AUGMENTATION</p>

<p>Duration: Between 1 and 2 hours.</p>

<p>Anesthesia: General or epidural.</p>

<p>Hospitalization: Outpatient.</p>

<p>Symptoms: Inflammation, moderate pain, ecchymosis (purple).</p>

<p>Risks: Pain, bruising and infection.</p>

<p>Recovery:</p>

<p>&bull; 1 week to return to work.</p>

<p>&bull; 2 to 3 weeks for walking-type exercises.</p>

<p>&bull; Three months full resolution to perform any type of exercise or strength.</p>

`,
            questions: [],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Breast enhancement',
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
            detail: `<p>It consists of the placement of breast implants or prostheses to increase the volume of the breast. The increase in breast volume adjusts the proportions of the trunk with the waist and offers certain psychological tranquility to the patient.</p>

<p>It is important to know that there is evidence that silicone implants do not cause breast cancer, do not interfere with mammograms and do not reduce sensitivity or sexual orgasm.</p>

<p>Candidates:</p>

<p>Women who:</p>

<p>&bull; are unhappy about having small breasts.</p>

<p>&bull; are unhappy with the way their bras and other clothes fit.</p>

<p>&bull; have breast asymmetry (one breast is different from the other).</p>

<p>&bull; require breast reconstruction due to tumors.</p>

<p>Procedure Name: Augmentation Mastoplasty</p>

<p>Surgery time: 1 to 2 hours.</p>

<p>Hospitalization: Outpatient.</p>

<p>Post-operative symptoms: Pain, sensation of oppression.</p>

<p>Risks: Bleeding, encapsulation, infection.</p>

<p>Recovery:</p>

<p>&bull; One week to go to work.</p>

<p>&bull; 2 to 3 weeks for driving and walking-type exercises.</p>

<p>&bull; 4 weeks for all normal activities.</p>

`,
            questions: [
              {title: 'What type of anesthesia is necessary?', id: 1, text: `It is performed under general anesthesia because it is more comfortable and safer for the patient and the doctor.`},
              {title: 'Do I require hospitalization?', id: 2, text: `This surgery is outpatient. This means that the patient enters the clinic in the morning and in the course of the afternoon she may already be returning to her house.`},
              {title: 'From what age can breast implants be placed?', id: 3, text: `Since the person has completed the development of the breasts. Some women have already completed this development by age 17. The woman has to be emotionally mature and know all the pros and cons of the surgery.`},
              {title: 'What will be the volume of my implant?', id: 4, text: `The one that is most comfortable and goes more in harmony with your body. That is, an agreement must be reached between the doctor and the patient on the size that is desired. It must be taken into account that the patient's expectations are not always the most appropriate. Not all patients have the same chest measurements, the same amount of breast tissue, the dimensions and the capacity of the muscle to cover the implant. A resource that helps the doctor to calm the restlessness of the patient is to use the testers in the consultation.`},
              {title: 'When are the stitches removed?', id: 5, text: `The sutures used are intradermal (within the skin) and are removed between eight and fifteen days after the operation. In some cases, absorbable sutures can be used.`},
              {title: 'How long does the surgery take?', id: 6, text: `On average, it takes one to two hours. It must be taken into account that time is always required to prepare the patient and another time for the patient to recover from anesthesia.`},
              {title: 'How long does this implant last? When should I change it?', id: 7, text: `The implants are currently for life, they have a 10-year guarantee in case they break or become encapsulated. Over the years, the breasts can fall naturally and many patients decide to change the implants and reaffirm the breasts again.`},
              {title: 'Is the postoperative period of this surgery painful?', id: 8, text: `Generally, there is discomfort during the first 72 hours, while the muscle adapts to the implant and stretches its fibers. Muscle relaxants and analgesics help for this. This post-operative period is not very bothersome as long as you obey the medical instructions, especially regarding the movements of the arms during the first days.`},
              {title: 'What complications can I have with implants?', id: 9, text: `Hematomas: Depending on the magnitude, they can be self-digested by the body or require surgical drainage. Infection: occurs in a low percentage of cases. You must follow the therapeutic recommendations of the doctor and strictly adhere to the intake of antibiotics. Retraction of the fibrous capsule: implant rupture occurs in very small percentages. Fall of the breasts over the years: it can occur if the implant is very large and there is very flaccid skin.`},
              {title: 'What should I do and what should I not do the first week after having the operation?', id: 10, text: `You should sleep semi-sitting the first few days, then on your side or on your back. Keep the post-operative bra day and night, for at least four weeks. You can take a bath the day after surgery, being careful not to get your breasts wet. To do this, you must wrap them with plastic kitchen material. You can return to work after the third day, provided that the activity you perform does not require physical effort of any nature. You must perform post-operative therapies after the fifth day. You can drive automatic after the first week, and synchronous after two weeks. Intercourse can be resumed once the wounds are completely healed. It is recommended to wait three weeks. Avoid sun exposure before three months after the operation.`},
              {title: 'What is the hardening of the breasts or retraction of the fibrous capsule?', id: 11, text: `Our bodies react in a similar way to a foreign body. The body creates a capsule or envelope around the implant as if to defend itself in order to isolate it and not be in direct contact with it. All implants are covered by this fibrous capsule, which can vary in thickness (some thin, others of medium thickness and some that can be so hard that they tend to calcify). We do not know exactly the mechanism of their formation or the time in which they retract. This retraction can sometimes generate asymmetries and pain in the breasts.`},
              {title: 'What is a breast implant?', id: 12, text: `It is used to increase the volume of the breasts, placed retropectorally (behind the pectoral muscle). The implants are made of silicone, a derivative of silica, and are filled with gel. Currently there are several external forms: smooth, textured and polyurethane implants. The most expensive implants are the polyurethane ones and the least expensive are the smooth ones. Regarding height, there are high profile implants and low profile implants, each with specific uses for the patient. Size is calculated in units of volume or cubic centimeters (cc). Due to their shape, they can be round or anatomical.`},
              {title: 'How will the scars be in this type of surgery?', id: 13, text: `This is one of the aspects that most concerns patients who decide to undergo surgery of this type. There are several techniques. The patient should discuss them with the treating physician, who will decide which surgical technique to apply. Depending on the size, volume, shape of the breasts, skin color and history of healing from previous surgeries, we can have a scar only around the areola (very well concealed), in the shape of an I or T when the breasts are very large or very sagging (in most cases the scars are not very visible). The way of suturing these scars is very personal. Various types of coping are currently being done to try to minimize scarring as much as possible. In our patients we work with minimal tension to obtain less visible or imperceptible scars.`},
              {title: 'How long does the intervention take?', id: 14, text: `Usually between two and four hours. Depending on the technique used.`},
              {title: 'How long does it take to improve the appearance of my scars?', id: 15, text: `This is variable, in each patient the behavior is substantially different. It depends on several aspects such as race, nutritional status, wound tension, patient age, presence of associated diseases, sun exposure, etc. In general terms we have:

               • The first thirty days: the scar may be slightly reddened, with a certain reaction to the sutures and adhesive tapes.
              
               • Between thirty days and one year: the scar turns from pink or red to a brownish tone, with a tendency to lighten even more.
              
               • After a year: the scar is no longer consistent, it becomes very soft and whitish and, in some cases, it can be almost imperceptible to the naked eye.`},
              {title: 'What type of anesthesia is required?', id: 16, text: `This is a surgery that must be performed under general anesthesia.`},
              {title: 'I heard that some patients are left with visible scars…', id: 17, text: `We must differentiate between hypertrophic scars and keloids. Hypertrophic scars are thickenings that are produced by mistreatment of the skin, poor suture or infection in the scar and that can be resected (eliminated) again with a resurfacing of the scar. This is done under local anesthesia and in a very short time in the office. Keloids, if there is a genetic predisposition, will appear anywhere you have a scar. In these cases, it is convenient to apply radiotherapy within forty-eight hours after the intervention. If you have a genetic predisposition to the formation of keloids, you should notify your doctor so that he can take the necessary precautions.`},
            ],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Breast reduction',
            id: 20,
            images: [
              {url: '/static/img/reduccionmamas.jpg'}
            ],
            label: 'female',
            detail: `<p>It is a procedure to reduce the size of the mammary glands and to correct their sagging or ptosis. It is applied to women with large (hypertrophic) or sagging (ptosic) breasts. The amount of breast tissue changes in proportion to weight, pregnancy, and hormonal changes. Breast reduction seeks several objectives such as relocating the areola and nipple to a higher position and improving the shape of the breast by reducing its size.</p>

<p>Candidates:</p>

<p>Women with:</p>

<p>&bull; large, pendulous and heavy breasts with or without the areola facing downwards.</p>

<p>&bull; asymmetrical breasts.</p>

<p>&bull; back pain of varying intensity.</p>

<p>&bull; Skin lesions around the breasts, as a consequence of their exaggerated volume.</p>

<p>&bull; Psychological disorders due to discomfort or nonconformity due to the shape of the breasts.</p>

<p>Procedure Name: Reduction Mastoplasty</p>

<p>Duration: From 3 to 4 hours (depending on the size of the breasts).</p>

<p>General anesthesia.</p>

<p>Hospitalization: Outpatient. In some cases, it may require a night of hospitalization.</p>

<p>Post-operative symptoms: Swelling, moderate pain, ecchymosis (purple), slight bleeding through the drain.</p>

<p>Risks: Pain, bruising, infection, skin injury.</p>

<p>Recovery:</p>

<p>&bull; 2 to 3 weeks to return to work.</p>

<p>&bull; 3 to 4 weeks for walking-type exercises.</p>

<p>&bull; From 4 to 8 weeks for complete resolution to perform any type of exercise or strength.</p>

<p>Duration of Results: Permanent, as long as a stable weight is maintained.</p>

`,
            questions: [
              {title: 'How should you sleep the first days after the intervention?', id: 1, text: `You will have to sleep on your back for the first few days, then on your side, with your post-operative bra, for about a month.`},
              {title: 'When should the operation not be performed?', id: 2, text: `It could be contraindicated in people considered heavy smokers. Tobacco impairs capillary circulation and consequently wound healing. In young patients under 18 years of age. In case of suffering from any disease that may interfere with the surgical process or anesthesia. It is essential to carry out a previous breast study such as a mammogram.`},
              {title: 'When will you be able to return to work?', id: 3, text: `It depends on the type of work you do. If the work is office or similar, it can be incorporated seven days after the intervention. For jobs that require movements or efforts after 15 to 21 days.`},
              {title: 'How will the scars remain?', id: 4, text: `This is one of the aspects that most concerns patients who decide to undergo surgery of this type. In case of breast reduction, the scars are in the shape of an inverted T (In most cases the scars are not very visible). The way of suturing these scars is very personal. Currently, various types of coping are being carried out to try to reduce them as much as possible. In our patients we work with minimal tension to obtain less visible or imperceptible scars.`},
              {title: 'In some patients are visible scars left?', id: 5, text: `We must differentiate between hypertrophic scars and keloids. Hypertrophic scars are thickenings that are produced by mistreatment of the skin, poor suture or infection in the scar and that can be resected (eliminated) again with a new resurfacing of the scar. This is done under local anesthesia and in a very short time in the office. Keloids, if there is a genetic predisposition, will appear anywhere you have a scar. In these cases, it is convenient to apply radiotherapy within forty-eight hours after the intervention. If you have a genetic predisposition to the formation of keloids, you should notify your doctor so that he can take the necessary precautions.`},
              {title: 'How long does it take to improve the appearance of my scars?', id: 6, text: `This is variable, in each patient the behavior is substantially different. It depends on several aspects such as race, nutritional status, wound tension, patient age, presence of associated diseases, sun exposure, etc. In general terms we have:

               • The first thirty days: the scar may be slightly reddened, with a certain reaction to the sutures and adhesive tapes.
              
               • Between thirty days and one year: the scar turns from pink or red to a brownish tone, with a tendency to lighten even more.
              
               • After a year: the scar is no longer consistent, it becomes very soft and whitish and, in some cases, it can be almost imperceptible to the naked eye.`},
              {title: 'Will mammograms be as reliable as before surgery?', id: 7, text: `The reliability of mammograms is the same. As a matter of control, we recommend one six months after the intervention. From then on, you must follow the frequency set by your specialist.`},
            ],
            group: 'corporal'
          },
          {
            name: 'Vulvoplasty',
            id: 21,
            images: [],
            detail: `<p>It is a procedure to rejuvenate the genitals of women after pregnancy. The procedure consists of receiving the labia minora and lipoinjection of the labia majora.</p>

<p>Candidates:</p>

<p>Women who have surpluses in the labia minora and who have completed their pregnancy period.</p>

<p>Procedure Name: Vaginoplasty or vaginal rejuvenation</p>

<p>Procedure Duration: 1 hour</p>

<p>Anesthesia: Local and sedation</p>

<p>Hospitalization: Outpatient</p>

<p>Symptoms: Swelling in the genital area, mild pain</p>

<p>Risks: Infections or bleeding</p>

<p>Recovery: 15 days</p>

<p>Definitive results: After three months</p>

`,
            questions: [],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Thighs (Cruroplasty)',
            id: 22,
            images: [],
            label: 'female',
            detail: `<p>It is an apepsia or lifting of the thighs after massive weight loss. The excess skin is dried or the fat is suctioned to lose weight or reduce the diameter of the thigh.</p>

<p>Candidates: Post-bariatric patients or those who have lost a significant amount of weight</p>

<p>Procedure Name: Thigh lift</p>

<p>Procedure Duration: Two hours</p>

<p>Anesthesia: General or epidural</p>

<p>Hospitalization: One night, outpatient in some cases.</p>

<p>Symptoms: Mild to moderate pain in the area, increased edema in the area</p>

<p>Risks: Hematomas, infections or dehiscence of the operative wound</p>

<p>Recovery: From 15 to 21 days.</p>

<p>Final results: After three months.</p>

`,
            questions: [],
            group: 'corporal'
          },
          {
            name: 'Renuvion',
            id: 23,
            images: [
              {url: '/static/img/renuvion-1.jpg'},
              {url: '/static/img/renuvion-2.jpg'},
              {url: '/static/img/renuvion-3.jpg'},
              {url: '/static/img/renuvion-4.jpg'},
              {url: '/static/img/renuvion-5.jpg'},
            ],
            detail: `<p>It is an advanced energy device that combines the unique properties of cold Helium Plasma with radiofrequency energy, all to instantly tighten and rejuvenate the skin, anywhere on the body or face, sculpting and tightening the skin. , obtaining very natural results.</p>

<p>J- Plasma is indicated for men and women between 20 and 80 years old, who have medium or moderate flaccidity, and for patients who have experienced changes in weight and who are looking to achieve firmer skin.</p>

<p>J-Plasma is the solution for people who have undergone non-invasive body contouring and have not achieved the expected results. It is also the perfect complement for those who have undergone a lipolaser and want to perfect the results, to obtain a much smoother and firmer skin.</p>

<p>With J-Plasma technology you will obtain amazing results immediately, without scars, without surgery, painless and without sick leave.</p>

`,
            questions: [],
            label: 'female',
            group: 'corporal'
          },
          {
            name: 'Werinkle treatment',
            id: 24,
            images: [],
            detail: `<p>It is a facial rejuvenation technique for restoring volume and filling in wrinkles and/or expression lines, using your own body fat, that is, with a substance compatible with your body that does not cause toxicity, allergies, or rejection.</p>

<p>Lipoinjection is a minimally invasive, slightly traumatic, painless procedure, without cuts or scars, which allows us to &quot;sculpt&quot; the face, improve flaccidity and achieve a much improved and rejuvenated appearance.</p>

<p>Candidates: Women for whom natural aging has left obvious scars on the face and neck, causing furrows and folds that make the expression lose definition.</p>

<p>Procedure Name: Facial Lipoinjection</p>

<p>Procedure duration: 30 min to 1 hour.</p>

<p>Local anesthesia.</p>

<p>Hospitalization: Outpatient.</p>

<p>Risks: Bleeding, swelling, ecchymosis (purple bruises) at the injection site.</p>

<p>Recovery:</p>

<p>&bull; 1 to 2 days to return to work.</p>

<p>&bull; One week for complete resolution.</p>

<p>&bull; Final results after seven days.</p>

`,
            questions: [
              {title: 'Who is facial fat transfer addressed to?', id: 1234789023, text: `Indicated for both sexes; usually from the age of 40. It requires a careful physiognomic individual analysis to fully evaluate the set of features.`},
              {title: 'How long do the effects last?', id: 789088456, text: `The effect, both on expression wrinkles and volumes, usually lasts for several years.`},
            ],
            label: 'female',
            group: 'facial',
          },
          {
            name: 'Chin surgery',
            id: 25,
            images: [],
            detail: `<p>Chin surgery can be used to correct both a severely receding chin and a protruding chin. An insufficient chin distorts the facial plane. In addition, it shortens the depth of the neck, disfiguring the profile and giving the sensation of a bird&#39;s face. On the other hand, a very pronounced chin is quite unsightly, especially in women, since it gives them hard or masculine traits.</p>

<p>Candidates: Women with protruding or very receding chin.</p>

<p>Procedure Name: Mentoplasty</p>

<p>Procedure duration: One hour</p>

<p>Anesthesia: Local + sedation</p>

<p>Hospitalization: Outpatient</p>

<p>Risks: Bleeding, inflammation, infection, implant rejection.</p>

<p>Recovery:</p>

<p>&bull; Two days to return to work</p>

<p>&bull; Two weeks for full resolution</p>

<p>&bull; Final results: in 15-30 days.</p>

`,
            questions: [
              {title: 'At what age can the intervention be carried out?', id: 3452345, text: `The process of ossification of the facial bones ends between the ages of 15 and 17. It is recommended for women to wait until they are 18 years old and for men after 21 years.`},
              {title: 'When can you start going to the pool, the gym and exercising?', id: 68903451234, text: `After two weeks, but the exercises should be practiced in moderation and progressively.`},
              {title: 'What medications should be avoided before and after the operation?', id: 1345567889, text: `As in any operation, the patient must refrain from taking aspirin or other anticoagulants during the three weeks prior to the intervention.`},
              {title: 'What is the risk of these operations and treatments?', id: 123524576879, text: `On the one hand, there are the risks common to any operation: those derived from the use of anesthesia, hemorrhages and infections. In the specific case of implants (silicone prostheses), the specific risk is rejection of the chin prosthesis.`},
              {title: 'What kind of discomfort does the intervention cause?', id: 123513653568, text: `It is an intervention that hardly causes discomfort.`},
              {title: 'Is any medication prescribed for the post-operative period?', id: 123235346, text: `The usual medications after any intervention: antibiotics to prevent infection and analgesics to relieve pain.` },
              {title: 'Do I have to take any precautions before the intervention?', id: 1231258686, text: `As in the rest of the facial operations, the condition of the skin is important for the success of the intervention. In the case of the chin, mouth conditions or any type of dental infection must be ruled out.`},
            ],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Nose surgery',
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
            detail: `<p>Surgical intervention aimed at correcting nasal deformities by modifying its shape, which leads to an improvement in balance and facial harmony.</p>

<p>Each rhinoplasty is a different case that must be carefully evaluated. It is not just a question of reducing or increasing the size of the nose, but of adapting it to the features and characteristics of the person. In this type of cosmetic surgery, dialogue with the patient is especially important to contrast his wishes and perspectives with the possibilities for improvement offered by the intervention.</p>

<p>Candidates: Women dissatisfied with the appearance of their nose.</p>

<p>Procedure Name: Rhinoplasty</p>

<p>Surgery time: From 1 to 3 hours, depending on the case.</p>

<p>Type of anesthesia: General.</p>

<p>Hospitalization: Outpatient.</p>

<p>Complications (rare): Bleeding, infection, necrosis, asymmetry.</p>

<p>Recovery time:</p>

<p>&bull; 3 to 12 days to return to work.</p>

<p>&bull; From 4 to 6 weeks to carry out all types of activity.</p>

<p>Post-operative symptoms: mild pain, slight bleeding in the first 24 hours, swelling and edema in some patients around the area (eyes and nose).</p>

<p>Results: The definitive results are observed after six months.</p>

`,
            questions: [
              {title: 'At what age is it possible to operate?', id: 123, text: `When the ossification process of the facial bones has finished, usually between 15 and 17 years of age. However, it is always better to wait until the age of majority before making the decision to have surgery.`},
              {title: 'When is the final result visible?', id: 435, text: `When the plaster is removed after ten days, the nose will be in a correct shape and good enough to lead a completely normal life. But the final result in terms of details will require more time, usually about six months to achieve the final appearance.`},
              {title: 'Will the patient be able to breathe through the nose?', id: 678, text: `It is not. Analgesics are generally not needed for more than three days.`},
              {title: 'What post-operative care should I follow?', id: 789, text: `The postoperative period is not painful, however anti-inflammatory analgesics are indicated. If you feel like sneezing, do it with your mouth open, letting the air out freely. By the time the cast is removed, the visible edema and bruising will have disappeared and the nose will be in good enough condition for the patient to be able to lead a normal life. However, the final aesthetic appearance must follow an evolution that will take no less than six months. It is a slow and progressive evolution that can even go unnoticed. However, we must insist on its great importance for the final result. In addition, adhesives will be placed directly on the skin to control inflammation. Must be used for three weeks`},
              {title: 'What risks does the operation entail?', id: 613, text: `It is not. Analgesics are generally not needed for more than three days.`},
              {title: 'Can I choose the nose I want?', id: 864, text: `No. No plastic surgeon, no matter how expert, can infer 100% how the nose will look after surgery. In the same way, we should not trust that a computer, by means of a photographic simulation, will tell us exactly what the future nose will look like. The physical structure of the face and the proportions of the chin, forehead, etc. they are used by the surgeon for surgical planning. Again, we insist that the doctor-patient relationship is, without a doubt, a key element in directing the surgical plan.`},
              {title: 'Can you sunbathe?', id: 7543, text: `If in your case you have a scar at the base of the nose, you should not receive sun for at least a month. Similarly, if small bruises persist in the areas around the nose, you should stay away from the sun until they have completely disappeared.`},
              {title: 'Will it be possible to wear glasses?', id: 125, text: `Although not visible, the edema caused by the operation persists for a long time. This is noticeable by wearing glasses because they leave a deep mark where it rests on the nose. There is no contraindication, but there is a recommendation not to wear them continuously during the first two months after the intervention. They can be used if you rest from time to time, leaving the necessary time for the mark to recover.`},
            ],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Facial lifting ',
            id: 27,
            images: [
              {url: '/static/img/liftingfacial-1.jpg'},
              {url: '/static/img/liftingfacial-2.jpg'},
              {url: '/static/img/liftingfacial-3.jpg'},
            ],
            label: 'female',
            detail: `<p>Facelift, also known as facial rejuvenation, is a procedure that can help repair some of the visible signs of aging naturally evidenced by sagging, sagging, and wrinkled skin on the face and neck.</p>

<p>It basically consists of repositioning the muscle layers, skin and fat, removing excess tissue through incisions that are usually well camouflaged in the scalp. They extend inside the natural lines that exist in the ears and continue around the lobe and, in some cases, behind the ear and on the scalp.</p>

<p>Candidates: Women for whom natural aging due to the passage of time, prolonged exposure to the sun&#39;s rays or the stress of everyday life have left obvious scars on the face and neck, causing furrows and folds that make the expression lose definition. .</p>

<p>Procedure Name: Rhytidectomy</p>

<p>Duration: From 4 to 5 hours (depending on each case).</p>

<p>General anesthesia.</p>

<p>Hospitalization: From half a day to one day, according to the needs of each case.</p>

<p>Post-operative symptoms: Swelling, slight pain, ecchymosis (purple), slight bleeding through the drains.</p>

<p>Risks: Pain, bruising, infection, temporary or permanent nerve damage.</p>

<p>Recovery:</p>

<p>&bull; 2 to 3 weeks to return to work.</p>

<p>&bull; From 2 to 3 weeks to perform walking-type exercises.</p>

<p>&bull; From 4 to 8 weeks for complete resolution.</p>

<p>Duration of results: From 8 to 10 years.</p>

`,
            questions: [],
            group: 'facial'
          },
          {
            name: 'Brow lift',
            id: 28,
            images: [],
            label: 'female',
            detail: `<p>The Eyebrow Pexy is a procedure that aims to raise the tail of the eyebrows to give them a more aesthetic shape. Candidates: Women who have fallen eyebrows over the years. Name of the procedure: Ciliary Pexia Duration: One hour, approximately. If it is accompanied by eyelid surgery, the time is extended to approximately two hours. Local anesthesia. Hospitalization: Outpatient. Post-operative symptoms: Mild swelling of the area that lasts a couple of days. There should be no pain. Risks: Bleeding or infection of the wound (extremely rare). Recovery: &bull; One day to return to your activities. &bull; If accompanied by eyelid surgery from five days to a week to return to activities. Duration of the results: Several months or years, depending on each case.</p>`,
            questions: [],
            group: 'facial'
          },
          {
            name: 'Cirugia de parpados',
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
            detail: `<p>It consists of drying excess skin and fat bags around the eyelids. It is performed on both upper and lower eyelids.</p>

<p>Candidates:</p>

<p>Women of any age with:</p>

<p>&bull; bags under the eyes (dark circles),</p>

<p>&bull; excess skin on the eyelids,</p>

<p>&bull; Difficulty opening eyes fully and looking sad or tired.</p>

<p>Procedure Name: Blepharoplasty</p>

<p>Duration: From one to two hours, depending on whether all four eyelids are operated at the same time or only the upper or lower ones.</p>

<p>Anesthesia: Local + sedation</p>

<p>Hospitalization: Outpatient</p>

<p>Post-operative symptoms: Swelling, redness and slight bleeding of the area. Mild pain the first 24 hours.</p>

<p>Risks: Bleeding, infection, unsightly scar (very rare), incomplete resection of the bags.</p>

<p>Recovery: One week to return to work.</p>

<p>Duration of results: Approximately 10 years, depending on the patient&#39;s skin.</p>

`,
            questions: [
              {title: 'What medications should you avoid before and after surgery?', id: 1, text: `You should avoid taking blood thinners – aspirin, vitamin E`},
              {title: 'When will I be able to return to work?', id: 2, text: `Normally between the fifth and seventh day after surgery.`},
              {title: 'When can I put on makeup?', id: 3, text: `One week after the operation, after removing the stitches. It is convenient to use sunscreen that can be used as a base for makeup.`},
              {title: 'What care should I follow after surgery?', id: 4, text: `Keep your head elevated (semi-sitting position). Apply cold compresses several times a day for the first 48 hours (you can use cold chamomile). Wear dark glasses for 24 hours. Avoid watching TV or computers for 24 hours. Avoid the sun for at least a month.`},
              {title: 'What specific risks does blepharoplasty present?', id: 5, text: `Risks are rare. These include bleeding, infection, eye irritation, and pocket remnants.`},
              {title: 'Do I have to take any precautions before the intervention?', id: 6, text: `The skin must be well hydrated and clean, free of traces of cosmetics, and without any type of injury. There should be no infection in your eyes. It is not necessary to go to the ophthalmologist before the operation. Suspend alcohol and/or cigarette intake one week before surgery. Notify if you use contact lenses, if you have allergies to any medication or consume any medicine.`},
            ],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Cheek reduction',
            id: 30,
            images: [],
            detail: `<p>Bichat bags are glands of fatty tissue found in the cheeks, just below the cheekbones. These glands do not fulfill any specific function in adults, so many patients choose to remove them to give the face a refined and angular appearance.</p>

<p>Candidates: Women with chubby cheeks looking to refine and stylize the appearance of their face.</p>

<p>Procedure Name: Bichectomy</p>

<p>Procedure Duration: Approximately 1 hour.</p>

<p>Anesthesia: Local plus sedation.</p>

<p>Hospitalization: Outpatient.</p>

<p>Symptoms: Inflammation, moderate pain, ecchymosis (purple).</p>

<p>Risks: Infection.</p>

<p>Recovery:</p>

<p>24 hours of rest and approximately 2 weeks without strenuous exercise</p>

<p>Final results:</p>

<p>The changes are definitive and can be seen between one and six months after the procedure, depending on the patient.</p>

<p>If the patient gains a significant amount of weight, the results of the bichectomy may be lost.</p>

`,
            questions: [],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Neck lifting ',
            id: 31,
            images: [],
            detail: `<p>Over time, the skin tissues suffer the consequences of age by beginning to show sagging and sagging. Although this is a natural aging process, many women prefer to recover the firmness of the skin on their neck, and with it their self-confidence, through a surgical procedure that rejuvenates their appearance.</p>

<p>Through a neck lift, the patient will be able to obtain a young and smooth appearance in the skin by eliminating the flaccidity of the skin of the neck, significantly reducing the wrinkles in this area and giving a much younger appearance.</p>

<p>Candidates: Women with loose skin in the neck area and realistic expectations regarding their appearance after the procedure</p>

<p>Procedure Name: Lower Rhytidectomy</p>

<p>Procedure Duration: From 2 to 5 hours, depending on the complexity.</p>

<p>Anesthesia: Local + sedation or general.</p>

<p>Hospitalization: Outpatient</p>

<p>Symptoms: Swelling, moderate pain, ecchymosis (purple)</p>

<p>Risks: Infection.</p>

<p>Recovery:</p>

<p>2 or 3 days of rest and approximately 2 weeks to return to daily activities</p>

<p>Final results:</p>

<p>The results of a facelift can last between 10 and 15 years.</p>

`,
            questions: [],
            label: 'female',
            group: 'facial'
          },
          {
            name: 'Ear surgery',
            id: 32,
            images: [],
            label: 'female',
            detail: `<p>If you are bothered by the way your ears protrude from your head, or if one or both ears are misshapen due to injury or a birth defect, you may undergo otoplasty to give your ears a more aesthetic appearance.</p>

<p>Otoplasty can be done at any age once the ears have reached their full size&mdash;usually at age 5&mdash;and throughout adulthood.</p>

<p>Candidates:</p>

<p>&bull; Patients with large and protruding ears.</p>

<p>&bull; Patients with enlarged lobes.</p>

<p>&bull; Patients with floppy ears.</p>

<p>Procedure Name: Otoplasty</p>

<p>Procedure Duration: Approximately 1 hour.</p>

<p>Anesthesia: Local + sedation.</p>

<p>Hospitalization: Outpatient.</p>

<p>Symptoms: Inflammation, pain, ecchymosis (purple), skin hypersensitivity.</p>

<p>Risks: Asymmetry.</p>

<p>Recovery:</p>

<p>2 or 3 days of rest and approximately 1 week to return to daily activities.</p>

<p>The patient must wear a band that keeps the ears close to the head for at least 1 month.</p>

<p>Final results:</p>

<p>Once the bandages are removed, you will notice an immediate change in the appearance of your ears. These changes are permanent.</p>

`,
            questions: [
              {title: 'From what age can this surgery be performed on children?', id: 1, text: `From 6 years old.`},
              {title: 'How are the scars?', id: 2, text: `The scar will be in the back of the ear, so it will be imperceptible even when wearing short or tied hair.`},
              {title: 'When will normal life be possible?', id: 3, text: `In a few days. You will be able to perform physical exercises after three weeks.`},
              {title: 'It is painful?', id: 4, text: `It can bother contact or pressure during the first month.`},
              {title: 'What postoperative care should I follow?', id: 5, text: `21 days after surgery, a light compression garment (cotton and elastic band) should be used to protect the ears from blows or sudden gestures.`},
            ],
            group: 'facial'
          },
          {
            name: 'Botulinum toxin',
            id: 33,
            images: [],
            label: 'female',
            group: 'treatments',
            questions: [],
            detail: `<p>The application of botulinum toxin, known as botox, has become one of the most requested facial treatments in my practice since it improves the appearance and prevents skin aging without surgery.</p>

<p>If you want to apply it, do not forget the following suggestions</p>

<p>It is indicated for patients who have very marked expression lines, and who have a strong muscle that produces a significant contraction and a very noticeable wrinkle.<br />
It is a very fast procedure. First, the strongest area of ​​the muscle is sought to apply it, then it is marked with a few points, it is injected and that&#39;s it.<br />
The areas in which it can be applied are between the eyebrows, the forehead and in the expression lines that are formed by the movement of the muscle. Normally it is necessary to take care that when applying botulinum toxin some areas are reserved, for example, in the case of the forehead, it is necessary to avoid touching the muscles that raise the eyebrows, since if these are inhibited, the patient is perceived with the eyelids fallen.<br />
After the application of botox, it begins to take effect and clinically the inhibition of muscle movement is seen between 48 and 72 hours later. The patient notices that he cannot contract the muscle no matter how hard he tries. That effect becomes full or complete between 7 and 10 days after it was injected.<br />
Botox application is the simplest cosmetic procedure and does not require a long recovery period. Just make sure you do it with a proven specialist and get closer to the change you deserve.</p>

`,
          },
        ]
    }
  },
  {
    id: 567312,
    section: 'contact',
    language: 'ES',
    options: {
      title: 'Contacto',
      form: {
        sendingText: 'Enviando',
        buttonText: 'Enviar',
        name: {text: 'Nombre', placeholder: 'Escribir texto'},
        lastname: {text: 'Apellido', placeholder: 'Escribir texto'},
        phone: {text: 'Teléfono fijo', placeholder: '+58 333 333 333'},
        cellphone: {text: 'Teléfono de contacto', placeholder: '+58 999 222 333'},
        email: {text: 'Email', placeholder: 'email@ejemplo.com'},
        dni: {text: 'DNI / Cedula', placeholder: 'CE. 24.556.778'},
        reason: {text: 'Asunto', placeholder: 'Escribir texto'},
        howDidYouKnow: {
          text: '¿Como se entero de nosotros?',
          options: [
            {text: 'opcion 1', id: 1},
            {text: 'opcion 2', id: 2},
            {text: 'opcion 3', id: 3},
            {text: 'opcion 4', id: 4},
          ]
        },
        message: {text: 'Mensaje', placeholder: 'Escribir texto'}
      },
      locations: {
        email: 'ATENCIONALCLIENTE@TOROPARILLI.COM',
        phone: '+58 424 2677686',
        places: [
          {
            id: 1,
            title: 'Venezuela',
            value: 'venezuela',
            options: [
              {img: '/static/icons/logo.png', name: 'CONSULTORIO CARACAS', direction: 'CENTRO COMERCIAL SAN IGNACIO, TORRE COPÉRNICO. PISO 7, OFICINA 08.'},
              {img: '/static/icons/logo.png', name: 'CLÍNICA CARACAS', direction: '4TA AV. LOS PALOS GRANDES, ENTRE 4TA Y 5TA TRANSVERSAL. CHACAO - CARACAS'},
              {img: '/static/icons/logo.png', name: 'HOSPEDAJE CARACAS', direction: 'AVENIDA JOSE FELIX SOSA, URBANIZACION LA FLORESTA, QUINTA AQUIFAN'},
            ]
          },
          {
            id: 2,
            title: 'Republica Dominicana',
            value: 'dominicana',
            options: [
              {img: '/static/icons/logo.png', name: 'CLÍNICA/CONSULTORIO R.D.', direction: 'CALLE WILLFREDO GARCÍA REYES #5, ARROYO HONDO, PRÓXIMO AL BANCO DEL PROGRESO'}
            ]
          }
        ]
      }
    }
  },
  {
    id: 51209,
    section: 'contact',
    language: 'EN',
    options: {
      title: 'Contact',
      form: {
        sendingText: 'Sending',
        buttonText: 'Send',
        name: {text: 'Name', placeholder: 'Write text'},
        lastname: {text: 'Lastname', placeholder: 'Write text'},
        phone: {text: 'Phone', placeholder: '+58 333 333 333'},
        cellphone: {text: 'Cell phone', placeholder: '+58 999 222 333'},
        email: {text: 'Email', placeholder: 'email@example.com'},
        dni: {text: 'DNI', placeholder: 'CE. 24.556.778'},
        reason: {text: 'Reason', placeholder: 'Write text'},
        howDidYouKnow: {
          text: 'How did he find out about us ?',
          options: [
            {text: 'option english 1', id: 1},
            {text: 'option english 2', id: 2},
            {text: 'option english 3', id: 3},
            {text: 'option english 4', id: 4},
          ]
        },
        message: {text: 'Message', placeholder: 'Write text'}
      },
      locations: {
        email: 'ATENCIONALCLIENTE@TOROPARILLI.COM',
        phone: '+58 424 2677686',
        places: [
          {
            id: 1,
            title: 'Venezuela',
            value: 'venezuela',
            options: [
              {img: '/static/icons/logo.png', name: ' CARACAS OFFICE', direction: 'SAN IGNACIO SHOPPING CENTER, COPERNICO TOWER. FLOOR 7, OFFICE 08.'},
              {img: '/static/icons/logo.png', name: 'CARACAS CLINIC', direction: '4TH AV. LOS PALOS GRANDES, BETWEEN 4TH AND 5TH TRANSVERSAL. CHACAO - CARACAS'},
              {img: '/static/icons/logo.png', name: ' CARACAS ACCOMMODATION', direction: 'JOSE FELIX SOSA AVENUE, LA FORESTA ESTATE, QUINTA AQUIFAN'},
            ]
          },
          {
            id: 2,
            title: 'Republica Dominicana',
            value: 'dominicana',
            options: [
              {img: '/static/icons/logo.png', name: 'CLINIC / OFFICE R.D.', direction: 'WILLFREDO GARCÍA REYES STREET #5, ARROYO HONDO, NEXT TO BANCO DEL PROGRESO'}
            ]
          }
        ]
      }
    }
  },
]

export default sections;
