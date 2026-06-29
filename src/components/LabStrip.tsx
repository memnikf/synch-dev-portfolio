import { useLayoutEffect, useRef, useState } from 'react';
import type { SiteCopy } from '../content/i18n';

type LabStripProps = {
  copy: SiteCopy['lab'];
};

export function LabStrip({ copy }: LabStripProps) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const activeTab = tabRefs.current[active];
    const parent = activeTab?.parentElement;
    if (!activeTab || !parent) return;

    const parentRect = parent.getBoundingClientRect();
    const parentStyles = window.getComputedStyle(parent);
    const padLeft = Number.parseFloat(parentStyles.paddingLeft) || 0;
    const padRight = Number.parseFloat(parentStyles.paddingRight) || 0;
    const innerWidth = parentRect.width - padLeft - padRight;
    const segmentWidth = innerWidth / copy.items.length;

    setIndicator({
      left: padLeft + segmentWidth * active,
      width: segmentWidth
    });
  }, [active, copy.items.length]);

  return (
    <section className="section lab" id="lab">
      <div className="site-shell lab__grid">
        <div className="section__intro">
          <p className="eyebrow">{copy.kicker}</p>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
        </div>
        <div className="lab-panel" data-active={active}>
          <div className="lab-panel__visual" aria-hidden="true">
            <span className="lab-core" />
            <span className="lab-particle lab-particle--one" />
            <span className="lab-particle lab-particle--two" />
            <span className="lab-particle lab-particle--three" />
            <span className="lab-orbit lab-orbit--one" />
            <span className="lab-orbit lab-orbit--two" />
            <span className="lab-orbit lab-orbit--three" />
          </div>
          <div className="lab-panel__copy-stack">
            {copy.items.map((item, index) => (
              <article
                aria-hidden={active !== index}
                className={`lab-panel__copy ${active === index ? 'is-active' : ''}`}
                key={item.title}
                role="tabpanel"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="lab-tabs" role="tablist" aria-label={copy.kicker}>
            <span
              className="lab-tabs__indicator"
              style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
            />
            {copy.items.map((item, index) => (
              <button
                className={active === index ? 'is-active' : ''}
                aria-selected={active === index}
                key={item.title}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                role="tab"
                type="button"
                onClick={() => {
                  if (active !== index) setActive(index);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
