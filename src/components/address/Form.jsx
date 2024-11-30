import { useEffect, useState, useMemo } from "react";
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
import { SaveButton, CancelButton } from "../EditButtons";
import { Button, Checkbox } from "@mui/material";
import propTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ErrorBox from "./ErrorBox";
import { performValidations } from "./validations";
import {
  updateContact,
  updateAddressField,
  updatePref,
  updateDefaultAddress,
  resetState,
  setSubmit,
  addNewAddress,
  updateExistingAddress,
  removeAddress,
  setAddressList,
  setDefaultIndex
} from "../../redux/port/addressSlice";

const Form = ({ index, closeModal }) => {
  const dispatch = useDispatch();

  const { contact, address, pref, defaultAddress, submit, addressList, selectedAddress } = useSelector(
    (state) => state.address
  );
  const { user } = useSelector((state) => state.user);

  const [localPref, setLocalPref] = useState("HOME");
  const [error, setError] = useState({ state: false, message: "" });

  const errorFields = useMemo(() => {
    const fields = {};
    if (error.message) {
      error.message.forEach((obj) => {
        fields[obj.path[0]] = obj.message;
      });
    }
    return fields;
  }, [error]);

  const handleChange = (type, field) => (e) => {
    dispatch(setSubmit(false));
    if (type === "contact") {
      dispatch(updateContact({ field, value: e.target.value }));
    } else {
      dispatch(updateAddressField({ field, value: e.target.value }));
    }
  };

  useEffect(() => {
    if (index >= 0) {
      const currentAddress = addressList[index];
      for (const key in currentAddress) {
        dispatch(updateContact({ field: key, value: currentAddress[key] }));
        dispatch(updateAddressField({ field: key, value: currentAddress[key] }));
        dispatch(updatePref(currentAddress.pref));
        dispatch(updateDefaultAddress(currentAddress.defaultAddress));
      }
    } else {
      dispatch(resetState());
    }
  }, [selectedAddress, index, addressList, dispatch]);

  const flattenData = () => {
    return {
      ...contact,
      ...address,
      pref: localPref,
      defaultAddress
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSubmit(true));
    const eventDesc = e.nativeEvent.submitter.innerText;
    const vRes = performValidations({ contact, address, pref, defaultAddress });

    if (vRes.isValid) {
      console.log("Validation passed");
      setError({ state: false, message: "" });

      if (eventDesc === "SAVE") {
        const data = flattenData();
        dispatch(
          addNewAddress({
            address: data,
            uid: user.uid,
            token: user.accessToken
          })
        ).then(() => {
          dispatch(setAddressList([...addressList, data]));
          closeModal();
        });
      }

      if (eventDesc === "UPDATE") {
        const updatedData = {
          token: user.accessToken,
          uid: user.uid,
          _id: addressList[index]._id,
          ...flattenData()
        };
        dispatch(updateExistingAddress(updatedData)).then(() => {
          if (updatedData.defaultAddress) {
            dispatch(setDefaultIndex(index));
            dispatch(
              setAddressList(
                addressList.map((element, i) =>
                  i === index ? updatedData : { ...element, defaultAddress: false }
                )
              )
            );
          } else {
            dispatch(
              setAddressList(
                addressList.map((element, i) => (i === index ? updatedData : element))
              )
            );
          }
          closeModal();
        });
      }
    } else {
      console.log("Validation failed");
      setError({ state: true, message: vRes.errors });
    }
  };

  const handleDelete = () => {
    dispatch(
      removeAddress({
        uid: user.uid,
        token: user.accessToken,
        id: addressList[index]._id
      })
    ).then(() => {
      dispatch(setAddressList(addressList.filter((_, i) => i !== index)));
      closeModal();
    });
  };

  return (
    <AddressForm onSubmit={handleSubmit} noValidate>
      {error.state && <ErrorBox errors={errorFields} />}
      <InputContainer>
        <InnerHeading>CONTACT DETAILS</InnerHeading>
        <TextInput
          label="Name"
          name="name"
          value={contact.name}
          required
          autocomplete="name"
          onChange={handleChange("contact", "name")}
        />
        <TextInput
          label="Mobile"
          name="mobile"
          value={contact.mobile}
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
          value={address.street}
          required
          autocomplete="street-address"
          onChange={handleChange("address", "street")}
        />
        <TextInput
          label="City"
          name="city"
          value={address.city}
          required
          autocomplete="address-level2"
          onChange={handleChange("address", "city")}
        />
        <SmallButtonGroup>
          <TextInput
            label="State"
            name="state"
            value={address.state}
            required
            autocomplete="address-level1"
            onChange={handleChange("address", "state")}
          />
          <TextInput
            label="Pincode"
            name="pincode"
            value={address.pincode}
            required
            autocomplete="postal-code"
            onChange={handleChange("address", "pincode")}
          />
        </SmallButtonGroup>
      </InputContainer>

      <InputContainer>
        <InnerHeading>SAVE ADDRESS AS</InnerHeading>
        <ChipGroup>
          <Button
            variant="outlined"
            sx={
              localPref === "HOME"
                ? {
                    ...ChipStyles,
                    color: "white",
                    border: "1px solid #FF7961",
                    backgroundColor: "#FF7961"
                  }
                : ChipStyles
            }
            onClick={() => {
              setLocalPref("HOME");
              dispatch(updatePref("HOME"));
            }}
          >
            Home
          </Button>
          <Button
            variant="outlined"
            sx={
              localPref === "WORK"
                ? {
                    ...ChipStyles,
                    color: "white",
                    border: "1px solid #FF7961",
                    backgroundColor: "#FF7961"
                  }
                : ChipStyles
            }
            onClick={() => {
              setLocalPref("WORK");
              dispatch(updatePref("WORK"));
            }}
          >
            Work
          </Button>
        </ChipGroup>
      </InputContainer>

      <InputContainer>
        <CheckBoxContainer>
          <Checkbox
            checked={defaultAddress}
            onChange={(e) => {
              dispatch(updateDefaultAddress(e.target.checked));
            }}
            sx={{ color: "#F44336 !important" }}
          />
          <CommonText>Make This my default Address</CommonText>
        </CheckBoxContainer>
      </InputContainer>

      {index >= 0 ? (
        <ButtonGroup>
          <SaveButton
            type="submit"
            name="Update"
            styles={{ backgroundColor: "#F44336", ...ButtonStyles }}
          />
          <CancelButton
            onClick={handleDelete}
            name="Delete"
            styles={{ backgroundColor: "#F0C14A", ...ButtonStyles }}
          />
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <SaveButton
            type="submit"
            name="Save"
            styles={{ backgroundColor: "#F44336", ...ButtonStyles }}
          />
          <CancelButton
            onClick={closeModal}
            name="Cancel"
            styles={{ backgroundColor: "#F0C14A", ...ButtonStyles }}
          />
        </ButtonGroup>
      )}
    </AddressForm>
  );
};

Form.propTypes = {
  index: propTypes.number,
  closeModal: propTypes.func
};

export default Form;
