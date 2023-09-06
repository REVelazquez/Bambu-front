import React from "react";
import Link from "next/link";
import Image from "next/image";
import personalizada from "../../Assets/personalizada.gif";
import duracion from "../../Assets/duracion.gif";
import estrategia from "../../Assets/estrategia.gif";
import inversion from "../../Assets/inversion.gif";
import resultados from "../../Assets/resultados.gif";
import ConsultancyCard from "@/Components/ConsultancyCard/ConsultancyCard";

import styles from "./consultorias.module.css";

("client");
function Consultancy() {
  const benefits = [
    {
      title: "Personalizada",
      info: "El enfoque principal de nuestra consultoría es el análisis minucioso de tu empresa o proyecto emprendedor. Comenzaremos con un diagnóstico exhaustivo para detectar los puntos de dolor y las áreas de mejora potencial. Al entender a fondo tus necesidades y objetivos, podremos diseñar una estrategia personalizada que aborde tus desafíos específicos.",
      image: "https://cdn.lordicon.com/nocvdjmh.json",
    },
    {
      title: "Duración",
      info: "Es importante destacar que el proceso de consultoría es más intensivo y requiere un compromiso mínimo de 3 meses. Durante este período, nos reuniremos dos veces al mes en sesiones de 3 horas y media. Este enfoque intensivo nos permitirá profundizar en los problemas y trabajar estratégicamente para encontrar soluciones efectivas. La duración y frecuencia de las sesiones pueden ajustarse según tus requerimientos y la complejidad de los desafíos que enfrentes.",
      image: "https://cdn.lordicon.com/jaxtxypu.json",
    },
    {
      title: "Estratégica",
      info: "Una vez que hayamos identificado los puntos de dolor y establecido los objetivos, trabajaremos estratégicamente para implementar soluciones efectivas. Nuestro enfoque se basa en aprovechar tus fortalezas y recursos, así como en identificar nuevas oportunidades de crecimiento. A lo largo del proceso de consultoría, estaré disponible para brindarte asesoramiento continuo y acompañarte en la implementación de las estrategias diseñadas.",
      image: "https://cdn.lordicon.com/oezixobx.json",
    },
    {
      title: "Resultados Tangibles",
      info: "Nuestro objetivo es lograr resultados tangibles y medibles para tu empresa o proyecto emprendedor. Durante el proceso de consultoría, te proporcionaremos un seguimiento constante de los avances y ajustaremos la estrategia según sea necesario para asegurar el éxito.",
      image: "https://cdn.lordicon.com/yqzmiobz.json",
    },
    {
      title: "Inversión en el Futuro",
      info: "Consideramos que la consultoría es una inversión en el futuro de tu negocio. Al trabajar juntos, podrás adquirir habilidades y conocimientos valiosos que te beneficiarán a largo plazo. Nuestro enfoque se centra en empoderarte para que puedas enfrentar futuros desafíos con confianza y tomar decisiones informadas que impulsen el crecimiento continuo de tu empresa",
      image: "https://cdn.lordicon.com/jffauosv.json",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className={styles.header}>
        <div className=" mx-auto flex items-center justify-end mt-8 mr-20 h-full ">
          <div className="top-0 bg-zinc-300 bg-opacity-70 backdrop-blur-sm pr-28 pl-10 pt-20 pb-20 w-1/2 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full ">
            <h1 className="text-center text-green-700 font-bold text-6xl mb-5 mx-auto animate-fade-down">
              Consultorías
            </h1>
            <p className="font-semibold ml-10 animate-fade-down">
              El enfoque principal de nuestra consultoría es el análisis
              minucioso de tu empresa o proyecto emprendedor. Comenzaremos con
              un diagnóstico exhaustivo para detectar los puntos de dolor y las
              áreas de mejora potencial. Al entender a fondo tus necesidades y
              objetivos, podremos diseñar una estrategia personalizada que
              aborde tus desafíos específicos.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-20">
        <div className="grid md:grid-cols-3 mx-auto animated animate__fadeIn ">
          {benefits.map((e, index) => (
            <ConsultancyCard title={e.title} image={e.image} info={e.info} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center mb-32">
        <h1 className="mb-8  text-2xl font-bold mt-10">
          ¿Quieres descubrir más acerca de las consultorías?
        </h1>
        <a href="/Contacto/contacto" className="text-white text-lg bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out inline-block mb-5">
          ¡Contáctanos para obtener más información!
        </a>
      </div>
    </div>
  );
}

export default Consultancy;
