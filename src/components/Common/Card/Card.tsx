import styles from "./card.module.css";

const Card = ({
  title,
  para,
  Icon,
}: {
  title: string;
  para: string;
  Icon: any;
}) => {
  return (
    <div className={styles.card}>
      <Icon
        sx={{
          color: "#C01C25",
          fontSize: "60px",
        }}
      />
      <div className={styles.cardHeading}>{title}</div>
      <div className={styles.paragraph}>{para}</div>
    </div>
  );
};

export default Card;
