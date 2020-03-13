import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ModalNavbar from '../ModalNavbar';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  logo: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

/**
 * Navbar Component
 * @version 1.0
 * @author Lucas Dev
 * @description Navbar to navigation
 */

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography
            className={classes.logo}
            variant="h6"
            color="inherit"
            noWrap
          >
            <img
              width="200px"
              alt="Think So!"
              src="http://thinkso.com.br/application/views/images/big-thinkso.png"
            />
          </Typography>
        </div>
        <div>
          <ModalNavbar />
        </div>
      </Toolbar>
    </AppBar>
  );
}
