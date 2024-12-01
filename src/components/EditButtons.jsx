// import { StyledButton } from "./styles/ProfilePanel";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PropTypes from "prop-types";

export const SaveButton = ({ type, name, styles }) => {
  return (
    <Button
      variant="contained"
      type={type}
      startIcon={<SaveIcon />}
      sx={styles}
    >
      {name}
    </Button>
  )
};

export const CancelButton = ({ onClick, name, styles }) => {
  return (
    <Button
      variant="contained"
      color="error"
      type="button"
      startIcon={<HighlightOffIcon />}
      onClick={onClick}
      sx={styles}
    >
      {name}
    </Button>
  )
}

export const EditButton = ({ onClick, name, styles }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      type="button"
      startIcon={<EditIcon />}
      onClick={onClick}
      sx={styles}
    >
      {name}
    </Button>
  )
}

// proptype validation
const buttonPropType = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  styles: PropTypes.object,
  type: PropTypes.string
};

SaveButton.propTypes = buttonPropType;
CancelButton.propTypes = buttonPropType;
EditButton.propTypes = buttonPropType;
