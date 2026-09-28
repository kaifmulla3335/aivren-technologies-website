import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IndustryCard from "./IndustryCard";
import {
  industries,
  industriesIntro,
  getWorkflowCount,
  getDepartmentCount,
} from "../data/industries";

function IndustrySummary({ industry }) {
  const deptCount = getDepartmentCount(industry);
  const workflowCount = getWorkflowCount(industry);

  return (
    <div className="mb-6 sm:mb-10">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 sm:mb-4">
        <h3 className="font-display text-xl sm:text-3xl font-semibold text-ink tracking-tight">
          {industry.name}
        </h3>
        <span className="text-[11px] sm:text-xs text-ink/45 tracking-wide">
          {deptCount} department{deptCount === 1 ? "" : "s"} ·{" "}
          {workflowCount} workflow{workflowCount === 1 ? "" : "s"}
        </span>
      </div>
      <p className="text-ink/60 text-[15px] leading-relaxed max-w-2xl">
        {industry.description}
      </p>
    </div>
  );
}

export default function IndustryExplorer() {
  const [activeId, setActiveId] = useState(industries[0].id);

  const active = useMemo(
    () => industries.find((i) => i.id === activeId) ?? industries[0],
    [activeId]
  );

  return (
    <div>
      <div className="mb-10 sm:mb-16 max-w-3xl">
        <p className="text-ink/60 text-[15px] sm:text-base leading-relaxed">
          {industriesIntro.pick}
        </p>
      </div>

      {/* Desktop: sidebar + panel */}
      <div className="hidden lg:grid grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)] gap-8 xl:gap-14">
        <aside className="lg:sticky lg:top-28 self-start">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-600 mb-4">
            Industries
          </p>
          <nav aria-label="Industry selection">
            <ul className="space-y-1">
              {industries.map((ind) => {
                const isActive = ind.id === activeId;
                return (
                  <li key={ind.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(ind.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`w-full text-left rounded-xl px-4 py-3 transition-colors ${
                        isActive
                          ? "bg-white border border-primary-500/40 shadow-[0_10px_30px_-20px_rgba(47,92,240,0.5)]"
                          : "border border-transparent hover:bg-white/60"
                      }`}
                    >
                      <span
                        className={`block font-display text-[14px] sm:text-[15px] font-semibold leading-snug ${
                          isActive ? "text-ink" : "text-ink/70"
                        }`}
                      >
                        {ind.name}
                      </span>
                      <span className="mt-1 block text-[11px] text-ink/40">
                        {getDepartmentCount(ind)} dept ·{" "}
                        {getWorkflowCount(ind)} workflows
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <IndustrySummary industry={active} />
              <div className="space-y-3">
                {active.departments.map((dept, i) => (
                  <IndustryCard
                    key={dept.id}
                    department={dept}
                    defaultOpen={i === 0}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="mt-8 sm:mt-10 text-[11px] sm:text-xs text-ink/40 leading-relaxed max-w-2xl">
            {industriesIntro.disclaimer}
          </p>
        </div>
      </div>

      {/* Tablet / mobile: chips + panel (capped width on tablet) */}
      <div className="lg:hidden max-w-3xl mx-auto">
        <div
          role="tablist"
          aria-label="Industries"
          className="-mx-5 sm:-mx-6 px-5 sm:px-6 overflow-x-auto pb-2 mb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-2 min-w-max">
            {industries.map((ind) => {
              const isActive = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(ind.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-ink text-white border-ink"
                      : "bg-white text-ink/70 border-ink/[0.1] hover:border-ink/30"
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <IndustrySummary industry={active} />
            <div className="space-y-3">
              {active.departments.map((dept, i) => (
                <IndustryCard
                  key={dept.id}
                  department={dept}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-[11px] sm:text-xs text-ink/40 leading-relaxed">
          {industriesIntro.disclaimer}
        </p>
      </div>
    </div>
  );
}