'use clinet';
import { AuthContext } from '@/component/Context/Auth';
import { Box, Typography, TextField } from '@mui/material';
import { FocusEvent, useContext } from 'react';

export default function SetIntroduction() {
  const { userCard, setUserCard } = useContext(AuthContext);
  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const text = e.target.value;
    setUserCard((prev) => ({
      ...prev,
      userInfo: { ...prev.userInfo, introduction: text },
    }));
  }

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography fontSize={14} color="gray">
        自己紹介
      </Typography>
      <TextField
        defaultValue={userCard.userInfo.introduction}
        onBlur={handleBlur}
        multiline
        minRows={6}
        sx={{
          width: '31rem',
          '& .MuiInputBase-root': {
            height: '17rem',
            alignItems: 'start',
            overflow: 'auto',
          },
        }}
      />
    </Box>
  );
}
