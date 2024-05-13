import { createTheme } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: blueGrey[900],
        dark: '#000',
        light: blueGrey[800],
        contrastText: blueGrey[200],
      },
      background: {
        default: '#000',
        paper: '#121',
      }
    },
  });