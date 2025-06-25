import { AuthContext } from '@/component/Context/Auth';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

export default function Annotation() {
  const { userCard } = useContext(AuthContext);
  const option = userCard.userOption;

  return (
    <Box sx={{ marginTop: 2 }}>
      {/* {userCard.option.showGender && (
        <Typography>※性別が公開されます</Typography>
      )}
      {userCard.option.showAge && <Typography>※年齢が公開されます</Typography>}
      {userCard.option.showGenderToSameSex && (
        <Typography>※プロフィールは同性にのみ表示されます</Typography>
      )} */}
      {userCard.userOption.showProfile && (
        <Typography>※プロフィールは公開されます</Typography>
      )}
    </Box>
  );
}
