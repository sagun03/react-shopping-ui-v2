import {
  ButtonWrapper,
  LinkWrappper,
  Container
} from "./styles";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import PropTypes from "prop-types";
import ErrorModal from "./ErrorModal";

const Phoneform = ({ setToggle }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  }
  const reverseToggle = () => {
    setToggle(0);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setError("Please enter a phone number");
      return;
    }
    console.log(value);
  }
  return (
    <Container>
      {
        error && <ErrorModal error={error} setError={setError}/>
      }
      <MuiTelInput value={value} onChange={handleChange} defaultCountry="CA"/>
      <ButtonWrapper onClick={handleSubmit}>Send OTP</ButtonWrapper>
      <LinkWrappper onClick={reverseToggle}>Back</LinkWrappper>
    </Container>
  )
}

Phoneform.propTypes = {
  setToggle: PropTypes.func
}

export default Phoneform;
