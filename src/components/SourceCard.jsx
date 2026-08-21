import { FileText } from "lucide-react";

// Shows one official source as a small card.
// For the hackathon demo we use placeholder source info,
// but the shape of this data makes it easy to plug in
// real government URLs later.
function SourceCard({ title, description }) {
  return (
    <div className="card source-card">
      <div className="source-icon">
        <FileText size={22} color="var(--gold)" />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <button className="btn btn-outline source-btn">View Source</button>
    </div>
  );
}

export default SourceCard;
