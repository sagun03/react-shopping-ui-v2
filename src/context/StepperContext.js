import { createContext, useContext, useState, useMemo } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PaymentIcon from "@mui/icons-material/Payment";
import PropTypes from "prop-types";

const steps = {
  0: {
    icon: <ShoppingBagIcon fontSize="large"/>,
    label: "Cart",
    link: "/dev1/cart"
  },
  1: {
    icon: <ImportContactsIcon fontSize="large"/>,
    label: "Address",
    link: "/dev1/address"
  },
  2: {
    icon: <PaymentIcon fontSize="large" />,
    label: "Payment",
    link: "/dev1/payment"
  }
}

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  // data
  const stepLabels = Object.keys(steps).map(key => steps[key].label);
  const stepIcons = Object.keys(steps).map(key => steps[key].icon);
  const stepLinks = Object.keys(steps).map(key => steps[key].link);

  // state
  const [activeStep, setActiveStep] = useState(0);
  const [completed] = useState(new Set());

  const totalSteps = useMemo(() => stepLabels.length, [stepLabels]);
  const isLastStep = () => activeStep === totalSteps - 1;

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

  return (
    <StepperContext.Provider value={{
      steps,
      stepLabels,
      stepIcons,
      stepLinks,
      activeStep,
      setActiveStep,
      completed,
      totalSteps,
      handleBack,
      handleNext,
      handleStep
    }}>
      {children}
    </StepperContext.Provider>
  );
}

export const useStepperContext = () => {
  return useContext(StepperContext);
}

StepperProvider.propTypes = {
  children: PropTypes.node.isRequired
};
