'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/navigation';
import { AuthContext, initialUserCard } from '../Other/Auth';
import { Fragment, useContext, useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default function AccountDelete() {
  const [open, setOpen] = useState(false);
  const { setUserCard } = useContext(AuthContext);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    fetch(`${apiUrl}/api/delete`, {
      method: 'DELETE',
      credentials: 'include',
    });
    setOpen(false);
    router.push('/');
    setUserCard(initialUserCard);
  };

  return (
    <Fragment>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{ bgcolor: 'red' }}
      >
        アカウントを削除
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'FPScアカウントを削除しますか？'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            FPScアカウントを削除しますか？この操作は元に戻せません。
            <br />
            一時的にプロフィールを非公開にしたい場合は「プロフィールを公開する」のチェックを外してください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>はい</Button>
          <Button onClick={handleClose} autoFocus>
            いいえ
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
