import React from "react";
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

function PetSearch() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [petDetails, setPetDetails] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function FormRow() {
    return (
      <React.Fragment>
        {[...Array(4)].map((e, i) => (
          <Grid key={i} item xs={3}>
            <Card className={classes.cardRoot}>
              <CardActionArea onClick={() => setPetDetails({ name: "Bruno" })}>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/dog.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Bruno
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
                      Dog
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
                      2 years
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
                      May 02, 21 to May 12, 21
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="/petSearchDetails">
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
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
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
