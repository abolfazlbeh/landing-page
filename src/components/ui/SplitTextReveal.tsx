"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Splits text into words and animates each word in sequentially
 * when the element enters the viewport — inspired by Chromia's headline animations.
 */
export default function SplitTextReveal({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 80,
  as: Tag = "span",
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.3,
  });

  const words = text.split(" ");

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.28em" }}
        >
          <span
            className={`inline-block ${wordClassName}`}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(100%)",
              transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
