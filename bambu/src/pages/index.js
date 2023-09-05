import Link from 'next/link';
import React from 'react';
import ImagenHome from "../Assets/Landing.jpg";
import Image from 'next/image';
import { Carrousel } from '@/Components/Carrousel/Carrousel';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center p-2 h-full" style={{ fontFamily: 'Nunito Sans'}}>
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
      <div className="text-2xl font-bold mb-4 text-4xl text-green-700 w-full">
        <h1 className='ml-80 mt-8' >Las empresas que nos recomiendan:</h1>
        <Carrousel />
      </div>
    </main>
  )
}

export default Home;