import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/Assets/Bambúf.jpg';
import Head from 'next/head';
import { useState } from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mostrarServicios, setMostrarServicios] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const closeService = () => {
        setMostrarServicios(false)
    }

    const toggleServicios = () => {
        setMostrarServicios(!mostrarServicios);
    };

    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <nav className="w-full fixed top-0 z-10 bg-green-400 bg-opacity-70 backdrop-blur-sm" style={{ fontFamily: 'Nunito Sans' }}>
                <div className="container mx-auto flex justify-between items-center py-1">
                    <Link href="/" className='ml-3'>
                        <Image src={logo} alt="Logo" width={120} height={40} className='rounded-md' />
                    </Link>
                    <div className="hidden md:flex space-x-12">
                        <Link href="/about">
                            <p className="text-black font-semibold p-1 hover:opacity-50" onClick={closeMenu}>Sobre nosotros</p>
                        </Link>
                        <div className="relative group">
                            <div className='flex flex-row p-1' onClick={toggleMenu}>
                                <p className={`text-black font-semibold hover:opacity-50 cursor-pointer`}>Servicios</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <ul className={`absolute ${menuOpen ? 'block' : 'hidden'} bg-white border rounded-md shadow-md`}>
                                <li>
                                    <Link href="/mentorias">
                                        <p className="text-black p-2 font-semibold hover:opacity-50" onClick={closeMenu}>Mentorias</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/consultorias">
                                        <p className="text-black p-2 font-semibold hover:opacity-50" onClick={closeMenu}>Consultorias</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/capacitaciones">
                                        <p className="text-black p-2 font-semibold hover:opacity-50" onClick={closeMenu}>Capacitaciones</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/herramientas">
                                        <p className="text-black p-2 font-semibold hover:opacity-50" onClick={closeMenu}>Herramientas</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/Contacto">
                            <p className="text-black font-semibold p-1 hover:opacity-50" onClick={closeMenu}>Contacto</p>
                        </Link>
                        <Link href="/calendario">
                            <p className="text-black font-semibold p-1 hover:opacity-50" onClick={closeMenu}>Cita de Diagnóstico</p>
                        </Link>
                    </div>
                    <div className="md:hidden mb-4">
                        <button
                            onClick={toggleMenu}
                            className={`text-black mr-3 bg-F2EDDC p-0.5 rounded-md relative group ${menuOpen ? 'ring-red-400' : 'ring-green-400'} focus:ring-4 duration-200 shadow-md`}
                        >
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-7 h-7 transform transition-all">
                                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div className={`bg-green-400 h-[2px] w-7 transform transition-all duration-300 origin-left ${menuOpen ? 'translate-x-10' : ''}`}></div>
                                    <div className={`bg-green-400 h-[2px] w-7 rounded transform transition-all ${menuOpen ? 'translate-x-10 delay-75' : ''}`}></div>
                                    <div className={`bg-green-400 h-[2px] w-7 transform transition-all duration-300 origin-left ${menuOpen ? 'translate-x-10 delay-150' : ''}`}></div>

                                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${menuOpen ? 'translate-x-0' : '-translate-x-10'} flex w-0 ${menuOpen ? 'w-12' : ''}`}>
                                        <div className={`absolute bg-red-400 h-[2px] w-5 transform transition-all duration-500 ${menuOpen ? 'rotate-45 delay-300' : ''}`}></div>
                                        <div className={`absolute bg-red-400 h-[2px] w-5 transform transition-all duration-500 ${menuOpen ? '-rotate-45 delay-300' : ''}`}></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden animated animate__fadeIn">
                        <div className="bg-white">
                            <Link href="/about">
                                <p className="text-black font-semibold pt-2 pl-1 hover:opacity-50" onClick={closeMenu}>Sobre nosotros</p>
                            </Link>
                            <hr className="w-full mx-auto mt-2 border-t-2 border-green-200" />
                            <div className='flex flex-row p-1'>
                                <button onClick={toggleServicios} className="inline-flex items-center">
                                    <p className="text-black font-semibold pt-2">
                                        Servicios
                                    </p>
                                    {mostrarServicios ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 mt-2 ml-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>

                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-2 ml-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {mostrarServicios && (
                                <ul className='ml-10 bg-green-200 rounded-md w-1/2'>
                                    <li>
                                        <Link href="/mentorias">
                                            <p className="text-black p-2 font-semibold hover:opacity-50" onClick={() => { closeMenu(); closeService(); }}>Mentorias</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/consultorias">
                                            <p className="text-black p-2 font-semibold hover:opacity-50" onClick={() => { closeMenu(); closeService(); }}>Consultorias</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/capacitaciones">
                                            <p className="text-black p-2 font-semibold hover:opacity-50" onClick={() => { closeMenu(); closeService(); }}>Capacitaciones</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/herramientas">
                                            <p className="text-black p-2 font-semibold hover:opacity-50" onClick={() => { closeMenu(); closeService(); }}>Herramientas</p>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                            <hr className="w-full mx-auto mt-2 border-t-2 border-green-200" />
                            <Link href="/Contacto">
                                <p className="text-black font-semibold pt-2 pl-1 hover:opacity-50" onClick={closeMenu}>Contacto</p>
                            </Link>
                            <hr className="w-full mx-auto mt-2 border-t-2 border-green-200" />
                            <Link href="/calendario">
                                <p className="text-black font-semibold pt-2 pl-1 pb-2 hover:opacity-50" onClick={closeMenu}>Cita de Diagnóstico</p>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;