import type { Metadata } from 'next';
import { ToyboxExperience } from '@/components/ToyboxExperience';

export const metadata: Metadata = {
  title: 'The Toybox · a start.ng design direction',
  description: 'A paper-cut playroom for start.ng. Pull the game handle, mix a mood, take a tiny dare. Same games, more confetti.',
};

export default function ToyboxPage() {
  return <ToyboxExperience />;
}
