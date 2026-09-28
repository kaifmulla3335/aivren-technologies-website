import logoFull from "../assets/aivren-logo-full.png";
import logoIcon from "../assets/aivren-logo-icon.png";

/**
 * Official AiVren Technologies logo, rendered directly from the provided
 * brand assets (no CSS-redrawn logo, no distortion, aspect ratio preserved).
 *
 * variant="icon" (default) -> compact mark + "AiVren Technologies" wordmark
 *                              text set in real type. Used in the navbar,
 *                              mobile menu and anywhere space is tight.
 * variant="full"           -> the complete official lockup (mark + wordmark
 *                              + tagline baked into the artwork). Used in
 *                              the footer and other larger brand moments.
 */
export default function Logo({
  variant = "icon",
  withWordmark = true,
  className = "",
}) {
  if (variant === "full") {
    return (
      <a
        href="#top"
        aria-label="AiVren Technologies — back to top"
        className={`inline-flex items-center max-w-full ${className}`}
      >
        <img
          src={logoFull}
          alt="AiVren Technologies — Powering Business with AI"
          loading="lazy"
          decoding="async"
          className="h-full w-auto max-w-full object-contain"
        />
      </a>
    );
  }

  return (
    <a
      href="#top"
      aria-label="AiVren Technologies — back to top"
      className={`flex items-center gap-2.5 min-w-0 ${className}`}
    >
      <img
        src={logoIcon}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="h-8 w-auto object-contain shrink-0"
      />
      {withWordmark && (
        <span className="font-display font-semibold text-base sm:text-lg tracking-tight text-white leading-none whitespace-nowrap">
          AiVren <span className="font-normal text-white/70">Technologies</span>
        </span>
      )}
    </a>
  );
}