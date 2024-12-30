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
      state.cartData = state.cartData.filter(item => item.productId !== action.payload.productId || item.size !== action.payload.size);
      state.isCartData = state.cartData.length > 0;
    },
    clearCart (state) {
      state.cartData = [];
      state.isCartData = false;
    },
    updateCart (state, action) {
      state.cartData = action.payload;
    },
    addExisting (state, action) {
      state.cartData.map(item => {
        if (item.productId === action.payload.item.productId && item.size === action.payload.item.size) {
          item.quantity += 1;
        }
        return item;
      });
      state.isCartData = state.cartData.length > 0;
    },
    removeExisting (state, action) {
      state.cartData.map(item => {
        if (item.productId === action.payload.item.productId && item.size === action.payload.item.size) {
          item.quantity -= 1;
        }
        return item;
      });
      state.cartData = state.cartData.filter(item => item.quantity > 0);
      state.isCartData = state.cartData.length > 0;
    }
  }
});

export const { setCartData, addToCart, removeFromCart, clearCart, updateCart, addExisting, removeExisting } = cartSlice.actions;

export default cartSlice.reducer;
