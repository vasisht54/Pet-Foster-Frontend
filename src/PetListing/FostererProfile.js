import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import ImageAvatar from "../FosterHistory/ImageAvatar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router";

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

const useStyles = makeStyles(theme => ({
  actionButtons: {
    marginTop: "20px",
  },
  paper: {
    marginTop: "50px",
    padding: "20px 40px",
    color: theme.palette.text.secondary,
  },
}));

const FostererProfile = () => {
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const history = useHistory();
  const classes = useStyles();

  const handleOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleOpenReject = () => {
    setOpenReject(true);
  };

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };
  const handleCloseReject = () => {
    setOpenReject(false);
  };

  return (
    <Container>
      <Grid container direction="column">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Button
                onClick={() => history.push("/fosterRequestTable")}
                startIcon={<ArrowBackIosIcon />}
              >
                Back
              </Button>
              <Grid container item xs={12}>
                <ImageAvatar image="/static/images/avatar.png" name="John" />
                <FormRow label="Name" value="Jackson O'Doherty" />
                <FormRow label="Phone Number" value="617-123-1234" />
                <FormRow label="Email" value="jackson@michael.com" />
                <FormRow label="Rating" value="4.9" />
                <FormRow
                  label="Bio"
                  value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam minus earum possimus asperiores illum, vero temporibus nulla maiores nobis obcaecati accusamus fugit perspiciatis voluptas minima mollitia nisi suscipit. Repellat, facilis."
                />
              </Grid>
              <Divider />
              <Grid item className={classes.actionButtons} container xs={6}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenAccept}
                  >
                    Accept
                  </Button>
                  <Dialog
                    onClose={handleCloseAccept}
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
                        onClick={handleCloseAccept}
                        color="primary"
                      >
                        Okay
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOpenReject}
                  >
                    Reject
                  </Button>
                  <Dialog
                    onClose={handleCloseReject}
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
                        onClick={handleCloseReject}
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        autoFocus
                        onClick={handleCloseReject}
                        color="secondary"
                      >
                        Reject
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FostererProfile;
