import { Song } from '../common/types'
import Image from 'next/image'
import { TrackList } from './trackList'
import Link from 'next/link'

export const Album = ({
  songs,
  albumName,
  onPlay,
}: {
  songs: Song[]
  albumName: string
  onPlay?: (song: Song) => void
}) => {
  return (
    <div className='flex gap-4 border-solid p-3 border-2 border-green-400 w-full'>
      <Image
        src={'/' + albumName + '-album-cover.png'}
        alt='{name}'
        priority
        className='h-[300px] h-auto max-md:hidden'
        width={300}
        height={300}
      />
      <TrackList songs={songs} onPlay={onPlay} />
    </div>
  )
}
