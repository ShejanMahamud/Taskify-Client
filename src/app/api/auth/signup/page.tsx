"use client"
import React, { useState } from 'react'
import { PiEnvelopeSimpleLight } from 'react-icons/pi'
import { FiEye, FiEyeOff, FiKey, FiUser } from "react-icons/fi";
import { Button, Checkbox } from '@nextui-org/react';
import Link from 'next/link';

interface SignUpProps {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const SignUp = () => {
const [showPassword, setShowPassword] = useState<boolean>(false);
const [showConfirmPassword,setShowConfirmPassword] = useState<boolean>(false)

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
  e.preventDefault()
  try{
    const form = e.target as HTMLFormElement;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const terms = form.terms.checked;

    const formData: SignUpProps = {firstName,lastName,userName,email,password,confirmPassword,terms}
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/signup/api`,{
      method: 'POST',
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify(formData)
    })
    console.log(res)
  }
  catch(error: any){
    console.log(error.message)
  }
}

  return (
    <div className='p-10 w-full flex items-center justify-center min-h-screen'>
        <div className='lg:mx-60 mx-28 my-20 border border-white rounded-lg backdrop-blur-md w-full h-auto border-opacity-30 p-10'>
          <h1 className='font-bold text-2xl'>Welcome to Taskify</h1>
          <form onSubmit={handleSubmit} className='w-full grid grid-cols-2 row-auto items-center gap-x-5 gap-y-10 mt-10'>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm'>
            <FiUser className='text-lg'/>
            <input type="text" required name='firstName' placeholder='First Name' className='w-full  focus:outline-none bg-transparent placeholder:text-sm'/>
            </div>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm'>
            <FiUser className='text-lg'/>
            <input type="text" required name='lastName' placeholder='Last Name' className='w-full  focus:outline-none bg-transparent placeholder:text-sm'/>
            </div>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm text-white'>
            <FiUser className='text-lg'/>
            <input type="text" required name='userName' placeholder='Username' className='w-full  focus:outline-none bg-transparent placeholder:text-sm'/>
            </div>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm'>
            <PiEnvelopeSimpleLight className='text-lg'/>
            <input type="email" required name='email' placeholder='Email' className='w-full focus:outline-none bg-transparent placeholder:text-sm'/>
            </div>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm justify-between'>
            <FiKey className='text-lg'/>
            <input type={showPassword ? 'text' : 'password'} required name='password' placeholder='Password' className='w-full focus:outline-none bg-transparent placeholder:text-sm'/>
            {
              !showPassword ? <FiEye onClick={()=>setShowPassword(true)} className='cursor-pointer'/> : <FiEyeOff onClick={()=>setShowPassword(false)} className='cursor-pointer'/>
            }
            </div>
            <div className='py-3 px-5 rounded-lg border border-white border-opacity-40 w-full backdrop-blur-lg flex items-center gap-3 text-sm justify-between'>
            <FiKey className='text-lg'/>
            <input type={showConfirmPassword ? 'text' : 'password'} required name='confirmPassword' placeholder='Confirm Password' className='w-full focus:outline-none bg-transparent placeholder:text-sm'/>
            {
              !showConfirmPassword ? <FiEye onClick={()=>setShowConfirmPassword(true)} className='cursor-pointer'/> : <FiEyeOff onClick={()=>setShowConfirmPassword(false)} className='cursor-pointer'/>
            }
            </div>
            <div className='flex items-center gap-3'>
            <Checkbox required color="secondary" name='terms'/>
            <h1>Did you accept out terms & conditions?</h1>
            </div>
            <Button type='submit' color="secondary" variant="shadow" className='font-bold uppercase'>
        Sign Up
      </Button> 
          </form>  
          <h1 className='text-end w-full mt-5'>Already have an account? 
            <Link href={'/signin'}><span className='text-violet-700 font-medium duration-500 hover:underline underline-offset-4'> Login Here</span></Link>
          </h1>
        </div>
    </div>
  )
}

export default SignUp