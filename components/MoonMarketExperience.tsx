'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState, type ComponentType, type FormEvent } from 'react';
import { formatPlays, getGame, games, type Game } from '@/lib/site';
import { useApp } from './AppProvider';
import { MoonMarketScene } from './MoonMarketScene';

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

const STORAGE_KEY = 'startng:moonmarket:v1';
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
    name: 'The Midnight Arcade',
    note: 'Dodge first. Think later. Regret nothing.',
    cats: ['Catch and dodge', 'Survival'],
    tint: 'violet',
    Icon: ArcadeIcon,
  },
  {
    key: 'docks',
    name: 'The Star Docks',
    note: 'For nights that need more laser.',
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
  { text: 'Let the soup game be gentle with me tonight.', by: 'a night walker' },
  { text: 'Keep a light on for everyone still on their way.', by: 'the moon' },
];

const CHARMS: { key: Exclude<CharmKey, 'moth'>; label: string; hint: string }[] = [
  { key: 'lantern', label: 'A game drawn', hint: 'Ask the moon for a lantern.' },
  { key: 'district', label: 'A district found', hint: 'Choose somewhere to wander.' },
  { key: 'dare', label: 'A dare taken', hint: 'Accept one small quest.' },
  { key: 'wish', label: 'A wish released', hint: 'Leave a light in the sky.' },
];

