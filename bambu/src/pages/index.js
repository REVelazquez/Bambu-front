import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ImagenHome from "../Assets/Landing.jpg";
import Image from 'next/image';
import { Carrousel } from '@/Components/Carrousel/Carrousel';
import Loading from '@/Components/Loading/loading';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando una carga ficticia con un temporizador.
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-2 h-full">
      <div className="flex flex-col sm:flex-row p-8 rounded-lg ml-2 sm:ml-10 mt-20 items-center">
        <div className="w-full sm:w-1/2 animate-fade-down">
          <h1 className="font-bold text-4xl sm:text-6xl mb-4 text-green-700">¡Bienvenidos a Bambú!</h1>
          <p className="text-gray-700 mb-6 text-black font-semibold max-w-[85%]">
            Somos más que una empresa de consultoría y capacitación; somos el viento fresco que impulsa a las PyMES y pequeños emprendedores a crecer y prosperar. Nuestra misión es sencilla pero poderosa: nutrir el crecimiento.
          </p>
          <Link href="/About/about">
            <div className="inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500 hover:text-white transition duration-300">
              Conócenos más
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
          <div style={{
            width: '100%',
            paddingBottom: '100%',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              borderTopLeftRadius: '55%',
              borderTopRightRadius: '45%',
              borderBottomLeftRadius: '5%',
              borderBottomRightRadius: '95%',
              overflow: 'hidden',
            }}>
              <Image
                src={ImagenHome}
                alt="Imagen de Home"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>


      <div className='mb-10 mt-10 md:mt-36 mx-2 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto'>
        <h1 className='text-center text-2xl md:text-4xl font-bold text-green-700'>NUESTROS SERVICIOS</h1>
        <p className='text-center text-lg md:text-xl font-lg mt-2 mb-10 text-base text-neutral-600 dark:text-neutral-200'>Te ayudamos a crecer</p>
        <div className='flex flex-col md:flex-row justify-center'>

          <div className={`w-full md:w-70 h-[230px] md:mr-10 text-center p-4 md:p-16 bg-transparent rounded-lg hover:bg-green-500 shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white ${isLoading ? '' : 'animated animate__fadeIn'}`}>
            {
              isLoading ? (
                <div className='w-full h-full mr-10 p-10'>
                  <Loading />
                </div>
              ) : (
                <Link href="/Mentoria/mentoria" >
                  <div>
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/kipaqhoz.json"
                      trigger="morph"
                      colors="primary:#121331"
                      style={{ width: "70px", height: "70px" }}>
                    </lord-icon>
                    <h1 className='text-2xl font-semibold'>Mentoria</h1>
                    <p className="mb-4 font-thin mt-2 text-sm">Tu camino hacia el éxito comienza aquí</p>
                  </div>
                </Link>
              )
            }
          </div>

          <div className={`w-full md:w-70 h-[230px] md:mr-10 mt-4 md:mt-0 text-center p-4 md:p-10 bg-transparent rounded-lg hover:bg-green-500 shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white ${isLoading ? '' : 'animated animate__fadeIn'}`}>
            {
              isLoading ? (
                <div className='w-full h-full mr-10  p-10'>
                  <Loading />
                </div>
              ) : (
                <Link href="/Capacitaciones/capacitaciones" >
                  <div >
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/bewubbww.json"
                      trigger="hover"
                      colors="primary:#121331"
                      style={{ width: "70px", height: "70px" }}>
                    </lord-icon>
                    <h1 className='text-2xl font-semibold'>Capacitaciones</h1>
                    <p className="mb-4 font-thin mt-2 text-sm">Potencia tu carrera con nuestras capacitaciones de alto nivel</p>
                  </div>
                </Link>
              )
            }
          </div>

          <div className={`w-full md:w-70 h-[230px] md:mr-10 mt-4 md:mt-0 text-center p-4 md:p-10 bg-transparent rounded-lg hover:bg-green-500 shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white ${isLoading ? '' : 'animated animate__fadeIn'}`}>
            {
              isLoading ? (
                <div className='w-full h-full mr-10  p-10'>
                  <Loading />
                </div>
              ) : (
                <Link href="/Consultorias/consultorias" >
                  <div>
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/ssvybplt.json"
                      trigger="hover"
                      colors="primary:#121331"
                      style={{ width: "70px", height: "70px" }}>
                    </lord-icon>
                    <h1 className='text-2xl font-semibold'>Consultorias</h1>
                    <p className="mb-4 font-thin mt-2">Soluciones estratégicas a tu alcance</p>
                  </div>
                </Link>
              )
            }
          </div>

          <div className={`w-full md:w-70 h-[230px] mt-4 md:mt-0 text-center p-4 md:p-10 bg-transparent rounded-lg hover:bg-green-500 shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white ${isLoading ? '' : 'animated animate__fadeIn'}`}>
            {
              isLoading ? (
                <div className='w-full h-full mr-10 p-10 '>
                  <Loading />
                </div>
              ) : (
                <Link href="/Herramientas/herramientas" >
                  <div>
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/fpmskzsv.json"
                      trigger="hover"
                      colors="primary:#121331"
                      style={{ width: "70px", height: "70px" }}>
                    </lord-icon>
                    <h1 className='text-2xl font-semibold'>Herramientas</h1>
                    <p className="mb-4 font-thin mt-2">Eficiencia en tus manos</p>
                  </div>
                </Link>
              )
            }
          </div>


        </div>
      </div>

      <div className="mt-10 md:mt-20 mb-10 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
        <h1 className='text-center text-2xl md:text-4xl text-green-700 font-bold' >LAS EMPRESAS QUE NOS RECOMIENDAN</h1>
        <p className='text-center text-lg md:text-xl font-lg mt-2 mb-10 text-base text-neutral-600 dark:text-neutral-200'>Confían en Nosotros</p>
        {
          isLoading ? (
            <div className='w-full h-80'>
              <Loading />
            </div>
          ) : (
            <div className={`${isLoading ? '' : 'animated animate__fadeIn'}`}>
              <Carrousel />
            </div>
          )
        }
      </div>
    </main>

  )
}

export default Home;