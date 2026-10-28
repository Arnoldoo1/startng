import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PlayGame } from '@/components/PlayGame';
import { getGame } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  return { title: game ? `Play ${game.title} · start.ng` : 'Game not found · start.ng', description: game?.description };
}

export default async function PlayPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();
  const query = await searchParams;
  const flag = (k: string) => (Array.isArray(query[k]) ? query[k]?.[0] : query[k]) === '1';
  return <PlayGame game={game} tournament={flag('tournament')} challenge={flag('challenge')} />;
}
