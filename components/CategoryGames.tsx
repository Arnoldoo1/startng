'use client';

import { useMemo, useState } from 'react';
import { GameCard } from './Cards';
import { games as allGames } from '@/lib/site';

const PAGE_SIZE = 20;

export function CategoryGames({ slugs }: { slugs: string[] }) {
  const [page, setPage] = useState(1);
  const list = useMemo(() => slugs.map((s) => allGames.find((g) => g.slug === s)).filter((g): g is NonNullable<typeof g> => Boolean(g)), [slugs]);
  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const slice = list.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <>
      <div className="grid all-games-grid" style={{ marginTop: 18 }}>{slice.map((g) => <GameCard key={g.slug} game={g} />)}</div>
      {totalPages > 1 && (
        <nav className="pagination" aria-label="Category pages">
          {current > 1 ? <button type="button" onClick={() => { setPage(current - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>← Previous</button> : <span className="off">← Previous</span>}
          <span className="numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button type="button" key={p} onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={p === current ? { background: 'var(--ink)', color: 'var(--bg)' } : undefined}>{p}</button>
            ))}
          </span>
          {current < totalPages ? <button type="button" onClick={() => { setPage(current + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Next →</button> : <span className="off">Next →</span>}
        </nav>
      )}
    </>
  );
}
