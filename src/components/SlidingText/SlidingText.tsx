import Glass from "../Icons/Glass";
import { Helmet } from "../Icons/Helmet";
import styles from "./slidingText.module.css";

const SlidingText = () => {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <div className={styles.heading}>
          <Glass /> Retractable Glass Systems
        </div>
        <div className={styles.heading}>
          {" "}
          <Helmet /> Timber Structures
        </div>
        <div className={styles.heading}>
          <Glass /> Retractable Glass Systems
        </div>
        <div className={styles.heading}>
          {" "}
          <Helmet /> Timber Structures
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
