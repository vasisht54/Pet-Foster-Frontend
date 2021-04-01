import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

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

// const tileData = [
//   {
//     img: "/static/images/details/dog.jpeg",
//   },
//   {
//     img: "/static/images/details/dog2.jpeg",
//   },
//   {
//     img: "/static/images/details/dog3.jpeg",
//   },
//   {
//     img: "/static/images/details/dog4.jpeg",
//   },
// ];

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

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const ViewFosterRequest = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openOwnerDetails, setOpenOwnerDetails] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenOwnerDetails = () => {
    setOpenOwnerDetails(true);
  };
  const handleCloseOwnerDetails = () => {
    setOpenOwnerDetails(false);
  };

  const pets = [
    {
      id: 1,
      name: "Bruno",
      image: "/static/images/details/dog.jpeg",
      type: "Dog",
      breed: "Retriever",
      gender: "Male",
      age: "5 Months",
      duration: "May 21, 2021 to May 29, 2021",
      street: "11 Tetlow Street",
      city: "Boston, MA 02115",
      status: "Approved",
    },
    {
      id: 2,
      name: "Goofy",
      image: "/static/images/details/dog2.jpeg",
      type: "Dog",
      breed: "Beagle",
      gender: "Male",
      age: "2 Months",
      duration: "May 21, 2021 to May 29, 2021",
      street: "1191 Caesars St",
      city: "Los Angeles",
      status: "Decision Pending",
    },
    {
      id: 3,
      name: "Bella",
      image: "/static/images/details/cat.jpeg",
      type: "Cat",
      breed: "Americal Curl",
      gender: "Female",
      age: "1 Year",
      duration: "May 21, 2021 to May 29, 2021",
      street: "75 Longwood Apts",
      city: "Florida",
      status: "Reject",
    },
  ];

  return (
    <>
      <Grid
        container
        className={classes.margin}
        justify="flex-start"
        spacing={5}
      >
        {pets.map(pet => (
          <React.Fragment key={pet.id}>
            <Grid container item xs={4}>
              <div className={classes.photoRoot}>
                <GridList cellHeight={180} className={classes.gridList}>
                  <img src={pet.image} alt={pet.name} />
                </GridList>
              </div>
            </Grid>
            <Grid container item xs={8}>
              <Grid container item xs={6}>
                <FormRow label="Name" value={pet.name} />
                <FormRow label="Category" value={pet.type} />
                <FormRow label="Breed" value={pet.breed} />
                <FormRow label="Gender" value={pet.gender} />
              </Grid>
              <Grid container item xs={6}>
                <FormRow label="Age" value={pet.age} />
                <FormRow
                  class={classes.margin5}
                  label="Duration"
                  value={pet.duration}
                />
                <FormRow label="Location" value={pet.street} />
                <FormRow value={pet.city} />
              </Grid>
              <Grid container item xs={6}>
                <FormRow label="Status" value={pet.status} />
              </Grid>
              <Grid container item xs={8}>
                <Grid container item xs={6}>
                  <div className={classes.alignRight}>
                    {pet.status !== "Reject" && (
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.sendButton}
                        onClick={handleOpen}
                        size="medium"
                      >
                        Withdraw Foster Request
                      </Button>
                    )}
                    <Dialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <DialogContent dividers>
                        <Typography gutterBottom>
                          We are sorry to know that you withdrew your foster
                          request!
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                          Okay
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Grid>

                <Grid container item xs={6}>
                  <div className={classes.alignRight}>
                    {pet.status === "Approved" && (
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.sendButton}
                        onClick={handleOpenOwnerDetails}
                        size="medium"
                      >
                        View Owner details
                      </Button>
                    )}
                    <Dialog
                      onClose={handleCloseOwnerDetails}
                      aria-labelledby="customized-dialog-title"
                      open={openOwnerDetails}
                    >
                      <DialogContent dividers>
                        <Typography gutterBottom>
                          Hurray! The owner has accepted your foster request.
                          Please get in touch with the owner for picking up and
                          dropping off the pet.
                        </Typography>
                        <Grid container item xs={10}>
                          <Typography gutterBottom>Owner Details:</Typography>
                          <FormRow label="Name" value="Alex" />
                          <FormRow
                            label="Location"
                            value="3 Filmore St. SF, 41202"
                          />
                          <FormRow label="Phone number" value="213-456-7890" />
                          <FormRow label="Email" value="alex@g.com" />
                          <Typography gutterBottom>
                            {" "}
                            Happy Fostering!{" "}
                          </Typography>
                        </Grid>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          autoFocus
                          onClick={handleCloseOwnerDetails}
                          color="primary"
                        >
                          Okay
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

ViewFosterRequest.propTypes = {};

export default ViewFosterRequest;
