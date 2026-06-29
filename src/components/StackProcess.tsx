import type { SiteCopy } from '../content/i18n';

type StackProcessProps = {
  copy: SiteCopy['stack'];
};

export function StackProcess({ copy }: StackProcessProps) {
  return (
    <section className="section stack" id="stack">
      <div className="site-shell section__intro section__intro--wide">
        <p className="eyebrow">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </div>

      <div className="site-shell stack__grid">
        <div className="stack__groups">
          {copy.groups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="process-list">
          {copy.process.map((step) => (
            <article className="process-item" key={step.step}>
              <span>{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="site-shell stat-row">
        {copy.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
