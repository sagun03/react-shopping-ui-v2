import AddBoxIcon from "@mui/icons-material/AddBox";
import { AddAdressBox, AddressPanelContainer, ModalContainer, InnerWrapper } from "./styles/AddressPanel";
import { InnerHeading, InputField, ButtonGroup } from "./styles/ProfilePanel";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { SaveButton, CancelButton, EditButton } from "./EditButtons";
import PropTypes from "prop-types";
import { useUserContext } from "../context/UserContext";
import { useGetAddress, useUpdateAddress, useDeleteAddress, useAddAddress } from "../hooks/userHooks/useUserAddress";

const modalRoot = document.createElement("div");
const AddressModal = ({ address, index, setAddress, closeModal, add, update, remove, user }) => {
  useEffect(() => {
    document.body.appendChild(modalRoot);
    return () => {
      document.body.removeChild(modalRoot);
    }
  }, []);
  const [data, setData] = useState(address[index]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (index !== 0) {
      setDisabled(true);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log("Data submitted", data);
    // setAddress({ uid: user.uid, token: user.accessToken, ...address });
    // add.mutate(address);
    closeModal();
  }
  const handleChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };
  return ReactDOM.createPortal(
    <ModalContainer>
      <InnerWrapper>
        <InnerHeading>Add Address</InnerHeading>
        <form onSubmit={handleFormSubmit}>
          <InputField
            label="Street"
            variant="outlined"
            onChange={handleChange("street")}
            value={data.street}
            disabled={disabled}
            required
          />
          <InputField
            label="City"
            variant="outlined"
            onChange={handleChange("city")}
            value={data.city}
            disabled={disabled}
            required
          />
          <InputField
            label="State"
            variant="outlined"
            onChange={handleChange("state")}
            value={data.state}
            disabled={disabled}
            required
          />
          <InputField
            label="Pincode"
            variant="outlined"
            onChange={handleChange("pincode")}
            value={data.pincode}
            disabled={disabled}
            required
          />
          <InputField
            label="Phone"
            variant="outlined"
            type="number"
            onChange={handleChange("phone")}
            value={data.phone}
            disabled={disabled}
            required
          />
          <br />
          {
            index !== 0 ? (
              disabled ? (
              <ButtonGroup>
                <EditButton onClick={() => setDisabled(false)} name="Edit"/>
                <CancelButton onClick={closeModal} name="Close"/>
              </ButtonGroup>) : (
                <ButtonGroup>
                  <SaveButton type="submit" name="Save"/>
                  <CancelButton onClick={() => {
                    setDisabled(true);
                  }} name="Delete"/>
                </ButtonGroup>
              )
            ) : (
              <ButtonGroup>
                <SaveButton type="submit" name="Save"/>
                <CancelButton onClick={closeModal} name="Cancel"/>
              </ButtonGroup>
            )
          }
        </form>
      </InnerWrapper>
    </ModalContainer>
    ,
    modalRoot
  )
}
AddressModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

const AddressPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useUserContext();
  const { data, error, isLoading } = useGetAddress({
    uid: user.uid,
    token: user.accessToken
  });
  const addAddressMutation = useAddAddress();
  const updateAddressMutation = useUpdateAddress();
  const deleteAddressMutation = useDeleteAddress();
  const emptyAddress = {
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
  }
  const [address, setAddress] = useState([]);
  const [addressIndex, setAddressIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const { __v, _id, ...addressData } = data.data.addressData;
      setAddress(prevAddress => [emptyAddress, addressData]);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const openModal = (index) => () => {
    setShowModal(true);
    setAddressIndex(index);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <InnerHeading>Address</InnerHeading>
      <AddressPanelContainer>
      {
        address.map((element, index) => {
          if (index === 0) {
            return (
              <AddAdressBox key={index} onClick={openModal(index)}>
                <AddBoxIcon />
                <p>Add Address</p>
              </AddAdressBox>
            )
          }
          return (
            <AddAdressBox key={index} onClick={openModal(index)}>
              <p>{element.street}</p>
            </AddAdressBox>
          )
        })
      }
      {showModal && <AddressModal address={address} index={addressIndex} setAddress={setAddress} closeModal={closeModal} add={addAddressMutation} update={updateAddressMutation} remove={deleteAddressMutation} user={user}/>}
    </AddressPanelContainer>
    </>
  )
}

export default AddressPanel;
