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
      return <Heading text={countdown} style='h1' />
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
      <Heading id='promo' text='Dark City - Release Date Nov 8' style='h2' />
      <div className='relative w-[90%] h-[400px] max-w-[600px] max-h-[300px] md:max-h-[400px] overflow-hidden'>
        <iframe
          src='https://www.youtube.com/embed/su3j1V_50Wc'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='absolute top-0 bottom-0 right-0 left-0 w-[100%] h-[100%]'
        ></iframe>
      </div>
      <SongPromo
        name='Dark City'
        albumCover='/dark-city-album-cover.png'
        link='https://fanlink.tv/wchp'
      ></SongPromo>

      <Heading id='music' text='Music' style='h1' />

      <Heading id='promo' text='The Cybergenix Conspiracy EP' style='h2' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-1 lg:grid-cols-2 lg:text-left'>
        <SomePromo
          logo='/youtube.svg'
          heading='YouTube'
          body='Watch the music videos for the full story'
          link='https://www.youtube.com/watch?v=lriT9Y8kqTg&list=PLQGymPL65les27MBwkLn1XTK2rz4U-fxE&index=1'
        />
        <SomePromo
          logo='/spotify.svg'
          heading='Spotify'
          body='Stream the EP'
          link='https://open.spotify.com/album/1U3Z3BgAIBxUi39Fo6R0A7?si=_1loYBKGTVyGZ6iXxeHCag'
        />
        <SomePromo
          logo='/bandcamp.svg'
          heading='Bandcamp'
          body='Stream or buy the songs for download'
          link='https://osirisdreams.bandcamp.com/album/the-cybergenix-conspiracy'
        />
        <SomePromo
          logo='/apple-music.svg'
          heading='Apple Music'
          body='Buy or stream the songs'
          link='https://music.apple.com/us/album/the-cybergenix-conspiracy-ep/1740412260'
        />
      </div>

      <div>
        <Countdown
          date={'2024-04-26T10:00:00Z'}
          renderer={renderer}
        ></Countdown>
      </div>

      <Heading id='singles' text='Singles' style='h2' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-1 lg:grid-cols-2 lg:text-left'>
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

      <Heading id='streaming-services' text='Streaming Services' style='h1' />
      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-3 lg:text-left'>
        <SomePromo
          logo='/bandcamp.svg'
          heading='Bandcamp'
          body='Buy the songs to stream and download (best for artists)'
          link='https://osirisdreams.bandcamp.com'
        />
        <SomePromo
          logo='/youtube.svg'
          heading='YouTube'
          body='Stream the songs or watch the music videos'
          link='https://youtube.com/@osiris-dreams'
        />
        <SomePromo
          logo='/spotify.svg'
          heading='Spotify'
          body='Stream the songs'
          link='https://open.spotify.com/artist/0WyMlVGSisImMQOxmsnsl4?si=KtNVUUfhRVqwPr-ZrXSjUg'
        />
        <SomePromo
          logo='/tiktok.svg'
          heading='TikTok'
          body='Use the songs in your videos (search for OSIRIS DREAMS sounds)'
          link='https://www.tiktok.com/@osiris.dreams'
        />
        <SomePromo
          logo='/instagram.svg'
          heading='Instagram'
          body='Use the songs in your reels (search for OSIRIS DREAMS in sounds)'
          link='https://instagram.com/osirisdreams'
        />
        <SomePromo
          logo='/apple-music.svg'
          heading='Apple Music'
          body='Buy or stream the songs'
          link='https://music.apple.com/us/artist/osiris-dreams/1656218279'
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
