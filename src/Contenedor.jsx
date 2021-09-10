import React  from 'react';
import Personajes from './Personajes';

const personajes = [
    {
        "nombre": "Maia Roberts",
        "edad" : 28,
        "genero": "F",
        "imagen": "https://static.wikia.nocookie.net/shadowhunters/images/a/aa/Maia_Roberts_%28TV%29.jpg/revision/latest?cb=20170210155847&path-prefix=es"
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
        "imagen": "https://static.wikia.nocookie.net/shadowhunters/images/4/4a/Jace_Wayland_%28TV%29.jpg/revision/latest?cb=20170610212012&path-prefix=es"
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
        "imagen": "https://static.wikia.nocookie.net/shadowhunters/images/9/9d/Valentine_Morgenstern_SH_%28TV%29.jpg/revision/latest?cb=20170210195642&path-prefix=es"
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