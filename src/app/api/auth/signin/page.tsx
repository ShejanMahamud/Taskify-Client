"use client"
import React, { useState } from 'react'
import { PiEnvelopeSimpleLight } from 'react-icons/pi'
import { FiEye, FiEyeOff, FiKey } from "react-icons/fi";
import { Button } from '@nextui-org/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

interface SignInProps {
  email: string;
  password: string;
}

const SignIn = () => {

const [showPassword, setShowPassword] = useState<boolean>(false);

const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  try{
    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;

    const formData: SignInProps = {email,password}
  }
  catch(error: any){
    console.log(error.message)
  }
}

  return (
    <div className='p-10 w-full flex items-center justify-center min-h-screen'>
        <div className='mx-80 my-20 border border-white rounded-lg backdrop-blur-md w-full h-auto border-opacity-30 p-10'>
          <h1 className='font-bold text-2xl'>Welcome Back!</h1>
          <form onSubmit={handleLogin} className='w-full grid grid-cols-2 row-auto items-center gap-x-5 gap-y-10 mt-10'>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm'>
            <PiEnvelopeSimpleLight className='text-lg'/>
            <input type="text" required name='email' placeholder='Email' className='w-full focus:outline-none bg-transparent placeholder:text-sm'/>
            </div>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm justify-between'>
            <FiKey className='text-lg'/>
            <input type={showPassword ? 'text' : 'password'} required name='password' placeholder='Password' className='w-full focus:outline-none bg-transparent placeholder:text-sm'/>
            {
              !showPassword ? <FiEye onClick={()=>setShowPassword(true)} className='cursor-pointer'/> : <FiEyeOff onClick={()=>setShowPassword(false)} className='cursor-pointer'/>
            }
            </div>
            <div className='flex items-center gap-3'>
              <button className='p-2 rounded-md border border-white border-opacity-40 text-xl'>
            <FcGoogle />
              </button>
              <button className='p-2 rounded-md border border-white border-opacity-40 text-xl'>
              <FaXTwitter />
              </button>
              <button className='p-2 rounded-md border border-white border-opacity-40 text-xl'>
              <FaGithub />
              </button>
              <button className='p-2 rounded-md border border-white border-opacity-40 text-xl'>
              <FaFacebook />
              </button>
            </div>
            <Button type='submit' color="secondary" variant="shadow" className='font-bold uppercase'>
        Sign In
      </Button> 
          </form>  
          <h1 className='text-end w-full mt-5'>Not Registered? 
            <Link href={'/signup'}><span className='text-violet-700 font-medium duration-500 hover:underline underline-offset-4'> Signup Here</span></Link>
          </h1>
        </div>
    </div>
  )
}

export default SignIn