import styles from './PhotoGallery.module.css'
import PolaroidPhoto from './PolaroidPhoto'
import fleabag from '/src/assets/fleabag.jpg'
import football from '/src/assets/football.jpg'
import matcha from '/src/assets/matcha.jpg'
import moon from '/src/assets/moon.jpg'
import cuzzo from '/src/assets/arjun.jpg'
import diya from '/src/assets/diya.jpg'
import medha from '/src/assets/medha.jpg'
import grad from '/src/assets/grad.png'


import hoover from '/src/assets/hoover tower.jpg'
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
    { img: football, caption: "me + roomie! (ft. Zendaya)", rotation: 4, uniqueId: 2 },
    { img: hoover, caption: "@ Stanford, CA", rotation: 0, uniqueId: 3 },
    { img: cuzzo, caption: "my baby cousin!", rotation: 3, uniqueId: 6 },
    { img: grad, caption: "graduated", rotation: 1, uniqueId: 8 },
    { img: matcha, caption: "@ Match | A, Chicago, IL", rotation: 2, uniqueId: 4 },
    { img: medha, caption: "me + my bsf Medha", rotation: -3, uniqueId: 7 },
    { img: moon, caption: "moon <3", rotation: -2, uniqueId: 5 },
    { img: diya, caption: "me + my bsf Diya", rotation: -3, uniqueId: 9},


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
