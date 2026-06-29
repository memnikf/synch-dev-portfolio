import { FormEvent, useEffect, useState } from 'react';
import type { SiteCopy } from '../content/i18n';

type ContactModalProps = {
  copy: SiteCopy['contact'];
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ copy, open, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setVisible(false);
    const unmountTimer = window.setTimeout(() => setMounted(false), 460);
    return () => window.clearTimeout(unmountTimer);
  }, [open]);

  useEffect(() => {
    if (!mounted) {
      const timer = window.setTimeout(() => {
        setSubmitted(false);
        setSending(false);
      }, 250);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeWithMotion();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const closeWithMotion = () => {
    setVisible(false);
    window.setTimeout(onClose, 340);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  };

  if (!mounted) return null;

  return (
    <div
      className={`modal-backdrop ${visible ? 'modal-backdrop--show' : ''}`}
      role="presentation"
      onMouseDown={closeWithMotion}
    >
      <div
        aria-modal="true"
        className={`contact-modal ${visible ? 'contact-modal--show' : ''}`}
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={closeWithMotion} aria-label={copy.close}>
          x
        </button>

        {submitted ? (
          <div className="modal-success">
            <span className="brand__sigil" aria-hidden="true" />
            <h2>{copy.successTitle}</h2>
            <p>{copy.successBody}</p>
            <button className="button button--dark" type="button" onClick={closeWithMotion}>
              {copy.close}
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow modal-reveal modal-reveal--1">{copy.kicker}</p>
            <h2 className="modal-reveal modal-reveal--2">{copy.title}</h2>
            <p className="contact-modal__body modal-reveal modal-reveal--3">{copy.body}</p>
            <form onSubmit={submit}>
              <label className="modal-reveal modal-reveal--4">
                {copy.name}
                <input name="name" required placeholder="Synch" />
              </label>
              <label className="modal-reveal modal-reveal--5">
                {copy.email}
                <input name="email" required type="email" placeholder="you@company.com" />
              </label>
              <label className="modal-reveal modal-reveal--6">
                {copy.project}
                <textarea name="project" required rows={4} placeholder="WebGL portfolio, landing page, product UI..." />
              </label>
              <button className="button button--dark modal-reveal modal-reveal--7" type="submit" disabled={sending}>
                {sending ? copy.sending : copy.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
