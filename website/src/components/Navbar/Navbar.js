import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <form className="form-inline form-group">
          <a className="navbar-brand" id="navbar-text" href="/">
            Users
          </a>
        </form>
        <form className="form-inline"></form>
      </nav>
    </div>
  );
};

export default Navbar;
