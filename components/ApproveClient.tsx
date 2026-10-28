'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './AppProvider';

function labelFromCode(code: string) {
  const words = code.replace(/[^a-z0-9-]/gi, '').split('-').filter(Boolean);
  if (!words.length) return 'New game';
  return words.map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export function ApproveClient({ code }: { code: string }) {
  const { user, openAuth, notify } = useApp();
  const [approved, setApproved] = useState(false);
  const name = labelFromCode(code);
  const host = `${name.toLowerCase().replace(/\s+/g, '-')}.start.ng`;

  const approve = () => {
    if (!user) { openAuth(); return; }
    setApproved(true);
    notify(`${name} is live.`);
  };

  return (
    <main className="container approve-page">
      <div className="approve-card">
        <p className="eyebrow-small">Approval · {code}</p>
        {approved ? (
          <>
            <span className="approve-tick" aria-hidden="true">✓</span>
            <h1>{name} is live.</h1>
            <p>Your game is published on start.ng. It has a home, a shared leaderboard and every player&apos;s character ready to go.</p>
            <div className="approve-url"><code>https://{host}</code></div>
            <div className="actions" style={{ justifyContent: 'flex-start' }}>
              <Link className="btn" href="/games">See it on start.ng</Link>
              <Link className="ghost" href="/docs">Read the docs</Link>
            </div>
          </>
        ) : (
          <>
            <h1>Put {name} live?</h1>
            <p>This is the last step. Approving publishes the game at <b>{host}</b> under your start.ng account. You can update it later with another publish call.</p>
            <div className="approve-url"><code>https://{host}</code></div>
            <ul className="approve-checks">
              <li>Static browser game, frontend only</li>
              <li>Repo is public and the build passed</li>
              <li>start.ng player and leaderboard calls checked</li>
            </ul>
            <div className="actions" style={{ justifyContent: 'flex-start' }}>
              <button type="button" className="btn" onClick={approve}>{user ? 'Approve and publish' : 'Sign in to approve'}</button>
              <Link className="ghost" href="/docs">Back to the docs</Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
