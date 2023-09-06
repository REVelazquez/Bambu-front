import React from "react";

export default function ConsultancyCard({ title, image, info }) {

  return (
    <div className="w-140 flex-1 text-center m-5 p-10 block ease-in duration-300 hover:bg-green-100 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >

      <div className="p-6 mx-auto">


        <h5 className="mb-2 text-4xl leading-tight dark:text-neutral-50 font-semi-bold">
          {title}
          <lord-icon
            src={image}
            trigger="hover"
            colors="primary:#121331"
            style={{ width: "50px", height: "50px", padding: "10px" }}
          ></lord-icon>

        </h5>

        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {info}
        </p>
      </div>
    </div>
  );
}
