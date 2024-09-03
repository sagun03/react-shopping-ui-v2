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
  CommonText,
  ButtonGroup
} from "./styles";
import { TextInput } from "./InputField";
import { useAddressContext } from "./DataProvider";
import { SaveButton, CancelButton } from "../EditButtons";
import { Button, Checkbox } from "@mui/material";
import ErrorBox from "./ErrorBox";
import propTypes from "prop-types";
import { useUserContext } from "../../context/UserContext";

const Form = ({ index, closeModal }) => {
  const {
    state,
    dispatch,
    validate,
    address,
    setAddress,
    selectedAddress,
    defaultIndex,
    setDefaultIndex,
    refetch,
    addAddressMutation: add,
    updateAddressMutation: update,
    deleteAddressMutation: remove
  } = useAddressContext();
  const { user } = useUserContext();
  const [pref, setPref] = useState("HOME");
  const [error, setError] = useState({ state: false, message: "" });
  const handleChange = (type, field) => (e) => {
    dispatch({
      type: `UPDATE_${type.toUpperCase()}`,
      field,
      value: e.target.value
    });
  }

  useEffect(() => {
    if (index >= 0) {
      for (const key in address[index]) {
        dispatch({
          type: "UPDATE_CONTACT",
          field: key,
          value: address[index][key]
        });
        dispatch({
          type: "UPDATE_ADDRESS",
          field: key,
          value: address[index][key]
        });
        dispatch({
          type: "UPDATE_PREF",
          value: address[index].pref
        });
        dispatch({
          type: "UPDATE_DEFAULT",
          value: address[index].defaultAddress
        });
      }
    } else {
      dispatch({ type: "RESET" });
    }
  }, [selectedAddress])

  const flattenData = () => {
    const data = {
      ...state.contact,
      ...state.address,
      pref: pref,
      defaultAddress: state.defaultAddress
    }
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDesc = e.nativeEvent.submitter.innerText;
    if (validate()) {
      console.log("Validation passed");
      setError({ state: false, message: "" });
      if (eventDesc === "SAVE") {
        console.log(flattenData());
        add.mutate({ token: user.accessToken, ...flattenData() });
        if (add.error) {
          closeModal();
          return;
        }
        setAddress([...address, flattenData()]);
        console.log("Data submitted", address);
      }
      if (eventDesc === "UPDATE") {
        const updatedData = {
          token: user.accessToken,
          uid: user.uid,
          _id: address[index]._id,
          ...flattenData()
        }
        update.mutate(updatedData);
        if (updatedData.defaultAddress) {
          setDefaultIndex(index);
          setAddress(address.map((element, i) => i === index ? updatedData : { ...element, defaultAddress: false }));
        } else {
          setAddress(address.map((element, i) => i === index ? updatedData : element));
        }
        console.log("Data updated", state);
      }
      closeModal();
    } else {
      console.log("Validation failed");
      setError({ state: true, message: "Please fill all the required fields" });
    }
  }

  const handleDelete = () => {
    remove.mutate({ uid: user.uid, token: user.accessToken, id: address[index]._id });
    setAddress(address.filter((element, i) => i !== index));
    closeModal();
  }

  return (
    <AddressForm onSubmit={handleSubmit} noValidate>
      { error.state && <ErrorBox>
        <p>{ error.message }</p>
      </ErrorBox> }
      <InputContainer>
        <InnerHeading>CONTACT DETAILS</InnerHeading>
        <TextInput
          label="Name"
          name="name"
          group="contact"
          value={state.contact.name}
          required
          autocomplete="name"
          onChange={handleChange("contact", "name")}
        />
        <TextInput
          label="Mobile"
          name="mobile"
          group="contact"
          value={state.contact.mobile}
          required
          autocomplete="tel"
          onChange={handleChange("contact", "mobile")}
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
            dispatch({ type: "UPDATE_PREF", value: "HOME" })
          }}> Home </Button>
          <Button variant="outlined" sx={ pref === "WORK" ? {
            ...ChipStyles,
            color: "#008080",
            border: "1px solid #008080",
            backgroundColor: "rgba(0, 128, 128, 0.1)"
          } : ChipStyles} onClick={() => {
            setPref("WORK");
            dispatch({ type: "UPDATE_PREF", value: "WORK" })
          }}> Work </Button>
        </ChipGroup>
      </InputContainer>
      <InputContainer>
        <CheckBoxContainer>
          <Checkbox
          checked={state.defaultAddress}
          onChange={(e) => {
            dispatch({ type: "UPDATE_DEFAULT", value: e.target.checked })
          }}
          sx={{ color: "#008080 !important" }}
          />
          <CommonText>Make This my default Address</CommonText>
        </CheckBoxContainer>
      </ InputContainer>
      {
        index >= 0 ? (
          <ButtonGroup>
            <SaveButton type="submit" name="Update" styles={{ backgroundColor: "#008080", ...ButtonStyles }}/>
            <CancelButton onClick={handleDelete} name="Delete" styles={{ backgroundColor: "#FF6347", ...ButtonStyles }}/>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <SaveButton type="submit" name="Save" styles={{ backgroundColor: "#008080", ...ButtonStyles }}/>
            <CancelButton onClick={closeModal} name="Cancel" styles={{ backgroundColor: "#FF6347", ...ButtonStyles }}/>
          </ButtonGroup>
        )
      }
    </AddressForm>
  )
}

Form.propTypes = {
  index: propTypes.number,
  closeModal: propTypes.func
}

export default Form;
