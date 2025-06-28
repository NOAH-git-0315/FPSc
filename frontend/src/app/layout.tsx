import type { Metadata } from 'next';
import './style.scss';
import Header from '@/component/main/header';
import Footer from '@/component/main/footer';
import Menu from '@/component/main/menu';
import AuthProvider from '@/component/Context/Auth';
import { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
import EmotionProvider from '@/component/Context/emotion-provider';
import FriendsProvider from '@/component/Context/FriendsProvider';
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
        <EmotionProvider>
          <FriendsProvider>
            <AuthProvider>
              <Header />
              <Menu />
              <Box sx={sx}>{children}</Box>
              <Footer />
            </AuthProvider>
          </FriendsProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
