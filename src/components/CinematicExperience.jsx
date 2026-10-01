import { useEffect, useRef, useState } from "react";

export default function CinematicExperience() {
  const frameRef = useRef(null);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    let observer;
    let visibilityObserver;
    const measure = () => {
      const app = frame.contentDocument?.getElementById("app");
      if (app) {
        const navHeight = document.querySelector("header")?.getBoundingClientRect().height || 96;
        const section = frame.closest("section");
        const pageOffset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
        if (section) section.style.scrollMarginTop = `${navHeight - pageOffset}px`;
        frame.contentDocument.documentElement.style.setProperty("--available-height", `${Math.max(240, window.innerHeight - navHeight)}px`);
        setHeight(Math.ceil(app.getBoundingClientRect().height));
      }
    };
    const onLoad = () => {
      observer?.disconnect();
      visibilityObserver?.disconnect();
      const app = frame.contentDocument?.getElementById("app");
      if (!app) return;
      // Use the exact same typefaces as the parent page.
      frame.contentDocument.body.style.fontFamily = getComputedStyle(document.body).fontFamily;
      document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        if (link.href.includes("fonts.googleapis.com")) {
          frame.contentDocument.head.appendChild(link.cloneNode(true));
        }
      });
      observer = new ResizeObserver(measure);
      observer.observe(app);
      measure();
      visibilityObserver = new IntersectionObserver(([entry]) => {
        frame.contentWindow?.setCinematicVisible?.(entry.isIntersecting && entry.intersectionRatio >= 0.12);
      }, { threshold: [0, 0.12] });
      visibilityObserver.observe(frame);
    };
    frame.addEventListener("load", onLoad);
    window.addEventListener("resize", measure);
    if (frame.contentDocument?.readyState === "complete") onLoad();
    return () => {
      observer?.disconnect();
      visibilityObserver?.disconnect();
      frame.removeEventListener("load", onLoad);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="w-full bg-void">
      <iframe
        ref={frameRef}
        src="/cinematic.html"
        title="AiVren connected operations — cinematic walkthrough"
        className="block w-full border-0"
        style={{ height }}
        allow="fullscreen"
      />
    </div>
  );
}
