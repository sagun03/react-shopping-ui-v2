import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAddLog } from "../../hooks/useTransaction";
import { useCreatePoints } from "../../hooks/userHooks/usePointsServer";

// Asynchronous thunk to create points and add a log for new users
export const handleNewUser = createAsyncThunk(
  "user/handleNewUser",
  async (user, { dispatch }) => {
    const addLog = useAddLog();
    const createPoints = useCreatePoints();
    try {
      await createPoints({
        token: user.accessToken,
        uid: user.uid,
        type: "new user login",
        points: 500,
        role: "user"
      });
      await addLog({
        uid: user.uid,
        date: new Date().toLocaleDateString("en-US"),
        points: 500,
        type: "SIGNUP"
      });
      dispatch(setIsNewUser(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: null,
    isNewUser: false
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsNewUser: (state, action) => {
      state.isNewUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleNewUser.fulfilled, (state) => {
        state.isNewUser = false;
      });
  }
});

export const { setUser, clearUser, setError, setIsNewUser } = userSlice.actions;

export default userSlice.reducer;
