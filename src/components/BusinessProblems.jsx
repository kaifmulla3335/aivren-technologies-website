import { motion } from "framer-motion";
import { problems } from "../data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BusinessProblems() {
  return (
    <section
      aria-label="Where operational work usually breaks down"
      className="relative bg-void py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(47,92,240,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
      />

      <div className="relative container-page">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-300/80 mb-4"
          >
            {problems.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1]"
          >
            {problems.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/55 text-[15px] sm:text-base leading-relaxed"
          >
            {problems.sub}
          </motion.p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {problems.items.map((p) => (
            <motion.li
              key={p.title}
              variants={item}
              className="relative bg-void p-6 sm:p-7 group hover:bg-white/[0.02] transition-colors"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-6 bottom-6 w-px bg-cyan-300/0 group-hover:bg-cyan-300/60 transition-colors duration-300"
              />
              <h3 className="font-display text-base sm:text-lg font-semibold text-white mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/50 text-[14px] sm:text-[15px] leading-relaxed">
                {p.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}