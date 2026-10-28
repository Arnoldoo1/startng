'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useApp } from './AppProvider';
import { CharacterAvatar } from './CharacterAvatar';

function Logo() {
  return (
    <Link className="logo" href="/" aria-label="start.ng home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path d="M8 5.5v13l10-6.5z" fill="currentColor" />
        </svg>
      </span>
      <b>start<span>.ng</span></b>
    </Link>
  );
}

const LINKS = [
  ['/games', 'Games'],
  ['/tournament', 'Tournament'],
  ['/creators', 'Creators'],
  ['/docs', 'Docs'],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { user, openAuth, signOut, favorites } = useApp();
  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(false);
  const [dark, setDark] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefers = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefers);
    setDark(isDark);
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, []);

  useEffect(() => {
    setMenu(false);
    setAccount(false);
  }, [pathname]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!accountRef.current?.contains(e.target as Node)) setAccount(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="container nav">
      <Logo />
      <nav id="pages-menu" className={menu ? 'open' : ''} aria-label="Pages">
        {LINKS.map(([href, label]) => (
          <Link key={href} href={href} className={pathname === href || pathname.startsWith(href + '/') ? 'on' : ''}>
            {label}
          </Link>
        ))}
        <button type="button" className="theme-toggle theme-row" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
          {dark ? <SunIcon /> : <MoonIcon />} {dark ? 'Light mode' : 'Dark mode'}
        </button>
      </nav>
      <div className="nav-account">
        <button type="button" className="nav-menu-btn" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
          <span aria-hidden="true" className="nav-menu-icon" />
          <span className="nav-menu-text">Menu</span>
        </button>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'}>
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
        {user ? (
          <div className="nav-user" ref={accountRef}>
            <button type="button" className="nav-user-btn" onClick={() => setAccount((v) => !v)} aria-expanded={account}>
              <CharacterAvatar character={user.character} size={30} />
              <span>{user.name.split(' ')[0]}</span>
            </button>
            {account && (
              <div className="account-menu" role="menu">
                <div className="account-head">
                  <CharacterAvatar character={user.character} size={42} />
                  <div><b>{user.name}</b><span>@{user.account}</span></div>
                </div>
                <Link href="/profile" role="menuitem">Your profile</Link>
                <Link href="/profile#favorites" role="menuitem">Favourites <span className="count">{favorites.length}</span></Link>
                <Link href="/tournament" role="menuitem">Today&apos;s tournament</Link>
                <button type="button" role="menuitem" onClick={() => { signOut(); setAccount(false); }}>Sign out</button>
              </div>
            )}
          </div>
        ) : (
          <button className="nav-signin" onClick={openAuth}>Sign in</button>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Nigeria&apos;s home for browser games, made by the community and by creators across Africa.</p>
        </div>
        <div>
          <h2>Play</h2>
          <Link href="/games">All games</Link>
          <Link href="/tournament">Daily tournament</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/hangout">The Hangout</Link>
          <Link href="/toybox" className="footer-special">The Toybox ✦</Link>
        </div>
        <div>
          <h2>Make games</h2>
          <Link href="/creators">Independent creators</Link>
          <Link href="/docs">Build a game</Link>
          <Link href="/docs.md">Docs for your AI (.md)</Link>
        </div>
        <div>
          <h2>About</h2>
          <Link href="/about">About start.ng</Link>
          <Link href="/toybox/design">Toybox design notes</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 start.ng</span>
        <span>Games from Nigeria and across Africa.</span>
      </div>
    </footer>
  );
}

export function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </g>
    </svg>
  );
}
