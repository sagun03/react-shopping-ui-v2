import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProgressButtonContainer, ProgressButton } from "./styles";
import { setActiveStep } from "@/store/slices/stepperSlice";

const ProgressButtons = () => {
  const dispatch = useDispatch();

  // Select state from Redux store
  const { activeStep, steps } = useSelector((state) => state.stepper);
  const totalSteps = steps.length;

  const handleNext = () => {
    if (activeStep < totalSteps - 1) {
      dispatch(setActiveStep(activeStep + 1));
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      dispatch(setActiveStep(activeStep - 1));
    }
  };

  return (
    <ProgressButtonContainer>
      <ProgressButton disabled={activeStep === 0} onClick={handleBack}>
        Back
      </ProgressButton>
      <ProgressButton
        disabled={activeStep === totalSteps - 1}
        onClick={handleNext}
      >
        Next
      </ProgressButton>
    </ProgressButtonContainer>
  );
};

export default ProgressButtons;
