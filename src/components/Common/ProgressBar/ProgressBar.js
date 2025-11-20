import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "@/components/Common/AnimatedProgressProvider/AnimatedProgressProvider";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = () => {
  return (
    <div style={{ height: "110px", width: "110px" }}>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={89}
        duration={1}
        easingFunction={easeQuadInOut}
        repeat={false}
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                pathTransition: "none",
                pathColor: "#C01C25",
                textColor: "black",
                textSize: 20,
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
};

export default ProgressBar;
