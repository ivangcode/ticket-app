import React from "react";

import "./styles/Header.css";
import astronauts from "../images/astronauts.svg";
import platziConf from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

const TITLE = "PRINT YOUR BADGES";
const TEXT = "The easiest way to manage your conference";

function Header() {
  return (
    <div className="header">
      <div className="header__start">
        <img className="platziConf" src={platziConf} alt="" />
        <div className="header__getIn">
          <h1>{TITLE}</h1>
          <p>{TEXT}</p>
        </div>
        <Link to="/badges" className="header__btn">
          Start Now
        </Link>
      </div>
      <div className="header__img">
        <img className="astronauts" src={astronauts} alt="" />
      </div>
      <div className="social-media">
        <a href="https://facebook.com/areyouivan/" alt="facebook">
          <img src={facebook} alt="facebook-logo" className="facebook" />
        </a>
        <a
          href="https://twitter.com/areyouivan/"
          alt="twitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter-logo" className="twitter" />
        </a>
        <a
          href="https://instagram.com/areyouivan/"
          alt="instagram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={instagram}
            alt="instagram-logo"
            className="instagram"
            rel="noopener noreferrer"
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
