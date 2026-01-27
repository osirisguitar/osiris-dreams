'use client'
import { init, push } from '@socialgouv/matomo-next'
import { useContext, useEffect } from 'react'
import { songsAndAlbums } from '../../data/songsAndAlbums'
import { SongPromo } from '../../components/songPromo'
import { PlayerContext } from '../../components/playerContext'
import { Heading } from '../../components/heading'
import { Song } from '../../common/types'
import Link from 'next/link'
import Image from 'next/image'

export default function Alterverse() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  const { setSong } = useContext(PlayerContext)

  const songIds = [
    'age-of-anomalies',
    'ghost-pod',
    'hyper-probe',
    'interrupt-sequence',
    'requiem-pro-phasmata',
    'smokescreen',
    'revelation-protocol',
    'disassembly',
    'vortex-beach',
    'ghost-testimony',
  ]

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
      <Heading text='Songs' style='h1' />
      <div className='mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left'>
        {songIds.map((songId) => {
          return (
            <SongPromo
              song={songsAndAlbums[songId]}
              onPlay={playSong}
              key={songsAndAlbums[songId].name}
            ></SongPromo>
          )
        })}
      </div>
    </>
  )
}
