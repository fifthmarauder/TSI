import styles from "./whychooseus.module.css";
const WhyChooseUsCards = ({
  title,
  paragraph,
  Icon,
}: {
  title: string;
  paragraph: string;
  Icon: any;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <Icon
          sx={{
            color: "#C01C25",
            fontSize: "60px",
          }}
        />
        <div className={styles.cardHeading}>{title}</div>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
    </div>
  );
};

export default WhyChooseUsCards;
