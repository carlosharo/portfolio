import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, blueGrey, green, lightBlue, red } from "@mui/material/colors";
import { ReactNode, createContext, useMemo, useState } from "react";

interface CustomThemeProps {
  children: ReactNode
}

const darkTheme = {
  primary: {
    main: lightBlue[800],
    dark: lightBlue[900],
    light: lightBlue['A700'],
    contrastText: lightBlue['A100'],
  },
  secondary: {
    main: green[700],
    dark: green[800],
    light: green[400],
    contrastText: green['A700'],
  },  
  background: {
    default: '#000',
    paper: '#1e1e1e',
  },
  action: {
    hover: '#414141'
  },
}

const lightTheme = {
  primary: {
    main: blue[800],
    dark: blue[900],
    light: green['A700'],
    contrastText: blue[100],
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
    hover: blue[800]
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

