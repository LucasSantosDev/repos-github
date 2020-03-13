import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ButtonChangeTheme from '../ButtonChangeTheme';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  header: {
    fontSize: '42px',
  },
}));

/**
 * Jumbotron Component
 * @version 1.0
 * @author Lucas Dev
 * @description Jumbotron to navigation
 */

export default function Jumbotron(props) {
  const classes = useStyles();

  const { title, icon, content, changeThemeButtons } = props;

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          className={classes.header}
          component="h4"
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
  /** Title of Jumbotron */
  title: PropTypes.string.isRequired,
  /** Icon of Jumbotron */
  icon: PropTypes.any,
  /** Content of Jumbotron */
  content: PropTypes.string.isRequired,
  /** Buttons (Change theme) of Jumbotron */
  changeThemeButtons: PropTypes.bool,
};
