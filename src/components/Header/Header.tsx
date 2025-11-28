"use client";
import styles from "./header.module.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import Facebook from "../Icons/Facebook";
import XIcon from "@mui/icons-material/X";
import Linkedin from "../Icons/Linkedin";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Button from "../Common/Button/Button";
import Saudia from "../Icons/Saudia";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = ({ scroll }: { scroll: any }) => {
  return (
    <div className={styles.main}>
      <div className={styles.topHeader}>
        <div className={styles.topHeaderLeft}>
          Welcome to Tulay Specialized Installation
        </div>
        <div className={styles.topHeaderRight}>
          <div className={styles.helpLine}>
            <div className={styles.helpLineContainer}>
              <EmailOutlinedIcon
                sx={{
                  color: "#C01C25",
                  fontSize: 18,
                }}
              />
              info@tsi.na
            </div>
            <RemoveIcon sx={{ transform: "rotate(90deg)", color: "#C01C25" }} />
            <div className={styles.helpLineContainer}>
              <LocalPhoneOutlinedIcon
                sx={{
                  color: "#C01C25",
                  fontSize: 18,
                }}
              />
              +966 507 617 667
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="https://www.facebook.com">
              <Facebook width="18px" height="18px" color="white" />
            </a>
            <a href="https://www.x.com">
              <XIcon
                sx={{
                  fontSize: 18,
                }}
              />
            </a>
            <a href="https://www.linkedin.com">
              <Linkedin width="18px" height="18px" color="white" />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon
                sx={{
                  fontSize: 18,
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <Image
          src={"/Images/BrandLogo.webp"}
          alt="BrandLogo"
          width={175}
          height={100}
        />

        <div className={styles.mobileButton}>
          <MenuOutlinedIcon
            sx={{
              color: "white",
              fontSize: "50px",
              backgroundColor: "#c01c25",
            }}
          />
        </div>
        <div className={styles.headerBottomContent}>
          <div className={styles.headerButtons}>Home</div>
          <div
            className={styles.headerButtons}
            onClick={() => {
              scroll("About");
            }}
          >
            About
          </div>
          <div
            className={styles.headerButtons}
            onClick={() => {
              scroll("Services");
            }}
          >
            Services
          </div>
          <div
            className={styles.headerButtons}
            onClick={() => {
              scroll("Projects");
            }}
          >
            Project
          </div>
          <div
            className={styles.headerButtons}
            onClick={() => {
              scroll("Contact");
            }}
          >
            Contact
          </div>
          <div
            className={styles.headerButtons}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Saudia /> Arabic
          </div>
        </div>
        <div className={styles.button}>
          <Button
            title={"Get A Quote"}
            darkHover={true}
            clicked={() => {
              scroll("Contact");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
