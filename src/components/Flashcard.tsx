import type { FlashCard } from "@/data/data";

interface FlashcardProps {
  card: FlashCard;
  isFlipped: boolean;
  onFlip: () => void;
}

export function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div
      className="perspective-1000 w-full cursor-pointer select-none"
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onFlip()}
      aria-label={isFlipped ? "Showing answer — click to see front" : "Click to reveal answer"}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div className="backface-hidden rounded-2xl border border-border bg-card p-10 shadow-sm">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Tap to flip
            </span>
            <h2 className="font-japanese text-6xl font-bold text-foreground leading-tight sm:text-7xl">
              {card.front}
            </h2>
          </div>
        </div>

        {/* Back */}
        <div
          className="backface-hidden rotate-y-180 absolute inset-0 rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <h3 className="text-2xl font-bold text-foreground">{card.back.meaning}</h3>
            <p className="font-japanese text-lg text-muted-foreground">{card.back.reading}</p>
            <div className="mt-3 w-full rounded-lg bg-muted p-4 text-left">
              <p className="font-japanese text-base text-foreground">{card.back.example}</p>
              <p className="mt-1 text-sm text-muted-foreground">{card.back.exampleMeaning}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
