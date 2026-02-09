import { useState } from "react";
import "./App.css";

function App() {
  const [magicLevel, setMagicLevel] = useState(20);
  const [energy, setEnergy] = useState(100);
  const [mana, setMana] = useState(80);

  const handleTrain = () => {
    setMagicLevel(magicLevel + 5);
    setEnergy(energy - 20);
  };

  const handleRest = () => {
    if (energy < 100) {
      setEnergy(energy + 30);
    }
  };

  const handleCastSpell = () => {
    setMana(mana - 15);
    setMagicLevel(magicLevel + 2);
  };

  return (
    <div>
      <h1>Olivia Buckley's Training</h1>
      <div className="training-container">
        <p>Level: {magicLevel}</p>
        <p>Energy: {energy}</p>
        <p>Mana: {mana}</p>
        <div>
          <button onClick={handleTrain}>Train</button>
          <button onClick={handleRest}>Rest</button>
          <button onClick={handleCastSpell}>Cast Spell</button>
        </div>
      </div>
    </div>
  );
}

export default App;
