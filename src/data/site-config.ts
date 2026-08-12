import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://jpquinterop.github.io',
    avatar: {
        src: avatar,
        alt: 'Jean Paul Quintero Pelaez'
    },
    title: 'Jean Paul Quintero Pelaez',
    subtitle: 'Estudiante de Ingeniería de Sistemas y Matematicas y Ciencia de Datos',
    description: 'Portafolio de bases de datos 1',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Jean Paul Quintero Pelaez - https://github.com/jpquinterop/jpquinterop.github.io'
    },
     headerNavLinks: [
        { text: 'Inicio', href: '/' },
        { text: 'Presentación', href: '/presentation' },  
        { text: 'Projectos', href: '/projects' },
        { text: 'Blog', href: '/blog' }
    ],
    footerNavLinks: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Terms', href: '/terms' }
    ],
    socialLinks: [
        { text: 'GitHub', href: '**https://github.com/jpquinterop**' },
    ],
    hero: {
        title: 'Hola, bienvenido a mi portafolio',
        text: "Soy Jean Paul Quintero Pelaez, soy estudiante de Ing. de Sistemas y matematicas.\n\n\nExplora mis proyectos en [GitHub](https://github.com/jpquinterop).",
        image: {
            src: hero,
            alt: '**Tu Nombre trabajando en su computador**'
        },
       actions: [
            { text: 'Ver Presentación', href: '/presentation' }, 
            { text: 'Contáctame', href: '/contact' }
            ]
    },
    subscribe: {
        enabled: false,
        title: '',
        text: '',
        form: { action: '#' }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;