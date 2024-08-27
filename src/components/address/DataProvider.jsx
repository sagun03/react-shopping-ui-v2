import { createContext, useReducer, useContext, useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import {
  useGetAddress,
  useAddAddress,
  useUpdateAddress,
  useDeleteAddress
} from "../../hooks/userHooks/useUserAddress";
import PropTypes from "prop-types";

const addressContext = createContext();
const initialState = {
  contact: {
    Name: "",
    Mobile: ""
  },
  address: {
    pincode: "",
    street: "",
    city: "",
    state: ""
  },
  pref: "",
  default: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CONTACT":
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.field]: action.value
        }
      }
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: {
          ...state.address,
          [action.field]: action.value
        }
      }
    case "UPDATE_PREF":
      return {
        ...state,
        pref: action.value
      }
    case "UPDATE_DEFAULT":
      return {
        ...state,
        default: action.value
      }
    default:
      return state;
  }
}

const AddressProvider = ({ children }) => {
  const [validation, setValidation] = useState({
    // required fields
    contact: {
      Name: true,
      Mobile: true
    },
    address: {
      pincode: true,
      street: true,
      city: true,
      state: true
    }
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useUserContext();
  const [showModal, setShowModal] = useState(false);
  const addAddressMutation = useAddAddress();
  const updateAddressMutation = useUpdateAddress();
  const deleteAddressMutation = useDeleteAddress();
  const [address, setAddress] = useState([]);
  const [addressIndex, setAddressIndex] = useState(0);

  const { data, error, isLoading, refetch } = useGetAddress({
    uid: user.uid,
    token: user.accessToken
  });

  const emptyAddress = {
    uid: user.uid,
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
  }

  useEffect(() => {
    if (data) {
      setAddress([emptyAddress, ...data.data.addressData]);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const makeValidations = () => {
    const updatedValidation = { ...validation };
    Object.keys(state).forEach(key => {
      Object.keys(state[key]).forEach(field => {
        updatedValidation[key][field] = !!state[key][field];
      })
    })
    console.log(updatedValidation);
    setValidation(updatedValidation);
  }

  const validate = () => {
    makeValidations();
    let flag = true;
    Object.keys(validation).forEach(key => {
      Object.keys(validation[key]).forEach(field => {
        if (!validation[key][field]) {
          flag = false;
        }
      })
    })
    return flag;
  }

  return (
    <addressContext.Provider value={
      {
        state,
        dispatch,
        validation,
        validate
      }
    }>
      {children}
    </addressContext.Provider>
  )
}

AddressProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useAddressContext = () => useContext(addressContext);

export { AddressProvider, useAddressContext };
