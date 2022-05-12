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
        {img: '/static/img/consulta-preview.jpg', title: 'Consulta Online', href: '/consulta-online', id: 3},
        {img: '/static/img/contacto.jpg', title: 'Procedimientos', href: '/procedimientos', id: 4},
        {img: '/static/img/article-preview.jpg', title: 'Articulos', href: '/articulos', id: 5},
      ]
    }
  },
  {
    id: 33,
    section: 'articles',
    language: 'ES',
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
    id: 4,
    section: 'home',
    language: 'EN',
    options: {
      cards: [
        {img: '/static/img/antes-despues-index.jpg', title: 'Before and Ffter', href: '/antes-y-despues', id: 1},
        {img: '/static/img/team-preview.jpg', title: 'The Team', href: '/el-equipo', id: 2},
        {img: '/static/img/consulta-preview.jpg', title: 'Online Consult', href: '/consulta-online', id: 3},
        {img: '/static/img/contacto.jpg', title: 'Procedures', href: '/procedimientos', id: 4},
        {img: '/static/img/article-preview.jpg', title: 'Articles', href: '/articulos', id: 5},
      ]
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
]

export default sections;
