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
import Submit from '@/component/Organisms/profile/submit';
import SetGender from '@/component/Organisms/profile/setGender';
import SetAge from '@/component/Organisms/profile/setAge';
import Annotation from '@/component/Organisms/profile/annotation';
import AccountDelete from '@/component/Organisms/profile/accountDelete';
import MYDiscordProfileCard from '@/component/Organisms/MYDiscordProfileCard';
const sx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  height: '100vh',
};

const TypographySx: SxProps<Theme> = {};

export default function Profiles() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={TypographySx}>プロフィール編集</Typography>
      <Box sx={sx}>
        <Box>
          <SetGame />
          <SetTime />
          <AccountDelete />
          <Submit />
        </Box>
        <Box>
          <SetGender />
          <SetAge />
          <SetPlayStyle />
          <SetIntroduction />
          <SetOptions />
        </Box>
        <Box>
          <MYDiscordProfileCard />
          <Annotation />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
