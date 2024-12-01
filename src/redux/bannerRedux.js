import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banners: [],
  currentCoupon: null
};

const promotionalBannerSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setCoupon: (state, action) => {
      state.currentCoupon = action.payload;
    },
    clearCoupon: (state) => {
      state.currentCoupon = null;
    }
  }
});

export const { setBanners, setCoupon, clearCoupon } = promotionalBannerSlice.actions;

export default promotionalBannerSlice.reducer;
