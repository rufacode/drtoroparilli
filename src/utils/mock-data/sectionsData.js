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
          {path: 'consulta-online', title: 'Consulta online', id: 4},
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
          {path: 'consulta-online', title: 'Online Consult', id: 4},
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
]

export default sections;
