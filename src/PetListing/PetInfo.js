import React, { useState, useRef } from "react";
import Radio from "@material-ui/core/Radio";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ButtonBase from "@material-ui/core/ButtonBase";

import { animals } from "../constants";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    padding: "20px",
  },
  sectionMargin: {
    marginTop: "30px",
  },
  photoRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  rootImage: {
    border: " 3px solid black",
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  imageTile: {
    border: " 3px solid lightgrey",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.4,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.1,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    bottom: "0",
    position: "absolute",
  },
  button: {
    marginRight: theme.spacing(2),
  },
  buttonGroupCenterAlign: {
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "20px",
  },
  addAnotherButton: {
    marginBottom: "30px",
  },
}));

const initialFormState = {
  name: null,
  type: null,
  age: null,
  ageUnit: "months",
  gender: null,
  pottyTrained: null,
  cats: null,
  dogs: null,
  kids: null,
  notes: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.data,
      };
    case "type":
      return {
        ...state,
        type: action.data,
      };
    case "breed":
      return {
        ...state,
        breed: action.data,
      };
    case "age":
      return {
        ...state,
        age: action.data,
      };
    case "ageUnit":
      return {
        ...state,
        age: action.data,
      };
    case "gender":
      return {
        ...state,
        gender: action.data,
      };
    case "pottyTrained":
      return {
        ...state,
        pottyTrained: action.data,
      };
    case "kids":
      return {
        ...state,
        kids: action.data,
      };
    case "cats":
      return {
        ...state,
        cats: action.data,
      };
    case "dogs":
      return {
        ...state,
        dogs: action.data,
      };
    case "notes":
      return {
        ...state,
        notes: action.data,
      };
    default:
      throw new Error();
  }
};

