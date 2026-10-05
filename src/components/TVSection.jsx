import { useEffect, useRef, useState } from 'react'
import styles from '/src/components/TVSection.module.css'

// TV body colors cycle through the palette (variables are defined in index.css)
const TV_COLORS = ['var(--green)', 'var(--pink)', 'var(--yellow)', 'var(--aqua)', 'var(--lavender)']
const STATIC_MS = 350

function TV({ item, index }) {
  const [showInfo, setShowInfo] = useState(false)
  const [tuning, setTuning] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  // click = "change the channel": a quick burst of static, then flip the screen
  const changeChannel = () => {
    if (tuning) return
    setTuning(true)
    timer.current = setTimeout(() => {
      setShowInfo((v) => !v)
      setTuning(false)
    }, STATIC_MS)
  }

  const color = item.color || TV_COLORS[index % TV_COLORS.length]
  const channel = String(index + 1).padStart(2, '0')

  return (
    <div className={styles['tv-wrap']}>
      <div className={styles['antenna']} aria-hidden="true">
        <span />
        <span />
      </div>

      <div className={styles['tv']} style={{ backgroundColor: color }}>
        <button
          type="button"
          className={styles['screen']}
          onClick={changeChannel}
          aria-label={showInfo ? `Show poster for ${item.title}` : `Show details for ${item.title}`}
        >
          {showInfo ? (
            <div className={styles['info']}>
              <p className={styles['info-title']}>{item.title}</p>
              <p className={styles['info-year']}>{item.year}</p>
              <p className={styles['info-desc']}>{item.desc}</p>
            </div>
          ) : item.img ? (
            <>
              {/* blurred copy fills the screen behind the full, uncropped poster */}
              <img src={item.img} alt="" aria-hidden="true" className={styles['poster-bg']} />
              <img src={item.img} alt={item.title} className={styles['poster']} />
            </>
          ) : (
            <div className={styles['poster-fallback']}>{item.title}</div>
          )}
          <span className={styles['scanlines']} />
          {tuning && <span className={styles['static']} />}
        </button>

        <div className={styles['panel']} aria-hidden="true">
          <span className={styles['knob']} />
          <span className={styles['knob']} />
          <div className={styles['speaker']}>
            <i /><i /><i /><i />
          </div>
        </div>
      </div>

      <div className={styles['legs']} aria-hidden="true">
        <span />
        <span />
      </div>

      <p className={styles['channel']}>
        ch. {channel} · {item.kind === 'movie' ? 'film' : 'show'}
      </p>
    </div>
  )
}

export default function TVSection({ items }) {
  const [filter, setFilter] = useState('all')
  const visible = items.filter((i) => filter === 'all' || i.kind === filter)

  return (
    <div className={styles['wrapper']}>
      <div className={styles['tabs']} role="tablist">
        {[
          ['all', 'all channels'],
          ['show', 'tv shows'],
          ['movie', 'movies'],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={filter === value}
            className={`${styles['tab']} ${filter === value ? styles['tab-active'] : ''}`}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles['grid']}>
        {visible.map((item, i) => (
          <TV key={item.uniqueId} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
