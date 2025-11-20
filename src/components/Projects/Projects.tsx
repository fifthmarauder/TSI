"use client";

import Image from "next/image";
import Headings from "../Common/Headings/Headings";
import styles from "./projects.module.css";
import Viewer from "react-viewer";
import { useState } from "react";
const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const imageArray = [
    { src: "/Images/Project1.webp", alt: "image" },
    { src: "/Images/Project2.webp", alt: "image" },
    { src: "/Images/Pool.webp", alt: "image" },
    { src: "/Images/Project4.webp", alt: "image" },
    { src: "/Images/Project5.webp", alt: "image" },
    { src: "/Images/Project6.webp", alt: "image" },
    { src: "/Images/Project7.webp", alt: "image" },
    { src: "/Images/Project8.webp", alt: "image" },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <Headings
          text={"OUR PROJECTS"}
          containerStyle={{ color: "black", margin: "10px" }}
        />
        <div className={styles.heading}>
          Our Retractable Glass&nbsp;
          <div style={{ color: "#c01c25" }}> Projects Showcase</div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageRow}>
            <div
              className={styles.imageContainer}
              onClick={() => {
                setCurrentImage(0);
                setVisible(true);
              }}
            >
              <Image
                className={styles.zoomImage}
                src={"/Images/Project1.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
            <div
              className={styles.imageContainer}
              onClick={() => {
                setCurrentImage(1);
                setVisible(true);
              }}
            >
              <Image
                className={styles.zoomImage}
                src={"/Images/Project2.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
            <div
              className={styles.imageContainer}
              onClick={() => {
                setCurrentImage(2);
                setVisible(true);
              }}
            >
              <Image
                className={styles.zoomImage}
                src={"/Images/Pool.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
            <div
              className={styles.imageContainer}
              onClick={() => {
                setCurrentImage(3);
                setVisible(true);
              }}
            >
              <Image
                className={styles.zoomImage}
                src={"/Images/Project4.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
          </div>
          <div
            className={styles.imageRow}
            onClick={() => {
              setCurrentImage(4);
              setVisible(true);
            }}
          >
            <div className={styles.imageContainer}>
              <Image
                className={styles.zoomImage}
                src={"/Images/Project5.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
            <div
              className={styles.imageContainer}
              onClick={() => {
                setCurrentImage(5);
                setVisible(true);
              }}
            >
              <Image
                className={styles.zoomImage}
                src={"/Images/Project6.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
            <div
              className={styles.imageContainer}
              onClick={() => {
                setCurrentImage(6);
                setVisible(true);
              }}
            >
              <Image
                className={styles.zoomImage}
                src={"/Images/Project7.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
            <div
              className={styles.imageContainer}
              onClick={() => {
                setCurrentImage(7);
                setVisible(true);
              }}
            >
              <Image
                className={styles.zoomImage}
                src={"/Images/Project8.webp"}
                alt="image"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={imageArray}
        rotatable={false}
        scalable={false}
        activeIndex={currentImage}
        downloadable={true}
      />
    </div>
  );
};

export default Projects;
