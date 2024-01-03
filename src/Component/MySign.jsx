import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";

const MySign = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
           <div className='flex justify-center items-center '>
               <div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
                   <h2 className='font-bold text-3xl leading-tight sm:text-4xl'>Sign Up</h2>
                   <p className='mt-2 text-gray-600'>
                    Already have and account?
                    <a href="#" className='font-bold hover:underline duration-200'>Sign in</a>
                    </p>
                    <form action="" className='mt-8'>
                        <div className=' space-y-5'>
                            <div>
                        <label htmlFor="">
                          {" "}  Full Name {" "}
                            </label>
                               <div className='mt-2'>
                                <input type="text" className='flex h-10 w-full border border-gray-300 rounded-md bg-transparent focus:outline-none placeholder:text-gray-300'
                                  placeholder='Full Name'
                                />
                               </div>
                            </div>
                            <div className='mt-2'>
                                  <label htmlFor="">
                                   {" "} Email address
                                   {" "}
                                    </label>
                                  <div className='mt-2'>
                                    <input type="email" name="" id="" className=' border border-gray-300 w-full h-10 rounded-md bg-transparent focus:outline-none'/>
                                  </div>
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="">
                                       Password                             
                                </label>
                                <div className='mt-2'>
                                    <input type="password" name="" id="" className='border h-10 rounded-md w-full border-gray-300 bg-transparent focus:outline-none'/>
                                </div>
                            </div>
                          <div className='mt-4 flex items-center'>
                            <button className='flex items-center justify-center bg-black text-white w-full h-10 rounded-md hover:bg-gray-600 duration-200'>
                                Create Account <span><FaArrowRight className='ml-1' /> </span>    
                            </button>
                          </div>
                        </div>
                    </form>
                      <div className='mt-4 '>
                          <button className='flex items-center justify-center h-12 border-2 w-full rounded-md hover:bg-gray-300 duration-200'>
                           <span><FaGoogle /></span> 
                            Sign up with Google
                            </button>
                      </div>
                      <div className='mt-4'>
                        <button className='border-2 bg-transparent h-12 rounded-md w-full hover:bg-gray-300 duration-200  flex items-center justify-center'>
                            <FaFacebook />
                            Sign up with Facebook
                        </button>
                      </div>
               </div>
           </div>
           <div className='h-full w-full'>
               <img src="https://pemanamgur.netlify.app/static/media/IMG_20230612_212042_531.bc454f9071ff8f7a6961.jpg" 
                alt=""
                className='mx-auto w-full h-full rounded-md '
                />
           </div>
        </div>
    </section>
  )
}

export default MySign
