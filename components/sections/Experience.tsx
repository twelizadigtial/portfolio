"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { MovingBorderContainer } from "@/components/ui/MovingBorders";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="workExperience" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">Work Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-xl mx-auto text-base sm:text-lg"
          >
            Proven track record in international teams across Malaysia, Singapore, and Sri Lanka.
          </motion.p>
        </div>

        {/* Experience Cards Grid with Original Portfolio Moving Border Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <MovingBorderContainer
                duration={12000 + idx * 3000}
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Header with thumbnail & role */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 p-2 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <Image
                        src={exp.thumbnail}
                        alt={exp.company}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs font-mono text-slate-300">
                        <span className="text-sky-400 font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-purple-300 font-semibold">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities List */}
                  <ul className="space-y-3 mt-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span>Verified Experience</span>
                  <span className="text-purple-300 font-semibold">{exp.company}</span>
                </div>
              </MovingBorderContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
