import { SongLandingPage } from '@/app/components/songLandingPage'
import { songsAndAlbums } from '@/app/data/songsAndAlbums'
import { Metadata } from 'next'

export default async function Page({
  params,
}: {
  params: Promise<{ song: string }>
}) {
  const { song } = await params

  return (
    <>
      <SongLandingPage song={songsAndAlbums[song]}></SongLandingPage>
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
