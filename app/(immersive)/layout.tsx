import { AuthModal } from '@/components/AuthModal';
import { Toast } from '@/components/ChromeExtras';

export default function ImmersiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AuthModal />
      <Toast />
    </>
  );
}
