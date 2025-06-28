'use client';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Games, GameType } from '@/lib/Array/Games';
import { Box, Checkbox, FormGroup, Typography } from '@mui/material';
import { gameRanks } from '@/lib/Array/Rank';
import { SetAndSearchProps } from '@/component/Search/SearchHUD';

export default function GameSHUD({ setSearch, Search }: SetAndSearchProps) {
  const handleGameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'すべて') {
      setSearch((prev) => ({
        ...prev,
        game: [],
        rank: [],
      }));
      return;
    }
    setSearch((prev) => ({
      ...prev,
      game: [event.target.value as GameType],
    }));
  };

  const handleRankChange = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean,
  ) => {
    const target = event.target as HTMLInputElement;
    const rankValue = target.name;

    setSearch((prev) => {
      const updatedRanks = checked
        ? [...prev.rank, rankValue]
        : prev.rank.filter((r) => r !== rankValue);

      return { ...prev, rank: updatedRanks };
    });
  };
  const GameList = ['すべて', ...Games];
  const RankList = gameRanks[Search.game[0] as GameType] ?? [];

  return (
    <Box>
      <FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormLabel id="title">ゲーム</FormLabel>
        </Box>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue="すべて"
          name="radio-buttons-group"
          onChange={handleGameChange}
        >
          {GameList.map((game, index) => (
            <FormControlLabel
              value={game}
              key={index}
              control={<Radio />}
              label={game}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormGroup sx={{ marginTop: 4 }}>
        {RankList.length !== 0 && <Typography>ランク</Typography>}
        {RankList.map((rank) => (
          <FormControlLabel
            control={<Checkbox />}
            key={rank}
            label={rank}
            onChange={handleRankChange}
            name={rank}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
