import { useEffect, useState } from 'react';
import type { Language, SiteCopy } from '../content/i18n';

type HeaderProps = {
  copy: SiteCopy['nav'];
  language: Language;
  menuOpen: boolean;
  onContact: () => void;
  onLanguageChange: (language: Language) => void;
  onMenuChange: (open: boolean) => void;
  onNavigate: (id: string) => void;
};

const navItems = [
  ['work', 'work'],
  ['lab', 'lab'],
  ['stack', 'stack']
] as const;

export function Header({
  copy,
  language,
  menuOpen,
  onContact,
  onLanguageChange,
  onMenuChange,
  onNavigate
}: HeaderProps) {
  const [menuMounted, setMenuMounted] = useState(menuOpen);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setMenuMounted(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setMenuVisible(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setMenuVisible(false);
    const timer = window.setTimeout(() => setMenuMounted(false), 620);
    return () => window.clearTimeout(timer);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuVisible(false);
    window.setTimeout(() => onMenuChange(false), 420);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" onClick={(event) => { event.preventDefault(); onNavigate('top'); }}>
          <span className="brand__sigil" aria-hidden="true" />
          Synch.dev
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([key, id]) => (
            <button key={id} type="button" onClick={() => onNavigate(id)}>
              {copy[key]}
            </button>
          ))}
          <button type="button" onClick={onContact}>
            {copy.contact}
          </button>
        </nav>

        <div className="header-actions">
          <LanguageToggle language={language} onChange={onLanguageChange} />
          <button className="menu-button" type="button" onClick={() => onMenuChange(true)}>
            {copy.menu}
          </button>
        </div>
      </header>

      {menuMounted ? (
        <div className={`mobile-menu ${menuVisible ? 'mobile-menu--open' : ''}`} aria-hidden={!menuVisible}>
          <div className="mobile-menu__top">
            <span>Synch.dev</span>
            <button type="button" onClick={closeMenu}>
              {copy.close}
            </button>
          </div>
          <div className="mobile-menu__links">
            {navItems.map(([key, id], index) => (
              <button
                key={id}
                style={{ transitionDelay: `${90 + index * 55}ms` }}
                type="button"
                onClick={() => {
                  closeMenu();
                  window.setTimeout(() => onNavigate(id), 180);
                }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {copy[key]}
              </button>
            ))}
            <button
              style={{ transitionDelay: '255ms' }}
              type="button"
              onClick={() => {
                closeMenu();
                window.setTimeout(onContact, 180);
              }}
            >
              <span>04</span>
              {copy.contact}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function LanguageToggle({
  language,
  onChange
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  const changeLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) return;

    const transitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => void;
    };

    if (transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(() => onChange(nextLanguage));
      return;
    }

    onChange(nextLanguage);
  };

  return (
    <div className="language-toggle" data-language={language} aria-label="Language">
      <span className="language-toggle__indicator" aria-hidden="true" />
      <button
        aria-pressed={language === 'en'}
        className={language === 'en' ? 'is-active' : ''}
        type="button"
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        aria-pressed={language === 'ru'}
        className={language === 'ru' ? 'is-active' : ''}
        type="button"
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
    </div>
  );
}
