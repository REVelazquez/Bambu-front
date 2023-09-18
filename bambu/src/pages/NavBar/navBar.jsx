import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/Assets/Bambúf.jpg';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter para obtener la ruta actual

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter(); // Obtiene la ruta actual

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <nav className="w-full fixed top-0 z-10 bg-green-400 bg-opacity-70 backdrop-blur-sm" style={{ fontFamily: 'Nunito Sans' }}>
                <div className="container mx-auto flex justify-between items-center py-5">
                    <Link href="/" className='ml-3'>
                        <Image src={logo} alt="Logo" width={120} height={40} className='rounded-md' />
                    </Link>
                    <div className="hidden md:flex space-x-12">
                        <Link href="/about">
                            <p className="text-black font-semibold p-1 hover:opacity-50">Sobre nosotros</p>
                        </Link>
                        <div className="relative group">
                            <div className='flex flex-row p-1'>
                                <p className={`text-black font-semibold hover:opacity-50 cursor-pointer ${router.pathname === '/Capacitaciones/capacitaciones' ? 'text-green-500' : ''}`}>Servicios</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <ul className={`absolute hidden bg-white border rounded-md shadow-md group-hover:block ${router.pathname === '/Capacitaciones/capacitaciones' ? 'text-green-500' : ''}`}>
                                <li>
                                    <Link href="/mentorias">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Mentorias</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/consultorias">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Consultorias</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/capacitaciones">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Capacitaciones</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/herramientas">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Herramientas</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/Contacto">
                            <p className="text-black font-semibold p-1 hover:opacity-50">Contacto</p>
                        </Link>
                        <Link href="/calendario">
                            <p className="text-black font-semibold p-1 hover:opacity-50">Cita de Diagnostico</p>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black mr-3 bg-white p-0.5 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden animated animate__fadeIn">
                        <div className="bg-white">
                            <Link href="about">
                                <p className="text-black font-semibold p-2 hover:opacity-50">About</p>
                            </Link>
                            <Link href="mentorias">
                                <p className="text-black font-semibold p-2 hover:opacity-50">Mentorias</p>
                            </Link>
                            <Link href="/consultorias">
                                <p className="text-black font-semibold p-2 hover:opacity-50">Consultorias</p>
                            </Link>
                            <Link href="/capacitaciones">
                                <p className="text-black font-semibold p-2 hover:opacity-50">Capacitaciones</p>
                            </Link>
                            <Link href="/herramientas">
                                <p className="text-black font-semibold p-2 hover:opacity-50">Herramientas</p>
                            </Link>
                            <Link href="/Contacto">
                                <p className="text-black font-semibold p-2 hover:opacity-50">Contacto</p>
                            </Link>
                            <Link href="/Calendario/calendario">
                                <p className="text-black font-semibold p-2 hover:opacity-50">Calendario</p>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;