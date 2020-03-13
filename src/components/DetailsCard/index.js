import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
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
    background: '#fcfbfb',
    padding: '15px',
    margin: '3px',
    border: '0.5px dashed #d9d9d9',
    borderRadius: '10px',
  },
}));

/**
 * DetailsCard Component
 * @version 1.0
 * @author Lucas Dev
 * @description DetailsCard to navigation
 */

export default function DetailsCard(props) {
  const handleAddFavorito = card => {
    toast.success(`😀 ${card.name} adicionado ao favoritos.`);
  };

  const dot3 = (text, numberDot = 70) => {
    if (!text) {
      return 'Sem descrição';
    }

    if (text.length < numberDot) {
      return text;
    }

    return `${text.substring(0, 70)}...`;
  };

  const classes = useStyles();

  const { card, repos } = props;

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
            <Button
              size="small"
              color="secondary"
              onClick={() => handleAddFavorito(card)}
            >
              Favoritar? 💓
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Card className={classes.card}>
          {repos &&
            repos.map(r => (
              <CardContent key={r.id} className={classes.cardContentRepo}>
                <Typography gutterBottom variant="h5" component="h2">
                  {r.name}
                </Typography>
                <Typography>{dot3(r.description, 200)}</Typography>
              </CardContent>
            ))}
        </Card>
      </Grid>
    </>
  );
}

// PropTypes
DetailsCard.propTypes = {
  card: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
};
