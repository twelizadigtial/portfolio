"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Layout, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  Code2,
  Server,
  Layout,
  Briefcase,
};

export const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Core Expertise & Freelance
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            What <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">I Do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-xl mx-auto text-base sm:text-lg"
          >
            Delivering end-to-end full-stack software solutions, robust backends, UX design, and custom freelance services.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const ServiceIcon = iconMap[service.iconName] || Code2;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={cn(
                  "relative rounded-3xl p-8 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 shadow-xl hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10",
                  isHovered ? "border-sky-500/40 shadow-sky-500/15" : ""
                )}
              >
                {/* Glowing Background Shader on Hover */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    service.colorTheme
                  )}
                />

                {/* Top ambient highlight bar */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Animated Decorative Corner Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900 border border-slate-700/80 flex items-center justify-center mb-6 group-hover:border-sky-400/80 group-hover:bg-sky-500/10 group-hover:shadow-lg group-hover:shadow-sky-500/20 transition-all duration-300 shadow-md">
                    <ServiceIcon className="w-7 h-7 text-sky-400 group-hover:scale-110 group-hover:text-sky-300 transition-all duration-300" />
                  </div>

                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block mb-1 font-bold">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-4">
                    {service.description}
                  </p>

                  {service.techList && service.techList.length > 0 && (
                    <p className="text-xs font-mono text-sky-300 leading-relaxed font-semibold pt-3 border-t border-slate-800/80 mb-6">
                      {service.techList.join(" · ")}
                    </p>
                  )}
                </div>

                <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-mono flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Production Ready
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:border-sky-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                    →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
