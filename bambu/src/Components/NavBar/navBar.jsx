import Link from 'next/link';
import Image from 'next/image';
import logo from '../../Assets/Bambúf.jpg';
import Head from 'next/head';


const Navbar = () => {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            <nav className="w-full fixed top-0 z-10 bg-green-400 bg-opacity-70 backdrop-blur-sm" style={{ fontFamily: 'Nunito Sans' }}>

                <div className="container mx-auto flex justify-center items-center py-5">
                    <Link href="/" style={{ paddingRight: "5%", marginLeft: "-10%" }}>
                        <Image src={logo} alt="Logo" width={120} height={40} className='rounded-md' />
                    </Link>
                    <ul className="flex space-x-12">
                        <li>
                            <Link href="/About/About">
                                <p className="text-black font-semibold p-1 hover:opacity-50">About</p>
                            </Link>
                        </li>
                        <li className="relative group">
                            <div className='flex flex-row p-1'>
                                <p className="text-black font-semibold hover:opacity-50 cursor-pointer ">Servicios</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <ul className="absolute hidden bg-white border rounded-md shadow-md group-hover:block">
                                <li>
                                    <Link href="">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Mentorias</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Consultorias</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Capacitaciones/capacitaciones">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Capacitaciones</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <p className="text-black p-2 font-semibold hover:opacity-50">Herramientas</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/Contacto/contacto">
                                <p className="text-black font-semibold p-1 hover:opacity-50">Contacto</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p className="text-black font-semibold p-1 hover:opacity-50">Calendario</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
