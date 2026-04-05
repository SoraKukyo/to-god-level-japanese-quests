import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { FlashCard } from "@/data/data";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  card: FlashCard;
  allCards: FlashCard[];
  onCorrect: () => void;
  onWrong: () => void;
  sectionColor: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function QuizCard({ card, allCards, onCorrect, onWrong, sectionColor }: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const correctAnswer = card.back.meaning;

  const options = useMemo(() => {
    const wrongs = allCards
      .filter((c) => c.id !== card.id && c.back.meaning !== correctAnswer)
      .map((c) => c.back.meaning);
    const uniqueWrongs = [...new Set(wrongs)];
    const picked = shuffle(uniqueWrongs).slice(0, 3);
    return shuffle([correctAnswer, ...picked]);
  }, [card.id, correctAnswer, allCards]);

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    setTimeout(() => {
      if (option === correctAnswer) {
        onCorrect();
      } else {
        onWrong();
      }
      setSelected(null);
    }, 630);
  };

  return (
    <div className="space-y-8">
      {/* Question */}
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm text-center sm:p-10">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          What does this mean?
        </span>
        <h2 className="mt-4 font-japanese text-6xl font-bold text-foreground leading-tight sm:text-7xl">
          {card.front}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground font-japanese">
          {card.back.reading}
        </p>
      </div>

      {/* Options grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options.map((option, i) => {
          const isCorrect = option === correctAnswer;
          const isSelected = option === selected;
          const showResult = selected !== null;

          return (
            <motion.button
              key={`${card.id}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.12, delay: i * 0.02 }}
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
              className={cn(
                "rounded-xl border-2 p-4 text-left text-base font-medium transition-all duration-200 cursor-pointer sm:text-lg",
                !showResult && "border-border bg-card hover:border-muted-foreground/40 hover:bg-muted/50 active:scale-[0.98]",
                showResult && isCorrect && "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400",
                showResult && isSelected && !isCorrect && "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400",
                showResult && !isCorrect && !isSelected && "opacity-50",
                selected !== null && "cursor-default"
              )}
            >
              <span className="mr-2 inline-block w-6 text-center text-sm text-muted-foreground">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
