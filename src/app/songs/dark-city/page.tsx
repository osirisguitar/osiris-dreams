'use client'
import { SongLandingPage } from '@/app/components/songLandingPage'
import { init } from '@socialgouv/matomo-next'
import { useEffect } from 'react'

export default function DarkCity() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  const services = {
    spotify: {
      url: 'https://open.spotify.com/album/007W3d15jLY6iZSrsFktU4',
      linkText: 'Stream on Spotify >',
    },
    bandCamp: {
      url: 'https://osirisdreams.bandcamp.com/track/dark-city',
      linkText: 'Buy or stream on BandCamp >',
    },
    appleMusic: {
      url: 'https://osirisdreams.bandcamp.com/track/dark-city',
      linkText: 'Buy or stream on Apple Music >',
    },
    youtube: {
      url: 'https://www.youtube.com/watch?v=4_MB1zDAck0',
      linkText: 'Stream on YouTube >',
    },
  }

  return (
    <>
      <SongLandingPage
        name='Dark City'
        coverImage='/dark-city-album-cover.png'
        services={services}
      ></SongLandingPage>
    </>
  )
}
