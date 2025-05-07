import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { User, Game } from '@/app/type';

const names = [
  'Apex Legends',
  'Battlefield 2042',
  'Call of Duty: Modern Warfare II',
  'Call of Duty: Warzone',
  'Counter-Strike 2',
  'Destiny 2',
  'Escape from Tarkov',
  'Halo Infinite',
  'Overwatch 2',
  'Paladins',
  'PUBG: Battlegrounds',
  'Rainbow Six Siege',
  'VALORANT',
];

const overwatchRanks = [
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
  'Diamond',
  'Master',
  'Grandmaster',
  'Top 500',
];

type SetUser = React.Dispatch<React.SetStateAction<User>>;

interface ComboBoxProps {
  defGames: Game[];
  setUser: SetUser;
}

interface SetGameProps {
  defGames: Game[];
  setUser: SetUser;
}

const Title: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <Typography fontSize={14} color="gray" sx={{ marginTop: 2 }}>
      ゲームとランクを追加
    </Typography>
  );
};

const ComboBox: React.FC<ComboBoxProps> = ({ defGames, setUser }) => {
  const handleTitleChange = (_: any, value: string | null) => {
    setUser((prev) => {
      const newGames = [...prev.userInfo.games];
      if (!newGames[0]) newGames[0] = { title: '', rank: '' };
      newGames[0].title = value || '';
      return { ...prev, games: newGames };
    });
  };

  const handleRankChange = (value, index) => {};

  return (
    <Box>
      {defGames.map((game, index) => (
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Autocomplete
            onChange={(value, index) => handleTitleChange}
            options={names}
            defaultValue={game.title || ''}
            sx={{ width: 245, marginTop: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="ゲームタイトル" />
            )}
          />
          <Autocomplete
            onChange={handleRankChange}
            options={overwatchRanks}
            defaultValue={game.rank || ''}
            sx={{ width: 190, marginTop: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="ランクを選択" variant="standard" />
            )}
          />
        </Box>
      ))}
    </Box>
  );
};

const setGame = [{ title: '', rank: '' }];

export default function SetGame({ setUser, defGames }: SetGameProps) {
  return (
    <Box>
      <Title />
      <ComboBox defGames={defGames} setUser={setUser} />
      <ComboBox defGames={setGame} setUser={setUser} />
    </Box>
  );
}

//配列を受け取る→map ＋1
//
