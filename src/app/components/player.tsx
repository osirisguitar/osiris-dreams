'use client'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export const Player = () => {
  return (
    <AudioPlayer
      autoPlay
      src='/OSIRIS DREAMS - The Cybergenix Conspiracy - 01 Biomechanoid Prototype.mp3'
      onPlay={(e) => console.log('onPlay')}
      // other props here
    />
  )
}
