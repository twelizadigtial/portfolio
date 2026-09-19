"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FileText,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Video,
} from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personalData } from "@/data/portfolioData";

// Dynamically import 3D WebGL Background (client-side only)
const Hero3DBackground = dynamic(
  () => import("@/components/ui/Hero3DBackground"),
  { ssr: false }
);

export const HeroSection: React.FC = () => {
  // 3D Parallax Mouse Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToAbout = () => {
    const elem = document.getElementById("about");
    if (elem) {
      const yOffset = -80;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "whatsapp":
        return <MessageSquare className="w-4 h-4" />;
      case "skype":
        return <Video className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 [perspective:1000px]"
    >
      {/* 3D WebGL Background Canvas */}
      <Hero3DBackground />

      {/* Background Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#38bdf8" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#a855f7" />

      {/* Ambient Cyber Grid Overlay & Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415520_1px,transparent_1px),linear-gradient(to_bottom,#33415520_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Centered Main Content Container with Interactive 3D Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center"
      >
        
        {/* Name Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20, z: -20 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/95 border border-sky-400/40 text-sky-300 font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-xl shadow-sky-950/40 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          CHATHU JAYARATHNA
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, z: -30 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mb-4 max-w-5xl mx-auto w-full"
        >
          <h1 className="text-[1.1rem] min-[360px]:text-[1.35rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md w-full">
            <span className="block whitespace-nowrap">Transforming Ideas Into</span>
            <span className="bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 bg-clip-text text-transparent block whitespace-nowrap mt-1 sm:mt-2 drop-shadow-[0_0_45px_rgba(56,189,248,0.45)]">
              Dreams Through Technology.
            </span>
          </h1>
        </motion.div>

        {/* Introduction Text */}
        <motion.p
          initial={{ opacity: 0, y: 20, z: -20 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-4 text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl font-normal leading-relaxed mb-6"
        >
          A <span className="font-bold text-white">Web Developer, Designer, IT Trainer & AI Enthusiast</span> passionate about building modern digital experiences, developing full-stack applications, exploring AI-powered solutions, and sharing knowledge through teaching.
        </motion.p>

        {/* Skill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20, z: -10 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-2 flex flex-wrap items-center justify-center gap-2.5 text-[11px] sm:text-xs font-mono text-slate-300 mb-8"
        >
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-200 shadow-md backdrop-blur-md hover:border-sky-500/40 hover:text-white transition-all duration-300">
            Full-Stack Development
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-200 shadow-md backdrop-blur-md hover:border-purple-500/40 hover:text-white transition-all duration-300">
            UI/UX Design
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-200 shadow-md backdrop-blur-md hover:border-indigo-500/40 hover:text-white transition-all duration-300">
            IT Training & AI Exploration
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold shadow-md backdrop-blur-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Work
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, z: -10 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto"
        >
          <MagneticButton
            onClick={scrollToAbout}
            variant="primary"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Portfolio
          </MagneticButton>

          <MagneticButton
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="glass"
            icon={<FileText className="w-4 h-4 text-sky-400" />}
            iconPosition="left"
          >
            View Resume
          </MagneticButton>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20, z: -10 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="pt-6 border-t border-slate-800 w-full max-w-md flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-slate-300 uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            LET'S CONNECT
          </span>
          <div className="flex items-center gap-3">
            {[
              { name: "GitHub", url: "https://github.com/Chathu-Jayarathna" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/chathushi-jayarathna-578098234" },
              { name: "WhatsApp", url: "https://wa.me/94742269976" },
              { name: "Email", url: "mailto:chathushi0707@gmail.com" },
              { name: "Skype", url: "https://join.skype.com/invite/sneaIOJ34nBW" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-200 hover:text-sky-300 hover:border-sky-400 hover:bg-slate-800 transition-all duration-300 shadow-md group"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {getSocialIcon(link.name)}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 cursor-pointer group z-20"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 group-hover:text-sky-400 transition-colors">
          SCROLL
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-700 group-hover:border-sky-400 p-1 flex justify-center transition-colors shadow-lg">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-sky-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
