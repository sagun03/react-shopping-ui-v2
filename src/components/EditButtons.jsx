import { StyledButton } from "./styles/ProfilePanel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PropTypes from "prop-types";

export const SaveButton = ({ type, name }) => {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      type={type}
      startIcon={<SaveIcon />}
    >
      {name}
    </StyledButton>
  )
};

SaveButton.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export const CancelButton = ({ onClick, name }) => {
  return (
    <StyledButton
      variant="contained"
      color="error"
      type="button"
      startIcon={<HighlightOffIcon />}
      onClick={onClick}
    >
      {name}
    </StyledButton>
  )
}

export const EditButton = ({ onClick, name }) => {
  return (
    <StyledButton
      variant="contained"
      color="secondary"
      type="button"
      startIcon={<EditIcon />}
      onClick={onClick}
    >
      {name}
    </StyledButton>
  )
}

// proptype validation
const buttonPropType = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

CancelButton.propTypes = buttonPropType;
EditButton.propTypes = buttonPropType;
