import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress
} from "../../services/userServices.js/Address";

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
  defaultAddress: false,
  submit: false,
  addressList: [],
  selectedAddress: null,
  defaultIndex: null,
  status: "idle", // idle, loading, succeeded, failed
  error: null
};

// Thunks for API calls
export const fetchAddress = createAsyncThunk(
  "address/fetchAddress",
  async ({ uid, token }) => {
    const response = await getAddress({ uid, token });
    return response.data.addressData;
  }
);

export const addNewAddress = createAsyncThunk(
  "address/addNewAddress",
  async ({ address, uid, token }) => {
    const response = await addAddress({ address, uid, token });
    return response.data; // Return the added address
  }
);

export const updateExistingAddress = createAsyncThunk(
  "address/updateExistingAddress",
  async ({ id, updatedData, uid, token }) => {
    await updateAddress({ id, updatedData, uid, token });
    return { id, updatedData };
  }
);

export const removeAddress = createAsyncThunk(
  "address/removeAddress",
  async ({ id, uid, token }) => {
    await deleteAddress({ id, uid, token });
    return id;
  }
);

// Redux slice
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    updateContact (state, action) {
      state.contact[action.payload.field] = action.payload.value;
    },
    updateAddressField (state, action) {
      state.address[action.payload.field] = action.payload.value;
    },
    updatePref (state, action) {
      state.pref = action.payload;
    },
    updateDefaultAddress (state, action) {
      state.defaultAddress = action.payload;
    },
    resetState (state) {
      Object.assign(state, initialState);
    },
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addressList = action.payload;
        state.defaultIndex = 0;
        state.selectedAddress = 0;
        state.error = null;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        state.addressList.push(action.payload);
      })
      .addCase(updateExistingAddress.fulfilled, (state, action) => {
        const index = state.addressList.findIndex(
          (address) => address.id === action.payload.id
        );
        if (index !== -1) {
          state.addressList[index] = {
            ...state.addressList[index],
            ...action.payload.updatedData
          };
        }
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.addressList = state.addressList.filter(
          (address) => address.id !== action.payload
        );
      });
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
  setAddressList
} = addressSlice.actions;

export default addressSlice.reducer;
