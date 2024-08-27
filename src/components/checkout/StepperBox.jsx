import React, { useMemo } from "react";
import { Connector, StepperContainer } from "./styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PaymentIcon from "@mui/icons-material/Payment";
import StepComp from "./StepComp";
import ProgressButtons from "./ProgressButtons";

const stepObj = {
  0: {
    icon: <ShoppingBagIcon fontSize="large"/>,
    label: "Bag"
  },
  1: {
    icon: <ImportContactsIcon fontSize="large"/>,
    label: "Address"
  },
  2: {
    icon: <PaymentIcon fontSize="large" />,
    label: "Payment"
  }
}

const StepperBox = () => {
  const steps = Object.keys(stepObj).map(key => stepObj[key].label);
  const stepIcons = Object.keys(stepObj).map(key => stepObj[key].icon);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());

  const totalSteps = useMemo(() => steps.length, [steps]);
  const isLastStep = () => activeStep === totalSteps - 1;
  const allStepsCompleted = () => completed.size === totalSteps;

  const handleNext = () => {
    const newActiveStep = isLastStep() ? totalSteps : activeStep + 1;
    setActiveStep(newActiveStep);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const handleStep = (step) => () => {
    setActiveStep(step);
  }

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);
    handleNext();
  }

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
  }

  return (
    <StepperContainer>
      <StepComp
        active={activeStep}
        completed={completed}
        steps={steps}
        icons={stepIcons}
        total={totalSteps}
      />
      <ProgressButtons
        active={activeStep}
        total={totalSteps}
        handleNext={handleNext}
        handleBack={handleBack}
        handleCompleted={handleComplete}
        handleReset={handleReset}
      />
    </StepperContainer>
  )
}

export default StepperBox;
