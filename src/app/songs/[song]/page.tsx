import { SongLandingPage } from '@/app/components/songLandingPage'
import { songsAndAlbums } from '@/app/data/songsAndAlbums'

export default async function Page({ params }: { params: { song: string } }) {
  const { song } = await params
  const services = songsAndAlbums[song]

  return (
    <>
      <SongLandingPage
        name={song}
        coverImage={`/${song}-album-cover.png`}
        services={services}
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
