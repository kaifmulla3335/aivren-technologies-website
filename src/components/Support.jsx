import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { support } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

function CommercialCard({ card, index }) {
  const isDark = card.tone === "dark";

  return (
    <motion.li
      variants={cardItem}
      className={`group relative rounded-3xl overflow-hidden transition-shadow duration-500 ${
        isDark
          ? "bg-gradient-to-br from-ink via-deep to-void text-white shadow-[0_1px_2px_rgba(10,22,40,0.15)] hover:shadow-[0_40px_90px_-30px_rgba(10,22,40,0.85)]"
          : "bg-white text-ink border border-ink/[0.06] shadow-[0_1px_2px_rgba(10,22,40,0.04)] hover:shadow-[0_30px_70px_-24px_rgba(10,22,40,0.4)]"
      }`}
    >
      {/* Cyan corner glow — always present on the dark card, subtle */}
      {isDark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-400/[0.10] blur-3xl"
        />
      )}

      {/* Top edge accent line — static on the dark card only */}
      {isDark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
        />
      )}

      {/* Content — no hover-based colour changes */}
      <div className="relative p-7 sm:p-9">
        {/* Tag pill */}
        <div className="mb-5">
          <span
            className={`inline-flex items-center text-[11px] font-medium tracking-[0.18em] uppercase rounded-full px-3 py-1.5 border ${
              isDark
                ? "bg-white/[0.06] text-cyan-300 border-cyan-300/25"
                : "bg-primary-500/[0.08] text-primary-600 border-primary-500/20"
            }`}
          >
            {card.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-display text-xl sm:text-2xl font-semibold tracking-tight leading-snug mb-3 ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className={`text-[15px] leading-relaxed mb-6 ${
            isDark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {card.description}
        </p>

        {/* Items list */}
        <motion.ul
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.04,
                delayChildren: 0.35 + index * 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-3"
        >
          {card.items.map((item) => (
            <motion.li
              key={item}
              variants={listItem}
              className="flex items-start gap-3"
            >
              <span
                className={`flex items-center justify-center w-4 h-4 rounded-full shrink-0 mt-0.5 ${
                  isDark
                    ? "bg-cyan-300/15 text-cyan-300"
                    : "bg-teal-400/15 text-teal-500"
                }`}
              >
                <Check size={11} strokeWidth={3} aria-hidden="true" />
              </span>
              <span
                className={`text-[14px] sm:text-[15px] leading-relaxed ${
                  isDark ? "text-white/75" : "text-ink/70"
                }`}
              >
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footnote (dark card only) */}
        {card.footnote && (
          <p
            className={`mt-7 pt-6 border-t text-[13px] leading-relaxed ${
              isDark
                ? "border-white/10 text-white/45"
                : "border-ink/[0.06] text-ink/45"
            }`}
          >
            {card.footnote}
          </p>
        )}
      </div>
    </motion.li>
  );
}

export default function Support() {
  return (
    <section
      id="commercial-model"
      aria-label="Commercial model"
      className="section-anchor relative bg-surface py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(47,92,240,0.06),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/[0.05] blur-[120px] pointer-events-none"
      />

      <div className="relative container-page">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-4"
          >
            {support.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-[1.1]"
          >
            {support.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-ink/60 text-[15px] sm:text-base leading-relaxed"
          >
            {support.sub}
          </motion.p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-5 sm:gap-6"
        >
          {support.cards.map((card, i) => (
            <CommercialCard key={card.id} card={card} index={i} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}