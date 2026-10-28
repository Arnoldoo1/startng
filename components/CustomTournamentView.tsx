'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useApp } from './AppProvider';
import { Countdown } from './Countdown';
import { getGame } from '@/lib/site';

type Props = {
  code: string;
  query: { name?: string; games?: string; hours?: string; ends?: string; host?: string };
};

export function CustomTournamentView({ code, query }: Props) {
  const { customTournaments, user, openAuth, notify } = useApp();
  const [joined, setJoined] = useState(false);
  const saved = customTournaments.find((t) => t.code === code);
  const name = query.name || saved?.name || 'Friends tournament';
  const gamesRaw = query.games || saved?.games.join(',') || '';
  const games = useMemo(() => gamesRaw.split(',').map((s) => getGame(s)).filter(Boolean), [gamesRaw]);
  const ends = query.ends || saved?.endsAt || '';
  const host = query.host || saved?.host || 'A friend';
  const hours = Number(query.hours || saved?.durationHours || 24);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      notify('Invite link copied.');
    } catch {
      window.prompt('Copy this link', window.location.href);
    }
  };

  if (!games.length) {
    return (
      <main className="container detail-wrap" style={{ maxWidth: 640 }}>
        <Link className="back-link" href="/tournament">← Tournament</Link>
        <div className="empty" style={{ marginTop: 30 }}>
          <b>This tournament link is missing its games</b>
          Ask the host to send the full link again, or <Link href="/tournament" style={{ textDecoration: 'underline' }}>start your own</Link>.
        </div>
      </main>
    );
  }

  return (
    <main className="container tourney-top">
      <Link className="back-link" href="/tournament">← Daily tournament</Link>
      <section className="tourney-head">
        <p className="eyebrow-small">A friends tournament · hosted by {host}</p>
        <h1>{name}</h1>
        <p className="sub">{games.length} games · {hours} hours {ends ? <>· ends in <Countdown endsAt={ends} /></> : null}</p>
      </section>

      <section className="tourney-panel" style={{ marginTop: 16 }}>
        <div>
          <p className="kicker"><b>{joined ? 'YOU ARE IN' : 'INVITE'}</b> {joined ? 'Play the games below' : 'One link, everyone welcome'}</p>
          <h2>{joined ? 'Good luck.' : 'Play for bragging rights.'}</h2>
          <p>{joined ? 'Your best score on each game is what counts. Play them in any order before the timer runs out.' : `This is a private tournament made by ${host}. Tap join, play the games, and compare your scores with your friends.`}</p>
          <p className="alt">No entry fee. No account needed to look around.</p>
        </div>
        <div className="side">
          {!joined ? (
            <>
              <button type="button" className="btn" onClick={() => { if (!user) { openAuth(); } setJoined(true); notify('You joined the tournament.'); }}>Join tournament</button>
              <button type="button" className="ghost" onClick={copy}>Copy invite link</button>
            </>
          ) : (
            <>
              <p style={{ margin: 0 }}><b>{user?.name ?? 'You'} are in.</b></p>
              <Link className="btn" href={`/games/${games[0]!.slug}/play`}>Play first game</Link>
              <button type="button" className="ghost" onClick={copy}>Copy invite link</button>
            </>
          )}
        </div>
      </section>

      <section style={{ marginTop: 26 }}>
        <div className="section-head"><h2 style={{ fontSize: '1.25rem' }}>The games</h2><span className="mono" style={{ fontSize: '.66rem', color: 'var(--muted)' }}>{games.length} games · {hours}h</span></div>
        <div className="tourney-games">
          {games.map((game) => game && (
            <article className="game" key={game.slug}>
              <Link className="game-link" href={`/games/${game.slug}`}>
                <div className="art"><img src={game.cover} alt="" /></div>
                <div className="info"><h3>{game.title}</h3><p>{game.by}</p></div>
              </Link>
              <div className="meta"><Link className="play" href={`/games/${game.slug}/play`}>Play</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="friend-tourney" style={{ marginTop: 30 }}>
        <div><h2>Want the daily one too?</h2><p>Every day start.ng picks five games. First place takes the day and climbs the all-time board.</p></div>
        <Link className="btn" href="/tournament">See today&apos;s tournament</Link>
      </section>
    </main>
  );
}
