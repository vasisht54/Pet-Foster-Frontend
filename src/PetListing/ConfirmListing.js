import React from "react";
import { useHistory } from "react-router-dom";
import { CatListing } from "./CatListing";
import Header from "../components/Header";
import { Button, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 300;
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "10px 100px 10px 90px",
  },
  backButton: {
    marginTop: "20px",
  },
  profileImage: {
    width: drawerWidth,
  },
  paper: {
    width: "96%",
    display: "inline-block",
    padding: "20px",
    height: "100%",
  },
  center: {
    textAlign: "center",
  },
  alignRight: {
    textAlign: "right",
  },
  photoRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
  },
  imageTile: {
    border: " 3px solid lightgrey",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  label: {
    color: "darkgray",
  },
  margin: {
    marginTop: "0",
  },
  margin5: {
    marginTop: "20px",
  },
});

const ConfirmListing = () => {
  const history = useHistory();
  const classes = useStyles();
  // const pathname = window.location.pathname;

  return (
    <div style={{ padding: "0 20px" }}>
      {/* {!pathname.includes("/create") && ( */}
      <div>
        <Button
          onClick={() => {
            history.goBack();
          }}
          className={classes.backButton}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
      {/* )} */}
      <Grid container justify="center">
        <Header value="Confirmed Pet listing"></Header>
      </Grid>
      <CatListing />
    </div>
  );
};

ConfirmListing.propTypes = {};

export default ConfirmListing;
