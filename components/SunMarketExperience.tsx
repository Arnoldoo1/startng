'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState, type ComponentType, type FormEvent } from 'react';
import { formatPlays, getGame, games, type Game } from '@/lib/site';
import { useApp } from './AppProvider';
import { SunMarketScene } from './SunMarketScene';

type IconProps = { className?: string };
type CharmKey = 'lantern' | 'district' | 'dare' | 'wish' | 'moth';
type CharmState = Record<CharmKey, boolean>;
type Wish = { id: number; text: string; at: string };
type District = {
  key: string;
  name: string;
  note: string;
  cats: string[];
  tint: string;
  Icon: ComponentType<IconProps>;
};

const STORAGE_KEY = 'startng:sunmarket:v1';
const EMPTY_CHARMS: CharmState = { lantern: false, district: false, dare: false, wish: false, moth: false };

const FEATURED = [
  { slug: 'lanedash', tag: 'the fast lane' },
  { slug: 'go-slow-danfo', tag: 'lagos, 5pm' },
  { slug: 'riftsync', tag: 'new arrival' },
  { slug: 'jollof-catch', tag: 'the soup stall' },
  { slug: 'balloon-funride', tag: 'light as air' },
  { slug: 'follow-follow', tag: 'crowd favourite' },
] as const;

const DISTRICTS: District[] = [
  {
    key: 'lanes',
    name: 'The Fast Lanes',
    note: 'Neon, engines, and one more run.',
    cats: ['Endless runners', 'Racing and driving', '3D games'],
    tint: 'rose',
    Icon: LaneIcon,
  },
  {
    key: 'kitchen',
    name: 'The Soup Kitchen',
    note: 'Warm bowls. Soft chaos. No spills.',
    cats: ['Food and cooking', 'Nigerian themed'],
    tint: 'gold',
    Icon: SoupIcon,
  },
  {
    key: 'parlour',
    name: 'The Puzzle Parlour',
    note: 'Small riddles with large smugness.',
    cats: ['Brainy games', 'Board and card'],
    tint: 'jade',
    Icon: PuzzleIcon,
  },
  {
    key: 'arcade',
    name: 'The Arcade Lawn',
    note: 'Dodge first. Think later. Regret nothing.',
    cats: ['Catch and dodge', 'Survival'],
    tint: 'violet',
    Icon: ArcadeIcon,
  },
  {
    key: 'docks',
    name: 'The Sky Docks',
    note: 'For afternoons that need more laser.',
    cats: ['Space and sci-fi', 'Neon and cyberpunk'],
    tint: 'sky',
    Icon: StarDockIcon,
  },
  {
    key: 'garden',
    name: 'The Treasure Garden',
    note: 'Ooh, shiny. Definitely yours now.',
    cats: ['Coin collecting', 'Ancient ruins and treasure'],
    tint: 'peach',
    Icon: TreasureIcon,
  },
];

const QUESTS = [
  { slug: 'lanedash', text: 'Reach 40 in Lanedash without clipping a single car.' },
  { slug: 'jollof-catch', text: 'Catch twelve plates of jollof. Do not drop the soup.' },
  { slug: 'go-slow-danfo', text: 'Survive one full Lagos go-slow and blame absolutely nobody.' },
  { slug: 'balloon-funride', text: 'Float past thirty coins without getting distracted by the clouds.' },
  { slug: 'riftsync', text: 'Sync three rifts in a row. No panic. Okay, a little panic.' },
  { slug: 'follow-follow', text: 'Follow the crowd for twenty seconds. Do not get left behind.' },
] as const;

const AMBIENT_WISHES = [
  { text: 'One more round, and then I will actually go home.', by: 'the market keeper' },
  { text: 'Let the soup game be gentle with me today.', by: 'a morning walker' },
  { text: 'Keep a light on for everyone still on their way.', by: 'the sun' },
];

const CHARMS: { key: Exclude<CharmKey, 'moth'>; label: string; hint: string }[] = [
  { key: 'lantern', label: 'A game drawn', hint: 'Ask the sun for a lantern.' },
  { key: 'district', label: 'A district found', hint: 'Choose somewhere to wander.' },
  { key: 'dare', label: 'A dare taken', hint: 'Accept one small quest.' },
  { key: 'wish', label: 'A wish released', hint: 'Leave a light in the sky.' },
];

