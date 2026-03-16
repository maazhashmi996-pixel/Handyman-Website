
import AboutApexSection from "@/components/AboutApexSection";
import FinalSectionCommand from "@/components/FinalSection";
import UpdatedHandymanHero from "@/components/hero";
import HeroSection from "@/components/hero";
import UltraWorkflow from "@/components/ProcessSection";
import ServiceGrid from "@/components/ServiceGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <UpdatedHandymanHero />
      <AboutApexSection />
      <ServiceGrid />
      <UltraWorkflow />
      <FinalSectionCommand />
    </div>
  );
}
