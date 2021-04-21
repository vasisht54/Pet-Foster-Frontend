import React, { useReducer, useEffect } from "react";
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

const initialFormState = {
  name: null,
  phone: null,
  email: null,
  address1: null,
  address2: null,
  city: null,
  state: null,
  zip: null,
  reason: null,
  from: null,
  to: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.data,
      };
    case "phone":
      return {
        ...state,
        phone: action.data,
      };
    case "email":
      return {
        ...state,
        email: action.data,
      };
    case "address1":
      return {
        ...state,
        address1: action.data,
      };
    case "address2":
      return {
        ...state,
        address2: action.data,
      };
    case "city":
      return {
        ...state,
        city: action.data,
      };
    case "state":
      return {
        ...state,
        state: action.data,
      };
    case "zip":
      return {
        ...state,
        zip: action.data,
      };
    case "reason":
      return {
        ...state,
        reason: action.data,
      };
    case "from":
      return {
        ...state,
        from: action.data,
      };
    case "to":
      return {
        ...state,
        to: action.data,
      };
    default:
      throw new Error();
  }
};

function validateEmail(email) {
  if(!email) return true;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const YourInfo = ({ setDisableSubmit }) => {
  const [formState, setFormState] = useReducer(reducer, initialFormState);

  const handleFormStateChange = (dispatch) => {
    setFormState(dispatch);
  };
  useEffect(()=>{
    setDisableSubmit(!formState.name ||
      !formState.phone ||
      !formState.email || !validateEmail(formState.email) ||
      !formState.address1 ||
      !formState.address2 ||
      !formState.city ||
      !formState.state ||
      !formState.zip ||
      !formState.reason ||
      !formState.from ||
      !formState.to)
  },[formState, formState.address1, formState.address2, formState.city, formState.email, formState.from, formState.name, formState.phone, formState.reason, formState.state, formState.to, formState.zip, setDisableSubmit])
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form}>
        <Grid container justify="flex-start">
          <Grid container item xs={6}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Personal Info</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                error={formState.name === ""}
                variant="outlined"
                margin="dense"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoFocus
                size="small"
                onChange={(e) =>
                  handleFormStateChange({ type: "name", data: e.target.value })
                }
              />
              <TextField
                variant="outlined"
                required
                type="number"
                error={formState.phone === ""}
                onChange={(e) =>
                  handleFormStateChange({ type: "phone", data: e.target.value })
                }
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
                error={formState.email === "" || !validateEmail(formState.email)}
                onChange={(e) =>
                  handleFormStateChange({ type: "email", data: e.target.value })
                }
                margin="dense"
                fullWidth
                helperText={!validateEmail(formState.email) ? 'Invalid email': ''}
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
                error={formState.address1 === ""}
                onChange={(e) =>
                  handleFormStateChange({
                    type: "address1",
                    data: e.target.value,
                  })
                }
                fullWidth
                id="address1"
                label="Address Line# 1"
                name="address1"
                size="small"
              />
              <TextField
                variant="outlined"
                required
                error={formState.address2 === ""}
                onChange={(e) =>
                  handleFormStateChange({
                    type: "address2",
                    data: e.target.value,
                  })
                }
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
                error={formState.city === ""}
                onChange={(e) =>
                  handleFormStateChange({ type: "city", data: e.target.value })
                }
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
                  label="State"
                  required
                error={formState.state === ""}
                onChange={(e) =>
                  handleFormStateChange({ type: "state", data: e.target.value })
                }
                >
                  {states.map((state) => (
                    <MenuItem value={state}>{state}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                variant="outlined"
                required
                type="number"
                error={formState.zip === ""}
                onChange={(e) =>
                  handleFormStateChange({ type: "zip", data: e.target.value })
                }
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
                required
                error={formState.reason === ""}
                onChange={(e) =>
                  handleFormStateChange({
                    type: "reason",
                    data: e.target.value,
                  })
                }
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
            <Grid item xs={3} style={{ paddingRight: "20px" }}>
              <Typography variant="subtitle1">
                Duration of foster care
              </Typography>
            </Grid>
            {/* TODO date validation */}
            <Grid item xs={8} className={classes.date}>
              <TextField
                id="date"
                label="From"
                type="date"
                error={formState.from === ""}
                className={classes.textFieldDate}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                required
                onChange={(e) =>
                  handleFormStateChange({ type: "from", data: e.target.value })
                }
                margin="dense"
              />
              <TextField
                id="date"
                label="To"
                error={formState.to === ""}
                type="date"
                className={classes.textFieldDate}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                required
                onChange={(e) =>
                  handleFormStateChange({ type: "to", data: e.target.value })
                }
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
