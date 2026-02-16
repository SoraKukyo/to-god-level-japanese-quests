import { motion } from "framer-motion";
import type { VocabWord } from "@/data/vocabulary";

interface QuizCardProps {
  word: VocabWord;
  questionNumber: number;
  totalQuestions: number;
}

export function QuizCard({ word, questionNumber, totalQuestions }: QuizCardProps) {
  return (
    <motion.div
      key={word.kanji}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center gap-2 rounded-2xl bg-card p-8 shadow-sm border border-border"
    >
      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
        Question {questionNumber} of {totalQuestions}
      </span>
      <h2 className="mt-2 font-japanese text-6xl sm:text-7xl font-bold text-foreground leading-tight select-none">
        {word.kanji}
      </h2>
      <p className="text-lg text-muted-foreground font-light tracking-wide">
        {word.romaji}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        What does this mean?
      </p>
    </motion.div>
  );
}
