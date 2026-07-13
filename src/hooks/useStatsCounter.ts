"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useStatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearsValRef = useRef<HTMLSpanElement>(null);
  const erosValRef = useRef<HTMLSpanElement>(null);
  const membersValRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (!containerRef.current) return;

    const statsData = { years: 0, eros: 0, members: 0 };
    const tween = gsap.to(statsData, {
      years: 12,
      eros: 500,
      members: 2000,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (yearsValRef.current) {
          yearsValRef.current.innerText = `${Math.floor(statsData.years)}+`;
        }
        if (erosValRef.current) {
          erosValRef.current.innerText = `${Math.floor(statsData.eros)}+`;
        }
        if (membersValRef.current) {
          membersValRef.current.innerText = `${Math.floor(statsData.members).toLocaleString()}+`;
        }
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return {
    containerRef,
    yearsValRef,
    erosValRef,
    membersValRef,
  };
}
