import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import styles from './contacto.module.css'

const Contacto = () => {
  const [state, handleSubmit] = useForm('mvojgaqr');

  return (
    <div className="flex flex-col h-full">

        <div className={styles.header}>
        <div className="lg:flex lg:justify-end lg:items-center h-full">
            <div className="bg-zinc-300 bg-opacity-70 backdrop-blur-sm lg:p-12 w-full lg:w-1/3 mr-5 rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-none">
                <h1 className='text-center font-bold text-4xl mb-5'>
                    Conversá Con Nosotros <span className='text-lime-700'>¡Estamos Aquí Para Escucharte!</span>
                    </h1>
            </div>
                </div>
                    </div>
      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="mb-4 text-center text-lg font-medium text-gray-800">
            Contactate con nosotros
          </h1>
          <div className="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=3516578866"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappIcon}
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="" className={styles.linkedinIcon}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/cordobabambu?igshid=ZGUzMzM3NWJiOQ=="
              className={styles.instagramIcon}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="w-full text-center mt-10">
            <hr className="w-1/2 mx-auto border-t-2 border-blue-500" />
            <h3 className="mt-5 text-center text-lg font-medium text-gray-800">
              Realiza nuestro diagnóstico aquí
            </h3>
            <Link href="/Contacto/Diagnostico/diagnostico">
              <button
                type="button"
                className="mt-5 rounded-full border-2 border-success px-6 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
              >
                Formulario Diagnóstico
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="mb-4 text-3xl font-semibold text-gray-800">
            Escríbenos!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl p-8 shadow-xl rounded-lg w-full"
          >
            <div className="flex flex-col lg:flex-row mb-6">
              <div className="w-full lg:w-1/2 mr-0 lg:mr-2">
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-lg font-medium text-gray-800"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2 ml-0 lg:ml-2 mt-4 lg:mt-0">
                <label
                  htmlFor="apellido"
                  className="block mb-2 text-lg font-medium text-gray-800"
                >
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  name="apellido"
                  className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Apellido"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="telefono"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Teléfono"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Mensaje"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
