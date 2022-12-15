import React from "react";
import * as buttoncss from "./css/button.css";
const Button = (props) => {
  return (
    <button className="btn" type="submit">
      {props.title}
    </button>
  );
};

export default Button;
