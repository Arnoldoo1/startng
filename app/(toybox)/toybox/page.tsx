import type { Metadata } from 'next';
import { MoonMarketExperience } from '@/components/MoonMarketExperience';

export const metadata: Metadata = {
  title: 'The Moon Market · a start.ng design direction',
  description:
    'A floating night market above Lagos. Pull a lantern, choose a district, take a dare and leave a wish. Same 189 games, after hours.',
};

export default function MoonMarketPage() {
  return <MoonMarketExperience />;
}
