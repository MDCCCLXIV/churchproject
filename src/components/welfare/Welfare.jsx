import React from 'react'
import Carousel from '../../features/carousel/Carousel'

const Welfare = () => {
  return (
 <div className='flex flex-col  w-full h-[90vh] md:h-[65vh]  p-2'>
         <div className="flex flex-col w-full h-full md:mx-auto md:max-w-6xl">
            <div className="block md:flex h-[100%] justify-between p-2">
                <div className="flex flex-col w-full md:w-[49%] h-[50%] md:h-full">
                    <div className="flex flex-col h-full md:h-[60%] md:m-auto md:justify-between">
                        <div className="flex flex-col h-[85%]  text-center md:h-full md:text-start">
                            <span className='uppercase text-xl font-medium md:text-2xl'> the Gethsemane life church welfare Association</span>
                    <p className='text-sm md:text-base w-full'>The Gethsemane Life Church Welfare Association is a vibrant and compassionate community
                         dedicated to fostering positive change and upliftment. Through a strong spirit of unity
                          and care, we embrace diverse initiatives to improve lives and create lasting impact. Our
                           mission is to extend a helping hand to those in need, guided by the values of empathy,
                        generosity, and a shared commitment to building a better world.</p>
                        </div>
                        <div className="flex justify-between md:justify-normal p-1 md:py-2 w-full h-[15%]">
                            <button className=' md:me-2 w-[45%] md:w-[30%] bg-orange-400 mt-auto mb-2 rounded-md'>Explore</button>
                            <button className=' md:ms-2 w-[45%] md:w-[30%] bg-orange-400 mt-auto mb-2 rounded-md'>JOIN</button>
                        </div>
                         
                    </div>
                 
                </div>
                <div className="flex w-full md:w-[50%] md:h-full rounded-xl h-[50%] p-2">
                    <div className="flex h-[62%] w-full m-auto rounded-xl bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/assets/images/church1.avif)` }}>
                     <Carousel />
                    </div>
                </div>
            </div>
         </div>
         </div>
  )
}

export default Welfare