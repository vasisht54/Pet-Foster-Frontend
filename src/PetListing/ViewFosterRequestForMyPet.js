import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Container, Link, Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import Dialog from "@material-ui/core/Dialog";
import ImageAvatar from "../FosterHistory/ImageAvatar";

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
    margin: "10px",
    padding: "20px",
    width: "60%",
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
  itemName: {
    marginTop: "20px",
  },
  itemButton: {
    marginTop: "6px",
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
        <Typography variant="h6">{props.value}</Typography>
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

const pets = [
  {
    id: 1,
    name: "Bruno",
    image: "/static/images/details/dog.jpeg",
    type: "Dog",
  },
  {
    id: 2,
    name: "Goofy",
    image: "/static/images/details/dog2.jpeg",
    type: "Dog",
  },
  {
    id: 3,
    name: "Bella",
    image: "/static/images/details/cat.jpeg",
    type: "Cat",
  },
];

export const ViewFosterRequestForMyPet = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFosterRequestTable = () => {
    history.push("/fosterRequestTable");
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={9} container direction="column">
          {pets.map(pet => (
            <>
              <Grid container item key={pet.id}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid container item xs={4}>
                      <Grid>
                        <ImageAvatar image={pet.image} name={pet.name} />
                      </Grid>
                    </Grid>
                    <Grid className={classes.itemName} item xs={4}>
                      <Link component="button" onClick={handleOpen}>
                        <FormRow value={pet.name} />
                      </Link>
                    </Grid>
                    <Grid className={classes.itemButton} item xs={4}>
                      <Button
                        onClick={handleFosterRequestTable}
                        color="primary"
                        variant="contained"
                        size="medium"
                      >
                        View Foster Requests
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                <Dialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogContent dividers>
                    <Grid container item md={12}>
                      <FormRow label="Name" value="Bruno"></FormRow>
                      <FormRow label="Category" value="Dog" />
                      <FormRow label="Breed" value="Retriever" />
                      <FormRow label="Gender" value="Male" />
                      <FormRow label="Age" value="5 Months" />
                      <FormRow
                        label="Duration"
                        value="May 21, 2021 to May 29, 2021"
                      />
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
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

ViewFosterRequestForMyPet.propTypes = {};

export default ViewFosterRequestForMyPet;
