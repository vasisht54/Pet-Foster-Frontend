import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minHeight: 360,
    width: 300,
    display: "inline-block",
    textAlign: "center",
    position: "relative",
  },
  media: {
    margin: "auto",
    height: 200,
    width: 200,
  },
  textInfo: {
    paddingTop: "20px",
  },
});

export default function OptionsCard({ title, description, image, route }) {
  const classes = useStyles();
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.isLoggedIn.value);

  const handleClick = event => {
    event.preventDefault();
    if (route === "/create") {
      history.push(isLoggedIn ? "/create" : "/login?redirectTo=/create");
    } else {
      history.push(route);
    }
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title="Paw" />
      <CardContent>
        <Button
          onClick={handleClick}
          variant="contained"
          component="h1"
          color="primary"
        >
          {title}
        </Button>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.textInfo}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
