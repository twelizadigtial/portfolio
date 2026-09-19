"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";
import { skillsData, SkillItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools & IDEs" },
  { id: "design", label: "UI/UX & Design" },
];

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3 sm:mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            Technologies & Tools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Professional <span className="bg-gradient-to-r from-sky-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 sm:mt-4 text-slate-400 max-w-xl mx-auto text-xs sm:text-lg"
          >
            Languages, Frameworks, Tools, and Other Technologies Used
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border font-sans cursor-pointer backdrop-blur-md",
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400/80 shadow-lg shadow-sky-500/25 ring-2 ring-sky-400/20 scale-105"
                    : "bg-slate-900/80 text-slate-300 border-slate-700/80 hover:border-slate-600 hover:text-white hover:bg-slate-800/80"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid - 3 Columns & Compact Height on Mobile */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-4 lg:gap-6 py-2 sm:py-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: SkillItem, idx: number) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group block p-1 sm:p-2 h-full w-full cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Original Portfolio Gliding Spotlight Hover Highlight */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 bg-sky-500/10 dark:bg-slate-800/[0.8] block rounded-2xl sm:rounded-3xl z-0 border border-sky-400/30"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Card Container */}
                <div className="relative z-10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 overflow-hidden bg-slate-900/60 border border-slate-800/80 group-hover:border-sky-400/60 group-hover:shadow-lg group-hover:shadow-sky-500/10 flex flex-col items-center justify-center min-h-[115px] sm:min-h-[175px] w-full transition-all duration-300 backdrop-blur-md">
                  {/* Icon Container */}
                  <div className="h-10 w-10 sm:h-16 sm:w-16 overflow-hidden rounded-lg sm:rounded-xl mb-1.5 sm:mb-3 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 p-1 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      sizes="(max-width: 640px) 40px, 64px"
                      className="object-contain w-full h-full drop-shadow"
                    />
                  </div>

                  {/* Skill Card Title */}
                  <h3 className="text-white font-bold tracking-tight text-center text-[11px] sm:text-sm mb-1 sm:mb-2 line-clamp-1 group-hover:text-sky-300 transition-colors font-sans">
                    {skill.name}
                  </h3>

                  {/* Skill Progress Bar */}
                  <div className="w-full h-1.5 sm:h-2 bg-slate-800/80 mt-0.5 sm:mt-1 rounded-full overflow-hidden border border-slate-700/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 group-hover:from-sky-300 group-hover:to-blue-400 transition-colors transform-gpu"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
