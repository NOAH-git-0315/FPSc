import type { Metadata } from 'next';
import './style.scss';
import Header from '@/component/main/header';
import Footer from '@/component/main/footer';
import Menu from '@/component/main/menu';
import AuthProvider from '@/component/Auth';
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
