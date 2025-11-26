import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import styles from "./button.module.css";

const Button = ({
  title,
  underline = false,
  darkHover = false,
  clicked,
}: {
  title: String;
  underline?: Boolean;
  darkHover?: Boolean;
  clicked: () => void;
}) => {
  return (
    <div
      onClick={clicked}
      className={`${styles.button} ${darkHover ? styles.dark : styles.light}`}
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
