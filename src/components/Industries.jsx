import { motion } from "framer-motion";
import IndustryExplorer from "./IndustryExplorer";

export default function Industries() {
  return (
    <section
      id="industries"
      aria-label="Industries and workflows"
      className="section-anchor relative bg-surface py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(47,92,240,0.06),transparent_50%)]"
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
            Industries &amp; Workflows
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-[1.1]"
          >
            Explore workflows by industry.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-ink/60 text-[15px] sm:text-base leading-relaxed"
          >
            Department-wise capabilities across the industries AiVren builds
            for — from production and quality to purchase, dispatch and
            reporting.
          </motion.p>
        </div>

        <IndustryExplorer />
      </div>
    </section>
  );
}