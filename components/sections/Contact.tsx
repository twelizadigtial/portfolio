"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Check,
  Copy,
  MessageSquare,
  Linkedin,
  Sparkles,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { personalData } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactOptions = [
    {
      id: "email",
      title: "Email",
      label: "Primary Email",
      value: personalData.email,
      icon: Mail,
      color: "from-sky-500/20 via-blue-500/10 to-transparent",
      borderColor: "group-hover:border-sky-500/50",
      iconBg: "bg-sky-500/10 border-sky-500/30 text-sky-400",
      isCopyable: true,
      actionText: copied ? "Copied to Clipboard!" : "Copy Email",
      href: `mailto:${personalData.email}`,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      label: "Instant Messaging",
      value: "(+94) 74 226 9976",
      icon: MessageSquare,
      color: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "group-hover:border-emerald-500/50",
      iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      isCopyable: false,
      actionText: "Chat on WhatsApp",
      href: "https://wa.me/94742269976",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      label: "Professional Network",
      value: "Chathushi Jayarathna",
      icon: Linkedin,
      color: "from-blue-600/20 via-indigo-500/10 to-transparent",
      borderColor: "group-hover:border-blue-500/50",
      iconBg: "bg-blue-600/10 border-blue-500/30 text-blue-400",
      isCopyable: false,
      actionText: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/chathushi-jayarathna-578098234",
    },
  ];

  return (
    <footer id="contact" className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Collaborate
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Looking for a <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Creative Partner</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-200 text-base sm:text-lg font-normal"
          >
            Feel free to reach out directly through any of the preferred contact channels below.
          </motion.p>
        </div>

        {/* 3 Contact Cards Grid: Email, WhatsApp, LinkedIn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          {contactOptions.map((option, idx) => {
            const IconComponent = option.icon;

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10 ${option.borderColor}`}
              >
                {/* Background Ambient Glow Shader */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top ambient highlight line */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-2xl border ${option.iconBg} flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                    {option.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono break-all mb-6">
                    {option.value}
                  </p>
                </div>

                {/* Card Action */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80">
                  {option.isCopyable ? (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 text-sky-400 hover:text-white transition-all text-xs font-mono font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{option.actionText}</span>
                    </button>
                  ) : (
                    <a
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 text-slate-200 hover:text-white transition-all text-xs font-mono font-semibold flex items-center justify-center gap-2 shadow-sm group/btn"
                    >
                      <span>{option.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-sky-400 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>
            Copyright © {new Date().getFullYear()} <span className="text-white font-semibold">{personalData.name}</span>. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/50 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
