'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { formatPlays, getGame, games, type Game } from '@/lib/site';

const FEATURED = [
  ['lanedash', 'NAIJA'],
  ['go-slow-danfo', 'LAGOS'],
  ['riftsync', 'NEW'],
  ['jollof-catch', 'SNACKY'],
  ['balloon-funride', 'FLOATY'],
  ['follow-follow', 'CHAOTIC'],
] as const;

const MOODS = [
  { key: 'zoom', label: '⚡ Zoomies', note: 'Fast fingers, no brakes.', cats: ['Endless runners', 'Racing and driving'] },
  { key: 'cozy', label: '🍲 Cozy corner', note: 'Warm food, soft chaos.', cats: ['Food and cooking', 'Nigerian themed'] },
  { key: 'brain', label: '🧠 Brain fizz', note: 'Small puzzles, big smug.', cats: ['Brainy games', 'Board and card'] },
  { key: 'chaos', label: '🌀 Pure chaos', note: 'Dodge first, think later.', cats: ['Catch and dodge', 'Survival'] },
  { key: 'space', label: '🛸 Outer space', note: 'Neon, stars, lasers.', cats: ['Space and sci-fi', 'Neon and cyberpunk'] },
  { key: 'treasure', label: '💎 Treasure brain', note: 'Ooh, shiny. Mine now.', cats: ['Coin collecting', 'Ancient ruins and treasure'] },
] as const;

const QUESTS = [
  ['lanedash', 'Reach 40 in Lanedash without clipping a car.'],
  ['jollof-catch', 'Catch 12 plates of jollof. Do not drop the soup.'],
  ['go-slow-danfo', 'Survive one full Lagos go-slow. Blame nobody.'],
  ['balloon-funride', 'Float past 30 coins in Balloon Funride.'],
  ['riftsync', 'Sync three rifts in a row. No panic.'],
  ['follow-follow', 'Follow the crowd for 20 seconds. Do not get left behind.'],
  ['dont-spill-the-soup', 'Carry the soup across the room. One clean run.'],
  ['ayo-arena', 'Win one round of Ayo Arena against the house.'],
  ['market-dash', 'Finish a market run with more coins than excuses.'],
] as const;

type Confetti = { key: number };

