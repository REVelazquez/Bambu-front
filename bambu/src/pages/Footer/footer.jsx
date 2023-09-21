import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/Assets/Bambúf1.jpg';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className="bg-green-950 text-white backdrop-blur-md w-full">
            <div className="flex flex-col md:flex-row justify-center p-6 mb-3 space-y-6 md:space-y-0 md:space-x-20">
                <div className="flex items-center justify-center md:justify-start">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            height={60}
                            width={240}
                            className="mx-auto md:mx-0 hover:ring-green-600 hover:ring-4 duration-300 shadow-md rounded-md"
                        />

                    </Link>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className='mb-4 text-xl font-bold'>Seguinos</h3>
                    <a href="https://api.whatsapp.com/send?phone=3516578866" target="_blank" rel="noopener noreferrer" className=" transition-transform transform hover:-translate-y-1">
                        <i className="fab fa-whatsapp text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bamb%C3%BA-c%C3%B3rdoba-19234a1ab/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:-translate-y-1">
                        <i className="fab fa-linkedin text-2xl mt-2"></i>
                    </a>
                    <a href="https://instagram.com/cordobabambu?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer" className=" transition-transform transform hover:-translate-y-1">
                        <i className="fab fa-instagram text-2xl mt-2"></i>
                    </a>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className='mb-4 text-xl font-bold'>Nuestros Servicios</h3>
                    <a href='/mentorias' className="mb-1 hover:underline">Mentorias</a>
                    <a href='/consultorias' className="mb-1 hover:underline">Consultorias</a>
                    <a href='/capacitaciones' className="mb-1 hover:underline">Capacitaciones</a>
                    <a href='/herramientas' className='hover:underline'>Herramientas</a>
                </div>
            </div>
            <div className="w-full text-center mt-6">
                <hr className="w-1/2 mx-auto" />
                <div className="p-4 text-white">
                    <p className="text-md">&copy; 2023 Bambú. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
