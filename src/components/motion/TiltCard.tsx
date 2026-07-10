"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Max tilt in degrees */
  tilt?: number;
  /** Entrance stagger delay in seconds */
  delay?: number;
  /** Entrance offset — where the card slides in from */
  fromX?: number;
  fromY?: number;
};

/**
 * 3D tilt card: fades/slides in when scrolled into view, then tilts
 * toward the cursor on hover. Pass the card's visual classes
 * (glass-card, padding, spacing) via className — this replaces the
 * card's outer div.
 */
export default function TiltCard({
  children,
  className = "",
  id,
  tilt = 8,
  delay = 0,
  fromX = 0,
  fromY = 40,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 260, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tilt, -tilt]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tilt, tilt]), spring);

  // Cache the bounding rect once on enter instead of calling
  // getBoundingClientRect() on every mousemove — that forces a synchronous
  // layout read per event and is the main source of hover jank.
  const handleMouseEnter = () => {
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current;
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: fromX, y: fromY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
