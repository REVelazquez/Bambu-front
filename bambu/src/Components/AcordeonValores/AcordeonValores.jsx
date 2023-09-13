import { useState } from "react";
import {valores} from '@/Assets/about/aboutText'

const AcordeonValores = () => {
  const [activeItems, setActiveItems] = useState(new Array(valores.length).fill(false));


  const handleClick = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };

  return (
    <section className="grid md:grid-cols-1 w-1/2 mx-auto animate__animated animate__fadeIn">
      {valores.map((valores, index) => (
        <section
          className={`flex flex-col md:flex-row mb-4 mr-4 ml-4 p-4 bg-transparent rounded-lg shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 ${activeItems[index] ? 'bg-green-300' : ''}`}
          key={index}
        >
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{valores.name}</h2>
              <button
                onClick={() => handleClick(index)}
                className="py-1 px-2 rounded-md bg-transparent text-white"
              >
                {activeItems[index] ?
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                }
              </button>
            </div>
            {activeItems[index] && (
              <div>
                <hr className="w-full mx-auto mt-2 border-t-2 border-gray-200" />
                <p className="w-full mx-auto mt-2 text-center text-lg animate__animated animate__fadeIn">
                  {valores.description}
                </p>
              </div>
            )}
          </div>
        </section>
      ))}
    </section>
  );
};

export default AcordeonValores;
