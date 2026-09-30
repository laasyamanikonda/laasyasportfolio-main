import { createContext, useContext, useRef, useState } from 'react'

// This context lets any MusicCard announce "hey, I'm playing now" so that:
//  1. other MusicCards can pause themselves (only one song plays at a time)
//  2. the floating NowPlayingWidget knows what to show
const MusicContext = createContext(null)

export function MusicProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null) // { uniqueId, title, desc, img }
  const [isPlaying, setIsPlaying] = useState(false)
  const activeAudioRef = useRef(null) // the <audio> element currently playing, so we can pause it

  const playSong = (song, audioEl) => {
    if (activeAudioRef.current && activeAudioRef.current !== audioEl) {
      activeAudioRef.current.pause()
    }
    activeAudioRef.current = audioEl
    setCurrentSong(song)
    setIsPlaying(true)
  }

  const pauseSong = () => {
    setIsPlaying(false)
  }

  const stopSong = () => {
    if (activeAudioRef.current) activeAudioRef.current.pause()
    activeAudioRef.current = null
    setIsPlaying(false)
    setCurrentSong(null)
  }

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, playSong, pauseSong, stopSong }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within a MusicProvider')
  return ctx
}
