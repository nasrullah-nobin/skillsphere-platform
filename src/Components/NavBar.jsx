
import { Button } from '@heroui/react';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';


const NavBar = () => {
  
    return (
       <header className="flex items-center justify-between px-6 py-3 border-b sticky top-0 bg-linear-to-br from-[#DFDCFD] to-[#D4EDED] z-50">
<Image 
  src={logo} 
  alt="logo" 
  width={180} 
  height={60} 
  style={{ objectFit: "contain" }}
/>

  <nav className="flex items-center gap-6">
    <NavLinks className='font-bold hover:text-blue-600' href="/">Home</NavLinks>
    <NavLinks className='font-bold hover:text-blue-600' href="/courses">Courses</NavLinks>
    <NavLinks className='font-bold hover:text-blue-600' href="/profile">My Profile</NavLinks>
  </nav>

  <div className="flex items-center gap-3">
   <Link href={'/login'}> <Button className="font-bold">Login</Button></Link>
    <Link href={'/register'}><Button className="font-bold">Register</Button></Link>

  </div>
</header>
    );
};

export default NavBar;