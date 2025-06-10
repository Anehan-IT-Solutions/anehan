import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
  }
  interface PaletteOptions {
    green?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#15803d', // green-700
      light: '#22c55e', // green-500
      dark: '#166534', // green-800
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#f0fdf4', // green-50
      dark: '#dcfce7', // green-100
      contrastText: '#15803d',
    },
    green: {
      main: '#15803d',
      light: '#22c55e',
      dark: '#166534',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'Agrandir, sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Agrandir, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Agrandir, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Agrandir, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Agrandir, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Agrandir, sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme; 