"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";
import { personalData } from "@/data/portfolioData";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.573-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const whatsappUrl = "https://wa.me/94742269976?text=Hi%20Chathu,%20I'm%20visiting%20your%20portfolio%20and%20would%20like%20to%20connect!";

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Floating Chat Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="pointer-events-auto mb-4 w-[310px] sm:w-[350px] rounded-2xl overflow-hidden bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-emerald-950/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-4 text-white flex items-center justify-between relative">
              <div className="flex items-center space-x-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/30 shadow-md">
                  <Image
                    src={personalData.profileImage}
                    alt={personalData.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide leading-snug">
                    {personalData.name}
                  </h4>
                  <p className="text-xs text-emerald-100/90 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
                    Typically replies in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-950/80 space-y-3">
              <div className="bg-slate-800/90 border border-slate-700/60 p-3.5 rounded-2xl rounded-tl-sm text-slate-200 text-xs sm:text-sm leading-relaxed shadow-sm">
                <p>
                  Hi there! 👋 Thanks for stopping by. How can I help you with your next project or web development needs today?
                </p>
                <span className="block text-[10px] text-slate-400 text-right mt-1.5 font-mono">
                  Just now
                </span>
              </div>

              {/* Quick Feature Tag */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 px-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Direct message to WhatsApp</span>
              </div>

              {/* CTA Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Start Chat on WhatsApp</span>
                <Send className="w-3.5 h-3.5 ml-auto" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button Trigger */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto relative group"
      >
        {/* Subtle Pulse Rings */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />
        )}

        {/* Hover Tooltip (Desktop) */}
        {!isOpen && (
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-slate-200 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
            Chat on WhatsApp
          </span>
        )}

        {/* Badge Indicator for new users */}
        {!hasInteracted && !isOpen && (
          <span className="absolute -top-1 -right-1 z-10 w-4 h-4 bg-emerald-400 text-slate-950 font-extrabold text-[10px] rounded-full flex items-center justify-center shadow-md animate-bounce">
            1
          </span>
        )}

        {/* Main Floating Button */}
        <button
          onClick={togglePopup}
          aria-label="Open WhatsApp chat option"
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 transform-gpu active:scale-95 ${
            isOpen
              ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              : "bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:scale-105 shadow-emerald-500/30"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <WhatsAppIcon className="w-7 h-7 drop-shadow" />
          )}
        </button>
      </motion.div>
    </div>
  );
};
