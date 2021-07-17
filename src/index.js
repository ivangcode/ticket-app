// Analog to createElement.
import React from "react";
// Analog to appendChild.
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

// ReactDOM.render(__what__, __where__);
// We've settled the props in Badge.
ReactDOM.render(<BadgeNew />, container);
