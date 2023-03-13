import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { correctResult } from "../../utils";

type State = {
  mode: string;
  numberOne: string;
  numberTwo: string;
  decimal: boolean;
  operator: string;
  result: string;
  resultView: boolean;
};

const initialState: State = {
  mode: "constructor",
  numberOne: "",
  numberTwo: "",
  decimal: false,
  operator: "",
  result: "0",
  resultView: true,
};

export const modeSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    setNumberOne: (state, action: PayloadAction<string>) => {
      state.result = "0";
      state.resultView = false;
      state.numberOne += action.payload;
    },
    setNumberTwo: (state, action: PayloadAction<string>) => {
      state.numberTwo += action.payload;
    },
    setDecimal: (state, action: PayloadAction<boolean>) => {
      state.decimal = action.payload;
    },
    removeDecimal: (state, action: PayloadAction<boolean>) => {
      state.decimal = action.payload;
    },
    setOperator: (state, action: PayloadAction<string>) => {
      state.operator = action.payload;
    },
    setResult: (state) => {
      state.resultView = true;
      const numberOne = Number(state.numberOne.split(",", 2).join("."));
      const numberTwo = Number(state.numberTwo.split(",", 2).join("."));
      let result = 0;

      switch (state.operator) {
        case "/":
          result = numberOne / numberTwo;
          break;
        case "x":
          result = numberOne * numberTwo;
          break;
        case "-":
          result = numberOne - numberTwo;
          break;
        case "+":
          result = numberOne + numberTwo;
          break;
      }

      /* округляю до заданного число после запятой
       * после выполнения уже будет string
       */

      state.result = correctResult(result);

      state.numberOne = "";
      state.numberTwo = "";
      state.decimal = false;
      state.operator = "";
    },
    resultToNumberOne: (state, action: PayloadAction<string>) => {
      state.resultView = false;
      state.operator = action.payload;
      state.numberOne = state.result.toString();
      state.result = "0";
    },
    reset: (state) => {
      state.numberOne = "";
      state.numberTwo = "";
      state.decimal = false;
      state.operator = "";
      state.result = "0";
      state.resultView = true;
    },
  },
});

export const {
  changeMode,
  setNumberOne,
  setNumberTwo,
  setDecimal,
  removeDecimal,
  setOperator,
  setResult,
  resultToNumberOne,
  reset,
} = modeSlice.actions;

export default modeSlice.reducer;
