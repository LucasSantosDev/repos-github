import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHub from '@material-ui/icons/GitHub';
import CircularProgress from '@material-ui/core/CircularProgress';

import Navbar from '~/components/Navbar';
import Jumbotron from '~/components/Jumbotron';
import CardPicture from '~/components/CardPicture';
import Footer from '~/components/Footer';

import { list } from '~/services/api/users';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  loadingContent: {
    margin: 'auto',
  },
}));

export default function Main() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { data: users } = await list();

      if (users) {
        setCards(users);
      }

      setLoading(false);
    })();
  }, []);

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
            {loading ? (
              <div className={classes.loadingContent}>
                <CircularProgress size={60} color="primary" />
              </div>
            ) : (
              cards.map(card => <CardPicture key={`${card.id}`} card={card} />)
            )}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
