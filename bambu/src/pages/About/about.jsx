import React from 'react';
import { texts, items } from '@/Assets/about/aboutText';
import Card from '@/Components/CardsAbout/Card';
import imageDaniel from '@/Assets/about/daniel.png';
import imageGabo from '@/Assets/about/gabo.png';
import equipo from '@/Assets/about/equipo.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AcordeonValores from '@/Components/AcordeonValores/AcordeonValores';

const About = () => {
    return (
        <div key='Container A' className=' flex flex-col place-items-center w-full m-auto h-full' style={{ backgroundColor: '#F2EDDC' }} >
            <h1 className='font-bold mt-28 mb-12 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800 animate-fade-down' >{texts.tittle1}</h1>

            <div className=' flex flex-col md:flex-row my-4 mx-auto xl:ml-64 animate-fade-down'>
                {/* Presentacion y bio de bambu */}
                <div className='flex flex-col md:flex-row items-center '>

                    <span className="inline-flex w-96 flex-col text-justify text-ellipsis">
                        <h2 className='mx-20 font-semibold text-3xl text-green-900 mt-8 '>{texts.tittle2}</h2>
                        <p className='m-0 mt-4 text-lg'>{texts.description}</p>
                        <p className='m-0 mt-4 text-lg '>{texts.description2}</p>
                    </span>

                    <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                        <div
                            key='image background'
                            className='mx-auto bg-green-700/50 sm:w-2/3 lg:w-3/4 xl:w-5/6 xl:ml-20 '
                            style={{
                                width: '100%',
                                borderTopRightRadius: '55%',
                                borderTopLeftRadius: '45%',
                                borderBottomLeftRadius: '65%',
                                borderBottomRightRadius: '35%',
                            }}
                        >
                            <Image
                                src={equipo}
                                alt='Equipo o Logo'
                                className='w-full'

                                style={{
                                    borderTopLeftRadius: '65%',
                                    borderTopRightRadius: '25%',
                                    borderBottomRightRadius: '65%',
                                    borderBottomLeftRadius: '35%',
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* cultura organizacional */}
            <section>
                <h1 className='font-bold mt-28 mb-12 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800 animate-fade-down' >{texts.tittle3}</h1>
                <section className='flex flex-col lg:flex-row mt-10'>
                    <section className="flex-1 text-center m-5 p-6 bg-transparent rounded-lg hover:bg-green-100 shadow-md lg:shadow-lg dark:bg-neutral-700">
                        <h3 className='text-green-700 font-bold text-l lg:text-2xl mb-5 animate-fade-down'>
                            {texts.subtittle1}
                        </h3>
                        <p className='font-semibold animate-fade-down'>
                            {texts.visionDesc}
                        </p>
                    </section>
                    <section className="flex-1 text-center m-5 p-6 bg-transparent rounded-lg hover:bg-green-100 shadow-md lg:shadow-lg dark:bg-neutral-700">
                        <h3 className='text-green-700 font-bold text-l lg:text-2xl mb-5 animate-fade-down'>
                            {texts.subtittle2}
                        </h3>
                        <p className='font-semibold animate-fade-down'>
                            {texts.misionDesc}
                        </p>
                    </section>
                </section>
                <div>
                    <h3 className=' text-center text-green-700 font-bold lg:text-2xl mb-5 animate-fade-down'>
                        {texts.subtittle3}
                    </h3>
                    <p className='text-center mb-10 font-semibold animate-fade-down'>
                        {texts.valoresDesc}
                    </p>
                </div>
                <div className='mt-10 mb-10'>
                    <AcordeonValores />
                </div>
            </section>

            {/* Container para lo que hace destacar a Bambú */}
            <div key='Container destacar' className='items-center mt-12 h-96 w-full h-full'>
                <h1 className='font-bold mt-28 mb-12 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800 animate-fade-down' >{texts.tittle4}</h1>

                <div key='Cards Container' className='flex flex-col md:flex-row justify-center'>
                    {items?.map((item) => {
                        return (
                            <Card
                                image={item.card.image}
                                id={item.card.id}
                                front={item.card.front}
                                back={item.card.back} />
                        )
                    })}
                </div>
            </div>

            {/* container equipo de */}
            <div key='Container equipo' className='mt-12 mb-24'>
                <h1 className='font-semibold text-green-900 text-3xl ml-6 w-90' >{texts.tittle5}</h1>
                <div className='flex flex-row m-0'>
                    <div className='place-items-center bg-green-500 m-4 w-44 h-44 rounded-xl border-8 border-green-800'>
                        <div key='container equipo 1' className='ml-6 flex flex-row'>

                            <h1 className='mt-3 font-bold'>Daniel Kübl</h1>
                            <a href='https://www.linkedin.com/in/daniel-k%C3%BCbl-418a58180/' target='_blank' rel="noreferrer" >
                                <div className='flex flex-row ml-2'>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ width: '1.25em', marginTop: '.55em' }} className='hover:text-white' />
                                </div>
                            </a>
                        </div>
                        <Image src={imageDaniel} alt={imageDaniel} className='w-32 h-28 ml-6' />
                    </div>

                    <div className='place-items-center bg-green-500 m-4 w-44 h-44 rounded-xl border-8 border-green-800'>
                        <div key='container equipo 2' className='ml-2 flex flex-row'>
                            <h1 className=' mt-3  font-bold'>Gabriel Heredia</h1>
                            <button className='mt-2'>
                                <a href='https://www.linkedin.com/in/gaboheredia/' target='_blank' rel="noreferrer" >
                                    <div className='flex flex-row ml-2'>
                                        <FontAwesomeIcon icon={faLinkedin} style={{ width: '1.25em', marginTop: '0.125' }} className='hover:text-white' />
                                    </div>
                                </a>
                            </button>

                        </div>
                        <Image src={imageGabo} alt={imageGabo} className='w-28 h-28 ml-8 mb-0 mt-0' />

                    </div>
                </div>
            </div>


        </div>

    );
};

export default About;