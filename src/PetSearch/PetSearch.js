import React from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Filters } from "./PetSearchFilters";
import PetSearchDetails from "./petSearchDetails";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
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

const petsList = [
  {
    id: 1,
    name: "Bruno",
    image: "/static/images/details/dog.jpeg",
    type: "Dog",
    age: "2 years",
    duration: "May 02, 2021 to May 12, 2021",
  },
  {
    id: 2,
    name: "Goofy",
    image: "/static/images/details/goofy.jpg",
    type: "Dog",
    age: "7 months",
    duration: "Jun 15, 2021 to Jul 1, 2021",
  },
  {
    id: 3,
    name: "Bella",
    image: "/static/images/details/cat.jpeg",
    type: "Cat",
    age: "2 months",
    duration: "Jun 21, 2021 to Jul 1, 2021",
  },
  {
    id: 4,
    name: "Goldie",
    image: "/static/images/details/fish.jpeg",
    type: "Fish",
    age: "1 month",
    duration: "Apr 21, 2021 to Oct 1, 2021",
  },
  {
    id: 5,
    name: "Bun, Coco and Snow",
    image: "/static/images/details/bunny.jpeg",
    type: "Rabbit",
    age: "5 years",
    duration: "Sep 02, 2021 to Nov 12, 2021",
  },
  {
    id: 6,
    name: "Luna",
    image: "/static/images/details/pony.jpeg",
    type: "Pony",
    age: "7 years",
    duration: "Jun 15, 2021 to Jul 1, 2020",
  },
  {
    id: 7,
    name: "Aster",
    image: "/static/images/details/aster.jpeg",
    type: "Dog",
    age: "3 years",
    duration: "Aug 02, 2021 to Aug 12, 2021",
  },
  {
    id: 8,
    name: "Pommy",
    image: "/static/images/details/pomeranian.jpeg",
    type: "Dog",
    age: "2 years",
    duration: "Jul 15, 2021 to Jul 28, 2021",
  },
];

function PetSearch() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [petDetails, setPetDetails] = React.useState(null);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleHref = route => {
    history.push(route);
  };

  function FormRow() {
    return (
      <React.Fragment>
        {petsList.map(pet => (
          <Grid key={pet.id} item xs={3}>
            <Card className={classes.cardRoot}>
              <CardActionArea onClick={() => handleHref("/petSearchDetails")}>
                <CardMedia
                  className={classes.media}
                  image={pet.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {pet.name}
                  </Typography>
                  <div>
                    <Typography variant="caption" display="inline" gutterBottom>
                      Category:
                    </Typography>
                    <Typography
                      variant="body2"
                      display="inline"
                      className={classes.cardInfo}
                      gutterBottom
                    >
                      {pet.type}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption" display="inline" gutterBottom>
                      Age:
                    </Typography>
                    <Typography
                      variant="body2"
                      display="inline"
                      className={classes.cardInfo}
                      gutterBottom
                    >
                      {pet.age}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption" display="inline" gutterBottom>
                      Duration:
                    </Typography>
                    <Typography
                      variant="body2"
                      display="inline"
                      className={classes.cardInfo}
                      gutterBottom
                    >
                      {pet.duration}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleHref("/petSearchDetails")}
                >
                  View Pet Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      {petDetails ? (
        <PetSearchDetails onBackButtonClick={() => setPetDetails(null)} />
      ) : (
        <>
          <CssBaseline />
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                <Filters />
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <Filters />
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.Card}>
              <Typography gutterBottom variant="h4">
                Foster a Pet
              </Typography>
            </div>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
            </Grid>
          </main>
        </>
      )}
    </div>
  );
}

export default PetSearch;
