import { useState, useMemo, useEffect } from "react";
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
  setSubmit,
  updateExistingAddress,
  setAddressList,
  setDefaultIndex
} from "../../redux/port/addressSlice";

import { addAddress, updateAddress, deleteAddress } from "../../services/userServices.js/Address";

const Form = ({ refetch, index, closeModal }) => {
  const dispatch = useDispatch();

  const { emptyAddress, addressList, selectedAddress } = useSelector(
    (state) => state.address
  );

  const addressState = useSelector((state) => state.address);

  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (index >= 0) {
      setAddress(addressList[index]);
    } else {
      setAddress(emptyAddress);
    }
  }, [addressState]);

  const user = useSelector((state) => state.user.currentUser);

  const [error, setError] = useState({ state: false, message: "" });
  const { handleStep } = useStepperContext();

  const errorFields = useMemo(() => {
    const fields = {};
    if (error.message) {
      error.message.forEach((obj) => {
        fields[obj.path[0]] = obj.message;
      });
    }
    return fields;
  }, [error]);

  const handleChange = (field) => (e) => {
    dispatch(setSubmit(false));
    setAddress({ ...address, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSubmit(true));
    const eventDesc = e.nativeEvent.submitter.innerText;
    const vRes = performValidations(address);

    if (vRes.isValid) {
      console.log("Validation passed");
      setError({ state: false, message: "" });

      if (eventDesc === "SAVE") {
        addAddress(address).then(() => {
          dispatch(setAddressList([...addressList, address]));
          closeModal();
        }).catch((err) => {
          console.log(err);
        });
      }

      if (eventDesc === "UPDATE") {
        updateAddress(address).then(() => {
          dispatch(updateExistingAddress({ index, address }));
          closeModal();
        }).catch((err) => {
          console.log(err);
        });
      }
      refetch();
    } else {
      console.log("Validation failed");
      console.log(address)
      setError({ state: true, message: vRes.errors });
    }
  };

  const handleDelete = () => {
    deleteAddress({ uid: user.uid, id: addressList[index]._id })
      .then(() => {
        dispatch(setAddressList(addressList.filter((_, i) => i !== index)));
        closeModal();
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    address && (
    <AddressForm onSubmit={handleSubmit} noValidate>
      {error.state && <ErrorBox errors={errorFields} />}
      <InputContainer>
        <InnerHeading>CONTACT DETAILS</InnerHeading>
        <TextInput
          label="Name"
          name="name"
          value={address.name}
          required
          autocomplete="name"
          onChange={handleChange("name")}
        />
        <TextInput
          label="Mobile"
          name="mobile"
          value={String(address.mobile)}
          required
          autocomplete="tel"
          onChange={handleChange("mobile")}
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
          onChange={handleChange("street")}
        />
        <TextInput
          label="City"
          name="city"
          value={address.city}
          required
          autocomplete="address-level2"
          onChange={handleChange("city")}
        />
        <SmallButtonGroup>
          <TextInput
            label="State"
            name="state"
            value={address.state}
            required
            autocomplete="address-level1"
            onChange={handleChange("state")}
          />
          <TextInput
            label="Pincode"
            name="pincode"
            value={address.pincode}
            required
            autocomplete="postal-code"
            onChange={handleChange("pincode")}
          />
        </SmallButtonGroup>
      </InputContainer>

      <InputContainer>
        <InnerHeading>SAVE ADDRESS AS</InnerHeading>
        <ChipGroup>
          <Button
            variant="outlined"
            sx={
              address.pref === "HOME"
                ? {
                    ...ChipStyles,
                    color: "white",
                    border: "1px solid #FF7961",
                    backgroundColor: "#FF7961"
                  }
                : ChipStyles
            }
            onClick={() => {
              setAddress({ ...address, pref: "HOME" });
            }}
          >
            Home
          </Button>
          <Button
            variant="outlined"
            sx={
              address.pref === "WORK"
                ? {
                    ...ChipStyles,
                    color: "white",
                    border: "1px solid #FF7961",
                    backgroundColor: "#FF7961"
                  }
                : ChipStyles
            }
            onClick={() => {
              setAddress({ ...address, pref: "WORK" });
            }}
          >
            Work
          </Button>
        </ChipGroup>
      </InputContainer>

      <InputContainer>
        <CheckBoxContainer>
          <Checkbox
            checked={address.defaultAddress}
            onChange={(e) => {
              setAddress({ ...address, defaultAddress: e.target.checked });
              dispatch(setDefaultIndex(index));
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
    )
  );
};

Form.propTypes = {
  refetch: propTypes.func,
  index: propTypes.number,
  closeModal: propTypes.func
};

export default Form;
