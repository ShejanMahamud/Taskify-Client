"use client"
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='border-b border-white border-opacity-10 w-ful px-5 py-5 backdrop-blur-md bg-transparent flex items-center justify-between shadow-lg'>
      <div>
        <h1>Taskify</h1>
      </div>
      <ul className='flex items-center gap-10 text-sm font-medium'>
        <li>Home</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Privacy</li>
        <li>Contact</li>
      </ul>
      <div className='flex items-center gap-2'>
       <Link href={'/signup'}>
       <Button color="secondary" variant="shadow" className='font-bold uppercase px-4'>Sign Up</Button>
       </Link>
      </div>
    </nav>
  )
}

export default Navbar