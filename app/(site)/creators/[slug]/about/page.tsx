import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCreator } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCreator(slug);
  return { title: c ? `About ${c.name} · start.ng` : 'Creator not found · start.ng', description: c?.description };
}

export default async function CreatorAbout({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCreator(slug);
  if (!c) notFound();
  return (
    <main className="container detail-wrap" style={{ maxWidth: 820 }}>
      <Link className="back-link" href={`/creators/${c.slug}`}>← {c.name}</Link>
      <p className="eyebrow-small">About this game</p>
      <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', margin: '6px 0 12px' }}>{c.name}</h1>
      <p style={{ fontSize: '1.02rem', color: 'var(--text-2)', lineHeight: 1.8 }}>{c.description}</p>
      <div className="docs-content" style={{ marginTop: 20 }}>
        <h2>Who made it</h2>
        <p>{c.name} is by {c.by}, an independent creator. It lives at {new URL(c.url).host.replace(/^www\./, '')} and is listed on start.ng with a link straight to the game.</p>
        <h2>What to expect</h2>
        <p>{c.categories.length ? `It sits in ${c.categories.join(', ')}.` : 'It is a small browser game made by an independent creator.'} Open it in your browser, no download. Some independent games work best on a laptop, some are made for a phone.</p>
        <h2>Why start.ng lists it</h2>
        <p>We want people to find good games made across Nigeria and Africa, even when the creator hosts them somewhere else. Independent listings do not move to a start.ng address and keep their own accounts, scores and rules.</p>
      </div>
      <div className="actions" style={{ justifyContent: 'flex-start', marginTop: 20 }}>
        <a className="btn" href={c.url} target="_blank" rel="noreferrer">Play {c.name} ↗</a>
        <Link className="ghost" href={`/creators/${c.slug}/faq`}>{c.name} FAQ</Link>
      </div>
    </main>
  );
}
