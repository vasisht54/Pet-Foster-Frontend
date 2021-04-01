import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/LoginSlice";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexGrow: "1",
    justifyContent: "space-evenly",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  accountCircle: {
    cursor: "pointer",
  },
  fosterHistoryButton: {},
}));

export default function Navbar() {
  const classes = useStyles();
  const isLoggedIn = useSelector(state => state.isLoggedIn.value);
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Button onClick={e => handleHref(e, "/")} color="inherit">
            Bring Home A Pet
          </Button>
          {isLoggedIn && (
            <>
              <div className={classes.flex}>
                <Button
                  color="inherit"
                  onClick={e => handleHref(e, "/ViewFosterRequestForMyPet")}
                >
                  View foster requests for my pets
                </Button>
                <Button
                  color="inherit"
                  onClick={e => handleHref(e, "/ViewFosterRequest")}
                >
                  My requests to foster
                </Button>
                <Button
                  color="inherit"
                  onClick={e => handleHref(e, "/fosterHistory")}
                >
                  My foster history
                </Button>
              </div>
            </>
          )}
          {isLoggedIn ? (
            <>
              <AccountCircle
                className={classes.accountCircle}
                role="button"
                onClick={handleClick}
                size="large"
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Edit profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              <Button color="inherit" onClick={e => handleHref(e, "/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={e => handleHref(e, "/register")}>
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
