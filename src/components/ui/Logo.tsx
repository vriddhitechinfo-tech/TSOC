"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="The Sector of Collectives Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
