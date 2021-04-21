import React, { useReducer } from "react";
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
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import { makeStyles } from "@material-ui/core/styles";
import { animals, ages, gender } from "../constants";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },

  drawerPaper: {
    top: "auto !important",
    width: drawerWidth,
    position: "absolute",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
    maxWidth: "70%",
  },
  title: {
    textAlign: "center",
    margin: "5px 0",
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
  search: {
    width: "100%",
  },
}));

const initialFilter = {
  search: "",
  type: [],
  age: [],
  gender: [],
  toDate: "",
  fromDate: "",
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "setSearch":
      newState = {
        ...state,
        search: action.data,
      };
      break;
    case "setType":
      newState = {
        ...state,
        type: action.data,
      };
      break;
    case "setAge":
      newState = {
        ...state,
        age: action.data,
      };
      break;
    case "setGender":
      newState = {
        ...state,
        gender: action.data,
      };
      break;
    case "setToDate":
      newState = {
        ...state,
        toDate: action.data,
      };
      break;
    case "setFromDate":
      newState = {
        ...state,
        fromDate: action.data,
      };
      break;
    case "resetFilters":
      return initialFilter;
    default:
      throw new Error();
  }
  return newState;
};

export const Filters = ({ petsList, setFilteredPets }) => {
  const classes = useStyles();

  const [filters, setFilters] = useReducer(reducer, initialFilter);

  const handleFiltering = () => {
    const filtered = petsList.filter((pet) => {
      const searchString = getSearchFilter(pet);
      const typeFilter = getTypeFilter(pet);
      const genderFilter = getGenderFilter(pet);
      const ageFilter = getAgeFilter(pet);
      return typeFilter && genderFilter && searchString && ageFilter;
    });
    setFilteredPets(filtered);
  };

  const handleReset = () => {
    setFilters({ type: "resetFilters" });
    setFilteredPets(petsList);
  };

  const getAgeFilter = (pet) => {
    if (!filters.age.length) return true;
    const ids = filters.age.reduce((acc, p) => acc.concat(p.result), []);
    return ids.includes(pet.id);
  };

  const getSearchFilter = (pet) => {
    if (!filters.search) return true;
    return filters.search.toLowerCase().indexOf(pet.name.toLowerCase()) > -1;
  };

  const getTypeFilter = (pet) => {
    if (!filters.type.length) return true;
    return filters.type.includes(pet.type);
  };

  const getGenderFilter = (pet) => {
    if (!filters.gender.length) return true;
    return filters.gender.includes(pet.gender);
  };

  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <InputBase
            className={classes.search}
            placeholder="Search by pet name"
            inputProps={{ "aria-label": "search by pet name" }}
            value={filters.search}
            onChange={(e) =>
              setFilters({ type: "setSearch", data: e.target.value })
            }
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={handleFiltering}
          >
            <SearchIcon />
          </IconButton>
        </ListItem>
        <Divider />
        <Typography variant="subtitle1" className={classes.title}>
          Filters
        </Typography>
        <Divider />
        {/*--------------------------------------------------------- */}
        <ListItem button>
          <ListItemText primary="Type" />
          <FormControl className={classes.formControl}>
            <Select
              multiple
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              value={filters.type}
              onChange={(e) =>
                setFilters({ type: "setType", data: e.target.value })
              }
            >
              {animals.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={filters.type.indexOf(name) > -1} />
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
              value={filters.age}
              onChange={(e) =>
                setFilters({ type: "setAge", data: e.target.value })
              }
              input={<Input />}
              renderValue={(selected) =>
                selected.map((v) => v.label).join(", ")
              }
            >
              {ages.map((obj) => (
                <MenuItem key={obj.label} value={obj}>
                  <Checkbox
                    checked={
                      filters.age.map((v) => v.label).indexOf(obj.label) > -1
                    }
                  />
                  <ListItemText primary={obj.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        {/*--------------------------------------------------------- */}
        <ListItem button>
          <ListItemText primary="Gender" />
          <FormControl className={classes.formControl}>
            <Select
              multiple
              value={filters.gender}
              onChange={(e) =>
                setFilters({ type: "setGender", data: e.target.value })
              }
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
            >
              {gender.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={filters.gender.indexOf(name) > -1} />
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
          value={filters.fromDate}
          onChange={(e) =>
            setFilters({ type: "setFromDate", data: e.target.value })
          }
        />
        <TextField
          id="date"
          label="To"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          value={filters.toDate}
          onChange={(e) =>
            setFilters({ type: "setToDate", data: e.target.value })
          }
        />
        {/*--------------------------------------------------------- */}
      </List>
      <div className={classes.filterBtn}>
        <Button variant="contained" color="primary" onClick={handleFiltering}>
          Apply
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};
