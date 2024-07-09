import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Menu as MenuIcon, Notifications, AccountCircle } from '@mui/icons-material';
import logo from '../../assets/images/logo4.png'; // Import the logo

const Navbar = ({ handleDrawerToggle }) => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#EEEEEE', width: '100%', height: '9%' }}elevation={0}>
      <Toolbar>
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <IconButton
              color='192A51'
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="mr-2"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-12 mr-2 w-15" />
                <span style={{ color: '#192A51', fontWeight: 'bold', fontSize: '1.5rem' }}>MaternEase</span>
              </div>
            </Typography>
          </div>
          <div className="flex items-center">
            <IconButton color='192A51'>
              <Notifications />
            </IconButton>
            <IconButton color='192A51'>
              <AccountCircle />
            </IconButton>
            <Avatar alt="User" src="/static/images/avatar/1.jpg" className="ml-2" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
