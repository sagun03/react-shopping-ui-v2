import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  ModalContainer,
  SearchContainer,
  ModalChild
} from "./styles";
import SearchBox from "./SearchBox";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

const SearchModal = ({ children }) => {
  const modalRoot = document.body;
  const modalContainer = useRef(document.createElement("div"));
  useEffect(() => {
    const containerElement = modalContainer.current;
    modalRoot.appendChild(containerElement);
    return () => {
      modalRoot.removeChild(containerElement);
    };
  }, [modalRoot]);
  return ReactDOM.createPortal(<ModalContainer>
    {children}
  </ModalContainer>, modalContainer.current);
}

SearchModal.propTypes = {
  children: propTypes.node
}

const Component = () => {
  const modalRef = useRef(null);
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
    {open &&
      <SearchModal>
        <ModalChild>
        <SearchBox closeModal={handleClose}/>
        </ModalChild>
      </SearchModal >
    }
    </>
  );
}

export default Component;
