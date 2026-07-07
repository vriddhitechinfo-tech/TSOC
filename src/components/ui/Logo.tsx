"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Logo({ className = "", size = 32, color = "#fda85d" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer loop background path */}
      <path
        d="M 60 15 
           C 75 15, 85 25, 85 40 
           C 85 55, 75 60, 60 60 
           C 45 60, 35 55, 35 40 
           C 35 25, 45 15, 60 15 Z"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 60 105 
           C 75 105, 85 95, 85 80 
           C 85 65, 75 60, 60 60 
           C 45 60, 35 65, 35 80 
           C 35 95, 45 105, 60 105 Z"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 15 60 
           C 15 75, 25 85, 40 85 
           C 55 85, 60 75, 60 60 
           C 60 45, 55 35, 40 35 
           C 25 35, 15 45, 15 60 Z"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 105 60 
           C 105 75, 95 85, 80 85 
           C 65 85, 60 75, 60 60 
           C 60 45, 65 35, 80 35 
           C 95 35, 105 45, 105 60 Z"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Diamond Core */}
      <rect
        x="47"
        y="47"
        width="26"
        height="26"
        rx="2"
        transform="rotate(45 60 60)"
        stroke={color}
        strokeWidth="4"
        fill="#0f0a06"
      />
    </svg>
  );
}
