'use client'
import Image from 'next/image'
import { SomePromo } from './components/somePromo'
import { SongPromo } from './components/songPromo'
import { Heading } from './components/heading'
import { init } from '@socialgouv/matomo-next'
import { useContext, useEffect, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { songsAndAlbums } from './data/songsAndAlbums'
import { PlayerContext } from './components/playerContext'
import { push } from '@socialgouv/matomo-next'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  const { song, setSong } = useContext(PlayerContext)

  const playSong = (song: string, fileName: string) => {
    push(['trackEvent', 'preview', song])
    setSong(fileName)
  }

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
        <Link href='/'>
          <Image
            src='/osiris-dreams-logo.png'
            alt='OSIRIS DREAMS'
            className='drop-shadow-sm p-3  pt-[65px] md:pt-3'
            style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
            width={500}
            height={350}
            priority
          />
        </Link>
      </div>
      <Heading id='news' text='Latest Release' style='h1' />
      <div className='mb-4 text-center w-[300px] h-[300px]'>
        <SongPromo
          name='the-encounter'
          albumCover='/the-encounter-album-cover.png'
          link='/songs/the-encounter'
          fileName={songsAndAlbums['the-encounter'].fileName}
          onPlay={playSong}
        ></SongPromo>
      </div>

      <Heading id='songs-albums' text='Songs and Albums' style='h1' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left'>
        {songsAndAlbums &&
          Object.keys(songsAndAlbums)
            .slice(1)
            .map((songName) => {
              return (
                <SongPromo
                  key={songName}
                  name={songName}
                  albumCover={`/${songName}-album-cover.png`}
                  link={`/songs/${songName}`}
                  fileName={songsAndAlbums[songName].fileName}
                  onPlay={playSong}
                ></SongPromo>
              )
            })}
      </div>

      <Heading id='stream' text='Streaming Services' style='h1' />

      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left'>
        <SomePromo
          logo='/youtube-icon.svg'
          heading='YouTube'
          body='Songs with music videos'
          link='https://www.youtube.com/watch?v=lriT9Y8kqTg&list=PLQGymPL65les27MBwkLn1XTK2rz4U-fxE&index=1'
        />
        <SomePromo
          logo='/spotify-icon.svg'
          heading='Spotify'
          body='Song streaming'
          link='https://open.spotify.com/album/1U3Z3BgAIBxUi39Fo6R0A7?si=_1loYBKGTVyGZ6iXxeHCag'
        />
        <SomePromo
          logo='/bandcamp-icon.svg'
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
          logo='/bandcamp-icon.svg'
          heading='Bandcamp'
          body='Buy DRM-free songs for download'
          link='https://osirisdreams.bandcamp.com/'
        />
        <SomePromo
          logo='/applemusic-icon.svg'
          heading='Apple Music'
          body='Buy songs'
          link='https://music.apple.com/artist/osiris-dreams/1656218279?app=itunes'
        />
      </div>

      <Heading id='social-media' text='Social Media' style='h1' />
      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-4 lg:text-left'>
        <SomePromo
          logo='/tiktok-icon.svg'
          heading='TikTok'
          body='You can use my songs in your videos'
          link='https://www.tiktok.com/@osiris.dreams'
        />
        <SomePromo
          logo='/instagram-icon.svg'
          heading='Instagram'
          body='You can use my songs in your videos'
          link='https://instagram.com/osirisdreams'
        />
        <SomePromo
          logo='/instagram-icon.svg'
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
        <Link href='mailto:osiris@osirisdreams.com'>
          osiris@osirisdreams.com
        </Link>
        <br />
        Mastodon:{' '}
        <Link rel='me' target='_blank' href='https://mastodon.nu/@osiris'>
          @osiris@mastodon.nu
        </Link>
      </div>
    </>
  )
}
