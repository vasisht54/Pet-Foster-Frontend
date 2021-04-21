import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router";
import ImageAvatar from "../components/ImageAvatar";
import Header from "../components/Header";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
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
  item: { margin: "20px" },
}));

const rows = [
  {
    id: 1,
    name: "Jackson",
    image: "../static/images/avatar.png",
    rating: "4.9/5.0",
    message:
      "I love dogs and I have one myself - a Retriever. He's good with other dogs, hence I'm willing to foster your pet as well.",
  },
  {
    id: 2,
    name: "John",
    image: "/static/images/avatar2.jpg",
    rating: "4.2/5.0",
    message:
      "I grew up with 3 dogs, 2 cats and a horse. I'm very good with pets.",
  },
];

const FormRow = props => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={4}>
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
export const FosterRequestTable = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={9} container direction="column">
          <div>
            <Button
              onClick={() => history.push("/ViewFosterRequestForMyPet")}
              className={classes.backButton}
              startIcon={<ArrowBackIosIcon />}
            >
              Back
            </Button>
            <Grid container justify="center">
              <Header value="Foster Requests"></Header>
            </Grid>
          </div>
          {rows.map(row => (
            <React.Fragment key={row.id}>
              <Grid container className={classes.item}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid
                      style={{ cursor: "pointer" }}
                      container
                      item
                      xs={1}
                      direction="column"
                    >
                      <ImageAvatar image={row.image} name={row.name} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid container item xs={7}>
                      <FormRow label="Fosterer's Name" value={row.name} />
                      <FormRow label="Rating" value={row.rating} />
                      <FormRow
                        label="Message from Fosterer"
                        value={row.message}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={3}
                      direction="column"
                      justify="center"
                    >
                      <Button
                        onClick={() => history.push("/fostererProfile")}
                        color="primary"
                        variant="contained"
                        size="small"
                      >
                        View profile
                      </Button>
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
export default FosterRequestTable;
