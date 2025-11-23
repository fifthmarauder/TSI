import Building from "@/components/Icons/Building";
import styles from "./headings.module.css";

const Headings = ({
  text,
  containerStyle,
  iconColor,
}: {
  text: string;
  containerStyle?: React.CSSProperties;
  iconColor?: string;
}) => {
  return (
    <div className={styles.description} style={containerStyle}>
      <Building color={iconColor} />
      {text}
    </div>
  );
};

export default Headings;
