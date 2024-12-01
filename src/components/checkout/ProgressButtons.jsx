import React from "react";
import { ProgressButtonContainer, ProgressButton } from "./styles";
import { useStepperContext } from "../../context/StepperContext";

const ProgressButtons = () => {
  const { activeStep, totalSteps, handleNext, handleBack } = useStepperContext();
  return (
    <ProgressButtonContainer>
      <ProgressButton disabled={activeStep === 0} onClick={handleBack}>Back</ProgressButton>
      <ProgressButton disabled={activeStep === totalSteps - 1} onClick={handleNext}>Next</ProgressButton>
    </ProgressButtonContainer>
  )
}

export default ProgressButtons;
