import type { Metadata } from 'next';
import './style.scss';
import Header from '@/component/templates/main/header';
import Footer from '@/component/templates/main/footer';
import Menu from '@/component/templates/main/menu';
import AuthProvider from '@/component/templates/Auth';
export const metadata: Metadata = {
  title: 'FPSc',
  description: 'FPSc-top',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <Header />
          <Menu />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
