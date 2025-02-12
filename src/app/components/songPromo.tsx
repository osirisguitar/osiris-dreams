import Image from 'next/image'
import { StreamingIcon } from './streamingIcon'
import { push } from '@socialgouv/matomo-next'

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
              width={1000}
              height={1000}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
