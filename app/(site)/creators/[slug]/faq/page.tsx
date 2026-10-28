import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCreator } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCreator(slug);
  return { title: c ? `${c.name} FAQ · start.ng` : 'Creator not found · start.ng', description: c ? `Questions about ${c.name}.` : undefined };
}

export default async function CreatorFaq({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCreator(slug);
  if (!c) notFound();
  const faqs = [
    [`What is ${c.name}?`, c.description],
    [`Who made ${c.name}?`, `${c.by} made it. It is an independent game hosted at ${new URL(c.url).host.replace(/^www\./, '')}, not on a start.ng address.`],
    [`Is it free?`, `It is listed as a free browser game. If the creator asks for an account or payment on their site, that is their rule, not start.ng's.`],
    [`Where does my score go?`, `Independent games keep their own scores. start.ng does not store them. Use the leaderboard on the creator's site if there is one.`],
    [`Can I report a problem?`, `Yes. Use the report link on the game page or the help button and tell us what happened.`],
    [`Can I list my own independent game?`, `Yes. Go to the creators page and submit it. We check every game by hand before adding it.`],
  ];
  return (
    <main className="container detail-wrap" style={{ maxWidth: 820 }}>
      <Link className="back-link" href={`/creators/${c.slug}`}>← {c.name}</Link>
      <p className="eyebrow-small">FAQ</p>
      <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', margin: '6px 0 18px' }}>{c.name} questions</h1>
      <div className="faq" style={{ marginTop: 0 }}>
        {faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
      <div className="actions" style={{ justifyContent: 'flex-start', marginTop: 22 }}>
        <a className="btn" href={c.url} target="_blank" rel="noreferrer">Play {c.name} ↗</a>
        <Link className="ghost" href="/creators">All independent creators</Link>
      </div>
    </main>
  );
}
