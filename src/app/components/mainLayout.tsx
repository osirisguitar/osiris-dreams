'use client'
import { Navigation } from './navigation'
import { Signup } from './signup'
import { Player } from './player'
import { useEffect, useMemo, useState } from 'react'
import { PlayerContext } from './playerContext'
import { songsAndAlbums } from '../data/songsAndAlbums'
import { Song } from '../common/types'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [song, setSong] = useState<Song | undefined>()
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState<string>(pathname)

  const value = useMemo(() => {
    return {
      song,
      setSong,
    }
  }, [song])

  useEffect(() => {
    console.log(pathname)
    setCurrentPath(pathname)
  }, [pathname])

  return (
    <body className={inter.className}>
      {!currentPath?.startsWith('/songs/') &&
        !currentPath?.startsWith('/campaign') && (
          <video
            playsInline
            autoPlay
            muted
            loop
            id='bgvid'
            className='-z-10 saturate-50 opacity-20'
          >
            <source src='background2.mp4' type='video/mp4' />
          </video>
        )}
      <PlayerContext.Provider value={value}>
        <main className='flex min-h-screen flex-col items-center'>
          {<Navigation />}
          <div className='mt-10' />
          {children}
          {!currentPath?.startsWith('/songs/') &&
            !currentPath?.startsWith('/campaign') && (
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
    </body>
  )
}
