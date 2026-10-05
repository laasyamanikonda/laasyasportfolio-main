import { useState } from 'react'
import styles from '/src/components/BookShelf.module.css'

// spine colors cycle if you don't give a book its own `color` (palette only)
const FALLBACK_COLORS = ['#ffb7ce', '#c6e99f', '#ffee8c', '#b8e', '#b3ebf2']
// text color that stays readable on each spine: yellow on lavender, lavender on the rest
const textFor = (bg) => (bg === '#b8e' ? '#ffee8c' : '#b8e')
// little things that sit at the end of each shelf
const DECOR = ['🪴', '🕯️', '☕', '🌼']
const BOOKS_PER_SHELF = 4

// small deterministic "random" so heights/widths look hand-placed but never
// change between renders
const spineSize = (i) => ({
  height: 150 + ((i * 37) % 55),
  width: 34 + ((i * 17) % 22),
})

function chunk(list, size) {
  const rows = []
  for (let i = 0; i < list.length; i += size) rows.push(list.slice(i, i + size))
  return rows
}

export default function BookShelf({ books }) {
  const [selectedId, setSelectedId] = useState(null)
  const selected = books.find((b) => b.uniqueId === selectedId)
  const rows = chunk(books, BOOKS_PER_SHELF)

  const toggle = (id) => setSelectedId((cur) => (cur === id ? null : id))

  const selectedBg = selected
    ? selected.color || FALLBACK_COLORS[books.indexOf(selected) % FALLBACK_COLORS.length]
    : null

  return (
    <div className={styles['wrapper']}>
      <div className={styles['bookcase']}>
        {rows.map((row, r) => (
          <div className={styles['shelf']} key={r}>
            <div className={styles['books']}>
              {row.map((book, c) => {
                const i = r * BOOKS_PER_SHELF + c
                const { height, width } = spineSize(i)
                const isOpen = book.uniqueId === selectedId
                const bg = book.color || FALLBACK_COLORS[i % FALLBACK_COLORS.length]
                return (
                  <button
                    key={book.uniqueId}
                    type="button"
                    className={`${styles['spine']} ${isOpen ? styles['pulled'] : ''}`}
                    style={{
                      height,
                      width,
                      backgroundColor: bg,
                      color: book.textColor || textFor(bg),
                    }}
                    onClick={() => toggle(book.uniqueId)}
                    aria-pressed={isOpen}
                    aria-label={`${book.title} by ${book.author}`}
                  >
                    <span className={styles['band']} />
                    <span className={styles['spine-title']}>{book.title}</span>
                    <span className={styles['band']} />
                  </button>
                )
              })}
              <span className={styles['decor']} aria-hidden="true">
                {DECOR[r % DECOR.length]}
              </span>
            </div>
            <div className={styles['plank']} />
          </div>
        ))}
      </div>

      {/* the book you pulled off the shelf */}
      {selected ? (
        <div className={styles['reader']} key={selected.uniqueId}>
          <div
            className={styles['cover']}
            style={{
              backgroundColor: selectedBg,
              color: selected.textColor || textFor(selectedBg),
            }}
          >
            {selected.img ? (
              <img src={selected.img} alt={`${selected.title} cover`} />
            ) : (
              <span className={styles['cover-title']}>{selected.title}</span>
            )}
          </div>
          <div className={styles['reader-info']}>
            <h3>{selected.title}</h3>
            <p className={styles['author']}>by {selected.author}</p>
            {selected.rating ? (
              <p className={styles['stars']} aria-label={`${selected.rating} out of 5 stars`}>
                {'★'.repeat(selected.rating)}
                {'☆'.repeat(5 - selected.rating)}
              </p>
            ) : null}
            <p className={styles['note']}>{selected.desc}</p>
            <button type="button" className={styles['put-back']} onClick={() => setSelectedId(null)}>
              put it back
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
