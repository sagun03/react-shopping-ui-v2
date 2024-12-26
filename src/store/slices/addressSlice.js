import { createSlice } from "@reduxjs/toolkit";
import { set } from "zod";

const initialState = {
  emptyAddress: {
    name: "",
    mobile: "",
    pincode: "",
    street: "",
    city: "",
    state: "",
    pref: "HOME",
    defaultAddress: false
  },
  submit: false,
  addressList: [],
  selectedAddress: null,
  defaultIndex: null,
  status: "idle", // idle, loading, succeeded, failed
  error: null
};

// Redux slice
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setSubmit (state, action) {
      state.submit = action.payload;
    },
    setSelectedAddress (state, action) {
      state.selectedAddress = action.payload;
    },
    setDefaultIndex (state, action) {
      state.defaultIndex = action.payload;
    },
    setAddressList (state, action) {
      state.addressList = action.payload;
    },
    updateExistingAddress (state, action) {
      state.addressList[action.payload.index] = action.payload.data
    },
    setDefaultAddress (state, action) {
      state.addressList[action.payload].defaultAddress = true;
    }
  }
});

// Actions
export const {
  updateContact,
  updateAddressField,
  updatePref,
  updateDefaultAddress,
  resetState,
  setSubmit,
  setSelectedAddress,
  setDefaultIndex,
  setAddressList,
  addNewAddress,
  updateExistingAddress
} = addressSlice.actions;

export default addressSlice.reducer;
