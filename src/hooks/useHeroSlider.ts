"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface HeroSlide {
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  stats: { value: string; label: string }[];
  bgFrom: string;
  bgTo: string;
  accentColor: string;
  cta1: string;
  cta2: string;
  image: string;
}

export function useHeroSlider(slidesCount: number, autoPlayInterval = 4000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoPlay) return;

    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }

    autoPlayTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, currentSlide, slidesCount, autoPlayInterval]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  }, [slidesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  }, [slidesCount]);

  const pauseAutoPlay = useCallback(() => setAutoPlay(false), []);
  const resumeAutoPlay = useCallback(() => setAutoPlay(true), []);

  return {
    currentSlide,
    autoPlay,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoPlay,
    resumeAutoPlay,
  };
}
