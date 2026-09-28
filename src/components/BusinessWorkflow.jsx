import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileText, BrainCircuit, Zap, Network, CircleCheck } from "lucide-react";
import { about } from "../data/content";

const steps = [
  { label: "Business request", detail: "New request", Icon: FileText },
  { label: "AI understanding", detail: "Context detected", Icon: BrainCircuit },
  { label: "Automation", detail: "Action executed", Icon: Zap },
  { label: "Connected systems", detail: "ERP / Email / WhatsApp", Icon: Network },
  { label: "Business result", detail: "Workflow completed", Icon: CircleCheck },
];

export default function BusinessWorkflow({ reducedMotion }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (reducedMotion || !panelRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(panelRef.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!visible || reducedMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 1450);
    return () => window.clearInterval(timer);
  }, [visible, reducedMotion]);

  return (
    <motion.article
      ref={panelRef}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="about-workflow"
      aria-labelledby="about-workflow-heading"
    >
      <header className="about-workflow__header">
        <span className="about-workflow__kicker">BUSINESS WORKFLOW / 001</span>
        <h3 id="about-workflow-heading">From request to result</h3>
        <p>AI connected to the work and systems you already use.</p>
      </header>

      <ol className="about-workflow__steps" aria-label="Business automation process">
        {steps.map(({ label, detail, Icon }, index) => (
          <li key={label} className={`about-workflow__step ${!reducedMotion && active === index ? "is-active" : ""}`}>
            <div className="about-workflow__node">
              <span className="about-workflow__node-top"><Icon size={17} strokeWidth={1.8} aria-hidden="true" /><span className="about-workflow__status" aria-hidden="true" /></span>
              <span className="about-workflow__number">0{index + 1}</span>
              <strong>{label}</strong>
              <span className="about-workflow__detail">{detail}</span>
            </div>
            {index < steps.length - 1 && <span className="about-workflow__connector" aria-hidden="true"><span className="about-workflow__signal" /></span>}
          </li>
        ))}
      </ol>

      <footer className="about-workflow__footer">
        <span className="about-workflow__complete"><CircleCheck size={15} strokeWidth={2} aria-hidden="true" /> Workflow completed</span>
        <ul className="about-workflow__capabilities" aria-label="Our capabilities">
          {about.pillars.map((pillar) => <li key={pillar.title} title={pillar.description} aria-label={`${pillar.title}: ${pillar.description}`}>{pillar.title}</li>)}
        </ul>
      </footer>
    </motion.article>
  );
}