export function SunMarketExperience() {
  const { isFavorite, toggleFavorite, notify } = useApp();
  const heroRef = useRef<HTMLElement | null>(null);
  const mothCloseRef = useRef<HTMLButtonElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pool = useMemo(() => games.filter((game) => game.slug !== 'the-hangout'), []);
  const featured = FEATURED.flatMap(({ slug, tag }) => {
    const game = getGame(slug);
    return game ? [{ game, tag }] : [];
  });

  const [reelIndex, setReelIndex] = useState(0);
  const [picked, setPicked] = useState<Game | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [districtKey, setDistrictKey] = useState<string | null>(null);
  const [questIndex, setQuestIndex] = useState(0);
  const [questAccepted, setQuestAccepted] = useState(false);
  const [wishText, setWishText] = useState('');
  const [wishError, setWishError] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [latestWish, setLatestWish] = useState<number | null>(null);
  const [charms, setCharms] = useState<CharmState>(EMPTY_CHARMS);
  const [hydrated, setHydrated] = useState(false);
  const [rewardSeen, setRewardSeen] = useState(false);
  const [satchelOpen, setSatchelOpen] = useState(false);
  const [mothOpen, setMothOpen] = useState(false);
  const [mothPick, setMothPick] = useState<Game | null>(null);

  const current = picked ?? pool[reelIndex] ?? featured[0]?.game;
  const quest = QUESTS[questIndex];
  const questGame = getGame(quest.slug);
  const district = DISTRICTS.find((item) => item.key === districtKey) ?? null;
  const charmCount = CHARMS.filter((charm) => charms[charm.key]).length;
  const allCharms = charmCount === CHARMS.length;

  const districtGames = useMemo(() => {
    if (!district) return [];
    return games
      .filter((game) => game.slug !== 'the-hangout' && game.categories.some((category) => district.cats.includes(category)))
      .sort((a, b) => b.plays - a.plays)
      .slice(0, 3);
  }, [district]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { charms?: Partial<CharmState>; wishes?: Wish[]; rewardSeen?: boolean };
        const nextCharms = { ...EMPTY_CHARMS };
        for (const key of Object.keys(nextCharms) as CharmKey[]) {
          nextCharms[key] = Boolean(saved.charms?.[key]);
        }
        setCharms(nextCharms);
        if (Array.isArray(saved.wishes)) {
          setWishes(saved.wishes.filter((wish) => typeof wish?.text === 'string').slice(0, 6));
        }
        setRewardSeen(Boolean(saved.rewardSeen));
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ charms, wishes, rewardSeen }));
    } catch {}
  }, [charms, wishes, rewardSeen, hydrated]);

  useEffect(() => {
    if (!hydrated || !allCharms || rewardSeen) return;
    setRewardSeen(true);
    notify('The sun noticed you. A new constellation is yours.');
  }, [allCharms, hydrated, notify, rewardSeen]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty('--sm-mx', x.toFixed(3));
        element.style.setProperty('--sm-my', y.toFixed(3));
        frame = 0;
      });
    };
    const leave = () => {
      element.style.setProperty('--sm-mx', '0');
      element.style.setProperty('--sm-my', '0');
    };
    element.addEventListener('pointermove', move);
    element.addEventListener('pointerleave', leave);
    return () => {
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!mothOpen) return;
    mothCloseRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMothOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [mothOpen]);

  const addCharm = (key: CharmKey) => {
    setCharms((previous) => (previous[key] ? previous : { ...previous, [key]: true }));
  };

  const drawLantern = () => {
    if (spinning) return;
    setSpinning(true);
    setPicked(null);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    intervalRef.current = setInterval(() => {
      setReelIndex((index) => (index + 1 + Math.floor(Math.random() * 3)) % pool.length);
    }, 90);
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const next = pool[Math.floor(Math.random() * pool.length)];
      setPicked(next);
      setReelIndex(pool.findIndex((game) => game.slug === next.slug));
      setSpinning(false);
      addCharm('lantern');
    }, 1600);
  };

  const chooseDistrict = (key: string) => {
    setDistrictKey((previous) => (previous === key ? null : key));
    addCharm('district');
  };

  const acceptDare = () => {
    setQuestAccepted(true);
    addCharm('dare');
  };

  const nextDare = () => {
    setQuestIndex((index) => (index + 1) % QUESTS.length);
    setQuestAccepted(false);
  };

  const submitWish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clean = wishText.trim().replace(/\s+/g, ' ');
    if (clean.length < 3) {
      setWishError('A wish needs at least three letters.');
      return;
    }
    const wish: Wish = { id: Date.now(), text: clean.slice(0, 80), at: new Date().toISOString() };
    setWishes((previous) => [wish, ...previous].slice(0, 6));
    setLatestWish(wish.id);
    setWishText('');
    setWishError('');
    addCharm('wish');
    notify('Your wish is in the sky.');
  };

  const openMoth = () => {
    setMothPick((previous) => previous ?? getGame('follow-follow') ?? pool[Math.floor(Math.random() * pool.length)]);
    setMothOpen(true);
    addCharm('moth');
  };

  const keepStall = (game: Game) => {
    const kept = isFavorite(game.slug);
    toggleFavorite(game.slug);
    notify(kept ? `${game.title} is back on the stall.` : `${game.title} is in your pocket.`);
  };

  const mothPickCover = mothPick?.cover ?? '/covers/follow-follow.webp';

  return (
    <main className="sm-main">
      <section className="sm-hero" ref={heroRef}>
        <div className="sm-wrap sm-hero-grid">
          <div className="sm-hero-copy">
            <span className="sm-flag">
              <i aria-hidden="true" />
              a start.ng design direction · in daylight
            </span>
            <h1>
              The city wakes.
              <br />
              <em>The games bloom.</em>
            </h1>
            <p className="sm-lede">
              Welcome to <b>The Sun Market</b> — a floating day market above Lagos. Every stall is a game, every
              lantern is an invitation, and the sun keeps score. No tickets. No closing time.
            </p>
            <div className="sm-hero-actions">
              <a className="sm-btn sm-btn-gold" href="#stalls">
                Wander the stalls <span aria-hidden="true">↓</span>
              </a>
              <a className="sm-btn sm-btn-quiet" href="#wish">
                Make a wish <span aria-hidden="true">✦</span>
              </a>
            </div>
            <div className="sm-hero-meta" aria-label="Market facts">
              <span><b>189</b> stalls</span>
              <i aria-hidden="true" />
              <span><b>33</b> districts</span>
              <i aria-hidden="true" />
              <span><b>0</b> naira entry</span>
            </div>
            <p className="sm-hero-whisper">Psst — the sun is listening.</p>
          </div>

          <div className="sm-scene-wrap">
            <span className="sm-scene-caption">above the morning bus stop · 9:14am</span>
            <div className="sm-scene-parallax">
              <SunMarketScene complete={allCharms} />
            </div>
            <button
              type="button"
              className={`sm-moth${charms.moth ? ' is-found' : ''}`}
              onClick={openMoth}
              aria-label="A sun moth has a secret"
              title="A sun moth has a secret"
            >
              <MothIcon />
            </button>
            <span className="sm-scene-note">the sun keeps time</span>
          </div>
        </div>
        <a className="sm-scroll-cue" href="#map" aria-label="Follow the lights to the first-timer's map">
          <span aria-hidden="true">follow the lights</span>
          <i aria-hidden="true">↓</i>
        </a>
      </section>

      <div className="sm-ticker" aria-hidden="true">
        <div className="sm-ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              the market is open <i>✦</i> 189 stalls <i>✦</i> 33 districts <i>✦</i> one sun <i>✦</i> free entry{' '}
              <i>✦</i> open all day <i>✦</i>
            </span>
          ))}
        </div>
      </div>

      <section className="sm-section sm-map-section" id="map">
        <div className="sm-wrap">
          <div className="sm-map">
            <div className="sm-map-intro">
              <p className="sm-kicker">first time at the market?</p>
              <h2>Follow the lights.</h2>
              <p>Three small rituals, then the market is yours. The sun is patient, but she does like a little effort.</p>
            </div>
            <ol className="sm-map-steps">
              <li>
                <span className="sm-step-number">01</span>
                <span className="sm-step-icon" aria-hidden="true"><LanternIcon /></span>
                <b>Ask the sun</b>
                <span>Pull a lantern for a game you did not know you needed.</span>
              </li>
              <li>
                <span className="sm-step-number">02</span>
                <span className="sm-step-icon" aria-hidden="true"><CompassIcon /></span>
                <b>Choose a district</b>
                <span>Six moods. Each one opens three more stalls.</span>
              </li>
              <li>
                <span className="sm-step-number">03</span>
                <span className="sm-step-icon" aria-hidden="true"><WishIcon /></span>
                <b>Leave a wish</b>
                <span>Send a small light up for the next wanderer.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="sm-section" id="lantern">
        <div className="sm-wrap sm-draw">
          <div className="sm-draw-stage">
            <span className="sm-stage-label">the lantern draw</span>
            <div className={`sm-lantern${spinning ? ' is-spinning' : ''}${picked ? ' is-open' : ''}`} aria-hidden="true">
              <span className="sm-lantern-thread" />
              <span className="sm-lantern-halo" />
              <div className="sm-lantern-body">
                <div className="sm-lantern-window">
                  {current && <img src={current.cover} alt="" />}
                </div>
                <span className="sm-lantern-bar bar-a" />
                <span className="sm-lantern-bar bar-b" />
                <span className="sm-lantern-bar bar-c" />
              </div>
              <span className="sm-lantern-cap" />
              <span className="sm-lantern-tassel" />
            </div>
            <div className="sm-lantern-orbit" aria-hidden="true">
              <span>✦</span>
              <span>·</span>
              <span>✦</span>
              <span>·</span>
              <span>✦</span>
            </div>
            <span className="sm-stage-note">one pull · one stall · no coins</span>
          </div>

          <div className="sm-draw-copy">
            <p className="sm-kicker">the lantern draw</p>
            <h2>Ask the sun for one game.</h2>
            <p>
              The sun has 188 games in her pocket and no favourites. Pull a lantern; whatever light lands is
              today&apos;s stall. If it is a racing game and you wanted soup, the market is teaching you about life.
            </p>
            <div className="sm-actions">
              <button type="button" className="sm-btn sm-btn-gold" onClick={drawLantern} disabled={spinning}>
                {spinning ? 'The sun is looking…' : picked ? 'Ask for another' : 'Pull a lantern'} <span aria-hidden="true">✦</span>
              </button>
              {picked && (
                <Link className="sm-text-link" href={`/games/${picked.slug}`}>
                  See the whole stall <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>

            <div className="sm-draw-result" aria-live="polite">
              {spinning ? (
                <div className="sm-draw-loading">
                  <span className="sm-loading-lantern" aria-hidden="true">✦</span>
                  <div>
                    <b>The market is holding its breath.</b>
                    <p>Lanterns turning, tiny gears clicking, the sun pretending not to peek.</p>
                  </div>
                </div>
              ) : picked ? (
                <article className="sm-draw-picked">
                  <div>
                    <span className="sm-result-kicker">today&apos;s stall</span>
                    <h3>{picked.title}</h3>
                    <p>
                      by {picked.by} · {formatPlays(picked.plays)} plays
                    </p>
                    <div className="sm-tags">
                      {picked.categories.slice(0, 3).map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                  </div>
                  <Link className="sm-btn sm-btn-small" href={`/games/${picked.slug}/play`}>
                    Play now <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ) : (
                <div className="sm-draw-idle">
                  <b>The lantern is waiting.</b>
                  <p>Give it a pull. The sun has excellent taste and questionable patience.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sm-section" id="districts">
        <div className="sm-wrap">
          <div className="sm-section-head">
            <div>
              <p className="sm-kicker">the six districts</p>
              <h2>Six districts. One sun.</h2>
              <p>Pick the kind of afternoon you are after. Each district keeps three stalls warm for you.</p>
            </div>
            {district && (
              <button type="button" className="sm-text-link" onClick={() => setDistrictKey(null)}>
                Clear the district <span aria-hidden="true">✕</span>
              </button>
            )}
          </div>

          <div className="sm-district-grid" role="group" aria-label="Choose a district">
            {DISTRICTS.map(({ key, name, note, tint, Icon }) => {
              const active = districtKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`sm-district tint-${tint}${active ? ' is-active' : ''}`}
                  onClick={() => chooseDistrict(key)}
                  aria-pressed={active}
                >
                  <span className="sm-district-icon" aria-hidden="true"><Icon /></span>
                  <b>{name}</b>
                  <span>{note}</span>
                  <i className="sm-district-mark" aria-hidden="true">{active ? 'lit' : 'enter'}</i>
                </button>
              );
            })}
          </div>

          <div className="sm-district-results" aria-live="polite">
            {!district ? (
              <div className="sm-empty">
                <span className="sm-empty-glyph" aria-hidden="true">✦</span>
                <div>
                  <b>The stalls are still waking.</b>
                  <p>Choose a district above and three lights will come on.</p>
                </div>
              </div>
            ) : (
              districtGames.map((game) => (
                <StallCard
                  key={game.slug}
                  game={game}
                  tag={district.name.replace('The ', '').toLowerCase()}
                  kept={isFavorite(game.slug)}
                  onKeep={() => keepStall(game)}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="sm-section" id="stalls">
        <div className="sm-wrap">
          <div className="sm-section-head">
            <div>
              <p className="sm-kicker">on the bridge today</p>
              <h2>Stalls worth crossing for.</h2>
              <p>Six good ones, hand-picked by the market keeper. Start anywhere. There is no wrong first stall.</p>
            </div>
            <Link className="sm-text-link" href="/games">
              All 189 stalls <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="sm-stall-grid">
            {featured.map(({ game, tag }) => (
              <StallCard
                key={game.slug}
                game={game}
                tag={tag}
                kept={isFavorite(game.slug)}
                onKeep={() => keepStall(game)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sm-section" id="breeze-line">
        <div className="sm-wrap">
          <div className="sm-bus-panel">
            <div className="sm-bus-art">
              <img src="/covers/the-hangout.webp" alt="The Hangout, a park where start.ng players meet" loading="lazy" />
              <span className="sm-ticket">breeze line · one way · no fare</span>
              <span className="sm-bus-glow" aria-hidden="true" />
            </div>
            <div className="sm-bus-copy">
              <p className="sm-kicker">the next breeze goes somewhere better</p>
              <h2>Meet everyone at the Hangout.</h2>
              <p>
                The Breeze Line runs from the market to the park, where the games put their controllers down and
                become people. Walk in as your start.ng character, wave at a stranger, stay for the bench with the
                best view of the sky.
              </p>
              <div className="sm-actions">
                <Link className="sm-btn sm-btn-gold" href="/hangout">
                  Board the Breeze Line <span aria-hidden="true">→</span>
                </Link>
                <span className="sm-bus-note">walk with WASD · no download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm-section" id="pocket">
        <div className="sm-wrap sm-two-up">
          <article className="sm-quest-card">
            <div className="sm-quest-top">
              <span className="sm-quest-icon" aria-hidden="true"><DareIcon /></span>
              <p className="sm-kicker">a small dare</p>
            </div>
            <h2>{questAccepted ? 'Dare taken.' : 'One small dare.'}</h2>
            <p>{questAccepted ? `Now go and do it. ${questGame?.title ?? 'Your stall'} is waiting.` : quest.text}</p>
            <div className="sm-actions">
              {questAccepted ? (
                questGame && (
                  <Link className="sm-btn sm-btn-small sm-btn-gold" href={`/games/${questGame.slug}/play`}>
                    Start the dare <span aria-hidden="true">→</span>
                  </Link>
                )
              ) : (
                <button type="button" className="sm-btn sm-btn-small sm-btn-gold" onClick={acceptDare}>
                  Take the dare <span aria-hidden="true">✦</span>
                </button>
              )}
              <button type="button" className="sm-text-link" onClick={nextDare}>
                Another dare <span aria-hidden="true">↻</span>
              </button>
            </div>
            {questAccepted && <span className="sm-stamp">dare<br />taken</span>}
          </article>

          <article className="sm-pocket-card">
            <p className="sm-kicker">your pocket</p>
            <h2>Four lights, one constellation.</h2>
            <p>
              Pull a lantern, choose a district, take a dare and leave a wish. The market keeps track. So does the
              sun.
            </p>
            <div className="sm-charm-row">
              {CHARMS.map((charm) => {
                const found = charms[charm.key];
                return (
                  <span key={charm.key} className={`sm-charm${found ? ' is-found' : ''}`} title={found ? charm.label : charm.hint}>
                    <span aria-hidden="true"><CharmIcon name={charm.key} /></span>
                    <small>{charm.label}</small>
                  </span>
                );
              })}
            </div>
            <div className="sm-progress" aria-hidden="true">
              <span style={{ width: `${(charmCount / CHARMS.length) * 100}%` }} />
            </div>
            <p className="sm-pocket-count">
              {charmCount} of 4 lights found
              {charms.moth ? ' · plus one secret' : ''}
            </p>
            {charms.moth && <p className="sm-moth-note">You found the moth. It is pretending not to be pleased.</p>}
          </article>
        </div>
      </section>

      <section className="sm-section" id="wish">
        <div className="sm-wrap">
          <div className="sm-section-head">
            <div>
              <p className="sm-kicker">a light for the next wanderer</p>
              <h2>Leave a wish in the sky.</h2>
              <p>
                Write a small wish for the market. It stays on this device, floats in the sky below, and makes the
                place a little more yours.
              </p>
            </div>
            <span className="sm-side-note">{wishes.length > 0 ? `${wishes.length} lantern${wishes.length === 1 ? '' : 's'} lit` : 'the sky is quiet'}</span>
          </div>

          <div className="sm-wish-layout">
            <form className="sm-wish-form" onSubmit={submitWish}>
              <label htmlFor="sm-wish">Your wish</label>
              <div className="sm-wish-input-row">
                <input
                  id="sm-wish"
                  value={wishText}
                  onChange={(event) => {
                    setWishText(event.target.value);
                    setWishError('');
                  }}
                  placeholder="One more round, and then I will go home…"
                  maxLength={80}
                  aria-describedby={wishError ? 'sm-wish-error' : 'sm-wish-help'}
                />
                <button type="submit" className="sm-btn sm-btn-gold">
                  Release <span aria-hidden="true">✦</span>
                </button>
              </div>
              {wishError ? (
                <p className="sm-form-error" id="sm-wish-error" role="alert">{wishError}</p>
              ) : (
                <p className="sm-form-help" id="sm-wish-help">Eighty letters or fewer. The sun is a good listener.</p>
              )}
              <p className="sm-fineprint">Stored in this browser only. No account, no audience, no performance review.</p>
            </form>

            <div className="sm-wish-sky">
              {wishes.length === 0 ? (
                <div className="sm-empty sm-empty-wish">
                  <span className="sm-empty-glyph" aria-hidden="true">✦</span>
                  <div>
                    <b>The sky is holding its breath.</b>
                    <p>Your lantern could be the first one up today.</p>
                  </div>
                </div>
              ) : (
                <div className="sm-wish-lanterns">
                  {wishes.map((wish) => (
                    <article
                      key={wish.id}
                      className={`sm-wish-lantern${latestWish === wish.id ? ' is-new' : ''}`}
                    >
                      <span className="sm-wish-cap" aria-hidden="true" />
                      <p>{wish.text}</p>
                      <time dateTime={wish.at}>{formatWishTime(wish.at)}</time>
                    </article>
                  ))}
                </div>
              )}
              <div className="sm-whispers">
                <span className="sm-whispers-label">whispers already in the sky</span>
                {AMBIENT_WISHES.map((wish) => (
                  <p key={wish.text}>
                    “{wish.text}” <span>— {wish.by}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {allCharms && (
        <section className="sm-section sm-reward-section" id="constellation">
          <div className="sm-wrap">
            <div className="sm-reward">
              <div className="sm-reward-stars" aria-hidden="true">
                <i /><i /><i /><i /><i />
              </div>
              <div>
                <p className="sm-kicker">the sun noticed</p>
                <h2>A constellation with your name on it.</h2>
                <p>
                  You found the lantern, a district, a dare and a wish. The market keeper has left you the key to
                  the best seat in the house: the bench at the Hangout, right under the sky.
                </p>
                <div className="sm-actions">
                  <Link className="sm-btn sm-btn-gold" href="/hangout">
                    Take the key <span aria-hidden="true">→</span>
                  </Link>
                  <Link className="sm-text-link" href="/toybox/design">
                    Read the design notes <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
              <div className="sm-reward-card">
                <span className="sm-result-kicker">the keeper&apos;s key</span>
                <b aria-hidden="true">✦</b>
                <p>One bench. One sky. No closing time. The moth says the soup stall is still open.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="sm-section sm-deck-section">
        <div className="sm-wrap">
          <div className="sm-deck">
            <div>
              <p className="sm-kicker">the thinking behind the lights</p>
              <h2>Why a day market?</h2>
              <p>
                The Sun Market is a separate design direction for start.ng: a warmer, more atmospheric way to
                present the same catalogue. The faithful clone is still at the front door. This is what the city
                looks like when the city slows down.
              </p>
            </div>
            <Link className="sm-btn sm-btn-quiet" href="/toybox/design">
              Read the design notes <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <aside className={`sm-satchel${satchelOpen ? ' is-open' : ''}${allCharms ? ' is-lit' : ''}`} aria-label="Your market charms">
        <button
          type="button"
          className="sm-satchel-toggle"
          onClick={() => setSatchelOpen((open) => !open)}
          aria-expanded={satchelOpen}
          aria-controls="sm-satchel-panel"
        >
          <span className="sm-satchel-sun" aria-hidden="true">✦</span>
          <span className="sm-satchel-count" aria-live="polite">{charmCount}/4</span>
          <span className="sm-satchel-label">charms</span>
        </button>
        {satchelOpen && (
          <div className="sm-satchel-panel" id="sm-satchel-panel">
            <p className="sm-kicker">your pocket</p>
            <b>{allCharms ? 'All lights found.' : 'Four small lights.'}</b>
            <ul>
              {CHARMS.map((charm) => (
                <li key={charm.key} className={charms[charm.key] ? 'is-found' : ''}>
                  <span aria-hidden="true"><CharmIcon name={charm.key} /></span>
                  <span>{charms[charm.key] ? charm.label : charm.hint}</span>
                </li>
              ))}
              {charms.moth && (
                <li className="is-found is-secret">
                  <span aria-hidden="true"><MothIcon /></span>
                  <span>A secret found</span>
                </li>
              )}
            </ul>
            <p>{allCharms ? 'The sun has noticed you.' : 'The sun is watching. Politely.'}</p>
          </div>
        )}
      </aside>

      {mothOpen && (
        <div className="sm-modal-overlay" onClick={() => setMothOpen(false)}>
          <div
            className="sm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sm-moth-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="sm-modal-close"
              aria-label="Close the sun moth's secret"
              onClick={() => setMothOpen(false)}
              ref={mothCloseRef}
            >
              ✕
            </button>
            <div className="sm-modal-moth" aria-hidden="true"><MothIcon /></div>
            <p className="sm-kicker">a secret from the sun moth</p>
            <h2 id="sm-moth-title">You found a small door.</h2>
            <p>
              The moth has been here since the first stall opened. It says the Hangout has a bench with the best
              view of the sky, and that the Breeze Line is late on purpose. It also says you look like someone who
              would enjoy this:
            </p>
            <div className="sm-modal-pick">
              <img src={mothPickCover} alt="" />
              <div>
                <span className="sm-result-kicker">the sun moth&apos;s stall</span>
                <b>{mothPick?.title ?? 'Follow Follow'}</b>
                <span>by {mothPick?.by ?? 'start.ng'}</span>
              </div>
            </div>
            <div className="sm-actions">
              {mothPick && (
                <Link className="sm-btn sm-btn-small sm-btn-gold" href={`/games/${mothPick.slug}/play`}>
                  Take the moth&apos;s pick <span aria-hidden="true">→</span>
                </Link>
              )}
              <button type="button" className="sm-text-link" onClick={() => setMothOpen(false)}>
                Keep wandering
              </button>
            </div>
            <p className="sm-fineprint">An easter egg. Nothing is unlocked except a feeling.</p>
          </div>
        </div>
      )}
    </main>
  );
}

function StallCard({
  game,
  tag,
  kept,
  onKeep,
}: {
  game: Game;
  tag: string;
  kept: boolean;
  onKeep: () => void;
}) {
  return (
    <article className="sm-stall-card">
      <div className="sm-stall-art">
        <Link href={`/games/${game.slug}`} aria-label={`Open ${game.title}`}>
          <img src={game.cover} alt={`${game.title} cover`} loading="lazy" decoding="async" />
        </Link>
        <span className="sm-stall-tag">{tag}</span>
        <button
          type="button"
          className={`sm-keep${kept ? ' is-kept' : ''}`}
          onClick={onKeep}
          aria-pressed={kept}
          aria-label={kept ? `Remove ${game.title} from your pocket` : `Keep ${game.title} in your pocket`}
          title={kept ? 'Remove from your pocket' : 'Keep in your pocket'}
        >
          <StarIcon filled={kept} />
        </button>
        <span className="sm-stall-lantern" aria-hidden="true" />
      </div>
      <div className="sm-stall-meta">
        <h3><Link href={`/games/${game.slug}`}>{game.title}</Link></h3>
        <span className="sm-stall-by">by {game.by}</span>
      </div>
      <div className="sm-stall-foot">
        <Link href={`/games/${game.slug}/play`}>Play now <span aria-hidden="true">→</span></Link>
        <span>{formatPlays(game.plays)} plays</span>
      </div>
    </article>
  );
}

function formatWishTime(at: string) {
  try {
    return new Intl.DateTimeFormat('en-NG', { hour: 'numeric', minute: '2-digit' }).format(new Date(at));
  } catch {
    return 'today';
  }
}

function LaneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 27c7-1 11-5 13-12M12 27c5-2 8-6 9-11M21 27c3-2 5-5 6-9" strokeLinecap="round" />
      <path d="m22 8 7 7-8 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SoupIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7 17h22c0 8-4 12-11 12S7 25 7 17Z" strokeLinejoin="round" />
      <path d="M11 12c-2-3 1-5 0-8M18 12c-2-3 1-5 0-8M25 12c-2-3 1-5 0-8" strokeLinecap="round" />
      <path d="M5 30h26" strokeLinecap="round" />
    </svg>
  );
}

function PuzzleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M18 5 29 11v14L18 31 7 25V11Z" strokeLinejoin="round" />
      <path d="M18 11v14M11 14l14 8M25 14l-14 8" strokeLinecap="round" opacity=".55" />
      <circle cx="18" cy="18" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArcadeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="7" y="9" width="22" height="18" rx="5" />
      <path d="M13 17h5M15.5 14.5v5" strokeLinecap="round" />
      <circle cx="24" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="21.5" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <path d="M10 30h16M18 27v3" strokeLinecap="round" />
      <path d="m28 6 2-3M31 9l3-1" strokeLinecap="round" />
    </svg>
  );
}

function StarDockIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="18" cy="18" r="5" />
      <ellipse cx="18" cy="18" rx="13" ry="5.5" transform="rotate(-24 18 18)" opacity=".65" />
      <circle cx="29" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="7" cy="25" r="1" fill="currentColor" stroke="none" />
      <path d="m5 7 1.2 2.8L9 11l-2.8 1.2L5 15l-1.2-2.8L1 11l2.8-1.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TreasureIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7 14h22l-3 15H10Z" strokeLinejoin="round" />
      <path d="M10 14V9h16v5M14 20c2.5 3 5.5 3 8 0" strokeLinecap="round" />
      <path d="m18 3 1.5 3.5L23 8l-3.5 1.5L18 13l-1.5-3.5L13 8l3.5-1.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LanternIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 10h8l3 13H11Z" strokeLinejoin="round" />
      <path d="M14 10V8h8v2M18 23v6M15 30h6" strokeLinecap="round" />
      <path d="M15 15h6M14 20h8" opacity=".5" />
    </svg>
  );
}

function CompassIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="18" cy="18" r="12" />
      <path d="m23 13-3 7-7 3 3-7Z" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WishIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m18 5 3 8 9 .5-7 5.5 2.5 8.5-7.5-5-7.5 5L13 19l-7-5.5 9-.5Z" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DareIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m20 4-9 16h7l-2 12 10-17h-7Z" strokeLinejoin="round" />
      <path d="M6 28h7M24 8h6" strokeLinecap="round" opacity=".55" />
    </svg>
  );
}

function CharmIcon({ name }: { name: Exclude<CharmKey, 'moth'> }) {
  if (name === 'lantern') return <LanternIcon />;
  if (name === 'district') return <CompassIcon />;
  if (name === 'dare') return <DareIcon />;
  return <WishIcon />;
}

function MothIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M24 20c-4-9-12-13-17-10-4 3-3 12 3 17 4 3 9 2 14-2M24 20c4-9 12-13 17-10 4 3 3 12-3 17-4 3-9 2-14-2" strokeLinejoin="round" />
      <path d="M24 18v15M21 33l3 5 3-5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
      <path d="M24 18c-2-3-3-6-2-9M24 18c2-3 3-6 2-9" strokeLinecap="round" />
      <circle cx="20" cy="20" r="1" fill="currentColor" stroke="none" />
      <circle cx="28" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function StarIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
      <path d="m12 3 2.6 5.7 6.2.6-4.7 4.1 1.4 6.1-5.5-3.3-5.5 3.3L7.9 13.4 3.2 9.3l6.2-.6Z" strokeLinejoin="round" />
    </svg>
  );
}
