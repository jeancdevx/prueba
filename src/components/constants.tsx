interface NavbarConstantsInterface {
  href: string
  text: string
}

export const NAVBAR_CONSTANTS: NavbarConstantsInterface[] = [
  {
    href: '/',
    text: 'Inicio'
  },
  {
    href: '/reservas',
    text: 'Reservas'
  },
  {
    href: '/',
    text: 'Inicio'
  },
  {
    href: '/nuevos-libros',
    text: 'Nuevos libros'
  },
  {
    href: '/contacto',
    text: 'Contactenos'
  }
]

export const RED_SOCIAL_CONSTANTS = [
  {
    href: 'https://facebook.com',
    text: 'Facebook',
    imageSrc: '/social/face.jpg',
    alterImageSrc: '/social/faceb.jpg'
  },
  {
    href: 'https://instagram.com',
    text: 'Instagram',
    imageSrc: '/social/instagram.jpg',
    alterImageSrc: '/social/instagramb.jpg'
  },
  {
    href: 'https://twitter.com',
    text: 'Twitter',
    imageSrc: '/social/twit.jpg',
    alterImageSrc: '/social/twitb.jpg'
  }
]

export const LIBROS_CONSTANTS = [
  {
    title: 'Felipillo',
    autor: 'Sennan',
    imageSrc: '/libros/libro1.jpg'
  },
  {
    title: 'Elecciones y Decepciones',
    autor: 'Torres',
    imageSrc: '/libros/libro2.jpg'
  },
  {
    title: 'Todas las sangres',
    autor: 'Arguedas',
    imageSrc: '/libros/libro3.jpg'
  },
  {
    title: 'Un mundo para Julius',
    autor: 'Echenique',
    imageSrc: '/libros/libro4.jpg'
  },
  {
    title: 'La Novela Peruana',
    autor: 'Cornejo',
    imageSrc: '/libros/libro5.jpg'
  },
  {
    title: 'La ciudad y los perros',
    autor: 'Vargas Llosa',
    imageSrc: '/libros/libro6.jpg'
  }
]
