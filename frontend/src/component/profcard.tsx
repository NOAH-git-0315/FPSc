'use client';
import { User } from '@/app/type';
import { TIME_LIST } from '@/lib/Array/Time';
import { Box, Avatar, Typography, Button, Stack } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { style } from '@/app/standard';
import { forwardRef, useEffect, useRef, useState } from 'react';

const Margin = 1;

const getPlaytime = (playtime: string[]) => {
  return `${playtime[0]} ~ ${playtime[playtime.length - 1]}`;
};

export const DiscordProfileCard = forwardRef<
  HTMLDivElement,
  { user: User; lastLoginAt?: string }
>(({ user, lastLoginAt }, ref) => {
  const icon = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [height, setHeight] = useState(420);
  const [isOpend, setIsOpend] = useState(false);

  function Onclick() {
    if (isOpend) {
      setIsOpend(false);
    } else {
      setIsOpend(true);
    }
  }

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpend) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(420);
    }
  }, [isOpend]);

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
          <Box sx={{ display: 'flex' }}>
            <Typography sx={style.subFont}>name</Typography>
            <Typography sx={{ ...style.subFont, ml: 16 }}>
              {lastLoginAt}
            </Typography>
          </Box>
          <Typography variant="h6">{user.globalName}</Typography>
          <Typography fontSize={14} color="gray">
            {user.name}
          </Typography>
        </Box>
      </Box>
    );
  };

  const Games: React.FC = () => {
    if (user.userInfo.games.length === 0) return null;
    return (
      <Box sx={{ marginTop: Margin }}>
        <Typography fontSize={14} color="gray">
          game | rank
        </Typography>
        {user.userInfo.games.map((game, index) => (
          <Typography key={index}>
            {game.title} | {game.rank}
          </Typography>
        ))}
      </Box>
    );
  };

  const PlayTime: React.FC = () => {
    const typeSx = { border: '1px solid gray', borderRadius: 1, p: 0.5 };
    return (
      <Box sx={{ display: 'flex', gap: 1, marginTop: Margin }}>
        {TIME_LIST.includes(
          user.userInfo.playtime1[0] as (typeof TIME_LIST)[number],
        ) && (
          <Box sx={{ flex: 1 }}>
            <Typography fontSize={14} color="gray">
              平日プレイ時間帯
            </Typography>
            <Typography sx={typeSx}>
              {getPlaytime(user.userInfo.playtime1)}
            </Typography>
          </Box>
        )}
        {TIME_LIST.includes(
          user.userInfo.playtime2[0] as (typeof TIME_LIST)[number],
        ) && (
          <Box sx={{ flex: 1 }}>
            <Typography fontSize={14} color="gray">
              休日プレイ時間帯
            </Typography>
            <Typography sx={typeSx}>
              {getPlaytime(user.userInfo.playtime2)}
            </Typography>
          </Box>
        )}
      </Box>
    );
  };

  const PlayStyle: React.FC = () => {
    if (user.userInfo.playstyle.length === 0) return null;
    return (
      <Box sx={{ marginTop: Margin }}>
        <Typography fontSize={14} color="gray">
          playstyle
        </Typography>
        <Typography sx={{ border: '1px solid gray', borderRadius: 1, p: 0.5 }}>
          {user.userInfo.playstyle.join(', ')}
        </Typography>
      </Box>
    );
  };
  const Introduction: React.FC = () => {
    if (!user.userInfo.introduction) return null;
    return (
      <Box sx={{ mt: Margin, mb: 'auto' }}>
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
          {user.userInfo.introduction}
        </Typography>
        <Box sx={{ height: 110, backgroundColor: '#2f3136' }} />
      </Box>
    );
  };

  const CopyIdButton: React.FC<{ ID: string }> = ({ ID }) => {
    const sx = {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
    return (
      <Box sx={sx}>
        <Box
          onClick={Onclick}
          sx={{
            width: '100%',
            height: 60,
            background:
              'linear-gradient(to bottom, rgba(47,49,54,0.3) 0%, rgba(47,49,54,1) 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
          {isOpend ? (
            <ArrowDropUpIcon
              sx={{
                opacity: 1,
                transform: 'translateX(-50%)',
                fontSize: '2rem',
                color: isHovered ? '#1565C0' : 'white',
              }}
            />
          ) : (
            <ArrowDropDownIcon
              sx={{
                opacity: 1,
                transform: 'translateX(-50%)',
                fontSize: '2rem',
                color: isHovered ? '#1565C0' : 'white',
              }}
            />
          )}
        </Box>
        <Box sx={{ width: '100%', height: 10, backgroundColor: '#2f3136' }} />
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#2f3136',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigator.clipboard.writeText(ID)}
            sx={{ width: '90%', height: 40 }}
          >
            IDをコピー
          </Button>
          <Box sx={{ height: 10, backgroundColor: '#2f3136' }} />
        </Box>
      </Box>
    );
  };

  const sx = {
    position: 'relative',
    overflow: 'hidden',
    width: 330,
    height,
    bgcolor: '#2f3136',
    color: 'white',
    borderRadius: 2,
    p: 2,
    boxShadow: 3,
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    transition: 'height 0.3s ease',
  };

  return (
    <Box
      sx={sx}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box ref={contentRef}>
        <Names />
        <Games />
        <PlayTime />
        <PlayStyle />
        <Introduction />
        <CopyIdButton ID={user.id ?? ''} />
        <Stack spacing={2}></Stack>
      </Box>
    </Box>
  );
});
