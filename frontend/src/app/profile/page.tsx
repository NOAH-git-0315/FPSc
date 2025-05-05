'use client';

import { Box, SxProps } from '@mui/material';
import DiscordProfileCard from '@/component/profcard';
import { useState, useContext, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Theme } from '@emotion/react';
import SetGame from '@/component/profile/setGame';
import SetTime from '@/component/profile/setTime';
import SetIntroduction from '@/component/profile/setintroduction';
import SetOptions from '@/component/profile/setOptions';
import SetPlayStyle from '@/component/profile/setPlayStyle';
import { UserCard } from '../type';
import Submit from '@/component/profile/submit';
import { AuthContext } from '@/component/Auth';

const sx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  height: '100vh',
};

export default function Profiles() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [state, setState] = useState<UserCard>({
    userAuth: {
      id: user?.id || '',
      name: user?.name || '',
      avatar: user?.avatar || '',
      globalName: user?.globalName || '',
    },
    userInfo: {
      icon: `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}`,
      games: [{ title: 'Overwatch2', rank: 'ゴールド' }],
      playtime1: { start: '未設定', end: '未設定' },
      playtime2: { start: '未設定', end: '未設定' },
      playstyle: [],
      introduction: '自分が管理者です！皆さん一緒に仲良くプレイしましょう！',
    },
    option: {
      showGender: true,
      showAge: true,
      showGenderToSameSex: true,
      showProfile: true,
    },
    cardOption: {
      color: 'black',
      motion: null,
    },
  });

  useEffect(() => {
    if (!user) return;
    setState((prevState) => ({
      ...prevState,
      userAuth: {
        ...prevState.userAuth,
        globalName: user.globalName || '',
        name: user.name || '',
      },
      userInfo: {
        ...prevState.userInfo,
        icon: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`,
      },
    }));
  }, [user]);

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
