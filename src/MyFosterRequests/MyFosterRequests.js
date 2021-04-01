import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
} from "@material-ui/core";
import ImageAvatar from "../FosterHistory/ImageAvatar";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    margin: "10px",
    padding: "20px",
  },
  withdrawBtn: {
    marginTop: "20px",
  },
  divider: {
    margin: "10px 0",
  },
  status: {
    border: "",
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

const MyRequests = [
  {
    id: 1,
    image: "static/images/cards/dog.jpeg",
    name: "Goofy",
    age: "2 years",
    type: "Dog",
    duration: "May 21, 2021 to May 29, 2020",
    status: "Approved",
  },
  {
    id: 2,
    image: "static/images/details/dog2.jpeg",
    name: "Scooby",
    age: "1 year",
    type: "Dog",
    duration: "Aug 21, 2021 to Sept 1, 2020",
    status: "Decision Pending",
  },
  {
    id: 3,
    image: "static/images/details/cat.jpeg",
    name: "Bella",
    age: "9 months",
    type: "Cat",
    duration: "June 21, 2021 to July 1, 2020",
    status: "Reject",
  },
];

const MyFosterRequests = () => {
  const classes = useStyles();
  const [openOwnerDetails, setOpenOwnerDetails] = useState(false);
  // const [open, setOpen] = React.useState(false);
  const [pets, setPets] = useState(MyRequests);

  const handleWithdraw = id => {
    // setOpen(true);
    const newPets = pets.filter(pet => pet.id !== id);
    setPets(newPets);
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={9} container direction="column">
          {pets.map(item => (
            <>
              <Grid container item key={item.id}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid container item xs={2}>
                      <Grid>
                        <ImageAvatar image={item.image} name={item.name} />
                      </Grid>
                    </Grid>
                    <Grid container item xs={7}>
                      <FormRow label="Name" value={item.name} />
                      <FormRow label="Breed" value={item.type} />
                      <FormRow label="Age" value={item.age} />
                      <FormRow label="Duration" value={item.duration} />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        onClick={() => setOpenOwnerDetails(true)}
                        fullWidth
                        color="primary"
                        variant="contained"
                        size="small"
                      >
                        View owner details
                      </Button>
                      {item.status !== "Reject" && (
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          className={classes.withdrawBtn}
                          onClick={() => handleWithdraw(item.id)}
                          size="small"
                        >
                          Withdraw Foster Request
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                  <Divider className={classes.divider} />
                  <Typography className={classes.status} variant="subtitle1">
                    Status: {item.status}
                  </Typography>
                </Paper>
                <Dialog
                  onClose={() => setOpenOwnerDetails(false)}
                  aria-labelledby="customized-dialog-title"
                  open={openOwnerDetails}
                >
                  <DialogContent dividers>
                    <Typography gutterBottom>Owner Information</Typography>
                    <Grid container item xs={10}>
                      <Typography gutterBottom>Owner Details:</Typography>
                      <FormRow label="Name" value="Alex" />
                      <FormRow
                        label="Location"
                        value="3 Filmore St. SF, 41202"
                      />
                      <FormRow label="Phone number" value="213-456-7890" />
                      <FormRow label="Email" value="alex@g.com" />
                      <Typography gutterBottom> Happy Fostering! </Typography>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      autoFocus
                      onClick={() => setOpenOwnerDetails(false)}
                      color="primary"
                    >
                      Okay
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyFosterRequests;
