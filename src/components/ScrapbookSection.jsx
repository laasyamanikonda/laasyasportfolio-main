import styles from '/src/components/ScrapbookSection.module.css'
import PhotoGallery from '/src/components/PhotoGallery.jsx'
import CurrentlyCard from '/src/components/CurrentlyCard.jsx'

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
