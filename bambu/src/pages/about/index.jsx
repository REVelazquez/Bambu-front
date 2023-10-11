import React, { useState } from "react";
import { texts, items } from "../../../public/Assets/about/aboutText";
import Card from "../Components/CardsAbout/Card";
import imageDaniel from "../../../public/Assets/about/DanielKubl.jpeg";
import imageGabo from "../../../public/Assets/about/GabrielHeredia.jpeg";
import equipo from "../../../public/Assets/about/equipo.jpg";
import Image from "next/image";
import Link from "next/link";
import AcordeonValores from "../Components/AcordeonValores/AcordeonValores";
import style from './index.module.css';

const About = () => {

  const [mostrarRedesSocialesDani, setMostrarRedesSocialesDani] = useState(false);
  const [mostrarRedesSocialesGabo, setMostrarRedesSocialesGabo] = useState(false);

  const toggleRedesSocialesDani = () => {
    setMostrarRedesSocialesDani(!mostrarRedesSocialesDani);
    if (!mostrarRedesSocialesDani) {

    }
  };

  const toggleRedesSocialesGabo = () => {
    setMostrarRedesSocialesGabo(!mostrarRedesSocialesGabo);
  };


  return (
    <div key='Container A' className=' flex flex-col place-items-center w-full m-auto h-full' style={{ backgroundColor: '#F2EDDC' }} >
      <h1 className='font-bold mt-28 mb-12 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800 animate-fade-down' >{texts.tittle1}</h1>
      <div className='flex flex-col md:flex-row my-4 mx-auto animate-fade-down items-center justify-center'>
        {/* Presentación y bio de bambú */}

        <div className="inline-flex w-11/12 sm:w-1/2 md:w-1/2 xl:w-1/3 md:ml-4 flex-col text-justify text-ellipsis m-4 sm:m-0">
          <h2 className='font-semibold text-center text-3xl text-green-900 mt-8'>{texts.tittle2}</h2>
          <p className='mt-4'>{texts.description}</p>
          <p className='mt-4'>{texts.description2}</p>
        </div>


        <div className="w-full sm:w-1/2 mt-6 ">
          <div
            key='image background'
            className='mx-auto bg-green-700/50 '
            style={{
              width: '85%',
              maxWidth: '800px',
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


      {/* cultura organizacional */}

      <div className='mb-10 mt-10 md:mt-36 mx-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto'>
        <h1 className='font-bold mb-4 mt-4 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800 animate-fade-down'>{texts.tittle3}</h1>

        <section className='flex flex-col md:flex-row p-4 md:p-16'>
          <section className="flex-1 text-center p-4 lg:m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-md dark:bg-neutral-700">
            <h3 className='text-green-700 font-bold text-lg md:text-2xl mb-5 animate-fade-down'>
              {texts.subtittle1}
            </h3>
            <p className='font-semibold animate-fade-down'>
              {texts.visionDesc}
            </p>
          </section>
          <section className="flex-1 text-center p-4 lg:m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-md dark:bg-neutral-700">
            <h3 className='text-green-700 font-bold text-lg md:text-2xl mb-5 animate-fade-down'>
              {texts.subtittle2}
            </h3>
            <p className='font-semibold animate-fade-down'>
              {texts.misionDesc}
            </p>
          </section>
        </section>

        <div className="mt-12">
          <h3 className='font-bold mb-4 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800'>
            {texts.subtittle3}
          </h3>
          <div className="sm:w-1/2 mx-auto">
            <p className='flex flex-col pb-12 md:flex-row justify-center text-center font-semibold animate-fade-down'>
              {texts.valoresDesc}
            </p>
          </div>
        </div>
        <AcordeonValores />
      </div>

      {/* Container para lo que hace destacar a Bambú */}
      <div
        key="Container destacar"
        className="flex flex-col items-center justify-center mt-12 w-full h-full"
      >
        <h2
          key='Titulo 4'
          className='font-bold mb-12 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800'
        >
          {texts.tittle4}
        </h2>

        <div
          key="Cards Container"
          className="lg:grid lg:grid-cols-2 sm:w-5/5  animate__animated animate__fadeIn"
        >
          {items?.map((item) => {
            return (
              <Card
                image={item.card.image}
                id={item.card.id}
                front={item.card.front}
                back={item.card.back}
              />
            );
          })}
        </div>
      </div>
      {/* container equipo de */}
      <div key="Container equipo" className="mt-12 md:mt-36 md:mb-36">
        <div className='flex flex-col md:flex-row p-1 md:p-2'>
          <div className="flex-1 text-center p-4 lg:m-10 " >
            <div className={`${style.card} w-full max-w-md md:max-w-none mx-auto`}>
              <div className={style.img_container}>

                <div className={style.img}>
                  <Image src={imageDaniel} alt="" />
                </div>
                <div className={`${style.description} ${style.card} text-center cursor-pointer hover:ring-green-600 hover:ring-2 duration-400 `} onClick={toggleRedesSocialesDani}>
                  <span className={style.title}>
                    Daniel Kübl
                  </span>
                  <p className="text-black font-semibold ">Co-fundador</p>

                </div>

              </div>
            </div>
            {mostrarRedesSocialesDani && (
              <div className={`animate-fade-down ${style.redes}`} >
                <a
                  href="https://www.linkedin.com/in/daniel-k%C3%BCbl-418a58180/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.linkedin}
                >
                  <i className="fab fa-linkedin transform transition-transform hover:translate-y-[-5px] duration-300 ease-out"></i>
                </a>
              </div>

            )}
          </div>

          <div className="flex-1 text-center p-4 lg:m-10 " >
            <div className={`${style.card} w-full max-w-md md:max-w-none mx-auto`}>
              <div className={style.img_container}>
                <div className={style.img}>
                  <Image
                    src={imageGabo}
                    alt=""
                  />
                </div>
                <div className={`${style.description} ${style.card} text-center cursor-pointer hover:ring-green-600 hover:ring-2 duration-400 `} onClick={toggleRedesSocialesGabo}>
                  <span className={style.title}>
                    Gabriel Heredia
                  </span>
                  <p className="text-black font-semibold ">Co-fundador</p>
                </div>
              </div>
            </div>
            {mostrarRedesSocialesGabo && (
              <div className={`animate-fade-down ${style.redes}`} >
                <a href="https://www.linkedin.com/in/gaboheredia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.linkedin}
                >
                  <i className="fab fa-linkedin transform transition-transform hover:translate-y-[-5px] duration-300 ease-out"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

    </div >
  );
};

export default About;
