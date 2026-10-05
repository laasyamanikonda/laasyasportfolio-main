import { useState } from 'react'
import styles from '/src/views/Experience.module.css'

// Edit these lists with your own info - same pattern as your projects/music arrays
const skills = ["JavaScript", "Python", "Java", "React", "HTML", "CSS"]

const languages = ["Telugu", "English", "Hindi", "Spanish"]

const interests = ["violin (~11 years)", "Indian classical singing (~12 years)", "reading", "running"]

// filter buttons: [value, label]. the first one is the default, "all" goes last.
const experienceFilters = [
    ['cs', 'cs / ds'],
    ['other', 'other'],
    ['all', 'all'],
]

const awardFilters = [
    ['national', 'national'],
    ['regional', 'regional'],
    ['local', 'local'],
    ['all', 'all'],
]

//NOTE TO SELF: try to add a color-coding scheme. red, yellow green depending on how proficient i am!
// category is 'cs' or 'other'
const experience = [
    {
        role: "Data Science Intern",
        org: "UIUC Grainger College of Engineering",
        period: "Summer 2025",
        category: "cs",
        desc: "Analyzed gender-, race-, and education-based wage gaps using Python and machine learning, then presented \"De-Debunking the Gender Wage Gap\" to UIUC faculty and industry professionals from Google, LinkedIn, and Cameo. Used hypothesis tests, confidence intervals, and data visualization to see how analytics inform equity and policy decisions.",
        uniqueId: 1
    },
    {
        role: "Computer Science Intern",
        org: "XPerience Consulting",
        period: "Aug 2024 – Present",
        category: "cs",
        desc: "Co-led local workshops and coordinated funding, in an adjunct role alongside the VHHS CS Club and Girls Who Code.",
        uniqueId: 2
    },
    {
        role: "Software Intern",
        org: "Aspire Global Tech",
        period: "Summer 2024",
        category: "cs",
        desc: "Improved a small business's website performance and user experience with HTML, CSS, and JavaScript, and automated client management workflows in Python to cut down manual processing time. Streamlined internal operations for better efficiency and data organization.",
        uniqueId: 3
    },
    {
        role: "Entrepreneurship Intern",
        org: "Future Founders",
        period: "Feb – Mar 2024",
        category: "other",
        desc: "Developed a product pitch to improve college readiness for underserved students and schools, and earned the National People's Choice Award with a record 450 votes at the final pitch event.",
        uniqueId: 4
    },
    {
        role: "Math & English Tutor",
        org: "Self-employed",
        period: "2023 – Present",
        category: "other",
        desc: "Design individualized lesson plans for 20+ students in grades 3–6, tailored to each family's goals and each student's learning style, and track payments and cancellations in Excel.",
        uniqueId: 5
    },
    {
        role: "Teen Technology Tutor",
        org: "Aspen Drive Library",
        period: "Aug 2021 – Present",
        category: "other",
        desc: "Volunteer weekly to help 5–10 elderly patrons with phones, laptops, photo and file backups, and Excel and Microsoft Office issues, building their tech independence with patience.",
        uniqueId: 6
    },
    {
        role: "Operational Team Member",
        org: "BearsFit Gym",
        period: "Feb – May 2025",
        category: "other",
        desc: "Managed front desk operations, check-ins, and POS transactions, handled opening and closing tasks, and resolved membership and billing issues while keeping the workspace clean and safe.",
        uniqueId: 7
    },
]

