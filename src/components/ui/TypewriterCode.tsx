"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterCodeProps {
  code: string;
  /** ms per character while typing */
  charSpeed?: number;
  /** ms pause at the end before clearing */
  endPause?: number;
  /** ms pause at the start (empty screen) before next iteration */
  startPause?: number;
}

type Token = { text: string; cls: string };

/** Very lightweight syntax highlighter for JS/TS */
function tokeniseLine(line: string): Token[] {
  const tokens: Token[] = [];
  // Split on keywords, strings, comments
  const parts = line.split(/(import|from|export|const|let|var|await|async|return|"[^"]*"|'[^']*'|`[^`]*`|\/\/[^\n]*)/g);
  const keywords = new Set(["import","from","export","const","let","var","await","async","return"]);
  for (const part of parts) {
    if (!part) continue;
    if (keywords.has(part)) {
      tokens.push({ text: part, cls: "kw" });
    } else if ((part.startsWith('"') && part.endsWith('"')) ||
               (part.startsWith("'") && part.endsWith("'")) ||
               (part.startsWith("`") && part.endsWith("`"))) {
      tokens.push({ text: part, cls: "str" });
    } else if (part.startsWith("//")) {
      tokens.push({ text: part, cls: "cmt" });
    } else {
      tokens.push({ text: part, cls: "base" });
    }
  }
  return tokens;
}

const CLS_MAP: Record<string, string> = {
  kw:   "text-cyan-electric",
  str:  "text-mint",
  cmt:  "text-pewter",
  base: "text-snow/80",
};

export default function TypewriterCode({
  code,
  charSpeed  = 28,
  endPause   = 1800,
  startPause = 600,
}: TypewriterCodeProps) {
  const [displayed, setDisplayed] = useState("");
  const phaseRef  = useRef<"typing" | "end-pause" | "clearing" | "start-pause">("start-pause");
  const indexRef  = useRef(0);
  const timerRef  = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const scheduleNext = () => {
      clearTimeout(timerRef.current);

      if (phaseRef.current === "start-pause") {
        timerRef.current = setTimeout(() => {
          phaseRef.current = "typing";
          scheduleNext();
        }, startPause);

      } else if (phaseRef.current === "typing") {
        if (indexRef.current < code.length) {
          timerRef.current = setTimeout(() => {
            indexRef.current += 1;
            setDisplayed(code.slice(0, indexRef.current));
            scheduleNext();
          }, charSpeed);
        } else {
          phaseRef.current = "end-pause";
          scheduleNext();
        }

      } else if (phaseRef.current === "end-pause") {
        timerRef.current = setTimeout(() => {
          phaseRef.current = "clearing";
          scheduleNext();
        }, endPause);

      } else if (phaseRef.current === "clearing") {
        // Clear instantly, then restart
        indexRef.current  = 0;
        phaseRef.current  = "start-pause";
        setDisplayed("");
        scheduleNext();
      }
    };

    scheduleNext();
    return () => clearTimeout(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  // Render the typed portion with syntax highlighting
  const lines = displayed.split("\n");

  return (
    <pre
      className="p-6 overflow-x-auto text-xs font-mono leading-relaxed min-h-[280px]"
      aria-label="Live code example"
    >
      <code>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {tokeniseLine(line).map((tok, ti) => (
              <span key={ti} className={CLS_MAP[tok.cls]}>
                {tok.text}
              </span>
            ))}
            {/* Blinking cursor on the last line */}
            {li === lines.length - 1 && (
              <span
                className="inline-block w-[2px] h-[13px] align-middle ml-[1px]"
                style={{
                  backgroundColor: "#06B6D4",
                  animation: "blink 1s step-end infinite",
                }}
                aria-hidden="true"
              />
            )}
          </span>
        ))}
      </code>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </pre>
  );
}
