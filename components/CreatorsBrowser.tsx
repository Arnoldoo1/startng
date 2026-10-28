'use client';

import Link from 'next/link';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { CreatorCard, SearchIcon } from './Cards';
import { useApp } from './AppProvider';
import { categories, creators } from '@/lib/site';
import { Modal } from './Modals';

const PAGE_SIZE = 20;

export function CreatorsBrowser() {
  const { submissions, addSubmission } = useApp();
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', url: '', by: '', description: '', categories: [] as string[], other: '' });
  const [error, setError] = useState('');
  const deferred = useDeferredValue(q);

  useEffect(() => {
    if (window.location.hash === '#submit') setOpen(true);
  }, []);

  const filtered = useMemo(() => {
    const n = deferred.trim().toLowerCase();
    if (!n) return creators;
    return creators.filter((c) => `${c.name} ${c.by} ${c.description} ${c.categories.join(' ')}`.toLowerCase().includes(n));
  }, [deferred]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const start = filtered.length ? (current - 1) * PAGE_SIZE + 1 : 0;
  const end = Math.min(current * PAGE_SIZE, filtered.length);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.name.trim().length < 2) return setError('Give your game a name.');
    try {
      const u = new URL(form.url);
      if (!['http:', 'https:'].includes(u.protocol)) throw new Error();
    } catch { return setError('Add the full https:// link to your game.'); }
    if (form.by.trim().length < 2) return setError('Tell us who made it.');
    if (form.description.trim().length < 20) return setError('A sentence or two about the game, please.');
    addSubmission({ name: form.name.trim(), url: form.url.trim(), by: form.by.trim(), description: form.description.trim(), categories: form.categories });
    setDone(true);
    setForm({ name: '', url: '', by: '', description: '', categories: [], other: '' });
  };

  const toggleCat = (name: string) => setForm((f) => ({
    ...f,
    categories: f.categories.includes(name) ? f.categories.filter((c) => c !== name) : f.categories.length < 5 ? [...f.categories, name] : f.categories,
  }));

  return (
    <>
      <section className="page-head creators-page">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 540px' }}>
              <h1>Games by independent creators</h1>
              <p>Made and hosted by creators outside start.ng. Tap a card to read about a game, or play it on the creator&apos;s own site.</p>
            </div>
            <button type="button" className="btn" style={{ marginTop: 12 }} onClick={() => { setOpen(true); setDone(false); }}>Submit your game</button>
          </div>
          <div className="search-row" style={{ marginTop: 20 }}>
            <label className="search-box">
              <SearchIcon />
              <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search games or creators" aria-label="Search independent games or creators" />
            </label>
            <span className="result-count">{start}–{end} of {filtered.length}</span>
          </div>

          {submissions.length > 0 && (
            <div className="pending-strip">
              <b>Your submissions</b>
              {submissions.map((s) => <span key={s.id}>{s.name} <em>pending review</em></span>)}
            </div>
          )}

          <div className="grid creator-grid">
            {slice.map((c) => <CreatorCard key={c.slug} creator={c} />)}
          </div>
          {filtered.length === 0 && <div className="empty"><b>No creators found</b>Try a different search.</div>}

          {filtered.length > PAGE_SIZE && (
            <nav className="pagination" aria-label="Creator pages">
              {current > 1 ? <button type="button" onClick={() => { setPage(current - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>← Previous</button> : <span className="off">← Previous</span>}
              <span className="numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button type="button" key={p} className={p === current ? 'on' : ''} onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={p === current ? { background: 'var(--ink)', color: 'var(--bg)' } : undefined}>{p}</button>
                ))}
              </span>
              {current < totalPages ? <button type="button" onClick={() => { setPage(current + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Next →</button> : <span className="off">Next →</span>}
            </nav>
          )}

          <div className="submit-card" id="submit">
            <div>
              <h2>Made a game somewhere else?</h2>
              <p>It does not have to live on start.ng. Submit it here and we will add it to the independent creators shelf, with a link to your site.</p>
            </div>
            <button type="button" className="btn" onClick={() => { setOpen(true); setDone(false); }}>Submit your game</button>
          </div>
        </div>
      </section>

      {open && (
        <Modal label="Submit your game" onClose={() => setOpen(false)}>
          <div className="mini-modal" style={{ width: 'min(560px, 100%)' }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '12px 4px' }}>
                <p className="eyebrow-small">Submission received</p>
                <h3>Nice one. We&apos;ll take a look.</h3>
                <p>Your game is in the queue. If it fits the shelf, we&apos;ll add a card and a page for it. You can submit another any time.</p>
                <button type="button" className="btn" onClick={() => setOpen(false)}>Back to creators</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3>Submit your game</h3>
                <p>Free games hosted anywhere are welcome. We check each one by hand.</p>
                <div className="field"><label htmlFor="sub-name">Game name</label><input id="sub-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. The Plot" maxLength={60} /></div>
                <div className="field"><label htmlFor="sub-url">Game link</label><input id="sub-url" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="https://yourgame.com" /></div>
                <div className="field"><label htmlFor="sub-by">Made by</label><input id="sub-by" value={form.by} onChange={(e) => setForm({ ...form, by: e.target.value })} placeholder="Your name or studio" maxLength={40} /></div>
                <div className="field"><label htmlFor="sub-desc">What is it?</label><textarea id="sub-desc" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="One or two sentences about the game." maxLength={300} /></div>
                <div className="field">
                  <label>Categories (up to 5)</label>
                  <div className="cat-picks">
                    {categories.filter((c) => !c.group.includes('Words people search')).slice(0, 18).map((c) => (
                      <button type="button" key={c.slug} className={form.categories.includes(c.name) ? 'on' : ''} onClick={() => toggleCat(c.name)}>{c.name}</button>
                    ))}
                  </div>
                </div>
                {error && <p className="form-error">{error}</p>}
                <div className="actions" style={{ justifyContent: 'flex-end' }}>
                  <button type="button" className="ghost" onClick={() => setOpen(false)}>Cancel</button>
                  <button type="submit" className="btn">Submit for review</button>
                </div>
              </form>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
