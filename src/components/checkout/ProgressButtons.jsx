import React from "react";
import { ProgressButtonContainer, ProgressButton } from "./styles";
import PropTypes from "prop-types";

const ProgressButtons = ({ active, total, handleNext, handleBack, handleCompleted, handleReset }) => {
  return (
    <ProgressButtonContainer>
      <ProgressButton disabled={active === 0} onClick={handleBack}>Back</ProgressButton>
      <ProgressButton disabled={active === total - 1} onClick={handleNext}>Next</ProgressButton>
      <ProgressButton onClick={handleCompleted}>Complete Step</ProgressButton>
      <ProgressButton onClick={handleReset}>Reset</ProgressButton>
    </ProgressButtonContainer>
  )
}

ProgressButtons.propTypes = {
  active: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
}

export default ProgressButtons;
