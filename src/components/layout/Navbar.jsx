import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Badge } from '@mui/material';
import { Menu as MenuIcon, Mail as MailIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';

const Navbar = ({ toggleDrawer, isOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: 'width 0.3s',
        width: isOpen ? 'calc(100% - 250px)' : '100%',
        marginLeft: isOpen ? '250px' : '0',
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ marginRight: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MUI
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
