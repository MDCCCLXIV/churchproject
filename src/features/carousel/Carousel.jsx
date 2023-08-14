import React, { useEffect, useRef, useState } from 'react';

const Carousel = () => {
  const images = ['/assets/images/church4.avif', '/assets/images/church1.avif', '/assets/images/church2.avif', '/assets/images/church3.avif'];
 

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentImage = images[activeIndex];

  return (
<div className='flex flex-col rounded-xl items-center justify-center w-full h-full duration-700 ease-in-out text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${currentImage})` }}>
        <div className='flex flex-col h-full w-full rounded-xl justify-between' style={{ background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0,0,0,1))` }}>
            <div className="flex justify-center mt-auto py-2 mx-auto">
              {images.map((image,index) => (
                images.length > 1 && <div
                  key={index}
                  className={`w-2 h-2 mx-2 rounded-full mt-auto cursor-pointer ${
                    index === activeIndex ? 'bg-red-500' : 'bg-white'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              ))}
            </div>
          </div>

        
        
      
    </div>
  );
};

export default Carousel;
