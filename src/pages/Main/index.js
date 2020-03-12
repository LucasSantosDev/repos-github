import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHub from '@material-ui/icons/GitHub';

import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import CardPicture from '../../components/CardPicture';
import Footer from '../../components/Footer';

import cards from './dataFake';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Main() {
  const classes = useStyles();

  const contentJumbotron = `O projeto Request Repos foi criado com intuito de
  utilizar várias tecnologias, como: ReactJS, TypeScript, Netlify, CI/CD`;

  return (
    <>
      <CssBaseline />

      {/* Menu */}
      <Navbar />

      {/* Content */}
      <main>
        <Jumbotron
          title="RequestRepos"
          icon={<GitHub fontSize="large" />}
          content={contentJumbotron}
          changeThemeButtons
        />

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <CardPicture key={card} card={card} />
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
