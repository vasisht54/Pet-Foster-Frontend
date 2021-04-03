import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Container, Link, Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import ImageAvatar from "../FosterHistory/ImageAvatar";

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
  margin5: {
    marginTop: "20px",
  },
  itemButton: {
    marginTop: "6px",
  },
});

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
  const history = useHistory();

  return (
    <Container>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={9} container direction="column">
          <div className={classes.Card}></div>
          <div className={classes.Card} style={{ left: 200 }}>
            <Typography gutterBottom variant="h4">
              View requests for my pets
            </Typography>
          </div>
          {pets.map(pet => (
            <React.Fragment key={pet.id}>
              <Grid container item key={pet.id}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid container item xs={1}>
                      <Grid>
                        <ImageAvatar image={pet.image} name={pet.name} />
                      </Grid>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid
                      container
                      item
                      xs={10}
                      alignItems="center"
                      justify="flex-end"
                    >
                      <Grid item xs={5}>
                        <Link
                          onClick={() => history.push("/petSearchDetails")}
                          component="button"
                          variant="h5"
                          style={{ fontWeight: 500 }}
                        >
                          {pet.name}
                        </Link>
                      </Grid>
                      <Grid item xs={5}>
                        <Button
                          onClick={() => history.push("/FosterRequestTable")}
                          color="primary"
                          variant="contained"
                          size="medium"
                        >
                          View Foster Requests
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

ViewFosterRequestForMyPet.propTypes = {};

export default ViewFosterRequestForMyPet;
