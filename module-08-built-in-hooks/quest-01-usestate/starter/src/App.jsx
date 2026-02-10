import { useState } from "react";
import "./App.css";

function App() {
  // TODO: Add useState for spell count

  const [spellCount, setSpellCount] = useState(0);

  const handleCastSpell = () => {
    setSpellCount(spellCount + 1);
  };

  const resetSpellCount = () => {
    setSpellCount(0);
  };
  const getMilestoneMessage = () => {
    if (spellCount >= 20) return "Legendary Wizard! 🌟";
    if (spellCount >= 10) return "Spell Master! ⚡";
    if (spellCount >= 5) return "Getting the hang of it! 🔥";
    return "";
  };

  return (
    <div className="app">
      <h1>Spell Counter</h1>
      <p className="subtitle">Track your daily spell casting progress</p>

      <div className="counter-display">
        <span className="count">{spellCount}</span>
        <span className="label">Spells Cast</span>
      </div>
      {getMilestoneMessage() && (
        <div className="milestone-message">{getMilestoneMessage()}</div>
      )}

      {/* TODO: Add milestone messages here */}

      <div className="button-group">
        <button className="btn btn-primary" onClick={handleCastSpell}>
          Cast Spell
        </button>
        <button className="btn btn-secondary" onClick={resetSpellCount}>
          Reset
        </button>
      </div>

      <div className="info-box">
        <h3>Your Task</h3>
        <ul>
          <li>Use useState to track spell count</li>
          <li>Increment count when "Cast Spell" is clicked</li>
          <li>Reset count to 0 when "Reset" is clicked</li>
          <li>Show milestone messages at 5, 10, and 20 spells</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
