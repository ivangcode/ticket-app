// Analog to createElement.
import React from "react";
// Analog to appendChild.
import ReactDOM from "react-dom";

// Pages.
// import BadgeNew from "./pages/BadgeNew";
import Badges  from "./pages/Badges";
// CSS files.
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

const container = document.getElementById("app");

// ReactDOM.render(__what__, __where__);
ReactDOM.render(<Badges />, container);
// We've settled the props in Badge.
