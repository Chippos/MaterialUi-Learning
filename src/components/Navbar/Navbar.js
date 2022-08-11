import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/AccountBox';
import NavbarItems from './consts/NavbarItems';
import navbarStyles from './styles';
import { useParams, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {NavbarItems.map((navitems) => (
            <ListItem key={navitems.id} onClick={()=> navigate(navitems.route)} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>
                  {navitems.icon}
                </ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={navitems.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={navbarStyles.navDivider} />
        <List>
          {['Profile', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>
                  {index === 0 ? <ProfileIcon /> : <SettingsIcon />}
                </ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
