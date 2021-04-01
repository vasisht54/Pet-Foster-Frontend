import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const SuccessNotification = ({ message, open }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} 
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
};


