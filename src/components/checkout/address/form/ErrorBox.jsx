import React from "react";
import { ErrorBoxContainer } from "./styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PropTypes from "prop-types";
import { useAddressContext } from "./DataProvider";
import { useSelector } from "react-redux";

const ErrorBox = ({ errors }) => {
  const submit = useSelector((state) => state.address.submit);
  return (
    submit &&
    <ErrorBoxContainer>
      {
        Object.entries(errors).map(([key, value]) => (
          <div key={key} style={{
            display: "flex",
            alignItems: "center"
          }}>
            <ErrorOutlineIcon sx={{ fontSize: "2rem" }} />
            <p>{value}</p>
          </div>
        ))
      }
    </ErrorBoxContainer>
  )
}

ErrorBox.propTypes = {
  errors: PropTypes.object.isRequired
}

export default ErrorBox;
