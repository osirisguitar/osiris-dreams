import Image from 'next/image'

export const SongPromo = ({
  albumCover,
  name,
  link,
}: {
  albumCover: string
  name: string
  link: string
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
        </div>
      </div>
    </div>
  )
}
