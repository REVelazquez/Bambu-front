import Image from "next/image";
import ImagenContacto from "../../Assets/contacto.jpg";
import React from 'react';
import styles from "./contacto.module.css"
import { useForm, ValidationError } from '@formspree/react';
import Head from "next/head";

const Contacto = () => {
    const [state, handleSubmit] = useForm("xjvqrvwq");
    if (state.succeeded) {
        return (
            <div>
                <p>
                    Gracias por confiar en Bambú!
                </p>
                <p>
                    Pronto nos pondremos en contacto contigo!
                </p>
            </div>
        )
    }
    return (
        <div className="flex flex-col h-full">

            <Image
                src={ImagenContacto}
                alt="Contact Image"
                className={styles.customImage}
                layout="responsive"
            />

            <div className="flex-grow flex bg-gray-200">
                <div className="w-1/2 p-8">
                    <h1 className="mb-4 text-center text-lg font-medium text-gray-800">
                        Contactate con nosotros
                    </h1>
                    <div className="flex justify-center">
                        <a href="https://api.whatsapp.com/send?phone=3516578866" target="_blank" rel="noopener noreferrer" className={styles.whatsappIcon}>
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="" className={styles.linkedinIcon}>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://instagram.com/cordobabambu?igshid=ZGUzMzM3NWJiOQ==" className={styles.instagramIcon}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 p-8">
                    <h1 className="mb-4 text-xl font-medium text-gray-800">Escribenos! </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-3xl p-8 shadow-lg rounded-lg w-full bg-none"
                    >
                        <div className="flex mb-6">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="nombre" className="block mb-2 text-lg font-medium text-gray-800">
                                    Nombre
                                </label>
                                <input
                                    id="nombre"
                                    type="text"
                                    name="nombre"
                                    className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                                    placeholder='Nombre'
                                    required
                                />
                            </div>
                            <div className="w-1/2 ml-2">
                                <label htmlFor="apellido" className="block mb-2 text-lg font-medium text-gray-800">
                                    Apellido
                                </label>
                                <input
                                    id="apellido"
                                    type="text"
                                    name="apellido"
                                    className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                                    placeholder='Apellido'
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-800">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                                placeholder='Email'
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="telefono" className="block mb-2 text-lg font-medium text-gray-800">
                                Teléfono
                            </label>
                            <input
                                id="telefono"
                                type="tel"
                                name="telefono"
                                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                                placeholder='Teléfono'
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-800">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                                placeholder='Mensaje'
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
