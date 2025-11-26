import Image from "next/image";
import Button from "../Common/Button/Button";
import Headings from "../Common/Headings/Headings";
import styles from "./consultation.module.css";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Counter from "../Common/CountUp/CountUp";

const Consultation = ({ scroll }: { scroll: any }) => {
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
                clicked={() => {
                  scroll("Contact");
                }}
              />
            </div>
          </div>
          <div className={styles.redBox}>
            <div className={styles.redBoxCard}>
              <HandshakeOutlinedIcon
                sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
              />
              <div className={styles.cardNumber}>
                <Counter endNumber={253} suff={"+"} />
              </div>
              <div className={styles.cardDescription}>Project Complete</div>
            </div>
            <div className={styles.redBoxCard}>
              <GroupOutlinedIcon
                sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
              />
              <Counter endNumber={839} suff={"+"} />
              <div className={styles.cardDescription}>Quality Team Member</div>
            </div>
            <div className={styles.redBoxCard}>
              <WorkspacePremiumOutlinedIcon
                sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
              />
              <Counter endNumber={42} suff={"+"} />
              <div className={styles.cardDescription}>Awards Winning</div>
            </div>
            <div className={styles.redBoxCard}>
              <TrendingUpOutlinedIcon
                sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
              />

              <Counter endNumber={38} suff={"+"} />

              <div className={styles.cardDescription}>Years Of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
