import styles from '/src/views/About.module.css'

export default function About() {
    return (
        <div className={styles['main-container']} id="about">
            <h1>about me</h1>
            <div className={styles['content']}>
                {/* Swap this out for your real bio! */}
                <p>
                    Hi, there- welcome to my personal website! I'm Laasya, a CS major @Stanford who loves building anything & everything,
                    tinkering with code, and . I love exploring the intersections of CS and math, design, physics, and equity. 
                    When I'm not coding, you can find me reading a good murder mystery, drinking strawberry matcha, 
                    or going for long walks w/ friends and family. Reach out to me at laasyam[at]stanford[dot]edu to chat about any and all
                    of these things! 
                </p>
            </div>
        </div>
    )
}
