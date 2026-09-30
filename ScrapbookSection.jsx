import styles from './ScrapbookSection.module.css'
import PhotoGallery from './PhotoGallery'
import CurrentlyCard from './CurrentlyCard'

export default function ScrapbookSection() {
    return (
        <div className={styles['wrapper']}>
            <h2 className={styles['heading']}>a lil scrapbook</h2>
            <div className={styles['row']}>
                <PhotoGallery />
                <CurrentlyCard />
            </div>
        </div>
    )
}