export function ToyboxExperience() {
  const pool = useMemo(() => games.filter((g) => g.slug !== 'the-hangout'), []);
  const featured: { game: Game; tag: string }[] = FEATURED.flatMap(([slug, tag]) => {
    const game = getGame(slug);
    return game ? [{ game, tag }] : [];
  });

  const [reel, setReel] = useState(0);
  const [picked, setPicked] = useState<Game | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [confetti, setConfetti] = useState<Confetti | null>(null);
  const [mood, setMood] = useState<string | null>(null);
  const [questIndex, setQuestIndex] = useState(0);
  const [questDone, setQuestDone] = useState(false);
  const [name, setName] = useState('');
  const [passport, setPassport] = useState('');
  const [saved, setSaved] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('startng:toybox:name');
      if (stored) { setName(stored); setPassport(stored); }
    } catch {}
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setPicked(null);
    setConfetti(null);
    setQuestDone(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    intervalRef.current = setInterval(() => {
      setReel((r) => (r + 1) % pool.length);
    }, 70);
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const next = pool[Math.floor(Math.random() * pool.length)];
      setPicked(next);
      setReel(pool.findIndex((g) => g.slug === next.slug));
      setSpinning(false);
      setConfetti({ key: Date.now() });
    }, 1500);
  };

  const current = picked ?? pool[reel] ?? featured[0]?.game;
  const moodResult = useMemo(() => {
    if (!mood) return [];
    const selected = MOODS.find((m) => m.key === mood);
    if (!selected) return [];
    return games
      .filter((g) => g.slug !== 'the-hangout' && g.categories.some((c) => (selected.cats as readonly string[]).includes(c)))
      .sort((a, b) => b.plays - a.plays)
      .slice(0, 3);
  }, [mood]);

  const questGame = getGame(QUESTS[questIndex][0]);
  const savePassport = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = name.trim().slice(0, 24);
    if (!clean) return;
    setPassport(clean);
    setSaved(true);
    try { localStorage.setItem('startng:toybox:name', clean); } catch {}
  };

  return (
    <main>
      <section className="tb-hero">
        <div className="tb-wrap">
          <div>
            <span className="tb-flag"><i aria-hidden="true" /> A design direction · not the main site</span>
            <h1>Good games,<br />with the <span className="tb-under">lid <span className="tb-pop">off.</span></span></h1>
            <p className="tb-lede">Welcome to <b>The Toybox</b>: a paper-cut playroom where every game is a wind-up toy, every category is a drawer, and nobody has ever said “let’s circle back” in here.</p>
            <div className="tb-hero-actions">
              <a className="tb-btn" href="#machine">Pull the game handle <span aria-hidden="true">↯</span></a>
              <a className="tb-btn tb-btn-ink" href="#shelf">Open the shelf</a>
              <span className="tb-note">No download. 189 toys. 0 boring games.</span>
            </div>
          </div>
          <div className="tb-toy-stage">
            <div className="tb-blob" aria-hidden="true" />
            <div className="tb-tv">
              <div className="tb-tv-body">
                <div className="tb-screen">
                  <span className="tb-screen-badge">now playing</span>
                  <img src="/covers/lanedash.webp" alt="Lanedash cover on a toy television" />
                </div>
                <div className="tb-tv-controls">
                  <b>TOYVISION 3000</b>
                  <span className="tb-knobs" aria-hidden="true"><i /><i /></span>
                </div>
              </div>
            </div>
            <span className="tb-sticker s1">no download ever</span>
            <span className="tb-sticker s2">pick a toy · play it now</span>
            <span className="tb-sticker s3" aria-hidden="true">★</span>
          </div>
        </div>
      </section>

      <div className="tb-ticker" aria-hidden="true">
        <div className="tb-ticker-track">
          <span>Good games <span>Naija made</span> <span>Free to play</span> <span>Confetti included</span> <span>No boring games</span> <span>Play in your browser</span></span>
          <span>Good games <span>Naija made</span> <span>Free to play</span> <span>Confetti included</span> <span>No boring games</span> <span>Play in your browser</span></span>
        </div>
      </div>

      <section className="tb-section" id="machine">
        <div className="tb-wrap">
          <div className="tb-section-head">
            <div>
              <p className="tb-kicker">The pick-a-game machine</p>
              <h2>Can’t choose? Let the box choose.</h2>
              <p>One pull picks one of 188 browser toys. If it picks a racing game and you wanted soup, that is the toybox teaching you about life.</p>
            </div>
            <span className="tb-side-note">fair &amp; extremely scientific</span>
          </div>

          <div className="tb-machine">
            <div className="tb-machine-box">
              <div className={`tb-slot${spinning ? ' tb-spinning' : ''}`} aria-live="polite">
                {current && <img src={current.cover} alt={`${current.title} cover`} />}
                <div className="tb-slot-label">
                  <b>{spinning ? 'Rummaging…' : current?.title ?? 'Pull the handle'}</b>
                  <span>{spinning ? 'tiny gears turning' : current ? `by ${current.by}` : 'anything could happen'}</span>
                </div>
                {confetti && (
                  <div className="tb-confetti" key={confetti.key} aria-hidden="true">
                    {Array.from({ length: 22 }, (_, i) => (
                      <i key={i} style={{ left: `${(i * 37) % 96}%`, animationDelay: `${(i % 7) * 0.05}s`, top: `${(i % 5) * 8}px` }} />
                    ))}
                  </div>
                )}
              </div>
              <div className="tb-machine-controls">
                <button type="button" className="tb-lever" onClick={spin} disabled={spinning}>
                  {spinning ? 'Shaking the box…' : picked ? 'Pull again ↯' : 'Pull the handle ↯'}
                </button>
                {current && <Link className="tb-mini-arrow" href={`/games/${current.slug}`} aria-label={`Open ${current.title}`}>↗</Link>}
              </div>
            </div>
            <div className="tb-machine-copy">
              <p className="tb-kicker">Freshly dispensed</p>
              <h2>Your toy is waiting.</h2>
              <p>The machine knows all 189 games by heart. It also knows that you will probably play one round and say “okay, one more” for the next forty minutes.</p>
              {picked ? (
                <div className="tb-result">
                  <div className="tb-row">
                    <span><b>{picked.title}</b> · by {picked.by}</span>
                    <Link className="tb-btn tb-small" href={`/games/${picked.slug}/play`}>Play it now</Link>
                  </div>
                </div>
              ) : (
                <div className="tb-result"><b>The box is ready.</b> Give the yellow handle a pull. No coins needed, it runs on pure curiosity.</div>
              )}
              <p style={{ marginTop: 14, fontSize: '.76rem' }}>Prefer to browse like a grown-up? <Link href="/games" style={{ textDecoration: 'underline', textDecorationThickness: 2 }}>All games are here ↗</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="tb-section">
        <div className="tb-wrap">
          <div className="tb-section-head">
            <div>
              <p className="tb-kicker">The mood mixer</p>
              <h2>What kind of silly are we?</h2>
              <p>Pick a mood. The toybox opens the matching drawer and pulls out three games. No wrong answers, only chaotic ones.</p>
            </div>
            {moodResult.length > 0 && <button type="button" className="tb-side-note" onClick={() => setMood(null)} style={{ cursor: 'pointer' }}>Clear mood ✕</button>}
          </div>

          <div className="tb-moods" role="group" aria-label="Pick a mood">
            {MOODS.map((m) => (
              <button type="button" key={m.key} className={`tb-mood${mood === m.key ? ' on' : ''}`} onClick={() => setMood(mood === m.key ? null : m.key)} title={m.note}>
                {m.label}
              </button>
            ))}
          </div>

          <div className="tb-mood-results">
            {moodResult.length === 0 ? (
              <div className="tb-mood-empty"><b>The drawer is closed.</b> Choose a mood above and three games will tumble out.</div>
            ) : moodResult.map((game) => (
              <article className="tb-game-card" key={game.slug}>
                <Link href={`/games/${game.slug}`} className="tb-art">
                  <img src={game.cover} alt={`${game.title} cover`} />
                  <span className="tb-tag">mood pick</span>
                </Link>
                <div className="tb-game-meta">
                  <h3><Link href={`/games/${game.slug}`}>{game.title}</Link></h3>
                  <span className="tb-by">by {game.by}</span>
                </div>
                <div className="tb-game-foot">
                  <Link href={`/games/${game.slug}/play`}>Play now →</Link>
                  <span className="tb-plays">{formatPlays(game.plays)} plays</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section" id="shelf">
        <div className="tb-wrap">
          <div className="tb-section-head">
            <div>
              <p className="tb-kicker">On the toybox shelf</p>
              <h2>Six good ones, hand-picked.</h2>
              <p>The kind of games you show a friend by silently turning your phone around. Start anywhere.</p>
            </div>
            <Link className="tb-side-note" href="/games">All 189 games →</Link>
          </div>

          <div className="tb-shelf">
            {featured.map(({ game, tag }) => (
              <article className="tb-game-card" key={game.slug}>
                <Link href={`/games/${game.slug}`} className="tb-art">
                  <img src={game.cover} alt={`${game.title} cover`} />
                  <span className="tb-tag">{tag}</span>
                </Link>
                <div className="tb-game-meta">
                  <h3><Link href={`/games/${game.slug}`}>{game.title}</Link></h3>
                  <span className="tb-by">by {game.by}</span>
                </div>
                <div className="tb-game-foot">
                  <Link href={`/games/${game.slug}/play`}>Play now →</Link>
                  <span className="tb-plays">{formatPlays(game.plays)} plays</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section">
        <div className="tb-wrap tb-two-up">
          <div className="tb-panel tb-quest">
            <div className="tb-quest-body">
              <div className="tb-quest-icon" aria-hidden="true">🎯</div>
              <div>
                <p className="tb-kicker">Today’s tiny quest</p>
                <h2>{questDone ? 'Quest accepted.' : 'One small dare.'}</h2>
                <p>{questDone ? `Now go and do it. ${questGame?.title ?? 'Your game'} is waiting.` : QUESTS[questIndex][1]}</p>
                <div className="tb-quest-meta">
                  {questGame && <Link className="tb-btn tb-small tb-btn-mint" href={`/games/${questGame.slug}/play`}>{questDone ? 'Start the quest' : 'Take the dare'}</Link>}
                  <button type="button" className="tb-btn tb-small" onClick={() => { setQuestIndex((i) => (i + 1) % QUESTS.length); setQuestDone(false); }}>Another dare ↻</button>
                  {questDone && <span className="tb-stamp">dare<br />accepted</span>}
                </div>
                {!questDone && <button type="button" onClick={() => setQuestDone(true)} style={{ background: 'none', border: 0, borderBottom: '2px solid var(--tb-ink)', padding: '14px 0 1px', fontWeight: 700, fontSize: '.74rem' }}>I’ll do it, hand on heart</button>}
              </div>
            </div>
          </div>

          <div className="tb-panel tb-passport">
            <p className="tb-kicker">Toybox passport</p>
            <h2>Who’s playing?</h2>
            <p>Write a name for your toybox self. It is stored on this device only, like a sticker on the inside of the lid.</p>
            <form onSubmit={savePassport} className="tb-passport-row">
              <input value={name} onChange={(e) => { setName(e.target.value); setSaved(false); }} placeholder="e.g. Captain Jollof" maxLength={24} aria-label="Your toybox name" />
              <button type="submit" className="tb-btn tb-small tb-btn-mint">Stamp it</button>
            </form>
            <span className="tb-passport-name">{passport ? `This box belongs to ${passport}.` : 'This box belongs to… someone mysterious.'}</span>
            {saved && <span className="tb-stamp" style={{ marginLeft: 10, display: 'inline-grid' }}>stamped<br />with love</span>}
          </div>
        </div>
      </section>

      <section className="tb-section" id="hangout">
        <div className="tb-wrap">
          <div className="tb-panel tb-portal">
            <div>
              <p className="tb-kicker">The park at the bottom of the box</p>
              <h2>Meet everyone in the Hangout.</h2>
              <p>Walk in as your start.ng character, wave at strangers, and see who is hanging around. It is the only toy in here with other actual humans inside it.</p>
              <Link className="tb-btn tb-btn-ink" href="/hangout">Enter the Hangout →</Link>
            </div>
            <div className="tb-portal-art">
              <img src="/covers/the-hangout.webp" alt="The Hangout cover" />
              <span>live · walk with WASD</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tb-section" style={{ paddingTop: 34 }}>
        <div className="tb-wrap">
          <div className="tb-panel tb-notes">
            <div>
              <p className="tb-kicker">The thinking behind the confetti</p>
              <h2>Why does this exist?</h2>
              <p>The Toybox is a separate design direction for start.ng: a softer, louder, more handmade way to present the same catalogue. The faithful clone is still at the front door. This is the Saturday-morning cartoon version.</p>
            </div>
            <Link className="tb-btn" href="/toybox/design">Read the design notes →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
