import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
    display: 'none',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
}));

export default function NavBar() {

  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            Covid-19 Tracker
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}