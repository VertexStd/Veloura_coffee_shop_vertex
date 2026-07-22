import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Collection from "./components/Collection.jsx";
import Story from "./components/Story.jsx";
import BestSellers from "./components/BestSellers.jsx";
import Origins from "./components/Origins.jsx";
import BrewingGuide from "./components/BrewingGuide.jsx";
import Testimonials from "./components/Testimonials.jsx";
import InstagramGallery from "./components/InstagramGallery.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

export default function App() {
  useEffect(() => {
    const onPointerDown = (event) => {
      const btn = event.target.closest?.(".btn");
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
      btn.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
    };
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Collection />
        <Story />
        <BestSellers />
        <Origins />
        <BrewingGuide />
        <Testimonials />
        <InstagramGallery />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
