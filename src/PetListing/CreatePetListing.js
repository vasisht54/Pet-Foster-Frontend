import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import YourInfo from "./YourInfo";
import PetInfo from "./PetInfo";
import Confirm from "./ConfirmListing";


const useStyles = makeStyles((theme) => ({
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
      return <Confirm />;
    default:
      return "Unknown step";
  }
}

const CreatePetListing = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h4" style={{padding:"0 20px"}}>List your pet for foster care</Typography>
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
