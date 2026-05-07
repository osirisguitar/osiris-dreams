import Link from 'next/link'
import { Song } from '../common/types'
import { push } from '@socialgouv/matomo-next'
import Image from 'next/image'

export const TrackList = ({
  songs,
  onPlay,
}: {
  songs: Song[]
  onPlay?: (song: Song) => void
}) => {
  return (
    <table className='border-separate border-spacing-1 text-2xl'>
      <tbody>
        {songs.map((song: Song) => {
          return (
            <tr key={song.id}>
              <td>
                <div
                  onClick={() => onPlay && onPlay(song)}
                  className='cursor-pointer '
                >
                  <Image
                    src='/play-button.png'
                    alt='Play button'
                    className='object-cover object-center'
                    priority
                    width={35}
                    height={35}
                  />
                </div>
              </td>
              <td className='font-[pocket-calculator] uppercase text-green-300'>
                {song.name}
              </td>
              {Object.keys(song.services).map((serviceName, index) => {
                return (
                  <td
                    className={index > 1 ? 'max-sm:hidden' : ''}
                    key={serviceName}
                  >
                    <Link
                      href={song.services[serviceName].url}
                      target='_blank'
                      onClick={() => {
                        push(['trackEvent', 'song', song.name, serviceName])
                      }}
                    >
                      <img
                        src={'/' + serviceName + '-icon.svg'}
                        height='35'
                        width='35'
                      />
                    </Link>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
