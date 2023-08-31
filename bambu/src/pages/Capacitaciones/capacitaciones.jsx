import React from 'react';
import styles from './capacitaciones.module.css'

const Capacitaciones = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className={styles.header}>
                <div className=" mx-auto flex items-center justify-end mt-8 mr-20 h-full ">
                    <div className='top-0 bg-zinc-300 bg-opacity-70 backdrop-blur-sm pr-28 pl-10 pt-20 pb-20 w-1/3 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full'>
                        <h1 className='text-center text-green-700 font-bold text-6xl mb-5'>Capacitaciones</h1>
                        <p className='font-semibold'>Nuestros servicios de capacitación están diseñados para proporcionar un aprendizaje significativo y práctico a individuos y equipos que desean mejorar sus habilidades y conocimientos en diferentes áreas. Ofrezco una variedad de formaciones disponibles que se adaptan a las necesidades específicas de cada cliente. Tanto la modalidad presencial como online están disponibles, brindando flexibilidad y comodidad para los participantes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-6 mt-20">
                <div className="flex-1 text-center m-10 block rounded-lg bg-slate-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Card title
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <button
                            type="button"
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Button
                        </button>
                    </div>
                </div>
                <div className="flex-1 text-center m-10 block  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Card title
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <button
                            type="button"
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capacitaciones;
