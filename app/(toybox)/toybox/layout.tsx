import type { Metadata } from 'next';
import Link from 'next/link';
import { Toast } from '@/components/ChromeExtras';
import '../../toybox.css';

export const metadata: Metadata = {
  title: 'The Moon Market · a start.ng design direction',
  description:
    'A floating night market above Lagos. Every stall is a game, every lantern an invitation, and the moon keeps score. A whimsical design direction for start.ng.',
};

const STARS = Array.from({ length: 78 }, (_, index) => {
  const x = (index * 37 + 11) % 100;
  const y = (index * 53 + 7) % 94;
  const size = index % 17 === 0 ? 2.6 : index % 7 === 0 ? 1.9 : index % 3 === 0 ? 1.3 : 1;
  const delay = ((index * 13) % 90) / 10;
  const duration = 5 + ((index * 7) % 8);
  return { x, y, size, delay, duration };
});

function LogoMark() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" fill="none">
      <path d="M25.5 7.2A12.4 12.4 0 1 0 29 26.8 10.8 10.8 0 1 1 25.5 7.2Z" fill="currentColor" />
      <path d="M26.5 11.5v7M23 15h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="9.5" cy="27.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function MoonMarketLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mm-world">
      <div className="mm-sky" aria-hidden="true">
        <div className="mm-aurora mm-aurora-one" />
        <div className="mm-aurora mm-aurora-two" />
        <div className="mm-aurora mm-aurora-three" />
        <div className="mm-stars">
          {STARS.map((star, index) => (
            <span
              key={index}
              className={`mm-star${index % 17 === 0 ? ' is-bright' : ''}`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
        </div>
        <div className="mm-sky-haze" />
      </div>

      <header className="mm-header">
        <div className="mm-wrap mm-header-inner">
          <Link className="mm-logo" href="/toybox" aria-label="The Moon Market, a start.ng design direction">
            <span className="mm-logo-mark"><LogoMark /></span>
            <span className="mm-logo-type">
              <b>moon market</b>
              <em>start.ng after dark</em>
            </span>
          </Link>

          <nav className="mm-nav" aria-label="The Moon Market">
            <Link href="/toybox#lantern">Lantern draw</Link>
            <Link href="/toybox#districts">Districts</Link>
            <Link href="/toybox#stalls">Stalls</Link>
            <Link href="/toybox#wish">Wishes</Link>
            <Link className="mm-nav-notes" href="/toybox/design">Design notes</Link>
            <Link className="mm-nav-back" href="/">start.ng <span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="mm-footer">
        <div className="mm-wrap mm-footer-grid">
          <div className="mm-footer-brand">
            <span className="mm-footer-mark" aria-hidden="true"><LogoMark /></span>
            <div>
              <b>The Moon Market</b>
              <p>A design direction for start.ng. Same games, after hours. The faithful clone is still at the front door.</p>
            </div>
          </div>
          <div className="mm-footer-col">
            <h2>Wander</h2>
            <Link href="/toybox#lantern">The lantern draw</Link>
            <Link href="/toybox#districts">The six districts</Link>
            <Link href="/toybox#stalls">Tonight&apos;s stalls</Link>
            <Link href="/toybox#wish">Leave a wish</Link>
          </div>
          <div className="mm-footer-col">
            <h2>Elsewhere</h2>
            <Link href="/games">All 189 games</Link>
            <Link href="/hangout">The Hangout</Link>
            <Link href="/toybox/design">Design notes</Link>
            <Link href="/">start.ng</Link>
          </div>
          <p className="mm-footer-secret">
            One small secret is hiding in the sky.
            <span> It has wings.</span>
          </p>
        </div>
        <div className="mm-wrap mm-footer-bottom">
          <span>© 2026 start.ng · The Moon Market is a design direction, not the main site.</span>
          <span>Open all night. No tickets. No closing time.</span>
        </div>
      </footer>

      <Toast />
    </div>
  );
}
