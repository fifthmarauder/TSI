import Headings from "../Common/Headings/Headings";
import styles from "./choose.module.css";
import ExtensionIcon from "@mui/icons-material/Extension";
import LanguageIcon from "@mui/icons-material/Language";
import HandymanIcon from "@mui/icons-material/Handyman";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LayersIcon from "@mui/icons-material/Layers";
import WhyChooseUsCards from "../Common/WhyChooseUsCards/WhyChooseUsCards";

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
          <div className={styles.paragraph}>
            We craft timber structures that blend timeless craftsmanship with
            modern engineering, delivering strength, beauty, and sustainability
            in every project.
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.cardRow}>
            <WhyChooseUsCards
              title="Custom-Fit Solutions"
              paragraph="We don’t believe in one-size-fits-all. Every structure is custom-made to match your project’s exact dimensions for a seamless fit and finish."
              Icon={ExtensionIcon}
            />
            <WhyChooseUsCards
              title="Global-Grade Materials"
              paragraph="We source our systems from internationally recognized
                  manufacturers, ensuring top-tier quality, innovation, and
                  durability."
              Icon={LanguageIcon}
            />
            <WhyChooseUsCards
              title="Expert Installation"
              paragraph="Our experienced team handles on-site assembly with precision,
                  following your architectural plans to the smallest detail."
              Icon={HandymanIcon}
            />
          </div>
          <div className={styles.cardRow}>
            <WhyChooseUsCards
              title="Elegant Design"
              paragraph="We balance form and function — delivering systems that are not
                  only durable but enhance the aesthetic of your space."
              Icon={ArchitectureIcon}
            />
            <WhyChooseUsCards
              title="On-Time, Built to Last"
              paragraph="We respect your schedule and your standards. Our installations
                  are reliable, timely, and built to withstand time and the
                  elements."
              Icon={AccessTimeIcon}
            />
            <WhyChooseUsCards
              title="Seamless Project Integration"
              paragraph="From initial consultation to final handover, we work closely
                  with architects, contractors, & clients to ensure smooth
                  flawless integration into your existing structure."
              Icon={LayersIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
