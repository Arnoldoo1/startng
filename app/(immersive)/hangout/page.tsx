import type { Metadata } from 'next';
import { Hangout } from '@/components/Hangout';

export const metadata: Metadata = {
  title: 'The Hangout · start.ng',
  description: "start.ng's own multiplayer park. Walk around, wave and meet everyone else who's there.",
};

export default function HangoutPage() {
  return <Hangout />;
}
