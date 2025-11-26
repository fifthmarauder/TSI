"use client";
import Image from "next/image";
import Headings from "../Common/Headings/Headings";
import styles from "./projects2.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
const Projects2 = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const Viewer = dynamic(() => import("react-viewer"), { ssr: false });
  const imageArray = [
    { src: "/Images/Bg1.webp", alt: "image" },
    { src: "/Images/Project9.webp", alt: "image" },
    { src: "/Images/Project10.webp", alt: "image" },
    { src: "/Images/Project11.webp", alt: "image" },
    { src: "/Images/Project12.webp", alt: "image" },
  ];
  return (
    <div className={styles.main}>
      <Headings text="OUR PROJECTS" containerStyle={{ color: "black" }} />
      <div className={styles.heading}>
        Our Timber Structure&nbsp;{" "}
        <div style={{ color: "#c01c25" }}>Projects Showcase</div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imagesContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.zoomImage}
              src="/Images/Bg1.webp"
              alt="Image"
              height={200}
              width={300}
              onClick={() => {
                setCurrentImage(0);
                setVisible(true);
              }}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.zoomImage}
              src="/Images/Project9.webp"
              alt="Image"
              height={200}
              width={300}
              onClick={() => {
                setCurrentImage(1);
                setVisible(true);
              }}
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.zoomImage}
            src="/Images/Project10.webp"
            alt="Image"
            height={230}
            width={300}
            onClick={() => {
              setCurrentImage(2);
              setVisible(true);
            }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.zoomImage}
            src="/Images/Project11.webp"
            alt="Image"
            height={420}
            width={300}
            onClick={() => {
              setCurrentImage(3);
              setVisible(true);
            }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.zoomImage}
            src="/Images/Project12.webp"
            alt="Image"
            height={420}
            width={300}
            onClick={() => {
              setCurrentImage(4);
              setVisible(true);
            }}
          />
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

export default Projects2;
