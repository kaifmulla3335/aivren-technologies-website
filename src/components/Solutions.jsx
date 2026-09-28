import { motion } from "framer-motion";
import { solutions } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const capItem = {
  hidden: { opacity: 0, x: -6 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

function SolutionCard({ pillar, index }) {
  return (
    <motion.li
      variants={cardItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-white border border-ink/[0.06] p-6 sm:p-7 lg:p-8 shadow-[0_1px_2px_rgba(10,22,40,0.04)] hover:shadow-[0_30px_70px_-24px_rgba(10,22,40,0.28)] hover:border-primary-500/30 transition-all duration-500"
    >
      {/* Top gradient accent line — reveals on hover */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Number + name row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600/70 group-hover:text-primary-600 transition-colors duration-500">
          {pillar.number}
        </span>

        {/* Accent dot that grows on hover */}
        <span
          aria-hidden="true"
          className="mt-1 w-2 h-2 rounded-full bg-primary-500/40 group-hover:w-10 group-hover:bg-cyan-400 transition-all duration-500"
        />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink tracking-tight leading-snug mb-3">
        {pillar.name}
      </h3>

      {/* Tagline */}
      <p className="text-[15px] text-ink/60 leading-relaxed mb-6">
        {pillar.tagline}
      </p>

      {/* Divider */}
      <div className="h-px bg-ink/[0.06] group-hover:bg-ink/[0.10] transition-colors duration-500 mb-5" />

      {/* Capabilities list */}
      <motion.ul
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: 0.35 + index * 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-4"
      >
        {pillar.capabilities.map((cap) => (
          <motion.li
            key={cap.title}
            variants={capItem}
            className="flex items-start gap-3"
          >
            {/* Left accent dot */}
            <span
              aria-hidden="true"
              className="mt-2 w-1 h-1 rounded-full bg-cyan-500 shrink-0 group-hover:w-3 transition-all duration-300"
            />

            <div className="min-w-0">
              <h4 className="font-display text-[14px] sm:text-[15px] font-semibold text-ink leading-snug mb-1">
                {cap.title}
              </h4>
              <p className="text-ink/55 text-[13px] leading-relaxed">
                {cap.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.li>
  );
}

export default function Solutions() {
  return (
    <section
      id="solutions-inner"
      aria-label="Intelligent Business Solutions"
      className="relative bg-surface py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Ambient glow behind heading */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(47,92,240,0.06),transparent_45%)]"
      />

      <div className="relative container-page">
        {/* Heading block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-4"
          >
            {solutions.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-[1.1]"
          >
            {solutions.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-ink/60 text-[15px] sm:text-base leading-relaxed"
          >
            {solutions.sub}
          </motion.p>
        </div>

        {/* 3-card grid */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:gap-6 lg:grid-cols-3"
        >
          {solutions.pillars.map((pillar, i) => (
            <SolutionCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}