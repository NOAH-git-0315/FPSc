import { UserCard } from '@/app/type';
import { Box, Typography } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

type SetUser = Dispatch<SetStateAction<UserCard>>;

interface SetTimeProps {
  setUser: SetUser;
}

export default function SetTime({ setUser }: SetTimeProps) {
  function handleTimeChange(id: string, value: Dayjs | null) {
    const formatted = value ? value.format('HH:mm') : '';

    switch (id) {
      case 'weekdayStart':
        setUser((state) => ({
          ...state,
          playtime1: { ...state.playtime1, start: formatted },
        }));
        break;
      case 'weekdayEnd':
        setUser((state) => ({
          ...state,
          playtime1: { ...state.playtime1, end: formatted },
        }));
        break;
      case 'holidayStart':
        setUser((state) => ({
          ...state,
          playtime2: { ...state.playtime2, start: formatted },
        }));
        break;
      case 'holidayEnd':
        setUser((state) => ({
          ...state,
          playtime2: { ...state.playtime2, end: formatted },
        }));
        break;
      default:
        break;
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 4 }}>
      <Typography fontSize={14} color="gray">
        平日
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <TimePicker
          label="開始時刻"
          onChange={(value) => handleTimeChange('weekdayStart', value)}
        />
        <TimePicker
          label="終了時刻"
          onChange={(value) => handleTimeChange('weekdayEnd', value)}
        />
      </Box>
      <Box sx={{ flex: 1, marginTop: 1 }}>
        <Typography fontSize={14} color="gray">
          休日
        </Typography>
        <TimePicker
          label="開始時刻"
          onChange={(value) => handleTimeChange('holidayStart', value)}
        />
        <TimePicker
          label="終了時刻"
          onChange={(value) => handleTimeChange('holidayEnd', value)}
        />
      </Box>
    </Box>
  );
}
