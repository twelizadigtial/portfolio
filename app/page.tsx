import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ServicesSection } from "@/components/sections/Services";
import { TechStackSection } from "@/components/sections/TechStack";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";

const AchievementsSection = dynamic(
  () => import("@/components/sections/Achievements").then((mod) => mod.AchievementsSection)
);
const ContactSection = dynamic(
  () => import("@/components/sections/Contact").then((mod) => mod.ContactSection)
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