const leadership = [
    {
        role: "National Co-Director (2026) & National Design Team (2025)",
        org: "GirlCon",
        period: "Grades 10–12",
        desc: "Lead a national team of ~150 students and a core team of ~10 girls to run an international STEM conference for young women, and work with sponsors and partners to raise ~$20,000 a year. Designed 20+ graphics used across 30+ global chapters, and a merchandise design that won a national competition and reached 500+ attendees.",
        uniqueId: 1
    },
    {
        role: "National AI Action Council (12), Illinois Chapter Lead (11), Education Director (10)",
        org: "Encode AI",
        period: "Grades 9–12",
        desc: "Led nationwide workshops on AI ethics, safety, and digital responsibility, and worked to ban deepfakes of child sexual abuse and regulate biased facial recognition in schools. Grew the Illinois chapter 10x and partnered with code.org to back an AI safety bill.",
        uniqueId: 2
    },
    {
        role: "Founder & President",
        org: "Voices in Purple",
        period: "Grades 11–12",
        desc: "Founded a global epilepsy awareness campaign with workshops across the U.S. and India, raising several thousand dollars for awareness and medical research.",
        uniqueId: 3
    },
    {
        role: "Co-President",
        org: "Girls Who Code (VHHS)",
        period: "Grades 10–12",
        desc: "Secured the $10,000 Infosys InfyMaker Grant with XPerience Consulting and the other co-presidents to expand STEM access, and organized workshops reaching 500+ attendees at the Lake County STEM For Girls event.",
        uniqueId: 4
    },
    {
        role: "Vice President",
        org: "Computer Science Club",
        period: "Grades 10–12",
        desc: "Led weekly meetings and coding and app design workshops, and tripled participation in the District 128 STEAM Showcase while creating the club's branding.",
        uniqueId: 5
    },
    {
        role: "Co-Founder & Executive Board",
        org: "EnVHiro (Environmental Club)",
        period: "Grades 11–12",
        desc: "Co-established the club and grew it to ~39 members, launched sustainability initiatives that became permanent school programs, and organized local park clean-ups.",
        uniqueId: 6
    },
    {
        role: "Executive Board, App Developer & Peer Tutor",
        org: "Academic Resource Center (ARC)",
        period: "Grades 10–12",
        desc: "Co-developed a peer-tutoring app that connects students, peer tutors, and teachers across departments (~1000 users in school), and logged 100+ hours tutoring math, science, history, and computer science.",
        uniqueId: 7
    },
    {
        role: "Midwest Co-Chief of Staff & Director of Technology",
        org: "Civic Leaders of America",
        period: "Grades 9–12",
        desc: "Built the Midwest website with WordPress and JavaScript, managed tech logistics at regional civic conferences, and was promoted to Chief of Staff senior year to coordinate statewide events and mentor regional leaders.",
        uniqueId: 8
    },
    {
        role: "Co-Founder & Co-President",
        org: "Aviation & Aerospace Club",
        period: "Grades 9–11",
        desc: "Co-founded the club to explore aviation and space technology through design projects and guest speakers, and led workshops and outreach events on aerospace engineering.",
        uniqueId: 9
    },
]

// category is 'national', 'regional' (state), or 'local' (district / city / county / school)
const awards = [
    {
        title: "Coca-Cola Scholars Semifinalist",
        org: "Coca-Cola Scholars Foundation",
        year: "2025",
        category: "national",
        desc: "Top 1.15% of 107,000 national applicants.",
        uniqueId: 1
    },
    {
        title: "National Merit Commended Scholar",
        org: "National Merit Scholarship Program",
        year: "2025",
        category: "national",
        desc: "Top 3% of students nationwide based on PSAT performance.",
        uniqueId: 2
    },
    {
        title: "Infosys InfyMaker $10,000 Grant",
        org: "Infosys",
        year: "2025",
        category: "national",
        desc: "Funding to launch summer STEM camps in cybersecurity, AI, and app development for middle schoolers from underrepresented backgrounds.",
        uniqueId: 3
    },
    {
        title: "National People's Choice Award",
        org: "Future Founders",
        year: "2024",
        category: "national",
        uniqueId: 4
    },
    {
        title: "NCWIT Northern Illinois Winner",
        org: "National Center for Women & Information Technology",
        year: "2025",
        category: "regional",
        desc: "For exceptional technical aptitude and contributions to diversity in computing.",
        uniqueId: 5
    },
    {
        title: "District 128 STEAM Showcase: 1st Place (2024) & All-Division Winner (2025)",
        org: "District 128",
        year: "2024–2025",
        category: "local",
        desc: "2024: a website to improve medical education in rural areas of developing countries. 2025: a safety app for women and vulnerable people on public transportation, with location tracking, safety maps, and harassment reporting.",
        uniqueId: 6
    },
    {
        title: "Samsung Solve for Tomorrow Illinois Finalist",
        org: "Samsung",
        year: "2023, 2024",
        category: "regional",
        desc: "2023: an Arduino car seat detector to reduce hot car deaths. 2024: an automated walking stick for visually impaired individuals.",
        uniqueId: 7
    },
    {
        title: "FBLA National Competitor, Mobile App Development",
        org: "Future Business Leaders of America",
        year: "2023",
        category: "national",
        desc: "Represented Illinois at the national conference, after placing 3rd in the state.",
        uniqueId: 8
    },
    {
        title: "Presidential Volunteer Service Gold Award (2x)",
        org: "President's Volunteer Service Award",
        year: "",
        category: "national",
        desc: "For completing 100–250+ community service hours annually.",
        uniqueId: 9
    },
    {
        title: "AP Scholar with Distinction",
        org: "College Board",
        year: "2025",
        category: "national",
        uniqueId: 10
    },
    {
        title: "10th Congressional District STEAM Scholar",
        org: "Congressman Brad Schneider",
        year: "2024–2025",
        category: "local",
        desc: "One of three students from school selected for a STEM leadership program.",
        uniqueId: 11
    },
    {
        title: "Illinois Seal of Biliteracy: Telugu & Spanish",
        org: "State of Illinois",
        year: "2023, 2025",
        category: "regional",
        uniqueId: 12
    },
    {
        title: "Cougar Class Act: Excellence in Computer Science",
        org: "Vernon Hills High School",
        year: "2024",
        category: "local",
        desc: "Nominated by faculty for leadership, creativity, and innovation in computer science.",
        uniqueId: 13
    },
    {
        title: "Business Professionals of America State Finalist, Podcast Production Team",
        org: "Business Professionals of America",
        year: "2024",
        category: "regional",
        uniqueId: 14
    },
    {
        title: "Principal's Honor Roll",
        org: "Vernon Hills High School",
        year: "2022–2025",
        category: "local",
        desc: "5 semesters of a 4.0 unweighted GPA.",
        uniqueId: 15
    },
    {
        title: "National Honor Society Inductee",
        org: "Vernon Hills High School",
        year: "2025",
        category: "national",
        uniqueId: 16
    },
    {
        title: "Des Plaines Half Marathon: 2nd Place in Division",
        org: "Des Plaines",
        year: "2024",
        category: "regional",
        uniqueId: 17
    },
    {
        title: "National College Board School Recognition Award",
        org: "College Board",
        year: "",
        category: "national",
        uniqueId: 18
    },
    {
        title: "Sugarman Award",
        org: "",
        year: "",
        category: "local",
        uniqueId: 19
    },
]

