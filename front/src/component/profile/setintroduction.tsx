'use clinet';
import { UserCard } from '@/app/type';
import { Box, Typography, TextField } from '@mui/material';
import { MutableRefObject, FocusEvent, useRef } from 'react';

type Props = {
  defIntroduction: string;
  setUser: React.Dispatch<React.SetStateAction<UserCard>>;
};

export default function SetIntroduction({ setUser, defIntroduction }: Props) {
  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setUser((state: UserCard) => ({ ...state, introduction: e.target.value }));
  }

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography fontSize={14} color="gray">
        自己紹介
      </Typography>
      <TextField
        defaultValue={defIntroduction}
        onBlur={handleBlur}
        multiline
        minRows={6}
        sx={{
          width: '31rem',
          '& .MuiInputBase-root': {
            height: '10rem',
            alignItems: 'start',
          },
        }}
      />
    </Box>
  );
}
