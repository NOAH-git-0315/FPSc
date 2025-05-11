'use client';

import { Box, SxProps } from '@mui/material';
import DiscordProfileCard from '@/component/templates/profcard';
import { useContext } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Theme } from '@emotion/react';
import SetGame from '@/component/Organisms/profile/setGame';
import SetTime from '@/component/Organisms/profile/setTime';
import SetIntroduction from '@/component/Organisms/profile/setintroduction';
import SetOptions from '@/component/Organisms/profile/setOptions';
import SetPlayStyle from '@/component/Organisms/profile/setPlayStyle';
import Submit from '@/component/Organisms/profile/submit';
import { AuthContext } from '@/component/templates/Auth';

const sx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  height: '100vh',
};

export default function Profiles() {
  const context = useContext(AuthContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { userCard: state, setUserCard: setState } = context;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={sx}>
        <Box component="form" onSubmit={handleSubmit}>
          <SetGame
            setUser={setState}
            defGames={[{ title: 'Overwatch2', rank: 'ゴールド' }]}
          />
          <SetTime setUser={setState} />
          <SetPlayStyle
            setUser={setState}
            defPlayStyle={state.userInfo.playstyle}
          />
          <SetIntroduction
            setUser={setState}
            defIntroduction={'これはテスト用accountです'}
          />
          <Submit />
        </Box>
        <Box>
          <DiscordProfileCard {...state} />
          <SetOptions setUser={setState} />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
