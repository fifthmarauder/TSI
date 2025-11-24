"use client";
import styles from "./contactus.module.css";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Headings from "../Common/Headings/Headings";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState<string | number>("");
  const [message, setMessage] = useState("");
  return (
    <div className={styles.main}>
      <Image
        src={"/Images/Bgdots.webp"}
        alt="Images"
        fill
        style={{ position: "absolute", zIndex: "1" }}
      />
      <div className={styles.leftContainer}>
        <Headings text="OURCONTACT" containerStyle={{ color: "black" }} />
        <div className={styles.heading}>
          Let's Discuss Your Next{" "}
          <div style={{ color: "#c01c25" }}>Project</div>
        </div>
        <form className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <input
              className={styles.formCard}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            <input
              type="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className={styles.formCard}
              placeholder="Number"
            />
          </div>
          <div className={styles.formContainer}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.formCard}
              placeholder="Email"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className={styles.formCard}
              placeholder="Subject"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className={styles.formMessageCard}
            placeholder="Message"
          />
        </form>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={"/Images/ConsultationBg.png"}
          alt="Image"
          width={570}
          height={380}
        />
        <div className={styles.redContainer}>
          <div className={styles.redContainerWrapper}>
            <div style={{ display: "flex", gap: "20px" }}>
              <div className={styles.redHeading}>Get In Touch</div>
              <ArrowOutwardOutlinedIcon
                sx={{ color: "white", fontSize: "20px" }}
              />
            </div>
            <div className={styles.borderLine}></div>
            <div className={styles.redHeading} style={{ fontSize: "24px" }}>
              Let's Build Together
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
