import { useState } from "react"
const Card = ({id, front, back})=>{
    const [show, setShow]=useState(false)
    
    const handleMouseEnter = () => {
        setShow(true);
      };
    
      const handleMouseLeave = () => {
        setShow(false);
      };


    return(
        <div key={id} 
        className="w-64 h-44 align-middle mx-4 my-4 transition-all duration-300 ease-in-out transform hover:scale-105" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
            {show ?<h2 className="w-64 h-44  bg-green-300" >{back}</h2>: <h1 className="w-64 h-44  bg-green-600">{front}</h1> }
            
            
        </div>
    )
}

export default Card