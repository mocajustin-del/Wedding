import React, { useState, useEffect } from 'react';
import { Cover } from './components/Cover';
import { Hero } from './components/Hero';
import { OpeningQuote } from './components/OpeningQuote';
import { GroomBride } from './components/GroomBride';
import { EventDetails } from './components/EventDetails';
import { DigitalEnvelope } from './components/DigitalEnvelope';
import { RSVP } from './components/RSVP';
import { FloatingAudioPlayer } from './components/FloatingAudioPlayer';
import { SectionDivider } from './components/SectionDivider';
import { Footer } from './components/Footer';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Simple scroll spy behavior for the bottom navigation
  useEffect(() => {
    if (!isOpened) return;

    const handleScroll = () => {
      const sections = ['beranda', 'mempelai', 'acara', 'ucapan'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpened]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative max-w-md mx-auto min-h-screen bg-background-light dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30">

      <Cover isOpen={isOpened} onOpen={() => setIsOpened(true)} />

      <FloatingAudioPlayer isOpen={isOpened} />

      <main className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <div id="beranda">
          <Hero />
        </div>

        <OpeningQuote />

        <SectionDivider variant="floral" />

        <div id="mempelai">
          <GroomBride />
        </div>

        <SectionDivider variant="floral" />

        <div id="acara">
          <EventDetails />
        </div>

        <SectionDivider variant="floral" />

        <DigitalEnvelope />

        <SectionDivider variant="floral" />

        <div id="ucapan">
          <RSVP />
        </div>

        <div className="mb-20">
          <Footer />
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md pb-6 pt-4 px-6 border-t border-slate-100/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg z-30 transition-transform duration-700 delay-500 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] ${isOpened ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-around items-center">
          {[
            { id: 'beranda', icon: 'home', label: 'Beranda' },
            { id: 'mempelai', icon: 'favorite', label: 'Mempelai' },
            { id: 'acara', icon: 'calendar_today', label: 'Acara' },
            { id: 'ucapan', icon: 'edit_note', label: 'Ucapan' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${activeSection === item.id
                ? 'text-primary bg-primary/10 dark:bg-primary/20 scale-110'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
            >
              <span className={`material-symbols-outlined ${activeSection === item.id ? 'fill' : ''}`} style={activeSection === item.id ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {item.icon}
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider">{item.label}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
