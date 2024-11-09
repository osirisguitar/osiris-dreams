'use client'
import Image from 'next/image'
import { Heading } from '../components/heading'
import { init } from '@socialgouv/matomo-next'
import { useEffect } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { TextBox } from '../components/textBox'

export default function Bio() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  return (
    <>
      <div className='max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <Image
          src='/osiris-dreams-logo.svg'
          alt='OSIRIS DREAMS'
          className='drop-shadow-sm p-3 pt-[65px] md:pt-3'
          style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
          width={500}
          height={200}
        />
      </div>

      <div className='max-w-5xl'>
        <TextBox display='block'>
          <Heading style='h1' text='Biography' />
          <Image
            src={'/osiris-dreams-anders-norrback-bornholm.jpg'}
            alt='{name}'
            className='float-left mr-5 mb-5'
            priority
            width={170}
            height={170}
          />
          <p>
            Under the name OSIRIS DREAMS Swede Anders Norrback Bornholm is
            creating cinematic synthwave inspired by the music heard in is
            childhood in the late 70s and early 80s. Growing up in that period
            in Sweden meant swearing a virtual blood oath to belong to one of
            two irreconcilable tribes: metalheads or synth fans. Anders, of
            course, was a... metalhead. But as years went by and childhood
            became adolescence in the late 80s and early 90s, electronic music
            started seeping into his life.
          </p>
          <blockquote className='italic m-4'>
            &quot;I was never into mainstream or pop music, but I also
            wasn&apos;t entrenched into the extremes of one genre. In junior
            high I would listen to the same tapes on my walkman over and over,
            alternating between Iron Maiden, Jean-Michel Jarre, Metallica and
            Depeche Mode&quot;
          </blockquote>
          <p>
            When creating electronic music, his focus has always been the
            empowering and cinematic. Drawing inspiration from artists such as
            Vangelis and John Carpenter, the goal is to make music that lets the
            listener feel like the star of an epic movie. Long intros,
            increasing build-ups and mesmerizing ostinatos are some of the core
            components in the compositions.
          </p>
          <blockquote className='italic m-4'>
            &quot;I remember walking to the subway in the dark after a late
            night at work, with the soundtrack from Tron Legacy playing on my
            headphones. That was the most epic commute I&apos;ve ever had. This
            is what I want to achieve.&quot;
          </blockquote>
          <p>
            The cinematic experience is closely tied to strong visuals.
            Increasingly the OSIRIS DREAMS songs come with more elaborate music
            videos, capturing the retrofuturistic nature of the music. A good
            example is the The Cybergenix Conspiracy EP, a soundtrack to a
            fictional 80s action/sci fi blockbuster where the music videos for
            each of the four songs tell the story of the movie.
          </p>
          <blockquote className='italic m-4'>
            &quot;The songs are all made to stand on their own, but I think the
            right music video can definitely take the experience of them a level
            further.&quot;
          </blockquote>
          <p>
            Anders lives in an 18th century house right outside of Stockholm
            with his wife, three kids and three dogs. A stark contrast to the
            technology-centered dystopian themes of his songs.
          </p>
        </TextBox>
      </div>
    </>
  )
}
