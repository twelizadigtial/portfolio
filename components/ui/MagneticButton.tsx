"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "glass";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  className,
  variant = "primary",
  icon,
  iconPosition = "right",
  target,
  rel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.35;
    const y = (e.clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 border border-sky-400/30";
      case "secondary":
        return "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 border border-purple-400/30";
      case "glass":
        return "bg-slate-900/60 backdrop-blur-md text-slate-200 border border-slate-700/60 hover:border-sky-500/50 hover:text-white hover:bg-slate-800/80 shadow-md";
      case "outline":
      default:
        return "bg-transparent text-slate-200 border border-slate-700 hover:border-sky-400 hover:text-sky-400";
    }
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 cursor-pointer overflow-hidden group select-none",
        getVariantStyles(),
        className
      )}
    >
      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {icon && iconPosition === "left" && <span className="transition-transform group-hover:-translate-x-1">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return <button onClick={onClick} className="inline-block">{content}</button>;
};
