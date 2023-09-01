import React from "react";
import Link from "next/link";
import Image from "next/image";
import personalizada from "../../Assets/personalizada.gif";
import duracion from "../../Assets/duracion.gif";
import estrategia from "../../Assets/estrategia.gif";
import inversion from "../../Assets/inversion.gif";
import resultados from "../../Assets/resultados.gif";

import styles from "./consultorias.module.css";

("client");
function Consultancy() {
  const benefits = [
    {
      title: "Consultoría Personalizada",
      info: "El enfoque principal de nuestra consultoría es el análisis minucioso de tu empresa o proyecto emprendedor. Comenzaremos con un diagnóstico exhaustivo para detectar los puntos de dolor y las áreas de mejora potencial. Al entender a fondo tus necesidades y objetivos, podremos diseñar una estrategia personalizada que aborde tus desafíos específicos.",
      image: personalizada,
    },
    {
      title: "Duración y Frecuencia",
      info: "Es importante destacar que el proceso de consultoría es más intensivo y requiere un compromiso mínimo de 3 meses. Durante este período, nos reuniremos dos veces al mes en sesiones de 3 horas y media. Este enfoque intensivo nos permitirá profundizar en los problemas y trabajar estratégicamente para encontrar soluciones efectivas. La duración y frecuencia de las sesiones pueden ajustarse según tus requerimientos y la complejidad de los desafíos que enfrentes.",
      image: duracion,
    },
    {
      title: "Trabajo Estratégico",
      info: "Una vez que hayamos identificado los puntos de dolor y establecido los objetivos, trabajaremos estratégicamente para implementar soluciones efectivas. Nuestro enfoque se basa en aprovechar tus fortalezas y recursos, así como en identificar nuevas oportunidades de crecimiento. A lo largo del proceso de consultoría, estaré disponible para brindarte asesoramiento continuo y acompañarte en la implementación de las estrategias diseñadas.",
      image: estrategia,
    },
    {
      title: "Resultados Tangibles",
      info: "Nuestro objetivo es lograr resultados tangibles y medibles para tu empresa o proyecto emprendedor. Durante el proceso de consultoría, te proporcionaremos un seguimiento constante de los avances y ajustaremos la estrategia según sea necesario para asegurar el éxito.",
      image: resultados,
    },
    {
      title: "Inversión en el Futuro",
      info: "Consideramos que la consultoría es una inversión en el futuro de tu negocio. Al trabajar juntos, podrás adquirir habilidades y conocimientos valiosos que te beneficiarán a largo plazo. Nuestro enfoque se centra en empoderarte para que puedas enfrentar futuros desafíos con confianza y tomar decisiones informadas que impulsen el crecimiento continuo de tu empresa",
      image: inversion,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
            <div className={styles.header}>
                <div className=" mx-auto flex items-center justify-end mt-8 mr-20 h-full ">
                    <div className='top-0 bg-zinc-300 bg-opacity-70 backdrop-blur-sm pr-28 pl-10 pt-20 pb-20 w-3/6 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full'>
                        <h1 className='text-center text-green-700 font-bold text-6xl mb-5'>Consultorías</h1>
                        <p className='font-semibold'>El enfoque principal de nuestra consultoría es el análisis
                  minucioso de tu empresa o proyecto emprendedor. Comenzaremos
                  con un diagnóstico exhaustivo para detectar los puntos de
                  dolor y las áreas de mejora potencial. Al entender a fondo tus
                  necesidades y objetivos, podremos diseñar una estrategia
                  personalizada que aborde tus desafíos específicos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-6 mt-20">
                
                <div class="grid  md:grid-cols-3 mx-auto">
                {benefits.map((e, index) => (
                  <div
                    key={index}
                    class="w-70  mx-3 my-3 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  >
                    <a href="#!">
                    <lord-icon
                            src={e.image}
                            trigger="hover"
                            colors="primary:#FFFFFF"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>
                    </a>
                    <div class="p-6 mx-auto">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {e.title}
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {e.info}
                      </p>
                    </div>
                  </div>
                ))}
                </div>
            </div>
        </div>
  );
}

export default Consultancy;
