import Image from 'next/image'
import { SomePromo } from './components/somePromo'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between lg:p-24'>
      <div className='max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <Image
          src='/osiris-dreams-logo.svg'
          alt='OSIRIS DREAMS'
          className='drop-shadow-sm p-3'
          style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
          width={800}
          height={200}
          priority
        />
      </div>

      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
        <SomePromo
          logo='/bandcamp.svg'
          heading='Bandcamp'
          body='Buy the songs to stream and download (most money to the artists).'
          link='https://osirisdreams.bandcamp.com'
        />
        <SomePromo
          logo='/youtube.svg'
          heading='YouTube'
          body='Stream the songs or watch the music videos.'
          link='https://youtube.com/@osiris-dreams'
        />
        <SomePromo
          logo='/spotify.svg'
          heading='Spotify'
          body='Stream the songs.'
          link='https://open.spotify.com/artist/0WyMlVGSisImMQOxmsnsl4?si=KtNVUUfhRVqwPr-ZrXSjUg'
        />
        <SomePromo
          logo='/tiktok.svg'
          heading='TikTok'
          body='Use the songs in your videos (search for OSIRIS DREAMS in sounds).'
          link='https://www.tiktok.com/@osiris.dreams'
        />
        <SomePromo
          logo='/instagram.svg'
          heading='Instagram'
          body='Use the songs in your reels (search for OSIRIS DREAMS in sounds).'
          link='https://instagram.com'
        />
        <SomePromo
          logo='/apple-music.svg'
          heading='Apple Music'
          body='Buy or stream the songs.'
          link='https://music.apple.com/us/artist/osiris-dreams/1656218279'
        />
      </div>
    </main>
  )
}
