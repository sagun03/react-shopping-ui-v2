import React, { useState } from "react";
import { useAddressContext } from "./DataProvider";
import { AddCard, InnerHeading, StyledRadio } from "./styles";

import PropTypes from "prop-types";

const AddressCard = ({ index }) => {
  const { address, selectedAddress, setSelectedAddress } = useAddressContext();
  return (
    <AddCard>
      <InnerHeading>
        <div style={{
          display: "flex",
          alignItems: "center",
          padding: "0"
        }}>
          <StyledRadio
            checked={selectedAddress === index}
            onChange={() => setSelectedAddress(index)}
            value={index}
            name="select-address"
            inputProps={{ "aria-label": index }}
            size="small"
            sx={{
              padding: "0",
              margin: "0",
              width: "0.8em"
            }}
          />
          <span style={{
            fontWeight: "bold",
            fontSize: "1rem",
            marginLeft: "0.5em"
          }}>{address[index].name}</span>
        </div>
      </InnerHeading>
      <div style={{
        display: "flex",
        marginLeft: "2em",
        marginTop: "-0.5em",
        flexDirection: "column",
        fontSize: "0.9rem",
        color: "rgba(0, 0, 0, 0.6)"
      }}>
        <p>{address[index].street}</p>
        <p>{address[index].city}, {address[index].state} - {address[index].pincode}</p>
        <br />
        <p>Mobile: {address[index].mobile}</p>
      </div>
    </AddCard>
  );
}

AddressCard.propTypes = {
  index: PropTypes.number.isRequired
}

export default AddressCard;
