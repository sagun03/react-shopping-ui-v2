import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userId: null,
    products: [],
    quantity: 0,
    total: 0,
    lastQuantity: 0,
    cartResponse: []
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
    },
    addProducts: (state, action) => {
      const { productID, quantity, unitPrice, size, name, image, description } = action.payload;
      const existingProduct = state.products.find(
        (item) => item.productID === productID && item.size === size
      );
      console.log(existingProduct, "existingProduct", action.payload);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({
          productID,
          quantity,
          unitPrice,
          size,
          name,
          image,
          description
        });
      }
      console.log(action.payload, "action.payload");
      console.log(state.products, ">>>>>>>>>?????????")
      state.lastQuantity = state.quantity
      state.quantity += quantity;
      state.total += unitPrice * quantity;
    },
    decreaseQuantity: (state, action) => {
      const { productId, size } = action.payload;
      const existingProduct = state.products.find(
        (item) => item.productId === productId && item.size === size
      );
      console.log(existingProduct, "existingProduct")

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
    setCartResponse: (state, action) => {
      console.log(action, "dattatata")
      state.cartResponse = action.payload
      state.quantity = action.payload.totalQuantity
      state.lastQuantity = state.quantity
    },
    clearCart: (state) => {
      state.products = [];
    },
    clearCartResponse: (state) => {
      state.quantity = 0;
      state.cartResponse = {}
    },
    setCart: (state, action) => {
      const data = action.payload;
      console.log(data, "datatatatataReduyxxxxx")
      // state.quantity = data?.totalQuantity;
      // state.lastQuantity = data?.totalQuantity
      // state.cartResponse = data;
    }
  }
});

export const { setUser, addProducts, removeProducts, clearCart, decreaseQuantity, setCartResponse, setCart, clearCartResponse } = cartSlice.actions;
export default cartSlice.reducer;
