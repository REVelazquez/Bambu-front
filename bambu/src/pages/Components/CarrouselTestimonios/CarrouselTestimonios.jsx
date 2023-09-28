import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { images } from '../../../../public/Assets/Testimonios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from './CarrouselTesti.module.css'

const testimonios = [
    {
        imagen: images.Melina,
        nombre: 'Melina Serra',
        profesion: 'CEO de Henias',
        comentario: '“Es un placer proyectar, compartir y trabajar con Daniel. Sumamente profesional, aporta siempre un aspecto constructivo, tanto a los vínculos como a los proyectos laborales. Pujante, innovador y flexible, optimista y no por eso deja de ser realista. O sea, sumamente positivo”',
    },
    {
        imagen: images.Sergio,
        nombre: 'Sergio Diamonte',
        profesion: 'CEO de Hotel Antiguo Camino',
        comentario: '“Que difícil tomar este tipo de servicios! Inversamente proporcional al beneficio y apertura de "coco" que generan. Realmente un ANTES y un DESPUÉS de su intervención aquí. Todos los días aplicamos parte de la inmensa batería de recursos que nos dejaron. Simplemente GRACIAS y si estás por tomar este tipo de servicios, NO LO DUDES. Es genial y el ROI vuelve con creces.”',
    },
    {
        imagen: images.Candelaria,
        nombre: 'Candelaria Lopez Larrosa',
        profesion: 'Co Founder de Cocina de Viajes',
        comentario: '“Excelente asesoramiento. Muy claro y personalizado. Nos ordenó y terminamos con una estrategia eficiente para nuestro negocio. Mil gracias.”',
    },
    {
        imagen: images.Clarisa,
        nombre: 'Clarisa Balbo',
        profesion: 'People Partner de Gett',
        comentario: '“Agradecerles por la predisposición, abiertos siempre a todas las sugerencias que hicimos. Los chicos quedaron super contentos con la capacitación. Eso se vio reflejado en la encuesta de satisfacción que dieron unos resultados hermosos. Seguiremos en contacto para futuras formaciones o talleres.”',
    },
    {
        imagen: images.Marcos,
        nombre: 'Marcos Gutierrez',
        profesion: 'CEO de La Casona Gastronomía',
        comentario: '“Un placer haber tenido este curso me ayudó a superarme a salir de la zona de confort, de conocer gente maravillosa y emprendedora mil gracias Flia Bambú y nos volveremos a ver pronto. Fueron mi salida a flote en esa pandemia que me lleno de incertidumbres, necesitaba saber por dónde empezar este nuevo proyecto, como olvidar esos hermosos días en donde esperaba con ansias esas clases virtuales como aquel adolescente en sus primeros días de secundaria.”',
    },
    {
        imagen: images.Julieta,
        nombre: 'Julieta Actis',
        profesion: 'Licenciada en Química y Coach',
        comentario: '“INCREÍBLE EXPERIENCIA!!! Lo recomendaré siempre que pueda, fue más allá de la información. Tiene ritmo, buenos datos y mucho potencial... porque ese es el punto, el resto lo hace cada uno pero sintiendo que hay una base en dónde apoyarse..”',
    },
];


function TestimoniosCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonios.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center h-full'>

            <Carousel
                className={`bg-transparent rounded-lg shadow-md lg:shadow-lg dark:bg-neutral-700 ${styles.section}`} // Ancho máximo en pantallas grandes
                autoPlay
                infiniteLoop
                showThumbs={false}
                showIndicators={false}
                interval={8000}
                selectedItem={currentSlide}
                showArrows={true}
                showStatus={false}
                transitionTime={1000}
                swipeable={typeof window !== 'undefined' && window.innerWidth > 768}
                dynamicHeight={false}
                emulateTouch={typeof window !== 'undefined' && window.innerWidth > 768}
            >
                {testimonios.map((testimonio, index) => (
                    <div
                        key={index}
                        className="p-4 flex flex-col items-center justify-center cursor-grab"
                    >
                        <div className="relative h-48 w-48 mb-4">
                            <Image
                                src={testimonio.imagen}
                                alt={`Imagen de ${testimonio.nombre}`}
                                layout="fill"
                                objectFit="cover"
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                        <p className={`text-black text-center text-md ${styles.comentario}`}>
                            {testimonio.comentario}
                        </p>
                        <p className="text-green-800 font-bold text-md mt-4">
                            {testimonio.nombre}
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 text-sm">
                            {testimonio.profesion}
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default TestimoniosCarousel;