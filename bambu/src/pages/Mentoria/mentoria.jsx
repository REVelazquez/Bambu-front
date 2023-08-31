import React from 'react';
import style from './mentoria.module.css';

const Mentoring = () => {
  return (
    <div className={style.container}>
    <div className="flex flex-col items-center justify-center p-2 h-screen" style={{ fontFamily: 'Nunito Sans'}}>
        <div className="w-1/2 p-10">
      <h1 className="text-2xl font-bold mb-4">Servicios de Mentoring</h1>
      <p className="text-center">
        Ofrecemos servicios de mentoring personalizados para ayudarte a alcanzar tus metas y maximizar tu potencial. Nuestros programas de mentoría están diseñados para brindarte la orientación y el apoyo necesarios para enfrentar desafíos profesionales y alcanzar el éxito en tu vida laboral.
      </p>
      </div>
      <div
  class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
      alt="" />
  </a>
  <div class="p-2">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Card title
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
</div>
    </div>
    </div>
  );
};

export default Mentoring;