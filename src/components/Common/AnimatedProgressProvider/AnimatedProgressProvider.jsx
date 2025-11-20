import { useState, useEffect, useRef } from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({
  valueStart = 0,
  valueEnd,
  duration,
  easingFunction,
  repeat,
  children,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Trigger animation once
    setIsAnimated(true);

    // If repeating animation
    if (repeat) {
      intervalRef.current = setInterval(() => {
        setIsAnimated((prev) => !prev);
      }, duration * 1000);
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [repeat, duration]);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;
