import Headings from "../Common/Headings/Headings";
import styles from "./choose.module.css";
import ExtensionIcon from "@mui/icons-material/Extension";
import LanguageIcon from "@mui/icons-material/Language";
import HandymanIcon from "@mui/icons-material/Handyman";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LayersIcon from "@mui/icons-material/Layers";

const Choose = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Headings text="WHY CHOOSE US" containerStyle={{ color: "BLACK" }} />
        <div className={styles.intro}>
          <div className={styles.heading}>
            We Are Experts In Construction&nbsp;
            <span style={{ color: "#c01c25" }}>Services</span>
          </div>
          <div className={styles.paragraph} style={{ textAlign: "right" }}>
            We craft timber structures that blend timeless craftsmanship with
            modern engineering, delivering strength, beauty, and sustainability
            in every project.
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <ExtensionIcon
                  sx={{
                    color: "#C01C25",
                    fontSize: "60px",
                  }}
                />
                <div className={styles.cardHeading}>Custom-Fit Solutions</div>
                <div className={styles.paragraph}>
                  We don’t believe in one-size-fits-all. Every structure is
                  custom-made to match your project’s exact dimensions for a
                  seamless fit and finish.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <LanguageIcon
                  sx={{
                    color: "#C01C25",
                    fontSize: "60px",
                  }}
                />
                <div className={styles.cardHeading}>Global-Grade Materials</div>
                <div className={styles.paragraph}>
                  We source our systems from internationally recognized
                  manufacturers, ensuring top-tier quality, innovation, and
                  durability.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <HandymanIcon
                  sx={{
                    color: "#C01C25",
                    fontSize: "60px",
                  }}
                />
                <div className={styles.cardHeading}>Expert Installation</div>
                <div className={styles.paragraph}>
                  Our experienced team handles on-site assembly with precision,
                  following your architectural plans to the smallest detail.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <ArchitectureIcon
                  sx={{
                    color: "#C01C25",
                    fontSize: "60px",
                  }}
                />
                <div className={styles.cardHeading}>Elegant Design</div>
                <div className={styles.paragraph}>
                  We balance form and function — delivering systems that are not
                  only durable but enhance the aesthetic of your space.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <AccessTimeIcon
                  sx={{
                    color: "#C01C25",
                    fontSize: "60px",
                  }}
                />
                <div className={styles.cardHeading}>On-Time, Built to Last</div>
                <div className={styles.paragraph}>
                  We respect your schedule and your standards. Our installations
                  are reliable, timely, and built to withstand time and the
                  elements.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <LayersIcon
                  sx={{
                    color: "#C01C25",
                    fontSize: "60px",
                  }}
                />
                <div className={styles.cardHeading}>
                  Seamless Project Integration
                </div>
                <div className={styles.paragraph}>
                  From initial consultation to final handover, we work closely
                  with architects, contractors, & clients to ensure smooth
                  flawless integration into your existing structure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
