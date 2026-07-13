"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 420;
const BRAND_PEACH = "#FF9F76";
// Camera sits at z=6 looking toward -z; keep every particle safely in front
// of it (z well below 6) so perspective size-attenuation never blows up.
const FIELD_X = 9;
const FIELD_Y = 5.5;
const FIELD_Z_NEAR = 2;
const FIELD_Z_FAR = -14;

function PeachParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  // Base position each particle drifts around, plus a per-particle phase/speed
  // /amplitude so the field reads as gently floating dust, not a static print.
  const { basePositions, seeds } = useMemo(() => {
    const base = new Float32Array(PARTICLE_COUNT * 3);
    const seedArr = new Float32Array(PARTICLE_COUNT * 4); // phaseX, phaseY, speed, amp
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      base[i * 3] = (Math.random() * 2 - 1) * FIELD_X;
      base[i * 3 + 1] = (Math.random() * 2 - 1) * FIELD_Y;
      base[i * 3 + 2] = FIELD_Z_NEAR + Math.random() * (FIELD_Z_FAR - FIELD_Z_NEAR);
      seedArr[i * 4] = Math.random() * Math.PI * 2;
      seedArr[i * 4 + 1] = Math.random() * Math.PI * 2;
      seedArr[i * 4 + 2] = 0.15 + Math.random() * 0.25;
      seedArr[i * 4 + 3] = 0.25 + Math.random() * 0.45;
    }
    return { basePositions: base, seeds: seedArr };
  }, []);

  const livePositions = useMemo(() => basePositions.slice(), [basePositions]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      // Slow, ambient drift — gentle oscillation, not a full spin, so the
      // wide field never rotates a particle's x/z extent into the camera.
      groupRef.current.rotation.y = Math.sin(t * 0.045) * 0.12;
      groupRef.current.rotation.x = Math.sin(t * 0.06) * 0.05;
    }

    // Per-particle floating motion: each dot bobs on its own phase/speed so
    // the field visibly drifts rather than sitting frozen in place.
    const posAttr = geometryRef.current?.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (posAttr) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const phaseX = seeds[i * 4];
        const phaseY = seeds[i * 4 + 1];
        const speed = seeds[i * 4 + 2];
        const amp = seeds[i * 4 + 3];
        livePositions[i * 3] = basePositions[i * 3] + Math.sin(t * speed + phaseX) * amp;
        livePositions[i * 3 + 1] = basePositions[i * 3 + 1] + Math.cos(t * speed * 0.8 + phaseY) * amp;
      }
      posAttr.needsUpdate = true;
    }

    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.28 + Math.sin(t * 0.35) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[livePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={BRAND_PEACH}
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!mounted || reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none" }}
      >
        <PeachParticles />
      </Canvas>
    </div>
  );
}
