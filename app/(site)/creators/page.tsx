import type { Metadata } from 'next';
import { CreatorsBrowser } from '@/components/CreatorsBrowser';

export const metadata: Metadata = {
  title: 'Independent creators · start.ng',
  description: 'Games made and hosted by independent creators across Africa and beyond. Find something new, or submit your own game.',
};

export default function CreatorsPage() {
  return (
    <main>
      <CreatorsBrowser />
    </main>
  );
}
