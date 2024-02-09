'use client'
import Image from 'next/image'
import { SomePromo } from './components/somePromo'
import { SongPromo } from './components/songPromo'
import { Heading } from './components/heading'
import { init } from '@socialgouv/matomo-next'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='lg:pt-4 flex-row hidden md:flex'>
        <a href='#promo'>
          <Heading text='News' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='#songs'>
          <Heading text='Songs' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='#streaming-services'>
          <Heading text='Streaming Services' style='h3' />
        </a>
        <span className='px-3'>|</span>
        <a href='#contact'>
          <Heading text='Contact' style='h3' />
        </a>
      </div>
      <div className='max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:pt-20'>
        <Image
          src='/osiris-dreams-logo.svg'
          alt='OSIRIS DREAMS'
          className='drop-shadow-sm p-3'
          style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
          width={500}
          height={350}
          priority
        />
      </div>
      <div
        id='promo'
        className='w-4/5 h-[calc(100vh_*_0.4)] mb-20 max-w-[600px]'
      >
        <iframe
          width='100%'
          height='100%'
          className='mb-20 mt-10'
          src='https://www.youtube.com/embed/vr4oNy64hXQ?si=N4pJLQJNrJBSY2Pn'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen={true}
        ></iframe>
      </div>

      <Heading id='songs' text='Songs' style='h2' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-1 lg:grid-cols-2 lg:text-left'>
        <SongPromo
          name='Driving Alone'
          albumCover='/driving-alone.png'
          link='https://songwhip.com/osirisdreams/driving-alone'
        ></SongPromo>
        <SongPromo
          name='Skiing on the Moon'
          albumCover='/skiing-on-the-moon.png'
          link='https://songwhip.com/osirisdreams/skiing-on-the-moon'
        ></SongPromo>
        <SongPromo
          name='3 AM 6502 Debugging'
          albumCover='/3-am-6502-debugging.jpg'
          link='https://songwhip.com/osirisdreams/3-am-6502-debugging'
        ></SongPromo>
        <SongPromo
          name='Light Cycle Arena'
          albumCover='/light-cycle-arena.png'
          link='https://songwhip.com/osirisdreams/light-cycle-arena'
        ></SongPromo>
        <SongPromo
          name='Hyperspace Sunday Cruise'
          albumCover='/hyperspace-sunday-cruise.png'
          link='https://songwhip.com/osirisdreams/hyperspace-sunday-cruise'
        ></SongPromo>
      </div>

      <Heading id='streaming-services' text='Streaming Services' style='h2' />
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
      <Heading id='contact' text='Contact' style='h2' />
      <div className='font-mono mt-8 mb-10'>
        Email:{' '}
        <a href='mailto:osiris@osirisdreams.com'>osiris@osirisdreams.com</a>
        <br />
        Mastodon:{' '}
        <a rel='me' href='https://mastodon.nu/@osiris'>
          @osiris@mastodon.nu
        </a>
      </div>
    </main>
  )
}
