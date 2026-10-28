'use client';

import Link from 'next/link';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { CategoryTile, GameCard, SearchIcon } from './Cards';
import { categories, games } from '@/lib/site';
import { useApp } from './AppProvider';

type Props = { initial: { q?: string; page?: string; sort?: string; rating?: string; filter?: string } };

const PAGE_SIZE = 20;

export function GamesBrowser({ initial }: Props) {
  const { ratings } = useApp();
  const [q, setQ] = useState(initial.q ?? '');
  const [page, setPage] = useState(Math.max(1, Number(initial.page) || 1));
  const [sort, setSort] = useState(initial.sort ?? 'new');
  const [rating, setRating] = useState(initial.rating ?? 'any');
  const [filter, setFilter] = useState(initial.filter ?? 'all');
  const deferredQ = useDeferredValue(q);

  const filtered = useMemo(() => {
    const needle = deferredQ.trim().toLowerCase();
    let list = games.filter((g) => {
      if (needle && !(`${g.title} ${g.by} ${g.description} ${g.categories.join(' ')}`.toLowerCase().includes(needle))) return false;
      if (filter === 'racing' && !g.categories.includes('Racing and driving')) return false;
      if (filter === 'uncategorised' && g.categories.length > 0) return false;
      if (rating !== 'any') {
        const r = ratings[g.slug] ?? 0;
        if (r < Number(rating)) return false;
      }
      return true;
    });
    if (sort === 'az') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'played') list = [...list].sort((a, b) => b.plays - a.plays);
    else if (sort === 'rating') list = [...list].sort((a, b) => (ratings[b.slug] ?? 0) - (ratings[a.slug] ?? 0) || b.plays - a.plays);
    else list = [...list].sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
    return list;
  }, [deferredQ, filter, rating, ratings, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const start = filtered.length === 0 ? 0 : (current - 1) * PAGE_SIZE + 1;
  const end = Math.min(current * PAGE_SIZE, filtered.length);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (current > 1) params.set('page', String(current));
    if (sort !== 'new') params.set('sort', sort);
    if (rating !== 'any') params.set('rating', rating);
    if (filter !== 'all') params.set('filter', filter);
    const query = params.toString();
    window.history.replaceState(null, '', `/games${query ? `?${query}` : ''}`);
  }, [q, current, sort, rating, filter]);

  const changeFilter = (next: string) => { setFilter(next); setPage(1); };

  const pages = paginationPages(current, totalPages);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>All games from the community</h1>
          <div className="search-row">
            <label className="search-box">
              <SearchIcon />
              <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search games or creators" aria-label="Search games or creators" />
            </label>
            <span className="result-count" aria-live="polite">{start}–{end} of {filtered.length}</span>
          </div>

          <div className="browse-cats">
            <div className="section-head">
              <h2>Browse by category</h2>
              <Link className="see-all" href="/categories">All categories →</Link>
            </div>
            <div className="tag-grid">
              {categories.filter((c) => !c.group.includes('Words people search')).slice(0, 8).map((c) => <CategoryTile key={c.slug} category={c} />)}
            </div>
          </div>

          <div className="filter-bar">
            <div className="chips" role="group" aria-label="Filter games">
              {[['all', 'All'], ['racing', 'Racing'], ['uncategorised', 'Uncategorized']].map(([value, label]) => (
                <button key={value} type="button" className={filter === value ? 'on' : ''} onClick={() => changeFilter(value)}>{label}</button>
              ))}
            </div>
            <label className="filter-select">Rating
              <select value={rating} onChange={(e) => { setRating(e.target.value); setPage(1); }}>
                <option value="any">Any</option><option value="5">5 stars</option><option value="4">4+ stars</option><option value="3">3+ stars</option>
              </select>
            </label>
            <label className="filter-select">Sort
              <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }}>
                <option value="new">New</option><option value="az">A–Z</option><option value="played">Most played</option><option value="rating">My rating</option>
              </select>
            </label>
          </div>

          {slice.length ? (
            <div className="grid all-games-grid">{slice.map((g) => <GameCard key={g.slug} game={g} />)}</div>
          ) : (
            <div className="empty"><b>No games found</b>Try another search, or clear the filters.</div>
          )}

          {filtered.length > PAGE_SIZE && (
            <nav className="pagination" aria-label="Games pages">
              {current > 1 ? <a href={`/games?page=${current - 1}`} onClick={(e) => { e.preventDefault(); setPage(current - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>← Previous</a> : <span className="off">← Previous</span>}
              <span className="numbers">
                {pages.map((p, i) => p === '…' ? <span className="dots" key={`dot-${i}`}>…</span> : (
                  <a key={p} href={`/games?page=${p}`} className={p === current ? 'on' : ''} onClick={(e) => { e.preventDefault(); setPage(Number(p)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{p}</a>
                ))}
              </span>
              {current < totalPages ? <a href={`/games?page=${current + 1}`} onClick={(e) => { e.preventDefault(); setPage(current + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Next →</a> : <span className="off">Next →</span>}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}

function paginationPages(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | '…')[] = [1];
  if (current > 3) pages.push('…');
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) pages.push(p);
  if (current < total - 2) pages.push('…');
  pages.push(total);
  return pages;
}
