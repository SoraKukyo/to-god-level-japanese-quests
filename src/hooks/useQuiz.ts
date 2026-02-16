import { useState, useCallback, useMemo } from "react";
import { vocabulary, getLevel, type VocabWord } from "@/data/vocabulary";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export interface QuizState {
  currentWord: VocabWord;
  options: string[];
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  score: number;
  questionNumber: number;
  totalQuestions: number;
  isComplete: boolean;
}

export function useQuiz() {
  const [level, setLevel] = useState<number | null>(null);
  const [queue, setQueue] = useState<VocabWord[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = queue.length;
  const currentWord = queue[questionIndex] ?? null;

  const options = useMemo(() => {
    if (!currentWord) return [];
    const wrongAnswers = vocabulary
      .filter((w) => w.meaning !== currentWord.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.meaning);
    return shuffle([currentWord.meaning, ...wrongAnswers]);
  }, [currentWord]);

  const isCorrect = selectedAnswer === null || !currentWord
    ? null
    : selectedAnswer === currentWord.meaning;

  const selectAnswer = useCallback(
    (answer: string) => {
      if (selectedAnswer !== null || !currentWord) return;
      setSelectedAnswer(answer);
      if (answer === currentWord.meaning) {
        setScore((s) => s + 1);
      }
    },
    [selectedAnswer, currentWord]
  );

  const nextQuestion = useCallback(() => {
    if (questionIndex + 1 >= totalQuestions) {
      setIsComplete(true);
    } else {
      setQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
    }
  }, [questionIndex, totalQuestions]);

  const selectLevel = useCallback((lvl: number) => {
    const words = getLevel(lvl);
    setQueue(shuffle(words));
    setLevel(lvl);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsComplete(false);
  }, []);

  const backToLevels = useCallback(() => {
    setLevel(null);
    setQueue([]);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsComplete(false);
  }, []);

  const restart = useCallback(() => {
    if (level !== null) {
      selectLevel(level);
    }
  }, [level, selectLevel]);

  return {
    level,
    currentWord,
    options,
    selectedAnswer,
    isCorrect,
    score,
    questionNumber: questionIndex + 1,
    totalQuestions,
    isComplete,
    selectAnswer,
    nextQuestion,
    restart,
    selectLevel,
    backToLevels,
  };
}
