"use client";
import Card from "../Common/Card/Card";
import Headings from "../Common/Headings/Headings";

import styles from "./services2.module.css";
import Image from "next/image";
import ProgressBar from "../Common/ProgressBar/ProgressBar";
import Trophy from "../Icons/Trophy";
import Settings from "../Icons/Settings";

const Services2 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <Headings text="OUR SERVICES" containerStyle={{ color: "black" }} />
        <div className={styles.heading}>
          Our Excellence In{" "}
          <div style={{ color: "#C01c25" }}>Timber Structures</div>
        </div>
        <div className={styles.paragraph}>
          Blending age-old craftsmanship with modern construction methods, we
          create timber structures that combine strength, beauty, and
          sustainability for any space.
        </div>
        <div className={styles.cardContainer}>
          <Card
            title="Award-Winning Experts In Timber Structures"
            para="Recognized for innovation and quality, our timber structure solutions have earned the trust of clients and the praise of the construction industry."
            Icon={Trophy}
          />
          <Card
            title="Innovative Design & Precision Engineering"
            para="Every timber project is engineered with meticulous precision and designed to achieve both architectural elegance and long-lasting durability."
            Icon={Settings}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={"/Images/ServiceBackground3.webp"}
          alt="Image"
          height={550}
          width={350}
          className={styles.firstImage}
        />
        <div className={styles.rightContainerCard}>
          <Image
            src={"/Images/ServiceBackground4.webp"}
            alt="Image"
            height={268}
            width={232}
            className={styles.secondImage}
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
    </div>
  );
};

export default Services2;
