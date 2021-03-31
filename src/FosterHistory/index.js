import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import ImageAvatar from "./ImageAvatar";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "10px",
    padding: "20px",
  },
}));

const FormRow = props => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={5}>
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

const FosterHistory = () => {
  const classes = useStyles();
  const history = useHistory();

  const fosterHistory = [
    {
      id: 1,
      image: "static/images/cards/dog.jpeg",
      name: "Goofy",
      age: 2,
      type: "Dog",
      duration: "03/10/2021 - 03/25/2021",
      owner: "/ownerDetails",
    },
    {
      id: 2,
      image: "static/images/cards/dog.jpeg",
      name: "Scooby",
      age: 1,
      type: "Dog",
      duration: "04/15/2021 - 05/01/2021",
      owner: "/ownerDetails",
    },
  ];

  return (
    <Container>
      <Grid container direction="column">
        {fosterHistory.map(item => (
          <Grid container item key={item.id}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid container item xs={4}>
                  <ImageAvatar image={item.image} name={item.name} />
                  <Button
                    onClick={() => history.push(item.owner)}
                    color="primary"
                    variant="contained"
                  >
                    View owner details
                  </Button>
                </Grid>
                <Grid container item xs={8}>
                  <FormRow label="Name" value={item.name} />
                  <FormRow label="Breed" value={item.type} />
                  <FormRow label="Age" value={item.age} />
                  <FormRow label="Duration" value={item.duration} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FosterHistory;
