import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getCategories, sectionMeta } from "@/data/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

export default function SectionPage() {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();
  const meta = sectionMeta[section ?? ""];
  const categories = getCategories(section ?? "");

  if (!meta || categories.length === 0) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-muted-foreground">Section not found.</p>
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    kanji: "border-section-kanji/30 hover:border-section-kanji/60 hover:bg-section-kanji/5",
    vocabulary: "border-section-vocabulary/30 hover:border-section-vocabulary/60 hover:bg-section-vocabulary/5",
    grammar: "border-section-grammar/30 hover:border-section-grammar/60 hover:bg-section-grammar/5",
    phrases: "border-section-phrases/30 hover:border-section-phrases/60 hover:bg-section-phrases/5",
  };

  const textColorMap: Record<string, string> = {
    kanji: "text-section-kanji",
    vocabulary: "text-section-vocabulary",
    grammar: "text-section-grammar",
    phrases: "text-section-phrases",
  };

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="h-8 w-8 shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: meta.title }]} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className={`text-3xl font-bold ${textColorMap[section!]}`}>{meta.title}</h1>
          <p className="mt-2 text-muted-foreground">{meta.description}</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              onClick={() => navigate(`/${section}/${encodeURIComponent(cat)}`)}
              className={`rounded-xl border-2 bg-card p-6 text-left transition-all duration-200 cursor-pointer ${colorMap[section!]}`}
            >
              <h3 className="text-lg font-semibold text-foreground">{cat}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Tap to see levels</p>
            </motion.button>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
