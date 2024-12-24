import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetPoints } from "../../hooks/userHooks/usePointsServer";

// Async thunk for fetching points
export const fetchPoints = createAsyncThunk(
  "points/fetchPoints",
  async ({ uid, token }, { rejectWithValue }) => {
    try {
      const { data } = await useGetPoints({ uid, token });
      return data.data.data.points;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pointsSlice = createSlice({
  name: "points",
  initialState: {
    points: 0,
    pointsToCash: 0,
    isLoading: false,
    error: null
  },
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
      state.pointsToCash = action.payload * 0.1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoints.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPoints.fulfilled, (state, action) => {
        state.points = action.payload;
        state.pointsToCash = action.payload * 0.1;
        state.isLoading = false;
      })
      .addCase(fetchPoints.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { setPoints } = pointsSlice.actions;

export default pointsSlice.reducer;
