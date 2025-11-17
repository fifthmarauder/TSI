import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import styles from "./button.module.css";

const Button = ({
  title,
  underline = false,
}: {
  title: String;
  underline?: Boolean;
}) => {
  return (
    <div
      className={styles.button}
      style={{ textDecoration: underline ? "underline" : "none" }}
    >
      {title}
      <ArrowOutwardIcon
        sx={{
          fontSize: 18,
        }}
      />
    </div>
  );
};

export default Button;
