'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import DiscordProfileCard from '../../component/profcard';
import { testdata } from '../../component/後で消す';
const MotionBox = motion(Box);

export default function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 13 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 6,
          justifyItems: 'center',
        }}
      >
        {testdata.map((player, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
            sx={{
              width: '100%',
              boxSizing: 'border-box',
              paddingBottom: 4,
            }}
          >
            <DiscordProfileCard
              icon={player.icon}
              name={player.name}
              id={player.id}
              games={player.games}
              playtime1={player.playtime1}
              playtime2={player.playtime2}
              playstyle={player.playstyle}
              introduction={player.introduction}
              color={'black'}
            />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}

//あとで、プロフィール一覧はフェッチして取ってくるようにしないとね
