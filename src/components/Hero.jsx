import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { hero, sectionIds } from "../data/content";

const AICore = lazy(() => import("./hero3d/AICore"));

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const reveal = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.001 : 0.7,
      delay: prefersReducedMotion ? 0 : 0.15 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function CanvasPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_45%,rgba(63,212,232,0.14),transparent_60%)]"
    />
  );
}

export default function Hero() {
  const stageRef = useRef(null);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const node = stageRef.current;

    // Fallback: if IntersectionObserver is unavailable or there is no node,
    // mount the canvas immediately.
    if (!node || typeof IntersectionObserver === "undefined") {
      setShowCanvas(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first && first.isIntersecting) {
          setShowCanvas(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-void overflow-hidden flex items-center pt-28 pb-20 sm:pb-20 md:pb-16">
      <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-primary-500/20 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-[360px] h-[360px] rounded-full bg-teal-400/10 blur-[100px] pointer-events-none"
      />

      <div className="relative container-page w-full grid xl:grid-cols-[1.05fr_1fr] gap-10 xl:gap-14 items-center">
        <div className="min-w-0">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={reveal}
            className="inline-flex items-start sm:items-center gap-2 text-[11px] sm:text-xs text-cyan-300/90 border border-cyan-300/25 bg-cyan-300/5 rounded-full px-3.5 py-1.5 mb-6 sm:mb-7 max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse shrink-0 mt-1.5 sm:mt-0" />
            <span className="leading-snug">{hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={reveal}
            className="font-display font-semibold text-white text-[clamp(2.25rem,12vw,3.25rem)] leading-[0.98] sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.6rem] tracking-tight break-words"
          >
            {hero.headlineTop}
            <br />
            <span className="bg-clip-text text-transparent bg-aivren-gradient">
              {hero.headlineBottom}
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={reveal}
            className="mt-5 text-cyan-200/80 text-[11px] sm:text-sm font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase"
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={reveal}
            className="mt-5 sm:mt-6 text-white/60 text-[15px] sm:text-lg leading-relaxed max-w-xl"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={reveal}
            className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          >
            <a
              href={hero.ctaPrimaryHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-ink font-medium px-6 py-3.5 rounded-full hover:bg-cyan-300 transition-colors w-full sm:w-auto"
            >
              {hero.ctaPrimary}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={hero.ctaSecondaryHref}
              className="inline-flex items-center justify-center gap-2 text-white/85 border border-white/20 px-6 py-3.5 rounded-full hover:border-white/50 hover:text-white transition-colors w-full sm:w-auto"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

        </div>

        <div
          ref={stageRef}
          className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[480px] xl:h-[560px] min-w-0"
          aria-hidden="true"
        >
          {showCanvas ? (
            <Suspense fallback={<CanvasPlaceholder />}>
              <AICore />
            </Suspense>
          ) : (
            <CanvasPlaceholder />
          )}
        </div>
      </div>

      <motion.a
        href={`#${sectionIds.solutions}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.1, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll to solutions"
      >
        <span className="text-[11px] tracking-wide">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" aria-hidden="true" />
      </motion.a>

    </section>
  );
}
