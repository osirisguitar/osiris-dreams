'use client'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Song } from '../common/types'
import { useEffect, useState } from 'react'

export const Player = ({
  play,
  song,
  playlist,
}: {
  play: boolean
  song: Song
  playlist: Song[]
}) => {
  const [currentSong, setCurrentSong] = useState<Song>(song)

  useEffect(() => {
    setCurrentSong(song)
  }, [song])

  const playNext = () => {
    const currentlyPlayingIndex =
      playlist.findIndex((song) => {
        return song.id === currentSong?.id
      }) + 1

    let nextSongIndex =
      currentlyPlayingIndex < playlist.length ? currentlyPlayingIndex : 0

    setCurrentSong(playlist[nextSongIndex])
  }

  const playPrevious = () => {
    const currentlyPlayingIndex =
      playlist.findIndex((song) => {
        return song.id === currentSong?.id
      }) - 1

    let nextSongIndex =
      currentlyPlayingIndex >= 0 ? currentlyPlayingIndex : playlist.length - 1

    setCurrentSong(playlist[nextSongIndex])
  }

  return (
    play && (
      <>
        <style>
          {`
.rhap_container {
  background-color: #000;
  text-transform: uppercase;
  font-family: pocket-calculator;
  font-size: 1.5em;
}
  
.rhap_header, .rhap_current-time, .rhap_total-time {
  color: #0fe379
}

.rhap_main-controls-button {
  color: #0fe379
}
            `}
        </style>
        <AudioPlayer
          autoPlay
          src={
            'https://files.osirisdreams.com/' + currentSong?.fileName + '.mp3'
          }
          header={currentSong?.name}
          onClickNext={playNext}
          onClickPrevious={playPrevious}
          onEnded={playNext}
          showSkipControls={true}
        />
      </>
    )
  )
}
