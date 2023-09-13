import React from 'react';
import styles from './capacitaciones.module.css';
import Acordeon from '@/Components/Acordeon/Acordeon';

const Capacitaciones = () => {

    const formaciones = [
        {
            title: 'Gestión del Tiempo',
            description: 'Optimiza tu productividad y eficiencia organizando eficazmente tus tareas y prioridades'
        },
        {
            title: '10 Pasos para Desarrollar tu Proyecto',
            description: 'Aprende el proceso paso a paso para desarrollar y ejecutar tu proyecto con éxito'
        },
        {
            title: 'Inteligencia Emocional para Emprendedores',
            description: 'Desarrolla habilidades emocionales clave para liderar con empatía y resolver conflictos de manera efectiva'
        },
        {
            title: 'OKR: Objetivos Ágiles y Estratégicos',
            description: 'Domina la metodología OKR para establecer y alcanzar objetivos ambiciosos'
        },
        {
            title: 'Comunicación Eficaz',
            description: 'Mejora tus habilidades de comunicación verbal y no verbal para transmitir mensajes de manera clara y efectiva'
        },
        {
            title: 'Herramientas Digitales para Docentes',
            description: 'Descubre herramientas tecnológicas que enriquecerán tus habilidades de enseñanza'
        },
        {
            title: 'Oratoria y Storytelling',
            description: 'Aprende a cautivar a tu audiencia con técnicas de oratoria persuasiva y narración de historias impactantes'
        },
        {
            title: 'Atención al Cliente',
            description: 'Desarrolla habilidades para brindar un servicio excepcional y generar lealtad en los clientes'
        },
        {
            title: 'Pitch',
            description: 'Domina la presentación concisa y convincente de tu idea o proyecto frente a inversionistas o clientes potenciales'
        },
        {
            title: 'Feedback Efectivo',
            description: 'Aprende a dar y recibir retroalimentación constructiva para fomentar el crecimiento profesional'
        },
        {
            title: 'Experiencia del Empleado',
            description: 'Descubre cómo crear un entorno de trabajo positivo y motivador para tus colaboradores'
        },
        {
            title: 'Técnicas de Venta',
            description: 'Desarrolla habilidades de ventas efectivas para aumentar tus resultados comerciales'
        },
        {
            title: 'Team Building',
            description: 'Fortalece el trabajo en equipo y promueve la colaboración y la sinergia entre los miembros de tu equipo'
        },
        {
            title: 'Aliados Digitales para Vender',
            description: 'Aprende a aprovechar las herramientas digitales y las redes sociales para impulsar tus ventas'
        },
        {
            title: 'Ikigai',
            description: 'Descubre tu propósito y pasión personal para encontrar sentido y plenitud en tu vida profesional'
        },
        {
            title: 'Liderazgo y Gestión de Equipos',
            description: 'Adquiere habilidades de liderazgo inspirador para guiar a tu equipo hacia el éxito'
        },
        {
            title: 'Astrología para Vender',
            description: 'Explora cómo la astrología puede influir en el comportamiento del cliente y mejorar tus estrategias de venta'
        }
    ];


    return (
        <div className="flex flex-col h-full">
            <div className={styles.header}>
                <div className="lg:flex lg:justify-end lg:items-center h-full">
                    <div className="top-0 bg-zinc-300 bg-opacity-70 backdrop-blur-sm p-6 lg:p-24 w-full lg:w-1/2 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full">
                        <h1 className="text-center text-green-700 font-bold text-4xl lg:text-6xl mb-3 lg:mb-5">
                            Capacitaciones
                        </h1>
                        <p className="font-semibold text-sm lg:text-base">
                            Nuestros servicios de capacitación están diseñados para proporcionar
                            un aprendizaje significativo y práctico a individuos y equipos que
                            desean mejorar sus habilidades y conocimientos en diferentes áreas
                            Ofrecemos una variedad de formaciones disponibles que se adaptan a
                            las necesidades específicas de cada cliente Tanto la modalidad
                            presencial como online están disponibles, brindando flexibilidad y
                            comodidad para los participantes
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center text-4xl font-bold text-lime-700 mt-10">
                <h1>Características de las Formaciones</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-10">
                <div className="flex-1 text-center m-5 p-10 bg-transparent rounded-lg hover:bg-green-100 shadow-md lg:shadow-lg dark:bg-neutral-700">
                    <div className="p-6">
                        <h5 className="mb-2 text-3xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                            Duración
                            <lord-icon
                                src="https://cdn.lordicon.com/qznlhdss.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{ width: "50px", height: "50px", padding: "10px" }}
                            ></lord-icon>
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Cada formación se desarrolla en espacios de 4 horas, lo que permite
                            una inmersión profunda en el tema sin ocupar demasiado tiempo en la
                            agenda
                        </p>
                    </div>
                </div>
                <div className="flex-1 text-center m-5 p-10 bg-transparent rounded-lg hover:bg-green-100 shadow-md lg:shadow-lg dark:bg-neutral-700">
                    <div className="p-6">
                        <h5 className="mb-2 text-3xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                            Adaptable
                            <lord-icon
                                src="https://cdn.lordicon.com/fbdgkenc.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{ width: "50px", height: "50px", padding: "10px" }}>

                            </lord-icon>
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Entendemos que cada cliente tiene necesidades únicas, por lo que
                            nuestras formaciones son adaptables y personalizables según las
                            especificaciones requeridas
                        </p>
                    </div>
                </div>
                <div className="flex-1 text-center m-5 p-10 bg-transparent rounded-lg hover:bg-green-100 shadow-md lg:shadow-lg dark:bg-neutral-700">
                    <div className="p-6">
                        <h5 className="mb-2 text-3xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                            Modalidades
                            <lord-icon
                                src="https://cdn.lordicon.com/vpcmkqzt.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{ width: "50px", height: "50px", padding: "10px" }}>
                            </lord-icon>
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Puedes optar por la modalidad presencial para una experiencia en
                            vivo y en directo, o la modalidad online para mayor flexibilidad y
                            alcance geográfico
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center text-4xl font-bold text-lime-700 mt-24">
                <h1>Formaciones disponibles</h1>
            </div>
            <div className="mx-8">
                <Acordeon formaciones={formaciones} />
            </div>


        </div>
    );
};

export default Capacitaciones;
