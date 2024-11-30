// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    isCartData: false
  },
  reducers: {
    setCartData (state, action) {
      state.cartData = action.payload !== undefined ? action.payload : [];
    },
    addToCart (state, action) {
      state.cartData.push(action.payload);
      state.isCartData = state.cartData.length > 0;
    },
    removeFromCart (state, action) {
      state.cartData = state.cartData.filter(item => item.id !== action.payload.id);
      state.isCartData = state.cartData.length > 0;
    },
    clearCart (state) {
      state.cartData = [];
      state.isCartData = false;
    },
    updateCart (state, action) {
      state.cartData = action.payload;
    }
  }
});

export const { setCartData, addToCart, removeFromCart, clearCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
