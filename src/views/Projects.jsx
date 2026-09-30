import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'
import chat from '../assets/chat.png'

const projectlist = [
    {
      title:"cutesey calculator",
      website:"https://laasyamanikonda.github.io/calculator/",
      desc: "desc",
      uniqueId: 1
    },
    {
      title: "another project",
      website: "https://example.com",
      img: chat,
      desc: "A sample project.",
      uniqueId: 3
  },
  ]

export default function Projects () {
    return (
        <div className={styles['main-container']} id='projects'>
            <h1>Here are a few apps I've built and tinkered with !</h1>
            <div className={styles['project-container']}>
              {/* This is a flex box which will hold each of our project cards */}
              {projectlist.map((project) => (
    <ProjectCard key={project.uniqueId} class="flex-item" project={project} />
  ))}
            </div>
        </div>
    )
}