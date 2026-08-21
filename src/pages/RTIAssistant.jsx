import { useState } from "react";
import { Copy, Pencil, Check } from "lucide-react";

function RTIAssistant() {
  // Which step of the 3-step form we are on
  const [step, setStep] = useState(1);

  // Step 1: what information the user wants
  const [infoRequested, setInfoRequested] = useState("");

  // Step 2: simple details about where/when
  const [stateName, setStateName] = useState("");
  const [district, setDistrict] = useState("");
  const [department, setDepartment] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  // Step 3: the generated draft text, and whether it's being edited
  const [draftText, setDraftText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Builds the mock RTI draft from the form values.
  // This is plain JavaScript string building, no external library needed.
  function generateDraft() {
    const draft = `APPLICATION FOR INFORMATION

To,
The Public Information Officer
${department || "[Department Name]"}, ${district || "[District]"}, ${stateName || "[State]"}

Subject: Request for information regarding ${infoRequested || "[your topic]"}

Information Requested:

1. Details regarding: ${infoRequested || "[your topic]"}
2. Relevant records, files or documents for the period: ${timePeriod || "[time period]"}
3. Any other information reasonably connected to the above request.

Applicant Details:

Name: [Your Name]
Address: [Your Address]
Contact: [Your Contact Number]`;

    setDraftText(draft);
    setStep(3);
  }

  // Copies the draft text to the clipboard
  function handleCopy() {
    navigator.clipboard.writeText(draftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="section">
      <div className="container narrow-container">
        <h1 className="page-heading">RTI Assistant</h1>
        <p className="page-subheading">
          Answer a few simple questions and get a structured RTI draft you
          can review and copy.
        </p>

        {/* Step indicator */}
        <div className="step-indicator">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={
                "step-dot" + (step === num ? " step-dot-active" : "")
              }
            >
              {num}
            </div>
          ))}
        </div>

        {/* Step 1: What information do you want? */}
        {step === 1 && (
          <div className="card">
            <h3>What information do you want?</h3>
            <textarea
              className="problem-textarea"
              rows={5}
              placeholder={
                "I want information about road construction\nexpenditure in my municipality."
              }
              value={infoRequested}
              onChange={(e) => setInfoRequested(e.target.value)}
            />
            <div className="step-actions">
              <button
                className="btn btn-primary"
                onClick={() => setStep(2)}
                disabled={infoRequested.trim() === ""}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Location and department details */}
        {step === 2 && (
          <div className="card">
            <h3>Tell us a little more</h3>

            <div className="form-grid">
              <div className="form-field">
                <label>State</label>
                <input
                  type="text"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  placeholder="e.g. West Bengal"
                />
              </div>

              <div className="form-field">
                <label>District</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="e.g. Kolkata"
                />
              </div>

              <div className="form-field">
                <label>Department (if known)</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="e.g. Municipal Corporation"
                />
              </div>

              <div className="form-field">
                <label>Time Period</label>
                <input
                  type="text"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  placeholder="e.g. Jan 2024 - Dec 2024"
                />
              </div>
            </div>

            <div className="step-actions">
              <button className="btn btn-outline" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="btn btn-primary" onClick={generateDraft}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: The generated draft */}
        {step === 3 && (
          <div className="card">
            <div className="draft-header">
              <h3>Your RTI Draft</h3>
              <div className="draft-actions">
                <button
                  className="btn btn-outline draft-btn"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Pencil size={15} /> {isEditing ? "Done" : "Edit"}
                </button>
                <button className="btn btn-primary draft-btn" onClick={handleCopy}>
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Copied" : "Copy Draft"}
                </button>
              </div>
            </div>

            {isEditing ? (
              <textarea
                className="draft-textarea"
                rows={16}
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)}
              />
            ) : (
              <pre className="draft-preview">{draftText}</pre>
            )}

            <div className="step-actions">
              <button className="btn btn-outline" onClick={() => setStep(2)}>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RTIAssistant;
