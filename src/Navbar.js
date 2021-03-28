import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  accountCircle: {
    cursor: 'pointer',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHref = (event, route) => {
    event.preventDefault();
    history.push(route);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Button onClick={e => handleHref(e, '/')} color='inherit'>
            Bring Home A Pet
          </Button>
          <Typography className={classes.title}></Typography>
          {loggedIn ? (
            <>
              <AccountCircle
                className={classes.accountCircle}
                role='button'
                onClick={handleClick}
                size='large'
              />
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Edit profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color='inherit' onClick={e => handleHref(e, '/login')}>
                Login
              </Button>
              <Button color='inherit' onClick={e => handleHref(e, '/register')}>
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
