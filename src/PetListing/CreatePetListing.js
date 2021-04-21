import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import YourInfo from "./YourInfo";
import PetInfo from "./PetInfo";
import { SuccessNotification } from "../components/Notification";
import Header from "../components/Header";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CatListing from "./CatListing";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "10px 100px",
    padding: "20px",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginBottom: theme.spacing(1),
  },
  buttonGroupRightAlign: {
    textAlign: "right",
  },
}));

function getSteps() {
  return ["Your Info", "Your Pet's Info", "Confirm"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <YourInfo />;
    case 1:
      return <PetInfo />;
    case 2:
      return <CatListing />;
    // return <Confirm />;
    default:
      return "Unknown step";
  }
}

const CreatePetListing = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openNotification, setOpenNotification] = React.useState(false);
  const steps = getSteps();
  const history = useHistory();

  const handleNext = () => {
    if (activeStep === 2) {
      setOpenNotification(true);
      setTimeout(() => {
        // history.push("/PetSearchDetails?false");
        history.push("/ConfirmListing");
      }, 2500);
      return;
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <SuccessNotification
        message="Your pet listing has been created."
        open={openNotification}
      />
      <Button
        onClick={() => {
          history.push("/");
        }}
        className={classes.backButton}
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
      <Grid container justify="center">
        <Header value="List your pet for foster care"></Header>
      </Grid>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.buttonGroupRightAlign}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CreatePetListing;
