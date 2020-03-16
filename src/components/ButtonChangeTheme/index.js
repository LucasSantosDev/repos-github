import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

/**
 * ButtonChangeTheme Component
 * @version 1.0
 * @author Lucas Dev
 * @description ButtonChangeTheme to navigation
 */

export default function ButtonChangeTheme() {
  const classes = useStyles();

  const changeTheme = theme => {
    localStorage.setItem('theme', theme);

    window.location.reload(false);
  };

  return (
    <div className={classes.heroButtons}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button
            onClick={() => changeTheme('dark')}
            variant="contained"
            color="primary"
          >
            Tema_<b>Dark</b>
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => changeTheme('light')}
            variant="outlined"
            color="primary"
          >
            Tema_<b>Light</b>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
