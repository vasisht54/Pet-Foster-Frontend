import React from "react";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { animals, ages } from "../constants";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    top: "auto !important",
    width: drawerWidth,
    position: "absolute",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  title: {
    textAlign: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
    fontSize: "13px",
  },
  filterBtn: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}));

export const Filters = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <Typography className={classes.title}>Filters</Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Type" />
          <FormControl className={classes.formControl}>
            <Select
              multiple
              value={[]}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
            >
              {animals.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        {/*--------------------------------------------------------- */}
        <ListItem button>
          <ListItemText primary="Age" />
          <FormControl className={classes.formControl}>
            <Select
              multiple
              value={[]}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
            >
              {ages.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        {/*--------------------------------------------------------- */}
        <TextField
          id="date"
          label="From"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="To"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </List>
      <div className={classes.filterBtn}>
        <Button variant="contained" color="primary">
          Apply
        </Button>
        <Button variant="contained" color="secondary">
          Reset
        </Button>
      </div>
    </div>
  );
};
