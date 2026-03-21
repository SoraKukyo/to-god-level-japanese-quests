import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { sectionMeta } from "@/data/data";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { FloatingKanji } from "@/components/FloatingKanji";
import { TiltCard } from "@/components/TiltCard";

const sectionColors: Record<string, string> = {
  kanji: "bg-section-kanji",
  vocabulary: "bg-section-vocabulary",
  grammar: "bg-section-grammar",
  phrases: "bg-section-phrases",
};

const sectionTextColors: Record<string, string> = {
  kanji: "text-section-kanji",
  vocabulary: "text-section-vocabulary",
  grammar: "text-section-grammar",
  phrases: "text-section-phrases",
};

const sectionGlowColors: Record<string, string> = {
  kanji: "shadow-section-kanji/20",
  vocabulary: "shadow-section-vocabulary/20",
  grammar: "shadow-section-grammar/20",
  phrases: "shadow-section-phrases/20",
};

const sectionBorderAccent: Record<string, string> = {
  kanji: "border-l-section-kanji",
  vocabulary: "border-l-section-vocabulary",
  grammar: "border-l-section-grammar",
  phrases: "border-l-section-phrases",
};

export default function Home() {
  const navigate = useNavigate();

  const scrollToExercises = () => {
    document.getElementById("exercises")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-svh flex-col bg-background">
      {/* Hero */}
      <section className="relative flex min-h-svh flex-col items-center justify-center px-4 text-center overflow-hidden">
        <FloatingKanji />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Master Japanese,{" "}
            <span className="text-primary">One Step</span> at a Time
          </h1>
          <p className="mx-auto max-w-lg text-lg text-muted-foreground">
            Learn kanji, vocabulary, grammar, and everyday phrases with flashcards
            — organized the way your brain actually learns.
          </p>
          <Button size="lg" onClick={scrollToExercises} className="gap-2 text-base px-8 py-6">
            Start Learning
            <ArrowDown className="h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Exercise Menu */}
      <section id="exercises" className="relative mx-auto w-full max-w-4xl px-4 py-20">
        {/* Mesh gradient background for glassmorphism */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[hsl(20_70%_85%)] opacity-40 blur-[100px]" />
          <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-[hsl(260_50%_85%)] opacity-30 blur-[100px]" />
          <div className="absolute -bottom-10 left-1/3 h-64 w-64 rounded-full bg-[hsl(140_40%_85%)] opacity-30 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Choose Your Path
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pick a study area to get started
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {Object.entries(sectionMeta).map(([key, meta], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <TiltCard onClick={() => navigate(`/${key}`)} className={sectionGlowColors[key]}>
                <div className={`flex flex-col items-start gap-4 rounded-2xl border border-white/25 border-l-4 ${sectionBorderAccent[key]} bg-white/15 p-8 text-left backdrop-blur-xl dark:border-white/10 dark:bg-black/25`}>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${sectionColors[key]} text-white`}>
                    <span className="font-japanese text-2xl font-bold">{meta.icon}</span>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${sectionTextColors[key]}`}>
                      {meta.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{meta.description}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
