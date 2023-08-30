import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex h-screen ">
      <div className="flex-grow bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-green-700">¡Bienvenidos a Bambú!</h1>
        <p className="text-gray-700 mb-6">Somos más que una empresa de consultoría y capacitación; somos el viento fresco que impulsa a las PyMES y pequeños emprendedores a crecer y prosperar. Nuestra misión es sencilla pero poderosa: nutrir el crecimiento.</p>
        <Link href="/about">
          <div className="bg-green-700 text-white py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300">
            Conócenos más
          </div>
        </Link>
      </div>
    </main>
  )
}