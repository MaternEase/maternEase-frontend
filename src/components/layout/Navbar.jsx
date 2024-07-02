import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Menu as MenuIcon, Notifications, AccountCircle } from '@mui/icons-material';
import logo from '../../assets/images/logo.jpg'; // Import the logo


const Navbar = ({ handleDrawerToggle }) => {
  return (
    <AppBar position="fixed" className="bg-gray-800" style={{ width: '100%', height:'9%' }}>
      <Toolbar>
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="mr-2"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 mr-2" />
                <span>CodingLab</span>
              </div>
            </Typography>
          </div>
          <div className="flex items-center">
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
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
