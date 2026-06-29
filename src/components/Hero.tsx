import type { SiteCopy } from '../content/i18n';
import { HeroScene } from './HeroScene';

type HeroProps = {
  copy: SiteCopy['hero'];
  onContact: () => void;
  onNavigate: (id: string) => void;
};

export function Hero({ copy, onContact, onNavigate }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero__grid site-shell">
        <div className="hero__copy reveal">
          <p className="eyebrow">{copy.role}</p>
          <h1>{copy.title}</h1>
          <p className="hero__body">{copy.body}</p>
          <div className="hero__actions">
            <button className="button button--dark" type="button" onClick={() => onNavigate('work')}>
              {copy.primary}
            </button>
            <button className="button button--light" type="button" onClick={onContact}>
              {copy.secondary}
            </button>
          </div>
        </div>
        <div className="hero__scene" aria-label="Animated 3D portfolio object">
          <HeroScene />
        </div>
      </div>
      <div className="hero__rail site-shell" aria-label="Capabilities">
        {copy.proof.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
