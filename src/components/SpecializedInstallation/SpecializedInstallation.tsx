import Image from "next/image";
import Button from "../Common/Button/Button";
import Building from "../Icons/Building";
import styles from "./SpecializedInstallation.module.css";
import { relative } from "path";

const SpecializedInstallation = () => {
  return (
    <div className={styles.slideshow}>
      <div className={`${styles.slide} ${styles.slide1}`}></div>
      <div className={`${styles.slide} ${styles.slide2}`}></div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.description}>
            <Building />
            SPECIALIZED INSTALLATION
          </div>
          <div className={styles.heading}>Your Trusted Partner In</div>
          <div className={styles.heading} style={{ color: "#c01c25" }}>
            Glass & Timber Construction
          </div>
          <div className={styles.line}></div>
          <div className={styles.para}>
            Delivering exceptional construction and building solutions with
            precision, reliability, and a commitment to turning your vision into
            reality.
          </div>
          <Button title={"Explore Services"} underline={true} />
        </div>
        <div className={styles.rightContainer}>
          <div style={{ position: "relative" }}>
            <Image
              src={"/Images/Pool.webp"}
              alt="image"
              width={550}
              height={580}
            />
            <div className={styles.redContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.imageContainer}
                  style={{ left: "0px" }}
                  src={"/Images/Arab1.webp"}
                  alt="image"
                  width={74}
                  height={74}
                />
                <Image
                  className={styles.imageContainer}
                  style={{ left: "40px" }}
                  src={"/Images/Arab2.webp"}
                  alt="image"
                  width={74}
                  height={74}
                />
                <Image
                  className={styles.imageContainer}
                  style={{ left: "80px" }}
                  src={"/Images/Arab3.webp"}
                  alt="image"
                  width={74}
                  height={74}
                />
                <div
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                    zIndex: "10",
                    paddingLeft: "120px",
                  }}
                >
                  20+ Daily Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedInstallation;
