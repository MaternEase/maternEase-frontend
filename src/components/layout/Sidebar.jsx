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
    <div  className={`fixed top-16 left-0 h-[calc(100%-4rem)] ${open ? 'w-64' : 'w-20'} bg-192A51 text-EEEEEE transition-width duration-300 flex flex-col`}
     style={{ backgroundColor: '#EEEEEE', color: '#192A51' }}>
      <div className="flex-1 overflow-y-auto">
        <List>
          <ListItem button onClick={() => handleSubMenuClick('clinics')}>
            <ListItemIcon>
              <Category className="text-EEEEEE" />
            </ListItemIcon>
            {open && <ListItemText primary="Clinics" />}
            {open && (subMenuOpen['clinics'] ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={subMenuOpen['clinics']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className="pl-12">
                <ListItemText primary="Clinic 1" />
              </ListItem>
              <ListItem button className="pl-12">
                <ListItemText primary="Clinic 2" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <Analytics className="text-EEEEEE" />
            </ListItemIcon>
            {open && <ListItemText primary="Mothers" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <History className="text-EEEEEE" />
            </ListItemIcon>
            {open && <ListItemText primary="Babies" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings className="text-EEEEEE" />
            </ListItemIcon>
            {open && <ListItemText primary="Reports" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings className="text-EEEEEE" />
            </ListItemIcon>
            {open && <ListItemText primary="Messages" />}
          </ListItem>
        </List>
      </div>
      <div className="p-3">
        <IconButton>
          <Logout className="text-EEEEEE" />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
