import Image from 'next/image'
import { StreamingIcon } from './streamingIcon'

export const SongPromo = ({
  albumCover,
  name,
  link,
}: {
  albumCover: string
  name: string
  link: string
}) => {
  const streamingClass =
    'group rounded-lg px-5 py-4 m-3 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'

  return (
    <a
      href={link}
      className={streamingClass}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex items-center mb-2 h-12'>
        <Image
          src={albumCover}
          alt='{name}'
          className=''
          priority
          width={70}
          height={70}
        />
        <div className='px-3 flex flex-col'>
          <h3 className={`text-l font-semibold`}>
            {name}{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              &gt;
            </span>
          </h3>
          <div className='flex flex-row'>
            <StreamingIcon name='Spotify' icon='/spotify-icon.svg' />
            <StreamingIcon name='Apple Music' icon='/apple-music-icon.svg' />
            <StreamingIcon name='YouTube' icon='/youtube-icon.svg' />
            <StreamingIcon name='Amazon Music' icon='/amazon-music-icon.svg' />
            <StreamingIcon
              name='YouTube Music'
              icon='/youtube-music-icon.svg'
            />
            <StreamingIcon name='Deezer' icon='/deezer-icon.svg' />
          </div>
        </div>
      </div>
    </a>
  )
}
