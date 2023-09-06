import React from 'react';

const Calendario = () => {
  return (
    <div className='mt-40 text-center'>
        <h1 className='font-bold text-4xl mb-5'>
            Solicita una fecha <span className='text-sky-700'>para el servicio pedido</span>
            </h1>
      <iframe
        src="https://calendly.com/cordobabambu/bambu-consultas"
        width="100%"
        height="500"
        frameborder="0"
        className="pb-10"
      ></iframe>
    </div>
  );
};

export default Calendario;