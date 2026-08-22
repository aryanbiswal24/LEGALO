import { Link } from "react-router-dom";
import {
  FileWarning,
  FolderKanban,
  HelpCircle,
  Shield,
  FileText,
  Landmark,
  Clipboard,
  User,
  Bot,
  BookOpenCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard.jsx";

// Simple arrays of data used to build the sections below with .map().
// Keeping content as data makes the JSX underneath much shorter.


const problems = [
  {
    icon: <FileWarning size={26} color="var(--gold)" />,
    title: "Complex Language",
    text: "Government documents can be difficult to understand.",
  },
  {
    icon: <FolderKanban size={26} color="var(--gold)" />,
    title: "Scattered Information",
    text: "Important information is often spread across websites and PDFs.",
  },
  {
    icon: <HelpCircle size={26} color="var(--gold)" />,
    title: "Unclear Process",
    text: "Citizens may know their problem but not know what to do next.",
  },
];

const features = [
  {
    icon: <Shield size={26} color="var(--gold)" />,
    title: "Rights Navigator",
    description: "Describe your problem and understand possible options.",
    buttonText: "Explore Rights",
    linkTo: "/rights-navigator",
  },
  {
    icon: <FileText size={26} color="var(--gold)" />,
    title: "RTI Assistant",
    description: "Turn a simple question into a structured RTI draft.",
    buttonText: "Draft RTI",
    linkTo: "/rti-assistant",
  },
  {
    icon: <Landmark size={26} color="var(--gold)" />,
    title: "Scheme Finder",
    description: "Find government schemes that may be relevant to you.",
    buttonText: "Find Schemes",
    linkTo: "/scheme-finder",
  },
  {
    icon: <Clipboard size={26} color="var(--gold)" />,
    title: "Form Assistant",
    description:
      "Answer simple questions and organize information for official forms.",
    buttonText: "Start Form",
    linkTo: "/rights-navigator",
  },
];

const recentActivity = [
  { icon: <FileText size={18} color="var(--gold)" />, text: "RTI Draft" },
  { icon: <Shield size={18} color="var(--gold)" />, text: "Consumer Issue" },
  { icon: <Landmark size={18} color="var(--gold)" />, text: "Scheme Search" },
];

function Home() {
  return (
    <div>
      {/* ===================== HERO SECTION ===================== */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Understand Your Rights. Know Your Next Step.</h1>
            <p>
              Legalo makes complicated civic and legal information simple,
              understandable and actionable.
            </p>
            <div className="hero-buttons">
              <Link to="/rights-navigator" className="btn btn-primary">
                Explore Your Rights
              </Link>
              <Link to="/rti-assistant" className="btn btn-outline">
                Try RTI Assistant
              </Link>
            </div>
          </div>

          {/* Legal illustration */}
          <div className="hero-illustration">
            <div className="legal-image-card">
              <img
                src="https://freeimage.host/i/CZttrzX"
                alt="Lady Justice and legal symbols"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM SECTION ===================== */}
      <section className="section" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <h2 className="section-heading">
            Government information shouldn't feel like a maze.
          </h2>
          <p className="section-subheading">
            Legalo clears the path from confusion to understanding.
          </p>

          <div className="grid-3">
            {problems.map((problem) => (
              <div className="card problem-card" key={problem.title}>
                <div className="problem-icon">{problem.icon}</div>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURES SECTION ===================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">What Legalo can help you do</h2>
          <p className="section-subheading">
            Four simple tools built to turn confusion into clear action.
          </p>

          <div className="grid-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DASHBOARD SECTION ===================== */}
      <section className="section" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="dashboard-card">
            <h2>Welcome to Legalo 👋</h2>

            <p className="dashboard-subheading">Quick Actions</p>
            <div className="dashboard-actions">
              <Link to="/rights-navigator" className="btn btn-primary">
                Ask About Your Rights
              </Link>
              <Link to="/rti-assistant" className="btn btn-outline">
                Draft RTI
              </Link>
              <Link to="/scheme-finder" className="btn btn-outline">
                Find a Scheme
              </Link>
            </div>

            <p className="dashboard-subheading">Recent Activity</p>
            <div className="dashboard-activity">
              {recentActivity.map((item) => (
                <div className="activity-item" key={item.text}>
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
