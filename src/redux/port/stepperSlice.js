import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: {
    0: { icon: "ShoppingBagIcon", label: "Cart", link: "/checkout/cart" },
    1: { icon: "ImportContactsIcon", label: "Address", link: "/checkout/address" },
    2: { icon: "PaymentIcon", label: "Payment", link: "/checkout/payment" }
  },
  activeStep: 0,
  completed: new Set(),
  selectedAddress: null // Placeholder for address integration
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    completeStep: (state) => {
      state.completed.add(state.activeStep);
    },
    resetStepper: (state) => {
      state.activeStep = 0;
      state.completed = new Set();
    },
    handleStep: (state, action) => {
      const step = action.payload;
      switch (step) {
        case 0:
          state.completed.add(0);
          state.activeStep = 1;
          break;
        case 1:
          if (state.selectedAddress !== null) {
            state.completed.add(1);
            state.activeStep = 2;
          }
          break;
        default:
          console.error("Invalid step");
      }
    }
  }
});

export const {
  setActiveStep,
  completeStep,
  resetStepper,
  handleStep
} = stepperSlice.actions;

export default stepperSlice.reducer;
