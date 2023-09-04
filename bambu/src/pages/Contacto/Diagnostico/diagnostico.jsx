import styles from './diagnostico.module.css'
import Link from 'next/link'

const Diagnostico = () => {
    return (
        <div className="flex flex-col h-full">
            <div className={styles.header}>
                <div className=" mx-auto flex items-center justify-end mt-8 mr-20 h-full ">
                    <div className='top-0 bg-zinc-300 bg-opacity-70 backdrop-blur-sm pr-14 pl-10 pt-20 pb-20 w-1/3 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full'>
                        <h1 className='text-center font-bold text-4xl mb-5'>
                            Encuentra Tu Camino <span className='text-lime-700'>Formulario de Diagnóstico</span>
                        </h1>
                        <p className='font-semibold text-center'> Descubre Oportunidades Únicas con Nuestro Formulario de Diagnóstico
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center m-10 p-10  '>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-lime-700'>Tu viaje hacia soluciones personalizadas comienza aquí</h2>
                    <h4 className='font-bold mt-5 text-lg'>Completa nuestro breve formulario de diagnóstico para desbloquear nuevas oportunidades</h4>
                    <p className='mt-5 w-1/2 ml-auto mr-auto'> Al hacer clic en "Comienza Ahora", serás llevado directamente a nuestro formulario de diagnóstico. Con tus respuestas, estaremos listos para diseñar la mejor ruta para el éxito de tu emprendimiento.</p>
                </div>
                <div className='flex justify-center'>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdNj0T9jEKUI9nNyUJKqrN10rFde6DA2X6W0EB3hBDbVo8lfg/viewform">
                        <button
                            type="button"
                            className="inline-block bg-info font-bold mt-5 rounded-full border-2 border-info px-6 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-info-600 hover:bg-opacity-80 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700"
                            data-te-ripple-init>Comienza ahora</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Diagnostico
