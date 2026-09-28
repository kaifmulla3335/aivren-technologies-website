import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agents } from "../data/content";

const AUTO_ADVANCE_MS = 5200;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function ExchangeMock() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const timerRef = useRef(0);
  const exchanges = agents.exchanges;

  useEffect(() => {
    if (reduced || paused) return;
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % exchanges.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timerRef.current);
  }, [index, paused, reduced, exchanges.length]);

  if (reduced) {
    return (
      <ul className="space-y-4">
        {exchanges.map((ex) => (
          <li
            key={ex.question}
            className="rounded-3xl bg-white border border-ink/[0.06] p-6 sm:p-8 shadow-[0_24px_60px_-30px_rgba(10,22,40,0.18)]"
          >
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-3">
              You
            </p>
            <p className="text-ink text-[16px] leading-relaxed mb-5">
              {ex.question}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-aivren-gradient shrink-0" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-500">
                AI Agent
              </span>
            </div>
            <p className="text-ink/65 text-[15px] leading-relaxed">
              {ex.answer}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  const active = exchanges[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="group"
      aria-label="Illustrative AI agent exchange"
      className="relative rounded-3xl bg-white border border-ink/[0.06] p-7 sm:p-9 lg:p-10 shadow-[0_30px_80px_-40px_rgba(10,22,40,0.28)]"
    >
      {/* Top edge accent line */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      {/* Progress dots */}
      <div
        className="flex items-center gap-1.5 mb-8"
        role="tablist"
        aria-label="Exchanges"
      >
        {exchanges.map((ex, i) => (
          <button
            key={ex.question}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show exchange ${i + 1} of ${exchanges.length}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-primary-500"
                : "w-3 bg-ink/15 hover:bg-ink/30"
            }`}
          />
        ))}
      </div>

      <div aria-live="polite" aria-atomic="false">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* User question block */}
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-3">
              You
            </p>
            <p className="text-ink text-lg sm:text-xl leading-snug font-display font-medium mb-8">
              {active.question}
            </p>

            {/* Agent response block */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-aivren-gradient shrink-0 shadow-[0_0_12px_rgba(47,92,240,0.4)]" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-500">
                AI Agent
              </span>
            </div>

            <p className="text-ink/65 text-[15px] sm:text-base leading-relaxed">
              {active.answer}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-8 pt-6 border-t border-ink/[0.06] text-[11px] sm:text-xs text-ink/40 leading-relaxed">
        Illustrative examples — the agent is configured around each company's own
        process and approval hierarchy.
      </p>
    </div>
  );
}

export default function Agents() {
  return (
    <section
      id="agents"
      aria-label="AI Agents"
      className="section-anchor relative bg-surface py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(63,212,232,0.06),transparent_45%)]"
      />

      <div className="relative container-page">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 items-center">
          {/* Left — eyebrow, headline, sub */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-4"
            >
              {agents.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-[1.1]"
            >
              {agents.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-ink/60 text-[15px] sm:text-base leading-relaxed max-w-lg"
            >
              {agents.sub}
            </motion.p>
          </div>

          {/* Right — Exchange mock */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ExchangeMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}