import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentValue: "0",
  previousValue: null,
  operator: null
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {

    inputNumber: (state, action) => {
      if (state.currentValue === "0") {
        state.currentValue = action.payload;
      } else {
        state.currentValue += action.payload;
      }
    },

    inputDecimal: (state) => {
      if (!state.currentValue.includes(".")) {
        state.currentValue += ".";
      }
    },

    setOperator: (state, action) => {
      state.previousValue = state.currentValue;
      state.currentValue = "0";
      state.operator = action.payload;
    },

    clear: (state) => {
      state.currentValue = "0";
      state.previousValue = null;
      state.operator = null;
    },

    calculate: (state) => {
      const prev = parseFloat(state.previousValue);
      const curr = parseFloat(state.currentValue);

      let result = 0;

      switch (state.operator) {
        case "+":
          result = prev + curr;
          break;
        case "-":
          result = prev - curr;
          break;
        case "*":
          result = prev * curr;
          break;
        case "/":
          result = prev / curr;
          break;
        default:
          return;
      }

      state.currentValue = result.toString();
      state.previousValue = null;
      state.operator = null;
    }
  }
});

export const {
  inputNumber,
  inputDecimal,
  setOperator,
  clear,
  calculate
} = calculatorSlice.actions;

export default calculatorSlice.reducer;