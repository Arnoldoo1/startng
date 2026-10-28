'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './AppProvider';
import { ALL_TIME, THIS_WEEK } from '@/lib/tournament';

export function LeaderboardView({ initial = 'all' }: { initial?: 'all' | 'week' }) {
  const { user, tournament, currentTournamentEntered, openAuth } = useApp();
  const [period, setPeriod] = useState<'all' | 'week'>(initial);
  const rows = period === 'all' ? ALL_TIME : THIS_WEEK;
  const myPoints = Object.values(tournament.games).reduce((s, g) => s + g.points, 0);

  return (
    <main className="container lb-page">
      <h1>Leaderboard</h1>
      <p className="sub">Points from the daily tournaments. <Link href="/tournament">Today&apos;s tournament →</Link></p>

      <div className="tabs" role="tablist" aria-label="Leaderboard period">
        <button type="button" role="tab" aria-selected={period === 'all'} className={period === 'all' ? 'on' : ''} onClick={() => setPeriod('all')}>All time</button>
        <button type="button" role="tab" aria-selected={period === 'week'} className={period === 'week' ? 'on' : ''} onClick={() => setPeriod('week')}>This week</button>
      </div>

      <table className="lb-table">
        <thead>
          <tr><th>#</th><th>Player</th><th>Days won</th><th>Firsts</th><th>Points</th></tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.name}>
              <td><span>{p.rank}</span></td>
              <td><span className="player"><span className="swatch" style={{ background: p.color }} />{p.name}</span></td>
              <td>{p.days}</td>
              <td>{p.firsts}</td>
              <td><b>{p.points}</b></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="lb-you">
        {user ? (
          <>
            <div><b>{user.name}</b><span>{currentTournamentEntered ? `${myPoints} points in today's tournament` : 'Not entered today'}</span></div>
            <Link className="ghost" href="/tournament">{currentTournamentEntered ? 'Play a tournament game' : 'Enter today’s tournament'}</Link>
          </>
        ) : (
          <>
            <div><b>Want your name here?</b><span>Sign in, enter a daily tournament and start collecting points.</span></div>
            <button type="button" className="ghost" onClick={openAuth}>Sign in</button>
          </>
        )}
      </div>

      <p className="lb-note">One point for playing, ten for the top score on a game. Points are added after each daily tournament ends at 6 PM Nigeria time.</p>
    </main>
  );
}
