import React from "react";
import { StepLabelRoot, LabelRootInner } from "./styles";
import PropTypes from "prop-types";

const ConnectorLabel = ({ active, completed, step }) => {
  return (
    <StepLabelRoot ownerState={{ active, completed }}>
      <LabelRootInner ownerState={{ active, completed }}>
        {step}
      </LabelRootInner>
    </StepLabelRoot>
  )
};

ConnectorLabel.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  step: PropTypes.string.isRequired
}

export default ConnectorLabel;
