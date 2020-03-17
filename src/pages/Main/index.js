import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHub from '@material-ui/icons/GitHub';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';

import Navbar from '~/components/Navbar';
import Jumbotron from '~/components/Jumbotron';
import CardPicture from '~/components/CardPicture';
import Footer from '~/components/Footer';

import { list, show } from '~/services/api/users';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  loadingContent: {
    margin: 'auto',
  },
  formSearchRepo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0px 17px 30px 0px',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function Main() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  const classes = useStyles();

  const handleChange = e => setFilter(e.target.value);

  const handleSubmit = async e => {
    // Removendo todos os toasts
    toast.dismiss();

    setLoading(true);

    try {
      const { data: users } = await show(filter);

      if (users) {
        setCards([users]);
      }
    } catch (err) {
      console.log('Exception > ', err);

      toast.info('Nenhum user encontrado');
    }

    setLoading(false);
  };

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
          <Grid container className={classes.formSearchRepo} spacing={4}>
            <Paper component="div" className={classes.root}>
              <InputBase
                onChange={e => handleChange(e)}
                className={classes.input}
                placeholder="Search User GitHub"
                inputProps={{ 'aria-label': 'search user github' }}
              />
              <IconButton
                type="button"
                onClick={e => handleSubmit(e)}
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
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
