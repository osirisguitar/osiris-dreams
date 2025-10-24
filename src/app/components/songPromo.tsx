import Image from 'next/image'
import Link from 'next/link'
import { Song } from '../common/types'

export const SongPromo = ({
  song,
  onPlay,
}: {
  song: Song
  onPlay?: (song: Song) => void
}) => {
  const streamingClass = 'flex flex-col'

  return (
    <div className='flex flex-col text-center'>
      <div className='relative'>
        <div className='inset-0 w-full p-4'>
          <Link
            href={'/songs/' + song.id}
            className={streamingClass}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='relative top-0 left-0'>
              <Image
                src={'/' + (song.albumCover ?? song.id) + '-album-cover.png'}
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
          </Link>
          {song.fileName && (
            <div
              className='cursor-pointer flex absolute top-7 left-7 items-center bg-green-800/[.8] p-2 rounded-lg hover:border-2 hover:border-green-200'
              onClick={() => onPlay && onPlay(song)}
            >
              <Image
                src='/play-button.png'
                alt='Play button'
                className='object-cover object-center'
                priority
                width={40}
                height={40}
              />
              <div className='ml-3 uppercase font-pocketCalculator text-2xl'>
                Preview
              </div>
            </div>
          )}
          <div className='text-xl uppercase text-green-500 font-pocketCalculator'>
            {song.name}
          </div>
        </div>
      </div>
    </div>
  )
}
