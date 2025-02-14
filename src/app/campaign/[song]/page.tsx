import { SongLandingPage } from '@/app/components/songLandingPage'
import { songsAndAlbums } from '@/app/data/songsAndAlbums'
import { Metadata } from 'next'

export default async function Page({
  params,
}: {
  params: Promise<{ song: string }>
}) {
  const { song } = await params
  const campaignSong = {
    id: songsAndAlbums[song].id,
    name: songsAndAlbums[song].name,
    services: {
      spotify: songsAndAlbums[song].services.spotify,
      applemusic: songsAndAlbums[song].services.applemusic,
    },
  }

  return (
    <>
      <SongLandingPage song={campaignSong}></SongLandingPage>
    </>
  )
}

type Props = {
  params: Promise<{ song: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const song = (await params).song

  return {
    title: `OSIRIS DREAMS - ${songsAndAlbums[song].name}`,
    openGraph: {
      title: songsAndAlbums[song].name,
      siteName: 'OSIRIS DREAMS',
      images: [`/${song}-album-cover.png`],
      description: `Stream or buy ${songsAndAlbums[song].name} by OSIRIS DREAMS`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(songsAndAlbums).map((songname) => {
    return {
      song: songname,
    }
  })
}
