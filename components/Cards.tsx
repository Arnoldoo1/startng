'use client';

import Link from 'next/link';
import { useApp } from './AppProvider';
import type { Game, Category, Creator } from '@/lib/site';
import { hostOf, isNew } from '@/lib/site';

export function HeartIcon({ filled }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 5 6.1 5c2.1 0 3.6 1.2 4.4 2.5h3C14.3 6.2 15.8 5 17.9 5c3.4 0 5.2 3.4 3.7 6.8C19.5 16.4 12 21 12 21z" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function GameCard({ game, variant = 'default', showBoard = true }: { game: Game; variant?: 'default' | 'mini'; showBoard?: boolean }) {
  const { isFavorite, toggleFavorite, user, openAuth, notify } = useApp();
  const fav = isFavorite(game.slug);
  const action = game.slug === 'the-hangout' ? 'Play' : 'View';
  const href = `/games/${game.slug}`;

  const onFav = () => {
    if (!user) {
      openAuth();
      notify('Sign in to save favourites.');
      return;
    }
    toggleFavorite(game.slug);
  };

  return (
    <article className={`game${game.slug === 'the-hangout' ? ' legendary' : ''}`}>
      {isNew(game.updatedAt) && game.slug !== 'the-hangout' && <span className="new-badge">New</span>}
      <Link className="game-link" href={href} aria-label={`${game.title} by ${game.by}`}>
        <div className="art">
          <img src={game.cover} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="info">
          <h3>{game.title}</h3>
          <p>{hostOf(game)}</p>
          <span className="by">by {game.by}</span>
        </div>
      </Link>
      <div className="meta">
        <button type="button" className="fav-btn" aria-pressed={fav} aria-label={`${fav ? 'Remove' : 'Add'} ${game.title} ${fav ? 'from' : 'to'} favourites`} onClick={onFav}>
          <HeartIcon filled={fav} />
        </button>
        {showBoard && game.leaderboard.length > 0 && <span className="board">Leaderboard</span>}
        <Link className={action === 'Play' ? 'play' : 'view'} href={href}>{action}</Link>
      </div>
    </article>
  );
}

export function CreatorCard({ creator }: { creator: Creator }) {
  const { isFavorite, toggleFavorite, user, openAuth, notify } = useApp();
  const fav = isFavorite(`creator:${creator.slug}`);
  const onFav = () => {
    if (!user) { openAuth(); notify('Sign in to save favourites.'); return; }
    toggleFavorite(`creator:${creator.slug}`);
    notify(fav ? 'Removed from favourites.' : 'Saved to favourites.');
  };
  return (
    <article className="game">
      <Link className="game-link" href={`/creators/${creator.slug}`}>
        <div className="art"><img src={creator.cover} alt="" loading="lazy" /></div>
        <div className="info">
          <h3>{creator.name}</h3>
          <p>{new URL(creator.url).host.replace(/^www\./, '')}</p>
          <span className="by">by {creator.by}</span>
        </div>
      </Link>
      <div className="creator-meta">
        <button type="button" className="fav-btn" aria-pressed={fav} aria-label={`Save ${creator.name}`} onClick={onFav}><HeartIcon filled={fav} /></button>
        <Link className="view" href={`/creators/${creator.slug}`}>View</Link>
      </div>
    </article>
  );
}

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      className="tag-tile"
      href={`/categories/${category.slug}`}
      style={category.art ? { backgroundImage: `linear-gradient(180deg, rgba(15,16,12,.02), rgba(15,16,12,.55)), url(${category.art})` } : { background: 'linear-gradient(135deg,#45aaf2,#2b2f4a)' }}
    >
      <b>{category.name}</b>
      <span>{category.count} {category.count === 1 ? 'game' : 'games'}</span>
    </Link>
  );
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" />
    </svg>
  );
}

export function StarIcon({ on }: { on?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6">
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z" />
    </svg>
  );
}
