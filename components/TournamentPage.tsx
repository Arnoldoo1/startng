'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useApp } from './AppProvider';
import { CharacterAvatar } from './CharacterAvatar';
import { Countdown } from './Countdown';
import { Modal } from './Modals';
import { getGame, games } from '@/lib/site';
import { ALL_TIME, nigerianTime, nextTournamentEnd, PAST_WINNERS, TOURNAMENT_GAMES } from '@/lib/tournament';

export function TournamentPage() {
  const { user, openAuth, currentTournamentEntered, enterTournament, tournament, subscribeEmail, email, createTournament } = useApp();
  const [endsAt, setEndsAt] = useState('');
  const [dateLabel, setDateLabel] = useState('');
  const [shareOpen, setShareOpen] = useState(false);
  const [emailInput, setEmailInput] = useState(email || '');
  const [emailDone, setEmailDone] = useState(false);
  const [hostOpen, setHostOpen] = useState(false);
  const [hostName, setHostName] = useState('');
  const [hostGames, setHostGames] = useState<string[]>(TOURNAMENT_GAMES.slice(0, 3));
  const [hostHours, setHostHours] = useState(24);
  const [created, setCreated] = useState<{ code: string; link: string } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const end = nextTournamentEnd();
    setEndsAt(end.toISOString());
    setDateLabel(nigerianTime(end));
  }, []);

  const myPoints = useMemo(() => Object.values(tournament.games).reduce((sum, g) => sum + g.points, 0), [tournament.games]);
  const tournamentGames = TOURNAMENT_GAMES.map((slug) => getGame(slug)).filter(Boolean);

  const startEntry = () => {
    if (!user) { openAuth(); return; }
    setShareOpen(true);
  };

  const shareAndEnter = (posted: boolean) => {
    if (posted) {
      const text = encodeURIComponent('Five games, 24 hours, one winner. I entered the start.ng tournament today. Come and play:');
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent('https://start.ng/tournament')}`, '_blank', 'noopener');
    }
    enterTournament();
    setShareOpen(false);
  };

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) return;
    subscribeEmail(emailInput);
    setEmailDone(true);
  };

  const makeHost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostName.trim() || hostGames.length < 2) return;
    const t = createTournament(hostName, hostGames, hostHours);
    const params = new URLSearchParams({
      name: t.name,
      games: t.games.join(','),
      hours: String(t.durationHours),
      ends: t.endsAt,
      host: t.host,
    });
    setCreated({ code: t.code, link: `/tournament/t/${t.code}?${params.toString()}` });
  };

  const copyHostLink = async () => {
    if (!created) return;
    const full = `${window.location.origin}${created.link}`;
    try { await navigator.clipboard.writeText(full); setCopied(true); } catch { window.prompt('Copy this link', full); }
  };

  const toggleHostGame = (slug: string) => {
    setHostGames((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 5 ? [...prev, slug] : prev);
  };

  return (
    <main className="container tourney-top">
      <section className="tourney-head">
        <h1>Today&apos;s tournament</h1>
        <p className="sub">Five games. One day. First place takes the day. <Link href="/leaderboard">See the overall leaderboard →</Link></p>
      </section>

      <section className="tourney-panel" aria-labelledby="tourney-panel-title">
        <div>
          <p className="kicker"><b>LIVE</b> {endsAt ? <>Ends in <Countdown endsAt={endsAt} /></> : 'Every day at 6 PM'}</p>
          <h2 id="tourney-panel-title">Five games. 24 hours. One winner.</h2>
          <p>Play all five before 6 PM Nigeria time. First on a game gets 10 points, second 7, third 5, fourth 3, and everyone else who plays gets 1. Most points wins the day.</p>
          <p className="alt">{currentTournamentEntered ? `You are in. ${myPoints ? `${myPoints} points so far.` : 'Play a game to get on the board.'}` : 'Share to enter, then play. No entry fee.'}</p>
          <p className="alt" style={{ fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--muted)' }}>{dateLabel || 'Ends 6:00 PM WAT'} · {currentTournamentEntered ? '1 player entered' : '0 players entered'}</p>
        </div>
        <div className="side">
          {currentTournamentEntered ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                {user && <CharacterAvatar character={user.character} size={38} />}
                <div><b style={{ display: 'block', fontSize: '.9rem' }}>{user?.name ?? 'You'} are in</b><span style={{ fontSize: '.72rem', color: 'var(--muted)' }}>Today&apos;s entry is saved</span></div>
              </div>
              <Link className="btn" href="#games">Play a tournament game</Link>
              <button type="button" className="ghost" onClick={() => shareAndEnter(false)}>Share the tournament</button>
            </>
          ) : (
            <>
              <p>Sign in, share the tournament, and your first game counts.</p>
              <button type="button" className="btn" onClick={startEntry}>{user ? 'Enter today’s tournament' : 'Sign in to enter'}</button>
              <button type="button" className="ghost" onClick={() => shareAndEnter(true)}>Share without signing in</button>
            </>
          )}
        </div>
      </section>

      <section id="games" style={{ marginTop: 24 }} aria-labelledby="tourney-games-title">
        <div className="section-head" style={{ marginBottom: 12 }}>
          <div><p className="eyebrow">Today&apos;s games</p><h2 id="tourney-games-title" style={{ fontSize: '1.25rem' }}>Pick one. Then the next.</h2></div>
          <span className="mono" style={{ fontSize: '.68rem', color: 'var(--muted)' }}>5 games · ends 6 PM WAT</span>
        </div>
        <div className="tourney-games">
          {tournamentGames.map((game) => {
            if (!game) return null;
            const mine = tournament.games[game.slug];
            return (
              <article className="game" key={game.slug}>
                <Link className="game-link" href={`/games/${game.slug}`}>
                  <div className="art"><img src={game.cover} alt="" /></div>
                  <div className="info"><h3>{game.title}</h3><p>{game.by}</p></div>
                </Link>
                <div className="players">{mine ? <>Your best run: <b>{mine.score}</b> · {mine.points} pts</> : <span className="no-runs">No runs yet</span>}</div>
                <div className="meta">
                  <Link className="play" href={`/games/${game.slug}/play?tournament=1`}>{currentTournamentEntered ? 'Play run' : 'Play'}</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="email-box">
        <div><b>One reminder at 5 PM</b><span>So you don&apos;t miss the last hour. No spam, one email.</span></div>
        {emailDone ? <span style={{ fontSize: '.82rem', fontWeight: 700 }}>You&apos;re on the list ✓</span> : (
          <form className="email-form" onSubmit={subscribe}>
            <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="you@example.com" aria-label="Email for tournament reminders" required />
            <button type="submit">Remind me</button>
          </form>
        )}
      </div>

      <div className="tourney-lower">
        <section aria-labelledby="standings-title">
          <h2 id="standings-title">Today&apos;s standings</h2>
          <div className="standings">
            {currentTournamentEntered ? (
              <div className="standing-row">
                <span className="rank">1</span>
                <span className="who"><span className="swatch" style={{ background: user?.character.primaryColor ?? '#d8fd71' }} />{user?.name ?? 'You'} <span className="you-badge">you</span></span>
                <span className="pts">{myPoints} pts</span>
              </div>
            ) : (
              <div className="empty"><b>No points yet</b>Enter and play a game to claim first place.</div>
            )}
          </div>
          {currentTournamentEntered && myPoints === 0 && <p className="lb-note">Your entry is in. Play any of the five games to score.</p>}
          <p className="lb-note">At 6 PM the highest score on each game earns 10 points, second 7, third 5, fourth 3, everyone else 1. Ties share the points.</p>
        </section>
        <section aria-labelledby="winners-title">
          <h2 id="winners-title">Past winners</h2>
          <ul className="winners">
            {PAST_WINNERS.map((w) => (
              <li key={w.date}>
                <span className="date">{w.date}</span>
                <span className={`dot${w.name !== 'No one played' ? ' on' : ''}`} style={w.color ? { background: w.color } : undefined} />
                <span>{w.name}</span>
                {w.points > 0 && <span className="pts">{w.points} pts</span>}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="friend-tourney">
        <div>
          <h2>Host your own tournament</h2>
          <p>Pick up to five games, set a time, and send one link to your friends or your class. No account needed to host.</p>
        </div>
        <button type="button" className="btn" onClick={() => { setHostOpen(true); setCreated(null); setCopied(false); }}>Host a tournament</button>
      </section>

      <section className="container" style={{ padding: 0, marginTop: 40 }}>
        <div className="section-head"><h2 style={{ fontSize: '1.2rem' }}>Overall leaderboard</h2><Link className="see-all" href="/leaderboard">See the full board →</Link></div>
        <div className="board-card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="lb-table" style={{ background: 'var(--card)' }}>
            <thead><tr><th>#</th><th>Player</th><th>Days won</th><th>Firsts</th><th>Points</th></tr></thead>
            <tbody>
              {ALL_TIME.slice(0, 5).map((p) => (
                <tr key={p.name}><td><span>{p.rank}</span></td><td><span className="player"><span className="swatch" style={{ background: p.color }} />{p.name}</span></td><td>{p.days}</td><td>{p.firsts}</td><td><b>{p.points}</b></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {shareOpen && (
        <Modal label="Enter the tournament" onClose={() => setShareOpen(false)}>
          <div className="mini-modal">
            <p className="eyebrow-small">One step</p>
            <h3>Share to enter</h3>
            <p>The tournament is free. Post it once so more people find it, then your games count towards today&apos;s standings.</p>
            <div className="share-preview">“Five games, 24 hours, one winner. I&apos;m in.”</div>
            <div className="actions" style={{ justifyContent: 'flex-start' }}>
              <button type="button" className="btn" onClick={() => shareAndEnter(true)}>Share on X and enter</button>
              <button type="button" className="ghost" onClick={() => shareAndEnter(false)}>Enter without posting</button>
            </div>
          </div>
        </Modal>
      )}

      {hostOpen && (
        <Modal label="Host a tournament" onClose={() => setHostOpen(false)}>
          <div className="mini-modal" style={{ width: 'min(600px, 100%)' }}>
            {created ? (
              <>
                <p className="eyebrow-small">Tournament made</p>
                <h3>{hostName}</h3>
                <p>Send this link to your friends. The games, time and host name are inside the link, so it works on any device.</p>
                <div className="host-link"><code>{`${typeof window !== 'undefined' ? window.location.origin : ''}${created.link}`}</code></div>
                <div className="actions" style={{ justifyContent: 'flex-start' }}>
                  <button type="button" className="btn" onClick={copyHostLink}>{copied ? 'Copied ✓' : 'Copy link'}</button>
                  <Link className="ghost" href={created.link}>Open tournament</Link>
                </div>
              </>
            ) : (
              <form onSubmit={makeHost}>
                <h3>Host a tournament</h3>
                <p>Pick 2–5 games and a time. You get one share link, no account needed.</p>
                <div className="field"><label htmlFor="host-name">Tournament name</label><input id="host-name" value={hostName} onChange={(e) => setHostName(e.target.value)} placeholder="Friday night with the crew" maxLength={50} /></div>
                <div className="field">
                  <label>Games ({hostGames.length}/5)</label>
                  <div className="host-games">
                    {games.filter((g) => g.slug !== 'the-hangout').slice(0, 24).map((g) => (
                      <button type="button" key={g.slug} className={hostGames.includes(g.slug) ? 'on' : ''} onClick={() => toggleHostGame(g.slug)}>{g.title}</button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="host-hours">How long?</label>
                  <select id="host-hours" value={hostHours} onChange={(e) => setHostHours(Number(e.target.value))}>
                    <option value={1}>1 hour</option><option value={6}>6 hours</option><option value={24}>24 hours</option><option value={72}>3 days</option>
                  </select>
                </div>
                <div className="actions" style={{ justifyContent: 'flex-end' }}>
                  <button type="button" className="ghost" onClick={() => setHostOpen(false)}>Cancel</button>
                  <button type="submit" className="btn" disabled={hostGames.length < 2 || !hostName.trim()}>Create tournament</button>
                </div>
              </form>
            )}
          </div>
        </Modal>
      )}
    </main>
  );
}
