import { motion } from "framer-motion";
import { about, sectionIds } from "../data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section
      id={sectionIds.about}
      className="section-anchor relative bg-surface py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(63,212,232,0.08),transparent_45%)]"
      />

      <div className="relative container-page">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-4"
            >
              {about.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-[1.7rem] sm:text-4xl lg:text-[2.9rem] font-semibold text-ink tracking-tight leading-[1.1]"
            >
              {about.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-ink/60 text-[15px] sm:text-base leading-relaxed max-w-md"
            >
              {about.sub}
            </motion.p>
          </div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {about.pillars.map((pillar, i) => (
              <motion.li
                key={pillar.title}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl bg-white border border-ink/[0.06] p-6 sm:p-7 shadow-[0_1px_2px_rgba(10,22,40,0.04)] hover:shadow-[0_28px_60px_-16px_rgba(10,22,40,0.35)] hover:border-ink/[0.10] transition-all duration-500"
              >
                <span className="text-[11px] font-medium tracking-[0.18em] text-primary-600/70 group-hover:text-primary-600 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-ink mt-3 mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-ink/60 text-[14px] sm:text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}