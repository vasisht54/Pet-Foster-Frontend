import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";
import ImageAvatar from "../components/ImageAvatar";
import { useHistory } from "react-router";
import Header from "../components/Header";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ProfilePopup from "../components/ProfilePopup";

const useStyles = makeStyles({
  paper: {
    width: "90%",
    margin: "10px 0 ",
    padding: "20px",
  },
  withdrawBtn: {
    marginTop: "20px",
  },
  divider: {
    margin: "10px 0",
  },
});

const WithdrawTooltip = withStyles(theme => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);

const FormRow = props => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={4}>
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
    name: "Bruno",
    age: "2 years",
    type: "Dog",
    duration: "May 21, 2021 to May 29, 2020",
    status: "Approved",
  },
  {
    id: 2,
    image: "static/images/details/dog2.jpeg",
    name: "Goofy",
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

const owners = [
  {
    id: 1,
    name: "Jackson O'Doherty",
    phoneNum: "123-456-7890",
    email: "jackson@odoherty.com",
    address: "1102 Fillmore St, SF CA",
  },
  {
    id: 2,
    name: "John Krasinski",
    phoneNum: "123-456-7890",
    email: "John@krasinski.com",
    address: "1191 Boylston St, Boston MA",
  },
  {
    id: 3,
    name: "Matthew Perry",
    phoneNum: "123-456-7890",
    email: "chandler@bing.com",
    address: "75 St. Alphonsus St, Boston MA",
  },
];

const MyFosterRequests = () => {
  const classes = useStyles();
  const [openOwnerDetails, setOpenOwnerDetails] = useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const [withdrawId, setWithdrawId] = React.useState(null);
  const [pets, setPets] = useState(MyRequests);
  const history = useHistory();
  const [selectedOwner, setselectedOwner] = useState(null);

  const handleDelete = id => {
    const newPets = pets.filter(pet => pet.id !== id);
    setPets(newPets);
  };

  const handleCloseReject = () => {
    handleDelete(withdrawId);
    setOpenReject(false);
  };

  const handleWithdraw = id => {
    setWithdrawId(id);
    setOpenReject(true);
  };

  const handleViewOwner = owner => {
    setselectedOwner(owner);
    setOpenOwnerDetails(true);
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={10} container direction="column">
          <div>
            <Button
              onClick={() => {
                history.push("/");
              }}
              className={classes.backButton}
              startIcon={<ArrowBackIosIcon />}
            >
              Back
            </Button>
          </div>
          <Grid container justify="center">
            <Header value="My requests to foster"></Header>
          </Grid>
          {pets.map(item => (
            <React.Fragment key={item.id}>
              <Grid container item>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid
                      onClick={() => history.push("/PetSearchDetails?false")}
                      style={{ cursor: "pointer" }}
                      container
                      item
                      xs={1}
                      direction="column"
                    >
                      <ImageAvatar image={item.image} name={item.name} />
                      <Link style={{ fontWeight: 500 }} variant="h5">
                        {item.name}
                      </Link>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid container item xs={7}>
                      <FormRow label="Breed" value={item.type} />
                      <FormRow label="Age" value={item.age} />
                      <FormRow label="Duration" value={item.duration} />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={3}
                      direction="column"
                      justify="center"
                    >
                      <Button
                        onClick={() => handleViewOwner(owners[item.id - 1])}
                        color="primary"
                        variant="contained"
                        size="small"
                      >
                        View owner details
                      </Button>
                      {item.status !== "Reject" && (
                        <WithdrawTooltip
                          disableHoverListener={item.status !== "Approved"}
                          title="You cannot withdraw once request is approved. Please contact the owner."
                        >
                          <span>
                            <Button
                              style={{ width: "100%" }}
                              disabled={item.status === "Approved"}
                              variant="contained"
                              color="secondary"
                              className={classes.withdrawBtn}
                              onClick={() => handleWithdraw(item.id)}
                              size="small"
                            >
                              Withdraw Foster Request
                            </Button>
                          </span>
                        </WithdrawTooltip>
                      )}
                      <Dialog
                        onClose={handleCloseReject}
                        aria-labelledby="customized-dialog-title"
                        open={openReject}
                      >
                        <DialogContent dividers>
                          <Grid container item md={12}>
                            Are you sure you want to withdraw this request?
                          </Grid>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => setOpenReject(false)}
                            autoFocus
                            color="primary"
                          >
                            Cancel
                          </Button>
                          <Button
                            autoFocus
                            onClick={handleCloseReject}
                            color="secondary"
                          >
                            Withdraw
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                  </Grid>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitle1">
                    Status: {item.status}
                  </Typography>
                </Paper>
                <Dialog
                  onClose={() => setOpenOwnerDetails(false)}
                  aria-labelledby="customized-dialog-title"
                  open={openOwnerDetails}
                >
                  <DialogContent dividers>
                    <ProfilePopup
                      profile={selectedOwner}
                      handleClose={() => setOpenOwnerDetails(false)}
                    />
                  </DialogContent>
                </Dialog>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyFosterRequests;
