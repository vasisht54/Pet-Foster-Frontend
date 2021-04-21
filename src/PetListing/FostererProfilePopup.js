import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import ImageAvatar from "../components/ImageAvatar";
import Header from "../components/Header";

const FostererProfilePopup = ({ profile, setOpenDialog }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: "20px 0px 20px 40px",
      color: theme.palette.text.secondary,
    },
    actionButtons: {
      marginTop: "20px",
    },
  }));

  const FormRow = props => {
    return (
      <Grid container item xs={12}>
        <Grid item xs={5}>
          {props.label && (
            <Typography variant="subtitle1">{props.label}:</Typography>
          )}
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">{props.value}</Typography>
        </Grid>
      </Grid>
    );
  };

  const classes = useStyles();
  const [openAccept, setOpenAccept] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const handleAccept = () => {
    setDisabled(true);
    setOpenAccept(true);
  };

  const handleReject = () => {
    setDisabled(true);
    setOpenReject(false);
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container justify="space-between">
        <Grid item justify="center">
          <Header value={`${profile.name}'s Profile`}></Header>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={() => setOpenDialog(false)}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <ImageAvatar image={profile.image} name={profile.name} />
        <FormRow label="Name" value={profile.name} />
        <FormRow label="Phone Number" value={profile.phoneNum} />
        <FormRow label="Email" value={profile.email} />
        <FormRow label="Rating" value={profile.rating} />
        <FormRow label="Bio" value={profile.bio} />
      </Grid>
      <Grid container justify="center">
        <Grid
          item
          className={classes.actionButtons}
          container
          justify="space-evenly"
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAccept}
              disabled={disabled}
            >
              Accept
            </Button>
            <Dialog
              onClose={() => setOpenAccept(false)}
              aria-labelledby="customized-dialog-title"
              open={openAccept}
            >
              <DialogContent dividers>
                <Grid container item md={12}>
                  You have accepted a Fosterer's request!
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={() => setOpenAccept(false)}
                  color="primary"
                >
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpenReject(true)}
              disabled={disabled}
            >
              Reject
            </Button>
            <Dialog
              onClose={() => setOpenReject(false)}
              aria-labelledby="customized-dialog-title"
              open={openReject}
            >
              <DialogContent dividers>
                <Grid container item md={12}>
                  Are you sure you want to reject this request?
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={() => setOpenReject(false)}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button autoFocus onClick={handleReject} color="secondary">
                  Reject
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FostererProfilePopup;
