"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorderContainer: React.FC<{
  borderRadius?: string;
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}> = ({
  borderRadius = "1.75rem",
  children,
  duration = 15000,
  className,
  containerClassName,
}) => {
  return (
    <div
      className={cn(
        "bg-transparent relative p-[1px] overflow-hidden rounded-3xl",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div className="h-20 w-20 opacity-90 bg-[radial-gradient(#a855f7_40%,transparent_60%)]" />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/80 border border-slate-800 backdrop-blur-xl text-white w-full h-full antialiased transition-all duration-300 group hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x || 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y || 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
