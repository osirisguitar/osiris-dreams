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
          width={400}
          height={200}
          priority
        />
      </div>

      <div className='w-4/5 h-[calc(100vh_*_0.4)] mb-20 max-w-[600px]'>
        <iframe
          width='100%'
          height='100%'
          className='mb-20 mt-10'
          src='https://www.youtube.com/embed/vr4oNy64hXQ?si=N4pJLQJNrJBSY2Pn'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-3 lg:text-left'>
        <SomePromo
          logo='/bandcamp.svg'
          heading='Bandcamp'
          body='Buy the songs to stream and download (best for artists)'
          link='https://osirisdreams.bandcamp.com'
        />
        <SomePromo
          logo='/youtube.svg'
          heading='YouTube'
          body='Stream the songs or watch the music videos'
          link='https://youtube.com/@osiris-dreams'
        />
        <SomePromo
          logo='/spotify.svg'
          heading='Spotify'
          body='Stream the songs'
          link='https://open.spotify.com/artist/0WyMlVGSisImMQOxmsnsl4?si=KtNVUUfhRVqwPr-ZrXSjUg'
        />
        <SomePromo
          logo='/tiktok.svg'
          heading='TikTok'
          body='Use the songs in your videos (search for OSIRIS DREAMS sounds)'
          link='https://www.tiktok.com/@osiris.dreams'
        />
        <SomePromo
          logo='/instagram.svg'
          heading='Instagram'
          body='Use the songs in your reels (search for OSIRIS DREAMS in sounds)'
          link='https://instagram.com/osirisdreams'
        />
        <SomePromo
          logo='/apple-music.svg'
          heading='Apple Music'
          body='Buy or stream the songs'
          link='https://music.apple.com/us/artist/osiris-dreams/1656218279'
        />
      </div>
      <div className='font-mono mt-8'>
        Contact:{' '}
        <a href='mailto:osiris@osirisdreams.com'>osiris@osirisdreams.com</a>
        <br />
        Mastodon:{' '}
        <a rel='me' href='https://mastodon.nu/@osiris'>
          @osiris@mastodon.nu
        </a>
      </div>
    </main>
  )
}
