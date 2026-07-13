"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useSoftwareCarousel(totalScreens: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          ratios.set(entry.target, entry.intersectionRatio)
        );

        let bestEl: Element | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestEl = el;
          }
        });

        if (bestEl) {
          const idx = cardRefs.current.findIndex((el) => el === bestEl);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { root: track, threshold: [0, 0.25, 0.5, 0.75, 0.9, 1] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [totalScreens]);

  const scrollToIndex = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const goPrev = useCallback(
    () => scrollToIndex(Math.max(0, activeIndex - 1)),
    [activeIndex, scrollToIndex]
  );

  const goNext = useCallback(
    () => scrollToIndex(Math.min(totalScreens - 1, activeIndex + 1)),
    [activeIndex, totalScreens, scrollToIndex]
  );

  return {
    activeIndex,
    trackRef,
    cardRefs,
    scrollToIndex,
    goPrev,
    goNext,
  };
}
