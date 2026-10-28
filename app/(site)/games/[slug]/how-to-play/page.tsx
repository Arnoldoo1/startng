import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGame, relatedGames } from '@/lib/site';
import { seedBoard, formatStat } from '@/lib/leaderboard';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  return { title: game ? `How to play ${game.title} · start.ng` : 'Game not found · start.ng', description: game ? `Controls, tips and scoring for ${game.title}.` : undefined };
}

export default async function HowToPlay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();
  const board = seedBoard(game).slice(0, 5);
  return (
    <main className="container detail-wrap" style={{ maxWidth: 820 }}>
      <Link className="back-link" href={`/games/${game.slug}`}>← {game.title}</Link>
      <p className="eyebrow-small">How to play</p>
      <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', margin: '6px 0 10px' }}>{game.title}</h1>
      <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 660 }}>{game.description}</p>

      <div className="docs-content" style={{ marginTop: 24 }}>
        <h2>The goal</h2>
        <p>Play {game.title} free in your browser. Do your best run, then share it with a friend. If you sign in, your best score is kept and your start.ng character comes with you.</p>
        <h2>Controls</h2>
        <ul>
          <li><b>Move:</b> arrow keys, WASD, or the on-screen buttons on a phone.</li>
          <li><b>Start / jump / catch:</b> Space, tap, or the main action button.</li>
          <li><b>Pause:</b> press P. The game pauses when you leave the tab.</li>
        </ul>
        <h2>How to play</h2>
        <ol>
          <li>Open {game.title} and press play.</li>
          <li>Watch the pattern, then move early. Small, calm movements beat panic.</li>
          <li>Collect the good things. Avoid everything else.</li>
          <li>The longer you last, the faster it gets. Your score is your best run.</li>
        </ol>
        <h2>Three tips</h2>
        <ul>
          <li>Keep your eyes a little ahead of your character, not on it.</li>
          <li>Learn one safe move at a time. The first 30 seconds are the tutorial.</li>
          <li>Play again straight away while the pattern is still in your head.</li>
        </ul>
        <h2>Leaderboard</h2>
        <p>Ranks are by {game.leaderboard[0]?.label ?? 'score'}{game.leaderboard[0]?.order === 'lowest' ? ' (lowest wins)' : ''}. Sign in to save a run; guests can still see the board.</p>
        <table>
          <thead><tr><th>#</th><th>Player</th><th>{game.leaderboard[0]?.label ?? 'Score'}</th></tr></thead>
          <tbody>{board.map((e) => <tr key={e.name}><td>{e.rank}</td><td>{e.name}</td><td>{formatStat(e.score, game.leaderboard[0]?.format)}</td></tr>)}</tbody>
        </table>
      </div>

      <div className="actions" style={{ justifyContent: 'flex-start', marginTop: 18 }}>
        <Link className="btn" href={`/games/${game.slug}/play`}>Play {game.title}</Link>
        <Link className="ghost" href={`/games/${game.slug}/faq`}>{game.title} FAQ</Link>
      </div>

      <section style={{ marginTop: 38 }}>
        <h2 style={{ fontSize: '1.25rem' }}>More games like this</h2>
        <div className="grid" style={{ marginTop: 12 }}>
          {relatedGames(game, 4).map((g) => (
            <Link key={g.slug} className="game" href={`/games/${g.slug}`}>
              <div className="art"><img src={g.cover} alt="" /></div>
              <div className="info"><h3>{g.title}</h3><span className="by">by {g.by}</span></div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
