import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  dummy: null as string | null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFunction: (state, action: PayloadAction<string | null>) => {
      state.dummy = action.payload;
    },
  },
});

export const { userFunction } = userSlice.actions;
export const userReducer = userSlice.reducer;
