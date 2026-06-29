import { useEffect, useState } from 'react';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LabStrip } from './components/LabStrip';
import { Loader } from './components/Loader';
import { StackProcess } from './components/StackProcess';
import { WorkGallery } from './components/WorkGallery';
import { copy, type Language } from './content/i18n';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [loaderDone, setLoaderDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const content = copy[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.body.classList.toggle('is-locked', menuOpen || contactOpen || !loaderDone);
  }, [menuOpen, contactOpen, loaderDone]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      {!loaderDone ? <Loader copy={content.loader} onDone={() => setLoaderDone(true)} /> : null}
      <Header
        copy={content.nav}
        language={language}
        menuOpen={menuOpen}
        onContact={() => setContactOpen(true)}
        onLanguageChange={setLanguage}
        onMenuChange={setMenuOpen}
        onNavigate={scrollToSection}
      />
      <main>
        <Hero copy={content.hero} onContact={() => setContactOpen(true)} onNavigate={scrollToSection} />
        <WorkGallery copy={content.work} />
        <LabStrip copy={content.lab} />
        <StackProcess copy={content.stack} />
      </main>
      <Footer
        copy={content.footer}
        nav={content.nav}
        language={language}
        onContact={() => setContactOpen(true)}
        onLanguageChange={setLanguage}
        onNavigate={scrollToSection}
      />
      <ContactModal copy={content.contact} open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
