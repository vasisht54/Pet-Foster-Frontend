import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router";
import Dialog from "@material-ui/core/Dialog";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
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

const tileData = [
  {
    img: "/static/images/details/dog.jpeg",
  },
  {
    img: "/static/images/details/dog2.jpeg",
  },
  {
    img: "/static/images/details/dog3.jpeg",
  },
  {
    img: "/static/images/details/dog4.jpeg",
  },
];


const FormRow = (props) => {
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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
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
    type: "Dog"
  },
  {
    id: 2,
    name: "Goofy",
    image: "/static/images/details/dog2.jpeg",
    type: "Dog"
  },
  {
    id: 3,
    name: "Bella",
    image: "/static/images/details/cat.jpeg",
    type: "Cat"
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
  }
  return (
    <Grid
        container
        className={classes.margin}
        justify="flex-start"
        spacing={5}
      >
     
     {pets.map(pet => (
          <>

      <Grid container item xs={4}>
          <div className={classes.photoRoot}>
            <GridList cellHeight={180} className={classes.gridList}>
              <img src={pet.image} alt={pet.name} />
            </GridList>
          </div>
        </Grid>

        <Grid container item xs={8}>
            <Grid container item xs={3}>
              <Link component="button">
             <FormRow value={pet.name} />
             </Link>

             <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
                  <DialogContent dividers>
                    {/* <Grid container item md={12}>
                      <FosterRequestTable />                    
                    </Grid> */}
                  </DialogContent>
                  <DialogActions>
                    <Button
                      autoFocus
                      onClick={handleClose}
                      color="primary"
                      href="/"
                    >
                      Okay
                    </Button>
                  </DialogActions>
                </Dialog>

            </Grid>
            <Grid container item xs={5}>
            <div className={classes.alignRight}>
            <Button
                  variant="contained"
                  color="primary"
                  className={classes.sendButton}
                  onClick={handleFosterRequestTable}
                  size="medium"
                >
                  View Foster Requests
            </Button>
            
            {/* <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
                  <DialogContent dividers>
                    <div className={classes.flex}>
                      {!pathname.includes("/create") && (
                        <div>
                          <Button
                            href="/"
                            variant="contained"
                            color="primary"
                            className={classes.backButton}
                            startIcon={<ArrowBackIosIcon />}
                          >
                            Back
                          </Button>
                        </div>
                      )}
                    </div>
                    <Grid container item md={12}>
                      <FosterRequestTable />                    
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      autoFocus
                      onClick={handleClose}
                      color="primary"
                      href="/"
                    >
                      Okay
                    </Button>
                  </DialogActions>
                </Dialog> */}

              </div>
            </Grid>
        </Grid>
        </>
        ))}
    </Grid>
  );
};

ViewFosterRequestForMyPet.propTypes = {};

export default ViewFosterRequestForMyPet;
