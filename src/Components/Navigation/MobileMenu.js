import React from 'react';
import { Link } from "react-router-dom";
import { MenuItem, Menu, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './GlobalNavStyles';

const MobileMenu = ({ 
  handleMainMenu, anchorMenuEl, openMenu, homePageLink, 
  architectsNav, developersList, handleClick, 
  handleMainClose, URLPath
}) =>
  <div>
    <IconButton
      aria-label="menu appbar"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMainMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorMenuEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={openMenu}
      onClose={handleMainClose}
    >
      <MenuItem onClick={handleClick}>
        <Link style={styles.menuLink} to={`${URLPath}/`}>
          {homePageLink}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClick}>
        <Link style={styles.menuLink} to={`${URLPath}/architects`}>
          {architectsNav}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClick}>
        <Link style={styles.menuLink} to={`${URLPath}/developers`}>
          {developersList}
        </Link>
      </MenuItem>
    </Menu>
  </div>


export default MobileMenu;