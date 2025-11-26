"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const TARGET_VALUE = 89;
const DURATION = 1500; // ms

const ProgressBar = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [animate, setAnimate] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  // Start animation when it comes into view
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!animate) return;

    const startTime = performance.now();
    let frameId: number;

    const animateNumber = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / DURATION); // 0 → 1
      const next = Math.round(TARGET_VALUE * t);

      setDisplayValue(next);

      if (t < 1) {
        frameId = requestAnimationFrame(animateNumber);
      }
    };

    frameId = requestAnimationFrame(animateNumber);

    return () => cancelAnimationFrame(frameId);
  }, [animate]);

  const barValue = animate ? TARGET_VALUE : 0;

  return (
    <div ref={ref} style={{ height: "110px", width: "110px" }}>
      <CircularProgressbar
        value={barValue}
        text={`${displayValue}%`}
        styles={buildStyles({
          // bar animation
          pathTransitionDuration: DURATION / 1000, // seconds
          pathTransition: `stroke-dashoffset ${DURATION / 1000}s linear 0s`,
          pathColor: "#C01C25",
          textColor: "black",
          textSize: 20,
        })}
      />
    </div>
  );
};

export default ProgressBar;
