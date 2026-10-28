'use client';

import { useEffect, useState } from 'react';
import { useApp } from './AppProvider';
import type { Creator } from '@/lib/site';
import { HeartIcon } from './Cards';
import { ShareButtons } from './Modals';

export function CreatorDetailActions({ creator }: { creator: Creator }) {
  const { isFavorite, toggleFavorite, user, openAuth, notify } = useApp();
  const fav = isFavorite(`creator:${creator.slug}`);
  const [url, setUrl] = useState(`https://start.ng/creators/${creator.slug}`);
  useEffect(() => {
    setUrl(`${window.location.origin}/creators/${creator.slug}`);
  }, [creator.slug]);

  const onFav = () => {
    if (!user) { openAuth(); return; }
    toggleFavorite(`creator:${creator.slug}`);
    notify(fav ? 'Removed from favourites.' : 'Saved to favourites.');
  };

  return (
    <>
      <div className="game-actions">
        <a className="btn" href={creator.url} target="_blank" rel="noreferrer">Play on their site ↗</a>
        <button type="button" className={`fav-big${fav ? ' on' : ''}`} aria-label={fav ? 'Remove from favourites' : 'Add to favourites'} aria-pressed={fav} onClick={onFav}>
          <HeartIcon filled={fav} />
        </button>
      </div>
      <div className="detail-rows" style={{ marginTop: 26 }}>
        <div className="detail-row">
          <span className="label">Share it</span>
          <ShareButtons url={url} text={`I found ${creator.name} by ${creator.by} on start.ng. Take a look.`} />
        </div>
        <div className="detail-row">
          <span className="label">Hosted at</span>
          <a className="pill" href={creator.url} target="_blank" rel="noreferrer">{new URL(creator.url).host.replace(/^www\./, '')} ↗</a>
        </div>
        <div className="detail-row">
          <span className="label">Categories</span>
          {creator.categories.length ? creator.categories.map((c) => (
            <span className="pill" key={c}>{c}</span>
          )) : <span className="muted" style={{ fontSize: '.8rem' }}>Independent</span>}
        </div>
        <div className="detail-row">
          <span className="label">More about this game</span>
          <a className="pill" href={`/creators/${creator.slug}/about`}>About {creator.name}</a>
          <a className="pill" href={`/creators/${creator.slug}/faq`}>{creator.name} FAQ</a>
        </div>
      </div>
    </>
  );
}
