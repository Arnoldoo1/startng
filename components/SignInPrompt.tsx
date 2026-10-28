'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useApp } from '@/components/AppProvider';
import { CharacterAvatar } from '@/components/CharacterAvatar';

export function SignInPrompt() {
  const { user, openAuth, authOpen } = useApp();

  useEffect(() => {
    if (!user) {
      const t = setTimeout(() => openAuth(), 350);
      return () => clearTimeout(t);
    }
  }, [user, openAuth]);

  if (user) {
    return (
      <main className="container signin-page">
        <div className="signin-card">
          <CharacterAvatar character={user.character} size={96} />
          <p className="eyebrow-small">Already signed in</p>
          <h1>Welcome back, {user.name}.</h1>
          <p>Your character, favourites and scores are on this device.</p>
          <div className="actions">
            <Link className="btn" href="/profile">Your profile</Link>
            <Link className="ghost" href="/games">Play a game</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container signin-page">
      <div className="signin-card">
        <span className="logo-mark" aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, margin: '0 auto 14px' }}>
          <svg viewBox="0 0 24 24" width="24" height="24"><path d="M8 5.5v13l10-6.5z" fill="currentColor" /></svg>
        </span>
        <p className="eyebrow-small">Your start.ng account</p>
        <h1>One character. Every game.</h1>
        <p>Sign in to keep your scores, save favourites, join the daily tournament and bring your character into every game.</p>
        <button type="button" className="btn" onClick={openAuth} style={{ width: '100%' }}>{authOpen ? 'Sign-in window open…' : 'Continue with Google'}</button>
        <p className="fineprint">No password to remember. This demo keeps your account in your browser.</p>
        <Link className="signin-back" href="/games">Just here to play? Browse all games →</Link>
      </div>
    </main>
  );
}
