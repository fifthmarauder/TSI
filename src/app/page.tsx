"use client";

import AboutCompany from "@/components/AboutCompany/AboutCompany";
import AboutUs from "@/components/AboutUs/AboutUs";
import Choose from "@/components/Choose/Choose";
import Consultation from "@/components/Consultation/Consultation";
import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import OurServices from "@/components/OurServices/OurServices";
import Partners from "@/components/Partners/Partners";
import Projects from "@/components/Projects/Projects";
import Projects2 from "@/components/Projects2/Projects2";
import Services2 from "@/components/Services2/Services2";
import SlidingText from "@/components/SlidingText/SlidingText";
import SpecializedInstallation from "@/components/SpecializedInstallation/SpecializedInstallation";
import Testimonals from "@/components/Testimonals/Testimonals";
import Vision from "@/components/Vision/Vision";
import { useRef } from "react";

export default function Home() {
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const ServiceRef = useRef<HTMLDivElement | null>(null);
  const ProjectsRef = useRef<HTMLDivElement | null>(null);
  const ContactRef = useRef<HTMLDivElement | null>(null);
  const HomeRef = useRef<HTMLDivElement | null>(null);
  const setTarget = (Name: string) => {
    if (Name == "Home") {
      HomeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (Name == "About") {
      AboutRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (Name == "Services") {
      ServiceRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (Name == "Projects") {
      ProjectsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (Name == "Contact") {
      ContactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* <Header scroll={setTarget} /> */}
      <SpecializedInstallation scroll={setTarget} ref={HomeRef} />
      <OurServices ref={ServiceRef} />
      <Projects ref={ProjectsRef} />
      {/* <Services2 />
      <Projects2 />
      <Choose />
      <Consultation scroll={setTarget} />
      <AboutUs ref={AboutRef} />
      <SlidingText />
      <FAQ />
      <Testimonals />
      <ContactUs ref={ContactRef} />
      <Vision />
      <Partners />
      <AboutCompany scroll={setTarget} /> */}
    </>
  );
}
