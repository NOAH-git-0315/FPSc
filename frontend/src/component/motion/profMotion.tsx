'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
export default function ProfMotion({ index }: { index: number }) {
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
  />;
}
