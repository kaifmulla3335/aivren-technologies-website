import { useEffect, useState } from "react";
import logoIcon from "../assets/aivren-logo-icon.png";
import { hero } from "../data/content";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Full-screen boot moment shown once when the site first loads. Ties back
// to the hero's void/cyan palette so it reads as the start of the same
// experience, not a generic spinner. Dismisses as soon as the page has
// actually finished loading (with a short floor so it never just flashes,
// and a hard ceiling so a slow connection never gets stuck looking at it).
export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const minTime = prefersReducedMotion ? 200 : 900;
    const maxTime = 1800;
    const start = performance.now();
    let hardCap;

    const finish = () => {
      const elapsed = performance.now() - start;
      setTimeout(() => setLeaving(true), Math.max(0, minTime - elapsed));
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    hardCap = setTimeout(() => setLeaving(true), maxTime);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(hardCap);
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setVisible(false), prefersReducedMotion ? 150 : 450);
    return () => clearTimeout(t);
  }, [leaving]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading AiVren Technologies"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-void px-5 transition-opacity duration-500 ease-out ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "radial-gradient(circle at center, #0b1d32 0%, #050a16 55%)" }}
    >
      <style>{`
        @keyframes loader-network { 0% { stroke-dashoffset: 120; opacity: .2; } 55% { opacity: .9; } 100% { stroke-dashoffset: 0; opacity: .2; } }
        @keyframes loader-orbit { to { transform: rotate(360deg); } }
        @keyframes loader-breathe { 50% { transform: scale(1.08); opacity: 1; } }
        @keyframes loader-reveal { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes loader-sweep { to { transform: rotate(360deg); } }
        @keyframes loader-progress { from { transform: translateX(-110%); } to { transform: translateX(340%); } }
        @keyframes loader-dot { 0%, 60%, 100% { opacity: .25; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-3px); } }
        .aivren-loader-link { fill: none; stroke: #7fe6f2; stroke-width: 1.5; stroke-dasharray: 5 7; animation: loader-network 1.5s linear infinite; }
        .aivren-loader-orbit { transform-origin: 120px 120px; animation: loader-orbit 9s linear infinite; }
        .aivren-loader-node { transform-box: fill-box; transform-origin: center; animation: loader-breathe 1.5s ease-in-out infinite; }
        .aivren-loader-copy { animation: loader-reveal .65s ease-out both; }
        .aivren-loader-sweep { animation: loader-sweep 1.25s linear infinite; }
        .aivren-loader-progress { animation: loader-progress 1.4s ease-in-out infinite; }
        .aivren-loader-dot { animation: loader-dot 1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .aivren-loader-link, .aivren-loader-orbit, .aivren-loader-node, .aivren-loader-copy, .aivren-loader-sweep, .aivren-loader-progress, .aivren-loader-dot { animation: none; } }
      `}</style>

      <div className="relative w-52 h-52 sm:w-60 sm:h-60 shrink-0" aria-hidden="true">
        <svg viewBox="0 0 240 240" className="absolute inset-0 w-full h-full" fill="none">
          <circle className="aivren-loader-orbit" cx="120" cy="120" r="94" stroke="#7fe6f2" strokeOpacity=".22" strokeWidth="1" strokeDasharray="16 14" />
          <circle cx="120" cy="120" r="57" stroke="#7fe6f2" strokeOpacity=".18" strokeWidth="1" />
          <path className="aivren-loader-link" d="M120 67V24M166 93l34-22M166 147l34 22M120 173v43M74 147l-34 22M74 93 40 71" />
          {[[120, 24], [200, 71], [200, 169], [120, 216], [40, 169], [40, 71]].map(([cx, cy], i) => (
            <circle key={i} className="aivren-loader-node" cx={cx} cy={cy} r="4" fill={i % 2 ? "#2f5cf0" : "#7fe6f2"} style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-[0_0_48px_rgba(63,212,232,0.16)]">
            <span className="aivren-loader-sweep absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_235deg,#2f5cf0_290deg,#7fe6f2_350deg,transparent_360deg)]" />
            <span className="absolute inset-[2px] rounded-full bg-void/95 flex items-center justify-center">
              <img src={logoIcon} alt="" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            </span>
          </span>
        </div>
      </div>

      <div className="aivren-loader-copy flex flex-col items-center text-center max-w-full -mt-1 sm:mt-0">
        <span className="font-display font-semibold text-white text-[clamp(1.45rem,5vw,2.25rem)] leading-tight tracking-tight">
          AiVren <span className="font-normal text-white/70">Technologies</span>
        </span>
        <span className="mt-2.5 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-cyan-300/75">
          {hero.tagline}
        </span>
        <span className="mt-4 flex items-center gap-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/55">
          Initializing intelligent workflows
          <span className="inline-flex gap-1" aria-hidden="true">
            {[0, 1, 2].map((i) => <span key={i} className="aivren-loader-dot w-1 h-1 rounded-full bg-cyan-300" style={{ animationDelay: `${i * 0.16}s` }} />)}
          </span>
        </span>
        <span className="mt-5 w-36 sm:w-44 h-px bg-white/10 overflow-hidden rounded-full">
          <span
            aria-hidden="true"
            className="aivren-loader-progress block h-full w-1/3 bg-gradient-to-r from-cyan-300 to-primary-500"
          />
        </span>
      </div>
    </div>
  );
}
