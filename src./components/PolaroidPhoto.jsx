import styles from './PolaroidPhoto.module.css'

export default function PolaroidPhoto({ photo }) {
    return (
        <div
            className={styles['polaroid']}
            style={{ transform: `rotate(${photo.rotation || 0}deg)` }}
        >
            <div className={styles['tape']}></div>
            <img src={photo.img} alt={photo.caption} className={styles['photo']} />
            <p className={styles['caption']}>{photo.caption}</p>
        </div>
    )
}
