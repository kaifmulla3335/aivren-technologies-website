import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { implementation } from "../data/content";

const AUTO_ADVANCE_MS = 7000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function Implementation() {
  const steps = implementation.steps;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(0);
  const reduced = useRef(prefersReducedMotion());
  const active = steps[activeIndex];

  useEffect(() => {
    if (reduced.current || paused) return;

    timerRef.current = window.setTimeout(() => {
      setActiveIndex((i) => (i + 1) % steps.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timerRef.current);
  }, [activeIndex, paused, steps.length]);

  const handleHover = (i) => {
    setPaused(true);
    setActiveIndex(i);
  };

  const handleLeave = () => {
    setPaused(false);
  };

  const handleClick = (i) => {
    setActiveIndex(i);
  };

  return (
    <section
      id="process"
      aria-label="Process"
      className="section-anchor relative bg-void py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(63,212,232,0.10),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
      />

      <div className="relative container-page">
        {/* Heading */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-300/80 mb-3"
          >
            {implementation.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[1.5rem] sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.15]"
          >
            {implementation.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-white/55 text-[14px] sm:text-[15px] leading-relaxed"
          >
            {implementation.sub}
          </motion.p>
        </div>

        {/* -------- Cinematic Process Rail -------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={handleLeave}
          className="relative"
        >
          {/* Active step detail card */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 overflow-hidden min-h-[220px] sm:min-h-[240px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-400/[0.08] blur-3xl"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
            />

            <div className="relative">
              <div className="flex items-baseline gap-4 mb-4 flex-wrap">
                <span className="font-display text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-300/70">
                  Step {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 max-w-[80px] bg-cyan-300/30"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight mb-3">
                    {active.title}
                  </h3>
                  <p className="text-white/60 text-[15px] sm:text-base leading-relaxed max-w-2xl">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* -------- Horizontal Rail -------- */}
          <div className="relative px-2 sm:px-4">
            {/* Base rail background */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-4 h-px bg-white/[0.08]"
            />

            {/* Continuous flowing light streak overlay */}
            <div
              aria-hidden="true"
              className="rail-track absolute left-0 right-0 top-4 h-px"
            >
              <div className="rail-flow" />
            </div>

            {/* Continuous traveling arrow indicator */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-4 h-0 pointer-events-none"
            >
              <div className="relative w-full h-full">
                <div className="rail-arrow" />
              </div>
            </div>

            {/* Dots row */}
            <ul className="relative flex items-start justify-between gap-2">
              {steps.map((step, i) => {
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;
                return (
                  <li
                    key={step.id}
                    className="flex flex-col items-center flex-1 min-w-0"
                  >
                    <button
                      type="button"
                      onClick={() => handleClick(i)}
                      onMouseEnter={() => handleHover(i)}
                      onFocus={() => handleHover(i)}
                      onBlur={handleLeave}
                      aria-label={`Show step ${i + 1}: ${step.title}`}
                      aria-current={isActive ? "step" : undefined}
                      className="group flex flex-col items-center gap-3 w-full cursor-pointer relative z-10"
                    >
                      <span
                        className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-cyan-300 bg-cyan-300/15 shadow-[0_0_20px_rgba(63,212,232,0.5)]"
                            : isPast
                              ? "border-cyan-300/40 bg-cyan-300/[0.06]"
                              : "border-white/15 bg-void hover:border-white/30"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-cyan-300 scale-125"
                              : isPast
                                ? "bg-cyan-300/60"
                                : "bg-white/30"
                          }`}
                        />

                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full bg-cyan-300/40 animate-ping"
                            style={{ animationDuration: "2s" }}
                          />
                        )}
                      </span>

                      <span
                        className={`font-display text-[10px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                          isActive
                            ? "text-cyan-300"
                            : isPast
                              ? "text-cyan-300/60"
                              : "text-white/40 group-hover:text-white/60"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`font-display text-[11px] sm:text-[12px] font-medium leading-tight text-center transition-colors duration-300 max-w-full truncate ${
                          isActive
                            ? "text-white"
                            : "text-white/55 group-hover:text-white/80"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-6 text-center text-[11px] text-white/30">
            {paused
              ? "Paused — move away to continue"
              : "Auto-advancing — hover a step to pause"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}