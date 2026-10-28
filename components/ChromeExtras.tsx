'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useApp } from './AppProvider';

export function Toast() {
  const { toast } = useApp();
  if (!toast) return null;
  return <div className="toast" role="status" key={toast.id}>{toast.message}</div>;
}

export function HelpWidget() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  return (
    <>
      <button type="button" className="help-fab" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span aria-hidden="true">?</span> Help
      </button>
      {open && (
        <div className="help-panel" role="dialog" aria-label="Help">
          <div className="help-head">
            <b>Need a hand?</b>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close help">✕</button>
          </div>
          <p>start.ng is free to play. Sign in to keep scores, join tournaments and bring your character into every game.</p>
          <Link href="/docs">How games work</Link>
          <Link href="/about">About start.ng</Link>
          <Link href="/tournament">Today&apos;s tournament</Link>
          <button type="button" className="ghost" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to the top</button>
        </div>
      )}
    </>
  );
}
