import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Navbar from '~/components/Navbar';
import DetailsCard from '~/components/DetailsCard';
import Footer from '~/components/Footer';

import { show } from '~/services/api/users';
import api from '~/services/api/config';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Repository(props) {
  const [card, setCard] = useState({});
  const [repos, setRepos] = useState([]);

  const classes = useStyles();

  const { match } = props;

  useEffect(() => {
    (async () => {
      const { data: user } = await show(match.params.name);

      if (user) {
        setCard(user);

        const { data: repos } = await api.get(user.repos_url);

        if (repos) {
          setRepos(repos);
        }
      }
    })();
  }, []);

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
