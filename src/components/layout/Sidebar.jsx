import React, { useState } from 'react';
import { Category, Analytics, History, Settings, Logout } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Sidebar = ({ open }) => {
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const handleSubMenuClick = (menu) => {
    setSubMenuOpen({ ...subMenuOpen, [menu]: !subMenuOpen[menu] });
  };

  return (
    <div className={`fixed top-16 left-0 h-[calc(100%-4rem)] ${open ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-width duration-300 flex flex-col`}>
      <div className="flex-1 overflow-y-auto">
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
      </div>
      <div className="p-3">
        <IconButton>
          <Logout className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
