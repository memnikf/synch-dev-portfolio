import { useEffect, useState } from 'react';
import type { SiteCopy } from '../content/i18n';

type LoaderProps = {
  copy: SiteCopy['loader'];
  onDone: () => void;
};

export function Loader({ copy, onDone }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;
    let previousProgress = -1;

    const tick = (time: number) => {
      const elapsed = Math.min((time - start) / 1500, 1);
      const eased = elapsed < 0.5 ? 4 * elapsed ** 3 : 1 - (-2 * elapsed + 2) ** 3 / 2;
      const nextProgress = Math.round(eased * 100);

      if (nextProgress !== previousProgress) {
        previousProgress = nextProgress;
        setProgress(nextProgress);
      }

      if (elapsed < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        window.setTimeout(onDone, 650);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  return (
    <div className={`loader ${exiting ? 'loader--exit' : ''}`} aria-live="polite">
      <div className="loader__mark">Synch.dev</div>
      <p>{copy.line}</p>
      <div className="loader__bar" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="loader__meta">
        <span>{copy.label}</span>
        <span>{String(progress).padStart(3, '0')}</span>
      </div>
    </div>
  );
}
