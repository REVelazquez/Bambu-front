import Link from 'next/link';
import React from 'react';
import ImagenHome from "../Assets/Landing.jpg";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBrie}

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center p-2 h-full" style={{ fontFamily: 'Nunito Sans' }}>
      <div className="flex-grow p-8 rounded-lg flex ml-10 mt-20">
        <div className="w-[50%] ml-60">
          <h1 className="text-2xl font-bold mb-4 text-4xl text-green-700">¡Bienvenidos a Bambú!</h1>
          <p className="text-gray-700 mb-6 text-black font-semibold max-w-[75%]">
            Somos más que una empresa de consultoría y capacitación; somos el viento fresco que impulsa a las PyMES y pequeños emprendedores a crecer y prosperar. Nuestra misión es sencilla pero poderosa: nutrir el crecimiento.
          </p>
          <Link href="/About/about">
            <div className="inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-400 hover:text-white transition duration-300">
              Conócenos más
            </div>
          </Link>
        </div>
        <div className="w-[60%] flex items-center justify-end">
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            borderTopLeftRadius: '55%',
            borderTopRightRadius: '45%',
            borderBottomLeftRadius: '5%',
            borderBottomRightRadius: '95%',
            overflow: 'hidden'
          }}>
            <Image
              src={ImagenHome}
              alt="Imagen de Home"
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className='mb-10 mt-20'>
        <h1 className='text-center text-3xl font-bold mt-36 mb-10 text-green-700'>NUESTROS SERVICIOS</h1>
        <div className='flex flex-row justify-center'>
          <Link href="/Mentoria/mentoria" className='w-1/4 h-[230px] mr-10 text-center p-10 bg-transparent rounded-lg hover:bg-green-500 shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white'>
            <div >
              <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/kipaqhoz.json"
                trigger="morph"
                colors="primary:#121331"
                style={{ width: "70px", height: "70px" }}>
              </lord-icon>
              <h1 className='text-2xl font-semibold'>Mentoria</h1>
              <p className="mb-4 font-thin mt-2">Tu camino hacia el éxito comienza aquí</p>
            </div>
          </Link>

          <Link href="/Capacitaciones/capacitaciones" className='w-1/4 h-[230px] mr-10 text-center p-10 bg-transparent rounded-lg hover:bg-green-500  shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white'>
            <div >
              <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/bewubbww.json"
                trigger="hover"
                colors="primary:#121331"
                style={{ width: "70px", height: "70px" }}>
              </lord-icon>
              <h1 className='text-2xl font-semibold'>Capacitaciones</h1>
              <p className="mb-4 font-thin mt-2">Potencia tu carrera con nuestras capacitaciones de alto nivel</p>
            </div>
          </Link>
          <Link href="/Consultorias/consultorias" className='w-1/4 h-[230px] mr-10 text-center p-10 bg-transparent rounded-lg hover:bg-green-500  shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white'>
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

          <Link href="/Herramientas/herramientas" className='w-1/4 h-[230px] mr-10 text-center p-10 bg-transparent rounded-lg hover:bg-green-500  shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 hover:text-white'>
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
        </div>
      </div>
    </main >
  )
}

export default Home;