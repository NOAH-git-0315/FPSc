'use client';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function AnimatedExpandableCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        width: 300,
        bgcolor: '#2f3136',
        color: 'white',
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Typography variant="h6">タイトル</Typography>
      <Typography variant="body2">簡易情報など</Typography>

      <Button
        onClick={() => setExpanded(!expanded)}
        sx={{ mt: 1 }}
        variant="contained"
      >
        {expanded ? '閉じる' : '詳細を表示'}
      </Button>

      <Box
        sx={{
          mt: 1,
          overflow: 'hidden',
          maxHeight: expanded ? 200 : 0,
          transition: 'max-height 0.4s ease',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            p: expanded ? 1 : 0,
            opacity: expanded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          これは詳細情報です。アニメーションで下方向に開きます。
        </Typography>
      </Box>
    </Box>
  );
}
