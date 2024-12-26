import React from "react";
import { StepIconRoot, IconRootInner } from "./styles";
import PropTypes from "prop-types";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PaymentIcon from "@mui/icons-material/Payment";

const IconLabel = ({ active, completed, icon }) => {
  return (
    <StepIconRoot ownerState={{ active, completed }}>
      <IconRootInner>
        {
          icon === "ShoppingBagIcon"
            ? <ShoppingBagIcon fontSize="large"/>
            : icon === "ImportContactsIcon"
              ? <ImportContactsIcon fontSize="large"/>
              : <PaymentIcon fontSize="large" />
        }
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
