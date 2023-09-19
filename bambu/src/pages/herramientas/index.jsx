import React from 'react';
import style from './index.module.css';

const Herramientas = () => {
  return (
    <div className="flex flex-col h-full">
      <div className={style.container}>
        <div className="mx-auto flex items-center justify-end mt-8 lg:mt-0 lg:mr-20 h-full">
          <div className='bg-zinc-300 bg-opacity-70 backdrop-blur-full p-12 w-full lg:w-1/3 rounded-full flex flex-col items-center'>
            <div className='text-center'>
              <h1 className='text-green-700 font-bold text-4xl lg:text-5xl mb-5 animate-fade-down'>Herramientas</h1>
              <p className='font-semibold animate-fade-down lg:text-md'>
                En nuestro portfolio, encontrarás un amplio abanico de más de 50 documentos
                descargables diseñados para facilitar tu desarrollo profesional y potenciar tu éxito. Estas
                herramientas cubren diversas áreas y están diseñadas para ser útiles tanto para
                emprendedores como para profesionales en diferentes etapas de sus carreras.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="flex-1 text-center m-6 lg:m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-md lg:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-2xl lg:text-3xl leading-tight text-green-700 font-semibold">
              <i className="fas fa-edit mr-2 text-3xl lg:text-4xl"></i> Variedad de Recursos Descargables
            </h5>
            <p className="mb-4 mt-10 text-base lg:text-sm text-neutral-600">
              Nuestra colección de herramientas descargables incluye diversos formatos y tipos de
              documentos, que abarcan desde eBooks hasta hojas de cálculo Excel y plantillas listas para
              usar. Cada recurso ha sido cuidadosamente elaborado y diseñado para brindarte un valor
              significativo y ahorrarte tiempo y esfuerzo en tareas cotidianas.
            </p>
          </div>
        </div>
        <div className="flex-1 text-center m-6 lg:m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-md lg:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-2xl lg:text-3xl leading-tight text-green-700 font-semibold">
              <i className="fas fa-pencil-alt mr-2 text-3xl lg:text-4xl"></i> Apoyo a Emprendedores y Profesionales
            </h5>
            <p className="mb-4 mt-10 text-base lg:text-sm text-neutral-600">
              Independientemente de si eres un emprendedor que busca guías prácticas para lanzar su
              negocio o un profesional que necesita herramientas efectivas para optimizar su gestión,
              nuestra selección de recursos descargables está pensada para satisfacer tus necesidades
              específicas.
            </p>
          </div>
        </div>
        <div className="flex-1 text-center m-6 lg:m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-md lg:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-2xl lg:text-3xl leading-tight text-green-700 font-semibold">
              <i className="fas fa-pen mr-2 text-3xl lg:text-4xl"></i> Herramientas descargables
            </h5>
            <div className='text-left'>
              <p className="mb-4 mt-10 text-base lg:text-sm text-neutral-600">
                Contáctanos hoy mismo para descubrir cómo nuestras herramientas pueden beneficiarte. 
                Estamos disponibles para responder a todas tus preguntas y proporcionarte detalles sobre 
                nuestras soluciones. ¡Haz clic en el botón inferior para comenzar la conversación y obtener más información 
                sobre nuestras herramientas descargables!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-32">
        <h1 className="mb-8 text-xl lg:text-2xl font-bold mt-10">
          ¿Quieres descubrir más herramientas para aumentar tu productividad?
        </h1>
        <a href="/Contacto/contacto" className="text-white text-md bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out inline-block mb-5">
          ¡Contáctanos para obtener más información!
        </a>
      </div>
    </div>
  );
}

export default Herramientas;
