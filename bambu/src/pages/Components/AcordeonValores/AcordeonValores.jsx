import { useState } from "react";
import { valores } from '../../../../public/Assets/about/aboutText'

const AcordeonValores = () => {
  const [activeItems, setActiveItems] = useState(new Array(valores.length).fill(false));


  const handleClick = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };

  return (
    <section className="grid md:grid-cols-1 w-full md:w-1/2 mx-auto animate__animated animate__fadeIn">
      {valores.map((valores, index) => (
        <section
          className={`flex flex-col md:flex-row mb-4 mr-2 ml-2 p-4 bg-transparent rounded-lg shadow-md lg:shadow-lg dark:bg-neutral-700 transition duration-300 ${activeItems[index] ? 'bg-green-300' : ''}`}
          key={index}
        >
          <div className="flex flex-col w-full">
            <button
              onClick={() => handleClick(index)}
              className="py-1 rounded-md bg-transparent text-black"
            >
              <div className="flex justify-between">
                <h2 className="text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl font-semibold text-center md:text-center lg:text-center">{valores.name}</h2>
                {activeItems[index] ?
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                }
              </div>
            </button>
            {activeItems[index] && (
              <div>
                <hr className="w-full mx-auto mt-2 border-t-2 border-gray-200" />
                <p className="mt-4 text-sm md:text-base text-base text-center text-neutral-600 dark:text-neutral-200 animate-fade-down">
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