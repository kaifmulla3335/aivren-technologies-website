import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { visibility } from "../data/content";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const NUMERIC_VALUE = /^(\d+)(.*)$/;

// Counts a value up from 0 once `active` becomes true. Values that aren't
// purely numeric (e.g. "this morning", "by defect type") render as-is.
function AnimatedValue({ value, active }) {
  const match = NUMERIC_VALUE.exec(value);
  const [display, setDisplay] = useState(
    match && !prefersReducedMotion ? "0" + match[2] : value
  );
  const started = useRef(false);

  useEffect(() => {
    const currentMatch = NUMERIC_VALUE.exec(value);
    if (!currentMatch || prefersReducedMotion || !active || started.current) return;
    started.current = true;

    const target = Number(currentMatch[1]);
    const suffix = currentMatch[2];
    const duration = 650;
    const startTime = performance.now();
    let raf;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(eased * target)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return <span className="tabular-nums">{display}</span>;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const toneStyles = {
  ok: "text-teal-500",
  warn: "text-amber-500",
  neutral: "text-ink",
};

const toneDot = {
  ok: "bg-teal-500",
  warn: "bg-amber-500",
  neutral: "bg-ink/30",
};

const panelShadow = {
  rest: "0 20px 45px -28px rgba(10,22,40,0.18), 0 2px 6px -2px rgba(10,22,40,0.06)",
  landing: "0 45px 70px -20px rgba(47,92,240,0.28), 0 10px 20px -8px rgba(10,22,40,0.1)",
};

function PreviewPanel({ panel, index }) {
  const [active, setActive] = useState(false);
  const flagged = panel.rows.filter((r) => r.tone === "warn").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, boxShadow: panelShadow.landing }}
      whileInView={{ opacity: 1, y: 0, boxShadow: panelShadow.rest }}
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ boxShadow: panelShadow.landing, y: -3 }}
      className="rounded-2xl bg-white border border-ink/[0.06] p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <h4 className="font-display text-sm font-semibold text-ink">
          {panel.title}
        </h4>
        <span title={`${flagged} item${flagged === 1 ? "" : "s"} need attention`}>
          <span
            aria-hidden="true"
            className={`block w-1.5 h-1.5 rounded-full ${
              flagged > 0 ? "bg-amber-500 animate-pulse" : "bg-teal-500"
            }`}
          />
        </span>
      </div>
      <ul className="space-y-2.5">
        {panel.rows.map((row) => (
          <li
            key={row.label}
            className="flex items-baseline justify-between gap-3 text-[11px] sm:text-[13px] border-b border-ink/[0.04] pb-2 last:border-b-0 last:pb-0"
          >
            <span className="flex items-center gap-2 text-ink/60 leading-snug min-w-0">
              <span
                aria-hidden="true"
                className={`w-1 h-1 rounded-full shrink-0 ${toneDot[row.tone] ?? toneDot.neutral}`}
              />
              {row.label}
            </span>
            <span
              className={`font-mono font-medium tracking-tight whitespace-nowrap ${
                toneStyles[row.tone] ?? toneStyles.neutral
              }`}
            >
              <AnimatedValue value={row.value} active={active} />
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function CapabilityGrid() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid sm:grid-cols-2 gap-px bg-ink/[0.06] rounded-2xl overflow-hidden border border-ink/[0.06]"
    >
      {visibility.capabilities.items.map((c, i) => (
        <motion.li
          key={c.title}
          variants={item}
          className="bg-white p-5 sm:p-7"
        >
          <span className="text-[11px] font-medium tracking-[0.18em] text-primary-600/70">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h4 className="font-display text-[15px] sm:text-base font-semibold text-ink mt-3 mb-2 leading-snug">
            {c.title}
          </h4>
          <p className="text-ink/60 text-[14px] sm:text-[15px] leading-relaxed">
            {c.description}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function Visibility() {
  return (
    <section
      id="visibility"
      aria-label="Business visibility and reporting"
      className="section-anchor relative bg-surface py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(47,92,240,0.07),transparent_45%)]"
      />

      <div className="relative container-page">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-4"
          >
            {visibility.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-[1.1]"
          >
            {visibility.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-ink/60 text-[15px] sm:text-base leading-relaxed"
          >
            {visibility.sub}
          </motion.p>
        </div>

        <div className="mb-14 sm:mb-20">
          <div className="mb-5 sm:mb-6">
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-ink/45">
              {visibility.preview.label}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {visibility.preview.panels.map((panel, i) => (
              <PreviewPanel key={panel.id} panel={panel} index={i} />
            ))}
          </div>

          <p className="mt-5 sm:mt-6 text-[11px] sm:text-xs text-ink/45 whitespace-normal sm:whitespace-nowrap">
            {visibility.preview.note}
          </p>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-5 sm:mb-6"
          >
            {visibility.capabilities.eyebrow}
          </motion.p>

          <CapabilityGrid />
        </div>
      </div>
    </section>
  );
}
