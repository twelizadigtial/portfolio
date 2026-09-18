"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { certificatesData, CertificateItem } from "@/data/portfolioData";
import { AnimatedTestimonials, TestimonialItem } from "@/components/ui/AnimatedTestimonials";

export const AchievementsSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };
    if (selectedCertificate) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCertificate]);

  const testimonialItems: TestimonialItem[] = certificatesData.map((cert) => ({
    id: cert.id,
    title: cert.title,
    category: cert.category,
    image: cert.image,
  }));

  return (
    <section id="achievements" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header (Unchanged Verified Qualifications Section) */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            Verified Qualifications
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Achieved <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">Certificates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-xl mx-auto text-base sm:text-lg"
          >
            Industry certifications in web development, UX design, Java, and digital media.
          </motion.p>
        </div>

        {/* Aceternity UI Animated Testimonials Certificate Showcase */}
        <AnimatedTestimonials
          items={testimonialItems}
          onImageClick={(item) => {
            const found = certificatesData.find((c) => c.id === item.id);
            if (found) setSelectedCertificate(found);
          }}
        />
      </div>

      {/* Lightbox Modal for Full Resolution Preview */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl z-[65]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                    {selectedCertificate.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedCertificate.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(null);
                  }}
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-4 border border-slate-700/80"
                  aria-label="Close Certificate Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[500px] bg-slate-950 p-4 flex items-center justify-center">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  fill
                  className="object-contain p-2 sm:p-4"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
