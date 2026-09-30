import styles from "./LandingPage.module.css"
import panda from "/src/assets/panda.png"
import dog from "/src/assets/dog.png"
import Projects from "/src/views/Projects.jsx"
import NavBar from "/src/components/NavBar.jsx"
import FunStuff from '/src/views/FunStuff.jsx'
import About from '/src/views/About.jsx'
import Experience from '/src/views/Experience.jsx'

function LandingPage() {
    return (
        <div>
            <div className={styles['landing-container']}>
                {/* We should also have a navigation bar for all our different pages - Check Components to see a NavBar that is already made for you */}
                <NavBar/>
                <div className={styles['main-container']}>
                    <div className={styles['landing-left']}>
                       {/* Let's fill this flex box with our name and credentials! */}
                       <h2>hi! my name is....</h2>
                       <h1 className = {styles['typewriter']}>laasya manikonda ♡</h1>
                    </div>

                    {/* This is the image of the panda that you already see on your website */}
                    <div className={styles['landing-right']}>
                        <img src={dog} alt="Logo" width={400} />
                    </div>
                </div>
            </div>
            {/* CHANGED: added About + Experience sections above Projects/FunStuff */}
            <About/>
            <Experience/>
            <Projects/>
            <FunStuff/>
        </div>


    )
}

export default LandingPage
