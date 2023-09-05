import { useState } from "react"
import Image from "next/image";
const Card = ({id, image, front, back})=>{
    const [show, setShow]=useState(false)
    
    const handleMouseEnter = () => {
        setShow(true);
      };
    
      const handleMouseLeave = () => {
        setShow(false);
      };


    return(
        <div key={'a'+id} 
        className="w-96 h-60 mx-4 my-4  transition-all duration-400 ease-in-out transform hover:scale-105 flex-1 text-center m-10 block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
            {show ? <span key={'c'+id} className="max-w-full h-64  bg-green-500 flex rounded-md   items-center justify-center">
              <p key={'bt'+id} className="mx-4 text-xl text-white">{back}</p></span>
            :<div key={'b'+id} className="w-80 h-64 bg-transparent flex rounded-md border-solid   items-center justify-center round-">
              <Image key={'i'+id} src={image} className="w-16 h-16 ml-6 mr-2"/>
              <h1 key={'ft'+id} className="w-40 mr-4 font-bold font-black text-2xl">{front}</h1>
              </div>} 
            
            
        </div>
    )
}

export default Card