import { useMemo } from "react";

const KANJI_CHARS = "日月火水木金土山川花風雲光夢愛心道力空星".split("");

interface FloatingChar {
  char: string;
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  blur: number;
  dirX: number;
  dirY: number;
  rotStart: number;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateChars(count: number): FloatingChar[] {
  const rand = seededRandom(42);
  return Array.from({ length: count }, (_, i) => ({
    char: KANJI_CHARS[i % KANJI_CHARS.length],
    top: `${rand() * 90}%`,
    left: `${rand() * 90}%`,
    size: 40 + rand() * 80,
    opacity: 0.03 + rand() * 0.09,
    duration: 15 + rand() * 25,
    delay: -(rand() * 20),
    blur: rand() > 0.5 ? 1 + rand() * 1.5 : 0,
    dirX: (rand() - 0.5) * 60,
    dirY: (rand() - 0.5) * 60,
    rotStart: rand() * 360,
  }));
}

export function FloatingKanji() {
  const chars = useMemo(() => generateChars(18), []);

  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden
      style={{ perspective: "800px", transformStyle: "preserve-3d" }}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className="absolute font-japanese font-bold text-foreground will-change-transform floating-kanji"
          // Hide extra chars on mobile via CSS (>10 hidden)
          data-index={i}
          style={{
            top: c.top,
            left: c.left,
            fontSize: `${c.size}px`,
            opacity: c.opacity,
            filter: c.blur > 0 ? `blur(${c.blur}px)` : undefined,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            // Custom properties for the keyframe
            "--float-x": `${c.dirX}px`,
            "--float-y": `${c.dirY}px`,
            "--rot-start": `${c.rotStart}deg`,
          } as React.CSSProperties}
        >
          {c.char}
        </span>
      ))}
    </div>
  );
}
