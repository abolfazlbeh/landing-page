/**
 * PhotoPlaceholder
 *
 * Renders a styled placeholder where a real image should go.
 * The `hint` prop tells the designer/developer exactly what photo to use.
 *
 * HOW TO REPLACE:
 *   1. Add your image to /public/images/<filename>.jpg (or .png / .webp)
 *   2. Replace <PhotoPlaceholder> with:
 *        <Image src="/images/<filename>.jpg" alt="..." fill className="object-cover" />
 *      (wrap in a <div className="relative <same sizing classes>"> )
 *   3. Delete this component once all photos are placed.
 *
 * RECOMMENDED PHOTO SPECS:
 *   - Format: WebP or JPEG, 85% quality
 *   - Aspect ratio: match the className dimensions given at each usage site
 *   - Style: natural, candid, good lighting — NOT stock-photo-stiff
 */

import { ImageIcon } from "lucide-react";

interface PhotoPlaceholderProps {
  /** Describe exactly what photo should go here */
  hint: string;
  className?: string;
  /** Optional aspect ratio class e.g. "aspect-[4/3]" */
  aspectRatio?: string;
}

export default function PhotoPlaceholder({
  hint,
  className = "",
  aspectRatio = "aspect-[4/3]",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative ${aspectRatio} ${className} rounded-2xl overflow-hidden
        border flex flex-col items-center justify-center gap-4 group`}
      style={{
        background: "linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))",
        borderColor: "var(--border)",
      }}
      role="img"
      aria-label={`Image placeholder: ${hint}`}
    >
      {/* Dot pattern inside placeholder */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      {/* Corner accents */}
      <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl-sm" style={{ borderColor: "rgba(var(--accent-rgb),0.4)" }} aria-hidden="true" />
      <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor: "rgba(var(--accent-rgb),0.4)" }} aria-hidden="true" />
      <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 rounded-bl-sm" style={{ borderColor: "rgba(var(--accent-rgb),0.4)" }} aria-hidden="true" />
      <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor: "rgba(var(--accent-rgb),0.4)" }} aria-hidden="true" />

      {/* Icon + hint */}
      <div className="relative z-10 text-center px-6">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
          style={{
            background: "rgba(var(--accent-rgb),0.10)",
            border: "1px solid rgba(var(--accent-rgb),0.20)",
          }}
        >
          <ImageIcon size={20} style={{ color: "rgba(var(--accent-rgb),0.6)" }} aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(var(--accent-rgb),0.6)" }}>
          Photo needed
        </p>
        <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: "var(--text-secondary)" }}>
          {hint}
        </p>
      </div>
    </div>
  );
}
