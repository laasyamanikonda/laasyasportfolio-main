import { useEffect, useRef, useState } from 'react'
import styles from '/src/components/MusicCard.module.css'
import { useMusic } from '/src/context/MusicContext'

export default function MusicCard({ music }) {
  const audioRef = useRef(null)
  const [isThisPlaying, setIsThisPlaying] = useState(false)
  const { playSong, currentSong } = useMusic()

  // if a different card takes over playback, make sure this one visually stops too
  useEffect(() => {
    if (currentSong?.uniqueId !== music.uniqueId && audioRef.current) {
      audioRef.current.pause()
    }
  }, [currentSong, music.uniqueId])

  const handleToggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play()
      playSong(music, audio)
      setIsThisPlaying(true)
    } else {
      audio.pause()
      setIsThisPlaying(false)
    }
  }

  return (
    <div className={styles['main-container']}>
      <div
        className={`${styles['art-wrapper']} ${isThisPlaying ? styles['playing'] : ''}`}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        aria-label={isThisPlaying ? `Pause ${music.title}` : `Play ${music.title}`}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle()}
      >
        <img src={music.img} alt={music.title} className={styles['image']} />

        <div className={styles['overlay']}>
          <span className={styles['play-icon']}>{isThisPlaying ? '❚❚' : '▶'}</span>
        </div>

        {isThisPlaying && (
          <div className={styles['bars']}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      <h3 className={styles['title']}>{music.title}</h3>
      <p className={styles['desc']}>{music.desc}</p>

      {/* Hidden audio element - controlled via the art click above */}
      <audio
        ref={audioRef}
        onEnded={() => setIsThisPlaying(false)}
        onPause={() => setIsThisPlaying(false)}
      >
        <source src={music.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
