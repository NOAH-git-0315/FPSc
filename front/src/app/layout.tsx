import type { Metadata } from 'next';
import './style.scss';
import Header from '../../component/header';
import Footer from '../../component/footer';
import Menu from '../../component/menu';

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
