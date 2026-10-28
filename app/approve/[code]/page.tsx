import type { Metadata } from 'next';
import { ApproveClient } from '@/components/ApproveClient';

export const metadata: Metadata = {
  title: 'Approve your game · start.ng',
  description: 'One last step before your start.ng game goes live.',
  robots: { index: false, follow: false },
};

export default async function ApprovePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <ApproveClient code={code} />;
}
