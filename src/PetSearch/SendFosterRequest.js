import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflowY: "scroll",
  },
  drawerPaper: {
    top: "auto !important",
    width: drawerWidth,
    position: "absolute",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardInfo: {
    paddingLeft: "5px",
  },
}));

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
  
function SendFosterRequest() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <div className={classes.Card}>
            <Typography gutterBottom variant="h4">
              Foster Request
            </Typography>
          </div>
          <div className={classes.Card}>
            <TextField
              id="outlined-multiline-static"
              label="Message For the Owner (Optional)"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="I acknowledge that this is a temporary foster period and that I will have to return the fostered pet to it's owner."
              labelPlacement="end"
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="I acknowledge that this is a volunteer work and I will not ask for any monetory reward from the owner for taking care of their pet."
              labelPlacement="end"
            />
          </FormGroup>
          <div>
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                onClick={handleOpen}
              >
                Send Request
              </Button>
            </label>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogContent dividers>
                <Typography gutterBottom>
                  Kudos! Foster Request sent to the owner successfully.
                </Typography>
                <Typography gutterBottom>
                    Now wait for them to accept it!
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={()=> {handleClose(); history.push("/search")}} color="primary">
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
            {/* ************************************************************* */}

            <Button
              onClick={()=> {
                history.push("/PetSearchDetails")
              }}
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Cancel
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
export default SendFosterRequest;
