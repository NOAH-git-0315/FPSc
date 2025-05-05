import { UserCard } from '@/app/type';
import { Box, Avatar, Typography, Button, Stack } from '@mui/material';
import { userInfo } from 'os';

const sx = {
  width: 330,
  bgcolor: '#2f3136',
  color: 'white',
  borderRadius: 2,
  p: 2,
  boxShadow: 3,
};

const Margin = 1;

export default function DiscordProfileCard(props: UserCard) {
  const {
    userAuth: { name, globalName },
    userInfo: { icon, games, playtime1, playtime2, playstyle, introduction },
    option: { showGender, showAge, showGenderToSameSex, showProfile },
    cardOption: { color, motion },
  } = props;

  console.log(icon);
  const Names: React.FC<{ children?: React.ReactNode }> = (props) => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Avatar src={icon} sx={{ width: 80, height: 80 }} />
        <Box>
          <Typography fontSize={14} color="gray">
            name
          </Typography>
          <Typography variant="h6">{globalName}</Typography>
          <Typography fontSize={14} color="gray">
            {name}
          </Typography>
        </Box>
      </Box>
    );
  };

  const Games: React.FC<{ children?: React.ReactNode }> = (props) => {
    return (
      <Box sx={{ marginTop: Margin }}>
        <Typography fontSize={14} color="gray">
          game | rank
        </Typography>
        {games.map((game, index) => (
          <Typography key={index}>
            {game.title} | {game.rank}
          </Typography>
        ))}
      </Box>
    );
  };

  const PlayStyle: React.FC<{ children?: React.ReactNode }> = () => {
    return (
      <Box sx={{ flex: 1, marginTop: Margin }}>
        <Typography fontSize={14} color="gray">
          playstyle
        </Typography>
        <Typography
          sx={{
            border: '1px solid gray',
            borderRadius: 1,
            p: 0.5,
          }}
        >
          {playstyle?.join(', ')}
        </Typography>
      </Box>
    );
  };

  const PlayTime: React.FC<{ children?: React.ReactNode }> = (props) => {
    const typeSx = {
      border: '1px solid gray',
      borderRadius: 1,
      p: 0.5,
    };
    return (
      <Box sx={{ display: 'flex', gap: 1, marginTop: Margin }}>
        <Box sx={{ flex: 1 }}>
          <Typography fontSize={14} color="gray">
            平日プレイ時間帯
          </Typography>
          <Box>
            <Typography sx={typeSx}>
              {playtime1?.start || '未設定'} ~ {playtime1?.end || '未設定'}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography fontSize={14} color="gray">
            休日プレイ時間帯
          </Typography>
          <Box>
            <Typography sx={typeSx}>
              {playtime2?.start || '未設定'} ~ {playtime2?.end || '未設定'}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const Introduction: React.FC<{ children?: React.ReactNode }> = (props) => {
    return (
      <Box sx={{ marginTop: Margin }}>
        <Typography fontSize={14} color="gray">
          introduction
        </Typography>
        <Typography
          variant="body2"
          sx={{
            border: '1px solid gray',
            borderRadius: 1,
            p: 0.5,
            mt: 0.5,
            overflowWrap: 'break-word',
          }}
        >
          {introduction}
        </Typography>
      </Box>
    );
  };

  const CopyIdButton: React.FC = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: Margin * 2 }}
      >
        IDをコピー
      </Button>
    );
  };

  return (
    <Box sx={sx}>
      <Names />
      <Games />
      <PlayTime />
      <PlayStyle />
      <Introduction />
      <CopyIdButton />
      <Stack spacing={2}></Stack>
    </Box>
  );
}
