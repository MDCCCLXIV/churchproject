import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
  
  return (
    <div className='w-[80%] pt-[15%] md:pt-0 md:w-[40%]  h-full bg-slate-800 backdrop-blur-sm text-white text-center block md:flex fixed '>
      <div className="w-full block md:flex md:m-auto md:max-w-6xl h-full p-2 md:p-0 md:h-[80%]  ">
        <div className="flex flex-col h-[60%]  my-auto md:h-full  md:w-[60%] border-b- md:border-b-0 md:border-e w-full  ">
        <div className='  text-2xl h-full md:text-3xl md:m-0 md:p-2 text-left md:mt-[10%] md:h-full w-full '>
          <div className='flex flex-col hover:border-s-2 justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <Link to="/" className='flex flex-col'>
              <span>HOME</span>
            <span className='text-sm'>description</span>
            </Link>
          
            </div>
          <div className='flex flex-col hover:border-s-2  justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>ABOUT US</span>
            <span className='text-sm'>description</span>

            </div>
          <div className='flex flex-col hover:border-s-2 justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>SERVICES</span>
            <span className='text-sm'>description</span>

            </div>
          <div className='flex flex-col hover:border-s-2 font-semibold hover:cursor-pointer justify-center hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>CONNECTIONS</span>
            <span className='text-sm'>description</span>

            </div>
          <div className='flex flex-col hover:border-s-2 justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>QUICK LINKS</span>
            <span className='text-sm'>description</span>

            </div>
        </div>
      </div>
      <div className="flex md:w-[40%] w-full h-[30%] md:h-full"></div>
      </div>
      
        
    </div>
  )
}

export default Menu