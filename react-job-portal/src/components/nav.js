import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <div className="nav">
        <ul className="nav-links">
          <Link style={linkStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={linkStyle} to="/shortlisted">
            <li>Shortlisted</li>
          </Link>
          <Link style={linkStyle} to="/rejected">
            <li>Rejected</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
