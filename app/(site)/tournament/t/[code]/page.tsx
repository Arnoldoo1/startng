import type { Metadata } from 'next';
import { CustomTournamentView } from '@/components/CustomTournamentView';

export const metadata: Metadata = { title: 'Friends tournament · start.ng', description: 'A private start.ng tournament. Play the games and compare scores with your friends.' };

export default async function CustomTournamentPage({
  params,
  searchParams,
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { code } = await params;
  const sp = await searchParams;
  const value = (k: string) => (Array.isArray(sp[k]) ? sp[k]?.[0] : sp[k]) as string | undefined;
  return (
    <CustomTournamentView
      code={code}
      query={{ name: value('name'), games: value('games'), hours: value('hours'), ends: value('ends'), host: value('host') }}
    />
  );
}
