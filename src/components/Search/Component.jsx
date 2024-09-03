import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  ModalContainer,
  SearchContainer,
  ModalChild
} from "./styles";
import SearchBox from "./SearchBox";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { Close } from "@mui/icons-material";

const SearchModal = ({ children }) => {
  const modalRoot = document.createElement("div");
  useEffect(() => {
    document.body.appendChild(modalRoot);
    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);
  return ReactDOM.createPortal(<ModalContainer>
    {children}
  </ModalContainer>, modalRoot);
}

SearchModal.propTypes = {
  children: propTypes.node
}

const Component = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
    <SearchContainer onClick={handleOpen}>
      <SearchIcon />
    </SearchContainer>
    {open && <SearchModal>
      <ModalChild>
      <SearchBox closeModal={handleClose}/>
      </ModalChild>
    </SearchModal >}
    </>
  );
}

export default Component;
