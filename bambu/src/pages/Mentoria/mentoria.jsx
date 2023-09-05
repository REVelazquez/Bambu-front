import React from 'react';
import style from './mentoria.module.css';

const Mentoring = () => {
  return (
    <div className="flex flex-col h-full">
      <div className={style.container}>
        <div className=" mx-auto flex items-center justify-end mt-8 mr-20 h-full ">
        <div className='mb-10 bg-zinc-300 bg-opacity-70 backdrop-blur-full pr-28 pl-15 pt-20 pb-20 w-1/3 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full flex flex-col items-center'>
          <div className='text-center ml-20'>
            <h1 className='text-green-700 font-bold text-6xl mb-5'>Mentoría</h1>
            <p className='font-semibold'>
              Ofrecemos servicios de mentoring personalizados para ayudarte a alcanzar tus metas y
              maximizar tu potencial. Nuestros programas de mentoría están diseñados para brindarte la
              orientación y el apoyo necesarios para enfrentar desafíos profesionales y alcanzar el éxito
              en tu vida laboral.
              </p>
              </div>
              </div>
        </div>
      </div>
      <div className="flex space-x-6 mt-20">
        <div className="flex-1 text-center m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-3xl leading-tight text-green-700 font-bold">
              <i className="fas fa-star mr-2 text-4xl"></i> Mentoría Standard
            </h5>
            <p className="mb-4 text-base text-neutral-600 text-sm">
              El pack de Mentoría Standard es un punto de partida perfecto para aquellos que buscan un acompañamiento efectivo en su desarrollo profesional. Incluye 4 sesiones online de 1 hora cada una. Durante estas sesiones, trabajaremos juntos para identificar tus objetivos, trazar un plan de acción y superar obstáculos que puedan surgir en el camino. El ritmo de la mentoría se adapta a tus necesidades, permitiéndote avanzar a tu propio ritmo. La duración típica de este programa es de 1 a 2 meses, asegurándonos de que logres un progreso significativo en tu trayectoria profesional.
            </p>
          </div>
        </div>
        <div className="flex-1 text-center m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-3xl leading-tight text-yellow-600 dark:text-neutral-50">
              <i className="fas fa-crown mr-2 text-4xl"></i> Mentoría Premium
            </h5>
            <p className="mb-4 text-base text-neutral-600 text-sm">
              El pack de Mentoría Premium es un programa más completo y detallado, ideal para aquellos
              que desean un compromiso más prolongado y profundo. Incluye 6 sesiones online de 1 hora
              cada una, permitiéndome brindarte un apoyo aún más personalizado. Durante estas
              sesiones, nos enfocaremos en desarrollar tus habilidades clave, trabajar en el
              perfeccionamiento de tus fortalezas y abordar áreas de mejora específicas. El ritmo de la
              mentoría se ajustará a tus requerimientos y circunstancias únicas, garantizando que
              alcances tus objetivos de la manera más efectiva posible. La duración de este programa se
              extiende normalmente de 2 a 3 meses, lo que nos permitirá profundizar en el crecimiento y
              desarrollo de tu carrera.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold mt-10">
          ¿Interesado en nuestros servicios?
      </h1>
      <div className="inline-block mb-32 text-sky-600 rounded-full border-2 border-sky-600 px-6 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
        <a href="https://api.whatsapp.com/send?phone=3516578866" target="_blank" rel="noopener noreferrer">Escribinos para saber los precios
        <i className="fab fa-whatsapp ml-5 text-green-700 text-2xl"></i>
        </a>
        </div>
        </div>
        </div>
        );
      }

export default Mentoring;