import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { SearchType, SetAndSearchProps } from '@/component/SearchHUD';

const handleSubmit = (Search: SearchType) => {
  function formatTimeNumberToList(start: number, end: number) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  function formatTimeLabelMap(list: number[]) {
    function formatTimeLabel(value: number): string {
      const hours = Math.floor(value / 2);
      const minutes = value % 2 === 0 ? '00' : '30';
      return `${String(hours).padStart(2, '0')}:${minutes}`;
    }
    const result = list.map((item) => {
      return formatTimeLabel(item);
    });
    return result;
  }

  const TimeList = formatTimeNumberToList(
    Search.playtime[0],
    Search.playtime[1],
  );
  const Formated = formatTimeLabelMap(TimeList);
};

export default function SubmitSHUD({ Search, setSearch }: SetAndSearchProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => handleSubmit(Search)}
      >
        検索
      </Button>
    </Stack>
  );
}
