import React from 'react';

import { Language } from '@material-ui/icons';
import { MenuItem, Menu, IconButton } from '@material-ui/core';

const LanguageController = props =>
    <div>
        <IconButton
            title="Change language"
            aria-label="change language"
            aria-controls="menu-languages"
            aria-haspopup="true"
            onClick={props.handleMenu}
            color="inherit"
        >
            <Language />
        </IconButton>
        <Menu
            id="menu-languages"
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.open}
            onClose={props.handleClose}
        >
            <MenuItem data-language="ru" onClick={props.onClick}>RU</MenuItem>
            <MenuItem data-language="en" onClick={props.onClick}>EN</MenuItem>
            <MenuItem data-language="by" onClick={props.onClick}>BY</MenuItem>
        </Menu>
    </div>


export default LanguageController;