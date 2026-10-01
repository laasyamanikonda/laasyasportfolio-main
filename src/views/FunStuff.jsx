import styles from '/src/views/FunStuff.module.css'
import frank from '/src/assets/frankie.png'
import phoebe from '/src/assets/phoebe.png'
import radiohead from '/src/assets/radiohead.png'
import gilmoreGirls from '/src/assets/gilmoreGirls.jpeg'
import everythingEverywhere from '/src/assets/everythingEverywhere.jpg'
import sza from '/src/assets/sza.png'
import fleabag from '/src/assets/fleabag.jpg'
import backseatLovers from '/src/assets/backseatlovers.jpeg'
import MusicCard from '/src/components/MusicCard.jsx'
import ScrapbookSection from '/src/components/ScrapbookSection.jsx'
import BookShelf from '/src/components/BookShelf.jsx'
import TVSection from '/src/components/TVSection.jsx'

// TODO: for real covers/posters, drop images in /src/assets, import them
// like the album covers above, and pass them as `img`. Without `img`, books
// show a colored cover and TVs show a title card, so nothing breaks.

const musiclist = [
  {
    title: 'savior complex, by phoebe bridgers',
    src: '/saviorComplex.mp3',
    img: phoebe,
    desc: '',
    uniqueId: 2,
  },
  {
    title: 'pool house, by the backseat lovers',
    src: 'Pool House.mp3',
    img: backseatLovers,
    desc: '',
    uniqueId: 5,
  },
  {
    title: 'cry baby, by sza',
    src: '/cry baby.mp3',
    img: sza,
    desc: '',
    uniqueId: 3,
  },
  {
    title: 'let down, by radiohead',
    src: '/let down.mp3',
    img: radiohead,
    desc: '',
    uniqueId: 4,
  },
]

// PLACEHOLDERS: swap in your real favorites.
// optional per book: color (spine/cover), textColor, img (cover), rating (1-5)
const booklist = [
  { uniqueId: 1, title: 'The Bell Jar', author: 'Sylvia Plath', rating: 5, desc: 'write why you love it here!' },
  { uniqueId: 2, title: 'Normal People', author: 'Sally Rooney', rating: 4, desc: 'write why you love it here!' },
  { uniqueId: 3, title: 'Circe', author: 'Madeline Miller', rating: 5, desc: 'write why you love it here!' },
  { uniqueId: 4, title: 'Station Eleven', author: 'Emily St. John Mandel', rating: 5, desc: 'write why you love it here!' },
  { uniqueId: 5, title: 'Beloved', author: 'Toni Morrison', rating: 5, desc: 'write why you love it here!' },
  { uniqueId: 6, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4, desc: 'write why you love it here!' },
  { uniqueId: 7, title: 'Giovanni\u2019s Room', author: 'James Baldwin', rating: 5, desc: 'write why you love it here!' },
]

// PLACEHOLDERS: kind is 'show' or 'movie'. optional: img (poster), color (tv body)
const screenlist = [
  { uniqueId: 1, kind: 'show', title: 'Fleabag', year: '2016\u20132019', desc: 'write why you love it here!', img: fleabag },
  { uniqueId: 2, kind: 'movie', title: 'Lady Bird', year: '2017', desc: 'write why you love it here!' },
  { uniqueId: 3, kind: 'show', title: 'Gilmore Girls', year: '2000\u20132007', desc: 'write why you love it here!', img: gilmoreGirls},
  { uniqueId: 4, kind: 'movie', title: 'Past Lives', year: '2023', desc: 'write why you love it here!' },
  { uniqueId: 5, kind: 'show', title: 'Abbott Elementary', year: '2021\u2013', desc: 'write why you love it here!' },
  { uniqueId: 6, kind: 'movie', title: 'Everything Everywhere All at Once', year: '2022', desc: 'write why you love it here!', img: everythingEverywhere },
]

export default function FunStuff() {
  return (
    <div className={styles['main-container']} id='funstuff'>
      <div id='music'>
        <h1>my favs:</h1>
        <h2>music-- click the album cover to listen to the songs!!</h2>
        <div className={styles['project-container']}>
          {musiclist.map((song) => (
            <MusicCard key={song.uniqueId} music={song} />
          ))}
        </div>
      </div>

      <div id='books'>
        <h2>books-- pull one off the shelf!</h2>
        <BookShelf books={booklist} />
      </div>

      <div id='screen'>
        <h2>tv &amp; movies-- click a tv to change the channel!</h2>
        <TVSection items={screenlist} />
      </div>

      <ScrapbookSection />
    </div>
  )
}
