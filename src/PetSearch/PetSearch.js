import React, { useState } from "react";
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
import { makeStyles } from "@material-ui/core/styles";

import { Filters } from "./PetSearchFilters";
import PetSearchDetails from "./petSearchDetails";
import Header from "../components/Header";
import { petsList } from "../data/petSearchData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


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
  heading: {
    textAlign: 'center',
  }
}));

function PetSearch() {
  const classes = useStyles();
  const [petDetails, setPetDetails] = React.useState(null);
  const history = useHistory();
  const [filteredPets, setFilteredPets] = useState(petsList);

  const handleHref = (route) => {
    history.push(route);
  };

  function FormRow() {
    return (
      <React.Fragment>
        {filteredPets.map((pet) => (
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
            {/* <Hidden smUp implementation="css">
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
                <Filters petsList={petsList} setFilteredPets={setFilteredPets}/>
              </Drawer>
            </Hidden> */}
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <Filters petsList={petsList} setFilteredPets={setFilteredPets}/>
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <Button
                  onClick={() => {
                    history.push("/");
                  }}
                  startIcon={<ArrowBackIosIcon />}
                >
                  Back
                </Button>
            <div className={classes.heading}>
              <Header value="Foster a pet"></Header>
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
