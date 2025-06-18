'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/navigation';
import { AuthContext, initialUserCard } from '../Context/Auth';
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

  const handleDelete = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/delete`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || '削除に失敗しました');
      }

      setOpen(false);
      router.push('/');
      setUserCard(initialUserCard);
    } catch (e) {
      console.error('エラー:', e);
      alert(`削除失敗: ${(e as Error).message}`);
    }
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
