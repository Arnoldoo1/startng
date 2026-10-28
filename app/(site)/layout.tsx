import { AuthModal } from '@/components/AuthModal';
import { HelpWidget, Toast } from '@/components/ChromeExtras';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <AuthModal />
      <Toast />
      <HelpWidget />
    </>
  );
}
