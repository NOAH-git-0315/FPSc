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
import { useEffect, useState } from 'react';
import MyDiscordProfileCard from '@/component/Organisms/MYDiscordProfileCard';
import SetGender from '@/component/Organisms/profile/setGender';
import SetAge from '@/component/Organisms/profile/setAge';
import Annotation from '@/component/Organisms/profile/annotation';
import AccountDelete from '@/component/Organisms/profile/accountDelete';
const sx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  height: '100vh',
};

const TypographySx: SxProps<Theme> = {};

interface TimeLs {
  weekday: string[];
  holiday: string[];
}

export default function Profiles() {
  const [timels, setTimels] = useState<TimeLs>({
    weekday: ['00:00', '00:00'],
    holiday: ['00:00', '00:00'],
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={TypographySx}>プロフィール編集</Typography>
      <Box sx={sx}>
        <Box>
          <SetGame />
          <SetTime setTimels={setTimels} />
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
          <MyDiscordProfileCard timels={timels} />
          <Annotation />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
