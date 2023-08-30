import React, { useState, useEffect } from 'react';

const Hero = () => {
 const images = {
  image: '/assets/images/hdbgchurch.jpg', description: "Keeping Watch With Christ" ,
 };


  return (
    <div className='flex flex-col items-center justify-center mx-auto md:w-[100%] h-[90vh]  text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${images.image})` }}>
      <div className="flex flex-col md:mx-auto md:max-w-6xl w-full h-full justify-between bg-black/40 items-center md:mt-[4%] md:mb-3">
        <div className='flex flex-col h-full w-full justify-between'>
          <div className='flex flex-col w-full m-auto justify-center text-center items-center md:my-auto h-[70%]'>
            <div className="flex flex-col md:w-[70%]">
              <span className='text-5xl md:text-7xl font-light  my-2 duration-500   md:rounded md:p-2 '>{images.description}</span>
            </div>
            <button className='w-[250px] my-2 font-medium text-white'>view location & service times</button>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Hero;
