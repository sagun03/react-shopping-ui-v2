import AddBoxIcon from "@mui/icons-material/AddBox";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { AddressBox } from "./styles";
import Form from "./form/Index";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import AddressCard from "./Card";
import { getAddress } from "@/services/user/address";
import { setAddressList, setDefaultIndex, setSelectedAddress } from "@/store/slices/addressSlice";
import { useQuery } from "@tanstack/react-query";

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
  const address = useSelector((state) => state.address.addressList);
  const defaultIndex = useSelector((state) => state.address.defaultIndex);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [newAddress, setNewAddress] = useState(false);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (address && address.length === 0) {
      setNewAddress(true);
    } else {
      setNewAddress(false);
    }
  }, [address]);

  const { refetch, status: getStatus, data } = useQuery({
    queryKey: ["address"],
    queryFn: async () => {
      const response = await getAddress(user.uid);
      return response.data.addressData;
    }
  })

  if (getStatus === "pending") return <p>Loading...</p>
  if (getStatus === "error") return <p>Error: {data.message}</p>
  if (getStatus === "success") {
    dispatch(setAddressList(data));
    if (data.length > 0) {
      data.forEach((element, index) => {
        if (element.defaultAddress === true) {
          dispatch(setDefaultIndex(index));
          dispatch(setSelectedAddress(index));
        }
      });
    }
  }

  const refetchData = () => {
    refetch().then((responseObject) => {
      const newData = responseObject.data;
      dispatch(setAddressList(newData));
      if (newData.length > 0) {
        newData.forEach((element, index) => {
          if (element.defaultAddress === true) {
            dispatch(setDefaultIndex(index));
            dispatch(setSelectedAddress(index));
          }
        });
      }
    });
  }

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
    <>
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
        address.length >= 1 && address.map((element, index) => (
          element?.defaultAddress === false ? (
            <AddressBox key={element._id} onClick={openModal(index)}>
            <AddressCard index={index} />
            </AddressBox>
          ) : (
            <>
              <p style={{
                textAlign: "left",
                width: "100%",
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "0.9rem",
                marginBlock: "-0.5em -1em"
              }}>Default Address</p>
              <AddressBox onClick={openModal(defaultIndex)}>
                <AddressCard index={defaultIndex} />
              </AddressBox>
            </>
          )
        )
        )
      }
    {newAddress && <Form refetch={refetchData} closeModal={closeNewModal}/>}
    {showModal && <Form refetch={refetchData} index={index} closeModal={closeShowModal} />}
    </>
  )
}

export default AddressPanel;
