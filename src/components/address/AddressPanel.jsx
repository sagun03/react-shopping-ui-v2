import AddBoxIcon from "@mui/icons-material/AddBox";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { PanelContainer, AddressBox } from "./styles";
import Form from "./Form";
import { useAddressContext } from "./DataProvider";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import AddressCard from "./AddressCard";
import { fetchAddress } from "../../redux/port/addressSlice";

const modalRoot = document.createElement("div");
const AddressModal = ({ children }) => {
  useEffect(() => {
    document.body.appendChild(modalRoot);
    return () => {
      document.body.removeChild(modalRoot);
    }
  }, []);

  return ReactDOM.createPortal(
    children,
    modalRoot
  )
}
AddressModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

const AddressPanel = () => {
  // const { address, defaultIndex, setSelectedAddress, isLoading, error } = useAddressContext();
  const address = useSelector((state) => state.address.addresList);
  const defaultIndex = useSelector((state) => state.address.defaultIndex);
  const setSelectedAddress = useSelector((state) => state.address.setSelectedAddress);
  const status = useSelector((state) => state.address.status);
  const error = useSelector((state) => state.address.error);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [newAddress, setNewAddress] = useState(false);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchAddress({ token: user.accessToken, uid: user.uid }));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (address && address.length === 0) {
      setNewAddress(true);
    } else {
      setNewAddress(false);
    }
  }, [address]);

  if (status === "loading") return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const openModal = (index) => () => {
    setIndex(index);
    setSelectedAddress(index);
    setShowModal(true);
    setNewAddress(false);
  }

  const closeShowModal = () => {
    setShowModal(false);
  }

  const closeNewModal = () => {
    setNewAddress(false);
  }

  return (
    <PanelContainer>
    <AddressBox onClick={() => {
      setSelectedAddress(0);
      closeShowModal();
      setNewAddress(true);
    }}
    style={{
      backgroundColor: "transparent",
      border: "none",
      alignItems: "start",
      justifyContent: "space-between",
      textAlign: "left",
      flexDirection: "row"
    }}
    >
      <h2>Select Delivery Address</h2>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        border: "1px solid #000",
        borderRadius: "5px",
        padding: "5px"
      }}>
        <AddBoxIcon />
        <p>Add Address</p>
      </div>
    </AddressBox>
    {
      address[defaultIndex] &&
        <>
          <p style={{
            textAlign: "left",
            width: "100%",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.9rem",
            marginBlock: "-0.5em -1em"
          }}>Default Address</p>
          <AddressBox key={address[defaultIndex]._id} onClick={openModal(defaultIndex)}>
            <AddressCard index={defaultIndex} />
          </AddressBox>
        </>
    }

    {
      address.map((element, index) => (
        element.defaultAddress === false &&
        <AddressBox key={element._id} onClick={openModal(index)}>
          <AddressCard index={index} />
        </AddressBox>
      )
      )
    }
  {newAddress && <Form closeModal={closeNewModal}/>}
  {showModal && <Form index={index} closeModal={closeShowModal} />}
</PanelContainer>
  )
}

export default AddressPanel;
