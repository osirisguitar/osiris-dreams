'use client'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export const Player = ({ play, song }: { play: boolean; song: string }) => {
  return (
    play && (
      <>
        <style>
          {`.rhap_container {
              background-color: #000;
            }
            
            .rhap_header, .rhap_current-time, .rhap_total-time {
              color: #0fe379
            }
            `}
        </style>
        <AudioPlayer
          autoPlay
          src={'https://files.osirisdreams.com/' + song + '.mp3'}
          header={song}
        />
      </>
    )
  )
}
