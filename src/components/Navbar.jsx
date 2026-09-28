import { useEffect, useRef, useState } from "react";
import { Menu, X, Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { nav, sectionIds, brand } from "../data/content";

// Switch to the full desktop nav only at lg (1024px). Below that, the
// hamburger overlay carries navigation. md (768px) was too narrow for six
// nav items plus the CTA.
const DESKTOP_BREAKPOINT = 1024;

function resolveId(href) {
  return href.replace(/^#/, "").replace(/\/+$/, "").trim();
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const toggleRef = useRef(null);
  const rafRef = useRef(0);

  /* -------- Scroll-state styling -------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------- Active section tracking -------- */
  useEffect(() => {
    const ids = [
      sectionIds.about,
      sectionIds.solutions,
      sectionIds.industries,
      sectionIds.aiInAction,
      sectionIds.process,
      sectionIds.commercial,
      sectionIds.contact,
    ];

    const computeActive = () => {
      const refLine = window.innerHeight * 0.4;
      let current = null;

      for (const id of ids) {
        if (!id) continue;
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= refLine) {
          current = id;
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        computeActive();
        rafRef.current = 0;
      });
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* -------- Lock body scroll when mobile menu is open -------- */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* -------- Escape closes menu -------- */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* -------- Auto-close on resize past desktop breakpoint -------- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-void/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between gap-4 h-[72px] lg:h-[84px]">
          <Logo variant="icon" />

          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-9"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const id = resolveId(item.href);
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm whitespace-nowrap transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 -bottom-1.5 h-px bg-cyan-300/80 origin-center transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href={`#${sectionIds.contact}`}
              className="text-sm font-medium text-ink bg-white hover:bg-cyan-300 transition-colors px-5 py-2.5 rounded-full whitespace-nowrap"
            >
              Book Consultation
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="lg:hidden relative text-white shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/[0.06] transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ---------- Mobile menu overlay ---------- */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className="absolute inset-0 bg-void/70 backdrop-blur-md"
        />

        <div
          className={`absolute inset-x-0 top-0 pt-[72px] bg-void/95 border-b border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <div className="px-5 pb-6 pt-4 max-h-[calc(100vh-72px)] overflow-y-auto overscroll-contain">
            <ul className="space-y-1">
              {nav.map((item, i) => {
                const id = resolveId(item.href);
                const isActive = activeId === id;
                return (
                  <li
                    key={item.href}
                    style={{
                      transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                    }}
                    className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      open
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex items-center justify-between py-3.5 border-b border-white/[0.06] text-lg font-display font-medium transition-colors ${
                        isActive
                          ? "text-cyan-300"
                          : "text-white/85 hover:text-cyan-300"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-4 h-1 bg-cyan-300"
                              : "w-1 h-1 bg-white/25 group-hover:w-4 group-hover:bg-cyan-300/70"
                          }`}
                        />
                        {item.label}
                      </span>
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className={`transition-all ${
                          isActive
                            ? "text-cyan-300"
                            : "text-white/25 group-hover:text-cyan-300 group-hover:translate-x-0.5"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={`#${sectionIds.contact}`}
              onClick={closeMenu}
              style={{
                transitionDelay: open ? `${120 + nav.length * 60}ms` : "0ms",
              }}
              className={`mt-5 flex items-center justify-center gap-2 w-full bg-cyan-300 text-void font-semibold text-sm px-5 py-3.5 rounded-full hover:bg-cyan-300/90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              Book Consultation
              <ArrowRight size={15} aria-hidden="true" />
            </a>

            <div
              style={{
                transitionDelay: open ? `${200 + nav.length * 60}ms` : "0ms",
              }}
              className={`mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-2 gap-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <a
                href={`mailto:${brand.email}`}
                onClick={closeMenu}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 hover:border-cyan-300/40 hover:bg-white/[0.05] transition-colors"
              >
                <Mail
                  size={14}
                  aria-hidden="true"
                  className="text-cyan-300/80 shrink-0"
                />
                <span className="text-[11px] text-white/70 truncate">
                  Email us
                </span>
              </a>
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                onClick={closeMenu}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 hover:border-cyan-300/40 hover:bg-white/[0.05] transition-colors"
              >
                <Phone
                  size={14}
                  aria-hidden="true"
                  className="text-cyan-300/80 shrink-0"
                />
                <span className="text-[11px] text-white/70 truncate">
                  Call us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
