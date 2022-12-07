import React from "react";

const Button = (props) => {
  return (
    <button className="btn" type="submit">
      {props.title}
    </button>
  );
};

export default Button;
