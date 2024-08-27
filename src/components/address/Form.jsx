import { useEffect, useState } from "react";
import {
  AddressForm,
  InputContainer,
  ButtonStyles,
  InnerHeading,
  SmallButtonGroup,
  ChipGroup,
  ChipStyles,
  CheckBoxContainer,
  CommonText
} from "./styles";
import { TextInput } from "./InputField";
import { useAddressContext } from "./DataProvider";
import { SaveButton } from "../EditButtons";
import { Button, Checkbox } from "@mui/material";
import ErrorBox from "./ErrorBox";

const Form = () => {
  const { state, dispatch, validate } = useAddressContext();
  const [pref, setPref] = useState("HOME");
  const [error, setError] = useState({ state: false, message: "" });

  const handleChange = (type, field) => (e) => {
    dispatch({
      type: `UPDATE_${type.toUpperCase()}`,
      field,
      value: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Validation passed");
      setError({ state: false, message: "" });
      console.log("Data submitted", state);
    } else {
      console.log("Validation failed");
      setError({ state: true, message: "Please fill all the required fields" });
    }
  }

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <AddressForm onSubmit={handleSubmit} noValidate>
      { error.state && <ErrorBox>
        <p>{ error.message }</p>
      </ErrorBox> }
      <InputContainer>
        <InnerHeading>CONTACT DETAILS</InnerHeading>
        <TextInput
          label="Name"
          name="Name"
          group="contact"
          value={state.contact.Name}
          required
          autocomplete="name"
          onChange={handleChange("contact", "Name")}
        />
        <TextInput
          label="Mobile"
          name="Mobile"
          group="contact"
          value={state.contact.Mobile}
          required
          autocomplete="tel"
          onChange={handleChange("contact", "Mobile")}
        />
      </InputContainer>

      <InputContainer>
        <InnerHeading>ADDRESS</InnerHeading>
        <TextInput
          label="Street"
          name="street"
          group="address"
          value={state.address.street}
          required
          autocomplete="street-address"
          onChange={handleChange("address", "street")}
        />
        <TextInput
          label="City"
          name="city"
          group="address"
          value={state.address.city}
          required
          autocomplete="address-level2"
          onChange={handleChange("address", "city")}
        />
        <SmallButtonGroup>
          <TextInput
            label="State"
            name="state"
            group="address"
            value={state.address.state}
            required
            autocomplete="address-level1"
            onChange={handleChange("address", "state")}
          />
          <TextInput
            label="Pincode"
            name="pincode"
            group="address"
            value={state.address.pincode}
            required
            autocomplete="postal-code"
            onChange={handleChange("address", "pincode")}
          />
        </SmallButtonGroup>
      </InputContainer>
      <InputContainer>
        <InnerHeading>SAVE ADDRESS AS</InnerHeading>
        <ChipGroup>
          <Button variant="outlined" sx={ pref === "HOME" ? {
            ...ChipStyles,
            color: "#008080",
            border: "1px solid #008080",
            backgroundColor: "rgba(0, 128, 128, 0.1)"
          } : ChipStyles} onClick={() => {
            setPref("HOME");
            dispatch({ type: "UPDATE_PREF", value: "Home" })
          }}> Home </Button>
          <Button variant="outlined" sx={ pref === "WORK" ? {
            ...ChipStyles,
            color: "#008080",
            border: "1px solid #008080",
            backgroundColor: "rgba(0, 128, 128, 0.1)"
          } : ChipStyles} onClick={() => {
            setPref("WORK");
            dispatch({ type: "UPDATE_PREF", value: "Work" })
          }}> Work </Button>
        </ChipGroup>
      </InputContainer>
      <InputContainer>
        <CheckBoxContainer>
          <Checkbox
          checked={state.default}
          onChange={(e) => {
            dispatch({ type: "UPDATE_DEFAULT", value: e.target.checked })
          }}
          sx={{ color: "#008080 !important" }}
          />
          <CommonText>Make This my default Address</CommonText>
        </CheckBoxContainer>
      </ InputContainer>
      <SaveButton type="submit" name="Add Address" styles={{ backgroundColor: "#008080", ...ButtonStyles }}/>
    </AddressForm>
  )
}

export default Form;
