import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material';

const optionLs = [
  { label: '性別を公開する', def: false },
  { label: '年齢を公開する', def: false },
  { label: '同性にのみプロフィールを公開する', def: false },
  { label: 'プロフィールを非公開にする', def: false },
];

type OptionLs = typeof optionLs;
type idx = keyof OptionLs;

export default function SetOptions() {
  const [checkedState, setCheckedState] = useState(
    optionLs.map((option) => option.def),
  );

  const handleChange =
    (index: idx) => (event: React.MouseEvent<HTMLButtonElement>) => {
      const newState = [...checkedState];
      newState[index] = event.target.checked;
      setCheckedState(newState);
    };

  return (
    <Box sx={{ display: 'flex', paddingLeft: 1, marginTop: 2 }}>
      <FormGroup sx={{ marginTop: 4 }}>
        {optionLs.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkedState[index]}
                onChange={handleChange(index)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
