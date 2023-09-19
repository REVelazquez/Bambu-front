import React from 'react';
import styles from './index.module.css'

const Calendario = () => {
  return (
    <div className=' m-2 text-center h-full animate-fade-down'>
      <h1 className='font-bold text-4xl mb-5 mt-24'>
        Solicita una fecha <span className='text-sky-700'>para el servicio pedido</span>
      </h1>
      <div className='flex flex-row justify-center h-screen'>
        <iframe
          src="https://calendly.com/cordobabambu/bambu-consultas"
          frameborder="0"
          className={styles.calendario}
        ></iframe>
      </div>
    </div>
  );
};

export default Calendario;