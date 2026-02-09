import "./App.css";

// Wizard data - same as Module 1
const wizard = {
  name: "Dixie Spiderwhomp",
  house: "Wisdom",
  level: 42,
  specialty: "Elemental Magic",
};

// TODO: Convert the Module 1 createElement code to JSX
//
// In Module 1, this was:
//   React.createElement("div", { className: "wizard-card" },
//     React.createElement("h1", { className: "wizard-name" }, wizard.name),
//     ...
//   )
//
// Convert it to JSX syntax like:
//   <div className="wizard-card">
//     <h1 className="wizard-name">{wizard.name}</h1>
//     ...
//   </div>

function StudentCard({ name, house, level, speciality }) {
  return (
    <div className="wizard-card">
      <h2>{name}</h2>
      <span className="wizard-info">{house}</span>
      <div className="wizard-info">
        <span className="wizard-info">Magic Level:</span>
        <span className="wizard-info">{level}</span>
      </div>
      <div className="wizard-info">
        <span className="wizard-info">Speciality:</span>
        <span className="wizard-info">{speciality}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    // Your JSX code here
    <div>
      <StudentCard
        name={wizard.name}
        house={wizard.house}
        magicLevel={` ${wizard.level}`}
        speciality={` ${wizard.specialty}`}
      />
    </div>
  );
}

export default App;
