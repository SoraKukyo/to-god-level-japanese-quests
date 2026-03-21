import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { sectionMeta } from "@/data/data";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const sectionColors: Record<string, string> = {
  kanji: "bg-section-kanji",
  vocabulary: "bg-section-vocabulary",
  grammar: "bg-section-grammar",
  phrases: "bg-section-phrases",
};

const sectionBorders: Record<string, string> = {
  kanji: "border-section-kanji/30 hover:border-section-kanji/60",
  vocabulary: "border-section-vocabulary/30 hover:border-section-vocabulary/60",
  grammar: "border-section-grammar/30 hover:border-section-grammar/60",
  phrases: "border-section-phrases/30 hover:border-section-phrases/60",
};

const sectionBg: Record<string, string> = {
  kanji: "hover:bg-section-kanji/5",
  vocabulary: "hover:bg-section-vocabulary/5",
  grammar: "hover:bg-section-grammar/5",
  phrases: "hover:bg-section-phrases/5",
};

const sectionTextColors: Record<string, string> = {
  kanji: "text-section-kanji",
  vocabulary: "text-section-vocabulary",
  grammar: "text-section-grammar",
  phrases: "text-section-phrases",
};

export default function Home() {
  const navigate = useNavigate();

  const scrollToExercises = () => {
    document.getElementById("exercises")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-svh flex-col bg-background">
      {/* Hero */}
      <section className="relative flex min-h-svh flex-col items-center justify-center px-4 text-center">
        {/* Decorative background characters */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
          <span className="absolute top-[10%] left-[8%] font-japanese text-[12rem] font-bold text-foreground/[0.03] leading-none">学</span>
          <span className="absolute bottom-[15%] right-[10%] font-japanese text-[10rem] font-bold text-foreground/[0.03] leading-none">道</span>
          <span className="absolute top-[40%] right-[5%] font-japanese text-[8rem] font-bold text-foreground/[0.03] leading-none">文</span>
        </div>

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
      <section id="exercises" className="mx-auto w-full max-w-4xl px-4 py-20">
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
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              onClick={() => navigate(`/${key}`)}
              className={`group relative flex flex-col items-start gap-4 rounded-2xl border-2 bg-card p-8 text-left transition-all duration-200 cursor-pointer ${sectionBorders[key]} ${sectionBg[key]}`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${sectionColors[key]} text-white`}>
                <span className="font-japanese text-2xl font-bold">{meta.icon}</span>
              </div>
              <div>
                <h3 className={`text-xl font-bold ${sectionTextColors[key]}`}>
                  {meta.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{meta.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
