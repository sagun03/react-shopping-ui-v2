import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderData: []
  },
  reducers: {
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
    addOrder: (state, action) => {
      state.orderData.push(action.payload);
    },
    clearOrders: (state) => {
      state.orderData = [];
    }
  }
});

export const { setOrderData, addOrder, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
