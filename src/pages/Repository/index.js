import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Navbar from '../../components/Navbar';
import DetailsCard from '../../components/DetailsCard';
import Footer from '../../components/Footer';

import { card, repos } from './dataFake';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      {/* Menu */}
      <Navbar />

      {/* Content */}
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <DetailsCard card={card} repos={repos} />
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
