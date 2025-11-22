import Image from "next/image";
import Button from "../Common/Button/Button";
import Headings from "../Common/Headings/Headings";
import styles from "./consultation.module.css";

const Consultation = () => {
  return (
    <div className={styles.main}>
      <Image
        src={"/Images/ConsultationBg.png"}
        alt="Image"
        fill
        style={{ zIndex: "1", position: "absolute", filter: "brightness(0.3)" }}
      />
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div className={styles.intro}>
            <div className={styles.leftIntro}>
              <Headings text="GET CONSULTATION" />
              <div className={styles.heading}>
                Start Your Project With Expert&nbsp;{" "}
                <span className={styles.heading} style={{ color: "#c01c25" }}>
                  Guidance
                </span>
              </div>
            </div>
            <div className={styles.rightIntro}>
              <div className={styles.paragraph}>
                Our specialists are here to understand your needs, offer
                tailored solutions, and guide you every step of the way to bring
                your vision to life.
              </div>
              <Button
                title={"Get Consultation"}
                underline={true}
                darkHover={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
