import Submit from '@/component/Molecules/submit';
import AccountDelete from '@/component/Molecules/accountDelete';
import { Box } from '@mui/material';
export default function SubmitAndDelete() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Submit />
      <AccountDelete />
    </Box>
  );
}
