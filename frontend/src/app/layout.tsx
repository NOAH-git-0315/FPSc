import type { Metadata } from 'next';
import './style.scss';
import Header from '@/component/main/header';
import Footer from '@/component/main/footer';
import Menu from '@/component/main/menu';
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
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
