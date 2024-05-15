import { createTheme } from "@mui/material";
import { blue, blueGrey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1bb1b21',
        dark: '#191f21',
        light: red[900],
        contrastText: blueGrey[100],
      },
      secondary: {
        main: '#0c1621',
        dark: blue[900],
        light: '#2196f3',
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