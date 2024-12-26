import { useEffect, useRef } from "react";
import { ModalContainer, ModalChild, CloseButton } from "./styles";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../store/slices/userSlice";

const Modal = ({ children }) => {
  const modalRoot = document.body;
  const modalRef = useRef(document.createElement("div"));
  modalRef.current.className = "modalOuter"
  useEffect(() => {
    const containerElement = modalRef.current;
    modalRoot.appendChild(containerElement);
    return () => {
      modalRoot.removeChild(containerElement);
    }
  }, [modalRoot])
  return (
    ReactDOM.createPortal(
      <ModalContainer>
        <ModalChild>
          {children}
        </ModalChild>
      </ModalContainer>,
      modalRef.current
    )
  );
}

const ErrorModal = () => {
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  return (
    error && (
      <Modal>
        <p>{error}</p>
        <CloseButton onClick={() => dispatchEvent(setError(null))}>Close</CloseButton>
      </Modal>
    )
  );
}

ErrorModal.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func
}

export default ErrorModal;
