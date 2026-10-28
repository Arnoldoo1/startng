import type { Metadata } from 'next';
import Link from 'next/link';
import { Toast } from '@/components/ChromeExtras';
import '../../toybox.css';

export const metadata: Metadata = {
  title: 'The Sun Market · a start.ng design direction',
  description:
    'A floating day market above Lagos. Every stall is a game, every lantern an invitation, and the sun keeps score. A whimsical design direction for start.ng.',
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
      <circle cx="18" cy="18" r="6.4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 3.2v4.6M18 28.2v4.6M3.2 18h4.6M28.2 18h4.6M7.6 7.6l3.2 3.2M25.2 25.2l3.2 3.2M28.4 7.6l-3.2 3.2M10.8 25.2l-3.2 3.2" />
      </g>
      <circle cx="18" cy="18" r="2.2" fill="#fffaf0" />
    </svg>
  );
}

export default function SunMarketLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm-world">
      <div className="sm-sky" aria-hidden="true">
        <div className="sm-aurora sm-aurora-one" />
        <div className="sm-aurora sm-aurora-two" />
        <div className="sm-aurora sm-aurora-three" />
        <div className="sm-stars">
          {STARS.map((star, index) => (
            <span
              key={index}
              className={`sm-star${index % 17 === 0 ? ' is-bright' : ''}`}
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
        <div className="sm-sky-haze" />
      </div>

      <header className="sm-header">
        <div className="sm-wrap sm-header-inner">
          <Link className="sm-logo" href="/toybox" aria-label="The Sun Market, a start.ng design direction">
            <span className="sm-logo-mark"><LogoMark /></span>
            <span className="sm-logo-type">
              <b>sun market</b>
              <em>start.ng in daylight</em>
            </span>
          </Link>

          <nav className="sm-nav" aria-label="The Sun Market">
            <Link href="/toybox#lantern">Lantern draw</Link>
            <Link href="/toybox#districts">Districts</Link>
            <Link href="/toybox#stalls">Stalls</Link>
            <Link href="/toybox#wish">Wishes</Link>
            <Link className="sm-nav-notes" href="/toybox/design">Design notes</Link>
            <Link className="sm-nav-back" href="/">start.ng <span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="sm-footer">
        <div className="sm-wrap sm-footer-grid">
          <div className="sm-footer-brand">
            <span className="sm-footer-mark" aria-hidden="true"><LogoMark /></span>
            <div>
              <b>The Sun Market</b>
              <p>A design direction for start.ng. Same games, in daylight. The faithful clone is still at the front door.</p>
            </div>
          </div>
          <div className="sm-footer-col">
            <h2>Wander</h2>
            <Link href="/toybox#lantern">The lantern draw</Link>
            <Link href="/toybox#districts">The six districts</Link>
            <Link href="/toybox#stalls">Today&apos;s stalls</Link>
            <Link href="/toybox#wish">Leave a wish</Link>
          </div>
          <div className="sm-footer-col">
            <h2>Elsewhere</h2>
            <Link href="/games">All 189 games</Link>
            <Link href="/hangout">The Hangout</Link>
            <Link href="/toybox/design">Design notes</Link>
            <Link href="/">start.ng</Link>
          </div>
          <p className="sm-footer-secret">
            One small secret is hiding in the sky.
            <span> It has wings.</span>
          </p>
        </div>
        <div className="sm-wrap sm-footer-bottom">
          <span>© 2026 start.ng · The Sun Market is a design direction, not the main site.</span>
          <span>Open all day. No tickets. No closing time.</span>
        </div>
      </footer>

      <Toast />
    </div>
  );
}
