import React from 'react';
import './Inicio.css';

function Inicio() {

    const productos = [
        {
            nombre: 'Bicicleta Ruta Giant Propel Advanced Pro 1 2024',
            descripcion: 'La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Únete a esta ola sustentable que avanza en todo el mundo!'
        },
        {
            nombre: 'Guayos X Crazyfast.4 Multiterreno Hq4535 adidas',
            descripcion: 'La suela versátil de estos guayos ofrece velocidad en el terreno firme, terreno duro y el césped artificial. Presenta una parte superior textil revestida suave y resistente al desgaste que te permite controlar el balón y regatear a tus rivales a gran velocidad'
        },
        {
            nombre:'Raqueta De Tenis Profesional Wilson Pro Staff 97 V13 315g',
            descripcion:'Codiseñada por Roger Federer, el Pro Staff ofrece la sensación pura y clásica que los jugadores han llegado a amar, pero con un re-diseño que rinde homenaje a la histórica serie Pro Staff, presenta una renovada construcción Braid 45 que aumenta la precisión al ajustar el ángulo de las fibras trenzadas dobles para mejorar la sensación y la estabilidad. Dos mejoras adicionales a esta raqueta incluyen una base de encordado más densa que mejora la consistencia en cada golpe y una nueva tapa final que se usa en las otras líneas de raquetas de rendimiento de Wilson para mejorar la comodidad y la ergonomía.'
        }
    ];

    return (
        <div className='pantalla'>
            <div className='bienvenida'>
                <h1>Bienvenido </h1>
            </div>
            <div className='info-producto'>
            {productos.map((producto, index) => (
                    <div key={index}>
                        <h2>{producto.nombre}</h2>
                        <p>{producto.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inicio;
