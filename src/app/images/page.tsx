'use client'
import Image from 'next/image'
import { Heading } from '../components/heading'
import { init } from '@socialgouv/matomo-next'
import { useEffect } from 'react'
import { TextBox } from '../components/textBox'

export default function Images() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  return (
    <>
      <div className='max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <a href='/'>
          <Image
            src='/osiris-dreams-logo.svg'
            alt='OSIRIS DREAMS'
            className='drop-shadow-sm p-3 pt-[65px] md:pt-3'
            style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
            width={500}
            height={200}
          />
        </a>
      </div>
      <Heading style='h1' text='Images' />
      <div className='font-mono p-4'>
        All rights reservered <a href='/#contact'>Anders Norrback Bornholm</a>.
        All use of assets must be approved.
      </div>
      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-1 lg:grid-cols-2 lg:text-left'>
        <TextBox>
          <a href='/dark-city-album-cover.png' target='_blank'>
            <Image
              src='/dark-city-album-cover.png'
              alt='OSIRIS DREAMS - Dark City'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          Dark City - album cover
        </TextBox>
        <TextBox>
          <a href='/hyper-dimensional-racing-album-cover.png' target='_blank'>
            <Image
              src='/hyper-dimensional-racing-album-cover.png'
              alt='OSIRIS DREAMS - Hyper-Dimensional Racing'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          Hyper-Dimensional Racing - album cover
        </TextBox>
        <TextBox>
          <a href='/driving-alone-album-cover.png' target='_blank'>
            <Image
              src='/driving-alone-album-cover.png'
              alt='OSIRIS DREAMS - Driving Alone'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          Driving Alone - album cover
        </TextBox>
        <TextBox>
          <a href='/skiing-on-the-moon-album-cover.png' target='_blank'>
            <Image
              src='/skiing-on-the-moon-album-cover.png'
              alt='OSIRIS DREAMS - Hyper-Dimensional Racing'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          Hyper-Dimensional Racing - album cover
        </TextBox>
        <TextBox>
          <a href='/3-am-6502-debugging-album-cover.png' target='_blank'>
            <Image
              src='/3-am-6502-debugging-album-cover.png'
              alt='OSIRIS DREAMS - Driving Alone'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          3 AM 6502 Debugging - album cover
        </TextBox>
        <TextBox>
          <a href='/light-cycle-arena-album-cover.png' target='_blank'>
            <Image
              src='/light-cycle-arena-album-cover.png'
              alt='OSIRIS DREAMS - Hyper-Dimensional Racing'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          Light Cycle Arena - album cover
        </TextBox>
        <TextBox>
          <a href='/hyperspace-sunday-cruise-album-cover.png' target='_blank'>
            <Image
              src='/hyperspace-sunday-cruise-album-cover.png'
              alt='OSIRIS DREAMS - Driving Alone'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          Hyperspace Sunday Cruise - album cover
        </TextBox>
        <TextBox>
          <a href='/the-cybergenix-conspiracy-album-cover.png' target='_blank'>
            <Image
              src='/the-cybergenix-conspiracy-album-cover.png'
              alt='OSIRIS DREAMS - Hyper-Dimensional Racing'
              className='drop-shadow-sm p-3 md:pt-3'
              style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
              width={300}
              height={300}
            />
          </a>
          The Cybergenix Conspiracy - album cover
        </TextBox>
      </div>
    </>
  )
}
