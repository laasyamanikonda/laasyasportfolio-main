import styles from './NowPlayingWidget.module.css'
import { useMusic } from '../context/MusicContext'

export default function NowPlayingWidget() {
  const { currentSong, isPlaying, stopSong } = useMusic()

  if (!currentSong || !isPlaying) return null

  return (
    <div className={styles['widget']}>
      <div className={styles['bars']}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles['info']}>
        <p className={styles['label']}>now playing</p>
        <p className={styles['title']}>{currentSong.title}</p>
      </div>

      <button className={styles['close']} onClick={stopSong} aria-label="Stop playback">
        ✕
      </button>
    </div>
  )
}
