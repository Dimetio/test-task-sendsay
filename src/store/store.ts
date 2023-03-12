import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import calculatorSlice from "./reducers/calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
