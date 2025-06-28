'use client';
import { AuthContext } from '@/component/Context/Auth';
import { Box, Typography } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useContext } from 'react';

export default function SetTime() {
  const { userCard, setUserCard } = useContext(AuthContext);

  function handleTimeChange(id: string, value: Dayjs | null) {
    const time = value ? value.format('HH:mm') : '';

    setUserCard((prev) => {
      const newPlaytime1 = [...prev.userInfo.playtime1];
      const newPlaytime2 = [...prev.userInfo.playtime2];

      switch (id) {
        case 'weekdayStart':
          if (newPlaytime1.length === 0) {
            newPlaytime1.push(time);
          } else {
            newPlaytime1[0] = time;
          }
          break;

        case 'weekdayEnd':
          if (newPlaytime1.length === 0) {
            newPlaytime1.push('', time);
          } else {
            newPlaytime1[newPlaytime1.length - 1] = time;
          }
          break;

        case 'holidayStart':
          if (newPlaytime2.length === 0) {
            newPlaytime2.push(time);
          } else {
            newPlaytime2[0] = time;
          }
          break;

        case 'holidayEnd':
          if (newPlaytime2.length === 0) {
            newPlaytime2.push('', time);
          } else {
            newPlaytime2[newPlaytime2.length - 1] = time;
          }
          break;
      }

      return {
        ...prev,
        userInfo: {
          ...prev.userInfo,
          playtime1: newPlaytime1,
          playtime2: newPlaytime2,
        },
      };
    });
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 4 }}>
      <Typography fontSize={14} marginBottom={1} color="gray">
        平日
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TimePicker
          label="開始時刻"
          minutesStep={30}
          value={
            userCard.userInfo.playtime1[0]
              ? dayjs(userCard.userInfo.playtime1[0], 'HH:mm')
              : null
          }
          onChange={(value) => handleTimeChange('weekdayStart', value)}
        />
        <TimePicker
          label="終了時刻"
          minutesStep={30}
          value={
            userCard.userInfo.playtime1[userCard.userInfo.playtime1.length - 1]
              ? dayjs(
                  userCard.userInfo.playtime1[
                    userCard.userInfo.playtime1.length - 1
                  ],
                  'HH:mm',
                )
              : null
          }
          onChange={(value) => handleTimeChange('weekdayEnd', value)}
        />
      </Box>

      <Typography fontSize={14} marginTop={4} marginBottom={1} color="gray">
        休日
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TimePicker
          label="開始時刻"
          minutesStep={30}
          value={
            userCard.userInfo.playtime2[0]
              ? dayjs(userCard.userInfo.playtime2[0], 'HH:mm')
              : null
          }
          onChange={(value) => handleTimeChange('holidayStart', value)}
        />
        <TimePicker
          label="終了時刻"
          minutesStep={30}
          value={
            userCard.userInfo.playtime2[userCard.userInfo.playtime2.length - 1]
              ? dayjs(
                  userCard.userInfo.playtime2[
                    userCard.userInfo.playtime2.length - 1
                  ],
                  'HH:mm',
                )
              : null
          }
          onChange={(value) => handleTimeChange('holidayEnd', value)}
        />
      </Box>
    </Box>
  );
}
