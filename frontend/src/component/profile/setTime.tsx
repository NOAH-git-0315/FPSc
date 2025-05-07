import { User } from '@/app/type';
import { Box, Typography } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

type SetUser = Dispatch<React.SetStateAction<UserCard>>;

interface SetTimeProps {
  setUser: SetUser;
}

export default function SetTime({ setUser }: SetTimeProps) {
  function handleTimeChange(id: string, value: Dayjs | null) {
    const formatted = value ? value.format('HH:mm') : '';

    if (!setUser) return;

    setUser((state) => {
      if (!state) return state;

      const updatePlaytime = (
        playtimeKey: 'playtime1' | 'playtime2',
        timeKey: 'start' | 'end',
      ) => {
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            [playtimeKey]: {
              ...state.userInfo[playtimeKey],
              [timeKey]: formatted,
            },
          },
        };
      };

      switch (id) {
        case 'weekdayStart':
          return updatePlaytime('playtime1', 'start');
        case 'weekdayEnd':
          return updatePlaytime('playtime1', 'end');
        case 'holidayStart':
          return updatePlaytime('playtime2', 'start');
        case 'holidayEnd':
          return updatePlaytime('playtime2', 'end');
        default:
          return state;
      }
    });
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 4 }}>
      <Typography fontSize={14} color="gray">
        平日
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <TimePicker
          label="開始時刻"
          minutesStep={30}
          onChange={(value) => handleTimeChange('weekdayStart', value)}
        />
        <TimePicker
          label="終了時刻"
          minutesStep={30}
          onChange={(value) => handleTimeChange('weekdayEnd', value)}
        />
      </Box>
      <Box sx={{ flex: 1, marginTop: 1 }}>
        <Typography fontSize={14} color="gray">
          休日
        </Typography>
        <TimePicker
          label="開始時刻"
          minutesStep={30}
          onChange={(value) => handleTimeChange('holidayStart', value)}
        />
        <TimePicker
          label="終了時刻"
          minutesStep={30}
          onChange={(value) => handleTimeChange('holidayEnd', value)}
        />
      </Box>
    </Box>
  );
}
