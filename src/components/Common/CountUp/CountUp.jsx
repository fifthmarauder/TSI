"use client";
import CountUp from "react-countup";
import styles from "./countup.module.css";

const Counter = ({ endNumber }) => {
  return (
    <div className={styles.cardNumber}>
      <CountUp
        start={0}
        end={endNumber}
        duration={5}
        delay={0}
        suffix="+"
        enableScrollSpy
        scrollSpyDelay={0}
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Counter;
