import { FormHelperText } from "@mui/material";
import { StyledTextField, Container } from "./styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const TextInput = ({
  label,
  name,
  value,
  onChange,
  required,
  autocomplete,
  disabled
}) => {
  const submit = useSelector(state => state.address.submit);
  return (
    <Container>
      <StyledTextField
        label={label}
        variant="outlined"
        name={name}
        value={value}
        required={required}
        autoComplete={autocomplete}
        disabled={disabled}
        onChange={onChange}
      />
      {
        required && <FormHelperText
        sx={
          { color: "red", marginBlock: "-5px 10px" }
        }
        > {submit ? (value?.length >= 1 ? "" : `${label} is required`) : ""}</FormHelperText>
      }
    </Container>
  )
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  autocomplete: PropTypes.string.isRequired
};
