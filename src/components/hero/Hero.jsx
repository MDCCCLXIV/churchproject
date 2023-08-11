import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    { image: 'church4.avif', description: "But I'm here to help with a solution that is not only easy, it's free" },
    { image: 'church1.avif', description: "For God gave us a spirit not of fear but of power and love and self-control." },
    { image: 'church2.avif', description: "Be watchful, stand firm in the faith, act like men, be strong." },
    { image: 'church3.avif', description: "Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!" }
  ];
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
    <div className='flex flex-col items-center justify-center w-full h-[90vh] duration-700 ease-linear text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${currentImage.image})` }}>
      <div className="flex flex-col md:mx-auto md:max-w-6xl w-full h-full justify-between items-center md:mt-[4%] md:mb-3">
        <div className='flex flex-col h-full w-full justify-between'>
          <div className='flex flex-col w-full m-auto justify-center text-center items-center md:my-auto h-[70%]'>
            <div className="flex flex-col md:w-[50%]">
              <span className='text-4xl font-medium my-2 duration-500  md:bg-black/40 md:rounded md:p-2 '>{currentImage.description}</span>
              <span className='text-base my-2'><i>...Jesus said,"stay here and keep watch with me" ~matthew 26:38b</i></span>
            </div>
            <button className='w-[250px] my-2 font-medium text-white'>view location & service times</button>
          </div>
        </div>
        <div className="flex w-full h-[30%]">
          <div className="flex p-2 h-[60%] md:h-full w-full mx-auto rounded m-2 ">
            <div className="flex justify-center mx-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                    index === activeIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
