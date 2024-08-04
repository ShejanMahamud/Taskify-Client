"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'

const Navbar = () => {
  const session = useSession();

  return (
    <nav className='border-b border-white border-opacity-10 w-ful px-5 py-4 backdrop-blur-md bg-transparent flex items-center justify-between shadow-lg'>
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
      {
        !session?.data ?  <Link href={'/api/auth/signup'}>
        <Button color="secondary" variant="shadow" className='font-bold uppercase px-4'>Sign Up</Button>
        </Link>
        : 
        <div className='flex items-center gap-2'>
         <Dropdown placement="bottom-end">
        <DropdownTrigger>
        <Image src={'/boy.png'} height={45} width={45} className='rounded-full object-cover  border border-violet-700' alt='user.png'/>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat" className='bg-transparent'>
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{session.data.user?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
         <Button onClick={()=>signOut()} color="secondary" variant="shadow" className='font-bold uppercase px-4'>Log out</Button>
        </div>
      }
      </div>
    </nav>
  )
}

export default Navbar