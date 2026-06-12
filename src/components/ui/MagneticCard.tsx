"use client";

import { useRef, useState, useCallback } from "react";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Chromia-style magnetic card: subtly tilts toward the cursor on hover.
 * Uses CSS transforms only — GPU composited, no layout shifts.
 */
export default function MagneticCard({
  children,
  className = "",
  strength = 12,
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const rotY = dx * strength;
      const rotX = -dy * (strength * 0.6);

      setTransform(
        `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`
      );
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
