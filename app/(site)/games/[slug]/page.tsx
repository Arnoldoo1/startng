import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GameDetailActions } from '@/components/GameDetailActions';
import { getGame, hostOf, isNew, timeAgo } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: 'Game not found · start.ng' };
  return {
    title: `${game.title} · start.ng`,
    description: game.description,
    openGraph: { title: `${game.title} · start.ng`, description: game.description, images: [game.cover] },
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  return (
    <main className="container detail-wrap">
      <Link className="back-link" href="/games">← All games</Link>
      <section className="game-hero">
        <div className="game-hero-left">
          <div className="game-cover-lg">
            <img src={game.cover} alt={`${game.title} cover art`} />
          </div>
          <div className="game-under-cover">
            <p className="eyebrow-small">Play it here</p>
            <h2>One click. No download.</h2>
            <p>{game.title} runs right in your browser. Your start.ng character comes with you.</p>
            <div className="game-under-actions">
              <Link className="btn" href={`/games/${game.slug}/play`}>Play {game.title} ↗</Link>
              <Link className="ghost" href={`/games/${game.slug}/how-to-play`}>How to play</Link>
            </div>
            <div className="game-under-facts">
              <span><b>{game.plays.toLocaleString()}</b> plays</span>
              <span><b>Free</b> to play</span>
              <span><b>Browser</b> game</span>
            </div>
          </div>
        </div>
        <div className="game-info">
          {isNew(game.updatedAt) && <span className="new-badge" style={{ position: 'static', display: 'inline-block', marginBottom: 10 }}>New this week</span>}
          <h1>{game.title}</h1>
          <p className="byline">by {game.by} <span>·</span> <span className="host-pill">{hostOf(game)}</span></p>
          <p className="desc">{game.description}</p>
          <GameDetailActions game={game} />
        </div>
      </section>
      <p className="muted" style={{ fontSize: '.72rem', borderTop: '1px solid var(--line)', paddingTop: 12, marginTop: 10 }}>
        Listed {timeAgo(game.updatedAt)} · {game.plays.toLocaleString()} plays · Hosted on start.ng
      </p>
    </main>
  );
}
