import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePage from './react-componoents/homePage';

// 创建自定义主题
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#1f242d',  // 更改为深色背景
      paper: '#1f242d',    // 更改为深色背景
    },
    text: {
      primary: '#ffffff',  // 文字颜色改为白色
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      color: '#ffffff',    // 标题文字颜色改为白色
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1f242d',
          color: '#ffffff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1f242d',
          color: '#ffffff',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
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
