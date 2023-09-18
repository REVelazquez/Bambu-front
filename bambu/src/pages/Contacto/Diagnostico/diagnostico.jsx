import styles from './diagnostico.module.css'
import Link from 'next/link'

const Diagnostico = () => {
    return (
        <div className="flex flex-col h-full">
            <div className={styles.header}>
                <div className="mx-auto flex items-center justify-end mt-8 lg:mt-0 lg:mr-20 h-full">
                    <div className='mb-10 bg-zinc-300 bg-opacity-70 backdrop-blur-full p-6 w-full lg:w-1/3 rounded-full flex flex-col items-center'>
                        <h1 className='font-bold text-center text-3xl lg:text-4xl mb-3 animate-fade-down'>
                            Encuentra Tu Camino <span className='text-lime-700'>Formulario de Diagnóstico</span>
                        </h1>
                        <p className="font-semibold animate-fade-down lg:text-sm text-center"> Descubre Oportunidades Únicas con Nuestro Formulario de Diagnóstico
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-green-100 py-10 px-5 md:py-16 md:px-10 flex flex-col items-center justify-center m-5 md:m-10 animated animate__fadeIn">
                <h2 className="text-xl md:text-5xl font-bold text-green-700 text-center mb-5 md:mb-5">
                    TU VIAJE HACIA SOLUCIONES PERSONALIZADAS COMIENZA AQUÍ
                </h2>

                <h4 className="font-semibold text-lg md:text-xl text-center">
                    Completa nuestro breve formulario de diagnóstico para desbloquear nuevas oportunidades
                </h4>
                <p className="mb-4 mt-5 text-base lg:text-sm text-neutral-600 text-center">
                    Al hacer clic en "Comienza Ahora", serás llevado directamente a nuestro formulario de diagnóstico. Con tus respuestas, estaremos listos para diseñar la mejor ruta para el éxito de tu emprendimiento.
                </p>
                <div className="mt-5 md:mt-8">
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdNj0T9jEKUI9nNyUJKqrN10rFde6DA2X6W0EB3hBDbVo8lfg/viewform">
                        <button
                            type="button"
                            className="inline-block bg-green-700 font-bold rounded-full border-2 border-green-700 px-6 py-2 text-lg md:text-xl uppercase text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:border-green-600 hover:text-green-500 focus:border-green-600 focus:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 active:bg-green-800 active:border-green-800 active:text-green-800 animate-fade-down"
                        >
                            Comienza ahora
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Diagnostico
