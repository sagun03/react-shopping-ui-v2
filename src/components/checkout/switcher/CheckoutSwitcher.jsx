import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const CheckoutSwitcher = ({ children }) => {
  const navigate = useNavigate();

  // Select activeStep and stepLinks from Redux store
  const { activeStep, steps } = useSelector((state) => state.stepper);

  useEffect(() => {
    if (steps[activeStep]?.link) {
      navigate(steps[activeStep].link);
    }
  }, [activeStep, navigate, steps]);

  return <>{children}</>;
};

CheckoutSwitcher.propTypes = {
  children: PropTypes.node.isRequired
};

export default CheckoutSwitcher;
