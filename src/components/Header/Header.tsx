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

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topHeader}>
        <div className={styles.topHeaderLeft}>
          Welcome to Tulay Specialized Installation
        </div>
        <div className={styles.topHeaderRight}>
          <div className={styles.helpLine}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <EmailOutlinedIcon
                sx={{
                  color: "#C01C25",
                  fontSize: 18,
                }}
              />
              info@tsi.na
            </div>
            <RemoveIcon sx={{ transform: "rotate(90deg)", color: "#C01C25" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
            <Facebook />
            <XIcon
              sx={{
                fontSize: 18,
              }}
            />
            <Linkedin />
            <InstagramIcon
              sx={{
                fontSize: 18,
              }}
            />
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
        <div className={styles.headerBottomContent}>
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Project</div>
          <div>Contact</div>
          <div>Arabic</div>
        </div>
        <Button title={"Get A Quote"} darkHover={true} />
      </div>
    </div>
  );
};

export default Header;
