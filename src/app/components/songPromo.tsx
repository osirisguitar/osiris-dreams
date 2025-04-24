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
            <Image
              src={albumCover}
              alt='{name}'
              className='w-full object-cover object-center'
              priority
              width={300}
              height={300}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
