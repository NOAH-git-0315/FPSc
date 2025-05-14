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

const genders = ['男性', '女性', 'その他'];

export default function SetAge() {
  const [gen, setGen] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setGen(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: 100 }}>
      <InputLabel id="gen-label">年齢</InputLabel>
      <Select
        labelId="gen-label"
        id="gen-select"
        value={gen}
        onChange={handleChange}
        input={<OutlinedInput label="Gender" />}
        MenuProps={MenuProps}
      >
        {genders.map((a) => (
          <MenuItem key={a} value={a.toString()}>
            {a}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
