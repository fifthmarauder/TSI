"use client";

import Image from "next/image";
import Headings from "../Common/Headings/Headings";
import styles from "./projects.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
const Projects = ({ ref }: { ref: any }) => {
  const Viewer = dynamic(() => import("react-viewer"), { ssr: false });
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
    <div className={styles.main} ref={ref}>
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
            {imageArray.slice(0, 4).map((data, key) => {
              return (
                <div
                  key={key}
                  className={styles.imageContainer}
                  onClick={() => {
                    setCurrentImage(key);
                    setVisible(true);
                  }}
                >
                  <Image
                    className={styles.zoomImage}
                    src={data.src}
                    alt="image"
                    height={300}
                    width={300}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.imageRow}>
            {imageArray.slice(4).map((data, key) => {
              return (
                <div
                  key={key}
                  className={styles.imageContainer}
                  onClick={() => {
                    setCurrentImage(key + 4);
                    setVisible(true);
                  }}
                >
                  <Image
                    className={styles.zoomImage}
                    src={data.src}
                    alt="image"
                    height={300}
                    width={300}
                  />
                </div>
              );
            })}
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
