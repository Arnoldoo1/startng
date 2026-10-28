'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getGame } from '@/lib/site';
import { Countdown } from './Countdown';
import { nextChallengeEnd, nextTournamentEnd, TOURNAMENT_GAMES } from '@/lib/tournament';
import { useApp } from './AppProvider';

export function HomePromos() {
  const { user, scores, challengeDone, notify, currentTournamentEntered } = useApp();
  const [ends, setEnds] = useState<string>('');
  const [challengeEnd, setChallengeEnd] = useState<string>('');
  useEffect(() => {
    setEnds(nextTournamentEnd().toISOString());
    setChallengeEnd(nextChallengeEnd().toISOString());
  }, []);
  const challenge = getGame('rooftop-rush');
  const done = user ? (scores['rooftop-rush']?.score ?? 0) >= 59 : false;

  return (
    <div className="container home-row">
      <section className="promo tourney" aria-labelledby="today-tourney">
        <div>
          <p className="kicker"><b>Today&apos;s tournament</b> {ends && <>· Ends in <Countdown endsAt={ends} /></>}</p>
          <h2 id="today-tourney">5 games. 24 hours. One winner.</h2>
          <p>Share to enter, then play. {currentTournamentEntered ? 'You are in.' : 'No entry fee.'}</p>
          <p className="promo-countdown">At 6 PM Nigeria time the day flips and a new set of games appears.</p>
          <Link className="btn" href="/tournament">See the tournament</Link>
        </div>
        <div className="promo-covers" aria-hidden="true">
          {TOURNAMENT_GAMES.map((slug) => {
            const g = getGame(slug);
            return g ? <span className="mini-cover" key={slug}><img src={g.cover} alt="" /></span> : null;
          })}
        </div>
      </section>

      {challenge && (
        <section className="promo promo-challenge" aria-labelledby="daily-challenge">
          <div>
            <p className="kicker"><b>Daily challenge</b> {challengeEnd && <>· <Countdown endsAt={challengeEnd} /></>}</p>
            <h2 id="daily-challenge">Reach 59 in {challenge.title}</h2>
            <p>One goal a day, set from how people really play. {done ? 'You have already beaten it today.' : 'Beat the target to earn a bonus.'}</p>
            <Link className="btn" href={`/games/${challenge.slug}/play?challenge=1`} onClick={() => { if (!done) notify('Good luck. 59 is the number.'); }}>
              {done ? 'Play again' : 'Take the challenge'}
            </Link>
          </div>
          <Link className="challenge-art" href={`/games/${challenge.slug}`} aria-label={`${challenge.title} cover`}>
            <img src={challenge.cover} alt="" />
          </Link>
        </section>
      )}
    </div>
  );
}
