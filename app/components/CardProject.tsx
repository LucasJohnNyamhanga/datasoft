import styles from "../styles/cardProject.module.scss";

type CardProjectProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
};

const CardProject = ({ icon, title, description, tags }: CardProjectProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.visual}>
        <div className={styles.lattice} />
        <span className={styles.medallion}>{icon}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default CardProject;
