import type { Metadata } from 'next';
import { ProfilePage } from '@/components/ProfilePage';

export const metadata: Metadata = {
  title: 'Your profile · start.ng',
  description: 'Your start.ng character, favourites, best runs and tournament points.',
};

export default function ProfileRoute() {
  return <ProfilePage />;
}
