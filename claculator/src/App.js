import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState([]);

  const append = (value) => {
    if (display === "0") setDisplay(value);
    else setDisplay(display + value);
  };

  const clear = () => setDisplay("0");

  const backspace = () => {
    if (display.length === 1) setDisplay("0");
    else setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      const expression = display.replace("^", "**");
      const result = eval(expression);

      setHistory([...history, `${display} = ${result}`]);
      setDisplay(result.toString());

    } catch {
      setDisplay("Error");
    }
  };

  const sqrt = () => {
    const result = Math.sqrt(parseFloat(display));
    setHistory([...history, `√(${display}) = ${result}`]);
    setDisplay(result.toString());
  };

  const square = () => {
    const result = Math.pow(parseFloat(display), 2);
    setHistory([...history, `${display}² = ${result}`]);
    setDisplay(result.toString());
  };

  const percent = () => {
    const result = parseFloat(display) / 100;
    setDisplay(result.toString());
  };

  const toggleSign = () => {
    if (display.startsWith("-")) setDisplay(display.slice(1));
    else setDisplay("-" + display);
  };

  // keyboard input
  useEffect(() => {

    const handleKey = (e) => {

      if (!isNaN(e.key)) append(e.key);

      if (["+", "-", "*", "/", ".", "^"].includes(e.key)) append(e.key);

      if (e.key === "Enter") calculate();

      if (e.key === "Backspace") backspace();

      if (e.key === "Escape") clear();

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [display]);

  return (
    <div className="app">

      <div className="calculator">

        <div className="display">{display}</div>

        <button onClick={clear}>C</button>
        <button onClick={backspace}>⌫</button>
        <button onClick={percent}>%</button>
        <button onClick={() => append("/")}>÷</button>

        <button onClick={sqrt}>√</button>
        <button onClick={square}>x²</button>
        <button onClick={() => append("^")}>xʸ</button>
        <button onClick={() => append("*")}>×</button>

        <button onClick={() => append("7")}>7</button>
        <button onClick={() => append("8")}>8</button>
        <button onClick={() => append("9")}>9</button>
        <button onClick={() => append("-")}>-</button>

        <button onClick={() => append("4")}>4</button>
        <button onClick={() => append("5")}>5</button>
        <button onClick={() => append("6")}>6</button>
        <button onClick={() => append("+")}>+</button>

        <button onClick={() => append("1")}>1</button>
        <button onClick={() => append("2")}>2</button>
        <button onClick={() => append("3")}>3</button>
        <button className="equals" onClick={calculate}>=</button>

        <button className="zero" onClick={() => append("0")}>0</button>
        <button onClick={() => append(".")}>.</button>
        <button onClick={toggleSign}>±</button>

      </div>

      <div className="history">
        <h3>History</h3>

        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}

      </div>

    </div>
  );
}

export default App;