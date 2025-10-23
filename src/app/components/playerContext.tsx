import React, { Dispatch, SetStateAction } from 'react'
import { Song } from '../common/types'

export const PlayerContext = React.createContext<{
  song: Song | undefined
  setSong: Dispatch<SetStateAction<Song | undefined>>
}>({ song: undefined, setSong: () => {} })
