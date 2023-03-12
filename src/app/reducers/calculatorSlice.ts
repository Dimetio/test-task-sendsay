import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "constructor",
};

export const modeSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
