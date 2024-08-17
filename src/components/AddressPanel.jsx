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
const AddressModal = ({ address, index, setAddress, closeModal, add, update, remove, user, refetch }) => {
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
    const eventDesc = e.nativeEvent.submitter.innerText;
    if (eventDesc === "SAVE") {
      add.mutate({ token: user.accessToken, ...data });
      if (add.error) {
        closeModal();
        return;
      }
      setAddress([...address, data]);
      console.log("Data submitted", data);
    }
    if (eventDesc === "UPDATE") {
      update.mutate(data);
      setAddress(address.map((element, i) => i === index ? data : element));
      console.log("Data updated", data);
    }
    closeModal();
  }

  const handleDelete = () => {
    remove.mutate({ uid: user.uid, token: user.accessToken, id: data._id });
    setAddress(address.filter((element, i) => i !== index));
    console.log("Data deleted", data);
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
            index !== 0 && data._id ? (
              disabled ? (
              <ButtonGroup>
                <EditButton onClick={() => setDisabled(false)} name="Edit"/>
                <CancelButton onClick={closeModal} name="Close"/>
              </ButtonGroup>) : (
                <ButtonGroup>
                  <SaveButton type="submit" name="Update"/>
                  <CancelButton onClick={handleDelete} name="Delete"/>
                </ButtonGroup>
              )
            ) : (
              index === 0 ? (
              <ButtonGroup>
                <SaveButton type="submit" name="Save"/>
                <CancelButton onClick={closeModal} name="Cancel"/>
              </ButtonGroup>) : (
              <ButtonGroup>
                <CancelButton onClick={closeModal} name="Close"/>
              </ButtonGroup>)
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
  const { user } = useUserContext();
  const [showModal, setShowModal] = useState(false);
  const { data, error, isLoading, refetch } = useGetAddress({
    uid: user.uid,
    token: user.accessToken
  });
  const addAddressMutation = useAddAddress();
  const updateAddressMutation = useUpdateAddress();
  const deleteAddressMutation = useDeleteAddress();
  const emptyAddress = {
    uid: user.uid,
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
      setAddress([emptyAddress, ...data.data.addressData]);
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
            <AddAdressBox key={element._id} onClick={openModal(index)}>
              <p>{element.street}</p>
            </AddAdressBox>
          )
        })
      }
      {showModal && <AddressModal address={address} index={addressIndex} setAddress={setAddress} closeModal={closeModal} add={addAddressMutation} update={updateAddressMutation} remove={deleteAddressMutation} user={user} refetch={refetch}/>}
    </AddressPanelContainer>
    </>
  )
}

export default AddressPanel;
