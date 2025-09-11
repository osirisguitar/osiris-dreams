import Image from 'next/image'

export const SongPromo = ({
  albumCover,
  name,
  link,
  fileName,
  onPlay,
}: {
  albumCover: string
  name: string
  link: string
  fileName?: string
  onPlay?: (song: string, fileName: string) => void
}) => {
  const streamingClass = 'flex flex-col'

  return (
    <div className='flex flex-col text-center'>
      <div className='relative'>
        <div className='inset-0 w-full p-4'>
          <a
            href={link}
            className={streamingClass}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='relative top-0 left-0'>
              <Image
                src={albumCover}
                alt='{name}'
                className='w-full object-cover object-center relative top-0 left-0'
                priority
                width={300}
                height={300}
              />
              <Image
                src='/stream-now-banner.png'
                alt='Streaming now banner'
                className='w-full object-cover object-center absolute top-0 left-0'
                priority
                width={300}
                height={300}
              />
            </div>
          </a>
          {fileName && (
            <Image
              src='/play-button.png'
              alt='Play button'
              className='object-cover object-center absolute top-7 left-7'
              priority
              width={40}
              height={40}
              onClick={() => onPlay && onPlay(name, fileName)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
