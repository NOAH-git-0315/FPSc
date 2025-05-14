import { TimelsType } from '@/app/type';
import { AuthContext } from '@/component/templates/Auth';
import { Box, Typography } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction, useContext, useEffect } from 'react';

interface TimeLs {
  weekday: string[];
  holiday: string[];
}

interface SetTimeProps {
  setTimels: Dispatch<SetStateAction<TimeLs>>;
}

export default function SetTime({ setTimels }: SetTimeProps) {
  const { userCard, setUserCard } = useContext(AuthContext);
  useEffect(() => {
    const playtime1 = [
      userCard.userInfo.playtime1[0]?.toString(),
      userCard.userInfo.playtime1[
        userCard.userInfo.playtime1.length - 1
      ]?.toString(),
    ];
    const playtime2 = [
      userCard.userInfo.playtime2[0]?.toString(),
      userCard.userInfo.playtime2[
        userCard.userInfo.playtime2.length - 1
      ]?.toString(),
    ];

    setTimels({
      weekday: [...playtime1],
      holiday: [...playtime2],
    });
  }, []);

  function handleTimeChange(id: string, value: Dayjs | null) {
    const time = value ? value?.format('HH:mm') : '';
    setTimels((prev) => {
      const newTimels = { ...prev };
      switch (id) {
        case 'weekdayStart':
          newTimels.weekday[0] = time;
          break;
        case 'weekdayEnd':
          newTimels.weekday[1] = time;
          break;
        case 'holidayStart':
          newTimels.holiday[0] = time;
          break;
        case 'holidayEnd':
          newTimels.holiday[1] = time;
          break;
        default:
          break;
      }
      return newTimels;
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
