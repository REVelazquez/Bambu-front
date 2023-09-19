import React from "react";
import styles from './Consultancy.module.css'

export default function ConsultancyCard({ title, image, info }) {
  return (
    <div className="flex-1 p-4 text-center bg-transparent mt-5 rounded-lg hover:bg-green-100 shadow-md lg:shadow-lg dark:bg-neutral-700">
      <h5 className="mb-3 text-xl md:text-3xl lg:text-4xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
        {title}
        <lord-icon
          src={image}
          trigger="hover"
          colors="primary:#121331"
          style={{ width: "40px", height: "40px", padding: "10px" }}
        ></lord-icon>
      </h5>
      <p className="mb-4 text-base text-sm md:text-lg lg:text-lg text-neutral-600 dark:text-neutral-200">
        {info}
      </p>
    </div>
  );
}
