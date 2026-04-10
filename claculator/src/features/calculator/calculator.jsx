import { useSelector, useDispatch } from "react-redux";
import {
  inputNumber,
  inputDecimal,
  setOperator,
  calculate,
  clear
} from "./calculatorSlice";

export default function Calculator() {

  const display = useSelector(state => state.calculator.currentValue);
  const dispatch = useDispatch();

  return (
    <div className="calculator">

      <h2>{display}</h2>

      <div className="buttons">

        <button onClick={() => dispatch(clear())}>C</button>

        <button onClick={() => dispatch(setOperator("/"))}>÷</button>
        <button onClick={() => dispatch(setOperator("*"))}>×</button>

        <button onClick={() => dispatch(inputNumber("7"))}>7</button>
        <button onClick={() => dispatch(inputNumber("8"))}>8</button>
        <button onClick={() => dispatch(inputNumber("9"))}>9</button>
        <button onClick={() => dispatch(setOperator("-"))}>-</button>

        <button onClick={() => dispatch(inputNumber("4"))}>4</button>
        <button onClick={() => dispatch(inputNumber("5"))}>5</button>
        <button onClick={() => dispatch(inputNumber("6"))}>6</button>
        <button onClick={() => dispatch(setOperator("+"))}>+</button>

        <button onClick={() => dispatch(inputNumber("1"))}>1</button>
        <button onClick={() => dispatch(inputNumber("2"))}>2</button>
        <button onClick={() => dispatch(inputNumber("3"))}>3</button>

        <button onClick={() => dispatch(calculate())}>=</button>

        <button onClick={() => dispatch(inputNumber("0"))}>0</button>
        <button onClick={() => dispatch(inputDecimal())}>.</button>

      </div>
    </div>
  );
}