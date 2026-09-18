"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, ArrowRight, Github, Linkedin, Mail, MessageSquare, Video } from "lucide-react";
import { personalData, socialLinks } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#workExperience" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "#services" },
  { name: "Certificates", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const socialIconMap: Record<string, any> = {
  MessageSquare,
  Linkedin,
  Mail,
  Video,
  Github,
};

const drawerVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (window.location.pathname === "/") {
        const sections = navItems
          .filter((item) => item.href.startsWith("#"))
          .map((item) => item.href.substring(1));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      } else if (window.location.pathname === "/projects") {
        setActiveSection("projects");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    if (href === "/projects") {
      e.preventDefault();
      if (window.location.pathname !== "/projects") {
        window.location.href = "/projects";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (window.location.pathname !== "/") {
      e.preventDefault();
      if (href === "#") {
        window.location.href = "/";
      } else {
        window.location.href = "/" + href;
      }
      return;
    }

    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -80;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[80] transition-all duration-300 py-4 px-4 sm:px-8",
          scrolled
            ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-sky-950/20 py-3"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2 group relative z-[90]"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-purple-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-sky-400 group-hover:text-white transition-colors">
                CJ
              </div>
            </div>
            <span className="font-bold tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors text-base sm:text-lg">
              {personalData.shortName}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const itemKey = item.href.startsWith("#") ? item.href.substring(1) : "projects";
              const isActive = activeSection === itemKey;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-full border border-sky-400/30 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-700/80 hover:border-sky-500/60 rounded-full transition-all duration-200 flex items-center gap-1.5 bg-slate-900/40 hover:bg-slate-800/60"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-200 flex items-center gap-1.5 border border-sky-400/30"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden relative z-[90] p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md",
              mobileMenuOpen
                ? "bg-slate-900 border-sky-500/50 text-sky-400 shadow-sky-500/20"
                : "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
            )}
            aria-label="Toggle Navigation Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[70] bg-slate-950/95 backdrop-blur-2xl lg:hidden pt-24 px-5 sm:px-8 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  NAVIGATION DIRECTORY
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {navItems.length} SECTIONS
                </span>
              </div>

              <div className="space-y-1.5">
                {navItems.map((item) => {
                  const itemKey = item.href.startsWith("#") ? item.href.substring(1) : "projects";
                  const isActive = activeSection === itemKey;
                  return (
                    <motion.a
                      key={item.name}
                      variants={itemVariants}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "group py-3 px-4 rounded-2xl transition-all duration-200 flex items-center justify-between border",
                        isActive
                          ? "bg-slate-900/90 border-sky-500/40 text-sky-400 font-bold shadow-lg shadow-sky-950/40"
                          : "bg-slate-900/40 border-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-900/80 hover:border-slate-700/80"
                      )}
                    >
                      <span className="text-base sm:text-lg font-semibold tracking-tight">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions & Social Bar */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-8 pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-center text-xs font-mono font-semibold text-slate-200 border border-slate-700/80 bg-slate-900 rounded-xl flex items-center justify-center gap-1.5 hover:border-sky-500/50 transition-colors shadow-sm"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="py-3 px-4 text-center text-xs font-mono font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 border border-sky-400/30"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Let's Talk</span>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {socialLinks.map((social) => {
                  const SocialIcon = socialIconMap[social.icon] || Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                    >
                      <SocialIcon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

