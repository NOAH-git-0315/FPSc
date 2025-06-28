import { Box, SxProps, Theme } from '@mui/material';
import TimeSlider from './TimeSlider';
import GameSHUD from './GameSHUD';
import PlayStyleSHUD from './PlayStyleSHUD';
import { useContext } from 'react';
import { GameType } from '@/lib/Array/Games';
import { RankType } from '@/lib/Array/Rank';
import { PlayStyle } from '@/lib/Array/PlayStyle';
import { FriendsContext } from '@/component/Context/FriendsProvider';

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
  const context = useContext(FriendsContext);
  const { Search, setSearch } = context;
  return (
    <Box sx={sx}>
      <GameSHUD setSearch={setSearch} Search={Search} />
      <PlayStyleSHUD setSearch={setSearch} />
      <TimeSlider setSearch={setSearch} Search={Search} />
    </Box>
  );
}
