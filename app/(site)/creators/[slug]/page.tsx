import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CreatorDetailActions } from '@/components/CreatorDetailActions';
import { CreatorCard } from '@/components/Cards';
import { creators, getCreator, timeAgo } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return { title: 'Creator not found · start.ng' };
  return {
    title: `${creator.name} · start.ng`,
    description: creator.description,
    openGraph: { title: `${creator.name} · start.ng`, description: creator.description, images: [creator.cover] },
  };
}

export default async function CreatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();
  const related = creators
    .filter((c) => c.slug !== creator.slug)
    .map((c) => ({ c, score: c.categories.filter((x) => creator.categories.includes(x)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.c);

  return (
    <main className="container detail-wrap creator-detail">
      <Link className="back-link" href="/creators">← Independent creators</Link>
      <section className="game-hero">
        <div className="game-cover-lg">
          <img src={creator.cover} alt={`${creator.name} cover art`} />
        </div>
        <div className="game-info">
          <span className="creator-badge" style={{ background: 'var(--lime)', color: '#292a23' }}>Independent creator</span>
          <h1 style={{ marginTop: 10 }}>{creator.name}</h1>
          <p className="byline">by {creator.by} <span>·</span> <span className="host-pill">{new URL(creator.url).host.replace(/^www\./, '')}</span></p>
          <p className="desc">{creator.description}</p>
          <CreatorDetailActions creator={creator} />
        </div>
      </section>

      <div className="creator-facts">
        <div className="fact"><span>Listed</span><b>{timeAgo(creator.created)}</b></div>
        <div className="fact"><span>Plays</span><b>{creator.plays.toLocaleString()}</b></div>
        <div className="fact"><span>Categories</span><b>{creator.categories.length || 1}</b></div>
        <div className="fact"><span>Hosted</span><b>Creator&apos;s site</b></div>
      </div>

      <section className="game-extra" style={{ marginTop: 18 }}>
        <div className="board-card">
          <h2>About the maker</h2>
          <p className="board-sub">Independent creator on start.ng</p>
          <p style={{ fontSize: '.9rem', lineHeight: 1.7, color: 'var(--text-2)' }}>
            {creator.by} built {creator.name} and hosts it at {new URL(creator.url).host.replace(/^www\./, '')}. It is listed here so the community can find it, with a link straight to the game.
          </p>
          <p style={{ fontSize: '.84rem', lineHeight: 1.65, color: 'var(--muted)', marginBottom: 0 }}>
            Independent games are made outside start.ng. If something is broken or does not feel right, use the link on the game page to report it.
          </p>
        </div>
        <aside className="side-notes">
          <h2>Why it is here</h2>
          <p>start.ng is a home for small browser games from Nigeria and across Africa. Independent creators keep their own sites, and we point to the good ones.</p>
          <div className="tags">
            {creator.categories.map((c) => <span key={c} style={{ border: '1px solid var(--line)', borderRadius: 999, padding: '5px 10px', fontSize: '.74rem' }}>{c}</span>)}
          </div>
          <div className="play-note">
            <b>Want a start.ng address?</b>
            Build a static browser game and <Link href="/docs" style={{ textDecoration: 'underline' }}>put it on start.ng</Link> for free.
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section style={{ marginTop: 34 }}>
          <div className="section-head"><h2 style={{ fontSize: '1.2rem' }}>More independent creators</h2><Link className="see-all" href="/creators">See all →</Link></div>
          <div className="grid creator-grid">{related.map((c) => <CreatorCard key={c.slug} creator={c} />)}</div>
        </section>
      )}
    </main>
  );
}
