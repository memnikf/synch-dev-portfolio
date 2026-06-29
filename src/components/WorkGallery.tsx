import type { SiteCopy } from '../content/i18n';

type WorkGalleryProps = {
  copy: SiteCopy['work'];
};

export function WorkGallery({ copy }: WorkGalleryProps) {
  return (
    <section className="section work" id="work">
      <div className="site-shell section__intro">
        <p className="eyebrow">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </div>
      <div className="work__grid site-shell">
        {copy.items.map((item, index) => (
          <article className="work-card" key={item.title}>
            <div className={`work-card__artifact work-card__artifact--${index + 1}`} aria-hidden="true">
              <span />
            </div>
            <div className="work-card__meta">
              <span>{item.type}</span>
              <span>{item.year}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
