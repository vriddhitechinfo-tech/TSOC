"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useEcosystemGSAP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    let handleResize: (() => void) | null = null;

    const ctx = gsap.context(() => {
      if (sectionRef.current && containerRef.current) {
        const section = sectionRef.current;
        const container = containerRef.current;
        const cards = container.querySelectorAll(".gsap-ecosystem-card");

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
          gsap.set(cards, { opacity: 1 });
          return;
        }

        if (cards.length > 0) {
          let timeline: gsap.core.Timeline | null = null;

          const initEcosystemAnimation = () => {
            gsap.set(cards, { clearProps: "all" });

            const isDesktop = window.innerWidth >= 1024;

            if (!isDesktop) {
              const mobileTl = gsap.timeline({
                scrollTrigger: {
                  trigger: container,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              });
              mobileTl.fromTo(
                cards,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.15,
                  ease: "power2.out",
                }
              );
              return mobileTl;
            }

            cards.forEach((card, i) => {
              gsap.set(card, {
                xPercent: 0,
                yPercent: 0,
                x: 0,
                y: i * 8,
                scale: 1 - i * 0.03,
                rotate: i % 2 === 0 ? -2 : 2,
                zIndex: cards.length - i,
                opacity: 1,
              });
            });

            const desktopTl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=1500",
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });

            const finalPositions = [
              { xPercent: -110, yPercent: 0 },
              { xPercent: 0, yPercent: 0 },
              { xPercent: 110, yPercent: 0 },
              { xPercent: -110, yPercent: 110 },
              { xPercent: 0, yPercent: 110 },
              { xPercent: 110, yPercent: 110 },
            ];

            cards.forEach((card, i) => {
              desktopTl.to(
                card,
                {
                  xPercent: finalPositions[i].xPercent,
                  yPercent: finalPositions[i].yPercent,
                  scale: 1,
                  rotate: 0,
                  duration: 1,
                  ease: "power2.inOut",
                },
                i * 0.6
              );
            });

            return desktopTl;
          };

          timeline = initEcosystemAnimation();

          handleResize = () => {
            if (timeline) {
              timeline.scrollTrigger?.kill(true);
              timeline.kill();
            }
            timeline = initEcosystemAnimation();
          };

          window.addEventListener("resize", handleResize);
        }
      }
    });

    return () => {
      ctx.revert();
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return {
    sectionRef,
    containerRef,
  };
}
