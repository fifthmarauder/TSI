import AboutUs from "@/components/AboutUs/AboutUs";
import Choose from "@/components/Choose/Choose";
import Consultation from "@/components/Consultation/Consultation";
import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import OurServices from "@/components/OurServices/OurServices";
import Projects from "@/components/Projects/Projects";
import Projects2 from "@/components/Projects2/Projects2";
import Services2 from "@/components/Services2/Services2";
import SlidingText from "@/components/SlidingText/SlidingText";
import SpecializedInstallation from "@/components/SpecializedInstallation/SpecializedInstallation";
import Testimonals from "@/components/Testimonals/Testimonals";

export default function Home() {
  return (
    <>
      <Header />
      <SpecializedInstallation />
      <OurServices />
      <Projects />
      <Services2 />
      <Projects2 />
      <Choose />
      <Consultation />
      <AboutUs />
      <SlidingText />
      <FAQ />
      <Testimonals />
      <ContactUs />
    </>
  );
}
