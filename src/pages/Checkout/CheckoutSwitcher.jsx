import React, { useEffect } from "react";
import { useStepperContext } from "../../context/StepperContext";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const CheckoutSwitcher = ({ children }) => {
  const { activeStep, stepLinks } = useStepperContext();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(stepLinks[activeStep]);
  }, [activeStep, navigate]);
  return (
    <>
      {children}
    </>
  )
}

CheckoutSwitcher.propTypes = {
  children: PropTypes.node.isRequired
}

export default CheckoutSwitcher;
