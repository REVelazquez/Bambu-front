import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <main className="w-full absolute top-12" style={{ fontFamily: 'Nunito Sans' }}>
      <div className="flex-grow p-8 rounded-lg ml-10 mt-1">
        <h1 className="text-2xl font-bold mb-4 font-semibold text-green-700">¡Bienvenidos a Bambú!</h1>
        <p className="text-gray-700 mb-6 text-black font-semibold max-w-[50%] ml-0">
          Somos más que una empresa de consultoría y capacitación; somos el viento fresco que impulsa a las PyMES y pequeños emprendedores a crecer y prosperar. Nuestra misión es sencilla pero poderosa: nutrir el crecimiento.
        </p>
        <Link href="/about">
          <div className="inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-400 hover:text-white transition duration-300">
            Conócenos más
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Home