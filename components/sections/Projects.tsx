"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/portfolioData";

interface ProjectsSectionProps {
  isHomePage?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isHomePage = true }) => {
  // Main projects: TWELIZA (ID 1), Shoe Shop (ID 2), Rose Cake House (ID 4)
  const featuredProject = projectsData.find((p) => p.id === 1) || projectsData[0];
  const gridProjects = projectsData.filter((p) => [2, 4].includes(p.id));

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header (TWELIZA Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] font-bold text-sky-400 uppercase tracking-[0.22em] px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 backdrop-blur-xl shadow-sm inline-block"
            >
              // Selected Work & Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Projects that <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">speak for themselves</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-base text-slate-300 leading-relaxed font-light"
            >
              From business websites to e-commerce platforms and custom digital systems, we create digital experiences designed around real business needs.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-xl shadow-sky-500/20 transform hover:-translate-y-0.5 border border-sky-400/30"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* TWELIZA Layout: 1 Full-Width Featured Project Hero Card */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-slate-900/80 border border-slate-700/80 p-6 sm:p-10 backdrop-blur-2xl group relative overflow-hidden hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500"
          >
            {/* Top ambient highlight line (TWELIZA signature accent) */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 via-purple-400/40 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Information */}
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-1.5 border backdrop-blur-md bg-sky-500/15 text-sky-300 border-sky-400/40 shadow-sm font-mono font-bold px-3.5 py-1 rounded-full uppercase tracking-wider text-[10px]">
                  Featured Project · {featuredProject.categoryBadge}
                </span>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {featuredProject.liveUrl ? (
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {featuredProject.title}
                    </a>
                  ) : (
                    featuredProject.title
                  )}
                </h3>

                <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-normal">
                  {featuredProject.description}
                </p>

                {/* Overlapping Tech Badges with Tooltips + Actions */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                  <div className="flex flex-wrap items-center py-1 gap-y-1">
                    {featuredProject.technologies.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="relative group/tech border border-slate-700 hover:border-sky-400 bg-slate-900 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex justify-center items-center shadow-md shadow-slate-950/90 transition-all duration-300 hover:scale-125 hover:z-30 hover:shadow-lg hover:shadow-sky-500/30 backdrop-blur-xl shrink-0"
                        style={{ marginLeft: tIdx === 0 ? "0" : "-8px" }}
                      >
                        <div className="relative w-4 sm:w-5.5 h-4 sm:h-5.5">
                          <Image src={tech.icon} alt={tech.name} fill unoptimized className="object-contain drop-shadow" />
                        </div>
                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 border border-sky-400/50 text-sky-300 text-[11px] font-mono font-medium whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-all duration-200 pointer-events-none z-50 shadow-2xl shadow-sky-500/20 backdrop-blur-md">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-xs font-mono font-semibold text-white flex items-center gap-2 shadow-md shadow-sky-500/20 transition-all hover:scale-105 shrink-0"
                    >
                      <span>Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Media Viewport */}
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
                {featuredProject.liveUrl ? (
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      loading="lazy"
                      className="object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white border border-emerald-400/40 text-[10px] font-mono font-semibold tracking-wide backdrop-blur-md shadow-lg flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live Demo
                      </span>
                    </div>
                  </a>
                ) : (
                  <>
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      loading="lazy"
                      className="object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* TWELIZA Layout: 2-Column Grid for Secondary Main Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-5 sm:p-6 backdrop-blur-2xl group relative overflow-hidden hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Top ambient highlight line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 via-purple-400/30 to-transparent pointer-events-none" />

              <div>
                {/* Media Showcase Viewport */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-slate-950 border border-slate-800 shadow-inner">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        loading="lazy"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        loading="lazy"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

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

              {/* Card Footer: Tech Stack & Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center py-0.5 gap-y-1">
                  {project.technologies.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="relative group/tech border border-slate-700/90 hover:border-sky-400 bg-slate-900/95 w-8 sm:w-9.5 h-8 sm:h-9.5 rounded-full flex justify-center items-center shadow-md shadow-slate-950/90 transition-all duration-300 hover:scale-125 hover:z-30 hover:shadow-lg hover:shadow-sky-500/30 backdrop-blur-xl shrink-0"
                      style={{ marginLeft: tIdx === 0 ? "0" : "-8px" }}
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
        </div>
      </div>
    </section>
  );
};
