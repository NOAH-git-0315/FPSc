import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    Margin: {
      pageTopMargin: number;
      sectionMargin: number;
      itemMargin: number;
    };
  }

  interface ThemeOptions {
    Margin?: {
      pageTopMargin?: number;
      sectionMargin?: number;
      itemMargin?: number;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: green,
  },
  Margin: {
    pageTopMargin: 32,
    sectionMargin: 24,
    itemMargin: 16,
  },
});

export default theme;
