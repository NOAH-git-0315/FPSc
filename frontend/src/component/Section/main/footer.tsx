import { standard } from '@/app/standard';
import { Box, Typography, SxProps, Theme } from '@mui/material';

export default function Footer() {
  const sxStyles: SxProps<Theme> = {
    position: 'fixed',
    width: '280px',
    height: '280px',
    backgroundColor: standard.color.main,
    clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)',
    boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.2)',
    borderTopLeftRadius: '2rem',
    zIndex: 10,
    bottom: '0px',
    right: '0px',
    display: 'flex',
  };

  return (
    <Box sx={sxStyles}>
      <Typography
        variant="body2"
        color="white"
        sx={{ position: 'absolute', bottom: 6, right: 12 }}
      >
        © 2025 NOAH. All rights reserved.
      </Typography>
    </Box>
  );
}
