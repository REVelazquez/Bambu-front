import React from 'react';
import { texts, items } from '@/Assets/about/aboutText';
import Card from '@/Components/CardsAbout/Card';
import imageDaniel from '@/Assets/about/daniel.png'
import imageGabo from '@/Assets/about/gabo.png'
import equipo from '@/Assets/about/equipo.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';




const About = () => {
    return (
        <div key='Container A' className=' flex flex-col items-center w-full p-2 h-full' style={{ backgroundColor: '#F2EDDC' }} >
            <h1 className='font-bold mt-28 mb-12 text-4xl text-green-800 animate-fade-down' >{texts.tittle1}</h1>

            <div className='my-4 mx-4 animate-fade-down'>
                {/* Presentacion y bio de bambu */}
                <div className='flex flex-row'>
                    <span className="inline-flex  w-96 flex-col text-justify text-ellipsis">
                        <h2 className='mx-20 font-semibold text-3xl text-green-900 mt-8 '>{texts.tittle2}</h2>
                        <p className='m-0 mt-4 '>{texts.description}</p>
                        <p className='m-0 mt-4 '>{texts.description2}</p>
                    </span>
                    <div key='image background' className='bg-green-700/50'
                        style={{
                            width: '39em',
                            marginLeft: '2em',
                            borderTopRightRadius: '55%',
                            borderTopLeftRadius: '45%',
                            borderBottomLeftRadius: '65%',
                            borderBottomRightRadius: '35%'
                        }}>
                        <Image src={equipo} alt='Equipo o Logo'
                            style={{
                                width: '40em',
                                marginLeft: '2em',
                                borderTopLeftRadius: '65%',
                                borderTopRightRadius: '25%',
                                borderBottomRightRadius: '65%',
                                borderBottomLeftRadius: '35%'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Container para lo que hace destacar a Bambú */}
            <div key='Container destacar' className='items-center mt-12 h-96 w-full'>

                <h2 key='Titulo 3' style={{ marginLeft: '42%' }} className='font-semibold text-green-900 text-3xl mb-8 mt-12'>{texts.tittle3}</h2>
                <div key='Cards Container' className='flex flex-row justify-center'>
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
            <div key='Container equipo' className='mt-6'>
                <h1 className='font-semibold text-green-900 text-3xl ml-6 w-90' >{texts.tittle4}</h1>
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
                        <Image src={imageDaniel} className='w-32 h-28 ml-6' alt="" />
                    </div>

                    <div className='place-items-center bg-green-500 w-44 h-44 mt-4 rounded-xl border-8 border-green-800'>
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
                        <Image src={imageGabo} className='w-28 h-28 ml-8 mb-0 mt-0' alt="" />

                    </div>
                </div>
            </div>


        </div>
    );
};

export default About