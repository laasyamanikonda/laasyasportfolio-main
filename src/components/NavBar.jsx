import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav className={styles['main-nav']}>
            <a href="#about" className={styles['nav-item']}>about</a>
            <a href="#experience" className={styles['nav-item']}>experience</a>
            <a href="#projects" className={styles['nav-item']}>projects</a>
            <a href="#funstuff" className={styles['nav-item']}>fun stuff</a>
        </nav>
    )
}