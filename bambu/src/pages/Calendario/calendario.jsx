import React from 'react';

const Calendario = () => {
  return (
    <div className='mt-40 text-center'>
        <h1 className='font-bold text-4xl mb-5'>
            Solicita una fecha <span className='text-sky-700'>para el servicio pedido</span>
            </h1>
      <iframe
        src="https://calendly.com/fervolpato1991/agenda-bambu"
        width="80%"
        height="800"
        frameborder="0"
        className="ml-40 pb-10"
      ></iframe>
    </div>
  );
};

export default Calendario;