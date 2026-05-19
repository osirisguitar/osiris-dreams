import Image from 'next/image'
import Link from 'next/link'
import { push } from '@socialgouv/matomo-next'
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
    <div className='flex flex-col text-center song-promo-card'>
      <div className='w-full p-2 lg:p-3'>
        <div className='relative'>
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
            </div>
          </Link>
          {song.fileName && (
            <>
              <div
                className='cursor-pointer flex absolute top-2 left-2 items-center bg-green-800/[.8] p-1 rounded-lg hover:border-2 hover:border-green-200 song-promo-preview-btn'
                onClick={() => onPlay && onPlay(song)}
              >
                <Image
                  src='/play-button.png'
                  alt='Play button'
                  className='object-cover object-center w-4 h-4 song-promo-play-icon'
                  priority
                  width={30}
                  height={30}
                />
                <div className='ml-1 uppercase font-pocketCalculator text-sm song-promo-preview-text'>
                  Preview
                </div>
              </div>
              <div className='absolute bottom-0.5 left-2 right-2 flex justify-center items-center bg-green-800/[.8] p-1 m-0.5 lg:m-1 rounded-lg song-promo-services'>
                {Object.keys(song.services).map((serviceName, index) => {
                  return (
                    index < 5 && (
                      <Link
                        key={serviceName}
                        className='p-[2px] flex-1 flex justify-center song-promo-service-link'
                        href={song.services[serviceName].url}
                        target='_blank'
                        onClick={() => {
                          push(['trackEvent', 'song', song.name, serviceName])
                        }}
                      >
                        <Image
                          alt={serviceName}
                          src={'/' + serviceName + '-icon.svg'}
                          width={30}
                          height={30}
                          className='w-full h-auto max-w-[20px] song-promo-service-icon'
                        />
                      </Link>
                    )
                  )
                })}
              </div>
            </>
          )}
        </div>
        <Link
          href={'/songs/' + song.id}
          className='text-xl uppercase text-green-500 font-pocketCalculator line leading-5 mt-1'
          target='_blank'
          rel='noopener noreferrer'
        >
          {song.name}
        </Link>
      </div>
    </div>
  )
}
