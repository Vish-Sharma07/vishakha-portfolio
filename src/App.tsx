import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'exploring', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main id="main-content" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <CurrentlyExploring />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
