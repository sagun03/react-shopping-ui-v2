import { useMemo } from "react";
import { FormHelperText } from "@mui/material";
import { StyledTextField, Container } from "./styles";
import { useAddressContext } from "./DataProvider";
import PropTypes from "prop-types";

export const TextInput = ({
  label,
  name,
  group,
  value,
  onChange,
  required,
  autocomplete,
  disabled
}) => {
  const { validation } = useAddressContext();
  const helperText = useMemo(() => {
    if (!validation[group][name]) {
      return `${label} is required`;
    } else {
      return "";
    }
  }, [validation]);

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
        <FormHelperText
        sx={
          { color: "red", marginBlock: "-5px 10px" }
        }
        >{helperText}</FormHelperText>
      }
    </Container>
  )
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  autocomplete: PropTypes.string.isRequired
};
