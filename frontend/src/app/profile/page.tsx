'use client';

import { Box, SxProps } from '@mui/material';
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
const sx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  height: '100vh',
};
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
      <Box sx={sx}>
        <Box>
          <SetGame />
          <SetTime setTimels={setTimels} />
          <SetPlayStyle />
          <SetIntroduction />
          <Submit />
        </Box>
        <Box>
          <MyDiscordProfileCard timels={timels} />
          <SetOptions />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
