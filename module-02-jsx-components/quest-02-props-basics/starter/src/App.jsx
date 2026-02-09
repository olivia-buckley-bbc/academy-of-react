import "./App.css";

// Wizard data
const wizards = [
  { id: 1, name: "Dixie Spiderwhomp", house: "Wisdom", level: 42 },
  { id: 2, name: "Spinstar Galbraticus", house: "Valor", level: 38 },
  { id: 3, name: "Ranger Marvel De-la-mode", house: "Mystery", level: 45 },
];

// TODO: Create a WizardCard component that accepts props: name, house, level
// function WizardCard({ name, house, level }) { ... }

function WizardCard({ name, house, level }) {
  return (
    <div className="wizard-card">
      <span className="wizard-name">
        <h2>{name}</h2>
      </span>
      <span className="wizard-info">{house}</span>
      <div className="wizard-info">
        <span className="wizard-info">Level:</span>
        <span className="wizard-info">{level}</span>
      </div>
    </div>
  );
}

// TODO: Create a Header component that accepts props: title, subtitle
// function Header({ title, subtitle }) { ... }

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header title="Wizard School" subtitle="Pupil List" />

      {/* TODO: Map over wizards and render a WizardCard for each */}
      <div className="wizard-list">
        {wizards.map((wizard) => (
          <WizardCard
            key={wizard.id}
            name={wizard.name}
            house={wizard.house}
            level={wizard.level}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
