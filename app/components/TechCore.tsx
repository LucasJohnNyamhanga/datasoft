import styles from "../styles/techCore.module.scss";

// A pure-CSS 3D "core" — three tilted rings orbiting a glowing nucleus.
// Stands in for DataSoft itself: not an illustration of technology, the object *is* the motif.
const TechCore = () => {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.core}>
        <div className={`${styles.ringWrap} ${styles.ringOne}`}>
          <div className={styles.ring} />
          <div className={styles.electron} />
        </div>
        <div className={`${styles.ringWrap} ${styles.ringTwo}`}>
          <div className={styles.ring} />
          <div className={styles.electron} />
        </div>
        <div className={`${styles.ringWrap} ${styles.ringThree}`}>
          <div className={styles.ring} />
          <div className={styles.electron} />
        </div>
        <div className={styles.nucleus} />
      </div>
      <div className={styles.floorGlow} />
    </div>
  );
};

export default TechCore;
