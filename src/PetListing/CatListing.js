import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";

const drawerWidth = 300;

const useStyles = makeStyles({
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
});

const tileData = [
  {
    img: "/static/images/details/kitty-1.jpg",
  },
  {
    img: "/static/images/details/kitty-2.jfif",
  },
  {
    img: "/static/images/details/kitty-4.jfif",
  },
  {
    img: "/static/images/details/kitty-4.jpg",
  },
];

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

const KeyFacts = props => {
  return (
    <Grid className={props.class} container item xs={12}>
      <Grid item xs={7}>
        {props.label && (
          <Typography variant="subtitle1">{props.label}</Typography>
        )}
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          {props.value ? (
            <CheckIcon style={{ color: green[500] }} />
          ) : (
            <CloseIcon color="secondary" />
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export const CatListing = () => {
  const classes = useStyles();

  const pathname = window.location.pathname;
  const queryParam = window.location.pathname + window.location.search;

  return (
    <>
      {/* <div style={{padding: "0 20px"}}>
            <PetSearchDetails />
        </div>     */}
      <div>
        <form className={classes.form} noValidate>
          <div className={classes.flex}>
            <Typography variant="h5">Coco</Typography>
            {!pathname.includes("/create") &&
              !queryParam.includes("/CatListing?false") && (
                <Typography className={classes.datePosted} variant="body1">
                  <span className={classes.label}>Posted on: Apr 22, 2021</span>
                </Typography>
              )}
          </div>
          <Grid
            container
            className={classes.margin}
            justify="flex-start"
            spacing={5}
          >
            <Grid container item xs={4}>
              <div className={classes.photoRoot}>
                <GridList cellHeight={180} className={classes.gridList}>
                  {tileData.map((tile, index) => (
                    <GridListTile key={tile.img} className={classes.imageTile}>
                      <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
              {/* here */}
            </Grid>
            <Grid container item xs={8}>
              <Grid container item xs={6}>
                <FormRow label="Category" value="Cat" />
                <FormRow label="Breed" value="Persian" />
                <FormRow label="Gender" value="Female" />
                <FormRow label="Age" value="2 months" />
                <FormRow
                  class={classes.margin5}
                  label="Duration"
                  value="Apr 23, 2021 to Apr 28, 2021"
                />
                <FormRow label="Location" value="360 Huntington Ave" />
                <FormRow value="Boston, MA 02115" />
              </Grid>
              <Grid container item xs={6}>
                <KeyFacts label="House broken" value={false} />
                <KeyFacts label="Potty trained" value={true} />
                <KeyFacts label="Good with cats" value={true} />
                <KeyFacts label="Good with dogs" value={false} />
                <KeyFacts label="Needs experienced trainer" value={false} />
                <KeyFacts label="Good with kids" value={false} />
              </Grid>
              <FormRow
                class={classes.margin5}
                label="Owner's notes"
                value="Coco needs a lot of attention. Her favorite toy is a woolen ball."
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

CatListing.propTypes = {};

export default CatListing;
