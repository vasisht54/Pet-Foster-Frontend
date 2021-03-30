import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { green } from '@material-ui/core/colors';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px 100px",
  },
  backButton: {
    padding: "20px 0",
  },
  profileImage: {
    width: drawerWidth,
  },
  paper: {
    padding: "20px",
    height: "100%",
  },
  center: {
    textAlign: "center",
  },
  photoList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
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
      <Grid item xs={3} >
        {props.label &&
        <Typography variant="subtitle1">
          {props.label}:
        </Typography>
        }
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          {props.value}
        </Typography>
      </Grid>
    </Grid>
  );
};

const KeyFacts = (props) => {
  return (
    <Grid className={props.class} container item xs={12}>
      <Grid item xs={7}>
        {props.label &&
        <Typography variant="subtitle1">
          {props.label}:
        </Typography>
        }
      </Grid>
      <Grid item >
        <Typography variant="subtitle1">
          {props.value ?
            <CheckIcon style={{ color: green[500] }}/>
          :
            <CloseIcon  color="secondary" />
          }
        </Typography>
      </Grid>
    </Grid>
  );
};

const PetSearchDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div>
        <IconButton className={classes.backButton} aria-label="delete">
          <ArrowBackRoundedIcon />
        </IconButton>
      </div> */}
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.flex}>
          <Typography gutterBottom variant="h4">
            Bruno
          </Typography>
          <Typography
            className={classes.datePosted}
            gutterBottom
            variant="body1"
          >
            <span className={classes.label}>Posted on: March 21, 2021</span>
          </Typography>
        </div>
        <div className={classes.photoList}>
          <GridList className={classes.gridList} cols={4}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <Grid container className={classes.margin} justify="flex-start" spacing={5}>
          <Grid container item xs={3}>
            <div>
              <Button
                href="/search"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ArrowBackIosIcon />}
              >
                Back
              </Button>
            </div>
          </Grid>
          <Grid container item xs={9}>
            <Grid container item xs={6}>
              <FormRow label="Category" value="Dog" />
              <FormRow label="Breed" value="Retriever" />
              <FormRow label="Gender" value="Male" />
              <FormRow label="Age" value="5 months" />
              <FormRow class={classes.margin5}  label="Duration" value="May 21, 2021 to May 29, 2021" />
              <FormRow label="Location" value="11 Tetlow Street" />
              <FormRow value="Boston, MA 02115" />
            </Grid>
            <Grid container item xs={6}>
              <KeyFacts label="House broken" value={true} />
              <KeyFacts label="Potty trained" value={true} />
              <KeyFacts label="Good with cats" value={false} />
              <KeyFacts label="Good with dogs" value={true} />
              <KeyFacts label="Needs experienced trainer" value={false} />
              <KeyFacts label="Good with kids" value={false} />
            </Grid>
            <FormRow class={classes.margin5} label="Owner's notes" value="Bruno is a very jumpy dog. He needs a lot of attention. He needs walks twice a day. His favorite toy is a tennis ball." />
            
              <Button variant="contained" color="primary"
                className={classes.button} href="/sendFosterRequest" >
                Send a Foster Request
              </Button>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

PetSearchDetails.propTypes = {};

export default PetSearchDetails;
