import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerButtonProps {
  text: string;
  state: "default" | "correct" | "wrong" | "revealed";
  onClick: () => void;
  index: number;
}

export function AnswerButton({ text, state, onClick, index }: AnswerButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.06 }}
      onClick={onClick}
      disabled={state !== "default"}
      className={cn(
        "relative w-full rounded-xl px-5 py-4 text-left text-base font-medium transition-all duration-200 border-2 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        state === "default" &&
          "border-border bg-card text-card-foreground hover:border-primary/40 hover:bg-accent active:scale-[0.98]",
        state === "correct" &&
          "border-success bg-success/10 text-success",
        state === "wrong" &&
          "border-destructive bg-destructive/10 text-destructive",
        state === "revealed" &&
          "border-border bg-muted text-muted-foreground opacity-60"
      )}
    >
      <span className="flex items-center justify-between gap-2">
        <span>{text}</span>
        {state === "correct" && <Check className="h-5 w-5 shrink-0" />}
        {state === "wrong" && <X className="h-5 w-5 shrink-0" />}
      </span>
    </motion.button>
  );
}
