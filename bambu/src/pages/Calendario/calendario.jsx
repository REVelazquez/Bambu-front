import React from 'react';

const Calendario = () => {
  return (
    <div className=' m-32 text-center h-full animate-fade-down'>
      <h1 className='font-bold text-4xl mb-5'>
        Solicita una fecha <span className='text-sky-700'>para el servicio pedido</span>
      </h1>
      <iframe
        src="https://calendly.com/cordobabambu/bambu-consultas"
        frameborder="0"
        className="pb-10 w-full h-screen"
      ></iframe>
    </div>
  );
};

export default Calendario;