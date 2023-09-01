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
        className="w-64 h-44 mx-4 my-4  transition-all duration-400 ease-in-out transform hover:scale-105" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
            {show ? <span key={'c'+id} className="w-64 h-44  bg-green-500 flex rounded-md  border-solid border-green-900 border-4 items-center justify-center"><p key={'bt'+id} className="mx-4 text-sm">{back}</p></span>
            :<div key={'b'+id} className="w-64 h-44 bg-green-400 flex rounded-md border-solid  border-green-900 border-4 items-center justify-center round-">
              <Image key={'i'+id} src={image} className="w-16 h-16 ml-6 mr-2"/>
              <h1 key={'ft'+id} className="w-40 mr-4 font-bold font-black">{front}</h1>
              </div>}
            
            
        </div>
    )
}

export default Card