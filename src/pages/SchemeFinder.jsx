import { useState } from "react";
import { Landmark } from "lucide-react";

// Mock scheme results shown after the user submits the form.
// In version 1 this is static data, not a real government API.
const mockSchemes = [
  {
    name: "Student Scholarship Support Scheme",
    reason: "May be relevant based on your education level and income range.",
    documents: "Income Certificate, Aadhaar Card, Marksheet",
  },
  {
    name: "Skill Development & Employment Scheme",
    reason: "May be relevant based on your occupation and age group.",
    documents: "Aadhaar Card, Residence Proof, Educational Certificate",
  },
  {
    name: "Small Enterprise Support Scheme",
    reason: "May be relevant if you are working or self-employed.",
    documents: "PAN Card, Business Proof, Bank Account Details",
  },
];

function SchemeFinder() {
  // Form fields, all stored with simple useState hooks
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [category, setCategory] = useState("Student");
  const [education, setEducation] = useState("");
  const [income, setIncome] = useState("");

  // Whether to show the mock results
  const [showResults, setShowResults] = useState(false);

  function handleFindSchemes() {
    setShowResults(true);
  }

  return (
    <div className="section">
      <div className="container narrow-container">
        <h1 className="page-heading">Scheme Finder</h1>
        <p className="page-subheading">
          Answer a few basic questions and see government schemes that may
          be relevant to you.
        </p>

        <div className="card">
          <div className="form-grid">
            <div className="form-field">
              <label>State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="e.g. West Bengal"
              />
            </div>

            <div className="form-field">
              <label>Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 22"
              />
            </div>

            <div className="form-field">
              <label>Occupation</label>
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="e.g. Student, Farmer, Shop Owner"
              />
            </div>

            <div className="form-field">
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Student</option>
                <option>Working</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-field">
              <label>Education Level</label>
              <input
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                placeholder="e.g. Undergraduate"
              />
            </div>

            <div className="form-field">
              <label>Income Range</label>
              <input
                type="text"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="e.g. Below 2.5 LPA"
              />
            </div>
          </div>

          <div className="step-actions">
            <button className="btn btn-primary" onClick={handleFindSchemes}>
              Find Relevant Schemes
            </button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div className="scheme-results">
            <h2 className="section-heading" style={{ marginTop: "50px" }}>
              Schemes That May Be Relevant
            </h2>

            <div className="scheme-list">
              {mockSchemes.map((scheme) => (
                <div className="card scheme-card" key={scheme.name}>
                  <div className="scheme-icon">
                    <Landmark size={22} color="var(--gold)" />
                  </div>
                  <h3>{scheme.name}</h3>

                  <p className="chat-label">Why it may be relevant</p>
                  <p>{scheme.reason}</p>

                  <p className="chat-label">Documents required</p>
                  <p>{scheme.documents}</p>

                  <button className="btn btn-outline scheme-btn">
                    View Official Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SchemeFinder;
