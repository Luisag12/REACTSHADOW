import React  from 'react';
import Personajes from './Personajes';

const personajes = [
    {
        "nombre": "Maia Roberts",
        "edad" : 28,
        "genero": "F",
        "imagen": "https://64.media.tumblr.com/20a7d1e32d212dedb318becf88a7a64c/tumblr_p71nwc4SNH1xpejh9o2_400.jpg"
    },
    {
        "nombre": "Clary Fray",
        "edad" : 20,
        "genero": "F",
        "imagen": "https://pbs.twimg.com/profile_images/921299820584763392/hWu_16-8_400x400.jpg"
    },
    {
        "nombre": "Jace Wayland",
        "edad" : 22,
        "genero": "M",
        "imagen": "https://images6.fanpop.com/image/photos/39200000/Jace-Wayland-shadowhunters-tv-show-39227489-667-1000.jpg"
    },
    {
        "nombre": "Isabelle Lightwood",
        "edad" : 25,
        "genero": "F",
        "imagen": "https://pbs.twimg.com/profile_images/1124443578267258881/2zCHY4eE_400x400.jpg"
    },
    {
        "nombre": "Valentine Morgenstern",
        "edad" : 50,
        "genero": "M",
        "imagen": "https://leoestudio.files.wordpress.com/2015/05/cds-serie-valentine-bien.jpg"
    },
    {
        "nombre": "Alec Lightwood",
        "edad" : 23,
        "genero": "M",
        "imagen": "https://i.pinimg.com/originals/5d/e6/e7/5de6e747856c5ef94bff1a01ea495155.jpg"
    }
]

const Contenedor = () => (
    <>
         {
             personajes.map ( c => <Personajes nombre = { c.nombre } edad = { c.edad } genero = { c.genero } imagen = { c.imagen }/>)
         }
    </>
);

export default Contenedor;
