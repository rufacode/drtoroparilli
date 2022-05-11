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
]

export default sections;
