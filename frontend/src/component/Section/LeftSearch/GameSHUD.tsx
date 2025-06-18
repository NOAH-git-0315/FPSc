'use client';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Games, GameType } from '@/lib/Array/Games';
import { Box, Checkbox, FormGroup, Switch, Typography } from '@mui/material';
import { gameRanks } from '@/lib/Array/Rank';
import { SetAndSearchProps, SetSearchProps } from '@/component/SearchHUD';

export default function GameSHUD({ setSearch, Search }: SetAndSearchProps) {
  const [show, setShow] = React.useState(true);
  const [selectedGame, setSelectedGame] = React.useState<GameType | ''>('');

  const handleGameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Search.rank.includes(event.target.value)) {
      setSearch((prev) => ({
        ...prev,
        game: [event.target.value as GameType],
      }));
    }
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

  const RankList =
    selectedGame && gameRanks[Search.game[0] as GameType]
      ? gameRanks[Search.game[0] as GameType]
      : [];

  return (
    <Box>
      <FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormLabel id="title">ゲーム</FormLabel>
          <Switch />
        </Box>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={handleGameChange}
        >
          {Games.map((game, index) => (
            <FormControlLabel
              value={game}
              key={index}
              control={<Radio />}
              label={game}
            />
          ))}
        </RadioGroup>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography>ランク</Typography>
          <Switch />
        </Box>
      </FormControl>
      <FormGroup sx={{ marginTop: 4 }}>
        {RankList.length === 0 && (
          <FormLabel id="rank">ゲームを先に選択して下さい</FormLabel>
        )}
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
