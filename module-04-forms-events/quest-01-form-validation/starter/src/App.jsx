import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    spellType: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.spellType) {
      newErrors.spellType = "Spell Specialisation is required";
    }
    if (!formData.role) {
      newErrors.role = "Role is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", spellType: "", role: "" });
      setErrors("");
    } else {
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app">
      <h1>Battle Registration</h1>
      <p>Sign up for the Wizarding War competition</p>
      {submitted && <div>Your registration is complete, good luck!</div>}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Wizard Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your wizard name"
            className={errors.name ? "error" : ""}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="spellType">Spell Specialisation *</label>
          <select
            id="spellType"
            name="spellType"
            value={formData.spellType}
            onChange={handleChange}
            className={errors.spellType ? "error" : ""}
          >
            <option value="">-- Select Spell Type --</option>
            <option value="fire">Fire Magic</option>
            <option value="ice">Ice Magic</option>
            <option value="lightning">Lightning Magic</option>
            <option value="dark">Dark Magic</option>
            <option value="light">Light Magic</option>
          </select>
          {errors.spellType && (
            <span className="error-message">{errors.spellType}</span>
          )}
        </div>
        <div className="form-group">
          <label>Battle Role *</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="attacker"
                name="role"
                value="attacker"
                checked={formData.role === "attacker"}
                onChange={handleChange}
              />
              <label htmlFor="attacker">Attacker</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="defender"
                name="role"
                value="defender"
                checked={formData.role === "defender"}
                onChange={handleChange}
              />
              <label htmlFor="defender">Defender</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="support"
                name="role"
                value="support"
                checked={formData.role === "support"}
                onChange={handleChange}
              />
              <label htmlFor="support">Support</label>
            </div>
          </div>
          {errors.role && <span className="error-message">{errors.role}</span>}
        </div>
        <button type="submit" className="submit-btn">
          Register for Battle
        </button>
      </form>
    </div>
  );
}

export default App;
