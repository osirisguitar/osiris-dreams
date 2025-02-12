import { SongLandingPage } from '@/app/components/songLandingPage'
import { songsAndAlbums } from '@/app/data/songsAndAlbums'

export default async function Page({
  params,
}: {
  params: Promise<{ song: string }>
}) {
  const { song } = await params
  const services = songsAndAlbums[song]
  const activeServices = {
    spotify: services.spotify,
    applemusic: services.applemusic,
  }

  return (
    <>
      <SongLandingPage
        name={song}
        coverImage={`/${song}-album-cover.png`}
        services={activeServices}
      ></SongLandingPage>
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(songsAndAlbums).map((songname) => {
    return {
      song: songname,
    }
  })
}
