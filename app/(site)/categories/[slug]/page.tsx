import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CategoryGames } from '@/components/CategoryGames';
import { CategoryTile } from '@/components/Cards';
import { categories, getCategory } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: 'Category not found · start.ng' };
  return { title: `${category.name} games · start.ng`, description: category.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const related = categories.filter((c) => c.group === category.group && c.slug !== category.slug).slice(0, 4);
  const more = categories.filter((c) => c.group !== category.group && !c.group.includes('Words people search')).slice(0, 4);

  return (
    <main className="container categories-page">
      <div className="breadcrumb">
        <Link href="/games">Games</Link><span>›</span><Link href="/categories">Categories</Link><span>›</span><span>{category.name}</span>
      </div>
      <section className="cat-hero">
        <p className="eyebrow-small">Category</p>
        <h1>{category.name} games</h1>
        <p>{category.description}</p>
      </section>

      <div className="section-head" style={{ marginTop: 22 }}>
        <h2 style={{ fontSize: '1.15rem' }}>Games</h2>
        <span className="mono" style={{ fontSize: '.7rem', color: 'var(--muted)' }}>{category.count} {category.count === 1 ? 'game' : 'games'}</span>
      </div>
      <CategoryGames slugs={category.games} />

      {related.length > 0 && (
        <section className="related-cats">
          <div className="section-head"><h2>More in {category.group.toLowerCase()}</h2><Link className="see-all" href="/categories">All categories →</Link></div>
          <div className="tag-grid">{related.map((c) => <CategoryTile key={c.slug} category={c} />)}</div>
        </section>
      )}

      {more.length > 0 && (
        <section className="related-cats">
          <div className="section-head"><h2>Try a different mood</h2></div>
          <div className="tag-grid">{more.map((c) => <CategoryTile key={c.slug} category={c} />)}</div>
        </section>
      )}
    </main>
  );
}
