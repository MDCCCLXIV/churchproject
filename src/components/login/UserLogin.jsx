import React from 'react'
import FormInput from './form/FormInput'
import Password from './form/Password'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
   <div className='flex flex-col  w-full h-[80vh] md:h-[100vh] pt-4'>
         <div className="flex flex-col w-full  h-[90%] m-auto md:max-w-6xl">
            <form className="flex flex-col h-[65%] md:h-[50%] w-[80%] md:w-[33%] shadow-lg p-1 justify-items-center items-center m-auto rounded bg-white">
                <div className="flex flex-col w-full m-auto">
                        <span className='mx-auto text-3xl mt-2'>Sign In</span>
                        <FormInput placeholder={"Email"} type={"text"} />
                        <Password placeholder={"Password"} />
                        <button className='w-[76%] md:w-[70%] hover:bg-orange-500 font-medium hover:font-bold rounded mx-auto'>Sign In</button>
                        <span className='w-[76%] md:w-70% mx-auto text-center my-2'><Link>forgot password?</Link></span>
                        <span className='w-[76%] md:w-70% mx-auto text-center'>Not a member?<Link to="/churchproject/signup" className='text-orange-400 hover:text-orange-500 mx-1 hover:font-semibold'>Sign Up</Link></span>
                </div>
               
            </form>
         </div>
         </div>
  )
}

export default UserLogin