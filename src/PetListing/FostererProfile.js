import { Button, Container, Grid } from "@material-ui/core";

const FostererProfile = () => {
  return (
    <Container>
      <Grid container direction="column" xs={12}>
        <Grid item container xs={6}>
          <Grid item xs={3}>
            <Button variant="contained" color="success">
              Accept
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              Reject
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FostererProfile;
