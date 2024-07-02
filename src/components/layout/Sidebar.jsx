import React, { useState } from 'react';
import { MenuOpen, Dashboard, Category, Analytics, History, Settings, Logout } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Avatar, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Sidebar = ({ open }) => {
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const handleSubMenuClick = (menu) => {
    setSubMenuOpen({ ...subMenuOpen, [menu]: !subMenuOpen[menu] });
  };

  return (
    <div className={`fixed top-16 left-0 h-full ${open ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-width duration-300`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Dashboard />
          {open && <span className="ml-2 text-xl font-bold">CodingLab</span>}
        </div>
      </div>
      <List>
        <ListItem button onClick={() => handleSubMenuClick('category')}>
          <ListItemIcon>
            <Category className="text-white" />
          </ListItemIcon>
          {open && <ListItemText primary="Category" />}
          {open && (subMenuOpen['category'] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        <Collapse in={subMenuOpen['category']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="pl-12">
              <ListItemText primary="HTML & CSS" />
            </ListItem>
            <ListItem button className="pl-12">
              <ListItemText primary="JavaScript" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <Analytics className="text-white" />
          </ListItemIcon>
          {open && <ListItemText primary="Analytics" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <History className="text-white" />
          </ListItemIcon>
          {open && <ListItemText primary="History" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Settings className="text-white" />
          </ListItemIcon>
          {open && <ListItemText primary="Settings" />}
        </ListItem>
      </List>
      <div className="absolute bottom-0 flex items-center w-full p-4">
        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
        {open && (
          <div className="ml-4">
            <div className="text-sm">Prem Shahi</div>
            <div className="text-xs text-gray-400">Web Designer</div>
          </div>
        )}
        <IconButton>
          <Logout className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
