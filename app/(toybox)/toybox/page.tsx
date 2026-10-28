import type { Metadata } from 'next';
import { SunMarketExperience } from '@/components/SunMarketExperience';

export const metadata: Metadata = {
  title: 'The Sun Market · a start.ng design direction',
  description:
    'A floating day market above Lagos. Pull a lantern, choose a district, take a dare and leave a wish. Same 189 games, in daylight.',
};

export default function SunMarketPage() {
  return <SunMarketExperience />;
}
