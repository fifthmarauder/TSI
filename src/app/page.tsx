import Header from "@/components/Header/Header";
import OurServices from "@/components/OurServices/OurServices";
import Projects from "@/components/Projects/Projects";
import SpecializedInstallation from "@/components/SpecializedInstallation/SpecializedInstallation";

export default function Home() {
  return (
    <>
      <Header />
      <SpecializedInstallation />
      <OurServices />
      <Projects />
    </>
  );
}
