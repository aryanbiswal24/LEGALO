import { Link } from "react-router-dom";

// A simple reusable card used on the Home page "Features" section.
// It receives its content through props, so we can reuse it 4 times.
function FeatureCard({ icon, title, description, buttonText, linkTo }) {
  return (
    <div className="card feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo} className="btn btn-outline feature-btn">
        {buttonText}
      </Link>
    </div>
  );
}

export default FeatureCard;
