import styles from "./aboutcompany.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Facebook from "../Icons/Facebook";
import XIcon from "@mui/icons-material/X";
import Linkedin from "../Icons/Linkedin";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.container} style={{ paddingLeft: "100px" }}>
            <div className={styles.heading}>About Company</div>
            <div className={styles.paragraph}>
              We deliver innovative construction solutions with a focus on
              quality, precision and client satisfaction
            </div>
            <div className={styles.details}>
              <EmailOutlinedIcon sx={{ color: "#c01c25" }} />
              Info@Tsi.Sa
            </div>
            <div className={styles.details}>
              <LocalPhoneOutlinedIcon sx={{ color: "#c01c25" }} /> +966 507 617
              667
            </div>
            <div className={styles.details}>
              <LocationOnOutlinedIcon sx={{ color: "#c01c25" }} />
              Jeddah, Al Manarat, Muhammad Al-Mughaidi 23829
            </div>
          </div>
          <div className={styles.container}>
            <div
              className={styles.heading}
              style={{ display: "flex", justifyContent: "center" }}
            >
              Quick Link
            </div>

            <div
              className={styles.paragraph}
              style={{ display: "flex", paddingLeft: "130px" }}
            >
              <ArrowOutwardOutlinedIcon sx={{ color: "#c01c25" }} />
              Home
            </div>
            <div
              className={styles.paragraph}
              style={{ display: "flex", paddingLeft: "130px" }}
            >
              <ArrowOutwardOutlinedIcon sx={{ color: "#c01c25" }} /> Services
            </div>
            <div
              className={styles.paragraph}
              style={{ display: "flex", paddingLeft: "130px" }}
            >
              <ArrowOutwardOutlinedIcon sx={{ color: "#c01c25" }} />
              Projects
            </div>
            <div
              className={styles.paragraph}
              style={{ display: "flex", paddingLeft: "130px" }}
            >
              <ArrowOutwardOutlinedIcon sx={{ color: "#c01c25" }} />
              Projects
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.heading}>Gallery</div>
            <div className={styles.imageContainer}>
              <Image
                src={"/Images/Bg2.webp"}
                alt="Image"
                height={80}
                width={80}
              />
              <Image
                src={"/Images/Project5.webp"}
                alt="Image"
                height={80}
                width={80}
              />
              <Image
                src={"/Images/Pool.webp"}
                alt="Image"
                height={80}
                width={80}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={"/Images/Project12.webp"}
                alt="Image"
                height={80}
                width={80}
              />
              <Image
                src={"/Images/Project11.webp"}
                alt="Image"
                height={80}
                width={80}
              />
              <Image
                src={"/Images/Project10.webp"}
                alt="Image"
                height={80}
                width={80}
              />
            </div>
          </div>
        </div>
        <div className={styles.borderLine}></div>
        <div className={styles.copyrightContainer}>
          <div className={styles.copyrightPara}>
            Copyright@2025 Tulay Specialized Installation. Developed by Web
            Nexus Tech
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className={styles.socials}>
              <Facebook width="15px" height="15px" color="rgb(223, 223, 223)" />
              Facebook
            </div>
            <div className={styles.socials}>
              <XIcon sx={{ fontSize: "15px" }} />
              Twitter
            </div>
            <div className={styles.socials}>
              <InstagramIcon sx={{ fontSize: "15px" }} />
              Instagram
            </div>
            <div className={styles.socials}>
              <Linkedin width="15px" height="15px" color="rgb(223, 223, 223)" />
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
