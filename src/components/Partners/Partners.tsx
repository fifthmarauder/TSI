import Image from "next/image";
import Headings from "../Common/Headings/Headings";
import styles from "./partners.module.css";

const Partners = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <Headings text="OUR PARTNERS" containerStyle={{ color: "black" }} />
            <div className={styles.heading}>
              Trusted By 50+ Premium{" "}
              <span style={{ color: "#c01c25" }}>Clients</span>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={"/Images/Partner1.webp"}
                alt="Image"
                height={40}
                width={178}
              />
              <Image
                src={"/Images/Partner3.webp"}
                alt="Image"
                height={40}
                width={178}
              />
              <Image
                src={"/Images/Partner5.webp"}
                alt="Image"
                height={40}
                width={178}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={"/Images/Partner2.webp"}
                alt="Image"
                height={40}
                width={178}
              />
              <Image
                src={"/Images/Partner4.webp"}
                alt="Image"
                height={40}
                width={178}
              />
              <Image
                src={"/Images/Partner6.webp"}
                alt="Image"
                height={40}
                width={178}
              />
            </div>
          </div>
        </div>
        <div className={styles.redBox}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.imageContainerRed}
              style={{ left: "0px" }}
              src={"/Images/Arab3.webp"}
              alt="image"
              width={74}
              height={74}
            />
            <Image
              className={styles.imageContainerRed}
              style={{ left: "70px" }}
              src={"/Images/Arab2.webp"}
              alt="image"
              width={74}
              height={74}
            />
            <Image
              className={styles.imageContainerRed}
              style={{ left: "140px" }}
              src={"/Images/Arab1.webp"}
              alt="image"
              width={74}
              height={74}
            />
          </div>
          <div className={styles.headingRed}>
            Have Any Questions? Call +966 507 617 667
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
