import Link from 'next/link';
import React from 'react';
import ImagenHome from "../Assets/Home.jpg";
import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center p-2 h-screen" style={{ fontFamily: 'Nunito Sans', backgroundColor: '#F2EDDC' }}>
      <div className="flex-grow p-8 rounded-lg flex ml-10 mt-20" style={{ backgroundColor: '#F2EDDC' }}>
        <div className="w-[50%] ml-60">
          <h1 className="text-2xl font-bold mb-4 font-semibold text-green-700">¡Bienvenidos a Bambú!</h1>
          <p className="text-gray-700 mb-6 text-black font-semibold max-w-[50%]">
            Somos más que una empresa de consultoría y capacitación; somos el viento fresco que impulsa a las PyMES y pequeños emprendedores a crecer y prosperar. Nuestra misión es sencilla pero poderosa: nutrir el crecimiento.
          </p>
          <Link href="">
            <div className="inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-400 hover:text-white transition duration-300">
              Conócenos más
            </div>
          </Link>
        </div>
        <div className="w-[50%] flex items-center justify-end">
          <div style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            borderTopLeftRadius: '57%',
            borderTopRightRadius: '40%',
            borderBottomLeftRadius: '25%',
            borderBottomRightRadius: '65%',
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
    </main>
  )
}

export default Home;