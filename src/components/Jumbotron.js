import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ButtonChangeTheme from './ButtonChangeTheme';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Jumbotron(props) {
  const classes = useStyles();

  const { title, icon, content, changeThemeButtons } = props;

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {icon} {title}
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          {content}
        </Typography>
        {changeThemeButtons && <ButtonChangeTheme />}
      </Container>
    </div>
  );
}

// Default Props
Jumbotron.defaultProps = {
  icon: '',
  changeThemeButtons: false,
};

// PropTypes
Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  content: PropTypes.string.isRequired,
  changeThemeButtons: PropTypes.bool,
};
