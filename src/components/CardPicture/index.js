import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import GitHub from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';

import { dot3 } from '../../lib/utils';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

/**
 * CardPicture Component
 * @version 1.0
 * @author Lucas Dev
 * @description CardPicture to navigation
 */

export default function CardPicture(props) {
  const [favorite, setFavorite] = useState('default');

  const handleClick = card => {
    // Removendo todos os toasts
    toast.dismiss();

    if (favorite === 'default') {
      setFavorite('secondary');

      toast.success(`😀 ${card.name} - Adicionado ao favoritos...`);
    } else {
      setFavorite('default');

      toast.info(`😀 ${card.name} - Removendo dos favoritos...`);
    }
  };

  const classes = useStyles();

  const { card } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
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
          <Typography>{dot3(card.description)}</Typography>
        </CardContent>
        <CardActions>
          <Link color="inherit" href={`/repository/${card.id}`}>
            <IconButton title="Ver Detalhes">
              <GitHub />
            </IconButton>
          </Link>
          <IconButton
            color={favorite}
            onClick={() => handleClick(card)}
            title="Adicionar aos Favoritos"
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

// PropTypes
CardPicture.propTypes = {
  card: PropTypes.object.isRequired,
};
