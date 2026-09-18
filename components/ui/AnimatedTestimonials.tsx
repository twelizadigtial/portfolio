"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, Award } from "lucide-react";

export type TestimonialItem = {
  id: number | string;
  title: string;
  category: string;
  image: string;
  description?: string;
};

export const AnimatedTestimonials: React.FC<{
  items: TestimonialItem[];
  onImageClick?: (item: TestimonialItem) => void;
}> = ({ items, onImageClick }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const isActive = (index: number) => index === active;

  const getRotation = (index: number) => {
    const rotations = [-7, 6, -4, 8, -5, 6, -8, 5, -6, 7, -8, 4, -6, 7];
    return rotations[index % rotations.length];
  };

  return (
    <div className="max-w-sm md:max-w-5xl mx-auto px-4 md:px-8 py-4">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Column: Aceternity Animated Stacked Image Cards */}
        <div>
          <div className="relative h-72 sm:h-84 md:h-90 w-full">
            <AnimatePresence>
              {items.map((item, index) => {
                const rotation = getRotation(index);
                const activeState = isActive(index);
                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotation,
                    }}
                    animate={{
                      opacity: activeState ? 1 : 0.7,
                      scale: activeState ? 1 : 0.94,
                      z: activeState ? 0 : -100,
                      rotate: activeState ? 0 : rotation,
                      zIndex: activeState ? 50 : items.length - index,
                      y: activeState ? [0, -30, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotation,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    onClick={() => activeState && onImageClick && onImageClick(item)}
                    className={`absolute inset-0 origin-bottom rounded-3xl bg-white p-2.5 border-2 border-slate-200/90 shadow-2xl cursor-pointer group flex items-center justify-center overflow-hidden ${
                      activeState ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        draggable={false}
                        className="object-contain p-1 rounded-2xl select-none"
                        priority={index === 0}
                      />
                      {activeState && (
                        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 text-xs font-mono text-white flex items-center gap-2 border border-purple-500/40 shadow-xl backdrop-blur-md">
                            <Maximize2 className="w-3.5 h-3.5 text-purple-400" />
                            Expand View
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Title, Category & Aceternity Navigation Controls */}
        <div className="flex justify-between flex-col py-4 min-h-[220px]">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              {active + 1} of {items.length} · Verified Qualification
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {items[active].title}
            </h3>

            <p className="text-base sm:text-lg text-slate-400 font-normal">
              {items[active].category}
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex gap-4 pt-8 md:pt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous Certificate"
              className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-slate-950 hover:bg-slate-200 flex items-center justify-center group/button transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 stroke-[2.5] text-slate-950 group-hover/button:-translate-x-0.5 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Certificate"
              className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-slate-950 hover:bg-slate-200 flex items-center justify-center group/button transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="h-5 w-5 stroke-[2.5] text-slate-950 group-hover/button:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
