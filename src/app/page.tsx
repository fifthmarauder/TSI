import Header from "@/components/Header/Header";
import OurServices from "@/components/OurServices/OurServices";
import Projects from "@/components/Projects/Projects";
import Projects2 from "@/components/Projects2/Projects2";
import Services2 from "@/components/Services2/Services2";
import SpecializedInstallation from "@/components/SpecializedInstallation/SpecializedInstallation";

export default function Home() {
  return (
    <>
      <Header />
      <SpecializedInstallation />
      <OurServices />
      <Projects />
      <Services2 />
      <Projects2 />
    </>
  );
}
