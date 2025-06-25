import { useContext } from 'react';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
} from '@mui/material';
import { AuthContext } from '@/component/Context/Auth';

export default function SetOptions() {
  const { userCard, setUserCard } = useContext(AuthContext);
  const option = userCard.userOption;
  const handleChange = (value: boolean, index: number) => {
    setUserCard((prev) => {
      const updatedOption = { ...prev.userOption };
      switch (index) {
        case 0: {
          updatedOption.showGender = value;
          break;
        }
        case 1: {
          updatedOption.showAge = value;
          break;
        }
        case 2: {
          updatedOption.showGenderToSameSex = value;
          break;
        }
        case 3: {
          updatedOption.showProfile = value;
          break;
        }
      }
      return {
        ...prev,
        userOption: updatedOption,
      };
    });
  };

  return (
    <Box sx={{ display: 'flex', paddingLeft: 1, marginTop: 4 }}>
      <FormGroup>
        <Typography fontSize={14} color="gray">
          公開オプション
        </Typography>
        {/* <FormControlLabel
          control={
            <Checkbox
              checked={option.showGender}
              onChange={(_, value) => {
                handleChange(value, 0);
              }}
            />
          }
          label={'性別を公開する'}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={option.showAge}
              onChange={(_, value) => {
                handleChange(value, 1);
              }}
            />
          }
          label={'年齢を公開する'}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={option.showGenderToSameSex}
              onChange={(_, value) => {
                handleChange(value, 2);
              }}
            />
          }
          label={'同性にのみプロフィールを公開する'}
        /> */}
        <FormControlLabel
          control={
            <Checkbox
              checked={option.showProfile}
              onChange={(_, value) => {
                handleChange(value, 3);
              }}
            />
          }
          label={'プロフィールを公開する'}
        />
      </FormGroup>
    </Box>
  );
}
