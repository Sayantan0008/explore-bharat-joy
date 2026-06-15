import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Kind = "state" | "destination" | "food" | "festival" | "generic";

interface Props {
  src?: string;
  alt: string;
  className?: string;
  kind?: Kind;
  /** Used to derive a stable gradient when no image is available. */
  seed?: string;
  rounded?: string;
  aspect?: string;
}

// Five swatches per kind, blended into a soft gradient. Looks intentional.
const PALETTES: Record<Kind, string[][]> = {
  state:       [["#1e3a5f", "#5f8caf"], ["#7b4a2b", "#f4b860"], ["#3a4e3f", "#a3c178"], ["#5b3a7e", "#b78bd6"], ["#7a1f2b", "#e08a86"]],
  destination: [["#264653", "#2a9d8f"], ["#7a3b2e", "#e9c46a"], ["#1d3557", "#a8dadc"], ["#3d405b", "#f2cc8f"], ["#283618", "#bc6c25"]],
  food:        [["#9a3412", "#fdba74"], ["#7c2d12", "#fbbf24"], ["#7c1d6f", "#f9a8d4"], ["#65a30d", "#fde68a"], ["#7c3aed", "#fbbf24"]],
  festival:    [["#be185d", "#fde68a"], ["#7c2d12", "#fb7185"], ["#0f766e", "#fcd34d"], ["#7c3aed", "#fda4af"], ["#a16207", "#fbbf24"]],
  generic:     [["#1e293b", "#94a3b8"], ["#334155", "#cbd5e1"]],
};

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

export function SmartImage({
  src,
  alt,
  className,
  kind = "generic",
  seed,
  rounded = "rounded-xl",
  aspect = "aspect-[4/3]",
}: Props) {
  const [errored, setErrored] = useState(false);
  const hasSrc = !!src && !errored;

  const palette = PALETTES[kind];
  const [a, b] = palette[hash(seed || alt) % palette.length];
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        rounded,
        aspect,
        className,
      )}
      style={!hasSrc ? style : undefined}
    >
      {hasSrc ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-end p-4">
          <span className="font-display text-xl font-semibold text-white/90 drop-shadow-md">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
