import React from 'react';
import style from './herramientas.module.css';

const Mentoring = () => {
  return (
    <div className="flex flex-col h-full">
      <div className={style.container}>
        <div className=" mx-auto flex items-center justify-end mt-8 mr-20 h-full ">
          <div className='mb-10 bg-zinc-300 bg-opacity-70 backdrop-blur-full pr-28 pl-10 pt-20 pb-20 w-1/3 rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-none' style={{
                    width:'35em', 
                    marginLeft:'2em',
                    borderTopRightRadius:'35%',
                    borderTopLeftRadius:'65%',
                    borderBottomLeftRadius:'45%',
                    borderBottomRightRadius:'85%'
                }}>
            <h1 className='text-center text-green-700 font-bold text-6xl mb-5'>Herramientas</h1>
            <p className='font-semibold'>En nuestro portfolio, encontrarás un amplio abanico de más de 50 documentos
            descargables diseñados para facilitar tu desarrollo profesional y potenciar tu éxito. Estas
            herramientas cubren diversas áreas y están diseñadas para ser útiles tanto para
            emprendedores como para profesionales en diferentes etapas de sus carreras.
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-6 mt-20">
        <div className="flex-1 text-center m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-3xl leading-tight text-green-700 font-bold">
              <i className="fas fa-edit mr-2 text-4xl"></i> Variedad de Recursos Descargables
            </h5>
            <p className="mb-4 mt-10 text-base text-neutral-600 text-sm">
            Nuestra colección de herramientas descargables incluye diversos formatos y tipos de
            documentos, que abarcan desde eBooks hasta hojas de cálculo Excel y plantillas listas para
            usar. Cada recurso ha sido cuidadosamente elaborado y diseñado para brindarte un valor
            significativo y ahorrarte tiempo y esfuerzo en tareas cotidianas.
            </p>
          </div>
        </div>
        <div className="flex-1 text-center m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-3xl leading-tight text-green-700 dark:text-neutral-50">
              <i className="fas fa-pencil-alt mr-2 text-4xl"></i> Apoyo a Emprendedores y Profesionales
            </h5>
            <p className="mb-4 text-base text-neutral-600 text-sm">
            Independientemente de si eres un emprendedor que busca guías prácticas para lanzar su
            negocio o un profesional que necesita herramientas efectivas para optimizar su gestión,
            nuestra selección de recursos descargables está pensada para satisfacer tus necesidades
            específicas.
            </p>
          </div>
        </div>
        <div className="flex-1 text-center m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-3xl leading-tight text-green-700 dark:text-neutral-50">
              <i className="fas fa-pen mr-2 text-4xl"></i> Algunas herramientas descargables
            </h5>
            <p className="mb-4 text-base text-neutral-600 text-sm">
            ➢ E-Books de Desarrollo Profesional: Guías detalladas y prácticas sobre temas
            relevantes para el crecimiento profesional.
            </p>
            <p className="mb-4 text-base text-neutral-600 text-sm">
            ➢ Plantillas de Plan de Negocios: Un esquema completo y estructurado para crear
            un plan de negocios sólido.
            </p>
            <p className="mb-4 text-base text-neutral-600 text-sm">
            ➢ Hojas de Cálculo: Plantillas Excel para llevar un registro preciso de tus finanzas.
            </p>
            <p className="mb-4 text-base text-neutral-600 text-sm">
            ¿Quieres descubrir más herramientas para aumentar tu productividad? ¡Contáctanos para obtener más información!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentoring;