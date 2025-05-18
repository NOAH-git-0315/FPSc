import { User } from '@/app/type';
import { Box, Avatar, Typography, Button, Stack } from '@mui/material';

const sx = {
  width: 330,
  bgcolor: '#2f3136',
  color: 'white',
  borderRadius: 2,
  p: 2,
  boxShadow: 3,
  alignSelf: 'flex-start',
};

const Margin = 1;

const getPlaytime = (playtime: string[]) => {
  if (playtime && playtime.length >= 2) {
    return `${playtime[0]} ~ ${playtime[playtime.length - 1]}`;
  } else {
    return '未設定';
  }
};

export default function DiscordProfileCard(props: User) {
  const {
    userAuth: { id, avatar, name, globalName },
    userInfo: {
      games = [],
      playtime1 = [],
      playtime2 = [],
      playstyle = [],
      introduction = '',
    },
  } = props;

  const icon = `https://cdn.discordapp.com/avatars/${id}/${avatar}`;

  const Names: React.FC = () => {
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

  const Games: React.FC = () => {
    if (games.length === 0) return null;
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

  const PlayStyle: React.FC = () => {
    if (playstyle.length === 0) return null;
    return (
      <Box sx={{ flex: 1, marginTop: Margin }}>
        <Typography fontSize={14} color="gray">
          playstyle
        </Typography>
        <Typography sx={{ border: '1px solid gray', borderRadius: 1, p: 0.5 }}>
          {playstyle.join(', ')}
        </Typography>
      </Box>
    );
  };

  const PlayTime: React.FC = () => {
    const typeSx = { border: '1px solid gray', borderRadius: 1, p: 0.5 };
    return (
      <Box sx={{ display: 'flex', gap: 1, marginTop: Margin }}>
        {playtime1.length > 0 && (
          <Box sx={{ flex: 1 }}>
            <Typography fontSize={14} color="gray">
              平日プレイ時間帯
            </Typography>
            <Typography sx={typeSx}>{getPlaytime(playtime1)}</Typography>
          </Box>
        )}
        {playtime2.length > 0 && (
          <Box sx={{ flex: 1 }}>
            <Typography fontSize={14} color="gray">
              休日プレイ時間帯
            </Typography>
            <Typography sx={typeSx}>{getPlaytime(playtime2)}</Typography>
          </Box>
        )}
      </Box>
    );
  };

  const Introduction: React.FC = () => {
    if (!introduction) return null;
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

  const CopyIdButton: React.FC<{ ID: string }> = ({ ID }) => {
    return (
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => navigator.clipboard.writeText(ID)}
        sx={{ marginTop: Margin * 2, bottom: 2 }}
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
      <CopyIdButton ID={name ?? ''} />
      <Stack spacing={2}></Stack>
    </Box>
  );
}
