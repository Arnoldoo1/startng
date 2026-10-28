'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './AppProvider';
import { CharacterAvatar } from './CharacterAvatar';
import { getGame } from '@/lib/site';
import { ACCESSORY_OPTIONS, CLOTH_COLORS, HAIR_COLORS, HAIR_OPTIONS, HAT_OPTIONS, SKIN_COLORS, randomCharacter, type Character } from '@/lib/character';

export function ProfilePage() {
  const { hydrated, user, openAuth, signOut, favorites, ratings, scores, tournament, submissions, updateUser, currentTournamentEntered } = useApp();
  const [draftName, setDraftName] = useState(user?.name ?? '');
  const [draftAccount, setDraftAccount] = useState(user?.account ?? '');
  const [character, setCharacter] = useState<Character | null>(user?.character ?? null);
  const [editing, setEditing] = useState(false);

  if (!hydrated) return <main className="container profile-page"><div className="empty">Loading your profile…</div></main>;

  if (!user) {
    return (
      <main className="container signin-page">
        <div className="signin-card">
          <CharacterAvatar character={randomCharacter()} size={88} />
          <p className="eyebrow-small">Your profile</p>
          <h1>Sign in to see your corner.</h1>
          <p>Your character, favourites, best runs and tournament entries live here once you sign in.</p>
          <button type="button" className="btn" onClick={openAuth} style={{ width: '100%' }}>Sign in</button>
          <Link className="signin-back" href="/games">Browse games →</Link>
        </div>
      </main>
    );
  }

  const c = character ?? user.character;
  const favoriteGames = favorites.filter((f) => !f.startsWith('creator:')).map(getGame).filter(Boolean);
  const favoriteCreators = favorites.filter((f) => f.startsWith('creator:')).map((f) => f.replace('creator:', ''));
  const played = Object.entries(scores).sort((a, b) => +new Date(b[1].at) - +new Date(a[1].at));
  const myPoints = Object.values(tournament.games).reduce((s, g) => s + g.points, 0);
  const ratingsCount = Object.keys(ratings).length;
  const set = <K extends keyof Character,>(key: K, value: Character[K]) => setCharacter((prev) => prev ? { ...prev, [key]: value } : prev);

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ name: draftName, account: draftAccount, character: c });
    setEditing(false);
  };

  const beginEdit = () => {
    setDraftName(user.name);
    setDraftAccount(user.account);
    setCharacter(user.character);
    setEditing(true);
  };

  return (
    <main className="container profile-page">
      <header className="profile-head">
        <CharacterAvatar character={user.character} size={92} />
        <div style={{ flex: 1, minWidth: 200 }}>
          <p className="eyebrow-small">Your profile</p>
          <h1>{user.name}</h1>
          <p>@{user.account} · joined {new Date(user.joined).toLocaleDateString('en-NG', { month: 'long', year: 'numeric' })}</p>
        </div>
        <div className="actions" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="ghost" onClick={beginEdit}>Edit character</button>
          <button type="button" className="signout" onClick={signOut}>Sign out</button>
        </div>
      </header>

      {editing ? (
        <section className="panel" style={{ marginBottom: 22 }}>
          <h2>Edit your character</h2>
          <form onSubmit={save}>
            <div className="character-top">
              <div className="character-preview">
                <CharacterAvatar character={c} size={112} />
                <button type="button" className="randomise" onClick={() => setCharacter(randomCharacter())}>↻ Surprise me</button>
              </div>
              <div style={{ flex: 1 }}>
                <div className="field"><label htmlFor="p-name">Character name</label><input id="p-name" value={draftName} onChange={(e) => setDraftName(e.target.value)} maxLength={28} /></div>
                <div className="field"><label htmlFor="p-account">Account name</label><input id="p-account" value={draftAccount} onChange={(e) => setDraftAccount(e.target.value)} maxLength={28} /></div>
              </div>
            </div>
            <div className="builder-grid">
              <div className="builder-group"><span>Body</span><div className="segmented">{(['female', 'male'] as const).map((b) => <button type="button" key={b} className={c.body === b ? 'on' : ''} onClick={() => set('body', b)}>{b}</button>)}</div></div>
              <div className="builder-group"><span>Top colour</span><div className="swatches">{CLOTH_COLORS.map((col) => <button type="button" key={col} className={c.primaryColor === col ? 'on' : ''} style={{ background: col }} onClick={() => set('primaryColor', col)} aria-label={`Top ${col}`} />)}</div></div>
              <div className="builder-group"><span>Bottom colour</span><div className="swatches">{CLOTH_COLORS.map((col) => <button type="button" key={col} className={c.secondaryColor === col ? 'on' : ''} style={{ background: col }} onClick={() => set('secondaryColor', col)} aria-label={`Bottom ${col}`} />)}</div></div>
              <div className="builder-group"><span>Skin</span><div className="swatches">{SKIN_COLORS.map((col) => <button type="button" key={col} className={c.skinColor === col ? 'on' : ''} style={{ background: col }} onClick={() => set('skinColor', col)} aria-label={`Skin ${col}`} />)}</div></div>
              <div className="builder-group"><span>Hair</span><select value={c.hair} onChange={(e) => set('hair', e.target.value as Character['hair'])}>{HAIR_OPTIONS.map((h) => <option key={h}>{h}</option>)}</select></div>
              <div className="builder-group"><span>Hair colour</span><div className="swatches">{HAIR_COLORS.map((col) => <button type="button" key={col} className={c.hairColor === col ? 'on' : ''} style={{ background: col }} onClick={() => set('hairColor', col)} aria-label={`Hair ${col}`} />)}</div></div>
              <div className="builder-group"><span>Hat</span><select value={c.hat} onChange={(e) => set('hat', e.target.value as Character['hat'])}>{HAT_OPTIONS.map((h) => <option key={h}>{h}</option>)}</select></div>
              <div className="builder-group"><span>Accessory</span><select value={c.accessory} onChange={(e) => set('accessory', e.target.value as Character['accessory'])}>{ACCESSORY_OPTIONS.map((h) => <option key={h}>{h}</option>)}</select></div>
            </div>
            <div className="actions" style={{ justifyContent: 'flex-end', marginTop: 16 }}>
              <button type="button" className="ghost" onClick={() => setEditing(false)}>Cancel</button>
              <button type="submit" className="btn">Save character</button>
            </div>
          </form>
        </section>
      ) : null}

      <div className="profile-grid">
        <div>
          <section className="panel" id="favorites">
            <div className="section-head" style={{ marginBottom: 10 }}><h2 style={{ margin: 0 }}>Your favourites</h2><span className="mono" style={{ fontSize: '.66rem', color: 'var(--muted)' }}>{favoriteGames.length + favoriteCreators.length} saved</span></div>
            {favoriteGames.length === 0 && favoriteCreators.length === 0 ? (
              <div className="profile-empty">Tap a heart on any game or creator to keep it here.<div style={{ marginTop: 10 }}><Link className="ghost" href="/games">Browse games</Link></div></div>
            ) : (
              <div className="profile-list">
                {favoriteGames.map((g) => g && (
                  <Link className="profile-row" key={g.slug} href={`/games/${g.slug}`}>
                    <img src={g.cover} alt="" />
                    <div className="info"><b>{g.title}</b><span>by {g.by}</span></div>
                    <span style={{ fontSize: '.7rem', color: 'var(--muted)' }}>Game</span>
                  </Link>
                ))}
                {favoriteCreators.map((slug) => <div className="profile-row" key={slug}><div className="info"><b>{slug.replace(/-/g, ' ')}</b><span>Independent creator</span></div></div>)}
              </div>
            )}
          </section>

          <section className="panel" style={{ marginTop: 18 }}>
            <div className="section-head" style={{ marginBottom: 10 }}><h2 style={{ margin: 0 }}>Your best runs</h2><span className="mono" style={{ fontSize: '.66rem', color: 'var(--muted)' }}>{played.length} played</span></div>
            {played.length === 0 ? <div className="profile-empty">Play a game and your best run will show up here.</div> : (
              <div className="profile-list">
                {played.slice(0, 8).map(([slug, sc]) => {
                  const g = getGame(slug);
                  if (!g) return null;
                  return (
                    <Link className="profile-row" key={slug} href={`/games/${slug}`}>
                      <img src={g.cover} alt="" />
                      <div className="info"><b>{g.title}</b><span>{new Date(sc.at).toLocaleDateString('en-NG', { month: 'short', day: 'numeric' })}</span></div>
                      <b style={{ fontFamily: 'var(--mono)', fontSize: '.82rem' }}>{sc.score.toLocaleString()}</b>
                    </Link>
                  );
                })}
              </div>
            )}
          </section>
        </div>

        <div>
          <section className="panel">
            <h2>Your start.ng</h2>
            <div className="profile-stats">
              <div><span>Favourites</span><b>{favorites.length}</b></div>
              <div><span>Games played</span><b>{played.length}</b></div>
              <div><span>Ratings given</span><b>{ratingsCount}</b></div>
              <div><span>Today&apos;s points</span><b>{myPoints}</b></div>
            </div>
            <div className="profile-tourney">
              <b>{currentTournamentEntered ? 'You are in today’s tournament.' : 'Not in today’s tournament yet.'}</b>
              <p>{currentTournamentEntered ? 'Play a tournament game to add points.' : 'Five games, 24 hours, one winner.'}</p>
              <Link className="ghost" href="/tournament">{currentTournamentEntered ? 'Play a game' : 'Enter now'}</Link>
            </div>
          </section>

          <section className="panel" style={{ marginTop: 18 }}>
            <h2>Your submissions</h2>
            {submissions.length === 0 ? <div className="profile-empty">Made a game? Submit it from the creators page and track it here.</div> : (
              <div className="profile-list">{submissions.map((s) => <div className="profile-row" key={s.id}><div className="info"><b>{s.name}</b><span>{s.url}</span></div><span className="pending-tag">pending</span></div>)}</div>
            )}
          </section>

          <section className="panel" style={{ marginTop: 18 }}>
            <h2>Your character</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <CharacterAvatar character={user.character} size={78} />
              <div><b>{user.name}</b><p style={{ margin: '3px 0 0', color: 'var(--muted)', fontSize: '.8rem' }}>This is who appears in every start.ng game.</p></div>
            </div>
            <button type="button" className="ghost" style={{ marginTop: 12 }} onClick={beginEdit}>Change the look</button>
          </section>
        </div>
      </div>
    </main>
  );
}
