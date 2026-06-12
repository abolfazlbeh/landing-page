"use client";

import { useEffect, useState } from "react";
import QRCodeLib from "qrcode";

interface QRCodeProps {
  value: string;
  size?: number;
  /** Foreground color — dots */
  color?: string;
  /** Background color — transparent by default */
  bgColor?: string;
}

/**
 * Renders a real QR code as an inline SVG data URL.
 * Uses the `qrcode` npm package so there's no external request.
 */
export default function QRCode({
  value,
  size = 160,
  color = "#ffffff",
  bgColor = "transparent",
}: QRCodeProps) {
  const [svgUrl, setSvgUrl] = useState<string | null>(null);

  useEffect(() => {
    QRCodeLib.toDataURL(value, {
      width: size,
      margin: 1,
      color: {
        dark: color,
        light: bgColor === "transparent" ? "#00000000" : bgColor,
      },
      type: "image/png",
      errorCorrectionLevel: "M",
    }).then((url) => setSvgUrl(url));
  }, [value, size, color, bgColor]);

  if (!svgUrl) {
    // Skeleton while generating
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 8,
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
        aria-label="QR code loading"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={svgUrl}
      alt={`QR code for ${value}`}
      width={size}
      height={size}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
