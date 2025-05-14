import { Button, Snackbar } from '@mui/material';

export default function AccountDelete() {
  return (
    <>
      <Button
        onClick={console.log}
        variant="contained"
        sx={{ marginTop: 2, bgcolor: 'red' }}
      >
        アカウントを削除
      </Button>
    </>
  );
}
