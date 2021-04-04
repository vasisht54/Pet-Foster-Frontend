import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory, useLocation } from "react-router-dom";
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
  home: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  homeIcon: {
    fontSize: "64px",
    marginLeft: "43px",
  },
  homeBtn: {
    position: "absolute",
    width: "150px",
    backgroundColor: "#3f51b5",
    padding: "0",
    marginTop: "14px",
    lineHeight: "normal",
  },
  active: {
    backgroundColor: "#002984",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const isLoggedIn = useSelector(state => state.isLoggedIn.value);
  const dispatch = useDispatch();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div className={classes.home}>
            <HomeIcon className={classes.homeIcon} />
            <Button
              onClick={() => history.push("/")}
              color="inherit"
              className={classes.homeBtn}
            >
              Bring Home A Pet
            </Button>
          </div>
          <>
            <div className={classes.flex}>
              <Button
                color="inherit"
                onClick={() =>
                  history.push(
                    isLoggedIn ? "/ViewFosterRequestForMyPet" : "/login"
                  )
                }
                className={
                  location.pathname === "/ViewFosterRequestForMyPet"
                    ? classes.active
                    : null
                }
              >
                View foster requests for my pets
              </Button>
              <Button
                color="inherit"
                onClick={() =>
                  history.push(isLoggedIn ? "/ViewFosterRequest" : "/login")
                }
                className={
                  location.pathname === "/ViewFosterRequest"
                    ? classes.active
                    : null
                }
              >
                My requests to foster
              </Button>
              <Button
                color="inherit"
                onClick={() =>
                  history.push(isLoggedIn ? "/fosterHistory" : "/login")
                }
                className={
                  location.pathname === "/fosterHistory" ? classes.active : null
                }
              >
                My foster history
              </Button>
            </div>
          </>
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
              <Button color="inherit" onClick={() => history.push("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => history.push("/register")}>
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
