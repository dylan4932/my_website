import React, { useState } from 'react';
import './index.css';
import HomeContent from './homeContent';
import AboutContent from './aboutContent';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HomeContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' }
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text} 
          component="a" 
          href={item.href}
          onClick={() => setMobileOpen(false)}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      width: '100%',
      overflowX: 'hidden'
    }}>
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dylan4932 - <span style={{ color: theme.palette.primary.main }}>Portfolio</span>
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.text}
                  component="a"
                  href={item.href}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    position: 'relative',
                    '&:hover': {
                      '&::after': {
                        width: '100%'
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: 0,
                      height: 2,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            border: 'none',
            mt: '56px', // 为顶部工具栏留出空间
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ 
        flexGrow: 1, 
        width: '100%',
        pt: { xs: 7, sm: 8 },
        px: { xs: 0, sm: 0 }, // 移除左右padding
        m: 0,
        overflowX: 'hidden'
      }}>
        <div className='profolio-container'>
          <HomeContent />
          <AboutContent />
        </div>
      </Box>
    </Box>
  );
};

export default HomeContainer;