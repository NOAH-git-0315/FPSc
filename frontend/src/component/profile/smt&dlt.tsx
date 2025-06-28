import Submit from '@/component/profile/parts/submit';
import AccountDelete from '@/component/profile/parts/accountDelete';
import { Box } from '@mui/material';
export default function SubmitAndDelete() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Submit />
      <AccountDelete />
    </Box>
  );
}
