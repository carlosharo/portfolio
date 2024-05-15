import { createTheme } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1bb1b21',
        dark: grey[800],
        light: red[900],
        contrastText: grey[100],
      },
      secondary: {
        main: blue[900],
        dark: blue[900],
        light: blue[800],
        contrastText: blue[100],
      },
      background: {
        default: '#000',
        paper: '#1b1b21', 
      },
      action:{
        hover: '#260606'
      }
    },
  });