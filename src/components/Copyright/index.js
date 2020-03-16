import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/**
 * Copyright Component
 * @version 1.0
 * @author Lucas Dev
 * @description Copyright to navigation
 */

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://thinkso.com.br/">
        Think So!
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
}
