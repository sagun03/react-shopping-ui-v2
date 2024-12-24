import { createSlice } from "@reduxjs/toolkit"
import { mockProducts } from "../../utils/data"

const dataSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
    categories: []
  },
  reducers: {
    setMockProducts: (state) => {
      state.products = mockProducts
    },
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  }
})

export const { setMockProducts, setCategories, setProducts } = dataSlice.actions
export default dataSlice.reducer
