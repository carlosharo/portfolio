import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, blueGrey, green, lightBlue, red } from "@mui/material/colors";
import { ReactNode, createContext, useMemo, useState } from "react";

interface CustomThemeProps {
  children: ReactNode
}

const darkTheme = {
  primary: {
    main: lightBlue[900],
    dark: '#17272f',
    light: red['A700'],
    contrastText: blueGrey[100],
  },
  secondary: {
    main: blueGrey[100],
    dark: blue[900],
    light: '#2196f3',
    contrastText: blue[100],
  },
  background: {
    default: '#000',
    paper: '#1b1b21',
  },
  action: {
    hover: '#260606'
  },
}

const lightTheme = {
  primary: {
    main: blue[800],
    dark: '#dfdfdf',
    light: green['A700'],
    contrastText: blueGrey[900],
  },
  secondary: {
    main: '#fff',
    dark: blue[900],
    light: '#2196f3',
    contrastText: blue[100],
  },
  background: {
    default: '#fff',
    paper: blue[900],
  },
  action: {
    hover: blueGrey[100]
  }
}

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const CustomTheme = ({ children }: CustomThemeProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? {...lightTheme} : {...darkTheme})
    },
  });
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

