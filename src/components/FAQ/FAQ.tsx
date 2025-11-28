"use client";

import styles from "./faq.module.css";
import Headings from "../Common/Headings/Headings";
import FAQCard from "../Common/FAQCards/FAQCard";
import { useState } from "react";
import Minus from "../Icons/Minus";
import Add from "../Icons/Add";
import Image from "next/image";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <Headings text="OUR FAQ" containerStyle={{ color: "black" }} />
        <div className={styles.heading}>
          {" "}
          Answers To Your Construction&nbsp;
          <span style={{ color: "#c01c25" }}>Queries</span>
        </div>
        <div className={styles.paragraph}>
          Ut enim ad minima veniam quis nostrum exercitationem ullam corporis
          suscipite laboriosam, nisi ut aliquid ex ea commodi consequatur
        </div>
        <div className={styles.cardContainer}>
          <FAQCard
            text="What Types Of Construction Services Do You Offer"
            index={0}
            openIndex={openIndex}
            toggle={toggle}
            icon={openIndex === 0 ? Minus : Add}
            paragraph="We specialize in retractable glass systems, timber structures, and other premium building solutions, providing design, installation, and maintenance services tailored to each client’s needs."
          />
          <FAQCard
            text="Do You Handle Both Resedential And Commercial Projects"
            index={1}
            openIndex={openIndex}
            toggle={toggle}
            icon={openIndex === 1 ? Minus : Add}
            paragraph="Yes. Our team works on a wide range of projects, from private villas and homes to large-scale commercial developments across Saudi Arabia."
          />
          <FAQCard
            text="How Long Does It Take To Complete A Project"
            index={2}
            openIndex={openIndex}
            toggle={toggle}
            icon={openIndex === 2 ? Minus : Add}
            paragraph="Timelines vary depending on project size and complexity, but we pride ourselves on delivering every project on schedule without compromising quality."
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imageContainer1}>
          <Image
            src={"/Images/Project8.webp"}
            alt="Image"
            width={340}
            height={340}
            className={styles.firstImage}
          />
          <Image
            src={"/Images/Project11.webp"}
            alt="Image"
            width={170}
            height={170}
            className={styles.secondImage}
          />
        </div>
        <div className={styles.imageContainer2}>
          <Image
            src={"/Images/Project10.webp"}
            alt="Image"
            width={170}
            height={170}
            className={styles.secondImage}
          />
          <Image
            src={"/Images/Pool.webp"}
            alt="Image"
            width={340}
            height={340}
            className={styles.firstImage}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
