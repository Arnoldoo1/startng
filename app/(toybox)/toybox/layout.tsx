import type { Metadata } from 'next';
import Link from 'next/link';
import '../../toybox.css';

export const metadata: Metadata = {
  title: 'The Toybox · a start.ng design direction',
  description: 'A paper-cut playroom for start.ng. Same games, more confetti. A whimsical design direction and playable prototype.',
};

function ToyboxLogo() {
  return (
    <Link className="tb-logo" href="/toybox" aria-label="The Toybox">
      <span className="tb-logo-mark" aria-hidden="true">✦</span>
      <b>toybox</b>
      <span>start.ng</span>
    </Link>
  );
}

export default function ToyboxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tb-world">
      <header className="tb-header">
        <div className="tb-wrap">
          <ToyboxLogo />
          <nav className="tb-nav" aria-label="Toybox">
            <Link href="/toybox#machine">Pick a game</Link>
            <Link href="/toybox#shelf">The shelf</Link>
            <Link href="/toybox/design">Design notes</Link>
            <Link className="tb-back" href="/">Back to start.ng ↗</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="tb-footer">
        <div className="tb-wrap">
          <span>© 2026 start.ng · The Toybox is a design direction, not the main site.</span>
          <span className="tb-footer-links">
            <Link href="/toybox/design">Design notes</Link>
            <Link href="/games">All 189 games</Link>
            <Link href="/">start.ng</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
