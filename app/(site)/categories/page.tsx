import type { Metadata } from 'next';
import Link from 'next/link';
import { CategoryTile } from '@/components/Cards';
import { categories } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Browse games by category · start.ng',
  description: 'Pick how you want to play, or the mood you are in. Every free browser game on start.ng, sorted by category.',
};

export default function CategoriesPage() {
  const groups = Array.from(new Set(categories.map((c) => c.group)));
  return (
    <main className="container categories-page">
      <div className="breadcrumb"><Link href="/games">Games</Link><span>›</span><span>Categories</span></div>
      <section className="cat-hero">
        <h1>Browse games by category</h1>
        <p>Pick how you want to play, or the mood you are in. One game can be in more than one category.</p>
      </section>

      <div className="cat-groups">
        {groups.map((group) => (
          <section key={group}>
            <h2>{group}</h2>
            <div className="tag-grid">
              {categories.filter((c) => c.group === group).map((c) => <CategoryTile key={c.slug} category={c} />)}
            </div>
          </section>
        ))}
      </div>

      <section className="related-cats">
        <div className="section-head"><h2>Not sure? Start with everything</h2><Link className="see-all" href="/games">All 189 games →</Link></div>
        <div className="tag-grid">
          <Link className="tag-tile" href="/games" style={{ background: 'linear-gradient(135deg,#292a23,#5b7d0d)' }}><b>All games</b><span>189 games</span></Link>
          <Link className="tag-tile" href="/games?sort=played" style={{ background: 'linear-gradient(135deg,#0c2340,#1f6feb)' }}><b>Most played</b><span>What everyone is playing</span></Link>
          <Link className="tag-tile" href="/tournament" style={{ background: 'linear-gradient(135deg,#3a165d,#a55eea)' }}><b>Daily tournament</b><span>5 games · one winner</span></Link>
          <Link className="tag-tile" href="/creators" style={{ background: 'linear-gradient(135deg,#4a1c10,#d35400)' }}><b>Independent</b><span>39 creators</span></Link>
        </div>
      </section>
    </main>
  );
}
