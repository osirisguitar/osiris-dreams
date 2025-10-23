'use client'
import { Navigation } from './navigation'
import { Signup } from './signup'
import { Player } from './player'
import { useMemo, useState } from 'react'
import { PlayerContext } from './playerContext'
import { songsAndAlbums } from '../data/songsAndAlbums'
import { Song } from '../common/types'

export const MainLayout = ({
  children,
  path,
}: {
  children: React.ReactNode
  path: string | null
}) => {
  const [song, setSong] = useState<Song | undefined>()

  const value = useMemo(() => {
    return {
      song,
      setSong,
    }
  }, [song])

  return (
    <PlayerContext.Provider value={value}>
      <main className='flex min-h-screen flex-col items-center'>
        {<Navigation />}
        <div className='mt-10' />
        {children}
        {!path?.startsWith('/songs/') && !path?.startsWith('/campaign') && (
          <>
            <div className='mb-[80px]'>
              <Signup />
            </div>
            <div className='fixed bottom-0 w-full'>
              {song && (
                <Player
                  play={song !== undefined}
                  song={song}
                  playlist={Object.values(songsAndAlbums)}
                />
              )}
            </div>
          </>
        )}
      </main>
    </PlayerContext.Provider>
  )
}