export function MoonMarketExperience() {
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
    notify('The moon noticed you. A new constellation is yours.');
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
        element.style.setProperty('--mm-mx', x.toFixed(3));
        element.style.setProperty('--mm-my', y.toFixed(3));
        frame = 0;
      });
    };
    const leave = () => {
      element.style.setProperty('--mm-mx', '0');
      element.style.setProperty('--mm-my', '0');
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
    notify('Your lantern is climbing.');
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
    <main className="mm-main">
      <section className="mm-hero" ref={heroRef}>
        <div className="mm-wrap mm-hero-grid">
          <div className="mm-hero-copy">
            <span className="mm-flag">
              <i aria-hidden="true" />
              a start.ng design direction · after hours
            </span>
            <h1>
              The city sleeps.
              <br />
              <em>The games come out.</em>
            </h1>
            <p className="mm-lede">
              Welcome to <b>The Moon Market</b> — a floating night market above Lagos. Every stall is a game, every
              lantern is an invitation, and the moon keeps score. No tickets. No closing time.
            </p>
            <div className="mm-hero-actions">
              <a className="mm-btn mm-btn-gold" href="#stalls">
                Wander the stalls <span aria-hidden="true">↓</span>
              </a>
              <a className="mm-btn mm-btn-quiet" href="#wish">
                Make a wish <span aria-hidden="true">✦</span>
              </a>
            </div>
            <div className="mm-hero-meta" aria-label="Market facts">
              <span><b>189</b> stalls</span>
              <i aria-hidden="true" />
              <span><b>33</b> districts</span>
              <i aria-hidden="true" />
              <span><b>0</b> naira entry</span>
            </div>
            <p className="mm-hero-whisper">Psst — the moon is listening.</p>
          </div>

          <div className="mm-scene-wrap">
            <span className="mm-scene-caption">above the last bus stop · 6:42pm</span>
            <div className="mm-scene-parallax">
              <MoonMarketScene complete={allCharms} />
            </div>
            <button
              type="button"
              className={`mm-moth${charms.moth ? ' is-found' : ''}`}
              onClick={openMoth}
              aria-label="A moon moth has a secret"
              title="A moon moth has a secret"
            >
              <MothIcon />
            </button>
            <span className="mm-scene-note">the moon keeps score</span>
          </div>
        </div>
        <a className="mm-scroll-cue" href="#map" aria-label="Follow the lights to the first-timer's map">
          <span aria-hidden="true">follow the lights</span>
          <i aria-hidden="true">↓</i>
        </a>
      </section>

      <div className="mm-ticker" aria-hidden="true">
        <div className="mm-ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              the market is open <i>✦</i> 189 stalls <i>✦</i> 33 districts <i>✦</i> one moon <i>✦</i> free entry{' '}
              <i>✦</i> open all night <i>✦</i>
            </span>
          ))}
        </div>
      </div>

      <section className="mm-section mm-map-section" id="map">
        <div className="mm-wrap">
          <div className="mm-map">
            <div className="mm-map-intro">
              <p className="mm-kicker">first time at the market?</p>
              <h2>Follow the lights.</h2>
              <p>Three small rituals, then the market is yours. The moon is patient, but she does like a little effort.</p>
            </div>
            <ol className="mm-map-steps">
              <li>
                <span className="mm-step-number">01</span>
                <span className="mm-step-icon" aria-hidden="true"><LanternIcon /></span>
                <b>Ask the moon</b>
                <span>Pull a lantern for a game you did not know you needed.</span>
              </li>
              <li>
                <span className="mm-step-number">02</span>
                <span className="mm-step-icon" aria-hidden="true"><CompassIcon /></span>
                <b>Choose a district</b>
                <span>Six moods. Each one opens three more stalls.</span>
              </li>
              <li>
                <span className="mm-step-number">03</span>
                <span className="mm-step-icon" aria-hidden="true"><WishIcon /></span>
                <b>Leave a wish</b>
                <span>Send a small light up for the next wanderer.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mm-section" id="lantern">
        <div className="mm-wrap mm-draw">
          <div className="mm-draw-stage">
            <span className="mm-stage-label">the lantern draw</span>
            <div className={`mm-lantern${spinning ? ' is-spinning' : ''}${picked ? ' is-open' : ''}`} aria-hidden="true">
              <span className="mm-lantern-thread" />
              <span className="mm-lantern-halo" />
              <div className="mm-lantern-body">
                <div className="mm-lantern-window">
                  {current && <img src={current.cover} alt="" />}
                </div>
                <span className="mm-lantern-bar bar-a" />
                <span className="mm-lantern-bar bar-b" />
                <span className="mm-lantern-bar bar-c" />
              </div>
              <span className="mm-lantern-cap" />
              <span className="mm-lantern-tassel" />
            </div>
            <div className="mm-lantern-orbit" aria-hidden="true">
              <span>✦</span>
              <span>·</span>
              <span>✦</span>
              <span>·</span>
              <span>✦</span>
            </div>
            <span className="mm-stage-note">one pull · one stall · no coins</span>
          </div>

          <div className="mm-draw-copy">
            <p className="mm-kicker">the lantern draw</p>
            <h2>Ask the moon for one game.</h2>
            <p>
              The moon has 188 games in her pocket and no favourites. Pull a lantern; whatever light lands is
              tonight&apos;s stall. If it is a racing game and you wanted soup, the market is teaching you about life.
            </p>
            <div className="mm-actions">
              <button type="button" className="mm-btn mm-btn-gold" onClick={drawLantern} disabled={spinning}>
                {spinning ? 'The moon is looking…' : picked ? 'Ask for another' : 'Pull a lantern'} <span aria-hidden="true">✦</span>
              </button>
              {picked && (
                <Link className="mm-text-link" href={`/games/${picked.slug}`}>
                  See the whole stall <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>

            <div className="mm-draw-result" aria-live="polite">
              {spinning ? (
                <div className="mm-draw-loading">
                  <span className="mm-loading-lantern" aria-hidden="true">✦</span>
                  <div>
                    <b>The market is holding its breath.</b>
                    <p>Lanterns turning, tiny gears clicking, the moon pretending not to peek.</p>
                  </div>
                </div>
              ) : picked ? (
                <article className="mm-draw-picked">
                  <div>
                    <span className="mm-result-kicker">tonight&apos;s stall</span>
                    <h3>{picked.title}</h3>
                    <p>
                      by {picked.by} · {formatPlays(picked.plays)} plays
                    </p>
                    <div className="mm-tags">
                      {picked.categories.slice(0, 3).map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                  </div>
                  <Link className="mm-btn mm-btn-small" href={`/games/${picked.slug}/play`}>
                    Play now <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ) : (
                <div className="mm-draw-idle">
                  <b>The lantern is waiting.</b>
                  <p>Give it a pull. The moon has excellent taste and questionable patience.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mm-section" id="districts">
        <div className="mm-wrap">
          <div className="mm-section-head">
            <div>
              <p className="mm-kicker">the six districts</p>
              <h2>Six districts. One moon.</h2>
              <p>Pick the kind of night you are after. Each district keeps three stalls warm for you.</p>
            </div>
            {district && (
              <button type="button" className="mm-text-link" onClick={() => setDistrictKey(null)}>
                Clear the district <span aria-hidden="true">✕</span>
              </button>
            )}
          </div>

          <div className="mm-district-grid" role="group" aria-label="Choose a district">
            {DISTRICTS.map(({ key, name, note, tint, Icon }) => {
              const active = districtKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`mm-district tint-${tint}${active ? ' is-active' : ''}`}
                  onClick={() => chooseDistrict(key)}
                  aria-pressed={active}
                >
                  <span className="mm-district-icon" aria-hidden="true"><Icon /></span>
                  <b>{name}</b>
                  <span>{note}</span>
                  <i className="mm-district-mark" aria-hidden="true">{active ? 'lit' : 'enter'}</i>
                </button>
              );
            })}
          </div>

          <div className="mm-district-results" aria-live="polite">
            {!district ? (
              <div className="mm-empty">
                <span className="mm-empty-glyph" aria-hidden="true">✦</span>
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

      <section className="mm-section" id="stalls">
        <div className="mm-wrap">
          <div className="mm-section-head">
            <div>
              <p className="mm-kicker">on the bridge tonight</p>
              <h2>Stalls worth crossing for.</h2>
              <p>Six good ones, hand-picked by the market keeper. Start anywhere. There is no wrong first stall.</p>
            </div>
            <Link className="mm-text-link" href="/games">
              All 189 stalls <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="mm-stall-grid">
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

      <section className="mm-section" id="night-bus">
        <div className="mm-wrap">
          <div className="mm-bus-panel">
            <div className="mm-bus-art">
              <img src="/covers/the-hangout.webp" alt="The Hangout, a park where start.ng players meet" loading="lazy" />
              <span className="mm-ticket">night bus · one way · no fare</span>
              <span className="mm-bus-glow" aria-hidden="true" />
            </div>
            <div className="mm-bus-copy">
              <p className="mm-kicker">the last bus goes somewhere better</p>
              <h2>Meet everyone at the Hangout.</h2>
              <p>
                The Night Bus runs from the market to the park, where the games put their controllers down and
                become people. Walk in as your start.ng character, wave at a stranger, stay for the bench with the
                best view of the sky.
              </p>
              <div className="mm-actions">
                <Link className="mm-btn mm-btn-gold" href="/hangout">
                  Board the Night Bus <span aria-hidden="true">→</span>
                </Link>
                <span className="mm-bus-note">walk with WASD · no download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mm-section" id="pocket">
        <div className="mm-wrap mm-two-up">
          <article className="mm-quest-card">
            <div className="mm-quest-top">
              <span className="mm-quest-icon" aria-hidden="true"><DareIcon /></span>
              <p className="mm-kicker">a small dare</p>
            </div>
            <h2>{questAccepted ? 'Dare taken.' : 'One small dare.'}</h2>
            <p>{questAccepted ? `Now go and do it. ${questGame?.title ?? 'Your stall'} is waiting.` : quest.text}</p>
            <div className="mm-actions">
              {questAccepted ? (
                questGame && (
                  <Link className="mm-btn mm-btn-small mm-btn-gold" href={`/games/${questGame.slug}/play`}>
                    Start the dare <span aria-hidden="true">→</span>
                  </Link>
                )
              ) : (
                <button type="button" className="mm-btn mm-btn-small mm-btn-gold" onClick={acceptDare}>
                  Take the dare <span aria-hidden="true">✦</span>
                </button>
              )}
              <button type="button" className="mm-text-link" onClick={nextDare}>
                Another dare <span aria-hidden="true">↻</span>
              </button>
            </div>
            {questAccepted && <span className="mm-stamp">dare<br />taken</span>}
          </article>

          <article className="mm-pocket-card">
            <p className="mm-kicker">your pocket</p>
            <h2>Four lights, one constellation.</h2>
            <p>
              Pull a lantern, choose a district, take a dare and leave a wish. The market keeps track. So does the
              moon.
            </p>
            <div className="mm-charm-row">
              {CHARMS.map((charm) => {
                const found = charms[charm.key];
                return (
                  <span key={charm.key} className={`mm-charm${found ? ' is-found' : ''}`} title={found ? charm.label : charm.hint}>
                    <span aria-hidden="true"><CharmIcon name={charm.key} /></span>
                    <small>{charm.label}</small>
                  </span>
                );
              })}
            </div>
            <div className="mm-progress" aria-hidden="true">
              <span style={{ width: `${(charmCount / CHARMS.length) * 100}%` }} />
            </div>
            <p className="mm-pocket-count">
              {charmCount} of 4 lights found
              {charms.moth ? ' · plus one secret' : ''}
            </p>
            {charms.moth && <p className="mm-moth-note">You found the moth. It is pretending not to be pleased.</p>}
          </article>
        </div>
      </section>

      <section className="mm-section" id="wish">
        <div className="mm-wrap">
          <div className="mm-section-head">
            <div>
              <p className="mm-kicker">a light for the next wanderer</p>
              <h2>Leave a wish in the sky.</h2>
              <p>
                Write a small wish for the market. It stays on this device, floats in the sky below, and makes the
                place a little more yours.
              </p>
            </div>
            <span className="mm-side-note">{wishes.length > 0 ? `${wishes.length} lantern${wishes.length === 1 ? '' : 's'} lit` : 'the sky is quiet'}</span>
          </div>

          <div className="mm-wish-layout">
            <form className="mm-wish-form" onSubmit={submitWish}>
              <label htmlFor="mm-wish">Your wish</label>
              <div className="mm-wish-input-row">
                <input
                  id="mm-wish"
                  value={wishText}
                  onChange={(event) => {
                    setWishText(event.target.value);
                    setWishError('');
                  }}
                  placeholder="One more round, and then I will go home…"
                  maxLength={80}
                  aria-describedby={wishError ? 'mm-wish-error' : 'mm-wish-help'}
                />
                <button type="submit" className="mm-btn mm-btn-gold">
                  Release <span aria-hidden="true">✦</span>
                </button>
              </div>
              {wishError ? (
                <p className="mm-form-error" id="mm-wish-error" role="alert">{wishError}</p>
              ) : (
                <p className="mm-form-help" id="mm-wish-help">Eighty letters or fewer. The moon is a good listener.</p>
              )}
              <p className="mm-fineprint">Stored in this browser only. No account, no audience, no performance review.</p>
            </form>

            <div className="mm-wish-sky">
              {wishes.length === 0 ? (
                <div className="mm-empty mm-empty-wish">
                  <span className="mm-empty-glyph" aria-hidden="true">✦</span>
                  <div>
                    <b>The sky is holding its breath.</b>
                    <p>Your lantern could be the first one up tonight.</p>
                  </div>
                </div>
              ) : (
                <div className="mm-wish-lanterns">
                  {wishes.map((wish) => (
                    <article
                      key={wish.id}
                      className={`mm-wish-lantern${latestWish === wish.id ? ' is-new' : ''}`}
                    >
                      <span className="mm-wish-cap" aria-hidden="true" />
                      <p>{wish.text}</p>
                      <time dateTime={wish.at}>{formatWishTime(wish.at)}</time>
                    </article>
                  ))}
                </div>
              )}
              <div className="mm-whispers">
                <span className="mm-whispers-label">whispers already in the sky</span>
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
        <section className="mm-section mm-reward-section" id="constellation">
          <div className="mm-wrap">
            <div className="mm-reward">
              <div className="mm-reward-stars" aria-hidden="true">
                <i /><i /><i /><i /><i />
              </div>
              <div>
                <p className="mm-kicker">the moon noticed</p>
                <h2>A constellation with your name on it.</h2>
                <p>
                  You found the lantern, a district, a dare and a wish. The market keeper has left you the key to
                  the best seat in the house: the bench at the Hangout, right under the sky.
                </p>
                <div className="mm-actions">
                  <Link className="mm-btn mm-btn-gold" href="/hangout">
                    Take the key <span aria-hidden="true">→</span>
                  </Link>
                  <Link className="mm-text-link" href="/toybox/design">
                    Read the design notes <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
              <div className="mm-reward-card">
                <span className="mm-result-kicker">the keeper&apos;s key</span>
                <b aria-hidden="true">✦</b>
                <p>One bench. One sky. No closing time. The moth says the soup stall is still open.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mm-section mm-deck-section">
        <div className="mm-wrap">
          <div className="mm-deck">
            <div>
              <p className="mm-kicker">the thinking behind the lights</p>
              <h2>Why a night market?</h2>
              <p>
                The Moon Market is a separate design direction for start.ng: a warmer, more atmospheric way to
                present the same catalogue. The faithful clone is still at the front door. This is what the city
                looks like after the last bus.
              </p>
            </div>
            <Link className="mm-btn mm-btn-quiet" href="/toybox/design">
              Read the design notes <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <aside className={`mm-satchel${satchelOpen ? ' is-open' : ''}${allCharms ? ' is-lit' : ''}`} aria-label="Your market charms">
        <button
          type="button"
          className="mm-satchel-toggle"
          onClick={() => setSatchelOpen((open) => !open)}
          aria-expanded={satchelOpen}
          aria-controls="mm-satchel-panel"
        >
          <span className="mm-satchel-moon" aria-hidden="true">✦</span>
          <span className="mm-satchel-count" aria-live="polite">{charmCount}/4</span>
          <span className="mm-satchel-label">charms</span>
        </button>
        {satchelOpen && (
          <div className="mm-satchel-panel" id="mm-satchel-panel">
            <p className="mm-kicker">your pocket</p>
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
            <p>{allCharms ? 'The moon has noticed you.' : 'The moon is watching. Politely.'}</p>
          </div>
        )}
      </aside>

      {mothOpen && (
        <div className="mm-modal-overlay" onClick={() => setMothOpen(false)}>
          <div
            className="mm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mm-moth-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="mm-modal-close"
              aria-label="Close the moon moth's secret"
              onClick={() => setMothOpen(false)}
              ref={mothCloseRef}
            >
              ✕
            </button>
            <div className="mm-modal-moth" aria-hidden="true"><MothIcon /></div>
            <p className="mm-kicker">a secret from the moon moth</p>
            <h2 id="mm-moth-title">You found a small door.</h2>
            <p>
              The moth has been here since the first stall opened. It says the Hangout has a bench with the best
              view of the sky, and that the Night Bus is late on purpose. It also says you look like someone who
              would enjoy this:
            </p>
            <div className="mm-modal-pick">
              <img src={mothPickCover} alt="" />
              <div>
                <span className="mm-result-kicker">the moth&apos;s stall of the night</span>
                <b>{mothPick?.title ?? 'Follow Follow'}</b>
                <span>by {mothPick?.by ?? 'start.ng'}</span>
              </div>
            </div>
            <div className="mm-actions">
              {mothPick && (
                <Link className="mm-btn mm-btn-small mm-btn-gold" href={`/games/${mothPick.slug}/play`}>
                  Take the moth&apos;s pick <span aria-hidden="true">→</span>
                </Link>
              )}
              <button type="button" className="mm-text-link" onClick={() => setMothOpen(false)}>
                Keep wandering
              </button>
            </div>
            <p className="mm-fineprint">An easter egg. Nothing is unlocked except a feeling.</p>
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
    <article className="mm-stall-card">
      <div className="mm-stall-art">
        <Link href={`/games/${game.slug}`} aria-label={`Open ${game.title}`}>
          <img src={game.cover} alt={`${game.title} cover`} loading="lazy" decoding="async" />
        </Link>
        <span className="mm-stall-tag">{tag}</span>
        <button
          type="button"
          className={`mm-keep${kept ? ' is-kept' : ''}`}
          onClick={onKeep}
          aria-pressed={kept}
          aria-label={kept ? `Remove ${game.title} from your pocket` : `Keep ${game.title} in your pocket`}
          title={kept ? 'Remove from your pocket' : 'Keep in your pocket'}
        >
          <StarIcon filled={kept} />
        </button>
        <span className="mm-stall-lantern" aria-hidden="true" />
      </div>
      <div className="mm-stall-meta">
        <h3><Link href={`/games/${game.slug}`}>{game.title}</Link></h3>
        <span className="mm-stall-by">by {game.by}</span>
      </div>
      <div className="mm-stall-foot">
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
    return 'tonight';
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
