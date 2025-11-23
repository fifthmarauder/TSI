"use client";

import styles from "./faqcard.module.css";

const FAQCard = ({
  text,
  index,
  openIndex,
  toggle,
  icon: Icon,
  paragraph,
}: {
  text: string;
  index: number;
  openIndex: number | null;
  toggle: (i: number) => void;
  icon: React.ElementType;
  paragraph: string;
}) => {
  const isOpen = openIndex === index;
  return (
    <div>
      <div className={styles.container} onClick={() => toggle(index)}>
        <div className={styles.heading}>
          {text}
          <Icon />
        </div>
      </div>
      {isOpen && (
        <div className={styles.slidingBox}>
          <div className={styles.paragraph}>{paragraph}</div>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
