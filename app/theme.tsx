import { createTheme } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1bb1b21',
        dark: grey[900],
        light: grey[800],
        contrastText: grey[100],
      },
      secondary: {
        main: '#f00',
        dark: blueGrey[900],
        light: blueGrey[800],
        contrastText: blueGrey[100],
      },
      background: {
        default: '#000',
        paper: '#1b1b21', 
      }
    },
  });