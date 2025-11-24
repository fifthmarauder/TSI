import Counter from "../Common/CountUp/CountUp";
import styles from "./vision.module.css";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Vision = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        {" "}
        Let's Build Your&nbsp;{" "}
        <div style={{ color: "#c01c25" }}>Vision&nbsp;</div> Together
      </div>
      <div className={styles.paragraph}>
        From concept to completion, we deliver quality construction solutions
        tailored to your needs. Contact us today and take the first step towards
        your dream project
      </div>
      <div className={styles.redBox}>
        <div className={styles.redBoxCard}>
          <ConstructionOutlinedIcon
            sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
          />
          <div className={styles.cardNumber}>
            <Counter endNumber={50} suff={"+"} />
          </div>
          <div className={styles.cardDescription}>Custom Installations</div>
        </div>
        <div className={styles.redBoxCard}>
          <BusAlertIcon
            sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
          />
          <Counter endNumber={100} suff={"%"} />
          <div className={styles.cardDescription}>Imported Systems</div>
        </div>
        <div className={styles.redBoxCard}>
          <EventAvailableIcon
            sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
          />
          <Counter endNumber={99} suff={"%"} />
          <div className={styles.cardDescription}>On-Time Project Delivery</div>
        </div>
        <div className={styles.redBoxCard}>
          <TrendingUpIcon
            sx={{ color: "white", fontSize: "45px", marginBottom: "10px" }}
          />

          <Counter endNumber={10} suff={"+"} />

          <div className={styles.cardDescription}>Years Of Experience</div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
