
import FinalSectionCommand from "@/components/FinalSection";
import HeroSection from "@/components/hero";
import UltraWorkflow from "@/components/ProcessSection";
import ServiceGrid from "@/components/ServiceGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceGrid />
      <UltraWorkflow />
      <FinalSectionCommand />
    </div>
  );
}
