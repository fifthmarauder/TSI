"use client";
import Image from "next/image";
import styles from "./ourServices.module.css";
import Headings from "../Common/Headings/Headings";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ProgressBar from "@/components/Common/ProgressBar/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import Card from "../Common/Card/Card";

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
                <ProgressBar />
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
            <Card
              title="Award-Winning Experts in Retractable Glass Systems"
              para="Trusted by architects, designers, and homeowners alike, we deliver
        world-class retractable glass solutions that blend precision engineering
        with unmatched style."
              Icon={EmojiEventsOutlinedIcon}
            />
            <Card
              title="Innovative Design & Precision Engineering"
              para="Our retractable glass systems are crafted with cutting-edge
                technology and engineered for flawless performance, delivering
                both beauty and durability in every installation."
              Icon={SettingsOutlinedIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
