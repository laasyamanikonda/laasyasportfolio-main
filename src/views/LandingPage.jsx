import styles from "./LandingPage.module.css";

export default function LandingPage() {
    return (
        <div>
            <div className={styles["landing-container"]}>
                <div className={styles["main-container"]}>
                    <div className={styles["landing-left"]}>
                        <h2>hi! my name is...</h2>

                        <h1 className={styles["typewriter"]}> laasya manikonda♡
                        </h1>

                        <p className={styles["about-text"]}>
                            Welcome to my personal website! I'm a Computer Science student <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer">@Stanford</a> who loves all things building, learning, and exploring the intersections of technology, 
                            ethics, math, & design. I'm especially passionate about AI safety and building data-driven, large-scale solutions to complex problems.
                        </p>
                        <p className={styles["about-text"]}>
                            When I'm not coding, you can find me reading a good mystery, drinking strawberry matcha, or taking a long walk! 
                            Feel free to explore my portfolio to learn more about my skills/experience, projects, and (the fun part...) my top books, movies, and songs. Thanks for stopping by!
                        </p>
                    </div>

                    <div className={styles["landing-right"]}>
                        <video
                            src="/introduction.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width={300}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}