import { Button, Container, Dialog, DialogActions, DialogContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
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
}));

const FormRow = props => {
  return (
    <Grid className={props.class} container item xs={12}>
      <Grid item xs={3}>
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

const FostererProfile = () => {
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);

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
      <Grid container direction="column" xs={12}>
        <div>
        <Grid container item xs={6}>
                <FormRow label="Name" value="Jackson" />
                <FormRow label="Phone Number" value="617-123-1234" />
                <FormRow label="Email" value="jack.son@g.com" />
          </Grid>
          </div>
        <Grid item container xs={6}>
          <Grid item xs={3}>
            <Button variant="contained" color="success" onClick={handleOpenAccept}>
              Accept
            </Button>
            <Dialog
                onClose={handleCloseAccept}
                aria-labelledby="customized-dialog-title"
                open={openAccept}>
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
            <Button variant="contained" color="secondary" onClick={handleOpenReject}>
              Reject
            </Button>
            <Dialog
                onClose={handleCloseReject}
                aria-labelledby="customized-dialog-title"
                open={openReject}>
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
                      Reject
                    </Button>
                  </DialogActions>
                </Dialog> 
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FostererProfile;
