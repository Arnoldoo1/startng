import type { Metadata } from 'next';
import { TournamentPage } from '@/components/TournamentPage';

export const metadata: Metadata = {
  title: 'Daily tournament · start.ng',
  description: 'Five games. 24 hours. One winner. Play the daily start.ng tournament before 6 PM Nigeria time.',
};

export default function TournamentRoute() {
  return <TournamentPage />;
}
