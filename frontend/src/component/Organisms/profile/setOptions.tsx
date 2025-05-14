import { useContext } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material';
import { AuthContext } from '@/component/templates/Auth';

export default function SetOptions() {
  const { userCard, setUserCard } = useContext(AuthContext);
  const option = userCard.option;
  const handleChange = (value: boolean, index: number) => {
    setUserCard((prev) => {
      const updatedOption = { ...prev.option };
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
        option: updatedOption,
      };
    });
  };

  return (
    <Box sx={{ display: 'flex', paddingLeft: 1, marginTop: 2 }}>
      <FormGroup sx={{ marginTop: 4 }}>
        <FormControlLabel
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
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={option.showProfile}
              onChange={(_, value) => {
                handleChange(value, 3);
              }}
            />
          }
          label={'プロフィールを非公開にする'}
        />
      </FormGroup>
    </Box>
  );
}
