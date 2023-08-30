import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full h-[35vh]  text-white text-center'>
        <div className="flex container w-full h-full  mx-auto max-w-6xl p-2 md:p-0 ">
            <div className="rounded w-full h-[80%] m-auto bg-orange-400 justify-center">
                <div className="flex flex-col container  w-full h-full  m-auto max-w-3xl ">
                    <span className='text-white font-bold text-xl md:text-3xl text-center w-full mt-auto ' >Stay Virtually Connected</span>
                        <p className='mx-auto text-sm my-2'>To stay updated  on what is happening and get inspirational messages, make sure to subscribe</p>
                    <div className="block md:flex w-full md:w-[80%] justify-center px-4  mb-auto mx-auto mt-2">
                    <input className='border w-full md:w-[80%] text-center p-1 md:p-2  rounded-full text-black outline-none' type='email' placeholder='email address'></input>   
                    <button type='submit' className='mt-2 md:mt-0 md:mx-2 rounded-full w-[50%]  md:w-[20%] p-1 bg-orange-300 font-medium text-base text-white hover:bg-orange-500'>Subscribe</button>
                </div> 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Newsletter