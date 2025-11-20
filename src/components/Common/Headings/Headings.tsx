import Building from "@/components/Icons/Building";
import styles from "./headings.module.css";

const Headings = ({
  text,
  containerStyle,
}: {
  text: string;
  containerStyle?: React.CSSProperties;
}) => {
  return (
    <div className={styles.description} style={containerStyle}>
      <Building />
      {text}
    </div>
  );
};

export default Headings;
