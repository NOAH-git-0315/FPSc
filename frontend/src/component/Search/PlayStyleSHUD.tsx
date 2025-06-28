import { SetSearchProps } from '@/component/Search/SearchHUD';
import { PlayStyle, playStyleList } from '@/lib/Array/PlayStyle';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from '@mui/material';

export default function PlayStyleSHUD({ setSearch }: SetSearchProps) {
  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean,
  ) => {
    const target = event.target as HTMLInputElement;
    const playstyleValue = target.name as PlayStyle;

    setSearch((prev) => {
      const updated = checked
        ? [...prev.playstyle, playstyleValue]
        : prev.playstyle.filter((r) => r !== playstyleValue);

      return { ...prev, playstyle: updated };
    });
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography>プレイスタイル</Typography>
      </Box>
      <FormGroup>
        {playStyleList.map((playStyle) => (
          <FormControlLabel
            control={<Checkbox />}
            key={playStyle}
            label={playStyle}
            onChange={handleChange}
            name={playStyle}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
