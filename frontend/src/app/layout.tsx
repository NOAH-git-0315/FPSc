import type { Metadata } from 'next';
import './style.scss';
import Header from '@/component/templates/main/header';
import Footer from '@/component/templates/main/footer';
import Menu from '@/component/templates/main/menu';
import AuthProvider from '@/component/templates/Auth';
import { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
export const metadata: Metadata = {
  title: 'FPSc',
  description: 'FPSc-top',
};

const sx: SxProps<Theme> = {
  marginTop: 15,
  marginBottom: 15,
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
          <Box sx={sx}>{children}</Box>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
