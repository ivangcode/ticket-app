import React from "react";

import "./styles/Header.css";
import astronauts from "../images/astronauts.svg";
import platziConf from "../images/platziconf-logo.svg";


const TITLE = 'PRINT YOUR BADGES';
const TEXT = 'The easiest way to manage your conference';

function Header() {
  return (
    <div className="row header">
      <div className="col-3 header__start">
          <img className="platziConf" src={platziConf} alt="" />
        <div className="header__getIn">
          <h1>{TITLE}</h1>
          <p>{TEXT}</p>
        </div>
        <button className="btn btn-primary">Start Now</button>
      </div>
      <div className="col-9 header__img">
        <img  className="astronauts" src={astronauts} alt="" />
      </div>
    </div>
  );
}

export default Header;
