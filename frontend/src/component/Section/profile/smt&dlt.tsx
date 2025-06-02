import Submit from '@/component/Parts/submit';
import AccountDelete from '@/component/Parts/accountDelete';
import { Box } from '@mui/material';
export default function SubmitAndDelete() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Submit />
      <AccountDelete />
    </Box>
  );
}
