import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import Hero from "./components/Hero";
import About from "./components/About";
import BusinessProblems from "./components/BusinessProblems";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import CinematicExperience from "./components/CinematicExperience";
import Agents from "./components/Agents";
import Visibility from "./components/Visibility";
import Implementation from "./components/Implementation";
import Support from "./components/Support";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { sectionIds } from "./data/content";

export default function App() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <div id={sectionIds.top} aria-hidden="true" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-ink focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <BusinessProblems />

        <div id={sectionIds.solutions} className="section-anchor">
          <Solutions />
        </div>

        <section id={sectionIds.aiInAction} aria-label="AI in Action" className="section-anchor">
          <CinematicExperience />
        </section>
        <Industries />
        <Agents />
        <Visibility />
        <Implementation />
        <Support />

        <CTA />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
