import React from 'react';
import { texts, items } from '@/Assets/aboutText';
import Card from '@/Components/NavBar/card';

const About = () => {
    
    console.log(items);
  return (
    <div className=' flex flex-col items-center mt-16'>


        <h1 className='m-8 font-bold mt-4' >{texts.tittle1}</h1>
        
        <div className='my-4 mx-4'>

        <h2 className='mx-4 font-semibold'>{texts.tittle2}</h2>
            <div className='flex flex-row'>
                <span className="inline-flex space-x-1 w-64 flex-row text-justify">
                    <p className='m-0'>{texts.description}</p>
                </span>
                <img src='' alt='Equipo o Logo' className=' mx-8' />
            </div>
        </div>
        <div key='Destacar'>

            <h2 key='Titulo 3' className='mx-8'>{texts.tittle3}</h2>
            <div key='Cards Container' className='flex flex-row'>
                {items?.map((item)=>{
                    return(
                        <Card 
                        id={item.card.id}
                        front={item.card.front}
                        back={item.card.back} />
                        )
                    })}            
            </div>
        </div>
    </div>
  );
};

export default About