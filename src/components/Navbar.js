import React from "react";
import logo from "../images/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid"></div>
        <a className="Navbar__brand" href="/">
          <img className="Navbar__brand-logo" src={logo} alt="logo" />
          {/* The span is used to change text properties */}
          <span className="fw-light">Platzi</span>
          <span className="fw-bold">Conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
