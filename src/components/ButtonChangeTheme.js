import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function ButtonChangeTheme() {
  const classes = useStyles();

  return (
    <div className={classes.heroButtons}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button variant="contained" color="primary">
            Tema_<b>Dark</b>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Tema_<b>Light</b>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
