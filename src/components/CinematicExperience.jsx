import { useEffect, useRef, useState } from "react";

export default function CinematicExperience() {
  const frameRef = useRef(null);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    let observer;
    const measure = () => {
      const app = frame.contentDocument?.getElementById("app");
      if (app) setHeight(Math.ceil(app.getBoundingClientRect().height));
    };
    const onLoad = () => {
      observer?.disconnect();
      const app = frame.contentDocument?.getElementById("app");
      if (!app) return;
      observer = new ResizeObserver(measure);
      observer.observe(app);
      measure();
    };
    frame.addEventListener("load", onLoad);
    window.addEventListener("resize", measure);
    if (frame.contentDocument?.readyState === "complete") onLoad();
    return () => {
      observer?.disconnect();
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
