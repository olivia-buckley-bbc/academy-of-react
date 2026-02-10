import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [minsInput, setMinsInput] = useState("");
  const [secsRemaining, setSecsRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          alert("Time's up! ✨");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleChange = (e) => {
    setMinsInput(e.target.value);
  };

  const handleStart = () => {
    const totalSecs = Number(minsInput) * 60;

    if (totalSecs > 0) {
      setSecsRemaining(totalSecs);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecsRemaining(0);
    setMinsInput("");
  };

  return (
    <div className="app">
      <h1>Spell Practice Timer</h1>
      <p>Focus your magical energy</p>

      <div>
        <label>Minutes</label>
        <input
          type="number"
          value={minsInput}
          onChange={handleChange}
          placeholder="Enter minutes"
          min="0"
        />
      </div>

      <p>
        {Math.floor(secsRemaining / 60)}:
        {String(secsRemaining % 60).padStart(2, "0")}
      </p>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
