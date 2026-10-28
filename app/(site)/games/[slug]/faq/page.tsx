import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGame } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  return { title: game ? `${game.title} FAQ · start.ng` : 'Game not found · start.ng', description: game ? `Questions and answers about ${game.title}.` : undefined };
}

export default async function GameFaq({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();
  const faqs = [
    [`What is ${game.title}?`, game.description],
    [`Is ${game.title} free?`, `Yes. ${game.title} is free to play in your browser, with no download and no payment.`],
    [`Who made ${game.title}?`, `${game.by} made it. It lives on start.ng and the original also plays at ${game.slug}.start.ng.`],
    [`Can I save my score?`, `Sign in to start.ng and your best run is kept on the ${game.title} leaderboard. Guests can play but cannot save a score.`],
    [`Does it work on a phone?`, `Yes. Use the on-screen controls, or tap the game to start. Turn your phone sideways for a little more room.`],
    [`What is the daily tournament?`, `Five games are chosen each day. Play before 6 PM Nigeria time. First on a game gets 10 points, second 7, third 5, fourth 3, and everyone else who plays gets 1.`],
  ];
  return (
    <main className="container detail-wrap" style={{ maxWidth: 820 }}>
      <Link className="back-link" href={`/games/${game.slug}`}>← {game.title}</Link>
      <p className="eyebrow-small">FAQ</p>
      <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', margin: '6px 0 18px' }}>{game.title} questions</h1>
      <div className="faq" style={{ marginTop: 0 }}>
        {faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
      <div className="actions" style={{ justifyContent: 'flex-start', marginTop: 22 }}>
        <Link className="btn" href={`/games/${game.slug}/play`}>Play {game.title}</Link>
        <Link className="ghost" href={`/games/${game.slug}/how-to-play`}>How to play</Link>
      </div>
    </main>
  );
}
