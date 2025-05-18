'use client';

import { Box, SxProps, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Theme } from '@emotion/react';
import SetGame from '@/component/Organisms/profile/setGame';
import SetTime from '@/component/Organisms/profile/setTime';
import SetIntroduction from '@/component/Organisms/profile/setintroduction';
import SetOptions from '@/component/Organisms/profile/setOptions';
import SetPlayStyle from '@/component/Organisms/profile/setPlayStyle';
import SetGender from '@/component/Organisms/profile/setGender';
import SetAge from '@/component/Organisms/profile/setAge';
import Annotation from '@/component/Organisms/profile/annotation';
import MYDiscordProfileCard from '@/component/Organisms/MYDiscordProfileCard';
import SubmitAndDelete from '@/component/Organisms/profile/smt&dlt';

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
              <SetGender />
              <SetAge />
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
