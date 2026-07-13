"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Access to professional software was great, but the ERO coaching completely changed my trajectory. I went from splitting 30% of my fees to keeping 100% of my revenues and building my own office.",
      name: "Tasha M.",
      role: "ERO & Firm Owner",
      location: "Atlanta, GA",
      avatar: "/avatar_tasha.png",
    },
    {
      quote:
        "Running a Service Bureau felt overwhelming until I went through the Growth Program. Having step-by-step audit forms, compliance blueprints, and tech automations made all the difference.",
      name: "David C.",
      role: "Service Bureau Owner",
      location: "Dallas, TX",
      avatar: "/avatar_david.png",
    },
    {
      quote:
        "The Tech Tuesday CRM setup saved our office over 40 hours of manual work in February alone. Clients loved the automated document uploads, and we doubled our filing throughput.",
      name: "Marcus K.",
      role: "Independent Tax Preparer",
      location: "Houston, TX",
      avatar: "/avatar_tasha.png",
    },
    {
      quote:
        "I've been in the tax industry for 8 years, and The Sector of Collectives is the first community that actually delivers on its promises. Real attorney consultations and actual systems support.",
      name: "Alicia R.",
      role: "Multi-Location Firm Owner",
      location: "Chicago, IL",
      avatar: "/avatar_david.png",
    },
    {
      quote:
        "Joining this collective was the best business decision I've made. The daily open office hours are like having an on-demand operations team ready to solve any diagnostic or software issue.",
      name: "Sarah P.",
      role: "Firm Owner",
      location: "Tampa, FL",
      avatar: "/avatar_tasha.png",
    },
    {
      quote:
        "The compliance blueprints alone saved us from several audit risks. Our sub-offices feel supported, and our software distribution runs completely on auto-pilot now.",
      name: "James L.",
      role: "Service Bureau Operator",
      location: "Charlotte, NC",
      avatar: "/avatar_david.png",
    },
    {
      quote:
        "The community of fellow EROs is worth the entry fee alone. You get to mastermind with tax pros doing 6 and 7 figures, sharing marketing scripts that actually convert clients.",
      name: "Elena R.",
      role: "Tax Consultant",
      location: "Phoenix, AZ",
      avatar: "/avatar_tasha.png",
    },
  ];

  // Duplicate the list to create a seamless looping marquee
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full relative overflow-hidden py-4 select-none">
      {/* CSS keyframe styles for infinite translation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Marquee Wrapper Row — masked so cards actually dissolve at the edges
          instead of being hard-clipped by the container */}
      <div
        className="animate-marquee-infinite gap-6"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {doubledTestimonials.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="w-[320px] sm:w-[380px] h-[260px] bg-[#2A160E]/40 border border-[#FF9F76]/15 hover:border-[#FF9F76]/35 rounded-2xl p-5 relative backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 shrink-0 hover:shadow-[#FF9F76]/10 hover:shadow-lg"
          >
            {/* Background quote glow decoration */}
            <Quote className="absolute right-4 top-4 w-16 h-16 text-[#FF9F76]/5 -z-10 pointer-events-none" />

            <div className="space-y-3">
              <Quote className="w-5 h-5 text-[#FF9F76]/70 shrink-0" />
              <p className="text-xs sm:text-[13px] italic text-[#EDE9E0]/80 leading-relaxed font-medium line-clamp-4">
                &quot;{item.quote}&quot;
              </p>
            </div>

            {/* User details */}
            <div className="border-t border-[#FF9F76]/10 pt-3.5 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#FF9F76]/25 shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left leading-none">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {item.name}
                </h4>
                <p className="text-xs text-[#EDE9E0]/50 font-semibold uppercase tracking-wider mt-0.5">
                  {item.role}
                </p>
                <p className="text-xs text-[#FF9F76] font-semibold mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
