//files
import styles from '/src/views/FunStuff.module.css'
import MusicCard from '/src/components/MusicCard.jsx'
import ScrapbookSection from '/src/components/ScrapbookSection.jsx'
import BookShelf from '/src/components/BookShelf.jsx'
import TVSection from '/src/components/TVSection.jsx'
//songs
import phoebe from '/src/assets/phoebe.png'
import radiohead from '/src/assets/radiohead.png'
import backseatLovers from '/src/assets/backseatlovers.jpeg'
import sza from '/src/assets/sza.png'
//movies & shows
import fleabag from '/src/assets/fleabag.jpg'
import gilmoreGirls from '/src/assets/gilmoreGirls.jpeg'
import everythingEverywhere from '/src/assets/everythingEverywhere.jpg'
import hungerGames from '/src/assets/hungerGames.jpg'
import laLaLand from '/src/assets/laLaLand.png'
//books
import anxiousPeople from '/src/assets/anxiousPeople.jpg'
import evelyn from '/src/assets/evelynHugo.jpg'
import frankenstein from '/src/assets/frankenstein.jpeg'
import bigNate from '/src/assets/bigNate.jpg'
import educated from '/src/assets/educated.jpg'
import nightingale from '/src/assets/nightingale.jpg'
import wildGeese from '/src/assets/wildGeese.png'
import carrieSoto from '/src/assets/carrieSoto.jpg'

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

// optional per book: color (spine/cover), textColor, img (cover), rating (1-5)
const booklist = [
  { uniqueId: 1, title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', img: evelyn, rating: 5, desc: 'literary fiction: a captivating story of ambition and love' },
  { uniqueId: 2, title: 'Big Nate: On a Roll', author: 'Lincoln Peirce', rating: 4, img: bigNate, desc: 'middle grade: the first novel i ever read :)' },
  { uniqueId: 3, title: 'Wild Geese', author: 'Mary Oliver', rating: 5, img: wildGeese, desc: 'poem: speaks for itself' },
  { uniqueId: 4, title: 'Anxious People', author: 'Frederick Backman', rating: 5, img: anxiousPeople, desc: 'literary fiction: my favorite book of all time!' },
  { uniqueId: 5, title: 'Frankenstein', author: 'Mary Shelley', rating: 5, img: frankenstein, desc: 'write why you love it here!' },
  { uniqueId: 6, title: 'The Nightingale', author: 'Kristin Hannah', rating: 4, img: nightingale, desc: 'historical fiction: powerful and very, very sad :(' },
  { uniqueId: 7, title: 'Educated', author: 'Tara Westover', rating: 5, img: educated, desc: 'memoir: incredibly moving and inspiring!!' },
  { uniqueId: 8, title: 'Carrie Soto is Back', author: 'Taylor Jenkins Reid', rating: 5, img: carrieSoto, desc: 'literary fiction:can you tell i love Taylor Jenkins Reid???? a powerful story about women & their ambitions' },

]

// PLACEHOLDERS: kind is 'show' or 'movie'. optional: img (poster), color (tv body)
const screenlist = [
  { uniqueId: 1, kind: 'show', title: 'Fleabag', year: '2016\u20132019', desc: 'beautifully written: favorite show of all time', img: fleabag },
  { uniqueId: 2, kind: 'movie', title: 'La La Land', year: '2016', img: laLaLand, desc: 'write why you love it here!' },
  { uniqueId: 3, kind: 'show', title: 'Gilmore Girls', year: '2000\u20132007', desc: 'the ultimate autumn comfort show', img: gilmoreGirls},
  { uniqueId: 5, kind: 'movie', title: 'Hunger Games: Mockingjay', year: '2015', img: hungerGames, desc: 'best dystopian film of all time!' },
  { uniqueId: 6, kind: 'movie', title: 'Everything Everywhere All at Once', year: '2022', desc: 'so, so moving and unique: never seen anything else like it!', img: everythingEverywhere },
]

export default function FunStuff() {
  return (
    <div className={styles['main-container']} id='funstuff'>
      <div id='music'>
        <h1>my favs:</h1>
        <h2>music: play my songs!</h2>
        <div className={styles['project-container']}>
          {musiclist.map((song) => (
            <MusicCard key={song.uniqueId} music={song} />
          ))}
        </div>
      </div>

      <div id='books'>
        <h2>books: pull one off the shelf!</h2>
        <BookShelf books={booklist} />
      </div>

      <div id='screen'>
        <h2>tv &amp; movies: click to learn more!</h2>
        <TVSection items={screenlist} />
      </div>

      <ScrapbookSection />
    </div>
  )
}
