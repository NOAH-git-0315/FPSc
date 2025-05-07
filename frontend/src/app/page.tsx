'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import DiscordProfileCard from '@/component/templates/profcard';
import { testdata } from '@/component/後で消す';
const MotionBox = motion(Box);

async function getUsers() {
  try {
    const response = await fetch('http://localhost:8080/users/all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}

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
