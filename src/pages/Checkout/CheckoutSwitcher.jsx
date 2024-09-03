import React, { useEffect } from "react";
import { useStepperContext } from "../../context/StepperContext";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { AddressProvider } from "../../components/address/DataProvider";

const CheckoutSwitcher = ({ children }) => {
  const { activeStep, stepLinks } = useStepperContext();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(stepLinks[activeStep]);
  }, [activeStep, navigate]);
  return (
    <AddressProvider>
      {children}
    </AddressProvider>
  )
}

CheckoutSwitcher.propTypes = {
  children: PropTypes.node.isRequired
}

export default CheckoutSwitcher;
