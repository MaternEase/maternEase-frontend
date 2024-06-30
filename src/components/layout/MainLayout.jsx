import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar toggleDrawer={toggleDrawer} isOpen={open} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin-left 0.3s',
          marginLeft: open ? '250px' : '0',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
