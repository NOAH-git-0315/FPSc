import { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { User, GameInfo } from '@/app/type';
import { AuthContext } from '@/component/Context/Auth';
import { Games } from '@/lib/Array/Games';
import { gameRanks } from '@/lib/Array/Rank';

interface PropsType {
  defGames: Game[];
  gameOptions: string[];
  newGameTitle: string | null;
  inputKey: number;
  setUserCard: React.Dispatch<React.SetStateAction<User>>;
  setNewGameTitle: React.Dispatch<React.SetStateAction<string | null>>;
  setInputKey: React.Dispatch<React.SetStateAction<number>>;
}

const handleRank = (gameTitle: GameInfo) => {
  return gameRanks[gameTitle];
};

const GameBox = ({
  defGames,
  gameOptions,
  inputKey,
  newGameTitle,
  setUserCard,
  setNewGameTitle,
  setInputKey,
}: PropsType) => {
  const setGame = (index: number, value: string | null) => {
    setUserCard((prev) => {
      const updatedGames = [...prev.userInfo.games];
      if (value == null) {
        updatedGames.splice(index, 1);
      } else {
        updatedGames[index] = { title: value ?? '', rank: '' };
      }
      return {
        ...prev,
        userInfo: {
          ...prev.userInfo,
          games: updatedGames,
        },
      };
    });
  };

  const setRank = (index: number, value: string | null) => {
    setUserCard((prev) => {
      const updatedRank = [...prev.userInfo.games];
      updatedRank[index] = { ...prev.userInfo.games[index], rank: value ?? '' };
      return {
        ...prev,
        userInfo: {
          ...prev.userInfo,
          games: updatedRank,
        },
      };
    });
  };

  return (
    <Box>
      <Typography fontSize={14} color="gray">
        ゲームとランクを追加
      </Typography>
      <Box>
        {defGames.map((game, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 3, marginTop: 1 }}>
            <Autocomplete
              options={gameOptions}
              onChange={(_, value) => setGame(index, value)}
              value={game.title || ''}
              sx={{ width: 245 }}
              renderInput={(params) => (
                <TextField {...params} label="ゲームタイトル" />
              )}
            />
            <Autocomplete
              options={handleRank(game.title)}
              onChange={(_, value) => {
                setRank(index, value);
              }}
              value={game.rank || ''}
              sx={{ width: 190, marginTop: 1 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="ランクを選択"
                  variant="standard"
                />
              )}
            />
          </Box>
        ))}
      </Box>
      {defGames.length < 5 && (
        <Box sx={{ display: 'flex', gap: 3, marginTop: 1 }}>
          <Autocomplete
            key={inputKey}
            options={gameOptions}
            onChange={(_, value) => {
              if (value) {
                setGame(defGames.length, value);
                setNewGameTitle(null);
                setInputKey((prev) => prev + 1);
              }
            }}
            value={newGameTitle}
            onInputChange={(_, newInputValue) => setNewGameTitle(newInputValue)}
            sx={{ width: 245 }}
            renderInput={(params) => (
              <TextField {...params} label="ゲームタイトル" />
            )}
          />
        </Box>
      )}
    </Box>
  );
};
export default function SetGame() {
  const { userCard, setUserCard } = useContext(AuthContext);
  const selectedGames = userCard.userInfo.games.map((game) => game.title);
  const [gameOptions, setGameOptions] = useState(selectedGames);
  const [newGameTitle, setNewGameTitle] = useState<string | null>(null);
  const [inputKey, setInputKey] = useState<number>(0);

  useEffect(() => {
    const selectedGames = userCard.userInfo.games.map((game) => game.title);
    const updatedOptions = Games.filter(
      (game) => !selectedGames.includes(game),
    );
    setGameOptions(updatedOptions);
  }, [userCard.userInfo.games]);

  return (
    <Box>
      <GameBox
        defGames={userCard.userInfo.games}
        gameOptions={gameOptions}
        setNewGameTitle={setNewGameTitle}
        newGameTitle={newGameTitle}
        inputKey={inputKey}
        setInputKey={setInputKey}
        setUserCard={setUserCard}
      />
    </Box>
  );
}
