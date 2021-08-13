import React from "react";
// Components
import "./styles/PageError.css";

function PageError(props) {
  return <div className="PageError">{props.error.message} </div>;
}

export default PageError;
