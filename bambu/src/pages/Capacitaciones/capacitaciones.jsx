import React from 'react';
import styles from './capacitaciones.module.css'

const Capacitaciones = () => {
    return (
        <div className="flex flex-col h-full">
            <div className={styles.header}>
                <div className=" mx-auto flex items-center justify-end mt-8 mr-20 h-full ">
                    <div className='top-0 bg-zinc-300 bg-opacity-70 backdrop-blur-sm pr-28 pl-10 pt-20 pb-20 w-1/3 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full'>
                        <h1 className='text-center text-green-700 font-bold text-6xl mb-5'>Capacitaciones</h1>
                        <p className='font-semibold'>Nuestros servicios de capacitación están diseñados para proporcionar un aprendizaje significativo y práctico a individuos y equipos que desean mejorar sus habilidades y conocimientos en diferentes áreas. Ofrezco una variedad de formaciones disponibles que se adaptan a las necesidades específicas de cada cliente. Tanto la modalidad presencial como online están disponibles, brindando flexibilidad y comodidad para los participantes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center text-4xl font-bold text-lime-700 mt-10'>
                <h1>Características de las Formaciones</h1>
            </div>
            <div className="flex mt-10">

                <div className="flex-1 text-center m-5 p-10 block ease-in duration-300 hover:bg-transparent rounded-lg bg-green-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
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
                            Cada formación se desarrolla en espacios de 4 horas, lo que permite una inmersión profunda en el tema sin ocupar demasiado tiempo en la agenda.
                        </p>

                    </div>
                </div>
                <div className="flex-1 text-center m-5 p-10 block ease-in duration-300 hover:bg-transparent rounded-lg bg-green-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
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
                            Entendemos que cada cliente tiene necesidades únicas, por lo que nuestras formaciones son adaptables y personalizables según las especificaciones requeridas.
                        </p>

                    </div>
                </div>
                <div className="flex-1 text-center m-5 p-10 block ease-in duration-300 hover:bg-transparent rounded-lg bg-green-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
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
                            Puedes optar por la modalidad presencial para una experiencia en vivo y en directo, o la modalidad online para mayor flexibilidad y alcance geográfico.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capacitaciones;
