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
    name: "",
    mobile: ""
  },
  address: {
    pincode: "",
    street: "",
    city: "",
    state: ""
  },
  pref: "HOME",
  defaultAddress: false
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
        defaultAddress: action.value
      }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const AddressProvider = ({ children }) => {
  const [validation, setValidation] = useState({
    // required fields
    contact: {
      name: true,
      mobile: true
    },
    address: {
      pincode: true,
      street: true,
      city: true,
      state: true
    }
  });
  const { user } = useUserContext();
  const { data, error, isLoading, refetch } = useGetAddress({
    uid: user.uid,
    token: user.accessToken
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const addAddressMutation = useAddAddress();
  const updateAddressMutation = useUpdateAddress();
  const deleteAddressMutation = useDeleteAddress();
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [defaultIndex, setDefaultIndex] = useState(null);

  useEffect(() => {
    if (data) {
      setAddress([...data.data.addressData]);
      setDefaultIndex(data.data.addressData.findIndex((element) => element.defaultAddress));
      if (defaultIndex !== null) {
        setSelectedAddress(defaultIndex);
      }
    }
  }, [data]);

  const makeValidations = () => {
    const updatedValidation = { ...validation };
    Object.keys(validation).forEach(key => {
      Object.keys(validation[key]).forEach(field => {
        updatedValidation[key][field] = !!state[key][field];
      });
    });
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
        validate,
        address,
        setAddress,
        addAddressMutation,
        updateAddressMutation,
        deleteAddressMutation,
        data,
        error,
        selectedAddress,
        setSelectedAddress,
        isLoading,
        defaultIndex,
        setDefaultIndex,
        refetch
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
