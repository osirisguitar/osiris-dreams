'use client'

import { useState } from 'react'
import { Heading } from './heading'
import Hamburger from 'hamburger-react'
import Link from 'next/link'

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <div className='lg:mt-4 p-2 flex-row hidden md:flex fixed z-10 bg-black/[.5]'>
        <Link href='/'>
          <Heading text='Home' style='h3' />
        </Link>
        <span className='px-3'>|</span>
        <Link href='/songs'>
          <Heading text='Music' style='h3' />
        </Link>
        <span className='px-3'>|</span>
        <Link href='/#stream'>
          <Heading text='Stream' style='h3' />
        </Link>
        <span className='px-3'>|</span>
        <Link href='/#buy'>
          <Heading text='Buy songs' style='h3' />
        </Link>
        <span className='px-3'>|</span>
        <Link href='/#social-media'>
          <Heading text='Social Media' style='h3' />
        </Link>
        <span className='px-3'>|</span>
        <Link href='/#contact'>
          <Heading text='Contact' style='h3' />
        </Link>
        <span className='px-3'>|</span>
        <Link href='/bio'>
          <Heading text='Bio' style='h3' />
        </Link>
        <span className='px-3'>|</span>
        <Link href='/images'>
          <Heading text='Images' style='h3' />
        </Link>
      </div>
      <div className='absolute top-0 right-0 flex flex-col items-end'>
        <div className='mt-4 mr-4 z-20 md:hidden'>
          <Hamburger onToggle={() => setMenuOpen(!menuOpen)} />
        </div>
        {menuOpen && (
          <div className='absolute z-10 top-0 w-[320px] flex flex-col space-y-2 rounded-lg px-5 py-4 m-3 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'>
            <Link href='/' onClick={closeMenu}>
              <Heading text='Home' style='h2' />
            </Link>
            <Link href='/songs' onClick={closeMenu}>
              <Heading text='Music' style='h2' />
            </Link>
            <Link href='/#stream' onClick={closeMenu}>
              <Heading text='Stream' style='h2' />
            </Link>
            <Link href='/#buy' onClick={closeMenu}>
              <Heading text='Buy songs' style='h2' />
            </Link>
            <Link href='/#social-media' onClick={closeMenu}>
              <Heading text='Social Media' style='h2' />
            </Link>
            <Link href='/#contact' onClick={closeMenu}>
              <Heading text='Contact' style='h2' />
            </Link>
            <Link href='/bio' onClick={closeMenu}>
              <Heading text='Bio' style='h2' />
            </Link>
            <Link href='/images' onClick={closeMenu}>
              <Heading text='Images' style='h2' />
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
