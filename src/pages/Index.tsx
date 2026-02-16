import { useQuiz } from "@/hooks/useQuiz";
import { QuizCard } from "@/components/QuizCard";
import { QuizComplete } from "@/components/QuizComplete";
import { AnswerButton } from "@/components/AnswerButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const {
    currentWord,
    options,
    selectedAnswer,
    isCorrect,
    score,
    questionNumber,
    totalQuestions,
    isComplete,
    selectAnswer,
    nextQuestion,
    restart,
  } = useQuiz();

  const getOptionState = (option: string) => {
    if (selectedAnswer === null) return "default" as const;
    if (option === currentWord.meaning) return "correct" as const;
    if (option === selectedAnswer) return "wrong" as const;
    return "revealed" as const;
  };

  return (
    <div className="flex min-h-svh flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
          <h1 className="text-base font-semibold text-foreground tracking-tight sm:text-lg">
            <span className="font-japanese">日本語</span> Work Vocab
          </h1>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">
              Score:{" "}
              <span className="font-semibold text-primary">{score}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="mx-auto w-full max-w-xl px-4 pt-4">
        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: `${((isComplete ? totalQuestions : questionNumber - 1) / totalQuestions) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl space-y-6">
          <AnimatePresence mode="wait">
            {isComplete ? (
              <QuizComplete
                key="complete"
                score={score}
                total={totalQuestions}
                onRestart={restart}
              />
            ) : (
              <motion.div
                key={questionNumber}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <QuizCard
                  word={currentWord}
                  questionNumber={questionNumber}
                  totalQuestions={totalQuestions}
                />

                {/* Answer options */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {options.map((option, i) => (
                    <AnswerButton
                      key={option}
                      text={option}
                      state={getOptionState(option)}
                      onClick={() => selectAnswer(option)}
                      index={i}
                    />
                  ))}
                </div>

                {/* Next button */}
                <AnimatePresence>
                  {selectedAnswer !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-center"
                    >
                      <Button
                        onClick={nextQuestion}
                        size="lg"
                        className="gap-2"
                      >
                        {questionNumber === totalQuestions
                          ? "See Results"
                          : "Next Question"}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Index;
