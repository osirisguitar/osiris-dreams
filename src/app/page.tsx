'use client'
import Image from 'next/image'
import { SomePromo } from './components/somePromo'
import { SongPromo } from './components/songPromo'
import { Heading } from './components/heading'
import { init } from '@socialgouv/matomo-next'
import { useEffect } from 'react'
import Countdown, { zeroPad } from 'react-countdown'

export default function Home() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }) => {
    if (completed) {
      // Render a completed state
      return <></>
    } else {
      // Render a countdown
      const countdown = `${days} : ${zeroPad(hours)} : ${zeroPad(
        minutes
      )} : ${zeroPad(seconds)}`
      return <Heading text={countdown} style='h2' />
    }
  }

  return (
    <>
      <div className='max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:pt-5'>
        <a href='/'>
          <Image
            src='/osiris-dreams-logo.svg'
            alt='OSIRIS DREAMS'
            className='drop-shadow-sm p-3  pt-[65px] md:pt-3'
            style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
            width={500}
            height={350}
            priority
          />
        </a>
      </div>
      <Heading id='news' text='The Encounter - February 14th' style='h1' />
      <div className='mb-4 text-center max-w-[300px]'>
        <SongPromo
          name='The Encounter'
          albumCover='/the-encounter-album-cover.png'
          link='https://distrokid.com/hyperfollow/osirisdreams/the-encounter'
        ></SongPromo>
      </div>
      <div>
        <Countdown
          date={'2025-02-14T10:00:00Z'}
          renderer={renderer}
        ></Countdown>
      </div>

      <Heading id='songs-albums' text='Songs and Albums' style='h1' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left'>
        <SongPromo
          name='Dark City'
          albumCover='/dark-city-album-cover.png'
          link='https://songwhip.com/osirisdreams/dark-city'
        ></SongPromo>
        <SongPromo
          name='Hyper-Dimensional Racing'
          albumCover='/hyper-dimensional-racing-album-cover.png'
          link='https://songwhip.com/osirisdreams/hyperdimensional-racing'
        ></SongPromo>
        <SongPromo
          name='The Cybergenix Conspiracy EP'
          albumCover='/the-cybergenix-conspiracy-album-cover.png'
          link='https://songwhip.com/osirisdreams/the-cybergenix-conspiracy'
        ></SongPromo>
        <SongPromo
          name='Driving Alone'
          albumCover='/driving-alone-album-cover.png'
          link='https://songwhip.com/osirisdreams/driving-alone'
        ></SongPromo>
        <SongPromo
          name='Skiing on the Moon'
          albumCover='/skiing-on-the-moon-album-cover.png'
          link='https://songwhip.com/osirisdreams/skiing-on-the-moon'
        ></SongPromo>
        <SongPromo
          name='3 AM 6502 Debugging'
          albumCover='/3-am-6502-debugging-album-cover.png'
          link='https://songwhip.com/osirisdreams/3-am-6502-debugging'
        ></SongPromo>
        <SongPromo
          name='Light Cycle Arena'
          albumCover='/light-cycle-arena-album-cover.png'
          link='https://songwhip.com/osirisdreams/light-cycle-arena'
        ></SongPromo>
        <SongPromo
          name='Hyperspace Sunday Cruise'
          albumCover='/hyperspace-sunday-cruise-album-cover.png'
          link='https://songwhip.com/osirisdreams/hyperspace-sunday-cruise'
        ></SongPromo>
      </div>

      <Heading id='stream' text='Streaming Services' style='h1' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left'>
        <SomePromo
          logo='/youtube.svg'
          heading='YouTube'
          body='Songs with music videos'
          link='https://www.youtube.com/watch?v=lriT9Y8kqTg&list=PLQGymPL65les27MBwkLn1XTK2rz4U-fxE&index=1'
        />
        <SomePromo
          logo='/spotify.svg'
          heading='Spotify'
          body='Song streaming'
          link='https://open.spotify.com/album/1U3Z3BgAIBxUi39Fo6R0A7?si=_1loYBKGTVyGZ6iXxeHCag'
        />
        <SomePromo
          logo='/bandcamp.svg'
          heading='Bandcamp'
          body='Free song streaming'
          link='https://osirisdreams.bandcamp.com/'
        />
        <SomePromo
          logo='/funkwhale-icon.svg'
          heading='Open Audio'
          body='Free song streaming'
          link='https://open.audio/channels/osirisdreams'
        />
      </div>

      <Heading id='buy' text='Music Stores' style='h1' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left'>
        <SomePromo
          logo='/bandcamp.svg'
          heading='Bandcamp'
          body='Buy DRM-free songs for download'
          link='https://osirisdreams.bandcamp.com/album/the-cybergenix-conspiracy'
        />
        <SomePromo
          logo='/apple-music.svg'
          heading='Apple Music'
          body='Buy songs'
          link='https://open.audio/channels/osirisdreams'
        />
      </div>

      <Heading id='social-media' text='Social Media' style='h1' />
      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-4 lg:text-left'>
        <SomePromo
          logo='/tiktok.svg'
          heading='TikTok'
          body='You can use my songs in your videos'
          link='https://www.tiktok.com/@osiris.dreams'
        />
        <SomePromo
          logo='/instagram.svg'
          heading='Instagram'
          body='You can use my songs in your videos'
          link='https://instagram.com/osirisdreams'
        />
        <SomePromo
          logo='/instagram.svg'
          heading='Threads'
          body="Let's talk!"
          link='https://threads.net/osirisdreams'
        />
        <SomePromo
          logo='/mastodon-icon.svg'
          heading='Threads'
          body="Let's talk!"
          link='https://mastodon.nu/@osiris'
        />
      </div>

      <Heading id='contact' text='Contact' style='h1' />
      <div className='font-mono mt-3 mb-10'>
        Email:{' '}
        <a href='mailto:osiris@osirisdreams.com'>osiris@osirisdreams.com</a>
        <br />
        Mastodon:{' '}
        <a rel='me' href='https://mastodon.nu/@osiris'>
          @osiris@mastodon.nu
        </a>
      </div>
    </>
  )
}
