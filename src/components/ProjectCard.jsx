import styles from '/src/components/ProjectCard.module.css';

export default function ProjectCard(props) {
  const { title, website, img, desc } = props.project;

  return (
    <div className={styles['main-container']}>
      <h1>{title}</h1>

      {/* Embedded website */}
      <div className={styles['iframe-wrapper']}>
        {website ? (
          <iframe
            src={website}
            title={title}
            loading="lazy"
            allow="fullscreen"
            className={styles['iframe']}
          />
        ) : (
          <img src={img} alt={title} width={500} className={styles['image']} />
        )}
      </div>

      <h4>{desc}</h4>
    </div>
  );
}
