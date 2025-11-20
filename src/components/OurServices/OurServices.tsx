"use client";
import Image from "next/image";
import styles from "./ourServices.module.css";
import Headings from "../Common/Headings/Headings";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "@/components/Common/AnimatedProgressProvider/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { colors } from "@mui/material";

const OurServices = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.leftContainer}>
          <Image
            src={"/Images/ServiceBackground1.webp"}
            alt="Image"
            width={350}
            height={687}
          />
          <div className={styles.leftContainerCard}>
            <Image
              src={"/Images/ServiceBackground2.webp"}
              alt="Image"
              width={230}
              height={290}
            />
            <div className={styles.successWrapper}>
              <div className={styles.successContainer}>
                <div className={styles.successContainerTitle}>
                  Project Success Rate
                </div>
                <div>
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
                          /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                          styles={buildStyles({
                            pathTransition: "none",
                            pathColor: "#C01C25",
                            textColor: "black",
                            textSize: 15,
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Headings text={"OUR SERVICES"} containerStyle={{ color: "black" }} />
          <div style={{ width: "530px" }}>
            <div className={styles.heading}>Our Excellence In</div>
            <div
              className={styles.heading}
              style={{ color: "rgb(192, 28, 37)", marginBottom: "20px" }}
            >
              Retractable Glass Systems
            </div>
          </div>
          <div className={styles.paragraph}>
            We combine cutting-edge engineering with elegant design to deliver
            retractable glass systems that transform spaces, maximize comfort,
            and stand the test of time
          </div>
          <div className={styles.rightContainerCard}>
            <div className={styles.card}>
              <EmojiEventsOutlinedIcon
                sx={{
                  color: "#C01C25",
                  fontSize: "60px",
                }}
              />
              <div className={styles.cardHeading}>
                Award-Winning Experts in Retractable Glass Systems
              </div>
              <div className={styles.paragraph}>
                Trusted by architects, designers, and homeowners alike, we
                deliver world-class retractable glass solutions that blend
                precision engineering with unmatched style.
              </div>
            </div>
            <div className={styles.card}>
              <SettingsOutlinedIcon
                sx={{
                  color: "#C01C25",
                  fontSize: "60px",
                }}
              />
              <div className={styles.cardHeading}>
                Innovative Design & Precision Engineering
              </div>
              <div className={styles.paragraph}>
                Our retractable glass systems are crafted with cutting-edge
                technology and engineered for flawless performance, delivering
                both beauty and durability in every installation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
