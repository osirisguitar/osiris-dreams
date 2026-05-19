'use client'
import { push } from '@socialgouv/matomo-next'
import { useContext, useEffect } from 'react'
import { songsAndAlbums } from '../../data/songsAndAlbums'
import { PlayerContext } from '../../components/playerContext'
import { Heading } from '../../components/heading'
import { Song } from '../../common/types'
import Link from 'next/link'
import Image from 'next/image'
import { TrackList } from '@/app/components/trackList'

export default function Alterverse() {
  const { setSong } = useContext(PlayerContext)

  const playSong = (song: Song) => {
    push(['trackEvent', 'preview', song.name])
    setSong(song)
  }

  return (
    <>
      <div className='lg:max-w-5xl max-w-[70%]  items-center justify-between font-mono text-sm lg:flex pt-5'>
        <Link href='/'>
          <Image
            src='/osiris-dreams-logo.svg'
            alt='OSIRIS DREAMS'
            className='drop-shadow-sm p-3 pt-[65px] md:pt-3'
            style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
            width={500}
            height={200}
          />
        </Link>
      </div>{' '}
      <Heading text='Alterverse' style='h1' />
      <div className='flex gap-4 pb-20'>
        <Image
          src={
            '/' +
            songsAndAlbums['age-of-anomalies'].albumCover +
            '-album-cover.png'
          }
          alt='{name}'
          priority
          className='h-[400px] max-lg:hidden'
          width={400}
          height={400}
        />

        <TrackList
          songs={Object.values(songsAndAlbums).filter(
            (song) => song.albumCover === 'alterverse',
          )}
          onPlay={playSong}
        />
      </div>
    </>
  )
}
