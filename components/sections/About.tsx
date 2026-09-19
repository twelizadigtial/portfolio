"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import confetti from "canvas-confetti";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Check,
  Copy,
  FileText,
  Sparkles,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Building2,
} from "lucide-react";
import { personalData, educationData } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#8b5cf6", "#3b82f6"],
    });

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const personalDetails = [
    { label: "Full Name", value: personalData.name, icon: User },
    { label: "Email", value: personalData.email, icon: Mail },
    { label: "Phone", value: personalData.phone, icon: Phone },
    { label: "Birthday", value: personalData.birthday, icon: Calendar },
    { label: "Location", value: personalData.location, icon: MapPin },
  ];

  const academicItems = educationData.filter((item) => item.category === "education");
  const courseItems = educationData.filter((item) => item.category === "course");

  const academicRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: academicScrollProgress } = useScroll({
    target: academicRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScaleY = useSpring(academicScrollProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Discover My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            About <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Me</span> & Background
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-xl mx-auto text-base sm:text-lg"
          >
            Passionate software developer focused on crafting performant digital experiences.
          </motion.p>
        </div>

        {/* Aceternity-inspired Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Item 1: Profile & Main Bio (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-7 bg-gradient-to-br from-slate-900/95 via-slate-900/75 to-slate-950 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl relative overflow-hidden group hover:border-sky-400/60 transition-[border-color,box-shadow,background-color] duration-300 flex flex-col justify-between shadow-2xl transform-gpu [backface-visibility:hidden]"
          >
            {/* Ambient Card Spotlight Glow */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/30 transition-all duration-500" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-6 sm:gap-8 items-center lg:items-start">
              {/* Animated Studio Portrait Showcase (Diamond Aura + Rotating Ring + Floating Code Box) */}
              <div className="relative shrink-0 my-3 lg:my-0 flex items-center justify-center">
                {/* Glowing Outer Diamond Aura */}
                <div className="absolute inset-0 w-48 sm:w-56 h-48 sm:h-56 -m-2 sm:-m-3 rounded-3xl border border-sky-400/30 bg-sky-500/10 rotate-12 animate-pulse pointer-events-none shadow-[0_0_40px_rgba(56,189,248,0.2)]" />
                
                {/* Rotating Accent Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-[36px] border border-dashed border-purple-400/40 pointer-events-none"
                />

                {/* Main Gradient Frame & Portrait */}
                <div className="relative z-10 p-[3px] rounded-[26px] bg-gradient-to-tr from-sky-400 via-purple-400 to-pink-400 shadow-2xl shadow-sky-500/35 group/photo hover:scale-[1.02] transition-all duration-500">
                  <div className="relative w-44 sm:w-52 h-56 sm:h-64 rounded-[23px] overflow-hidden bg-slate-950">
                    <Image
                      src={personalData.profileImage}
                      alt={personalData.name}
                      fill
                      className="object-cover object-[50%_20%] group-hover/photo:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                    {/* Available Badge inside image */}
                    <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/20 flex items-center justify-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono font-semibold text-slate-100 truncate">
                        Available for Work
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Code Snippet Card Widget */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-3 -right-2 sm:-right-4 px-3 py-2 rounded-xl bg-slate-950/95 border border-slate-700/80 backdrop-blur-md shadow-xl text-[10px] font-mono text-slate-200 z-20 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                  <div>
                    <span className="text-sky-300 font-bold">dev.ts</span>
                    <span className="text-slate-400 ml-1">200 OK</span>
                  </div>
                </motion.div>
              </div>

              {/* Profile Details & Bio */}
              <div className="flex flex-col text-center lg:text-left justify-between h-full pt-1">
                <div>
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1 font-bold">
                    {personalData.role}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 group-hover:text-sky-200 transition-colors">
                    {personalData.name}
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal mb-5 italic border-l-0 lg:border-l-2 lg:border-sky-400/50 lg:pl-3">
                    "{personalData.bio}"
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1.5 text-xs rounded-full bg-slate-800/90 text-slate-100 border border-slate-700 shadow-sm font-medium">
                    Full-Stack Development
                  </span>
                  <span className="px-3 py-1.5 text-xs rounded-full bg-slate-800/90 text-slate-100 border border-slate-700 shadow-sm font-medium">
                    UI/UX Design
                  </span>
                  <span className="px-3 py-1.5 text-xs rounded-full bg-slate-800/90 text-slate-100 border border-slate-700 shadow-sm font-medium">
                    IT Training & Teaching
                  </span>
                  <span className="px-3 py-1.5 text-xs rounded-full bg-slate-800/90 text-slate-100 border border-slate-700 shadow-sm font-medium">
                    AI & Emerging Tech
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <a
                href={`tel:${personalData.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-sky-400 transition-colors group/phone"
              >
                <Phone className="w-4 h-4 text-sky-400 group-hover/phone:scale-110 transition-transform" />
                <span>{personalData.phone}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1.5 transition-colors group/btn"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />}
                {copied ? "Email Copied to Clipboard!" : "Copy Email"}
              </button>
            </div>
          </motion.div>

          {/* Bento Item 2: Personal Details Grid (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-5 bg-slate-900/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-purple-400/50 transition-[border-color,box-shadow,background-color] duration-300 shadow-xl transform-gpu [backface-visibility:hidden]"
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-400" />
                Personal Details
              </h4>
              <div className="space-y-3">
                {personalDetails.map((detail, idx) => {
                  const DetailIcon = detail.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:bg-slate-800/40 transition-colors"
                    >
                      <span className="text-xs text-slate-400 flex items-center gap-2 font-mono">
                        <DetailIcon className="w-3.5 h-3.5 text-sky-400" />
                        {detail.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {detail.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3 & 4: Integrated Education & Academic Background Block (12 Cols) */}
          <div id="education" ref={academicRef} className="md:col-span-12 scroll-mt-24">
            <div className="my-4 pt-4 border-t border-slate-800/60 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white">Academic Background & Qualifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
              {/* Degrees & Qualifications (6 Cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="md:col-span-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-sky-500/40 transition-[border-color,box-shadow,background-color] duration-300 transform-gpu [backface-visibility:hidden]"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <GraduationCap className="w-5 h-5 text-sky-400" />
                    <h4 className="text-lg font-bold text-white">Degrees & Diplomas</h4>
                  </div>
                  <div className="relative pl-6 sm:pl-8">
                    {/* Background track line */}
                    <div className="absolute left-2 sm:left-2.5 top-1.5 bottom-1.5 w-0.5 bg-slate-800/80 rounded-full" />
                    {/* Animated glowing fill line */}
                    <motion.div
                      style={{ scaleY: lineScaleY }}
                      className="absolute left-2 sm:left-2.5 top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500 to-purple-500 origin-top rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    />

                    <div className="space-y-6 sm:space-y-8">
                      {academicItems.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -16, y: 12 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                          className="relative group"
                        >
                          {/* Animated timeline dot */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.35, delay: idx * 0.12 + 0.1 }}
                            className="absolute -left-[20px] sm:-left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:scale-125 group-hover:bg-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.8)] transition-all duration-200 z-10"
                          />
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400 mb-1">
                            <Calendar className="w-3 h-3" />
                            {item.duration}
                          </span>
                          <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                            {item.title}
                          </h5>
                          <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono mt-1">
                            <Building2 className="w-3.5 h-3.5 text-slate-500" />
                            {item.institution}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Special Courses Followed (6 Cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="md:col-span-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/40 transition-[border-color,box-shadow,background-color] duration-300 transform-gpu [backface-visibility:hidden]"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-bold text-white">Courses & Certifications</h4>
                  </div>
                  <div className="relative pl-6 sm:pl-8">
                    {/* Background track line */}
                    <div className="absolute left-2 sm:left-2.5 top-1.5 bottom-1.5 w-0.5 bg-slate-800/80 rounded-full" />
                    {/* Animated glowing fill line */}
                    <motion.div
                      style={{ scaleY: lineScaleY }}
                      className="absolute left-2 sm:left-2.5 top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-purple-400 via-indigo-500 to-sky-400 origin-top rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                    />

                    <div className="space-y-6 sm:space-y-8">
                      {courseItems.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -16, y: 12 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                          className="relative group"
                        >
                          {/* Animated timeline dot */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.35, delay: idx * 0.12 + 0.1 }}
                            className="absolute -left-[20px] sm:-left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-purple-400 group-hover:scale-125 group-hover:bg-purple-400 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-200 z-10"
                          />
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-400 mb-1">
                            <Calendar className="w-3 h-3" />
                            {item.duration}
                          </span>
                          <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                            {item.title}
                          </h5>
                          <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono mt-1">
                            <Building2 className="w-3.5 h-3.5 text-slate-500" />
                            {item.institution}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bento Item 5: Official Resume Card (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300"
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Resume & Credentials</h4>
              <p className="text-xs text-slate-400 mb-6">
                Access my complete professional background and official document directly.
              </p>
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/60 transition-all duration-200 group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-white block group-hover:text-sky-300 transition-colors">
                      Official Resume
                    </span>
                    <span className="text-xs text-slate-400 font-mono">View on Google Drive</span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-sky-500 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Bento Item 6: Collaboration CTA (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 bg-gradient-to-r from-sky-950/40 via-purple-950/40 to-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to start a project together?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-6">
              I'm open for software engineering opportunities, web development contracts, and UI/UX design consultations.
            </p>
            <MagneticButton
              onClick={handleCopyEmail}
              variant="primary"
              icon={copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              iconPosition="left"
            >
              {copied ? "Email Copied!" : "Copy Email Address"}
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
