'use client'

import { useState } from 'react'
import { Heading } from './heading'
import Hamburger from 'hamburger-react'

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <div className='lg:pt-4 flex-row hidden md:flex'>
        <a href='/'>
          <Heading text='Home' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='/#news'>
          <Heading text='Music' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='/#stream'>
          <Heading text='Stream' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='/#buy'>
          <Heading text='Buy songs' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='/#social-media'>
          <Heading text='Social Media' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='/#contact'>
          <Heading text='Contact' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='/bio'>
          <Heading text='Bio' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='/images'>
          <Heading text='Images' style='h3' />
        </a>
      </div>
      <div className='absolute top-0 right-0 flex flex-col items-end'>
        <div className='mt-4 mr-4 z-20 md:hidden'>
          <Hamburger onToggle={() => setMenuOpen(!menuOpen)} />
        </div>
        {menuOpen && (
          <div className='absolute z-10 top-0 w-[320px] flex flex-col space-y-2 rounded-lg px-5 py-4 m-3 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'>
            <a href='/' onClick={closeMenu}>
              <Heading text='Home' style='h2' />
            </a>
            <a href='/#news' onClick={closeMenu}>
              <Heading text='Music' style='h2' />
            </a>
            <a href='/#stream' onClick={closeMenu}>
              <Heading text='Stream' style='h2' />
            </a>
            <a href='/#buy' onClick={closeMenu}>
              <Heading text='Buy songs' style='h2' />
            </a>
            <a href='/#social-media' onClick={closeMenu}>
              <Heading text='Social Media' style='h2' />
            </a>
            <a href='/#contact' onClick={closeMenu}>
              <Heading text='Contact' style='h2' />
            </a>
            <a href='/bio' onClick={closeMenu}>
              <Heading text='Bio' style='h2' />
            </a>
            <a href='/images' onClick={closeMenu}>
              <Heading text='Images' style='h2' />
            </a>
          </div>
        )}
      </div>
    </>
  )
}
