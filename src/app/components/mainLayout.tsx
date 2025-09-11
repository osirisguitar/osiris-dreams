'use client'
import { Navigation } from './navigation'
import { Signup } from './signup'
import { Player } from './player'
import { useMemo, useState } from 'react'
import { PlayerContext } from './playerContext'

export const MainLayout = ({
  children,
  path,
}: {
  children: React.ReactNode
  path: string | null
}) => {
  /*const playSong = (song: string) => {
    setPlay(true)
    setSong(song)
  }*/

  const [song, setSong] = useState<string>('')

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
        {children}
        {!path?.startsWith('/songs') && !path?.startsWith('/campaign') && (
          <>
            <div className='mb-10'>
              <Signup />
            </div>
            <div className='fixed bottom-0 w-full'>
              <Player play={song !== ''} song={song} />
            </div>
          </>
        )}
      </main>
    </PlayerContext.Provider>
  )
}
