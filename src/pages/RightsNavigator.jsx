import { useState } from "react";
import { FileCheck2, ArrowDown } from "lucide-react";
import ChatBox from "../components/ChatBox.jsx";
import SourceCard from "../components/SourceCard.jsx";


const actionSteps = [
  { number: "01", title: "Collect your documents" },
  { number: "02", title: "Contact the concerned party" },
  { number: "03", title: "Keep records" },
  { number: "04", title: "Explore the appropriate grievance process" },
];


const sources = [
  {
    title: "Government Information",
    description: "Official government source (placeholder for demo)",
  },
  {
    title: "Consumer & Tenant Guidelines",
    description: "Official government source (placeholder for demo)",
  },
];

function RightsNavigator() {
  // What the user typed in the textarea
  const [problemText, setProblemText] = useState("");

  // Selected language for the page (demo only has a few translated strings)
  const [language, setLanguage] = useState("English");

  // Whether to show the AI's first response
  const [showAnswer, setShowAnswer] = useState(false);

  // Stores the answer to the guided follow-up question
  const [agreementAnswer, setAgreementAnswer] = useState(null);

  // A tiny translation object for the demo, as requested in the brief
  const headingText = {
    English: "Tell us what happened.",
    Hindi: "हमें बताएं कि क्या हुआ।",
    Odia: "କଣ ଘଟିଛି ଆମକୁ କୁହନ୍ତୁ।",
    Bengali: "আমাদের বলুন কী ঘটেছে।",
  };

  // Runs when the user clicks "Understand My Problem"
  function handleUnderstandProblem() {
    setShowAnswer(true);
    setAgreementAnswer(null);
  }

  // Runs when the user picks Yes / No / Not Sure
  function handleAgreementAnswer(answer) {
    setAgreementAnswer(answer);
  }

  return (
    <div className="section">
      <div className="container narrow-container">
        <h1 className="page-heading">{headingText[language]}</h1>
        <p className="page-subheading">
          Describe your situation in your own words. Legalo will help you
          understand the general category and possible next steps.
        </p>

        {/* Input card */}
        <div className="card input-card">
          <textarea
            className="problem-textarea"
            placeholder={
              "Example:\nMy landlord has not returned my security deposit..."
            }
            value={problemText}
            onChange={(e) => setProblemText(e.target.value)}
            rows={6}
          />

          <div className="input-card-footer">
            <div className="language-field">
              <label>Language:</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Odia">Odia</option>
                <option value="Bengali">Bengali</option>
              </select>
            </div>

            <button
              className="btn btn-primary"
              onClick={handleUnderstandProblem}
            >
              Understand My Problem
            </button>
          </div>
        </div>

        {/* AI Response */}
        {showAnswer && (
          <div className="response-area">
            <ChatBox>
              <p className="chat-intro">We understand your situation.</p>

              <p className="chat-label">Category</p>
              <p className="chat-category">Tenant / Rental Issue</p>

              <p className="chat-label">Possible next steps</p>
              <ol className="chat-list">
                <li>Check your rental agreement.</li>
                <li>Keep payment records.</li>
                <li>Keep copies of your messages.</li>
                <li>Send a written request to the landlord.</li>
              </ol>

              <p className="chat-label">Documents you may need</p>
              <ul className="chat-doc-list">
                <li>
                  <FileCheck2 size={16} color="var(--green)" /> Rental
                  Agreement
                </li>
                <li>
                  <FileCheck2 size={16} color="var(--green)" /> Payment Proof
                </li>
                <li>
                  <FileCheck2 size={16} color="var(--green)" /> Communication
                  Records
                </li>
              </ul>
            </ChatBox>

            {/* Guided question */}
            <ChatBox>
              <p className="chat-question">
                Do you have a written rental agreement?
              </p>
              <div className="answer-buttons">
                {["Yes", "No", "Not Sure"].map((option) => (
                  <button
                    key={option}
                    className={
                      "btn btn-outline answer-btn" +
                      (agreementAnswer === option ? " answer-btn-active" : "")
                    }
                    onClick={() => handleAgreementAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </ChatBox>
          </div>
        )}

        {/* Action Plan - only shows after the guided question is answered */}
        {agreementAnswer && (
          <div className="action-plan">
            <h2 className="section-heading">Your Possible Next Steps</h2>

            <div className="timeline">
              {actionSteps.map((step, index) => (
                <div className="timeline-step" key={step.number}>
                  <div className="timeline-number">{step.number}</div>
                  <div className="timeline-title">{step.title}</div>
                  {index !== actionSteps.length - 1 && (
                    <ArrowDown size={18} color="var(--text-muted)" className="timeline-arrow" />
                  )}
                </div>
              ))}
            </div>

            {/* Official Sources */}
            <h2 className="section-heading" style={{ marginTop: "50px" }}>
              Official Sources
            </h2>
            <div className="grid-2">
              {sources.map((source) => (
                <SourceCard key={source.title} {...source} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightsNavigator;
