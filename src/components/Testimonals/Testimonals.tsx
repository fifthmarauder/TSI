"use client";
import styles from "./testimonals.module.css";
import Headings from "../Common/Headings/Headings";
import GradeIcon from "@mui/icons-material/Grade";
import Image from "next/image";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { useEffect, useState } from "react";

const Testimonals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className={styles.slide}>
              <div style={{ width: "515px" }}>
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
                      <div className={styles.location}>
                        Riyadh, Saudia Arabia
                      </div>
                    </div>
                  </div>
                  <FormatQuoteOutlinedIcon
                    sx={{ color: "#c01c25", fontSize: "54px" }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.slide}>
              {/* Testimonial 2 */}
              <div style={{ width: "515px" }}>
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
                      <div className={styles.location}>
                        Riyadh, Saudia Arabia
                      </div>
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
    </div>
  );
};

export default Testimonals;
