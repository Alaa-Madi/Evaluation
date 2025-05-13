"use client"
import styles from './scrolleAnimation.module.css';

const AnimatedSections = () => {
  
  const halfCircles = Array(1000).fill(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bottomContainer}>
        <div className={styles.scrollerLeft}>
          {halfCircles.map((_, index) => (
            <div 
              key={`left-${index}`} 
              className={`${styles.halfCircle} ${styles.leftFacing}`}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.scrollerRight}>
          {halfCircles.map((_, index) => (
            <div 
              key={`right-${index}`} 
              className={`${styles.halfCircle} ${styles.rightFacing}`}
            ></div>
          ))}
        </div>
      </div>

      
    </div>
  );
};
export default AnimatedSections;