import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">
      {/* <h4>Home</h4> */}
      <div className={classes.root}  
            alignItems="center"
            justify="center">
         
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Find pets to foster
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary" href="/search">
                Meet Pets
              </Button>
            </CardActions>
          </Card>
       
        {/* ****************************************************************** */}
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Put your pet up for foster care
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary" href="/create">
                Create a Pet Listing
              </Button>
            </CardActions>
          </Card>
        
      </div>
    </div>
  );
};

export default Home;
