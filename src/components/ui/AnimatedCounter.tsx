"use client";

import { useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(from, to, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent =
            prefix + value.toFixed(decimals) + suffix;
        }
      },
    });

    return controls.stop;
  }, [isInView, from, to, suffix, prefix, decimals]);

  return (
    <span ref={inViewRef}>
      <span ref={ref} className={className}>
        {prefix}
        {from.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
