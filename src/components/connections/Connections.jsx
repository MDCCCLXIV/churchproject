import React from 'react'
import Groups from './Groups'

const Connections = () => {
  return (
     <div className='flex flex-col  w-full h-[75vh]  p-2'>
         <div className="flex flex-col w-full h-full md:mx-auto md:max-w-6xl">
            <div className="flex h-[95%]">
            <Groups />
            </div>
         </div>
         </div>
  )
}

export default Connections