'use client';

import { Box, Button, SxProps } from '@mui/material';
import DiscordProfileCard from '../../../component/profcard';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Theme } from '@emotion/react';
import SetGame from '../../../component/profile/setGame';
import SetTime from '../../../component/profile/setTime';
import SetIntroduction from '../../../component/profile/setintroduction';
import SetOptions from '../../../component/profile/setOptions';
import { UserCard } from '../type';
import Submit from '../../../component/profile/submit';

const sx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  height: '100vh',
};

export default function Profiles() {
  const [state, setState] = useState<UserCard>({
    icon: '',
    name: 'ノア',
    id: 'noah_ow',
    games: [{ title: 'Overwatch2', rank: 'ゴールド' }],
    playtime1: { start: '12:00', end: '12:00' },
    playtime2: { start: '12:00', end: '12:00' },
    playstyle: 'わいわい',
    introduction: '自分が管理者です！皆さん一緒に仲良くプレイしましょう！',
    color: 'black',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(state);
    console.log(state.playtime1);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={sx}>
        <Box component="form" onSubmit={handleSubmit}>
          <SetGame setUser={setState} defGames={state.games} />
          <SetTime setUser={setState} />
          <SetIntroduction
            setUser={setState}
            defIntroduction={state.introduction}
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
