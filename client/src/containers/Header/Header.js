import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

import "./Header.scss";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
}));

function Header () {

  const classes = useStyles();

  return (
    <div>
      <AppBar className="header" position="static">
        <Typography className={classes.title} variant="h2" color="inherit" >
          HN News
        </Typography>
        <Typography className={classes.title} variant="h4" color="inherit">
          We love hacker news!
        </Typography>
        </AppBar>
    </div>
  )
};

export default Header;