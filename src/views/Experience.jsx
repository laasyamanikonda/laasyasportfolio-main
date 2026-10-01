import styles from '/src/views/Experience.module.css'

// Edit these three lists with your own info - same pattern as your projects/music arrays
const skills = ["JavaScript", "React", "Python", "Java", "SQL", "Figma", "HTML", "CSS", "C++", "C#"]

//NOTE TO SELF: try to add a color-coding scheme. red, yellow green depending on how proficient i am! 
const experience = [
    {
        role: "Role title",
        org: "Company / Organization",
        period: "Summer 2025",
        desc: "One or two sentences on what you did and what you learned.",
        uniqueId: 1
    },
]

const awards = [
    {
        title: "Award name",
        org: "Awarding body",
        year: "2025",
        uniqueId: 1
    },
]

export default function Experience() {
    return (
        <div className={styles['main-container']} id="experience">
            <h1>experience & skills</h1>

            <div className={styles['section']}>
                <h2>skills</h2>
                <div className={styles['skills-list']}>
                    {skills.map((skill) => (
                        <span className={styles['skill-pill']} key={skill}>{skill}</span>
                    ))}
                </div>
            </div>

            <div className={styles['section']}>
                <h2>experience</h2>
                {experience.map((job) => (
                    <div className={styles['entry']} key={job.uniqueId}>
                        <h3>{job.role} · {job.org}</h3>
                        <p className={styles['period']}>{job.period}</p>
                        <p>{job.desc}</p>
                    </div>
                ))}
            </div>

            <div className={styles['section']}>
                <h2>awards</h2>
                {awards.map((award) => (
                    <div className={styles['entry']} key={award.uniqueId}>
                        <h3>{award.title}</h3>
                        <p className={styles['period']}>{award.org} · {award.year}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
