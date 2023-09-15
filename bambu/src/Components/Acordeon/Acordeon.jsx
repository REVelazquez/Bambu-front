import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Acordeon.module.css'

const Acordeon = ({ formaciones }) => {
  const [activeItems, setActiveItems] = useState(new Array(formaciones.length).fill(false));
  const [resetTimeout, setResetTimeout] = useState(null);

  const handleClick = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);

    // Cancelar el timeout existente, si lo hay
    if (resetTimeout) {
      clearTimeout(resetTimeout);
    }

    // Establecer un nuevo timeout para restablecer el estado después de 5 segundos (5000 ms)
    const timeoutId = setTimeout(() => {
      const resetActiveItems = new Array(formaciones.length).fill(false);
      setActiveItems(resetActiveItems);
    }, 5000); // Cambia 5000 a la cantidad de tiempo que desees (en milisegundos)
    setResetTimeout(timeoutId);
  };

  useEffect(() => {
    // Limpia el timeout cuando el componente se desmonta
    return () => {
      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }
    };
  }, [resetTimeout]);

  return (
    <section className="lg:grid lg:grid-cols-3 gap-12 w-full p-10 mx-auto animate__animated animate__fadeIn">
      {formaciones.map((formacion, index) => (
        <section
          className={`relative p-4 mb-6 bg-transparent rounded-lg shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-500 w-full h-40 hover:shadow-lg hover:opacity-90 ${activeItems[index] ? 'lg:flex-row' : 'flex flex-col'
            } ${styles.section}`}
          key={index}
        >
          <Image
            src={formacion.imagen}
            alt={formacion.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={`rounded-md transition duration-300 brightness-50 ${activeItems[index] ? 'blur-sm' : ''}`} // Aplica la clase brightness-75 para reducir el brillo
          />
          <button
            onClick={() => handleClick(index)}
            className=" rounded-md bg-transparent text-white"
          >
            <div className={`absolute inset-0 flex flex-col justify-center items-center w-full rounded-md ${activeItems[index] ? 'border border-green-500' : ''}`}>
              <div className="flex flex-col items-center">
                <h2 className={`font-bold text-white ${styles.title}`}>
                  {formacion.title}
                </h2>
                {activeItems[index] ? (
                  // Ícono para cuando está activo
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" fill="white">
                    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                  </svg>

                ) : (
                  // Ícono para cuando no está activo
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" fill="white">
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                )}
              </div>
              {activeItems[index] && (
                <div>
                  <hr className="w-[85%] mx-auto mt-2 border-t-2 border-gray-200" />
                  <p className={`w-full mx-auto mt-2 text-green-400 pr-8 pl-8 font-bold text-center animate__animated animate__fadeIn ${styles.description}`}>
                    {formacion.description}
                  </p>
                </div>
              )}
            </div>
          </button>

        </section>
      ))}
      <div className="text-center">
        <h1 className="mb-5 text-xl lg:text-2xl font-bold mt-5">
          ¿Quieres descubrir más acerca de nuestras capacitaciones?
        </h1>
        <a href="/Contacto/contacto" className="text-white text-md bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out inline-block mb-5">
          ¡Contáctanos para obtener más información!
        </a>
      </div>
    </section>
  );
};

export default Acordeon;
