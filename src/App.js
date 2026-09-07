import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePage from './react-componoents/homePage';

// Apple-inspired light theme: white/off-white surfaces, near-black text,
// and the signature Apple "system" blue for links and CTAs.
const APPLE_FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0071e3',
    },
    secondary: {
      main: '#1d1d1f',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f7',
    },
    text: {
      primary: '#1d1d1f',
      secondary: '#86868b',
    },
  },
  typography: {
    fontFamily: APPLE_FONT_STACK,
    h6: {
      fontWeight: 600,
      color: '#1d1d1f',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
          color: '#1d1d1f',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
