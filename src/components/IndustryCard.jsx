import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function IndustryCard({ department, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const count = department.workflows.length;

  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left flex items-center justify-between gap-4 px-5 sm:px-6 py-4 hover:bg-surface transition-colors"
      >
        <div className="min-w-0">
          <h4 className="font-display text-[15px] sm:text-base font-semibold text-ink leading-snug">
            {department.name}
          </h4>
          <p className="mt-1 text-[11px] sm:text-xs text-ink/45">
            {count} workflow{count === 1 ? "" : "s"}
          </p>
        </div>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 text-ink/40 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 border-t border-ink/[0.05]">
              {department.workflows.map((w) => (
                <li
                  key={w}
                  className="flex gap-2.5 text-[13px] sm:text-[14px] text-ink/70 leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1 h-1 rounded-full bg-cyan-500 shrink-0"
                  />
                  <span className="min-w-0">{w}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}