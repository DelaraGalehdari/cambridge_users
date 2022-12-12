import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <form className="form-inline form-group">
          <a className="navbar-brand" id="navbar-text" href="/">
            Users
          </a>
        </form>
        <form className="form-inline">
          {location.pathname !== "/" && (
            <div>
              <Link to="/" className="back">
                Back
              </Link>
            </div>
          )}
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
