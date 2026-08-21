import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Logo + tagline */}
          <div>
            <div className="footer-logo">
              <Scale size={20} color="var(--gold)" />
              <span>Legalo</span>
            </div>
            <p className="footer-tagline">
              Making civic information easier to understand.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="footer-heading">Quick Links</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/rights-navigator">Rights Navigator</Link>
              <Link to="/rti-assistant">RTI Assistant</Link>
              <Link to="/scheme-finder">Scheme Finder</Link>
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className="footer-heading">Company</p>
            <div className="footer-links">
              <Link to="/">About</Link>
              <Link to="/">Privacy</Link>
            </div>
          </div>
        </div>

        <p className="footer-disclaimer">
          @2026 Legalo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
