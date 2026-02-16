import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RotateCcw, Trophy } from "lucide-react";

interface QuizCompleteProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export function QuizComplete({ score, total, onRestart }: QuizCompleteProps) {
  const percentage = Math.round((score / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-6 rounded-2xl bg-card p-10 shadow-sm border border-border text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Trophy className="h-8 w-8 text-primary" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground">Quiz Complete!</h2>
        <p className="mt-1 text-muted-foreground">お疲れ様でした！</p>
      </div>
      <div className="font-japanese text-5xl font-bold text-primary">
        {percentage}%
      </div>
      <p className="text-muted-foreground">
        You got <span className="font-semibold text-foreground">{score}</span> out of{" "}
        <span className="font-semibold text-foreground">{total}</span> correct
      </p>
      <Button onClick={onRestart} size="lg" className="mt-2 gap-2">
        <RotateCcw className="h-4 w-4" />
        Try Again
      </Button>
    </motion.div>
  );
}
