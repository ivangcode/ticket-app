import React from "react";
import { Link } from "react-router-dom";
// Utilities.
import logo from "../images/logo.svg";
import "./styles/Navbar.css";

// Render component.
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid"></div>
        <Link className="Navbar__brand" to="/home">
          <img className="Navbar__brand-logo" src={logo} alt="logo" />
          {/* The span is used to change text properties */}
          <span className="fw-light">Platzi</span>
          <span className="fw-bold">Conf</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;
