import Headings from "../Common/Headings/Headings";
import styles from "./aboutus.module.css";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

const AboutUs = ({ ref }: { ref: any }) => {
  return (
    <div className={styles.main} ref={ref}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Headings text="ABOUT US" containerStyle={{ color: "black" }} />
          <div className={styles.heading}>
            Discover The Difference With
            <div style={{ color: "#c01c25" }}>
              Tulay Specialized Installation
            </div>
          </div>
          <div className={styles.descriptionBox}>
            <HandshakeOutlinedIcon
              sx={{
                color: "#c01c25",
                fontSize: "50px",
              }}
            />
            <div>
              <div className={styles.descriptionHeading}>
                Your Most Trusted Partner
              </div>
              <div className={styles.descriptionParagraph}>
                With a proven track record and unwavering commitment to quality,
                we stand as the partner you can trust for every stage of your
                project.
              </div>
            </div>
          </div>
          <div className={styles.descriptionBox}>
            <EngineeringOutlinedIcon
              sx={{
                color: "#c01c25",
                fontSize: "50px",
              }}
            />
            <div>
              <div className={styles.descriptionHeading}>
                Our Skilled Partner
              </div>
              <div className={styles.descriptionParagraph}>
                Our team of experienced professionals brings expertise,
                dedication, and passion to every project, ensuring the highest
                standards of quality and craftsmanship.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div
            className={styles.descriptionBox}
            style={{ padding: "25px 35px" }}
          >
            <RemoveRedEyeOutlinedIcon
              sx={{
                color: "#c01c25",
                fontSize: "50px",
                marginLeft: "35px",
                marginRight: "35px",
              }}
            />
            <div>
              <div className={styles.rightHeading}>Our Vision</div>
              <div className={styles.descriptionParagraph}>
                To become the regional leader in transforming architectural
                spaces through innovative glass and timber solutions tailored to
                modern living.
              </div>
            </div>
          </div>
          <div
            className={styles.descriptionBox}
            style={{ padding: "25px 35px" }}
          >
            <CrisisAlertOutlinedIcon
              sx={{
                color: "#c01c25",
                fontSize: "50px",
                marginLeft: "35px",
                marginRight: "35px",
              }}
            />
            <div>
              <div className={styles.rightHeading}>Our Mission</div>
              <div className={styles.descriptionParagraph}>
                Our mission is to deliver world-class prefabricated structures,
                customized to every project, with lasting quality and flexible,
                visually appealing designs.
              </div>
            </div>
          </div>
          <div
            className={styles.descriptionBox}
            style={{ padding: "25px 35px" }}
          >
            <FlagOutlinedIcon
              sx={{
                color: "#c01c25",
                fontSize: "50px",
                marginLeft: "35px",
                marginRight: "35px",
              }}
            />
            <div>
              <div className={styles.rightHeading}>Our Motto</div>
              <div className={styles.descriptionParagraph}>
                Building with precision, innovation, and integrity.Our work
                stands as a testament to quality that lasts for generations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
