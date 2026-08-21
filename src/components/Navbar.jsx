import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, Menu, X, ChevronDown } from "lucide-react";

// Simple list of nav links.
// Keeping this as an array makes it easy to add more pages later.
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rights Navigator", path: "/rights-navigator" },
  { name: "RTI Assistant", path: "/rti-assistant" },
  { name: "Scheme Finder", path: "/scheme-finder" },
];

function Navbar() {
  // Controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <Scale size={22} color="var(--gold)" />
          <span>Legalo</span>
        </Link>

        {/* Desktop links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side: language + get started */}
        <div className="navbar-right">
          <button className="lang-select">
            English <ChevronDown size={14} />
          </button>
          <Link to="/rights-navigator" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu (only shows when menuOpen is true) */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/rights-navigator"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
