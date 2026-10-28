import { games, categories, creators, type Game, type Category, type Creator } from './data';

export type { Game, Category, Creator };
export { games, categories, creators };

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getCreator(slug: string): Creator | undefined {
  return creators.find((c) => c.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function hostOf(game: Game): string {
  if (game.slug === 'the-hangout') return 'start.ng/hangout';
  return `${game.slug}.start.ng`;
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function isNew(updatedAt: string): boolean {
  const then = new Date(updatedAt).getTime();
  return Date.now() - then < 1000 * 60 * 60 * 24 * 4;
}

export function formatPlays(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}

export function gameCategories(game: Game): Category[] {
  return game.categories
    .map((name) => categories.find((c) => c.name === name))
    .filter((c): c is Category => Boolean(c));
}

export function relatedGames(game: Game, limit = 3): Game[] {
  const own = new Set(game.categories);
  const scored = games
    .filter((g) => g.slug !== game.slug)
    .map((g) => ({ g, score: g.categories.filter((c) => own.has(c)).length }))
    .sort((a, b) => b.score - a.score || b.g.plays - a.g.plays);
  return scored.slice(0, limit).map((x) => x.g);
}

export function searchGames(query: string): Game[] {
  const q = query.trim().toLowerCase();
  if (!q) return games;
  return games.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.by.toLowerCase().includes(q) ||
      g.categories.join(' ').toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q),
  );
}

export function searchCreators(query: string): Creator[] {
  const q = query.trim().toLowerCase();
  if (!q) return creators;
  return creators.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.by.toLowerCase().includes(q) ||
      c.categories.join(' ').toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q),
  );
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function creatorHref(c: Creator): string {
  return `/creators/${c.slug}`;
}

export function catHref(c: Category): string {
  return `/categories/${c.slug}`;
}

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
  return `${Math.floor(months / 12)} year${months >= 24 ? 's' : ''} ago`;
}
