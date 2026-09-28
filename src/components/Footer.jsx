import logoIcon from "../assets/aivren-logo-icon.png";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { brand, footerNav, sectionIds } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (typeof window.scrollTo === "function") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: prefersReduced ? "auto" : "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }

    if (window.history?.replaceState) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <footer className="bg-void border-t border-white/10 pt-14 sm:pt-16 pb-8">
      <div className="container-page">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* ---------- Brand column ---------- */}
          <div className="min-w-0">
            <a
              href={`#${sectionIds.top}`}
              onClick={handleScrollTop}
              aria-label="AiVren Technologies — back to top"
              className="inline-flex flex-col items-start gap-2.5 group"
            >
              <img
                src={logoIcon}
                alt=""
                aria-hidden="true"
                className="h-12 w-auto sm:h-14 md:h-16 object-contain"
              />
              <span className="font-display font-semibold text-white text-lg sm:text-xl md:text-2xl leading-none tracking-tight">
                AiVren
                <span className="font-normal text-white/70"> Technologies</span>
              </span>
            </a>

            <p className="mt-3 text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase text-cyan-300/70 leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* ---------- Navigate (with animated cyan line on hover) ---------- */}
          <nav aria-label="Footer navigation">
            <h4 className="text-white/40 text-xs tracking-[0.18em] uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerNav.navigate.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center text-white/65 text-sm hover:text-white transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="w-0 h-px bg-cyan-300/70 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- More (with animated cyan line on hover) ---------- */}
          <nav aria-label="Additional links">
            <h4 className="text-white/40 text-xs tracking-[0.18em] uppercase mb-4">
              More
            </h4>
            <ul className="space-y-3">
              {footerNav.more.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center text-white/65 text-sm hover:text-white transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="w-0 h-px bg-cyan-300/70 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Contact (with Lucide icons) ---------- */}
          <div className="min-w-0">
            <h4 className="text-white/40 text-xs tracking-[0.18em] uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="group flex items-start gap-2.5 text-white/65 hover:text-white transition-colors"
                >
                  <Mail
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-0.5 text-cyan-300/60 group-hover:text-cyan-300 transition-colors shrink-0"
                  />
                  <span className="break-all leading-relaxed">
                    {brand.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-2.5 text-white/65 hover:text-white transition-colors"
                >
                  <Phone
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-0.5 text-cyan-300/60 group-hover:text-cyan-300 transition-colors shrink-0"
                  />
                  <span className="leading-relaxed">{brand.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60">
                <MapPin
                  size={15}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="mt-0.5 text-cyan-300/60 shrink-0"
                />
                <span className="leading-relaxed break-words">
                  {brand.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-gradient mt-8 sm:mt-10 mb-4 sm:mb-5" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs">
          <p className="text-white/35 text-center">
            © {year} {brand.fullName}. All rights reserved.
          </p>

          <a
            href={`#${sectionIds.top}`}
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-1.5 font-semibold text-white/70 hover:text-cyan-300 transition-colors group"
          >
            <span>Scroll to Top</span>
            <ArrowUp
              size={14}
              strokeWidth={2.4}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}