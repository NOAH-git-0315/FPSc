'use client';

import { Box, CircularProgress, SxProps, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Theme } from '@emotion/react';
import SetGame from '@/component/Section/profile/setGame';
import SetTime from '@/component/Section/profile/setTime';
import SetIntroduction from '@/component/Section/profile/setintroduction';
import SetOptions from '@/component/Section/profile/setOptions';
import SetPlayStyle from '@/component/Section/profile/setPlayStyle';
import Annotation from '@/component/Section/profile/annotation';
import MYDiscordProfileCard from '@/component/Section/MYDiscordProfileCard';
import SubmitAndDelete from '@/component/Section/profile/smt&dlt';
import { AuthContext } from '@/component/Context/Auth';
import { useContext } from 'react';

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
  const { userCard } = useContext(AuthContext);
  if (!userCard.userAuth.id) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <CircularProgress size="100px" />
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
            <MYDiscordProfileCard />
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
