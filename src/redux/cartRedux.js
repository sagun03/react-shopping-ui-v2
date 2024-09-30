import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userId: null,
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
    },
    addProducts: (state, action) => {
      const { productId, quantity, unitPrice, size, name, image, description } = action.payload;
      const existingProduct = state.products.find(
        (item) => item.productId === productId && item.size === size
      );
      console.log(existingProduct, "existingProduct", action.payload);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({
          productId,
          quantity,
          unitPrice,
          size,
          name,
          image,
          description
        });
      }
      console.log(action.payload, "action.payload");
      state.quantity += quantity;
      state.total += unitPrice * quantity;
    },
    decreaseQuantity: (state, action) => {
      const { productId, size } = action.payload;
      const existingProduct = state.products.find(
        (item) => item.productId === productId && item.size === size
      );

      if (existingProduct) {
        state.total -= existingProduct.unitPrice; // Update total
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          state.quantity -= 1;
        } else {
          state.products = state.products.filter(
            (item) => !(item.productId === productId && item.size === size)
          );
          state.quantity -= 1;
        }
      }
    },
    removeProducts: (state, action) => {
      const { productId, size } = action.payload;
      const productToRemove = state.products.find(
        (item) => item.productId === productId && item.size === size
      );

      if (productToRemove) {
        state.quantity -= productToRemove.quantity;
        state.total -= productToRemove.unitPrice * productToRemove.quantity; // Update total
        state.products = state.products.filter(
          (item) => !(item.productId === productId && item.size === size)
        );
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
  }
});

export const { setUser, addProducts, removeProducts, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
