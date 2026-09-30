import styles from './FunStuff.module.css'
import frank from '/src/assets/frankie.png'
import phoebe from '/src/assets/phoebe.png'
import MusicCard from '../components/MusicCard'
import ScrapbookSection from '../components/ScrapbookSection'

const musiclist = [
    {
      title:"white ferrari, by frank ocean",
      src:"/whiteFerrari.mp3",
      img: frank,
      desc: "i love frank ocean",
      uniqueId: 1
    },
    {
      title:"savior complex, by phoebe bridgers",
      src:"/saviorComplex.mp3",
      img: phoebe,
      desc: "punisher?? i barely know her !",
      uniqueId: 2

    },
  ]

// CHANGED: outer container now carries id='funstuff' (the NavBar's "fun stuff"
// link pointed to #funstuff but nothing had that id before - #music was on
// this same div, which we kept, just moved down to wrap only the music part).
// Also added <ScrapbookSection /> at the bottom - it's a self-contained new
// component so no styles here needed to change.
export default function FunStuff () {
    return (
        <div className={styles['main-container']} id='funstuff'>
            <div id='music'>
              <h1>my favs:</h1>
              <h2>music-- click the album cover to listen to the songs!!</h2>
              <div className={styles['project-container']}>

                {musiclist.map((song) => (
                  <MusicCard key={song.uniqueId} music={song}/>
                ))}
              </div>
            </div>

            <ScrapbookSection />
        </div>
    )
}
