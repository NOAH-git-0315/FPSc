import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const ages = Array.from({ length: 100 - 18 + 1 }, (_, i) => i + 18);

export default function SetAge() {
  const [age, setAge] = React.useState<string>(''); // stringで受け取る

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: 100 }}>
      <InputLabel id="age-label">年齢</InputLabel>
      <Select
        labelId="age-label"
        id="age-select"
        value={age}
        onChange={handleChange}
        input={<OutlinedInput label="Age" />}
        MenuProps={MenuProps}
      >
        {ages.map((a) => (
          <MenuItem key={a} value={a.toString()}>
            {a}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
