'use client'
import { init, push } from '@socialgouv/matomo-next'
import { useContext, useEffect } from 'react'
import { songsAndAlbums } from '../data/songsAndAlbums'
import { SongPromo } from '../components/songPromo'
import { PlayerContext } from '../components/playerContext'
import { Heading } from '../components/heading'
import { Song } from '../common/types'
import Link from 'next/link'
import Image from 'next/image'
import { Album } from '../components/album'

export default function Songs() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  const { setSong } = useContext(PlayerContext)

  const playSong = (song: Song) => {
    push(['trackEvent', 'preview', song.name])
    setSong(song)
  }

  return (
    <div className='max-w-[90%] lg:max-w-[80%] xl:max-w-[90%] items-center justify-between flex pt-5 lg:max-w-5xl flex-col'>
      <div className='lg:max-w-5xl items-center justify-between font-mono text-sm flex pt-5'>
        <Link href='/'>
          <Image
            src='/osiris-dreams-logo.svg'
            alt='OSIRIS DREAMS'
            className='drop-shadow-sm p-3 pt-[65px] md:pt-3 max-w-[200px] md:max-w-full'
            style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
            width={500}
            height={200}
            loading='eager'
          />
        </Link>
      </div>{' '}
      <Heading text='Albums' style='h1' />
      <Heading text='Alterverse' style='h2' css='pt-5' />
      <Album
        songs={Object.values(songsAndAlbums).filter(
          (song) => song.albumCover === 'alterverse',
        )}
        albumName='alterverse'
        onPlay={playSong}
      ></Album>
      <Heading text='The Cybergenix Conspiracy' style='h2' css='pt-5' />
      <Album
        songs={Object.values(songsAndAlbums).filter(
          (song) => song.albumCover === 'the-cybergenix-conspiracy',
        )}
        albumName='the-cybergenix-conspiracy'
        onPlay={playSong}
      ></Album>
      <Heading text='Singles' style='h1' css='pt-7' />
      <div className='mb-4 grid text-center lg:max-w-5xl w-full lg:mb-0 grid-cols-2 md:grid-cols-3 lg:text-left'>
        {Object.values(songsAndAlbums)
          .filter((song) => !song.albumCover)
          .map((song) => (
            <SongPromo key={song.id} song={song} onPlay={playSong}></SongPromo>
          ))}
      </div>
    </div>
  )
}
