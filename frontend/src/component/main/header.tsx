import { Box, Typography, Button } from '@mui/material';
import theme from '../../../theme';

export default function Header() {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '280px',
        height: '280px',
        filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))',
        zIndex: 10,
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.primary.main,
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white" p={2}>
          -FPSc
        </Typography>
        <Box display="flex" gap={2} p={2} />
      </Box>
    </Box>
  );
}
