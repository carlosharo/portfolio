import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: blueGrey[900],
        dark: '#000',
        light: blueGrey[800],
        contrastText: 'white',
      },
      background: {
        default: '#000',
        paper: '#1d1c29', 
      }
    },
  });