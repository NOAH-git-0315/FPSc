import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Switch, Typography } from '@mui/material';
import { SetAndSearchProps } from '@/component/SearchHUD';

function formatTimeLabel(value: number): string {
  const hours = Math.floor(value / 2);
  const minutes = value % 2 === 0 ? '00' : '30';
  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

export default function TimeSlider({ Search, setSearch }: SetAndSearchProps) {
  const handleChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setSearch((prev) => ({
        ...prev,
        playtime: value,
      }));
    }
  };

  return (
    <Box sx={{ width: 200 }}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 4 }}
      >
        <Typography>プレイ時間</Typography>
        <Switch />
      </Box>
      <Slider
        min={0}
        max={48}
        step={1}
        value={Search.playtime}
        onChange={handleChange}
        valueLabelDisplay="on"
        valueLabelFormat={formatTimeLabel}
      />
    </Box>
  );
}
