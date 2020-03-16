import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Calendar from '@lls/react-light-calendar';
import Send from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import DateRange from '@material-ui/icons/DateRange';
import '@lls/react-light-calendar/dist/index.css';
// import Link from '@material-ui/core/Link';
import { toast } from 'react-toastify';
import { withStyles } from '@material-ui/core/styles';

import { dot3 } from '../../lib/utils';

const DAY_LABELS = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabádo',
  'Domingo',
];
const MONTH_LABELS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const styles = theme => ({
  card: {
    minHeight: '700px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardContentRepo: {
    flexGrow: '1',
    background: theme.palette.type === 'dark' ? '#313546' : '#dadff1',
    padding: '15px',
    margin: '3px',
  },
  rangeDate: {
    width: '95%',
    margin: '2.5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePicker: {
    position: 'absolute',
    width: '0 !important',
    '& div.rlc-calendar': {
      background: '#e6e6e6',
    },
  },
  inputDate: {
    width: '100%',
    '& > div': {
      width: '100%',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  loadingContent: {
    margin: 'auto',
  },
});

/**
 * DetailsCard Component
 * @version 1.0
 * @author Lucas Dev
 * @description DetailsCard to navigation
 */

class DetailsCard extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    const startDate = date.getTime();

    this.state = {
      startDate,
      endDate: new Date(startDate).setDate(date.getDate() + 6),
      showCalendar: false,
      isOpen: false,
      loading: false,
      ready: false,
      favorite: 'default',
    };

    this.handleChange = (startDate, endDate) => {
      this.setState({ startDate, endDate });
    };

    this.handleAddFavorito = card => {
      const { favorite } = this.state;

      // Removendo todos os toasts
      toast.dismiss();

      if (favorite === 'default') {
        this.setState({ favorite: 'secondary' });

        toast.success(`😀 ${card.name} - Adicionado ao favoritos...`);
      } else {
        this.setState({ favorite: 'default' });

        toast.info(`😀 ${card.name} - Removendo dos favoritos...`);
      }
    };

    this.open = () => this.setState({ isOpen: true });

    this.close = e => {
      !e.currentTarget.contains(window.document.activeElement) &&
        this.setState({ isOpen: false });
    };

    this.handleSubmit = () => {
      // Removendo todos os toasts
      toast.dismiss();

      this.setState({ loading: true });

      setTimeout(() => {
        this.setState({ loading: false });
      }, 5000);
    };
  }

  componentDidMount() {
    this.setState({ ready: true });
  }

  render() {
    const { classes, card, repos } = this.props;

    const { ready, loading, favorite, startDate, endDate, isOpen } = this.state;

    const start = new Date(startDate).toLocaleDateString('pt-BR', {
      timeZone: 'UTC',
    });
    const end = new Date(endDate).toLocaleDateString('pt-BR', {
      timeZone: 'UTC',
    });

    return (
      <>
        <Grid item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={card.img}
              title={card.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.name}
              </Typography>
              <Typography>{card.description}</Typography>
            </CardContent>
            <CardActions>
              <IconButton
                color={favorite}
                onClick={() => this.handleAddFavorito(card)}
                title="Adicionar aos Favoritos"
              >
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Card className={classes.card}>
            <div className={classes.rangeDate}>
              <div
                className={classes.inputDate}
                tabIndex={0}
                onFocus={this.open}
                onBlur={this.close}
              >
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Filtro de Data dos Repositórios
                  </InputLabel>
                  <Input
                    value={`${start} - ${end}`}
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <DateRange />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {isOpen && (
                  <div className={classes.datePicker}>
                    <Calendar
                      startDate={startDate}
                      endDate={endDate}
                      onChange={this.handleChange}
                      dayLabels={DAY_LABELS}
                      monthLabels={MONTH_LABELS}
                      range
                    />
                  </div>
                )}
              </div>
              <Button
                onClick={this.handleSubmit}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={
                  !loading ? (
                    <Send />
                  ) : (
                    <CircularProgress size={20} color="#FFF" />
                  )
                }
              >
                {!loading ? `Buscar` : `Buscando`}
              </Button>
            </div>
            {!loading ? (
              repos &&
              repos.map(r => (
                <Fade key={r.id} in={ready}>
                  <CardContent className={classes.cardContentRepo}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {r.name}
                    </Typography>
                    <Typography>{dot3(r.description, 200)}</Typography>
                  </CardContent>
                </Fade>
              ))
            ) : (
              <div className={classes.loadingContent}>
                <CircularProgress size={60} color="#FFF" />
              </div>
            )}
          </Card>
        </Grid>
      </>
    );
  }
}

// PropTypes
DetailsCard.propTypes = {
  card: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsCard);
