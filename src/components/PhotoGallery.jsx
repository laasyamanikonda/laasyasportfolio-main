import styles from './PhotoGallery.module.css'
import PolaroidPhoto from './PolaroidPhoto'
import fleabag from '/src/assets/fleabag.jpg'

// Add your own photos here, same pattern as projectlist / musiclist.
// 1. drop the image into src/assets
// 2. import it up top: import beach from '../assets/beach.png'
// 3. add an entry below   x`
//
// example:
// import beach from '../assets/beach.png'
// const photos = [
//   { img: beach, caption: "summer 2025", rotation: -4, uniqueId: 1 },
// ]

const photos = [
    { img: fleabag, caption: "fleabag", rotation: -4, uniqueId: 1 }
]

export default function PhotoGallery() {
    return (
        <div className={styles['corkboard']}>
            {photos.length === 0 ? (
                <p className={styles['empty']}>
                    add photos to the <code>photos</code> array in PhotoGallery.jsx to fill this board!
                </p>
            ) : (
                photos.map((photo) => (
                    <PolaroidPhoto key={photo.uniqueId} photo={photo} />
                ))
            )}
        </div>
    )
}
