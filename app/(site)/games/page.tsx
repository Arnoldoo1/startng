import type { Metadata } from 'next';
import { GamesBrowser } from '@/components/GamesBrowser';

export const metadata: Metadata = {
  title: 'All games · start.ng',
  description: 'Every free browser game on start.ng, from Lagos runners to brainy little puzzles. Play in your browser, no download.',
};

export default async function GamesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const value = (key: string) => (Array.isArray(params[key]) ? params[key]?.[0] : params[key]) as string | undefined;
  return (
    <main>
      <GamesBrowser initial={{ q: value('q'), page: value('page'), sort: value('sort'), rating: value('rating'), filter: value('filter') }} />
    </main>
  );
}