function Pills({ items }) {
    return (
        <div className={styles['skills-list']}>
            {items.map((item) => (
                <span className={styles['skill-pill']} key={item}>{item}</span>
            ))}
        </div>
    )
}

// same idea as the channel tabs in the tv section
function FilterTabs({ options, value, onChange }) {
    return (
        <div className={styles['tabs']} role="tablist">
            {options.map(([optionValue, label]) => (
                <button
                    key={optionValue}
                    type="button"
                    role="tab"
                    aria-selected={value === optionValue}
                    className={`${styles['tab']} ${value === optionValue ? styles['tab-active'] : ''}`}
                    onClick={() => onChange(optionValue)}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}

export default function Experience() {
    const [experienceFilter, setExperienceFilter] = useState('cs')
    const [awardFilter, setAwardFilter] = useState('national')

    const visibleExperience = experience.filter(
        (job) => experienceFilter === 'all' || job.category === experienceFilter
    )
    const visibleAwards = awards.filter(
        (award) => awardFilter === 'all' || award.category === awardFilter
    )

    return (
        <div className={styles['main-container']} id="experience">
            <h1>experience & skills</h1>

            <div className={styles['section']}>
                <h2>skills</h2>
                <Pills items={skills} />
            </div>

            <div className={styles['section']}>
                <h2>experience</h2>
                <FilterTabs
                    options={experienceFilters}
                    value={experienceFilter}
                    onChange={setExperienceFilter}
                />
                {visibleExperience.map((job) => (
                    <div className={styles['entry']} key={job.uniqueId}>
                        <h3>{job.role} · {job.org}</h3>
                        <p className={styles['period']}>{job.period}</p>
                        <p>{job.desc}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles['section']} ${styles['leadership']}`}>
                <h2>leadership & involvement</h2>
                <div className={styles['card-grid']}>
                    {leadership.map((role) => (
                        <div className={styles['entry']} key={role.uniqueId}>
                            <h3>{role.role}</h3>
                            <p className={styles['period']}>{role.org} · {role.period}</p>
                            <p className={styles['card-desc']}>{role.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles['section']} ${styles['awards']}`}>
                <h2>awards</h2>
                <FilterTabs
                    options={awardFilters}
                    value={awardFilter}
                    onChange={setAwardFilter}
                />
                <div className={styles['card-grid']}>
                    {visibleAwards.map((award) => (
                        <div className={styles['entry']} key={award.uniqueId}>
                            <h3>{award.title}</h3>
                            {(award.org || award.year) && (
                                <p className={styles['period']}>
                                    {[award.org, award.year].filter(Boolean).join(' · ')}
                                </p>
                            )}
                            {award.desc && <p className={styles['card-desc']}>{award.desc}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['section']}>
                <h2>outside of school</h2>
                <Pills items={interests} />
            </div>

            <div className={styles['section']}>
                <h2>languages</h2>
                <Pills items={languages} />
            </div>
        </div>
    )
}
