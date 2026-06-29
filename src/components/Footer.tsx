import { LanguageToggle } from './Header';
import type { Language, SiteCopy } from '../content/i18n';

type FooterProps = {
  copy: SiteCopy['footer'];
  nav: SiteCopy['nav'];
  language: Language;
  onContact: () => void;
  onLanguageChange: (language: Language) => void;
  onNavigate: (id: string) => void;
};

export function Footer({ copy, nav, language, onContact, onLanguageChange, onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="site-shell footer__grid">
        <div>
          <a className="brand" href="#top" onClick={(event) => { event.preventDefault(); onNavigate('top'); }}>
            <span className="brand__sigil" aria-hidden="true" />
            Synch.dev
          </a>
          <p>{copy.line}</p>
        </div>
        <nav aria-label="Footer navigation">
          <button type="button" onClick={() => onNavigate('work')}>{nav.work}</button>
          <button type="button" onClick={() => onNavigate('lab')}>{nav.lab}</button>
          <button type="button" onClick={() => onNavigate('stack')}>{nav.stack}</button>
          <button type="button" onClick={onContact}>{nav.contact}</button>
        </nav>
        <LanguageToggle language={language} onChange={onLanguageChange} />
      </div>
      <div className="site-shell footer__bottom">
        <span>© 2026 {copy.rights}</span>
        <span>WebGL / Motion / Frontend</span>
      </div>
    </footer>
  );
}
