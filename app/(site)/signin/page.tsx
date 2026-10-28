import type { Metadata } from 'next';
import { SignInPrompt } from '@/components/SignInPrompt';

export const metadata: Metadata = {
  title: 'Sign in · start.ng',
  description: 'Sign in to start.ng to save scores, favourites and your character.',
};

export default function SignInPage() {
  return <SignInPrompt />;
}
