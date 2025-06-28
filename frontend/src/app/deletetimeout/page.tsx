'use client';

import { AuthContext, initialUserCard } from '@/component/Context/Auth';
import { Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function DeleteTimeout() {
  const { setUserCard } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setUserCard(initialUserCard);
    router.push('/');
  }, [setUserCard, router]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      <CircularProgress />
    </Box>
  );
}
