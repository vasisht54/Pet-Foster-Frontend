import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { states } from "../constants";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    padding: "20px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  state: {
    width: "30%",
  },
  city: {
    width: "65%",
    marginRight: "5%",
  },
  textFieldDate: {
    width: "48%",
  },
  date: {
    justifyContent: "space-between",
    display: "flex",
  },
  sectionMargin: {
    marginTop: "30px",
  },
}));

const YourInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form} noValidate>
        <Grid container justify="flex-start">
          <Grid container item xs={6}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Personal Info</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoFocus
                size="small"
              />
              <TextField
                variant="outlined"
                required
                margin="dense"
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                size="small"
              />
              <TextField
                variant="outlined"
                required
                margin="dense"
                fullWidth
                id="email"
                label="Email"
                name="email"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Location</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                id="address1"
                label="Address Line# 1"
                name="address1"
                size="small"
              />
              <TextField
                variant="outlined"
                required
                margin="dense"
                fullWidth
                id="address2"
                label="Address Line# 2"
                name="address2"
                size="small"
              />
              <TextField
                variant="outlined"
                required
                margin="dense"
                className={classes.city}
                id="city"
                label="City"
                name="city"
                size="small"
              />
              <FormControl
                variant="outlined"
                className={classes.state}
                size="small"
                margin="dense"
              >
                <InputLabel>State</InputLabel>
                <Select
                  labelId=""
                  id="demo-simple-select-outlined"
                  value={""}
                  label="State"
                >
                  {states.map((state) => (
                    <MenuItem>{state}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                variant="outlined"
                required
                margin="dense"
                id="zipCode"
                label="Zip Code"
                name="zipCode"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container item xs={6} className={classes.sectionMargin}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Reason</Typography>
            </Grid>
            <Grid item xs={8} className={classes.date}>
              <TextField
                id="outlined-multiline-static"
                label="Why do you need foster care?"
                multiline
                fullWidth
                rows={4}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container item xs={6} className={classes.sectionMargin}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Duration</Typography>
            </Grid>
            <Grid item xs={8} className={classes.date}>
              <TextField
                id="date"
                label="From"
                type="date"
                className={classes.textFieldDate}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                required
                margin="dense"
              />
              <TextField
                id="date"
                label="To"
                type="date"
                className={classes.textFieldDate}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                required
                margin="dense"
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

YourInfo.propTypes = {};

export default YourInfo;
