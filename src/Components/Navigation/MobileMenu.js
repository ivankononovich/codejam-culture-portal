import React from 'react';
import { Link } from "react-router-dom";
import { MenuItem, Menu, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './GlobalNavStyles';

const MobileMenu = ({
  handleMainMenu, anchorMenuEl, openMenu, homePageLink,
  architectsNav, developersList, handleClick,
  handleMainClose
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
      <Link style={styles.menuLink} to='/'>
        <MenuItem onClick={handleClick}>
          {homePageLink}
        </MenuItem>
      </Link>
      <Link style={styles.menuLink} to='/architects'>
        <MenuItem onClick={handleClick}>
          {architectsNav}
        </MenuItem>
      </Link>
      <Link style={styles.menuLink} to='/developers'>
        <MenuItem onClick={handleClick}>
          {developersList}
        </MenuItem>
      </Link>
    </Menu>
  </div>


export default MobileMenu;