const PetInfo = (props) => {
  const classes = useStyles();
  const fileUploader = useRef(null);
  const [tileData] = useState([
    { img: "/static/images/details/kitty-1.jpg" },
    {},
    {},
    {},
  ]);
  const [formState, setFormState] = React.useReducer(reducer, initialFormState);

  React.useEffect(() => {
    props.setDisableSubmit(
      !formState.name ||
        !formState.name ||
        !formState.type ||
        !formState.age ||
        !formState.ageUnit ||
        formState.gender === null ||
        !formState.pottyTrained === null ||
        !formState.kids === null ||
        !formState.cats === null ||
        !formState.dogs === null ||
        !formState.notes
    );
    console.log("formState", formState);
  }, [formState, props]);

  const KeyFacts = (props) => (
    <>
      <Grid item xs={4}>
        <Typography variant="subtitle1">{props.label}</Typography>
      </Grid>
      <Grid item xs={7}>
        <FormControl component="fieldset" required error={props.error}>
          <RadioGroup
            name={props.type}
            style={{ flexDirection: "row" }}
            value={formState[props.type]}
            onChange={(e) => {
              console.log("e.target.value", e.target.value);
              setFormState({
                type: props.type,
                data: e.target.value,
              });
            }}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio size="small" />}
              label="Yes"
            />
            <FormControlLabel
              value="No"
              control={<Radio size="small" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );

  return (
    <div>
      <form className={classes.form} noValidate>
        <Grid container justify="flex-start">
          <Grid container item xs={6}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Basic Pet Info</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                required
                error={formState.name === ""}
                onChange={(e) =>
                  setFormState({ type: "name", data: e.target.value })
                }
                margin="dense"
                fullWidth
                id="name"
                label="Name"
                name="name"
                size="small"
              />
              <FormControl
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth
                required
              >
                <InputLabel>Animal type</InputLabel>
                <Select
                  labelId=""
                  id="demo-simple-select-outlined"
                  label="Animal Type"
                  error={formState.type === ""}
                  onChange={(e) =>
                    setFormState({ type: "type", data: e.target.value })
                  }
                >
                  {animals.map((animal) => (
                    <MenuItem value={animal}>{animal}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                margin="dense"
                fullWidth
                id="breed"
                label="Breed"
                name="breed"
                size="small"
              />
              <Grid container item spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    error={formState.age === ""}
                    onChange={(e) =>
                      setFormState({ type: "age", data: e.target.value })
                    }
                    margin="dense"
                    fullWidth
                    type="number"
                    id="age"
                    label="Age"
                    name="age"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    variant="outlined"
                    size="small"
                    margin="dense"
                    required
                    fullWidth
                  >
                    {/* <InputLabel>Animal type</InputLabel> */}
                    <div>
                      <Select
                        variant="outlined"
                        size="small"
                        margin="dense"
                        required
                        fullWidth
                        labelId=""
                        id="demo-simple-select-outlined"
                        error={formState.ageUnit === ""}
                        defaultValue={"months"}
                        onChange={(e) =>
                          setFormState({
                            type: "ageUnit",
                            data: e.target.value,
                          })
                        }
                      >
                        <MenuItem value={"months"}>months</MenuItem>
                        <MenuItem value={"years"}>years</MenuItem>
                      </Select>
                    </div>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Gender</Typography>
                </Grid>
                <Grid item xs={7}>
                  <FormControl
                    component="fieldset"
                    required
                    error={formState.gender === null}
                    onChange={(e) =>
                      setFormState({
                        type: "gender",
                        data: e.target.value,
                      })
                    }
                  >
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      style={{ flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="Female"
                        control={<Radio size="small" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="Male"
                        control={<Radio size="small" />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} className={classes.sectionMargin}>
              <Typography variant="subtitle1">Key Facts</Typography>
            </Grid>
            <Grid
              container
              item
              xs={9}
              alignItems="center"
              className={classes.sectionMargin}
            >
              {/* <KeyFacts label="Housebroken" /> */}
              <KeyFacts
                label="Potty trained"
                error={formState.pottyTrained === null}
                type="pottyTrained"
              />
              <KeyFacts
                label="Good with kids"
                type="kids"
                error={formState.kids === null}
                onChange={(e) =>
                  setFormState({
                    type: "kids",
                    data: e.target.value,
                  })
                }
              />
              <KeyFacts
                label="Good with cats"
                type="cats"
                error={formState.cats === ""}
                onChange={(e) =>
                  setFormState({
                    type: "cats",
                    data: e.target.value,
                  })
                }
              />
              <KeyFacts
                label="Good with dogs"
                type="dogs"
                error={formState.cats === ""}
                onChange={(e) =>
                  setFormState({
                    type: "dogs",
                    data: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={3} className={classes.sectionMargin}>
              <Typography variant="subtitle1">Owner's notes</Typography>
            </Grid>
            <Grid
              container
              item
              xs={8}
              alignItems="center"
              className={classes.sectionMargin}
            >
              <TextField
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={4}
                variant="outlined"
                required
                error={formState.notes === ""}
                onChange={(e) =>
                  setFormState({
                    type: "notes",
                    data: e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Photos</Typography>
            </Grid>
            <Grid item xs={8}>
              <div className={classes.photoRoot}>
                <GridList cellHeight={180} className={classes.gridList}>
                  {tileData.map((tile, index) => (
                    <GridListTile key={tile.img} className={classes.imageTile}>
                      <ButtonBase
                        focusRipple
                        key={tile.img}
                        className={classes.image}
                        onClick={() => fileUploader.current.click()}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <span
                          className={classes.imageSrc}
                          style={{
                            backgroundImage: `url(${tile.img})`,
                          }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                          {!tile.img && <AddIcon fontSize="large" />}
                          {index === 0 && (
                            <Typography
                              component="span"
                              variant="subtitle1"
                              color="inherit"
                              className={classes.imageTitle}
                            >
                              Display picture
                              <span className={classes.imageMarked} />
                            </Typography>
                          )}
                          <input ref={fileUploader} type="file" hidden />
                        </span>
                      </ButtonBase>
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <div className={classes.buttonGroupCenterAlign}>
        {props.index >= 1 && (
          <Button
            className={classes.button}
            onClick={() => props.setPetCount(props.petCount - 1)}
          >
            Remove
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.setPetCount(props.petCount + 1)}
          className={classes.button}
        >
          Add another
        </Button>
      </div>
      <Divider />
    </div>
  );
};

const PetInfoContainer = ({ setDisableSubmit }) => {
  const [petCount, setPetCount] = useState(1);

  return (
    <>
      {[...Array(petCount)].map((v, i) => (
        <PetInfo
          setDisableSubmit={setDisableSubmit}
          key={i}
          petCount={petCount}
          setPetCount={setPetCount}
          index={i}
        />
      ))}
    </>
  );
};

export default PetInfoContainer;
