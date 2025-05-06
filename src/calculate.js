import React, { useState } from "react";
import "./App.css";
function App() {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const resetInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={resetInput} className="clear">
          AC
        </button>
        <button onClick={() => handleInput("/")} className="operator">
          ÷
        </button>
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("+")} className="operator">
          +
        </button>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("-")} className="operator">
          -
        </button>
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("*")} className="operator">
          ×
        </button>
        <button onClick={() => handleInput("0")} className="zero">
          0
        </button>
        <button onClick={() => handleInput(".")}>.</button>
        <button onClick={calculateResult} className="equals">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
