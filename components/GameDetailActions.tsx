'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useApp } from './AppProvider';
import { boardFor, formatStat } from '@/lib/leaderboard';
import { relatedGames, type Game } from '@/lib/site';
import { HeartIcon, StarIcon } from './Cards';
import { ReportButton, ShareButtons } from './Modals';

export function GameDetailActions({ game }: { game: Game }) {
  const { isFavorite, toggleFavorite, user, openAuth, ratings, rateGame, scores, currentTournamentEntered, notify } = useApp();
  const fav = isFavorite(game.slug);
  const rating = ratings[game.slug] ?? 0;
  const local = scores[game.slug];
  const entries = useMemo(() => boardFor(game, user && local ? {
    name: user.name,
    color: user.character.primaryColor,
    score: local.score,
    stats: local.stats,
  } : null).slice(0, 8), [game, user, local]);
  const [url, setUrl] = useState(`https://start.ng/games/${game.slug}`);
  useEffect(() => {
    setUrl(`${window.location.origin}/games/${game.slug}`);
  }, [game.slug]);

  const onFav = () => {
    if (!user) { openAuth(); return; }
    toggleFavorite(game.slug);
    notify(fav ? 'Removed from favourites.' : 'Saved to favourites.');
  };

  return (
    <>
      <div className="game-actions">
        <Link className="btn" href={`/games/${game.slug}/play`}>Play ↗</Link>
        <button type="button" className={`fav-big${fav ? ' on' : ''}`} aria-label={fav ? 'Remove from favourites' : 'Add to favourites'} aria-pressed={fav} onClick={onFav}>
          <HeartIcon filled={fav} />
        </button>
        {game.external && <a className="ghost" href={game.external} target="_blank" rel="noreferrer">Original ↗</a>}
      </div>

      <div className="detail-rows" style={{ marginTop: 26 }}>
        <div className="detail-row">
          <span className="label">Share it</span>
          <ShareButtons url={url} text={`I'm playing ${game.title} on start.ng. Can you beat me?`} />
        </div>
        <div className="detail-row">
          <span className="label">Rate it</span>
          <div className="stars" role="group" aria-label="Rate this game">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" className={n <= rating ? 'on' : ''} aria-label={`${n} star${n === 1 ? '' : 's'}`} onClick={() => user ? rateGame(game.slug, n) : openAuth()}>
                <StarIcon on={n <= rating} />
              </button>
            ))}
          </div>
          <span className="stars-note">{user ? (rating ? `You rated it ${rating}/5` : 'Tap a star') : 'Sign in to rate'}</span>
        </div>
        <div className="detail-row">
          <span className="label">Categories</span>
          {game.categories.length ? game.categories.map((c) => <Link key={c} className="pill" href={`/categories/${c.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{c}</Link>) : <span className="muted" style={{ fontSize: '.8rem' }}>Uncategorised</span>}
        </div>
        <div className="detail-row">
          <span className="label">More about this game</span>
          <Link className="pill" href={`/games/${game.slug}/how-to-play`}>How to play {game.title}</Link>
          <Link className="pill" href={`/games/${game.slug}/faq`}>{game.title} FAQ</Link>
        </div>
        <div className="detail-row">
          <span className="label">Play next</span>
          {relatedGames(game, 3).map((g) => <Link key={g.slug} className="pill" href={`/games/${g.slug}`}>{g.title}</Link>)}
        </div>
      </div>
      <ReportButton name={game.title} />

      <div className="game-extra">
        <section className="board-card" aria-labelledby="game-board">
          <h2 id="game-board">Leaderboard</h2>
          <p className="board-sub">{game.leaderboard.length > 1 ? game.leaderboard.map((c) => c.label).join(' · ') : 'Best runs, highest score first'} · updated live</p>
          <table className="board-table">
            <thead>
              <tr><th>Player</th>{game.leaderboard.slice(1, 4).map((c) => <th key={c.key}>{c.label}</th>)}<th>{game.leaderboard[0]?.label ?? 'Score'}</th></tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={`${e.rank}-${e.name}`}>
                  <td><span className="rank">{e.rank}</span><span className="swatch" style={{ background: e.color }} />{e.name} {e.you && <span className="you">you</span>}</td>
                  {game.leaderboard.slice(1, 4).map((c) => <td key={c.key}>{formatStat(e.stats[c.key] ?? 0, c.format)}</td>)}
                  <td><b>{formatStat(e.score, game.leaderboard[0]?.format)}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
          {!local && user && <p className="on-caption" style={{ margin: '10px 0 0', fontSize: '.72rem', color: 'var(--muted)' }}>Play to put your best run on the board.</p>}
        </section>

        <aside className="side-notes">
          <h2>About this game</h2>
          <p>{game.description}</p>
          <div className="tags">
            {game.categories.slice(0, 4).map((c) => <Link key={c} href={`/categories/${c.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{c}</Link>)}
          </div>
          {currentTournamentEntered && ['riftsync','go-slow-danfo','follow-follow','balloon-funride','danfo-defense'].includes(game.slug) && (
            <div className="play-note" style={{ marginBottom: 12 }}><b>Tournament game</b>You are entered today. Your best run here counts towards the standings.</div>
          )}
          <div className="play-note">
            <b>Your start.ng character plays too.</b>
            Sign in once and your character, name and scores follow you into every game.
          </div>
          <p style={{ marginTop: 14 }}>Made by {game.by}. First listed {new Date(game.updatedAt).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}. {game.plays.toLocaleString()} plays.</p>
        </aside>
      </div>
    </>
  );
}
