import React, { useState } from "react";
import { Separater } from "../../components";
import { Container, withStyles, Typography } from "@material-ui/core";
import { styleSheet } from "../../jss/pages/slide5";
import { Navbar } from "../../containers";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Step4 from "./components/step4";
import Step5 from "./components/step5";
import Step6 from "./components/step6";

function getSteps() {
  return ["1", "2", "3", "4", "5", "6"];
}

function Slide5(props) {
  const { classes } = props;
  const [activeStep, setActiveStep] = useState(0);

  const totalSteps = () => {
    return getSteps().length;
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 handleNext={handleNext} />;
      case 1:
        return <Step2 handleNext={handleNext} />;
      case 2:
        return <Step3 handleNext={handleNext} />;
      case 3:
        return <Step4 handleNext={handleNext} />;
      case 4:
        return <Step5 handleNext={handleNext} />;
      case 5:
        return <Step6 handleNext={handleNext} />;
      default:
        return "Unknown step";
    }
  }
  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    if (newActiveStep !== totalSteps()) {
      setActiveStep(newActiveStep);
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Separater />
      <Container>
        <div>
          <Typography>{getStepContent(activeStep)}</Typography>
          <div></div>
        </div>
      </Container>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Slide5" })(Slide5);
