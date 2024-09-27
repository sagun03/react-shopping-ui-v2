import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  couponCode: "",
  isValid: false,
  discount: 0
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    applyCoupon: (state, action) => {
      state.couponCode = action.payload.code;
      state.isValid = action.payload.isValid;
      state.discount = action.payload.discount;
    },
    removeCoupon: (state) => {
      state.couponCode = "";
      state.isValid = false;
      state.discount = 0;
    }
  }
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;

export default couponSlice.reducer;
