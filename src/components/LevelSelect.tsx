import { motion } from "framer-motion";
import { getTotalLevels, getLevel } from "@/data/vocabulary";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface LevelSelectProps {
  onSelectLevel: (level: number) => void;
}

export function LevelSelect({ onSelectLevel }: LevelSelectProps) {
  const totalLevels = getTotalLevels();
  const levels = Array.from({ length: totalLevels }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-card p-8 shadow-sm border border-border">
        <BookOpen className="h-10 w-10 text-primary mb-2" />
        <h2 className="text-2xl font-semibold text-foreground tracking-tight">
          Choose a Level
        </h2>
        <p className="text-sm text-muted-foreground text-center max-w-xs">
          Each level has 50 vocabulary words. Pick one to start practicing!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {levels.map((level) => {
          const words = getLevel(level);
          const firstWord = words[0];
          const lastWord = words[words.length - 1];
          return (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: level * 0.03 }}
            >
              <Button
                variant="outline"
                onClick={() => onSelectLevel(level)}
                className="w-full h-auto flex flex-col items-center gap-1.5 py-4 px-3 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground">
                  Level {level}
                </span>
                <span className="text-xs text-muted-foreground font-japanese">
                  {firstWord?.kanji} ~ {lastWord?.kanji}
                </span>
                <span className="text-xs text-muted-foreground">
                  {words.length} words
                </span>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
