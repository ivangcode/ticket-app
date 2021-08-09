import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// Utilities.
import logo from "../images/logo.svg";
import "./styles/Navbar.css";

// Render component.
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Link className="Navbar__brand" to="/home">
          <img className="Navbar__brand-logo" src={logo} alt="logo" />
          {/* The span is used to change text properties */}
          <span className="fw-light">Platzi</span>
          <span className="fw-bold">Conf</span>
        </Link>
        <div className="d-flex justify-content-center Navbar__bar">
          <ul className="nav nav-pills flex-column flex-sm-row">
            <Link
              to="badges/new"
              className="flex-sm-fill text-sm-center nav-link active"
            >
              Start Now
            </Link>
            <Link
              to="/badges"
              className="flex-sm-fill text-sm-center nav-link"
            >
              List
            </Link>
            <Link className="flex-sm-fill text-sm-center nav-link">
              Social Media
            </Link>
            <Link className="flex-sm-fill text-sm-center nav-link">
              Account
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
