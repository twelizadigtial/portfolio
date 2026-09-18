"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  ArrowLeft,
  Filter,
  Layers,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/portfolioData";

type CategoryFilter = "All" | "3D & WebGL" | "Web Apps & Systems" | "E-Commerce" | "Client Showcase";

const filterCategories: CategoryFilter[] = [
  "All",
  "3D & WebGL",
  "Web Apps & Systems",
  "E-Commerce",
  "Client Showcase",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;

    const badge = (project.categoryBadge || "").toLowerCase();
    const has3D = project.technologies.some((t) => t.name.toLowerCase().includes("3d"));

    if (activeCategory === "3D & WebGL") {
      return has3D || badge.includes("3d");
    }
    if (activeCategory === "Web Apps & Systems") {
      return (
        badge.includes("web app") ||
        badge.includes("system") ||
        badge.includes("portal") ||
        badge.includes("education") ||
        badge.includes("infrastructure") ||
        badge.includes("search")
      );
    }
    if (activeCategory === "E-Commerce") {
      return (
        badge.includes("e-commerce") ||
        badge.includes("shop") ||
        badge.includes("bakery") ||
        badge.includes("fashion") ||
        badge.includes("footwear")
      );
    }
    if (activeCategory === "Client Showcase") {
      return (
        !project.githubUrl ||
        badge.includes("agency") ||
        badge.includes("brand") ||
        badge.includes("photography") ||
        badge.includes("gym") ||
        badge.includes("industrial")
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Navigation back bar */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50 text-xs font-mono transition-all duration-200 shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            Back to Home
          </Link>

          <div className="text-xs font-mono text-slate-400 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-slate-800 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            Total Projects: <span className="text-sky-400 font-bold">{projectsData.length}</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5 text-sky-400" />
            Filter:
          </div>
          {filterCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400/40 shadow-lg shadow-sky-500/20 scale-105 font-bold"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid (TWELIZA-inspired luxury showcase cards) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 sm:p-6 backdrop-blur-2xl group hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top ambient highlight line (TWELIZA signature accent) */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 via-purple-400/30 to-transparent pointer-events-none" />

                <div>
                  {/* Media Showcase Viewport */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-slate-950 border border-slate-800/80 shadow-inner">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                        {project.categoryBadge && (
                          <div className="absolute top-3.5 left-3.5 z-10 max-w-[85%]">
                            <span className="px-3 py-1 rounded-full bg-slate-950/90 text-sky-300 border border-sky-500/40 text-[10px] font-mono font-bold tracking-wide backdrop-blur-md shadow-lg truncate block">
                              {project.categoryBadge}
                            </span>
                          </div>
                        )}

                        <div className="absolute top-3.5 right-3.5 z-10">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white border border-emerald-400/40 text-[10px] font-mono font-semibold tracking-wide backdrop-blur-md shadow-lg flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Live Demo
                          </span>
                        </div>
                      </a>
                    ) : (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                        {project.categoryBadge && (
                          <div className="absolute top-3.5 left-3.5 z-10 max-w-[85%]">
                            <span className="px-3 py-1 rounded-full bg-slate-950/90 text-sky-300 border border-sky-500/40 text-[10px] font-mono font-bold tracking-wide backdrop-blur-md shadow-lg truncate block">
                              {project.categoryBadge}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Card Information */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight mb-2">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/90 font-light leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Overlapping Tech Icons & Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center py-0.5 gap-y-1">
                    {project.technologies.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="relative group/tech border border-slate-700/90 hover:border-sky-400 bg-slate-900/95 w-8 sm:w-9.5 h-8 sm:h-9.5 rounded-full flex justify-center items-center shadow-md shadow-slate-950/90 transition-all duration-300 hover:scale-125 hover:z-30 hover:shadow-lg hover:shadow-sky-500/30 backdrop-blur-xl shrink-0"
                        style={{
                          marginLeft: tIdx === 0 ? "0" : "-8px",
                        }}
                      >
                        <div className="relative w-4 sm:w-5 h-4 sm:h-5">
                          <Image src={tech.icon} alt={tech.name} fill unoptimized className="object-contain drop-shadow" />
                        </div>
                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-sky-500/40 text-sky-300 text-[11px] font-mono font-medium whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-all duration-200 pointer-events-none z-50 shadow-2xl shadow-sky-500/20 backdrop-blur-md">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-xs font-mono font-semibold text-white flex items-center gap-1.5 shadow-md shadow-sky-500/20 transition-all hover:scale-105"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-sky-400" /> Client Work
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to bring your digital product to life?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-6 font-light">
            Available for freelance web engineering, custom UI/UX design, and full-stack software development.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
