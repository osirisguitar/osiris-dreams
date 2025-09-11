import React, { Dispatch, SetStateAction } from 'react'

export const PlayerContext = React.createContext<{
  song: string
  setSong: Dispatch<SetStateAction<string>>
}>({ song: '', setSong: () => {} })
