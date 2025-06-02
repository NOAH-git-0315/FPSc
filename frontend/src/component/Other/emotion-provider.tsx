'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import React from 'react';

const clientSideEmotionCache = createCache({ key: 'mui', prepend: true });

export default function EmotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
  );
}
