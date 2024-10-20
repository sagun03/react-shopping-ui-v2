import { createContext, useContext, useState, useMemo, useEffect } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PaymentIcon from "@mui/icons-material/Payment";
import { useAddressContext } from "../components/address/DataProvider";
import PropTypes from "prop-types";

const steps = {
  0: {
    icon: <ShoppingBagIcon fontSize="large"/>,
    label: "Cart",
    link: "/checkout/cart"
  },
  1: {
    icon: <ImportContactsIcon fontSize="large"/>,
    label: "Address",
    link: "/checkout/address"
  },
  2: {
    icon: <PaymentIcon fontSize="large" />,
    label: "Payment",
    link: "/checkout/payment"
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
  const { selectedAddress } = useAddressContext();
  const [completed, setCompleted] = useState(new Set());

  const totalSteps = useMemo(() => stepLabels.length, [stepLabels]);
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
    console.log(step)
    switch (step) {
      case 0:
        handleComplete();
        setActiveStep(1);
        break;
      case 1:
        if (selectedAddress !== null) {
          handleComplete();
          setActiveStep(2);
        }
        break;
      default:
        console.log("Invalid step");
    }
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
      handleStep,
      handleComplete
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
