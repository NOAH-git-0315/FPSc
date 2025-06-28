'use client';

import { Box, CircularProgress, SxProps, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Theme } from '@emotion/react';
import SetGame from '@/component/profile/setGame';
import SetTime from '@/component/profile/setTime';
import SetIntroduction from '@/component/profile/setintroduction';
import SetOptions from '@/component/profile/setOptions';
import SetPlayStyle from '@/component/profile/setPlayStyle';
import Annotation from '@/component/profile/annotation';
import SubmitAndDelete from '@/component/profile/smt&dlt';
import { AuthContext } from '@/component/Context/Auth';
import { useContext, useEffect } from 'react';
import DiscordProfileCard from '@/component/profcard';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const sx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  gap: 2,
};

const TypographySx: SxProps<Theme> = {
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  marginBottom: 4,
};

export default function Profiles() {
  const { loading, userCard } = useContext(AuthContext);
  useEffect(() => {
    if (!loading && !userCard.id) {
      window.location.href = `${apiUrl}/oauth2/authorization/discord`;
    }
  }, [loading, userCard]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Typography sx={TypographySx}>プロフィール編集</Typography>
        <Box sx={sx}>
          <Box>
            <SetGame />
            <SetTime />
          </Box>
          <Box>
            <SetPlayStyle />
            <SetIntroduction />
            <Box sx={{ marginTop: 4 }}>
              {/* <SetGender /> */}
              {/* <SetAge /> */}
            </Box>
            <SetOptions />
          </Box>
          <Box sx={{}}>
            <DiscordProfileCard {...userCard} />
            <Annotation />
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SubmitAndDelete />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
