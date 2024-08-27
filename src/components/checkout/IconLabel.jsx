import React from "react";
import { StepIconRoot, IconRootInner } from "./styles";
import PropTypes from "prop-types";

const IconLabel = ({ active, completed, icon }) => {
  return (
    <StepIconRoot ownerState={{ active, completed }}>
      <IconRootInner>
        {icon}
      </IconRootInner>
    </StepIconRoot>
  )
};

IconLabel.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired
}

export default IconLabel;
