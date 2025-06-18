import { Box, SxProps, Theme } from '@mui/material';
import TimeSlider from './Section/LeftSearch/TimeSlider';
import GameSHUD from './Section/LeftSearch/GameSHUD';
import PlayStyleSHUD from './Section/LeftSearch/PlayStyleSHUD';
import SubmitSHUD from './Section/LeftSearch/SubmitSHUD';
import { useState } from 'react';
import { GameType } from '@/lib/Array/Games';
import { RankType } from '@/lib/Array/Rank';
import { PlayStyle } from '@/lib/Array/PlayStyle';
import { TimeType } from '@/lib/Array/Time';

const sx: SxProps<Theme> = {
  position: 'absolute',
  left: '1vw',
  top: '38vh',
};

export interface SetSearchProps {
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
}

export interface SetAndSearchProps {
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
  Search: SearchType;
}

export interface SearchType {
  game: GameType[];
  rank: RankType[];
  playstyle: PlayStyle[];
  playtime: number[];
}

export default function SearchHUD() {
  const [Search, setSearch] = useState<SearchType>({
    game: [],
    rank: [],
    playstyle: [],
    playtime: [0, 48],
  });
  return (
    <Box sx={sx}>
      <GameSHUD setSearch={setSearch} Search={Search} />
      <PlayStyleSHUD setSearch={setSearch} />
      <TimeSlider setSearch={setSearch} Search={Search} />
      <SubmitSHUD setSearch={setSearch} Search={Search} />
    </Box>
  );
}
