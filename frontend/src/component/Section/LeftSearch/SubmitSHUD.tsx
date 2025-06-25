import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { SetAndSearchProps } from '@/component/SearchHUD';
import FriendSearchAPI from '@/lib/FriendSearchAPI';
import { FriendsContext } from '@/component/Context/FriendsProvider';
import { User } from '@/app/type';

export default function SubmitSHUD({ Search }: SetAndSearchProps) {
  const context = React.useContext(FriendsContext);
  if (!context) {
    throw new Error('FriendsContext must be used within its Provider');
  }
  const { setUsers, page } = context;

  async function handleSubmit() {
    const res: User[] = await FriendSearchAPI(Search, page);
    setUsers(res as User[]);
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
        検索
      </Button>
    </Stack>
  );
}
