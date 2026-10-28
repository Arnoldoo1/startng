'use client';

import { useEffect, useState } from 'react';
import { useApp } from './AppProvider';

export function Modal({ children, onClose, label }: { children: React.ReactNode; onClose: () => void; label: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);
  return (
    <div className="overlay" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={label} onClick={(e) => e.stopPropagation()} style={{ width: 'min(440px, 100%)' }}>
        {children}
      </div>
    </div>
  );
}

export function ShareButtons({ url, text }: { url: string; text: string }) {
  const { notify } = useApp();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      notify('Link copied.');
    } catch {
      window.prompt('Copy this link', url);
    }
  };
  return (
    <div className="share-buttons">
      <a className="ghost" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">Share on X</a>
      <button type="button" className="ghost" onClick={copy}>Copy link</button>
    </div>
  );
}

export function ReportButton({ name }: { name: string }) {
  const { notify } = useApp();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('It does not work');
  const [details, setDetails] = useState('');
  return (
    <>
      <button type="button" className="report-link" onClick={() => setOpen(true)}>Report this game</button>
      {open && (
        <Modal label="Report this game" onClose={() => setOpen(false)}>
          <div className="mini-modal">
            <h3>Report {name}</h3>
            <p>Tell us what is wrong. Reports are private and help keep start.ng safe.</p>
            <div className="field">
              <label htmlFor="report-reason">What happened?</label>
              <select id="report-reason" value={reason} onChange={(e) => setReason(e.target.value)}>
                <option>It does not work</option>
                <option>It is not appropriate</option>
                <option>It is not the game described</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="report-details">Anything else? (optional)</label>
              <textarea id="report-details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="A sentence helps us find it." />
            </div>
            <div className="actions">
              <button type="button" className="ghost" onClick={() => setOpen(false)}>Cancel</button>
              <button type="button" className="btn" onClick={() => { setOpen(false); notify('Report sent. Thank you.'); }}>Send report</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
