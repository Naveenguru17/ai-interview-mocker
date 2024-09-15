"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Header() {
    const path=usePathname();
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src ={'/logo.svg'} width={160} height={100} alt='logo'/>
      <ul className='hidden sm:flex gap-6'>
        <Link href={'/dashboard'}><li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li></Link>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/questions' && 'text-primary font-bold'}`}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/how' && 'text-primary font-bold'}`}>How it works?</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header