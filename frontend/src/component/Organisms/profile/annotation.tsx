import { AuthContext } from '@/component/templates/Auth';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

export default function annotation() {
  const { userCard } = useContext(AuthContext);
  const option = userCard.option;

  return (
    <Box>
      {userCard.option.showGender && (
        <Typography>※性別が公開されます</Typography>
      )}
      {userCard.option.showAge && <Typography>※年齢が公開されます</Typography>}
      {userCard.option.showGenderToSameSex && (
        <Typography>
          ※プロフィールは同性（ユーザーの性別は自己申告）にのみ表示されます
        </Typography>
      )}
      {userCard.option.showProfile && (
        <Typography>※プロフィールは公開されます</Typography>
      )}
    </Box>
  );
}
