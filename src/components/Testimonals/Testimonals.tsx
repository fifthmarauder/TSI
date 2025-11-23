"use client";
import styles from "./testimonals.module.css";
import Headings from "../Common/Headings/Headings";
import GradeIcon from "@mui/icons-material/Grade";
import Image from "next/image";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { useEffect, useState } from "react";

const Testimonals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const handleStart = (e: any) => {
    setIsAuto(false); // pause auto during swipe
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleMove = (e: any) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;

    // move screen as finger moves
    setTranslate(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translate < -50) {
      // swiped left
      setActiveIndex((prev) => (prev + 1) % 2);
    } else if (translate > 50) {
      // swiped right
      setActiveIndex((prev) => (prev - 1 + 2) % 2);
    }

    // reset
    setTranslate(0);

    // resume auto
    setTimeout(() => setIsAuto(true), 500);
  };

  // Auto-slide every 4 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Headings
          text="TESTIMONALS"
          containerStyle={{ color: "white", borderColor: "white" }}
          iconColor="white"
        />
        <div className={styles.heading}>
          Built On Trust, Proven By Testimonals
        </div>
        <div className={styles.heading} style={{ fontSize: "20px" }}>
          98% Clients Are Positive Reviews
        </div>
      </div>
      <div className={styles.container} style={{ backgroundColor: "#2a2c38" }}>
        <div className={styles.slider}>
          <div
            className={styles.track}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            style={{
              transform: `translateX(calc(-${
                activeIndex * 50
              }% + ${translate}px))`,
              transition: isDragging ? "none" : "transform 0.6s ease",
            }}
          >
            <div className={styles.slide}>
              <div style={{ display: "flex", gap: "5px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <GradeIcon sx={{ color: "#c01c25" }} key={i} />
                ))}
              </div>
              <div className={styles.paragraph}>
                Tulay delivered exactly what they promised — a stunning
                retractable glass system that completely transformed our villa
                in Riyadh. The quality is exceptional, and the team’s
                professionalism is unmatched.
              </div>
              <div className={styles.clientContainer}>
                <div className={styles.client}>
                  <Image
                    src={"/Images/Arab3.webp"}
                    alt="Image"
                    width={70}
                    height={70}
                    style={{ borderRadius: "35px" }}
                  />
                  <div>
                    <div className={styles.name}>Fahad Al-Mutairi</div>
                    <div className={styles.location}>Riyadh, Saudia Arabia</div>
                  </div>
                </div>
                <FormatQuoteOutlinedIcon
                  sx={{ color: "#c01c25", fontSize: "54px" }}
                />
              </div>
            </div>

            <div className={styles.slide}>
              <div style={{ display: "flex", gap: "5px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <GradeIcon sx={{ color: "#c01c25" }} key={i} />
                ))}
              </div>
              <div className={styles.paragraph}>
                We chose Tulay for our timber structure project in Jeddah, and
                it was the best decision we made. They were on time, precise,
                and the result exceeded our expectations. Highly recommended for
                premium construction work.
              </div>
              <div className={styles.clientContainer}>
                <div className={styles.client}>
                  <Image
                    src={"/Images/Arab1.webp"}
                    alt="Image"
                    width={70}
                    height={70}
                    style={{ borderRadius: "35px" }}
                  />
                  <div>
                    <div className={styles.name}>Omar Al-Harbi</div>
                    <div className={styles.location}>Jeddah, Saudia Arabia</div>
                  </div>
                </div>
                <FormatQuoteOutlinedIcon
                  sx={{ color: "#c01c25", fontSize: "54px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
