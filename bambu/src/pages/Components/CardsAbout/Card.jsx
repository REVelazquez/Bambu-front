import { useState } from "react"
import Image from "next/image";
const Card = ({ id, image, front, back }) => {
  const [show, setShow] = useState(false)

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };


  return (
    <div
      key={'a' + id}
      className="w-80 h-60 md:w-80 lg:w-96 mx-auto my-4 transition-all duration-500 ease-in-out transform text-center block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {show ? (
        <span key={'c' + id} className="max-w-full h-64 bg-green-500 flex rounded-md items-center justify-center">
          <p key={'bt' + id} className="text-lg p-5 text-white animated animate__fadeIn">
            {back}
          </p>
        </span>
      ) : (
        <div key={'b' + id} className="w-80 h-60 md:w-80 lg:w-96 bg-transparent flex rounded-md border-solid items-center justify-center">
          <Image key={'i' + id} src={image} className="w-16 h-16 mr-2" />
          <h1 key={'ft' + id} className="w-1/2 sm:w-40 mr-2 sm:mr-4 font-bold font-black text-lg sm:text-2xl">
            {front}
          </h1>
        </div>
      )}
    </div>

  )
}

export default Card