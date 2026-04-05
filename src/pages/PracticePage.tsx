import { useParams, useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCards, getSublevelName, sectionMeta } from "@/data/data";
import type { FlashCard } from "@/data/data";
import { Flashcard } from "@/components/Flashcard";
import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, Trophy, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function progressKey(section: string, category: string, sublevel: number) {
  return `flashcard_progress_${section}_${category}_${sublevel}`;
}

export default function PracticePage() {
  const { section, category, sublevel } = useParams<{
    section: string;
    category: string;
    sublevel: string;
  }>();
  const navigate = useNavigate();
  const meta = sectionMeta[section ?? ""];
  const decodedCategory = useMemo(() => decodeURIComponent(category ?? ""), [category]);
  const sublevelIndex = useMemo(() => parseInt(sublevel ?? "0", 10), [sublevel]);
  const allCards = useMemo(
    () => getCards(section ?? "", decodedCategory, sublevelIndex),
    [section, decodedCategory, sublevelIndex]
  );
  const sublevelName = useMemo(
    () => getSublevelName(section ?? "", decodedCategory, sublevelIndex),
    [section, decodedCategory, sublevelIndex]
  );

  const isQuizMode = section === "kanji" || section === "vocabulary";

  const [queue, setQueue] = useState<FlashCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [knownCount, setKnownCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [totalSeen, setTotalSeen] = useState(allCards.length);
  const [stillLearning, setStillLearning] = useState<FlashCard[]>([]);

  useEffect(() => {
    setQueue(shuffle(allCards));
    setCurrentIndex(0);
    setKnownCount(0);
    setIsFlipped(false);
    setIsComplete(false);
    setTotalSeen(allCards.length);
    setStillLearning([]);
  }, [section, category, sublevel]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentCard = queue[currentIndex] ?? null;

  const saveProgress = useCallback((known: number) => {
    try {
      localStorage.setItem(
        progressKey(section ?? "", decodedCategory, sublevelIndex),
        JSON.stringify({ known, total: totalSeen })
      );
    } catch {}
  }, [section, decodedCategory, sublevelIndex, totalSeen]);

  const advance = useCallback((addToLearning: boolean) => {
    const card = currentCard;
    if (!addToLearning) {
      const newKnown = knownCount + 1;
      setKnownCount(newKnown);
      saveProgress(newKnown);
    }

    const newStillLearning = addToLearning && card
      ? [...stillLearning, card]
      : stillLearning;

    if (!addToLearning) {
      // don't update stillLearning
    } else if (card) {
      setStillLearning(prev => [...prev, card]);
    }

    setIsFlipped(false);

    if (currentIndex + 1 >= queue.length) {
      const pending = addToLearning && card
        ? [...stillLearning, card]
        : stillLearning;
      if (pending.length > 0) {
        setQueue(shuffle(pending));
        setStillLearning([]);
        setCurrentIndex(0);
      } else {
        setIsComplete(true);
      }
    } else {
      setCurrentIndex(i => i + 1);
    }
  }, [currentCard, knownCount, currentIndex, queue.length, stillLearning, saveProgress]);

  const handleKnow = useCallback(() => advance(false), [advance]);
  const handleStillLearning = useCallback(() => advance(true), [advance]);

  const restart = useCallback(() => {
    setQueue(shuffle(allCards));
    setCurrentIndex(0);
    setKnownCount(0);
    setIsFlipped(false);
    setIsComplete(false);
    setTotalSeen(allCards.length);
    setStillLearning([]);
  }, [allCards]);

  if (!meta || allCards.length === 0) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-muted-foreground">No cards found.</p>
      </div>
    );
  }

  const progressPercent = totalSeen > 0 ? Math.round((knownCount / totalSeen) * 100) : 0;
  const cardPosition = Math.min(currentIndex + 1, queue.length);

  const sectionColorMap: Record<string, string> = {
    kanji: "bg-section-kanji",
    vocabulary: "bg-section-vocabulary",
    grammar: "bg-section-grammar",
    phrases: "bg-section-phrases",
  };

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-xl items-center gap-3 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/${section}/${encodeURIComponent(decodedCategory)}`)}
            className="h-8 w-8 shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: meta.title, to: `/${section}` },
              { label: decodedCategory, to: `/${section}/${encodeURIComponent(decodedCategory)}` },
              { label: sublevelName },
            ]}
          />
        </div>
      </header>

      {/* Progress bar */}
      {!isComplete && (
        <div className="mx-auto w-full max-w-xl px-4 pt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
            <span>{cardPosition}/{queue.length}</span>
            <span>{knownCount} learned</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${sectionColorMap[section!]}`}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-6 rounded-2xl bg-card p-10 shadow-sm border border-border text-center"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${sectionColorMap[section!]}/10`}>
                  <Trophy className="h-8 w-8 text-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Session Complete!</h2>
                <p className="text-muted-foreground">お疲れ様でした！</p>
                <div className="font-japanese text-5xl font-bold text-foreground">
                  {knownCount}/{totalSeen}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isQuizMode ? "correct answers" : "cards learned"}
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/${section}/${encodeURIComponent(decodedCategory)}`)}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Levels
                  </Button>
                  <Button onClick={restart} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Try Again
                  </Button>
                </div>
              </motion.div>
            ) : currentCard ? (
              <motion.div
                key={currentCard.id}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                {isQuizMode ? (
                  <QuizCard
                    card={currentCard}
                    allCards={allCards}
                    onCorrect={handleKnow}
                    onWrong={handleStillLearning}
                    sectionColor={sectionColorMap[section!]}
                  />
                ) : (
                  <>
                    <Flashcard
                      card={currentCard}
                      isFlipped={isFlipped}
                      onFlip={() => setIsFlipped(f => !f)}
                    />
                    {isFlipped && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center gap-4"
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={handleStillLearning}
                          className="gap-2 border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          Still Learning
                        </Button>
                        <Button
                          size="lg"
                          onClick={handleKnow}
                          className="gap-2 bg-success hover:bg-success/90 text-success-foreground"
                        >
                          Know It
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
