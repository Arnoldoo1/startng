import type { Metadata } from 'next';
import { LeaderboardView } from '@/components/LeaderboardView';

export const metadata: Metadata = {
  title: 'Leaderboard · start.ng',
  description: 'Points from the daily start.ng tournaments. All time and this week.',
};

export default async function LeaderboardPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const raw = Array.isArray(sp.period) ? sp.period[0] : sp.period;
  return <LeaderboardView initial={raw === 'week' ? 'week' : 'all'} />;
}
